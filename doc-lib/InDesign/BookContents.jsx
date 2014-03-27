/*
 * A collection of book content objects.
 */
var BookContents = {
  /*
   * The number of objects in the collection.
   * @type {Number}
   */
  length: undefined,
  
  /*
   * Creates a new book content object.
 *
   * @param {File} fullName The full path name of the new book content object.
   * @param {Number} [at] The location of the book content object within the book. 
   * @param {Object} [withProperties] Initial values for properties of the new BookContent 
   * @returns {BookContent}
   */
  add: function(fullName, at, withProperties) {
    return new BookContent();
  },
  
  /*
   * Displays the number of elements in the BookContent.
   * @returns {Number}
   */
  count: function() {
    return new Number();
  },
  
  /*
   * Returns the BookContent with the specified index or name.
 *
   * @param {Mixed} index The index or name. Can accept: Long Integer or String.
   * @returns {BookContent}
   */
  item: function(index) {
    return new BookContent();
  },
  
  /*
   * Returns the BookContent with the specified name.
 *
   * @param {String} name The name.
   * @returns {BookContent}
   */
  itemByName: function(name) {
    return new BookContent();
  },
  
  /*
   * Returns the BookContent with the specified ID.
 *
   * @param {Number} id The ID.
   * @returns {BookContent}
   */
  itemByID: function(id) {
    return new BookContent();
  },
  
  /*
   * Returns the BookContents within the specified range.
 *
   * @param {Mixed} from The BookContent, index, or name at the beginning of the range. Can accept: BookContent, Long Integer or String.
   * @param {Mixed} to The BookContent, index, or name at the end of the range. Can accept: BookContent, Long Integer or String.
   * @returns {BookContent}
   */
  itemByRange: function(from, to) {
    return new BookContent();
  },
  
  /*
   * Returns the first BookContent in the collection.
   * @returns {BookContent}
   */
  firstItem: function() {
    return new BookContent();
  },
  
  /*
   * Returns the last BookContent in the collection.
   * @returns {BookContent}
   */
  lastItem: function() {
    return new BookContent();
  },
  
  /*
   * Returns the middle BookContent in the collection.
   * @returns {BookContent}
   */
  middleItem: function() {
    return new BookContent();
  },
  
  /*
   * Returns the BookContent with the index previous to the specified index.
 *
   * @param {BookContent} obj The index of the BookContent that follows the desired BookContent.
   * @returns {BookContent}
   */
  previousItem: function(obj) {
    return new BookContent();
  },
  
  /*
   * Returns the BookContent whose index follows the specified BookContent in the collection.
 *
   * @param {BookContent} obj The BookContent whose index comes before the desired BookContent.
   * @returns {BookContent}
   */
  nextItem: function(obj) {
    return new BookContent();
  },
  
  /*
   * Returns any BookContent in the collection.
   * @returns {BookContent}
   */
  anyItem: function() {
    return new BookContent();
  },
  
  /*
   * Returns every BookContent in the collection.
   * @returns {BookContent}
   */
  everyItem: function() {
    return new BookContent();
  },
  
  /*
   * Generates a string which, if executed, will return the BookContent.
   * @returns {String}
   */
  toSource: function() {
    return new String();
  },
  
  /*
   * Returns the BookContent with the specified index.
 *
   * @param {Number} index The index.
   * @returns {BookContent}
   */
  []: function(index) {
    return new BookContent();
  },
  
};
