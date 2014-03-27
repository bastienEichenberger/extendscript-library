/*
 * A collection of path points.
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
   * Create a path point.
   * @returns {PathPoint}
   */
  add: function() {
    return new PathPoint();
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
   * @returns {PathPoint}
   */
  getByName: function(name) {
    return new PathPoint();
  },
  
};
