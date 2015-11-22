/**
 * Module with Photoshop functions deal with artLayers</br>
 * @namespace ArtLayer
 * @memberOf PS.Layer
 * @author Bastien Eichenberger
 */
PS.Layer.ArtLayer = (function (my) {

    /**
     * Type of adjustment
     * @type
     * {{
     * LEVELS: {id: string},
     * CURVES: {id: string},
     * COLOR_BALANCE: {id: string},
     * BRIGHTNESS_CONTRAST: {id: string},
     * HUE_SATURATION: {id: string},
     * SELECTIVE_COLOR: {id: string},
     * CHANNEL_MIXER: {id: string},
     * GRADIENT_MAP: {id: string},
     * PHOTO_FILTER: {id: string},
     * INVERT: {id: s
     * tring},
     * THRESHOLD: {id: string},
     * POSTERIZE: {id: string}
     * }}
     */
    var ADJUSTMENT_TYPE = {
        LEVELS: {id: 'Lvls'},
        CURVES: {id: 'Crvs'},
        COLOR_BALANCE: {id: 'ClrB'},
        BRIGHTNESS_CONTRAST: {id: 'BrgC'},
        HUE_SATURATION: {id: 'HStr'},
        SELECTIVE_COLOR: {id: 'SlcC'},
        CHANNEL_MIXER: {id: 'ChnM'},
        GRADIENT_MAP: {id: 'GdMp'},
        PHOTO_FILTER: {id: 'photoFilter'},
        INVERT: {id: 'Invr'},
        THRESHOLD: {id: 'Thrs'},
        POSTERIZE: {id: 'Pstr'}
    };

    /**
     * Function to create an adjustment layer in Photoshop
     * This function has been build with a Photoshop Listener plugin
     * @param {ADJUSTMENT_TYPE} type
     * @return {boolean} true if the layer has been added
     * @todo rewrite variables to make it readable
     */
    function create_adjustment_layer (type) {

        var idMk = charIDToTypeID("Mk  ");
        var descriptor = new ActionDescriptor();

        var idnull = charIDToTypeID("null");
        var ref1 = new ActionReference();
        var idAdjL = charIDToTypeID("AdjL");
        ref1.putClass(idAdjL);

        descriptor.putReference(idnull, ref1);

        var idUsng = charIDToTypeID("Usng");
        var desc4 = new ActionDescriptor();
        var idType = charIDToTypeID("Type");
        var desc5 = new ActionDescriptor();
        var idpresetKind = stringIDToTypeID("presetKind");
        var idpresetKindType = stringIDToTypeID("presetKindType");
        var idpresetKindDefault = stringIDToTypeID("presetKindDefault");
        desc5.putEnumerated(idpresetKind, idpresetKindType, idpresetKindDefault);

        var idCrvs = charIDToTypeID(type.id);

        desc4.putObject(idType, idCrvs, desc5);
        var idAdjL = charIDToTypeID("AdjL");
        descriptor.putObject(idUsng, idAdjL, desc4);
        return executeAction(idMk, descriptor, DialogModes.NO);


    }

    // ---------------------------- PUBLIC FUNCTIONS ----------------------------

    /**
     * Function to add an adjustment layer
     * @param {string} name
     * @param {ADJUSTMENT_TYPE} type
     * @param {LayerSet} to
     */
    my.add_adjustment_layer = function (name, type, to) {


        try {
            // add the layer
            create_adjustment_layer(type);

            // layer layer added is the new layer
            var my_layer = app.activeDocument.activeLayer;

            my_layer.name = name;

            if (to !== undefined) {
                my_layer.moveToEnd(to);
            }

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


    /**
     * Function to get an adjustment type
     * @param {string} type [LEVELS, CURVES, COLOR_BALANCE, BRIGHTNESS_CONTRAST, HUE_SATURATION
     * SELECTIVE_COLOR, CHANNEL_MIXER, GRADIENT_MAP, PHOTO_FILTER, PHOTO_FILTER, INVERT, THRESHOLD, POSTERIZE]
     */
    my.get_adjustment = function (type) {

        if (!ADJUSTMENT_TYPE.hasOwnProperty(type)) {

            throw {
                name: 'InvalidArgumentError',
                message: 'The property ' + type + 'do not exist',
                fileName: $.fileName,
                lineNumber: $.line
            };

        }

        return ADJUSTMENT_TYPE[type];
    }


    return my;

})(PS.Layer.ArtLayer || {});