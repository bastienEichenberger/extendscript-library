/**
 * Module with illustrator document functions
 * @namespace Document
 * @memberOf IL
 * @author Bastien Eichenberger
 */
IL.Document = (function (my) {

    /**
     * Function to open an illustrator document
     * @param file_path
     * @return {Document}
     */
    my.open = function (file_path) {

        var my_file = new File(file_path);

        if (!my_file.exists) {
            throw {
                name: 'InvalidArgumentError',
                message: 'The file do not exist',
                fileName: $.fileName,
                lineNumber: $.line
            };
        }
        return app.open(my_file);
    }

    /**
     * Function to close the active Illustrator document or the document passed as parameter
     * @function close
     * @memberOf IL.Document
     * @param {SaveOptions} save_options SAVECHANGES, DONOTSAVECHANGES, PROMPTTOSAVECHANGES
     * @param {Illustrator Document} [document] the document to save
     */
    my.close = function (save_options, document) {

        if (document === undefined) {
            var document = app.activeDocument;
        }

        if (save_options !== SaveOptions.SAVECHANGES
            && save_options !== SaveOptions.DONOTSAVECHANGES
            && save_options !== SaveOptions.PROMPTTOSAVECHANGES) {
            throw {
                name: 'InvalidArgumentError',
                message: 'you must enter a valid value for the param save_option [NO, ASK, YES]',
                fileName: $.fileName,
                lineNumber: $.line
            };
        }
        document.close(save_options);
    }

    /**
     * Function to export a document as SVG
     * @param {string} file_path
     * @param {ExportOptionsSVG} options
     * @param {Document} [document] the document to export
     */
    my.export_as_SVG = function (file_path, options, document) {

        if (document === undefined) {
            var document = app.activeDocument;
        }

        if (options === undefined) {
            var options = new ExportOptionsSVG();
        }

        var my_file = new File(file_path);

        document.exportFile(my_file, ExportType.SVG, options);
    }

    return my;

})(IL.Document || {});
