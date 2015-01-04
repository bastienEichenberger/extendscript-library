/**
 * @class Element
 * @param group
 * @param type
 * @param title
 * @param bounds
 * @param properties
 * @constructor
 */
function Element (group, type, title, bounds, properties) {

    // private
    var properties = properties || {};
    var bounds = bounds || undefined;

    // public
    this.element = group.add(type, bounds, title, properties);


    var that = this;

    this.event = function (event_name, fn) {
        that.element.addEventListener(event_name, fn);
    }
}

/**
 * @class ElementGroup
 * @param panel
 * @param title
 * @param bounds
 * @param properties
 * @constructor
 */
function ElementGroup (panel, title, bounds, properties) {

    // private
    var properties = properties || {};
    var bounds = bounds || undefined;

    // public
    this.group = panel.add('group', bounds, title, properties);


    var that = this;

    this.button = function (title, bounds, properties) {
        return new Element(that.group, 'button', title, bounds, properties);
    }

    this.checkbox = function (title, bounds, properties) {
        return new Element(that.group, 'checkbox', title, bounds, properties);
    }

    this.radio = function (title, bounds, properties) {
        return new Element(that.group, 'radiobutton', title, bounds, properties);
    }

    this.text = function (title, bounds, properties) {
        return new Element(that.group, 'statictext', title, bounds, properties);
    }

    this.input = function (title, bounds, properties) {
        return new Element(that.group, 'edittext', title, bounds, properties);
    }

}

/**
 * @class ElementPanel
 * @param window
 * @param title
 * @param bounds
 * @param properties
 * @constructor
 */
function ElementPanel (window, title, bounds, properties) {

    // private
    var properties = properties || {};
    var bounds = bounds || undefined;


    // public
    // type:String, bounds:Bounds, text:String, properties:Object
    this.panel = window.add('panel', bounds, title, properties);

    var that = this;

    this.group = function (title, bounds, properties) {
        return new ElementGroup(that.panel, title, bounds, properties);
    }

}

/**
 * @class UI
 * @param {string} title
 * @param {Array} bounds
 * @param {Object} properties
 * @constructor
 */
function UI (title, bounds, properties) {

    // private
    var properties = properties || {};
    var bounds = bounds || undefined;

    // public
    this.window = new Window('dialog', title, bounds, properties);

    var that = this;

    this.panel = function (title, bounds, properties) {
        return new ElementPanel(that.window, title, bounds, properties);
    }

    this.row = function (title, bounds, properties) {

        var properties = properties || {};
        properties.merge({orientation: 'row'});

        return that.panel(title, bounds, properties);
    }

    this.column = function (title, bounds, properties) {

        var properties = properties || {};
        properties.merge({orientation: 'column'});

        return that.panel(title, bounds, properties);
    }

    this.show = function () {
        that.window.show();
    }


}




