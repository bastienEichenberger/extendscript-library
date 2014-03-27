/*
 * Compound path artwork item.
 */
var CompoundPathItem = {
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
   * The path artwork in this compound path.
   * @type {PathItems}
   */
  pathItems: undefined,
  
  /*
   * Move the object.
 *
   * @param {Object} relativeObject undefined
   * @param {ElementPlacement} insertionLocation undefined
   * @returns {CompoundPathItem}
   */
  move: function(relativeObject, insertionLocation) {
    return new CompoundPathItem();
  },
  
  /*
   * Duplicate this object.
 *
   * @param {Object} relativeObject undefined
   * @param {ElementPlacement} insertionLocation undefined
   * @returns {CompoundPathItem}
   */
  duplicate: function(relativeObject, insertionLocation) {
    return new CompoundPathItem();
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
