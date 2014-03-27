/*
 * A collection of object libraries.
 */
var Libraries = {
  /*
   * The number of objects in the collection.
   * @type {Number}
   */
  length: undefined,
  
  /*
   * Creates a new object libary.
 *
   * @param {File} fullName The library's path and file name.
   * @param {Object} [withProperties] Initial values for properties of the new Library 
   * @returns {Library}
   */
  add: function(fullName, withProperties) {
    return new Library();
  },
  
  /*
   * Displays the number of elements in the Library.
   * @returns {Number}
   */
  count: function() {
    return new Number();
  },
  
  /*
   * Returns the Library with the specified index or name.
 *
   * @param {Mixed} index The index or name. Can accept: Long Integer or String.
   * @returns {Library}
   */
  item: function(index) {
    return new Library();
  },
  
  /*
   * Returns the Library with the specified name.
 *
   * @param {String} name The name.
   * @returns {Library}
   */
  itemByName: function(name) {
    return new Library();
  },
  
  /*
   * Returns the Libraries within the specified range.
 *
   * @param {Mixed} from The Library, index, or name at the beginning of the range. Can accept: Library, Long Integer or String.
   * @param {Mixed} to The Library, index, or name at the end of the range. Can accept: Library, Long Integer or String.
   * @returns {Library}
   */
  itemByRange: function(from, to) {
    return new Library();
  },
  
  /*
   * Returns the first Library in the collection.
   * @returns {Library}
   */
  firstItem: function() {
    return new Library();
  },
  
  /*
   * Returns the last Library in the collection.
   * @returns {Library}
   */
  lastItem: function() {
    return new Library();
  },
  
  /*
   * Returns the middle Library in the collection.
   * @returns {Library}
   */
  middleItem: function() {
    return new Library();
  },
  
  /*
   * Returns the Library with the index previous to the specified index.
 *
   * @param {Library} obj The index of the Library that follows the desired Library.
   * @returns {Library}
   */
  previousItem: function(obj) {
    return new Library();
  },
  
  /*
   * Returns the Library whose index follows the specified Library in the collection.
 *
   * @param {Library} obj The Library whose index comes before the desired Library.
   * @returns {Library}
   */
  nextItem: function(obj) {
    return new Library();
  },
  
  /*
   * Returns any Library in the collection.
   * @returns {Library}
   */
  anyItem: function() {
    return new Library();
  },
  
  /*
   * Returns every Library in the collection.
   * @returns {Library}
   */
  everyItem: function() {
    return new Library();
  },
  
  /*
   * Generates a string which, if executed, will return the Library.
   * @returns {String}
   */
  toSource: function() {
    return new String();
  },
  
  /*
   * Returns the Library with the specified index.
 *
   * @param {Number} index The index.
   * @returns {Library}
   */
  []: function(index) {
    return new Library();
  },
  
};
