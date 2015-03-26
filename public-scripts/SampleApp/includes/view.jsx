/**
 * Function to build the view
 * @return {Object} the view object with all ui elements
 */
var view = function () {

    /***********************************************
     * Public
     ***********************************************/

    var that = {};

    // UI Elements
    that.ui = new UI('Sample', {alignChildren: 'left', resizeable: true});
    that.row = that.ui.group('row1', {orientation: 'row'});

    // pans
    that.pans = {};

    that.pans.options = that.ui.panel('Options');
    that.pans.layers = that.row.panel('Checkbox', {orientation: 'row', alignment: 'top'});
    that.pans.presets = that.row.panel('Panel', {alignment: 'top'});

    // groups
    that.grps = {};

    that.grps.presets = that.pans.presets.group('presets', {orientation: 'column', alignChildren: 'left'});
    that.grps.options = that.pans.options.group('options', {orientation: 'column'});
    that.grps.controls = that.ui.group('control-grp', {orientation: 'row', alignment: 'right'});
    that.grps.delete_add = that.pans.options.group('delete_add', {orientation: 'row'});

    // listbox
    that.grps.options.control('statictext', 'title');
    that.sections = that.grps.options.add('listbox', 'title of listbox', undefined, undefined, [0, 0, 500, 100]);

    // dropdownlist with all PDF preset
    that.dropdown = that.grps.options.add('dropdownlist', 'dropdownTitle');


    /***********************************************
     * PRIVATE
     ***********************************************/

    // Listeners
    var listeners = {};

    /**
     * Event to remove an element of the list
     */
    listeners.remove = {
        name: 'click',
        fn: function () {
            if (that.sections.selection !== null) {
                that.sections.remove(that.sections.selection);
            }
            else {
                alert('select a document to remove from the list');
            }
        }
    }

    /**
     * Event to add an element to the list
     */
    listeners.add = {
        name: 'click',
        fn: function () {
            var array_of_sections = [];
            var section = prompt('please add an element \n' +
                'use only letters',
                'placeholder text');

            if (section && array_of_sections) {

                if (is_section_valid(section)) {
                    that.sections.add('item', section);
                }
                else {
                    alert('the value for section is not valid');
                }
            }
        }
    }

    /**
     * Event to radiobutton
     */
    listeners.helloWorld = {
        name: 'click',
        fn: function () {
            alert('hello radio button');
        }
    }


    /**
     * Function to valid a section
     * @param {string} str the section to valid
     * @return {boolean} true if the section is valid
     */
    function is_section_valid (str) {

        var regex = /[a-z]+/;

        if (regex.test(str)) {
            return true
        }
        else {
            return false;
        }
    }

    /**
     * Function to init ui components
     */
    function init () {

        // add checkbox
        var grp1 = that.pans.layers.group('layers', {
            orientation: 'column',
            alignChildren: 'left',
            alignment: 'top'
        });

        var grp2 = that.pans.layers.group('layers', {
            orientation: 'column',
            alignChildren: 'left',
            alignment: 'top'
        });

        grp1
            .control('checkbox', 'checkbox1')
            .control('checkbox', 'checkbox2')
            .control('checkbox', 'checkbox3')
        ;

        grp2
            .control('checkbox', 'checkbox4')
            .control('checkbox', 'checkbox5')
            .control('checkbox', 'checkbox6')
        ;

        // add radiobutton
        var button = that.grps.presets.add('radiobutton', 'radiobuttonTitle', listeners.helloWorld);

        // add all presets to the dropdown
        var items = ['item1', 'item2', 'item3', 'item4', 'item5'];

        for (var i = 0; i < items.length; i++) {
            that.dropdown.add('item', items[i]);
        }

        that.grps.delete_add
            .control('button', 'delete', listeners.remove)
            .control('button', 'add', listeners.add)
        ;

        that.grps.controls
            .control('button', 'stop', undefined, {name: 'cancel'})
            .control('button', 'run', undefined, {name: 'ok'})
        ;

    }

    init();
    return that;

}


