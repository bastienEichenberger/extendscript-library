/*
 * A collection of gradients.
 */
var Gradients = {
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
   * Create a gradient.
   * @returns {Gradient}
   */
  add: function() {
    return new Gradient();
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
   * @returns {Gradient}
   */
  getByName: function(name) {
    return new Gradient();
  },
  
};
