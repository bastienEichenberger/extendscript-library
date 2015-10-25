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
     * @param {Photoshop Document} ps_doc
     * @param {Number} horizontal_scale
     * @param {Number} vertical_scale
     * @param {Number} [resolution] if the ResampleMethod is NONE the resolution is not required
     * @param {ResampleMethod} resample_method BICUBIC, BICUBICSHARPER, BICUBICSMOOTHER, BILINEAR, NEARESTNEIGHBOR, NONE
     */
    my.resampling = function (ps_doc, horizontal_scale, vertical_scale, resolution, resample_method) {

        var doc_width = ps_doc.width * (horizontal_scale / 100);
        var doc_height = ps_doc.height * (vertical_scale / 100);

        var resample_method = eval(resample_method);

        if (resample_method === ResampleMethod.NONE) {
            ps_doc.resizeImage(undefined, undefined, resolution, resample_method);
        }
        else{
            ps_doc.resizeImage(doc_width, doc_height, resolution, resample_method);
        }

    }

    return my;
})(PS.Document.Resize || {});