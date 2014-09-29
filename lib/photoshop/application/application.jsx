/**
 * @name PS.Application
 * @class <b>PS.Application</b> a module with Photoshop function</br>
 * @author Bastien Eichenberger
 */
PS.Application = (function (my) {

    my.init = function () {
        app.preferences.rulerUnits = Units.MM;
    }

    my.silent = function () {
        app.displayDialogs = DialogModes.NO;
    }

    my.restore = function () {
        app.displayDialogs = DialogModes.ALL;
    }

    /**
     * Function to create a new photoshop document
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
     * @name PS.Application#open_image
     * @function
     * @param {{file_path: string}} obj a JSON object
     */
    my.open_image = function (obj) {
        var file_path = decodeURI(obj.file_path);
        var img_file = new File(file_path);
        var ps_doc = app.open(img_file);
        return ps_doc;
    }

    return my;
})(PS.Application || {});