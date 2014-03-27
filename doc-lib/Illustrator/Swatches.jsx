/*
 * A collection of swatches.
 */
var Swatches = {
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
   * Create a swatch.
   * @returns {Swatch}
   */
  add: function() {
    return new Swatch();
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
   * @returns {Swatch}
   */
  getByName: function(name) {
    return new Swatch();
  },
  
  /*
   * Get selected swatches in the document.
   * @returns {Swatch}
   */
  getSelected: function() {
    return new Swatch();
  },
  
};
