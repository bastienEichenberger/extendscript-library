/*
 * A collection of languages.
 */
var Languages = {
  /*
   * The number of objects in the collection.
   * @type {Number}
   */
  length: undefined,
  
  /*
   * Displays the number of elements in the Language.
   * @returns {Number}
   */
  count: function() {
    return new Number();
  },
  
  /*
   * Returns the Language with the specified index or name.
 *
   * @param {Mixed} index The index or name. Can accept: Long Integer or String.
   * @returns {Language}
   */
  item: function(index) {
    return new Language();
  },
  
  /*
   * Returns the Language with the specified name.
 *
   * @param {String} name The name.
   * @returns {Language}
   */
  itemByName: function(name) {
    return new Language();
  },
  
  /*
   * Returns the Language with the specified ID.
 *
   * @param {Number} id The ID.
   * @returns {Language}
   */
  itemByID: function(id) {
    return new Language();
  },
  
  /*
   * Returns the Languages within the specified range.
 *
   * @param {Mixed} from The Language, index, or name at the beginning of the range. Can accept: Language, Long Integer or String.
   * @param {Mixed} to The Language, index, or name at the end of the range. Can accept: Language, Long Integer or String.
   * @returns {Language}
   */
  itemByRange: function(from, to) {
    return new Language();
  },
  
  /*
   * Returns the first Language in the collection.
   * @returns {Language}
   */
  firstItem: function() {
    return new Language();
  },
  
  /*
   * Returns the last Language in the collection.
   * @returns {Language}
   */
  lastItem: function() {
    return new Language();
  },
  
  /*
   * Returns the middle Language in the collection.
   * @returns {Language}
   */
  middleItem: function() {
    return new Language();
  },
  
  /*
   * Returns the Language with the index previous to the specified index.
 *
   * @param {Language} obj The index of the Language that follows the desired Language.
   * @returns {Language}
   */
  previousItem: function(obj) {
    return new Language();
  },
  
  /*
   * Returns the Language whose index follows the specified Language in the collection.
 *
   * @param {Language} obj The Language whose index comes before the desired Language.
   * @returns {Language}
   */
  nextItem: function(obj) {
    return new Language();
  },
  
  /*
   * Returns any Language in the collection.
   * @returns {Language}
   */
  anyItem: function() {
    return new Language();
  },
  
  /*
   * Returns every Language in the collection.
   * @returns {Language}
   */
  everyItem: function() {
    return new Language();
  },
  
  /*
   * Generates a string which, if executed, will return the Language.
   * @returns {String}
   */
  toSource: function() {
    return new String();
  },
  
  /*
   * Returns the Language with the specified index.
 *
   * @param {Number} index The index.
   * @returns {Language}
   */
  []: function(index) {
    return new Language();
  },
  
};
