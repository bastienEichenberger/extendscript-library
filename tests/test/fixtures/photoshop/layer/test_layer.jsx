(function (xml_file_path, results_folder) {

    try {

        //@include "../../../../../lib/photoshop/photoshop-lib.jsx"
        PS.Config.init();

        SCRIPT_FOLDER = new File($.fileName).parent;

        // open a document
        var doc = PS.Document.open(SCRIPT_FOLDER + '/testLayer.psd');

        // add a text layers
        PS.Layer.add('myLayer', LayerKind.TEXT);
        PS.Layer.add('myLayer1', LayerKind.TEXT);
        PS.Layer.add('myLayer2', LayerKind.TEXT);


        PS.Layer.remove_by(function (layer) {
            if (layer.visible && !layer.isBackgroundLayer) {
                return true;
            }
        });

        var has_background = PS.Layer.has_background(doc);


        PS.Document.save_to_TIFF(results_folder + '/testLayer.tif');

        PS.Document.close(SaveOptions.DONOTSAVECHANGES, doc);


       /*********************************************
        *
        * Read and update the xml file
        *
        **********************************************/

        var content = H.XML.read(xml_file_path);

        // add the node
        var root = new XML(content);


        var unit_test_has_background = new XML("<unit-test id='has-background'>" + has_background + "</unit-test>");
        root.appendChild(unit_test_has_background);


        // update xml file
        H.XML.write(xml_file_path, root);


    }

    catch (ex) {

        alert('file: ' + ex.fileName + '\n message: ' + ex.message + '\n line: ' + ex.line);

    }

}).apply(this, [].slice.apply(this.arguments));

