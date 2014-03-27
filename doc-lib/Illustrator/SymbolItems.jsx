/*
 * A collection of symbol items.
 */
var SymbolItems = {
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
   * An instance of a symbol item.
 *
   * @param {Symbol} symbol The symbol to make an instance of.
   * @returns {SymbolItem}
   */
  add: function(symbol) {
    return new SymbolItem();
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
   * @returns {SymbolItem}
   */
  getByName: function(name) {
    return new SymbolItem();
  },
  
};
