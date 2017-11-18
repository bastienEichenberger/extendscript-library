/**
 * Module with Photoshop functions to resize
 * These functions can be used from InDesign with the {@link H.Utils.Gateway} module
 * @namespace Resize
 * @memberOf PS.Document
 * @author Bastien Eichenberger
 */
PS.Document.Resize = (function (my) {


    /**
     * Function to resize an image in Photoshop
     * @function resampling
     * @memberOf PS.Document.Resize
     * @param {Object} options
     * @param {number} options.resolution, the resolution in pixcel per inch
     * @param {ResampleMethod} options.resample_method [ResampleMethod.BICUBIC, ResampleMethod.BICUBICSHARPER,
     * ResampleMethod.BICUBICSMOOTHER,ResampleMethod.BILINEAR, ResampleMethod.NEARESTNEIGHBOR, ResampleMethod.NONE]
     * @param {number} options.horizontal_scale
     * @param {number} options.vertical_scale
     * @param {Photoshop Document} [doc = app.activeDocument]
     * @example
     * {
     *     resolution: number,
     *     resample_method: ResampleMethod.BICUBICSHARPER,
     *     horizontal_scale: number,
     *     vertical_scale: number
     * }
     */
    my.resampling = function (options, document) {

        var width, height, options;

        // transtype the resample method string to an object ResampleMethod.MyMethod
        options.resample_method = eval(options.resample_method);


        if (document === undefined) {
            var document = app.activeDocument;
        }

        if (options.resample_method !== ResampleMethod.NONE) {

            if (!options.horizontal_scale || !options.vertical_scale) {
                throw {
                    name: 'InvalidArgumentError',
                    message: 'you must enter a valid value for the parameters horizontal_scale and vertical_scale',
                    fileName: $.fileName,
                    lineNumber: $.line
                };
            }

            width = document.width * (options.horizontal_scale / 100);
            height = document.height * (options.vertical_scale / 100);

            return document.resizeImage(width, height, options.resolution, options.resample_method);
        }

        return document.resizeImage(undefined, undefined, options.resolution, options.resample_method);

    }

    return my;

})(PS.Document.Resize || {});