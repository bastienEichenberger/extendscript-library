/**
 * Module with Photoshop functions deal with Channels</br>
 * @namespace Channel
 * @memberOf PS
 * @author Bastien Eichenberger
 */
PS.Channel = (function (my) {

    /**
     * Function to remove layer
     * @function remove_by
     * @memberOf PS.Channel
     * @param {Function} test a function who return true/false if the channel have to been deleted
     * @example
     *
     * function (channel) {
     *     if (!channel.visible) {
     *         return true;
     *     }
     *     return false;
     * }
     *
     * @param {Document} [document = app.activeDocument] the Photoshop Document
     */
    my.remove_by = function (test, document) {

        if (document === undefined) {
            var document = app.activeDocument;
        }

        var channels = document.channels;

        for (var i = 0; i < channels.length; i++) {

            var channel = channels[i];

            if (test.apply(null, [channel])) {

                channel.remove();
                i--;

            }
        }
    }

    return my;

})(PS.Channel || {});