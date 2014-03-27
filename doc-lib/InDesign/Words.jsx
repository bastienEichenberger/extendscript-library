/*
 * A collection of words.
 */
var Words = {
  /*
   * The number of objects in the collection.
   * @type {Number}
   */
  length: undefined,
  
  /*
   * Displays the number of elements in the Word.
   * @returns {Number}
   */
  count: function() {
    return new Number();
  },
  
  /*
   * Returns the Word with the specified index or name.
 *
   * @param {Mixed} index The index or name. Can accept: Long Integer or String.
   * @returns {Word}
   */
  item: function(index) {
    return new Word();
  },
  
  /*
   * Returns the Words within the specified range.
 *
   * @param {Mixed} from The Word, index, or name at the beginning of the range. Can accept: Word, Long Integer or String.
   * @param {Mixed} to The Word, index, or name at the end of the range. Can accept: Word, Long Integer or String.
   * @returns {Word}
   */
  itemByRange: function(from, to) {
    return new Word();
  },
  
  /*
   * Returns the first Word in the collection.
   * @returns {Word}
   */
  firstItem: function() {
    return new Word();
  },
  
  /*
   * Returns the last Word in the collection.
   * @returns {Word}
   */
  lastItem: function() {
    return new Word();
  },
  
  /*
   * Returns the middle Word in the collection.
   * @returns {Word}
   */
  middleItem: function() {
    return new Word();
  },
  
  /*
   * Returns the Word with the index previous to the specified index.
 *
   * @param {Word} obj The index of the Word that follows the desired Word.
   * @returns {Word}
   */
  previousItem: function(obj) {
    return new Word();
  },
  
  /*
   * Returns the Word whose index follows the specified Word in the collection.
 *
   * @param {Word} obj The Word whose index comes before the desired Word.
   * @returns {Word}
   */
  nextItem: function(obj) {
    return new Word();
  },
  
  /*
   * Returns any Word in the collection.
   * @returns {Word}
   */
  anyItem: function() {
    return new Word();
  },
  
  /*
   * Returns every Word in the collection.
   * @returns {Word}
   */
  everyItem: function() {
    return new Word();
  },
  
  /*
   * Generates a string which, if executed, will return the Word.
   * @returns {String}
   */
  toSource: function() {
    return new String();
  },
  
  /*
   * Returns the Word with the specified index.
 *
   * @param {Number} index The index.
   * @returns {Word}
   */
  []: function(index) {
    return new Word();
  },
  
};
