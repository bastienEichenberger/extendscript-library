/**
 * Module with Photoshop functions deal with artLayers</br>
 * @namespace ArtLayer
 * @memberOf PS.Layer
 * @author Bastien Eichenberger
 */
PS.Layer.ArtLayer = (function (my) {

    var AJUSTMENT_LAYERS = {
        LEVELS: {name: "levels", id: 'Lvls'},
        CURVES: {name: "curves", id: 'Crvs'},
        COLOR_BALANCE: {name: "colorBalance", id: 'ClrB'},
        BRIGHTNESS_CONTRAST: {name: "brightnessContrast", id: 'BrgC'},
        HUE_SATURATION: {name: "hueSaturation", id: 'HStr'},
        SELRECTIVE_COLOR: {name: "selectiveColor", id: 'SlcC'},
        CHANNEL_MIXER: {name: "channelMixer", id: 'ChnM'},
        GRADIENT_MAP: {name: "gradientMap", id: 'GdMp'},
        PHOTO_FILTER: {name: "photoFilter", id: 'photoFilter'},
        INVERT: {name: "invert", id: 'Invr'},
        THRESHOLD: {name: "threshold", id: 'Thrs'},
        POSTERIZE: {name: "posterize", id: 'Pstr'}
    };

    function create_descriptor (info) {

        var desc = new ActionDescriptor();
        var ref = new ActionReference();

        ref.putClass(cTID('AdjL'));
        desc.putReference(cTID('null'), ref);

        var adesc = new ActionDescriptor();
        var id = (info.id.length == 4 ? cTID(info.id) : sTID(info.id));

        adesc.putClass(cTID('Type'), id);
        desc.putObject(cTID('Usng'), cTID('AdjL'), adesc);

        return desc;

    }

    my.get_ajustment = function (name) {
        return AJUSTMENT_LAYERS[name];
    }
    /**
     *
     * @param {AJUSTMENT_LAYERS} info
     * @param aldesc
     * @return {*}
     */
    my.add_adjustment_layer = function (info, aldesc) {

        var desc = create_descriptor(info);

        try {

            return executeAction(cTID('Mk  '), desc, DialogModes.NO);

        } catch (ex) {

            throw {
                name: 'Error',
                message: 'Unexpected Error',
                fileName: $.fileName,
                lineNumber: $.line
            };
        }
    }

    /**
     * Function to add a layer to a Document
     * @param {LayerKind} layer_kind, the type of the layer (TEXT, NORMAL)
     * @param {Document|LayerSet} [obj = app.activeDocument] the obj which contains the new layer
     * @return {ArtLayer} layer the added layer
     * @toto add control the layer is background or not
     */
    my.add_layer = function (name, layer_kind, obj) {

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
     * @todo
     */
    my.merge = function () {
        var root = H.XML.read(xml_file_path);
        var fieldsets = root.child(CONSTANTS.XML_NODE_MERGE).children();

        for (var i = 0; i < fieldsets.length(); i++) {

            // get the location as URI (group1/group2)
            var location = fieldsets[i].toString();

            // build an array with each layerset name
            var layersets = location.split('/');

            try {

                var current_grp = doc.layerSets.getByName(layersets[0]);
                var index = 1;

                // select the last group to merge
                while (index < layersets.length) {
                    current_grp = current_grp.layerSets.getByName(layersets[index]);
                    index++;
                }

                current_grp.merge();
            }
            catch (ex) {
                /**
                 * @todo log that the file do not follow the layerset pattern
                 */
            }

        }
    }


    return my;

})(PS.Layer.ArtLayer || {});