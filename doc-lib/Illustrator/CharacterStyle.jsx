/*
 * A named style that remembers character attributes.
 */
var CharacterStyle = {
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
   * The character style's name.
   * @type {String}
   */
  name: undefined,
  
  /*
   * The character properties for the text range.
   * @type {CharacterAttributes}
   */
  characterAttributes: undefined,
  
  /*
   * Adds an element.
   * @returns {CharacterStyle}
   */
  add: function() {
    return new CharacterStyle();
  },
  
  /*
   * Deletes this object.
   */
  remove: function() {
  },
  
  /*
   * Deletes all elements.
   */
  removeAll: function() {
  },
  
  /*
   * Apply the character style to text object(s)
 *
   * @param {any} textItem The text object(s) to apply the style to.
   * @param {Boolean} [clearingOverrides] Whether to clear any text attributes before apply the style.
   */
  applyTo: function(textItem, clearingOverrides) {
  },
  
};
