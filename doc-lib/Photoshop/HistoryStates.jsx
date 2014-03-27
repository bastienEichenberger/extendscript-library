/*
 * The history state objects associated with the document.
 */
var HistoryStates = {
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
   * @returns {HistoryState}
   */
  getByName: function(name) {
    return new HistoryState();
  },
  
  /*
   * Get an element in the collection with the provided index.
 *
   * @param {uint} index undefined
   * @returns {HistoryState}
   */
  []: function(index) {
    return new HistoryState();
  },
  
};
