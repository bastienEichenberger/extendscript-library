(function (results_folder) {

    try {
        //@include "../../../../../lib/indesign/indesign-lib.jsx"

        var SCRIPT_FOLDER, source;

        IN.Config.init();

        SCRIPT_FOLDER = new File($.fileName).parent;

        if (app.version < 9) {
            grep_doc_path = 'grepCS6/grep_document.indd';
        }
        else {
            grep_doc_path = 'grepCC2015/grep_document.indd';
        }

        source = IN.Document.open(SCRIPT_FOLDER + grep_doc_path);

        IN.Document.Grep.delete_double_standard_spaces();

        var doc = app.activeDocument;
        var txt_file = new File(results_folder + '/grep.txt');

        for(var index = 0; index < doc.stories.length; index++){

            current_story = doc.stories.item(index);
            current_story.exportFile(ExportFormat.taggedText, txt_file);

        }

        IN.Document.close(SaveOptions.NO, source);

    }
    catch (ex) {
        alert('file: ' + ex.fileName + '\n message: ' + ex.message + '\n line: ' + ex.line);
    }
    finally {
        IN.Application.restore();
    }


}).apply(this, [].slice.apply(this.arguments));