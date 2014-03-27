/*
 * A collection of words.
 */
var Words = {
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
   * Create a word.
 *
   * @param {String} contents The text string.
   * @returns {TextRange}
   */
  add: function(contents) {
    return new TextRange();
  },
  
  /*
   * undefined
 *
   * @param {String} contents The text string.
   * @returns {TextRange}
   */
  addBefore: function(contents) {
    return new TextRange();
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
   * @returns {TextRange}
   */
  getByName: function(name) {
    return new TextRange();
  },
  
};
