/**
 * @class GroupContainer class to build a new group, a group contains n control element
 * @param {PanelContainer} panel
 * @param {string} title
 * @param {Array} [bounds] an array with coordinates [x, y, width, height]
 * @param {Object} [properties] an object with properties { key : value, key : value }
 * @constructor
 * @requires {@link H.Utils}
 */
function GroupContainer (panel, title, bounds, properties) {

    // check if the optionals parameters are corrects
    var properties = properties || {};
    var bounds = bounds || undefined;

    this.group = panel.add('group', bounds, title);
    this.group = this.group.merge(properties);

    var that = this;

    /**
     * Function to add an event
     * @private
     * @param {Object} element an ui element
     * @param {Object} event_obj and object with property { name : 'eventName', fn : function}
     * @returns {Object} element the element
     */
    function add_event (element, event_obj) {
        if (event_obj && event_obj.hasOwnProperty('name') && event_obj.hasOwnProperty('fn')) {
            element.addEventListener(event_obj.name, event_obj.fn);
        }
        else {
            throw {
                name: 'InvalidArgumentError',
                message: 'the object event must contains a property name and fn',
                fileName: $.fileName,
                line: $.line
            };
        }
        return element;
    }

    /**
     * Function to add an element to a group. This function return the current object himself.
     * So you can make chain: group.control('button', 'title').control('edittext', 'title2');
     * @param {string} type the element type [button, checkbox, radiobutton, statictext, edittext]
     * @param {string} title the title of the element
     * @param {Object|array} [events] array with event object { name : 'eventName', fn : function}
     * @param {Object) [properties] object with properties key : value
     * @param {array} [bounds] array of coordinates [x, y, width, height]
     * @return {GroupContainer}
     */
    this.control = function (type, title, properties, events, bounds) {
        // check if the optionals parameters are corrects
        var properties = properties || {};
        var bounds = bounds || undefined;

        var element = that.group.add(type, bounds, title);
        element = element.merge(properties);

        // if the parameter events exist, add 1 or n event if it is an array
        if (events !== undefined) {
            if (H.Utils.is_array(events)) {

                for (var i = 0; i < events.length; i++) {
                    add_event(element, events[i]);
                }
            }
            // else check if the user give one event
            else if (typeof events === 'object') {
                add_event(element, events);
            }
            else {
                throw {
                    name: 'InvalidArgumentError',
                    message: 'you must enter a valid value for events parameter [object or array]',
                    fileName: $.fileName,
                    line: $.line
                };
            }
        }

        return that;
    }


}

/**
 * @class PanelContainer class to build a panel a panel can contains n group
 * @param {Window} window a window object
 * @param {string} title the title of the panel
 * @param {Array} [bounds] an array with coordinates [x, y, width, height]
 * @param {Object} [properties] an object with properties { key : value, key : value }
 * @constructor
 */
function PanelContainer (window, title, bounds, properties) {

    // check if the optionals parameters are corrects
    var properties = properties || {};
    var bounds = bounds || undefined;

    this.panel = window.add('panel', bounds, title);
    this.panel = this.panel.merge(properties);

    var that = this;

    /**
     * Function to create a group
     * @param {string} title
     * @param {Object} [properties] an object with properties { key : value }
     * @param {Array} [bounds] an array with coordinates [x, y, width, height]
     * @return {GroupContainer}
     */
    this.group = function (title, properties, bounds) {
        return new GroupContainer(that.panel, title, bounds, properties);
    }

}

/**
 * @class UI class to build a new user interface a window object can contain n panel
 * @param {string} title the title of the window
 * @param {Array} [bounds] an array with coordinates [x, y, width, height]
 * @param {Object} [properties] an object with properties { key : value, key : value }
 * @constructor
 */
function UI (title, bounds, properties) {

    // check if the optionals parameters are corrects
    var properties = properties || {};
    var bounds = bounds || undefined;

    /**
     * create a new window, merge the properties after creation
     * (not every property can be add during creation of object
     */
    this.window = new Window('dialog', title, bounds);
    this.window = this.window.merge(properties);

    var that = this;

    /**
     * Function to create a new panel
     * @param {string} title
     * @param {Object} [properties] an object with properties { key : value }
     * @param {Array} [bounds] an array with coordinates [x, y, width, height]
     * @return {PanelContainer}
     */
    this.panel = function (title, properties, bounds) {
        return new PanelContainer(that.window, title, bounds, properties);
    }

    /**
     * Function to display the user interface
     */
    this.show = function () {
        return that.window.show();
    }


}
