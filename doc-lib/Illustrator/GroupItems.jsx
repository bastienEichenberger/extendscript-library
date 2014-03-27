/*
 * A collection of group items.
 */
var GroupItems = {
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
   * Create a group item.
   * @returns {GroupItem}
   */
  add: function() {
    return new GroupItem();
  },
  
  /*
   * Create a group item from a vector graphics file.
 *
   * @param {File} imageFile The vector graphics file to be embedded.
   * @returns {GroupItem}
   */
  createFromFile: function(imageFile) {
    return new GroupItem();
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
   * @returns {GroupItem}
   */
  getByName: function(name) {
    return new GroupItem();
  },
  
};
