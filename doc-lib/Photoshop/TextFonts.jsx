/*
 * A collection of fonts available on your computer.
 */
var TextFonts = {
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
   * Get the first element in the collection with the provided name.
 *
   * @param {String} name undefined
   * @returns {TextFont}
   */
  getByName: function(name) {
    return new TextFont();
  },
  
  /*
   * Get an element in the collection with the provided index.
 *
   * @param {uint} index undefined
   * @returns {TextFont}
   */
  []: function(index) {
    return new TextFont();
  },
  
};
