(function (xml_file_path, results_folder) {

    try {
        //@include "../../../../../lib/photoshop/photoshop-lib.jsx"
        PS.Config.init();

        // open a document
        PS.Application.open(results_folder + '/test.psd');

        // get the name
        var name_of_document = app.activeDocument.name;

        // close the document
        PS.Document.close(SaveOptions.DONOTSAVECHANGES);

        // read the xml file
        var content = H.XML.read(xml_file_path);

        // add the node
        var root = new XML(content);
        var unit_test_open_image = <unit-test id='open_image'>{name_of_document}</unit-test>;
        root.appendChild(unit_test_open_image);

        // update xml file
        H.XML.write(xml_file_path, root);
    }
    catch (ex) {
        alert('file: ' + ex.fileName + '\n message: ' + ex.message + '\n line: ' + ex.line);
    }


}).apply(this, [].slice.apply(this.arguments));