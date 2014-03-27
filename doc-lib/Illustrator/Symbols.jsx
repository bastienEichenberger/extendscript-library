/*
 * A collection of symbols.
 */
var Symbols = {
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
   * Create a symbol.
 *
   * @param {PageItem} sourceArt The art item from which to make this symbol.
   * @param {SymbolRegistrationPoint} [registrationPoint] The symbol registration point.
   * @returns {Symbol}
   */
  add: function(sourceArt, registrationPoint) {
    return new Symbol();
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
   * @returns {Symbol}
   */
  getByName: function(name) {
    return new Symbol();
  },
  
};
