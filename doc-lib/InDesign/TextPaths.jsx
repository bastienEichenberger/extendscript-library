/*
 * A collection of text paths.
 */
var TextPaths = {
  /*
   * The number of objects in the collection.
   * @type {Number}
   */
  length: undefined,
  
  /*
   * Creates a new TextPath.
 *
   * @param {Object} [withProperties] Initial values for properties of the new TextPath 
   * @returns {TextPath}
   */
  add: function(withProperties) {
    return new TextPath();
  },
  
  /*
   * Displays the number of elements in the TextPath.
   * @returns {Number}
   */
  count: function() {
    return new Number();
  },
  
  /*
   * Returns the TextPath with the specified index or name.
 *
   * @param {Mixed} index The index or name. Can accept: Long Integer or String.
   * @returns {TextPath}
   */
  item: function(index) {
    return new TextPath();
  },
  
  /*
   * Returns the TextPath with the specified name.
 *
   * @param {String} name The name.
   * @returns {TextPath}
   */
  itemByName: function(name) {
    return new TextPath();
  },
  
  /*
   * Returns the TextPath with the specified ID.
 *
   * @param {Number} id The ID.
   * @returns {TextPath}
   */
  itemByID: function(id) {
    return new TextPath();
  },
  
  /*
   * Returns the TextPaths within the specified range.
 *
   * @param {Mixed} from The TextPath, index, or name at the beginning of the range. Can accept: TextPath, Long Integer or String.
   * @param {Mixed} to The TextPath, index, or name at the end of the range. Can accept: TextPath, Long Integer or String.
   * @returns {TextPath}
   */
  itemByRange: function(from, to) {
    return new TextPath();
  },
  
  /*
   * Returns the first TextPath in the collection.
   * @returns {TextPath}
   */
  firstItem: function() {
    return new TextPath();
  },
  
  /*
   * Returns the last TextPath in the collection.
   * @returns {TextPath}
   */
  lastItem: function() {
    return new TextPath();
  },
  
  /*
   * Returns the middle TextPath in the collection.
   * @returns {TextPath}
   */
  middleItem: function() {
    return new TextPath();
  },
  
  /*
   * Returns the TextPath with the index previous to the specified index.
 *
   * @param {TextPath} obj The index of the TextPath that follows the desired TextPath.
   * @returns {TextPath}
   */
  previousItem: function(obj) {
    return new TextPath();
  },
  
  /*
   * Returns the TextPath whose index follows the specified TextPath in the collection.
 *
   * @param {TextPath} obj The TextPath whose index comes before the desired TextPath.
   * @returns {TextPath}
   */
  nextItem: function(obj) {
    return new TextPath();
  },
  
  /*
   * Returns any TextPath in the collection.
   * @returns {TextPath}
   */
  anyItem: function() {
    return new TextPath();
  },
  
  /*
   * Returns every TextPath in the collection.
   * @returns {TextPath}
   */
  everyItem: function() {
    return new TextPath();
  },
  
  /*
   * Generates a string which, if executed, will return the TextPath.
   * @returns {String}
   */
  toSource: function() {
    return new String();
  },
  
  /*
   * Returns the TextPath with the specified index.
 *
   * @param {Number} index The index.
   * @returns {TextPath}
   */
  []: function(index) {
    return new TextPath();
  },
  
};
