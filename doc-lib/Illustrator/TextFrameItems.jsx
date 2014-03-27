/*
 * A collection of text frame items.
 */
var TextFrameItems = {
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
   * Number of elements in the collection.
   * @type {int}
   */
  length: undefined,
  
  /*
   * Create a point text frame item.
   * @returns {TextFrameItem}
   */
  add: function() {
    return new TextFrameItem();
  },
  
  /*
   * Create a point text frame item.
 *
   * @param {Point} anchor The position (coordinates) of the anchor point.
   * @param {TextOrientation} [orientation] The orientation of the text.
   * @returns {TextFrameItem}
   */
  pointText: function(anchor, orientation) {
    return new TextFrameItem();
  },
  
  /*
   * Create an area text frame item.
 *
   * @param {PathItem} textPath The path item associated with the text frame.
   * @param {TextOrientation} [orientation] The orientation of the text.
   * @param {TextFrameItem} [baseFrame] The base text frame if it has one.
   * @param {Boolean} [postFix] Whether to postfix/prefix the new text frame to the specified base text frame.
   * @returns {TextFrameItem}
   */
  areaText: function(textPath, orientation, baseFrame, postFix) {
    return new TextFrameItem();
  },
  
  /*
   * Create an on-path text frame item.
 *
   * @param {PathItem} textPath The path item associated with the text frame.
   * @param {Number} [startTValue] The start position of text along a path, as a value relative to the path's segments (path text only)
   * @param {Number} [endTValue] The end position of text along a path, as a value relative to the path's segments (path text only)
   * @param {TextOrientation} [orientation] The orientation of the text.
   * @param {TextFrameItem} [baseFrame] The base text frame if it has one.
   * @param {Boolean} [postFix] Whether to postfix/prefix the new text frame to the specified base text frame.
   * @returns {TextFrameItem}
   */
  pathText: function(textPath, startTValue, endTValue, orientation, baseFrame, postFix) {
    return new TextFrameItem();
  },
  
  /*
   * Deletes all elements.
   */
  removeAll: function() {
  },
  
  /*
   * Get the first element in the collection with the provided name.
 *
   * @param {String} name undefined
   * @returns {TextFrameItem}
   */
  getByName: function(name) {
    return new TextFrameItem();
  },
  
};
