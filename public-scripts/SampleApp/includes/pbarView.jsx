var pbarView = function (max) {

    /***********************************************
     * Public
     ***********************************************/

    var that = {};

    that.ui = new UI('progress', undefined, undefined, 'palette');

    that.pbar = that.ui.progress_bar(max);

    /***********************************************
     * PRIVATE
     ***********************************************/

    function init () {

    }


    init();
    return that;

}