/*
 * A collection of custom spot colors.
 */
var Spots = {
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
   * Create a spot color.
   * @returns {Spot}
   */
  add: function() {
    return new Spot();
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
   * @returns {Spot}
   */
  getByName: function(name) {
    return new Spot();
  },
  
};
