/*
 * The collection of tags associated with a page item.
 */
var Tags = {
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
   * Create a tag.
   * @returns {Tag}
   */
  add: function() {
    return new Tag();
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
   * @returns {Tag}
   */
  getByName: function(name) {
    return new Tag();
  },
  
};
