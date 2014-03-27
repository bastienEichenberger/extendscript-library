/*
 * Object that stores information about a color element in the image, analogous to a plate in the printing process that applies a single color. The document&apos;s color mode determines the number of default channels. For example, an RGB document has four default channels: A composite channel: RGB; and three component channels: red, green, and blue. A channel can also be an alpha channel, which stores selections as masks; or a spot channel, which stores spot colors.
 */
var Channel = {
  /*
   * The object's container.
   * @type {Object}
   */
  parent: undefined,
  
  /*
   * The class name of the object.
   * @type {String}
   */
  typename: undefined,
  
  /*
   * A histogram of the color of the channel.
   * @type {int}
   */
  histogram: undefined,
  
  /*
   * The channel name.
   * @type {String}
   */
  name: undefined,
  
  /*
   * The type of channel.
   * @type {ChannelType}
   */
  kind: undefined,
  
  /*
   * The opacity of alpha channels (called solidity for spot channels). Range: 0 to 100. Valid only when 'type' = masked area or selected area.
   * @type {Number}
   */
  opacity: undefined,
  
  /*
   * If true, the channel is visible.
   * @type {Boolean}
   */
  visible: undefined,
  
  /*
   * The color of the channel. Not valid for component channels.
   * @type {SolidColor}
   */
  color: undefined,
  
  /*
   * Duplicate this object.
 *
   * @param {Object} relativeObject undefined
   * @param {ElementPlacement} insertionLocation undefined
   * @returns {Channel}
   */
  duplicate: function(relativeObject, insertionLocation) {
    return new Channel();
  },
  
  /*
   * Deletes this object.
   */
  remove: function() {
  },
  
  /*
   * Deletes all elements.
   */
  removeAll: function() {
  },
  
  /*
   * Merges a spot channel into the component channels.
   */
  merge: function() {
  },
  
  /*
   * Duplicates the channel.
 *
   * @param {Document} [targetDocument] The document to duplicate the channel to.
   * @returns {Channel}
   */
  duplicate: function(targetDocument) {
    return new Channel();
  },
  
};
