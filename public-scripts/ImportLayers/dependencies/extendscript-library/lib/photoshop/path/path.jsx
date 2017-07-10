/**
 * Module with Photoshop functions deal with Path</br>
 * @namespace Path
 * @memberOf PS
 * @author Bastien Eichenberger
 */
PS.Path = (function (my) {

    /**
     * Function to unused paths in a Document by type
     * @function remove_by
     * @memberOf PS.Path
     * @param {Function} test a function who return true/false if the channel have to been deleted
     * @example
     *
     * function (path) {
     *     if (path === PathKind.NORMALPATH || path === PathKind.WORKPATH) {
     *         return true;
     *     }
     *     return false;
     * }
     *
     * [PathKind.WORKPATH, PathKind.NORMALPATH, PathKind.CLIPPINGPATH, PathKind.VECTORMASK, PathKind.TEXTMASK]
     * @param {Document} [document] the Photoshop document
     */
    my.remove_by = function (test, document) {

        if (document === undefined) {
            var document = app.activeDocument;
        }

        var path_items = document.pathItems;

        // foreach path delete, remove it if the type equals
        for (var i = 0; i < path_items.length; i++) {

            var path = path_items[i];

            // path_kind and PathKind aren't of the same type, make a conversion
            if (test.apply(null, [path])) {
                path.remove();
                i--;
            }

        }
    }

    return my;

})(PS.Path || {});