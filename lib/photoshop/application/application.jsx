/**
 * Module with photoshop application functions
 * @namespace Application
 * @memberOf PS
 * @author Bastien Eichenberger
 */
PS.Application = (function (my) {

    /**
     * Function to init the Application module
     * @function init
     * @memberOf PS.Application
     */
    my.init = function () {
        app.preferences.rulerUnits = Units.MM;
    }

    /**
     * Function to not block the script during execution (no dialog box)
     * @function silent
     * @memberOf PS.Application
     */
    my.silent = function () {
        app.displayDialogs = DialogModes.NO;
    }

    /**
     * Function to restore the preferences when the script is finished
     * @function restore
     * @memberOf PS.Application
     * @todo restore all parameters
     */
    my.restore = function () {
        app.displayDialogs = DialogModes.ALL;
    }

    /**
     * Function to create a new photoshop document
     * @function create_doc
     * @memberOf PS.Application
     * @param {Number} width
     * @param {Number} height
     * @param {Number} resolution
     * @param {String} name
     * @param {NewDocumentMode} mode
     */
    my.create_doc = function (width, height, resolution, name, mode) {
        var doc = app.documents.add(width, height, resolution, name, mode);
    }

    /**
     * Function to open a file with Photoshop
     * @function open_image
     * @memberOf PS.Application
     * @param {String} file_path the file_path of the file
     */
    my.open_image = function (file_path) {
        var file_path = decodeURI(file_path);
        var img_file = new File(file_path);
        var ps_doc = app.open(img_file);
        return ps_doc;
    }

    return my;
})(PS.Application || {});