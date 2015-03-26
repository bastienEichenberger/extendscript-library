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
    that.ui.pbar = that.ui.add('progressbar', undefined, 0, 100);
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


