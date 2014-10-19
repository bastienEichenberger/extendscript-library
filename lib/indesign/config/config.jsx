/**
 * Module with the config of the indesign library
 * @namespace Config
 * @memberOf IN
 * @author Bastien Eichenberger
 */
IN.Config = (function (my) {

    /**
     * Function to init the indesign library
     * @function init
     * @memberOf IN.Config
     */
    my.init = function () {
        IN.Application.silent();
        IN.Application.init();
    }

    return my;
})(IN.Config || {});