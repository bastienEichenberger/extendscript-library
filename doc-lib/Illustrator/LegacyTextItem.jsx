/*
 * Unconverted legacy text items from documents in pre-version 11 formats.
 */
var LegacyTextItem = {
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
   * Has the legacy text item been updated to a native text frame item?
   * @type {Boolean}
   */
  converted: undefined,
  
  /*
   * Move the object.
 *
   * @param {Object} relativeObject undefined
   * @param {ElementPlacement} insertionLocation undefined
   * @returns {LegacyTextItem}
   */
  move: function(relativeObject, insertionLocation) {
    return new LegacyTextItem();
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
   * Create a native text frame from a legacy text item. The original legacy text item is deleted.
   * @returns {GroupItem}
   */
  convertToNative: function() {
    return new GroupItem();
  },
  
};
