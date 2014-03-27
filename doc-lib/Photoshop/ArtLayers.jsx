/*
 * The collection of art layer objects in the document.
 */
var ArtLayers = {
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
   * @returns {ArtLayer}
   */
  add: function() {
    return new ArtLayer();
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
   * @returns {ArtLayer}
   */
  getByName: function(name) {
    return new ArtLayer();
  },
  
  /*
   * Get an element in the collection with the provided index.
 *
   * @param {uint} index undefined
   * @returns {ArtLayer}
   */
  []: function(index) {
    return new ArtLayer();
  },
  
};
