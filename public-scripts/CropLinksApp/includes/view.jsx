/**
 * Function to build the view
 * @return {Object} the view object with all ui elements
 */
var view = function () {

    /***********************************************
     * Public
     ***********************************************/

    var that = {};

    // progress bar
    that.ui = new Window('palette');
    // pbar lenght = document links length
    that.ui.pbar = that.ui.add('progressbar', undefined, 0, GLOBALS.doc.links.length);
    that.ui.pbar.preferredSize.width = 300;


    /***********************************************
     * PRIVATE
     ***********************************************/


    /**
     * Function to init ui components
     */
    function init () {
        that.ui.show();
    }

    init();
    return that;

}


