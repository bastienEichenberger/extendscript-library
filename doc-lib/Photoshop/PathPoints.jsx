/*
 * A collection of path point objects that comprises the path points property of the sub path item object.
 */
var PathPoints = {
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
   * @returns {PathPoint}
   */
  getByName: function(name) {
    return new PathPoint();
  },
  
  /*
   * Get an element in the collection with the provided index.
 *
   * @param {uint} index undefined
   * @returns {PathPoint}
   */
  []: function(index) {
    return new PathPoint();
  },
  
};
