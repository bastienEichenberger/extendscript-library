(function (xml_file_path) {

    try {
        //@include "../../../../../lib/helper/helper-lib.jsx"

        // call an other app and return a string "name of the app who called the function + hello + world"
        var photoshop_hello = H.Gateway.call_app (
            'photoshop',
            function(app_name, a, b) {
                return app_name + ' return ' + a + ' ' + b;
            },
            [app.name, 'hello', 'world'],
            10
        );


        // read the xml file
        var content = H.XML.read(xml_file_path);

        // add the node
        var root = new XML(content);

        // the id is gateway_adobe_photoshop
        var my_id = 'gateway ' + app.name;
        my_id = my_id.replace(/\s+/g, '_').toLowerCase(); // replace all spaces

        // add the node
        var root = new XML(content);
        var unit_test_gateway = <unit-test id={my_id}>{photoshop_hello}</unit-test>;
        root.appendChild(unit_test_gateway);

        // update xml file
        H.XML.write(xml_file_path, root);

    }
    catch (ex) {
        alert('file: ' + ex.fileName + '\n name: ' + ex.name + '\n message: ' + ex.message + '\n line: ' + ex.line);
    }


}).apply(this, [].slice.apply(this.arguments));
