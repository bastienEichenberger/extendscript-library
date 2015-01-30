(function (results_folder) {

    try {
        //@include "../../../../../lib/indesign/indesign-lib.jsx"

        var SCRIPT_FOLDER, source;

        IN.Config.init();

        SCRIPT_FOLDER = new File($.fileName).parent;

        source = IN.Document.open(SCRIPT_FOLDER + '/grep_document.indd');

        IN.Document.Grep.delete_double_standard_spaces();


        /*
        for(myCounter = 0; myCounter < app.activeDocument.stories.length; myCounter++){
            myStory = app.activeDocument.stories.item(myCounter);
            myID = myStory.id;
            switch(myExportFormat){
                case 0:
                    myFormat = ExportFormat.textType;
                    myExtension = ".txt"
                    break;
                case 1:
                    myFormat = ExportFormat.RTF;
                    myExtension = ".rtf"
                    break;
                case 2:
                    myFormat = ExportFormat.taggedText;
                    myExtension = ".txt"
                    break;
            }
            myFileName = "StoryID" + myID + myExtension;
            myFilePath = myFolder + "/" + myFileName;
            myFile = new File(myFilePath);
            myStory.exportFile(myFormat, myFile);
        }*/

        IN.Document.close(SaveOptions.NO, source);

    }
    catch (ex) {
        alert('file: ' + ex.fileName + '\n message: ' + ex.message + '\n line: ' + ex.line);
    }
    finally {
        IN.Application.restore();
    }


}).apply(this, [].slice.apply(this.arguments));