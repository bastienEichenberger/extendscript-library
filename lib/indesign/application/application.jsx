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
     * @memberOf IN.Application
     */
    my.init = function () {
        user_preferences = app.preferences;
    }

    /**
     * Function to not block the script during execution (no dialog box)
     * @function silent
     * @memberOf IN.Application
     */
    my.silent = function () {
        app.scriptPreferences.userInteractionLevel = UserInteractionLevels.NEVER_INTERACT;
    }

    /**
     * Function to activ all dialog
     * @function talk
     * @memberOf IN.Application
     */
    my.talk = function () {
        app.scriptPreferences.userInteractionLevel = UserInteractionLevels.INTERACT_WITH_ALL;
    }

    /**
     * Function to restore the preferences when the script is finished
     * @function restore
     * @memberOf IN.Application
     */
    my.restore = function () {
        app.preferences = user_preferences;

    }

    /**
     * Function to check if a joboption is correctly installed
     * @function is_joboption_defined
     * @memberOf IN.Application
     * @param name
     * @return the joboption object or false if the job option isn't installed
     */
    my.is_joboption_defined = function (name) {

        var my_joboption = app.pdfExportPresets.itemByName(name);

        try {

            if (my_joboption.name) {

                return my_joboption;

            }

        } catch(ex) {

            return false;

        }

    }


    return my;
})(IN.Application || {});