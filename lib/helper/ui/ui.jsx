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

    this.my_group = panel.add('group', bounds, title);
    this.my_group = this.my_group.merge(properties);

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

    function add_element (type, title, events, properties, bounds) {
        var element = that.my_group.add(type, bounds, title, properties);
        /**
         * fix the bug with properties: name property must be init during creation of the object,
         * orientation has to been added after creation, so merge those properties
         */
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
    this.control = function (type, title, events, properties, bounds) {
        // check if the optionals parameters are corrects
        var properties = properties || {};
        var bounds = bounds || undefined;

        add_element(type, title, events, properties, bounds);

        return that;
    }

    /**
     * @todo swtich events and properties parameters
     * Function to add an element to a group. This function return the element
     * So you can make chain: group.control('button', 'title').control('edittext', 'title2');
     * @param {string} type the element type [button, checkbox, radiobutton, statictext, edittext]
     * @param {string} title the title of the element
     * @param {Object|array} [events] array with event object { name : 'eventName', fn : function}
     * @param {Object) [properties] object with properties key : value
     * @param {array} [bounds] array of coordinates [x, y, width, height]
     * @return {GroupContainer}
     */
    this.add = function (type, title, events, properties, bounds) {

        // check if the optionals parameters are corrects
        var properties = properties || {};
        var bounds = bounds || undefined;

        var element = add_element(type, title, events, properties, bounds);

        return element;
    }


    /**
     * Function to create a new panel
     * @param title
     * @param properties
     * @param bounds
     * @return {PanelContainer}
     */
    this.panel = function (title, properties, bounds) {
        return new PanelContainer(that.my_group, title, bounds, properties);
    }

    /**
     * Function to create a group
     * @param {string} title
     * @param {Object} [properties] an object with properties { key : value }
     * @param {Array} [bounds] an array with coordinates [x, y, width, height]
     * @return {GroupContainer}
     */
    this.group = function (title, properties, bounds) {
        return new GroupContainer(that.my_group, title, bounds, properties);
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

    this.my_panel = window.add('panel', bounds, title);
    this.my_panel = this.my_panel.merge(properties);

    var that = this;

    /**
     * Function to create a group
     * @param {string} title
     * @param {Object} [properties] an object with properties { key : value }
     * @param {Array} [bounds] an array with coordinates [x, y, width, height]
     * @return {GroupContainer}
     */
    this.group = function (title, properties, bounds) {
        return new GroupContainer(that.my_panel, title, bounds, properties);
    }

}

/**
 * @class UI class to build a new user interface a window object can contain n panel
 * @param {string} title the title of the window
 * @param {Object} [properties] an object with properties { key : value, key : value }
 * @param {Array} [bounds] an array with coordinates [x, y, width, height]
 * @param {string} [type] type the type of the Window (dialog or palette) by default: dialog
 * @constructor
 */
function UI (title, properties, bounds, type) {

    // check if the optionals parameters are corrects
    var properties = properties || {};
    var bounds = bounds || undefined;
    var type = type || 'dialog';

    /**
     * fix the bug with properties: name property must be init during creation of the object,
     * orientation has to been added after creation, so merge those properties
     */
    this.my_window = new Window(type, title, bounds, properties);
    this.my_window = this.my_window.merge(properties);

    var that = this;

    /**
     * Function to create a group
     * @param {string} title
     * @param {Object} [properties] an object with properties { key : value }
     * @param {Array} [bounds] an array with coordinates [x, y, width, height]
     * @return {GroupContainer}
     */
    this.panel = function (title, properties, bounds) {
        return new PanelContainer(that.my_window, title, bounds, properties);
    }

    /**
     * Function to create a new group
     * @param title
     * @param properties
     * @param bounds
     * @return {GroupContainer}
     */
    this.group = function (title, properties, bounds) {
        return new GroupContainer(that.my_window, title, bounds, properties);
    }

    /**
     * Function to create a progress bar
     * @param {number} length the max lenght of the progress bar
     * @return {Progressbar}
     */
    this.progress_bar = function (length) {
        return that.my_window.add('progressbar', undefined, 0, length);
    }

    /**
     * Function to display the UI
     * @return {boolean} true if the user click on the button OK,
     * false if the user click on the button cancel
     */
    this.show = function () {
        return that.my_window.show();
    }

    /**
     * Function to close the UI
     * @param {boolean} status
     * @return {*}
     */
    this.close = function (status) {
        return that.my_window.close(status);
    }


}
