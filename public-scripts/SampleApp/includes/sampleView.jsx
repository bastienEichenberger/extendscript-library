/**
 * Function to build the view
 * @return {Object} the view object with all ui elements
 */
var sampleView = function () {


    var that = {};


    /***********************************************
     * Public
     ***********************************************/

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

    // buttons
    that.delete = that.grps.delete_add.add('button', 'delete');
    that.add = that.grps.delete_add.add('button', 'add');
    that.stop = that.grps.controls.add('button', 'stop', undefined, {name: 'cancel'});
    that.run = that.grps.controls.add('button', 'run', undefined, {name: 'ok'});
    that.hello = that.grps.presets.add('radiobutton', 'radiobuttonTitle');

    // listbox
    that.grps.options.control('statictext', 'title');
    that.sections = that.grps.options.add('listbox', 'title of listbox', undefined, undefined, [0, 0, 500, 100]);

    // dropdownlist with all PDF preset
    that.dropdown = that.grps.options.add('dropdownlist', 'dropdownTitle');


    /***********************************************
     * PRIVATE
     ***********************************************/


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



        // add all presets to the dropdown
        var items = ['item1', 'item2', 'item3', 'item4', 'item5'];

        for (var i = 0; i < items.length; i++) {
            that.dropdown.add('item', items[i]);
        }

    }

    init();
    return that;

}


