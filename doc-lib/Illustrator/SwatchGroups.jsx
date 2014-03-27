/*
 * A collection of Swatch groups.
 */
var SwatchGroups = {
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
   * Create a Swatch group.
   * @returns {SwatchGroup}
   */
  add: function() {
    return new SwatchGroup();
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
   * @returns {SwatchGroup}
   */
  getByName: function(name) {
    return new SwatchGroup();
  },
  
};
