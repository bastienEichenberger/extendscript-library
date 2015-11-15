/**
 * Module with Photoshop functions deal with Path</br>
 * @namespace Path
 * @memberOf PS
 * @author Bastien Eichenberger
 */
PS.Path = (function (my) {

    /**
     * Function to unused paths in a Document by type
     * @param {array} kinds, an array of PathKind objects with type of path to delete
     * @example
     * [PathKind.WORKPATH, PathKind.NORMALPATH, PathKind.CLIPPINGPATH, PathKind.VECTORMASK, PathKind.TEXTMASK]
     * @param {Document} [document] the Photoshop document
     */
    my.remove_by_kind = function (kinds, document) {

        if (document === undefined) {
            var document = app.activeDocument;
        }

        var path_items = document.pathItems;

        // foreach path delete, remove it if the type equals
        for (var i = 0; i < path_items.length; i++) {

            var current_path = path_items[i];
            var path_kind = current_path.kind;

            // remove type by
            for (var j = 0; i < kinds.length; j++) {

                // path_kind and PathKind aren't of the same type, make a conversion
                if (path_kind == kinds[j]) {
                    current_path.remove();
                    i--;
                    break;
                }

            }
        }
    }

    return my;

})(PS.Path || {});