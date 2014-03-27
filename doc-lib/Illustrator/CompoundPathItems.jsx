/*
 * A collection of compound path items.
 */
var CompoundPathItems = {
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
   * Create a compound path item.
   * @returns {CompoundPathItem}
   */
  add: function() {
    return new CompoundPathItem();
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
   * @returns {CompoundPathItem}
   */
  getByName: function(name) {
    return new CompoundPathItem();
  },
  
};
