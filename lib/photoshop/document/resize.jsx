/**
 * @name PS.Resize
 * @class <b>PS.Resize</b> a module with Photoshop functions to resize and crop documents</br>
 * These functions can be used from InDesign with the {@link module:../../common/utils/gateway.jsx} module
 * @author Bastien Eichenberger
 */
PS.Document.Resize = (function (my) {


    /**
     * Function to resize an image in photoshop
     * @name PS.Document.Resize#resampling
     * @function
     * @param
     * {{
     *      file_path : string,
     *      horizontal_scale : number,
     *      vertical_scale : number,
     *      resolution : number,
     *      resample_method : ResampleMethod
     *  }} obj a JSON object
     */
    my.resampling = function (obj) {
        var file_path = decodeURI(obj.file_path);
        var horizontal_scale = obj.horizontal_scale;
        var vertical_scale = obj.vertical_scale;
        var resolution = obj.resolution;
        var resample_method = obj.resample_method;
        var doc_width = ps_doc.width * (horizontal_scale / 100);
        var doc_height = ps_doc.height * (vertical_scale / 100);

        app.activeDocument.resizeImage(doc_width, doc_height, resolution, resample_method);
        app.activeDocument.save();
        app.activeDocument.close();
    }

    return my;
})(PS.Document.Resize || {});