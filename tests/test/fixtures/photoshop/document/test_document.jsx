(function (xml_file_path, results_folder) {

    try {

        //@include "../../../../../lib/photoshop/photoshop-lib.jsx"

        // create a new document
        PS.Application.create_doc(100, 100, 72, 'document_to_test', NewDocumentMode.RGB);

        // get the resolution
        var resolution = PS.Document.get_resolution();

        // save it as PSD
        PS.Document.save_to_PSD(results_folder + '/test.psd');

        // save it as TIFF
        PS.Document.save_to_TIFF(results_folder + '/test.tif');

        // close it
        PS.Document.close(SaveOptions.DONOTSAVECHANGES);

        // read the xml file
        var content = H.XML.read(xml_file_path);
        // add the node
        var root = new XML(content);
        var unit_test_resolution = <unit-test id='resolution'>{resolution}</unit-test>;
        root.appendChild(unit_test_resolution);
        // update xml file
        H.XML.write(xml_file_path, root);
    }

    catch (ex) {
        alert('file: ' + ex.fileName + '\n message: ' + ex.message + '\n line: ' + ex.line);
    }

}).apply(this, [].slice.apply(this.arguments));

