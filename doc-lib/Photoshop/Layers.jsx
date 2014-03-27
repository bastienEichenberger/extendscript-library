/*
 * The collection of layer objects, including art layer and layer set objects, in the document.
 */
var Layers = {
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
   * Deletes all elements.
   */
  removeAll: function() {
  },
  
  /*
   * Get the first element in the collection with the provided name.
 *
   * @param {String} name undefined
   * @returns {Layer}
   */
  getByName: function(name) {
    return new Layer();
  },
  
  /*
   * Get an element in the collection with the provided index.
 *
   * @param {uint} index undefined
   * @returns {Layer}
   */
  []: function(index) {
    return new Layer();
  },
  
};
