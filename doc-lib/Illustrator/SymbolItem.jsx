/*
 * An instance of a Symbol.
 */
var SymbolItem = {
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
   * The symbol that was used to create this symbol item.
   * @type {Symbol}
   */
  symbol: undefined,
  
  /*
   * Move the object.
 *
   * @param {Object} relativeObject undefined
   * @param {ElementPlacement} insertionLocation undefined
   * @returns {SymbolItem}
   */
  move: function(relativeObject, insertionLocation) {
    return new SymbolItem();
  },
  
  /*
   * Duplicate this object.
 *
   * @param {Object} relativeObject undefined
   * @param {ElementPlacement} insertionLocation undefined
   * @returns {SymbolItem}
   */
  duplicate: function(relativeObject, insertionLocation) {
    return new SymbolItem();
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
   * Break link to the symbol.
   */
  breakLink: function() {
  },
  
};
