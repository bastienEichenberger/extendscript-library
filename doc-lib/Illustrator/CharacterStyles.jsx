/*
 * A collection of character styles.
 */
var CharacterStyles = {
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
   * Create a named character style.
 *
   * @param {String} name The character style name.
   * @returns {CharacterStyle}
   */
  add: function(name) {
    return new CharacterStyle();
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
   * @returns {CharacterStyle}
   */
  getByName: function(name) {
    return new CharacterStyle();
  },
  
};
