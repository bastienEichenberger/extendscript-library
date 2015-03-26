/**
 * Function to generate the controller
 * @param {Object} view the view
 * @return {Object} the controller
 */
var controller = function(view) {

    /***********************************************
     * Public
     ***********************************************/

    var that = {};

    that.view = view;
    that.window_bar;

    /**
     * Function to display the progress bar
     */
    that.display_progress_bar = function () {
        var w = new Window('palette');
        w.pbar = w.add('progressbar', undefined, 0, that.view.sections.items.length);
        w.pbar.preferredSize.width = 300;
        that.window_bar = w;
        w.show();
    }

    /**
     * Function to active only the selected layers
     */
    that.do_something = function () {

        for (var i = 0; i < that.view.sections.items.length; i++) {
            $.sleep(1000);
            // update the progress bar
            that.window_bar.pbar.value = i + 1;
        }
    }

    /***********************************************
     * PRIVATE
     ***********************************************/

    /**
     * Function to init the controller
     */
    function init() {
    }

    init();
    return that;

};

