/**
 * This script allow you to import a layer into an other InDesign document
 * @author Bastien Eichenberger
 * @supported Mac OS X InDesign (versions 7-11 CS5 to CC)
 */


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

    CONSTANTS.VERSION = 2.0;
    CONSTANTS.FOLDER_SCRIPT = new File($.fileName).parent;
    CONSTANTS.FOLDER_LOG = new Folder(CONSTANTS.FOLDER_SCRIPT + '/log');

    /***********************************************
     * INIT THE SCRIPT
     ***********************************************/

    // init the library config
    IN.Config.init();

    // set the logger to debug
    H.Log.init(CONSTANTS.FOLDER_LOG, 0);

    if ($.locale === 'fr_FR') {
        //@include "includes/translations/FR.jsx"
    }
    else {
        //@include "includes/translations/EN.jsx"
    }

    //@include "includes/mainController.jsx"
    //@include "includes/mainView.jsx"

    if (app.documents.length === 0 || app.documents.length > 1) {
        alert(TRANS.INIT.OPEN);
        exit();
    }

    /***********************************************
     * GLOBALS
     ***********************************************/


    /***********************************************
     * Controller
     ***********************************************/

    var view = mainView();

    // generate the controller
    var controller = mainController(view);

    // display the UI
    if (view.ui.show() === 1) {

        controller.run();

        alert('script finished');
    }
    else {
        alert('The Script have been forced to cancel');
        exit();
    }


}
catch (ex) {

    var error_message = 'file: ' + ex.fileName +
        '\n name: ' + ex.name +
        '\n message: ' + ex.message +
        '\n line: ' + ex.line;

    H.Log.error(error_message);
    alert(error_message);

}
finally {
    IN.Application.restore();
}
