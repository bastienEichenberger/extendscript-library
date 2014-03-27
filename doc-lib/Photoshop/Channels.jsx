/*
 * The collection of channel objects in the document.
 */
var Channels = {
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
   * @returns {Channel}
   */
  add: function() {
    return new Channel();
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
   * @returns {Channel}
   */
  getByName: function(name) {
    return new Channel();
  },
  
  /*
   * Get an element in the collection with the provided index.
 *
   * @param {uint} index undefined
   * @returns {Channel}
   */
  []: function(index) {
    return new Channel();
  },
  
};
