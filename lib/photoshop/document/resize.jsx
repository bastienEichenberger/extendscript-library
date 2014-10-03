/**
 * Module with Photoshop functions to resize
 * These functions can be used from InDesign with the {@link H.Utils.Gateway} module
 * @namespace Resize
 * @memberOf PS.Document
 * @author Bastien Eichenberger
 */
PS.Document.Resize = (function (my) {


    /**
     * Function to resize an image in photoshop
     * @function resampling
     * @memberOf PS.Document.Resize
     * @param {String} file_path
     * @param {Number} horizontal_scale
     * @param {Number} vertical_scale
     * @param {Number} resolution
     * @param {ResampleMethod} resample_method
     */
    my.resampling = function (file_path, horizontal_scale, vertical_scale, resolution, resample_method) {
        var file_path = decodeURI(file_path);
        var doc_width = ps_doc.width * (horizontal_scale / 100);
        var doc_height = ps_doc.height * (vertical_scale / 100);

        app.activeDocument.resizeImage(doc_width, doc_height, resolution, resample_method);
        app.activeDocument.save();
        app.activeDocument.close();
    }

    return my;
})(PS.Document.Resize || {});