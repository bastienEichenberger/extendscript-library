/**
 * Function to generate the controller
 * @param {Object} view the view
 * @return {Object} the controller
 */
var sampleController = function (view) {

    /***********************************************
     * Public
     ***********************************************/

    var that = {};

    // views
    that.sampleView = view;

    /**
     * Function to display the progress bar
     */
    that.display_progress_bar = function () {

        that.pbarView = pbarView(that.sampleView.sections.items.length);

        that.pbarView.ui.show();
    }

    /**
     * Function to active only the selected layers
     */
    that.do_something = function () {

        for (var i = 0; i < that.sampleView.sections.items.length; i++) {

            // make something
            $.sleep(1000);

            // update the progress bar
            that.pbarView.pbar.value = i + 1;
        }
    }

    /***********************************************
     * PRIVATE
     ***********************************************/


    /**
     * Function to valid a section
     * @param {string} str the section to valid
     * @return {boolean} true if the section is valid
     */
    function is_section_valid (str) {

        var regex = /[a-z]+/;

        if (regex.test(str)) {
            return true;
        }

        return false;
    }

    /**
     * Function to init the controller
     */

    // Listeners
    var listeners = {};

    /**
     * Event to remove an element of the list
     */
    listeners.remove = function () {
        if (that.sampleView.sections.selection !== null) {
            that.sampleView.sections.remove(that.sampleView.sections.selection);
        }
        else {
            alert('select a document to remove from the list');
        }
    }

    /**
     * Event to add an element to the list
     */
    listeners.add = function () {

        var section = prompt('please add an element \n' +
            'use only letters',
            'placeholder text');

        if (section) {

            if (is_section_valid(section)) {
                that.sampleView.sections.add('item', section);
            }
            else {
                alert('the value for section is not valid');
            }
        }
    }


    listeners.helloWorld = function () {
        alert('hello radio button');
    }

    listeners.run = function () {

        that.sampleView.ui.close();

        that.display_progress_bar();

        that.do_something()

        alert('script finished');
    }

    listeners.stop = function () {

        that.sampleView.ui.close();

        alert('The Script have been forced to cancel');
        exit();
    }


    function init () {

        // add events listeners
        that.sampleView.delete.addEventListener('click', listeners.remove);
        that.sampleView.add.addEventListener('click', listeners.add);
        that.sampleView.run.addEventListener('click', listeners.run);
        that.sampleView.stop.addEventListener('click', listeners.stop);
        that.sampleView.hello.addEventListener('click', listeners.helloWorld);

    }

    init();
    return that;

}

