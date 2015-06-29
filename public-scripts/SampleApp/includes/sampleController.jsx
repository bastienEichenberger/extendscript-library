/**
 * Function to generate the controller
 * @param {Object} view the view
 * @return {Object} the controller
 */
var sampleController = function (view) {


    var that = {};

    /***********************************************
     * Public
     ***********************************************/



    /***********************************************
     * PRIVATE
     ***********************************************/

    // views
    var sampleView = view;

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


    // Listeners

    /**
     * Event to remove an element of the list
     */
    function remove() {
        if (sampleView.sections.selection !== null) {
            sampleView.sections.remove(sampleView.sections.selection);
        }
        else {
            alert('select a document to remove from the list');
        }
    }

    /**
     * Event to add an element to the list
     */
    function add() {

        var section = prompt('please add an element \n' +
            'use only letters',
            'placeholder text');

        if (section) {

            if (is_section_valid(section)) {
                sampleView.sections.add('item', section);
            }
            else {
                alert('the value for section is not valid');
            }
        }
    }


    function helloWorld() {
        alert('hello radio button');
    }

    function run() {

        sampleView.ui.close();

        display_progress_bar();

        do_something();

        alert('script finished');
    }

    function stop() {

        that.sampleView.ui.close();

        alert('The Script have been forced to cancel');
        exit();
    }


    /**
     * Function to display the progress bar
     */
    function display_progress_bar() {

        that.pbarView = pbarView(sampleView.sections.items.length);

        that.pbarView.ui.show();
    }

    /**
     * Function to active only the selected layers
     */
    function do_something() {

        for (var i = 0; i < sampleView.sections.items.length; i++) {

            // make something
            $.sleep(1000);

            // update the progress bar
            that.pbarView.pbar.value = i + 1;
        }
    }

    // add events listeners
    sampleView.delete.addEventListener('click', remove);
    sampleView.add.addEventListener('click', add);
    sampleView.run.addEventListener('click', run);
    sampleView.stop.addEventListener('click', stop);
    sampleView.hello.addEventListener('click', helloWorld);

    return that;

}

