/**
 * Sample Application structure
 * @author Bastien Eichenberger
 * @supported Mac OS X InDesign CS6
 * @version 1.0
 */

//@target "indesign"
//@include "../../lib/indesign/indesign-lib.jsx"


try {


    /***********************************************
     * CONSTANTS
     ***********************************************/

    /**
     * @type {Object}
     * @property {Folder} FOLDER_SCRIPT
     * @property {Folder} FOLDER_LOG
     * @property {Folder} FOLDER_DATA
     * @property {Folder} FOLDER_OUTPUT
     */
    var CONSTANTS = {};

    CONSTANTS.FOLDER_SCRIPT = new File($.fileName).parent;
    CONSTANTS.FOLDER_LOG = new Folder(CONSTANTS.FOLDER_SCRIPT + '/log');
    CONSTANTS.FOLDER_DATA = new Folder(CONSTANTS.FOLDER_SCRIPT + '/data');
    CONSTANTS.FOLDER_OUTPUT = new Folder('~/Desktop/Sample');



    /***********************************************
     * INIT THE SCRIPT
     ***********************************************/

    // init the library config
    IN.Config.init();

    // set the logger to debug
    H.Log.init(CONSTANTS.FOLDER_LOG, 0);

    //@include "includes/sampleController.jsx"
    //@include "includes/pbarView.jsx"
    //@include "includes/sampleView.jsx"


    if (!app.documents.length > 0) {
        alert('Please open a document before you run the script');
        exit();
    }

    /**
     * add this part to the library
     */
    // this script run on InDesign version CS5-CS6
    if (!(parseFloat(app.version) >= 7 && parseFloat(app.version) < 9)) {
        alert('This script works on InDesign 8.0 (CS6), 7.5 (CS5.5), 7.0 (CS5) \n' +
            'Install the correct version and try again'
        );
        exit();
    }

    if (!CONSTANTS.FOLDER_OUTPUT.exists) {
        CONSTANTS.FOLDER_OUTPUT.create();
    }

    /***********************************************
     * GLOBALS
     ***********************************************/

    /**
     * @type {Object}
     * @property {Document} doc, the current document
     */
    var GLOBALS = {};

    GLOBALS.DOC = app.activeDocument;



    /***********************************************
     * MVC
     ***********************************************/

    // generate the view
    var view = sampleView();

    // generate the controller
    var controller = sampleController(view);

    view.ui.show();


}
catch (ex) {
    H.Log.errorAlert(
        'file: ' + ex.fileName +
        '\n name: ' + ex.name +
        '\n message: ' + ex.message +
        '\n line: ' + ex.line
    );
}
finally {
    IN.Application.restore();
}
