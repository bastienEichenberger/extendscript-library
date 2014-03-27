/*
 * An art style.
 */
var ArtStyle = {
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
   * The art style's name.
   * @type {String}
   */
  name: undefined,
  
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
   * Apply a brush or art style to object(s)
 *
   * @param {any} artItem The page item(s) to apply to.
   */
  applyTo: function(artItem) {
  },
  
  /*
   * Merge an art style to object(s) current style(s)
 *
   * @param {any} artItem The page item(s) to merge to.
   */
  mergeTo: function(artItem) {
  },
  
};
