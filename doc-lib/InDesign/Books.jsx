/*
 * A collection of books.
 */
var Books = {
  /*
   * The number of objects in the collection.
   * @type {Number}
   */
  length: undefined,
  
  /*
   * Creates a new book.
 *
   * @param {File} fullName The full path name of the new book file, including the book file extension '.indb'.
   * @param {Object} [withProperties] Initial values for properties of the new Book 
   * @returns {Book}
   */
  add: function(fullName, withProperties) {
    return new Book();
  },
  
  /*
   * Displays the number of elements in the Book.
   * @returns {Number}
   */
  count: function() {
    return new Number();
  },
  
  /*
   * Returns the Book with the specified index or name.
 *
   * @param {Mixed} index The index or name. Can accept: Long Integer or String.
   * @returns {Book}
   */
  item: function(index) {
    return new Book();
  },
  
  /*
   * Returns the Book with the specified name.
 *
   * @param {String} name The name.
   * @returns {Book}
   */
  itemByName: function(name) {
    return new Book();
  },
  
  /*
   * Returns the Books within the specified range.
 *
   * @param {Mixed} from The Book, index, or name at the beginning of the range. Can accept: Book, Long Integer or String.
   * @param {Mixed} to The Book, index, or name at the end of the range. Can accept: Book, Long Integer or String.
   * @returns {Book}
   */
  itemByRange: function(from, to) {
    return new Book();
  },
  
  /*
   * Returns the first Book in the collection.
   * @returns {Book}
   */
  firstItem: function() {
    return new Book();
  },
  
  /*
   * Returns the last Book in the collection.
   * @returns {Book}
   */
  lastItem: function() {
    return new Book();
  },
  
  /*
   * Returns the middle Book in the collection.
   * @returns {Book}
   */
  middleItem: function() {
    return new Book();
  },
  
  /*
   * Returns the Book with the index previous to the specified index.
 *
   * @param {Book} obj The index of the Book that follows the desired Book.
   * @returns {Book}
   */
  previousItem: function(obj) {
    return new Book();
  },
  
  /*
   * Returns the Book whose index follows the specified Book in the collection.
 *
   * @param {Book} obj The Book whose index comes before the desired Book.
   * @returns {Book}
   */
  nextItem: function(obj) {
    return new Book();
  },
  
  /*
   * Returns any Book in the collection.
   * @returns {Book}
   */
  anyItem: function() {
    return new Book();
  },
  
  /*
   * Returns every Book in the collection.
   * @returns {Book}
   */
  everyItem: function() {
    return new Book();
  },
  
  /*
   * Generates a string which, if executed, will return the Book.
   * @returns {String}
   */
  toSource: function() {
    return new String();
  },
  
  /*
   * Returns the Book with the specified index.
 *
   * @param {Number} index The index.
   * @returns {Book}
   */
  []: function(index) {
    return new Book();
  },
  
};
