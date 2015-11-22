(function (xml_file_path, results_folder) {

    try {

        //@include "../../../../../lib/photoshop/photoshop-lib.jsx"
        PS.Config.init();

        SCRIPT_FOLDER = new File($.fileName).parent;

        // open a document
        var doc = PS.Document.open(SCRIPT_FOLDER + '/testLayerset.psd');

        //add layersets
        var my_layerset = PS.Layerset.add('group1');
        PS.Layerset.add('group2', my_layerset);

        // add a text layer
        var to_merge = PS.Layerset.add('group3');

        PS.Layer.add('myLayer', LayerKind.TEXT, to_merge);

        // merge layerset
        PS.Layerset.merge('group3');

        PS.Document.save_to_TIFF(results_folder + '/testLayerset.tif');

        PS.Document.close(SaveOptions.DONOTSAVECHANGES, doc);

    }

    catch (ex) {
        alert('file: ' + ex.fileName + '\n message: ' + ex.message + '\n line: ' + ex.line);
    }

}).apply(this, [].slice.apply(this.arguments));

