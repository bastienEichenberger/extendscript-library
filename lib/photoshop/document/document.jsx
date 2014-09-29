/**
 * @name PS.Document
 * @class <b>PS.Document</b> a module with Photoshop functions to resize and crop documents</br>
 * These functions can be used from InDesign with the {@link module:../../common/utils/gateway.jsx} module
 * @author Bastien Eichenberger
 */
PS.Document = (function (my) {


    /**
     * Function to save the active document as PSD
     * @name PS.Document#save_to_PSD
     * @function
     * @param {{file_path: string}} obj a JSON object
     */
    my.save_to_PSD = function (file_path) {
        var file_path = decodeURI(file_path);
        psdSaveOption = new PhotoshopSaveOptions();
        psdSaveOption.embedColorProfile = true;
        app.activeDocument.saveAs(new File(file_path), psdSaveOption, true, Extension.LOWERCASE);
    }

    /**
     * Function to save the active document TIFF
     * @name PS.Document#save_to_TIFF
     * @function
     * @param {{file_path: string}} obj a JSON object
     */
    my.save_to_TIFF = function (file_path) {
        var file_path = decodeURI(file_path);
        tiffSaveOption = new TiffSaveOptions();
        tiffSaveOption.embedColorProfile = true;
        app.activeDocument.saveAs(new File(file_path), tiffSaveOption, true, Extension.LOWERCASE);
    }


    /**
     * Function to close a photoshop document
     * @param save_options SaveOptions enum types [SAVECHANGES, DONOTSAVECHANGES, PROMPTTOSAVECHANGES]
     */
    my.close = function (save_options) {
        if (save_options !== SaveOptions.SAVECHANGES && save_options !== SaveOptions.DONOTSAVECHANGES  && save_options !== SaveOptions.PROMPTTOSAVECHANGES) {
            throw new Error('you must enter a valid value for the param save_option [SAVECHANGES, DONOTSAVECHANGES, PROMPTTOSAVECHANGES]');
        }
        app.activeDocument.close(save_options);
    }

    /**
     * Function to get the resolution of the active Photoshop document
     * @name PS.Document#get_resolution
     * @function
     * @returns {Number} the resolution of the document
     */
    my.get_resolution = function () {
        var resolution = app.activeDocument.resolution;
        return resolution;
    }

    return my;
})(PS.Document || {});