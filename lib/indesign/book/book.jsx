/**
 * Module with books functions
 * @namespace Book
 * @memberOf IN
 * @author Bastien Eichenberger
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

        /**
         * @todo add check if the book is already open do not open it a second time
         */
        return app.open(my_file);

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
    }

    return my;

})(IN.Book || {});