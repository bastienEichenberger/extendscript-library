/**
 * Module with Photoshop functions to resize and crop documents</br>
 * These functions can be used from InDesign with the {@link H.Utils.Gateway} module
 * @namespace Document
 * @memberOf PS
 * @author Bastien Eichenberger
 */
PS.Document = (function (my) {


    /**
     * Function to save the active document as PSD
     * @function save_to_PSD
     * @memberOf PS.Document
     * @param {String} file_path the new document path
     */
    my.save_to_PSD = function (file_path) {
        var file_path = decodeURI(file_path);
        psdSaveOption = new PhotoshopSaveOptions();
        psdSaveOption.embedColorProfile = true;
        app.activeDocument.saveAs(new File(file_path), psdSaveOption, true, Extension.LOWERCASE);
    }

    /**
     * Function to save the active document TIFF
     * @function save_to_TIFF
     * @memberOf PS.Document
     * @param {String} file_path the new document path
     */
    my.save_to_TIFF = function (file_path) {
        var file_path = decodeURI(file_path);
        tiffSaveOption = new TiffSaveOptions();
        tiffSaveOption.embedColorProfile = true;
        app.activeDocument.saveAs(new File(file_path), tiffSaveOption, true, Extension.LOWERCASE);
    }


    /**
     * Function to close the active photoshop document
     * @function close
     * @memberOf PS.Document
     * @param {SaveOptions} save_options SaveOptions.SAVECHANGES, SaveOptions.DONOTSAVECHANGES, SaveOptions.PROMPTTOSAVECHANGES
     */
    my.close = function (save_options) {
        if (save_options !== SaveOptions.SAVECHANGES && save_options !== SaveOptions.DONOTSAVECHANGES  && save_options !== SaveOptions.PROMPTTOSAVECHANGES) {
            throw new Error('you must enter a valid value for the param save_option [SAVECHANGES, DONOTSAVECHANGES, PROMPTTOSAVECHANGES]');
        }
        app.activeDocument.close(save_options);
    }

    /**
     * Function to get the resolution of the active Photoshop document
     * @function get_resolution
     * @memberOf PS.Document
     * @returns {Number} the resolution of the document
     */
    my.get_resolution = function () {
        var resolution = app.activeDocument.resolution;
        return resolution;
    }

    return my;
})(PS.Document || {});