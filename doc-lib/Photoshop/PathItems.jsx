/*
 * The collection of path item objects in the document.
 */
var PathItems = {
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
   * Creates a new path item.
 *
   * @param {String} name The name for the new path.
   * @param {SubPathInfo} entirePath The item's sub paths.
   * @returns {PathItem}
   */
  add: function(name, entirePath) {
    return new PathItem();
  },
  
  /*
   * Get the first element in the collection with the provided name.
 *
   * @param {String} name undefined
   * @returns {PathItem}
   */
  getByName: function(name) {
    return new PathItem();
  },
  
  /*
   * Get an element in the collection with the provided index.
 *
   * @param {uint} index undefined
   * @returns {PathItem}
   */
  []: function(index) {
    return new PathItem();
  },
  
};
