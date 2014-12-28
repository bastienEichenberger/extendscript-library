/**
 * Module with photoshop application functions
 * @namespace Application
 * @memberOf PS
 * @author Bastien Eichenberger
 */
PS.Application = (function (my) {

    /**
     * A collection of preferences objects
     * @private
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
        app.preferences.rulerUnits = Units.MM;
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