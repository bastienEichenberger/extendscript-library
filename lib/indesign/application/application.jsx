/**
 * Module with indesign application functions
 * @namespace Application
 * @memberOf IN
 * @author Bastien Eichenberger
 */
IN.Application = (function (my) {

    /**
     * A collection of preferences objects.
     * @type {*}
     */
    var user_preferences;

    /**
     * Function to init the Application module
     * @function init
     * @memberOf PS.Application
     */
    my.init = function () {
        user_preferences = app.preferences;
    }

    /**
     * Function to not block the script during execution (no dialog box)
     * @function silent
     * @memberOf PS.Application
     */
    my.silent = function () {
        app.displayDialogs = DialogModes.NO;
    }

    /**
     * Function to restore the preferences when the script is finished
     * @function restore
     * @memberOf PS.Application
     */
    my.restore = function () {
        app.preferences = user_preferences;

    }


    return my;
})(PS.Application || {});