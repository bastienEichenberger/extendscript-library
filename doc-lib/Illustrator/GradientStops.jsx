/*
 * A collection of gradient stops.
 */
var GradientStops = {
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
   * Create a gradient stop.
   * @returns {GradientStop}
   */
  add: function() {
    return new GradientStop();
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
   * @returns {GradientStop}
   */
  getByName: function(name) {
    return new GradientStop();
  },
  
};
