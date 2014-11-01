(function (xml_file_path) {

    try {
        //@include "../../../../../lib/helper/helper-lib.jsx"
        H.Config.init();

        // call an other app and return a string "name of the app who called the function + hello + world"
        // wait some seconds to be sure that everything would be ok if we process a long function
        var photoshop_hello = H.Gateway.call_app (
            'photoshop',
            function(app_name, a, b) {
                var counter = 100;
                while (counter) {
                    $.sleep(10);
                    counter--;
                }
                return app_name + ' return ' + a + ' ' + b;
            },
            [app.name, 'hello', 'world'],
            100
        );


        // read the xml file
        var content = H.XML.read(xml_file_path);

        // add the node
        var root = new XML(content);

        // the id and the name of the current app
        var app_name = app.name;
        app_name = app_name.replace(/\s+/g, '_').toLowerCase(); // replace all spaces by _

        // add the node
        var root = new XML(content);
        var unit_test_gateway = <unit-test id={ 'gateway_' + app_name }>{photoshop_hello}</unit-test>;
        root.appendChild(unit_test_gateway);

        // update xml file
        H.XML.write(xml_file_path, root);

    }
    catch (ex) {
        alert('file: ' + ex.fileName + '\n name: ' + ex.name + '\n message: ' + ex.message + '\n line: ' + ex.line);
    }


}).apply(this, [].slice.apply(this.arguments));
