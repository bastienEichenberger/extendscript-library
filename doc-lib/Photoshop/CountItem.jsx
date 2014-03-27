/*
 * A counted item in the document. The count item feature is available in the Extended Version only.
 */
var CountItem = {
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
   * The position of count item in the document.
   * @type {UnitPoint}
   */
  position: undefined,
  
  /*
   * Adds an element.
   * @returns {CountItem}
   */
  add: function() {
    return new CountItem();
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
  
};
