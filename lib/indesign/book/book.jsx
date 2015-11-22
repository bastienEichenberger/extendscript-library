/**
 * Module with books functions
 * @namespace Book
 * @memberOf IN
 * @author Bastien Eichenberger
 * @requires {@link IN.Document}
 */
IN.Book = (function (my) {

    /**
     * Function to open a book file .indb
     * @param {string} file_path
     * @return {Book} book
     */
    my.open = function (file_path) {

        var my_file = new File(file_path);

        if (!my_file.exists) {
            throw {
                name: 'InvalidArgumentError',
                message: 'The Book do not exist',
                fileName: $.fileName,
                lineNumber: $.line
            };
        }

        try {
            return app.open(my_file);
        }
        catch  (ex) {
            throw {
                name: 'InvalidArgumentError',
                message: 'The Book is already open',
                fileName: $.fileName,
                lineNumber: $.line
            };
        }



    }

    /**
     * Function to close a book
     * @param save_options
     * @param document
     */
    my.close = function (save_options, book) {

        if (book === undefined) {
            try {
                var book = app.activeBook;
            }
            catch (ex) {
                throw {
                    name: 'InvalidArgumentError',
                    message: 'No book were found, the parameter book is not correct',
                    fileName: $.fileName,
                    line: $.line
                };
            }
        }

        if (save_options !== SaveOptions.NO
            && save_options !== SaveOptions.ASK
            && save_options !== SaveOptions.YES) {

            throw {
                name: 'InvalidArgumentError',
                message: 'you must enter a valid value for the param save_option [NO, ASK, YES]',
                fileName: $.fileName,
                lineNumber: $.line
            };
        }
        book.close(save_options);
    }

    /**
     * Function to open all documents of a book
     * @param book
     */
    my.openAll = function (book) {

        if (book === undefined) {
            try {
                var book = app.activeBook;
            }
            catch (ex) {
                throw {
                    name: 'InvalidArgumentError',
                    message: 'No book is open',
                    fileName: $.fileName,
                    lineNumber: $.line
                };
            }
        }

        if (!book.isValid) {
            throw {
                name: 'InvalidArgumentError',
                message: 'The Book is not valid',
                fileName: $.fileName,
                lineNumber: $.line
            };
        }

        // open all doc
        for (var i = 0; i < book.bookContents.length; i++) {
            /**
             * @todo find a way to limit inter module dependency with a sandbox
             * check if the module existe or load it
             */
            IN.Document.open(book.bookContents[i].fullName);
        }

    }

    /**
     * Function to make a package of a book
     * @param directories_path_str
     * @param book
     * @param options
     * @return {string}
     */
    my.package = function (directories_path_str, book, options) {

        if (book === undefined) {
            try {
                var book = app.activeBook;
            }
            catch (ex) {
                throw {
                    name: 'InvalidArgumentError',
                    message: 'No book were found, the parameter book is not correct',
                    fileName: $.fileName,
                    line: $.line
                };
            }
        }

        var current_date = new Date();
        var folder_package = new Folder(directories_path_str);

        if (folder_package.exists === false) {
            folder_package.create();
        }

        var current_folder = new Folder(folder_package + "/" + current_date.year_month_day() + "_" + current_date.hours_minutes_seconds());
        current_folder.create();

        var options = options || {
                to: current_folder,
                copyingFonts: true,
                copyingLinkedGraphics: true,
                copyingProfiles: false,
                updatingGraphics: true,
                includingHiddenLayers: false,
                ignorePreflightErrors: true,

                includeIdml: false, // only in CC
                includePdf: false, // only in CC
                pdfStyle: undefined, // only in CC

                creatingReport: true,
                versionComments: undefined,
                forceSave: true
            };

        /**
         *  bool packageForPrint (to: File, copyingFonts: bool, copyingLinkedGraphics: bool, copyingProfiles: bool, updatingGraphics: bool,
         *  includingHiddenLayers: bool, ignorePreflightErrors: bool, creatingReport: bool[, versionComments: string][, forceSave: bool=false])
         */

        // There is 3 new parameters in CC
        if (app.version >= 10){
            book.packageForPrint(
                options.to,
                options.copyingFonts,
                options.copyingLinkedGraphics,
                options.copyingProfiles,
                options.updatingGraphics,
                options.includingHiddenLayers,
                options.ignorePreflightErrors,
                options.creatingReport,
                options.includeIdml,
                options.includePdf,
                options.pdfStyle,
                options.versionComments,
                options.forceSave
            );
        }
        else {
            book.packageForPrint(
                options.to,
                options.copyingFonts,
                options.copyingLinkedGraphics,
                options.copyingProfiles,
                options.updatingGraphics,
                options.includingHiddenLayers,
                options.ignorePreflightErrors,
                options.creatingReport,
                options.versionComments,
                options.forceSave
            );
        }

        if (!File(current_folder + "/" + book.name).exists) {
            throw {
                name: 'Error',
                message: 'Something has gone wrong and the package for print file do not exist \n' +
                'Please check if the document is saved before. The document cannot used uninstalled external modules',
                fileName: $.fileName,
                line: $.line
            };
        }

        return current_folder + "/" + book.name;
    }


    /**
     * Function to export a book as PDF
     * @param {Book} book the book object to export
     * @param {String} file_path the file path of the PDF to generate
     * @param {string} preset_name the name of the PDF preset
     * @param {array} [documents] an array with BookContent Object to export
     */
    my.export_as_PDF = function (file_path, preset_name, book, documents) {

        if (book === undefined) {
            var book = app.activeBook;
        }

        var my_file = new File(file_path);
        var export_preset = app.pdfExportPresets.item(preset_name);

        if (!book.isValid) {
            throw {
                name: 'InvalidArgumentError',
                message: 'The Book is not valid',
                fileName: $.fileName,
                lineNumber: $.line
            };
        }

        if (!export_preset.isValid) {
            throw {
                name: 'InvalidArgumentError',
                message: 'The argument preset_name ' + preset_name + ' does not exist',
                fileName: $.fileName,
                line: $.line
            };
        }

        book.exportFile(ExportFormat.pdfType, my_file, false, export_preset, documents);

        if (!my_file.exists) {
            throw {
                name: 'Error',
                message: 'Something has gone wrong and the export book file do not exist \n' +
                'Please check if the book is in the correct version',
                fileName: $.fileName,
                line: $.line
            };
        }

    }

    return my;

})(IN.Book || {});