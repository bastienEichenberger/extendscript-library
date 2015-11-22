(function (xml_file_path, results_folder) {

    try {

        //@include "../../../../../lib/photoshop/photoshop-lib.jsx"
        PS.Config.init();

        SCRIPT_FOLDER = new File($.fileName).parent;

        // open a document
        var doc = PS.Document.open(SCRIPT_FOLDER + '/testArtLayer.psd');

        // add a curves to document
        var to = PS.Layerset.add('fieldset1', doc);
        var curves = PS.Layer.ArtLayer.get_adjustment('CURVES');
        var levels = PS.Layer.ArtLayer.get_adjustment('LEVELS');

        PS.Layer.ArtLayer.add_adjustment_layer('contraste', levels, to);
        PS.Layer.ArtLayer.add_adjustment_layer('gradation', curves, to);
        PS.Layer.ArtLayer.add_adjustment_layer('dominante', curves, to);

        PS.Document.save_to_TIFF(results_folder + '/testArtLayer.tif');

        PS.Document.close(SaveOptions.DONOTSAVECHANGES, doc);

    }

    catch (ex) {
        alert('file: ' + ex.fileName + '\n message: ' + ex.message + '\n line: ' + ex.line);
    }

}).apply(this, [].slice.apply(this.arguments));

