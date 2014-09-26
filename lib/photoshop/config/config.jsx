/**
 * @name Lib.Config
 * @class <b>Lib.Config</b> a module with the config
 * @author Bastien Eichenberger
 */
PS.Config = (function (my) {

    my.init = function () {
        PS.Application.silent();
        PS.Application.init();
    }


    return my;
})(PS.Config || {});