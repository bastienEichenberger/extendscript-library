/**
 * Module with the config of the photoshop library
 * @namespace Config
 * @memberOf PS
 * @author Bastien Eichenberger
 */
PS.Config = (function (my) {

    /**
     * Function to init the photoshop library
     * @function init
     * @memberOf PS.Config
     */
    my.init = function () {
        PS.Application.silent();
        PS.Application.init();
    }


    return my;
})(PS.Config || {});