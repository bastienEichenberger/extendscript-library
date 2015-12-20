/**
 * Module with Photoshop functions deal with Layersets</br>
 * @namespace Layerset
 * @memberOf PS
 * @author Bastien Eichenberger
 */
PS.Layerset = (function (my) {


    /**
     * Function to get a layerset by name, return the first element of the collection with the provided name
     * @param {string} name the name of the layerset
     * @param {Document} [document = app.activeDocument]
     * @return {Layerset} layerset the layerset object
     * @throws {Error} throw an Exception if the layerset do not exist
     */
    my.get = function (name, document) {

        if (document === undefined) {
            var document = app.activeDocument;
        }

        return document.layerSets.getByName(name);

    }

    /**
     * Function to add a layerset
     * @function add
     * @memberOf PS.Layerset
     * @param {string} name
     * @param {Document|LayerSet} [obj = app.activeDocument] the object which contains the new layerset
     * @return {LayerSet} layerset the new layerset
     */
    my.add = function (name, obj) {

        if (obj === undefined) {
            var obj = app.activeDocument;
        }

        var layerset = obj.layerSets.add();
        layerset.name = name;

        return layerset;
    }

    /**
     * Function to merge a layerset
     * @function merge
     * @memberOf PS.Layerset
     * @param {string} location the location of the layerset to merge separated by slash (group1/group2/group3)
     * @param {Document} [document = app.activeDocument] the photoshop document
     */
    my.merge = function (location, document) {

        if (document === undefined) {
            var document = app.activeDocument;
        }

        // build an array with each layerset name
        var layersets = location.split('/');

        try {

            var current_grp = document.layerSets.getByName(layersets[0]);
            var index = 1;

            // select the last group to merge
            while (index < layersets.length) {
                current_grp = current_grp.layerSets.getByName(layersets[index]);
                index++;
            }

            current_grp.merge();
        }
        catch (ex) {
            throw {
                name: 'InvalidArgumentError',
                message: 'The layerset path is not correct. The layer cannot bee merged',
                fileName: $.fileName,
                lineNumber: $.line
            };
        }
    }

    return my;

})(PS.Layerset || {});