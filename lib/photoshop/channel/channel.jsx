/**
 * Module with Photoshop functions deal with Channels</br>
 * @namespace Channel
 * @memberOf PS
 * @author Bastien Eichenberger
 */
PS.Channel = (function (my) {

    /**
     * Function to remove layer
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
    my.remove_by = function  (test, document) {

        var channels = document.channels;

        for (var i = 0; i < channels.length; i++) {

            var channel = channels[i];

            if (test.apply(channel)) {
                channel.remove();
                i--;
            }
        }
    }

    return my;

})(PS.Channel || {});