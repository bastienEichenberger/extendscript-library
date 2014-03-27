/*
 * A symbol.
 */
var Symbol = {
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
   * The symbol's name.
   * @type {String}
   */
  name: undefined,
  
  /*
   * Duplicate this object.
 *
   * @param {Object} relativeObject undefined
   * @param {ElementPlacement} insertionLocation undefined
   * @returns {Symbol}
   */
  duplicate: function(relativeObject, insertionLocation) {
    return new Symbol();
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
