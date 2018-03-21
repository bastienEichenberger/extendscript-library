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
            IN.Document.open(book.bookContents[i].fullName);
        }

    }

    /**
     * Function to make a package of a book
     * @param directories_path_str
     * @param [book]
     * @param [options]
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

        var current_date;
        var folder_package;
        var current_folder;
        var app_version;
        var default_options;
        var my_file;
        var options = options || {};

        current_date = new Date();
        app_version = parseFloat(app.version);
        folder_package = new Folder(directories_path_str);

        if (!options.to) {

            current_date = new Date();
            folder_package = new Folder(directories_path_str);

            if (folder_package.exists === false) {
                folder_package.create();
            }

            current_folder = new Folder(folder_package + "/" + current_date.year_month_day() + "_" + current_date.hours_minutes_seconds());
            current_folder.create();

        }


        // set default options
        default_options = {
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
            useDocumentHyphenationExceptionsOnly: false, // only in CC 2018

            creatingReport: false,
            versionComments: undefined,
            forceSave: true
        };

        // if an object options is provided, replace each key by the new one
        if (options !== undefined) {

            for (var key in options) {

                if (default_options.hasOwnProperty(key)) {

                    default_options[key] = options[key];

                }

            }

        }

        // Some parameters change between versions
        // before CC
        if (app_version < 10) {

            book.packageForPrint(
                default_options.to,
                default_options.copyingFonts,
                default_options.copyingLinkedGraphics,
                default_options.copyingProfiles,
                default_options.updatingGraphics,
                default_options.includingHiddenLayers,
                default_options.ignorePreflightErrors,
                default_options.creatingReport,
                default_options.versionComments,
                default_options.forceSave
            );

        }

        // CC 2017
        if (app_version >= 10 && app_version <= 12) {

            book.packageForPrint(
                default_options.to,
                default_options.copyingFonts,
                default_options.copyingLinkedGraphics,
                default_options.copyingProfiles,
                default_options.updatingGraphics,
                default_options.includingHiddenLayers,
                default_options.ignorePreflightErrors,
                default_options.creatingReport,
                default_options.includeIdml,
                default_options.includePdf,
                default_options.pdfStyle,
                default_options.versionComments,
                default_options.forceSave
            );

        }

        // CC 2018
        if (app_version >= 13) {

            book.packageForPrint(
                default_options.to,
                default_options.copyingFonts,
                default_options.copyingLinkedGraphics,
                default_options.copyingProfiles,
                default_options.updatingGraphics,
                default_options.includingHiddenLayers,
                default_options.ignorePreflightErrors,
                default_options.creatingReport,
                default_options.includeIdml,
                default_options.includePdf,
                default_options.pdfStyle,
                default_options.useDocumentHyphenationExceptionsOnly,
                default_options.versionComments,
                default_options.forceSave
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