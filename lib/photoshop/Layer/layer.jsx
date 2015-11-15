/**
 * Module with Photoshop functions deal with layers</br>
 * @namespace Layer
 * @memberOf PS
 * @author Bastien Eichenberger
 */
PS.Layer = (function (my) {

    my.copy = function () {

    }

    my.merge_all = function () {

    }

    /**
     * Function to delete non visible layers and layerSets
     * @param {Document} doc the doc to process
     */
    function deleteNonVisibleLayers (doc) {

        var layers = doc.layers;

        for (var i = 0; i < layers.length; i++) {
            var layer = layers[i];
            if (!layer.visible) {
                layer.remove();
                i--;
            }
        }

    }


    return my;

})(PS.Layer || {});