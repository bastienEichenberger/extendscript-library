/*
 * A named style that remembers paragraph attributes.
 */
var ParagraphStyle = {
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
   * The paragraph style's name.
   * @type {String}
   */
  name: undefined,
  
  /*
   * The character properties for the text range.
   * @type {CharacterAttributes}
   */
  characterAttributes: undefined,
  
  /*
   * The paragraph properties for the text range.
   * @type {ParagraphAttributes}
   */
  paragraphAttributes: undefined,
  
  /*
   * Adds an element.
   * @returns {ParagraphStyle}
   */
  add: function() {
    return new ParagraphStyle();
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
   * Apply the paragraph style to text object(s)
 *
   * @param {any} textItem The text object(s) to apply the style to.
   * @param {Boolean} [clearingOverrides] Whether to clear any text attributes before apply the style.
   */
  applyTo: function(textItem, clearingOverrides) {
  },
  
};
