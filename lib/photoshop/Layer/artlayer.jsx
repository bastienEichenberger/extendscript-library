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
    var _ADJUSTMENT_TYPE = {
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
     * @function create_adjustment_layer
     * @memberOf PS.Layer.ArtLayer
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
     * @function add_adjustment
     * @memberOf PS.Layer.ArtLayer
     * @param {string} name
     * @param {ADJUSTMENT_TYPE} type
     * @param {LayerSet} to
     */
    my.add_adjustment = function (name, type, to) {

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
     * Function to get an adjustment type
     * @function get_adjustment
     * @memberOf PS.Layer.ArtLayer
     * @param {string} type [LEVELS, CURVES, COLOR_BALANCE, BRIGHTNESS_CONTRAST, HUE_SATURATION
     * SELECTIVE_COLOR, CHANNEL_MIXER, GRADIENT_MAP, PHOTO_FILTER, PHOTO_FILTER, INVERT, THRESHOLD, POSTERIZE]
     */
    my.get_adjustment = function (type) {

        if (!_ADJUSTMENT_TYPE.hasOwnProperty(type)) {

            throw {
                name: 'InvalidArgumentError',
                message: 'The property ' + type + 'do not exist',
                fileName: $.fileName,
                lineNumber: $.line
            };

        }

        return _ADJUSTMENT_TYPE[type];
    }

    return my;

})(PS.Layer.ArtLayer || {});