/**
 * Module with Photoshop functions deal with layersets</br>
 * @namespace LayerSet
 * @memberOf PS
 * @author Bastien Eichenberger
 */
PS.Layerset = (function (my) {

    /**
     * Function to add a layerset
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
     * Function to merge a layerSet
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