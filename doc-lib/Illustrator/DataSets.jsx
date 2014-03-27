/*
 * A collection of datasets.
 */
var DataSets = {
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
   * Create a data set.
   * @returns {DataSet}
   */
  add: function() {
    return new DataSet();
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
   * @returns {DataSet}
   */
  getByName: function(name) {
    return new DataSet();
  },
  
};
