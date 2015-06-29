var pbarView = function (max) {


    var that = {};

    /***********************************************
     * Public
     ***********************************************/

    that.ui = new UI('progress', undefined, undefined, 'palette');

    that.pbar = that.ui.progress_bar(max);

    /***********************************************
     * PRIVATE
     ***********************************************/


    return that;

}