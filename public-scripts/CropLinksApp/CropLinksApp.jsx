/**
 * This script allow you to crop all pictures of an InDesign Document
 * All images are cropped with the same dimensions of the indesign block
 * These images are set to 100% in the layout, the resize is done without resampling
 * All modification are done on a new document save on the desktop crop/timestamp/document
 * @author Bastien Eichenberger
 * @supported Mac OS X InDesign CS6
 * @version 1.0
 * @requires {@link IN}
 * @requires {@link PS}
 * @throws {Error} if a link is used more than 1 times
 * @throws {Error} if a link is not proportional
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
    CONSTANTS.FOLDER_OUTPUT = new Folder('~/Desktop/Crop');



    /***********************************************
     * INIT THE SCRIPT
     ***********************************************/

        // init the library config
    IN.Config.init();

    // set the logger to debug
    H.Log.init(CONSTANTS.FOLDER_LOG, 0);

    //@include "includes/controller.jsx"
    //@include "includes/view.jsx"


    if (!app.documents.length > 0) {
        alert('Please open a document before you run the script');
        exit();
    }

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
     * @property {Document} doc
     * @property {Collection} array_of_layers
     */
    var GLOBALS = {};

    GLOBALS.doc = app.activeDocument;




    /***********************************************
     * Controller
     ***********************************************/

    // generate the view
    var view = view();

    // generate the controller
    var controller = controller(view);

    var new_doc = controller.copy_and_close(CONSTANTS.FOLDER_OUTPUT, GLOBALS.doc);

    controller.crop_links(CONSTANTS.FOLDER_SCRIPT, new_doc);

    alert('script finished');



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
