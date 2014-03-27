/*
 * An array of path point info objects that describes a straight or curved segment of a path. You do not use the sub path item object to create a sub path. Rather, you use the sub path item object to retrieve information about a sub path. To create sub paths, see sub path info.
 */
var SubPathItems = {
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
   * @returns {SubPathItem}
   */
  getByName: function(name) {
    return new SubPathItem();
  },
  
  /*
   * Get an element in the collection with the provided index.
 *
   * @param {uint} index undefined
   * @returns {SubPathItem}
   */
  []: function(index) {
    return new SubPathItem();
  },
  
};
