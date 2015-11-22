/**
 * Module with Photoshop functions deal with layers</br>
 * @namespace Layer
 * @memberOf PS
 * @author Bastien Eichenberger
 */
PS.Layer = (function (my) {

    /**
     * Function to add a layer to a Document
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