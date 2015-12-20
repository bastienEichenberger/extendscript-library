/**
 * Module with Photoshop functions deal with layers</br>
 * @namespace Layer
 * @memberOf PS
 * @author Bastien Eichenberger
 */
PS.Layer = (function (my) {

    /**
     * Function to get a layer by name, return the first element of the collection with the provided name
     * @function get
     * @memberOf PS.Layer
     * @param {string} name the name of the layer
     * @param {Document} [document = app.activeDocument]
     * @return {Layer} layer the object
     * @throws {Error} throw an Exception if the layer do not exist
     */
    my.get = function (name, document) {

        if (document === undefined) {
            var document = app.activeDocument;
        }

        return document.layers.getByName(name);

    }

    /**
     * Function to check if the document contents a background layer
     * @function has_background
     * @memberOf PS.Layer
     * @param {Document} [document = app.activeDocument]
     * @return {Boolean} true if the last layer is the background layer
     */
    my.has_background = function (document) {

        if (document === undefined) {
            var document = app.activeDocument;
        }

        var last_layer = document.layers[document.layers.length-1]

        return last_layer.isBackgroundLayer;
    }

    /**
     * Function set a layer as background layer
     * @function set_background
     * @memberOf PS.Layer
     * @param {Layer} [layer = last_layer] the layer to set as background layer. By default the last layer of the document is used
     * @param {Document} [document = app.activeDocument]
     */
    my.set_background = function (layer, document) {

        if (document === undefined) {
            var document = app.activeDocument;
        }

        if (layer === undefined) {
            var layer = document.layers[document.layers.length-1];
        }

        layer.isBackgroundLayer = true;

    }

    /**
     * Function to copy a layer
     * @function copy
     * @memberOf PS.Layer
     * @param {Layer} layer
     * @param {object} [target] the options of duplication
     * @param {Document | LayerSet} target.destination
     * @param {ElementPlacement} target.placement [ElementPlacement.PLACEATEND, ElementPlacement.PLACEAFTER, ElementPlacement.PLACEBEFORE]
     * @param {Document} [document = app.activeDocument]
     */
    my.copy = function (layer, target, document) {

        if (document === undefined) {
            var document = app.activeDocument;
        }

        if (target !== undefined) {
            return layer.duplicate(target.destination, target.placement);
        }

        return layer.duplicate();

    }


    /**
     * Function to add a layer to a Document
     * @function add
     * @memberOf PS.Layer
     * @param {LayerKind} layer_kind, the type of the layer (TEXT, NORMAL)
     * @param {Document|LayerSet} [obj = app.activeDocument] the obj which contains the new layer
     * @return {ArtLayer} layer the added layer
     * @toto add control the layer is background or not
     */

    my.add = function (name, layer_kind, obj) {

        if (obj === undefined) {
            var obj = app.activeDocument;
        }

        if (layer_kind !== LayerKind.TEXT
            && layer_kind !== LayerKind.NORMAL) {
            throw {
                name: 'InvalidArgumentError',
                message: 'you must enter a valid value for the param layer_kind [TEXT]',
                fileName: $.fileName,
                lineNumber: $.line
            };
        }

        var layer = obj.artLayers.add();

        layer.kind = layer_kind;
        layer.name = name;

        return layer;

    }


    /**
     * Function to remove layers by a test function
     * @function remove_by
     * @memberOf PS.Layer
     * @param {function} test a function which return true if the layer must be deleted
     * @param document
     */
    my.remove_by = function (test, document) {

        if (document === undefined) {
            var document = app.activeDocument;
        }

        var layers = document.layers;

        for (var i = 0; i < layers.length; i++) {

            var layer = layers[i];

            if (test.apply(null, [layer])) {

                try {
                    layer.remove();
                    i--;
                }
                catch (ex) {
                    throw {
                        name: 'InvalidArgumentError',
                        message: 'The layer: ' + layer.name + 'cannot be deleted. Please check if this layer is a background layer',
                        fileName: $.fileName,
                        lineNumber: $.line
                    };
                }

            }
        }
    }


    return my;

})(PS.Layer || {});