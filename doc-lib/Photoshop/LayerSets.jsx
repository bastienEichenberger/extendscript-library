/*
 * The collection of layer set objects in the document.
 */
var LayerSets = {
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
   * Adds an element.
   * @returns {LayerSet}
   */
  add: function() {
    return new LayerSet();
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
   * @returns {LayerSet}
   */
  getByName: function(name) {
    return new LayerSet();
  },
  
  /*
   * Get an element in the collection with the provided index.
 *
   * @param {uint} index undefined
   * @returns {LayerSet}
   */
  []: function(index) {
    return new LayerSet();
  },
  
};
