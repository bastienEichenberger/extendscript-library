/*
 * A collection of paragraph styles.
 */
var ParagraphStyles = {
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
   * Create a named paragraph style.
 *
   * @param {String} name The paragraph style name.
   * @returns {ParagraphStyle}
   */
  add: function(name) {
    return new ParagraphStyle();
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
   * @returns {ParagraphStyle}
   */
  getByName: function(name) {
    return new ParagraphStyle();
  },
  
};
