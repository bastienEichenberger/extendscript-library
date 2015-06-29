(function (results_folder) {


    try {
        //@include "../../../../../lib/illustrator/illustrator-lib.jsx"

        SCRIPT_FOLDER = new File($.fileName).parent;

        IL.Config.init();


        IL.Document.open(SCRIPT_FOLDER + '/SVG_document.ai');

        IL.Document.export_as_SVG(results_folder + '/test_SVG.svg');

        IL.Document.close(SaveOptions.DONOTSAVECHANGES);


    }
    catch (ex) {
        alert('file: ' + ex.fileName + '\n message: ' + ex.message + '\n line: ' + ex.line);
    }
    finally {
        //IL.Application.restore();
    }


}).apply(this, [].slice.apply(this.arguments));