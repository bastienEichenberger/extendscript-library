/*
 * EPSTexts
 */
var EPSTexts = {
  /*
   * The number of objects in the collection.
   * @type {Number}
   */
  length: undefined,
  
  /*
   * Displays the number of elements in the EPSText.
   * @returns {Number}
   */
  count: function() {
    return new Number();
  },
  
  /*
   * Returns the EPSText with the specified index or name.
 *
   * @param {Mixed} index The index or name. Can accept: Long Integer or String.
   * @returns {EPSText}
   */
  item: function(index) {
    return new EPSText();
  },
  
  /*
   * Returns the EPSText with the specified name.
 *
   * @param {String} name The name.
   * @returns {EPSText}
   */
  itemByName: function(name) {
    return new EPSText();
  },
  
  /*
   * Returns the EPSText with the specified ID.
 *
   * @param {Number} id The ID.
   * @returns {EPSText}
   */
  itemByID: function(id) {
    return new EPSText();
  },
  
  /*
   * Returns the EPSTexts within the specified range.
 *
   * @param {Mixed} from The EPSText, index, or name at the beginning of the range. Can accept: EPSText, Long Integer or String.
   * @param {Mixed} to The EPSText, index, or name at the end of the range. Can accept: EPSText, Long Integer or String.
   * @returns {EPSText}
   */
  itemByRange: function(from, to) {
    return new EPSText();
  },
  
  /*
   * Returns the first EPSText in the collection.
   * @returns {EPSText}
   */
  firstItem: function() {
    return new EPSText();
  },
  
  /*
   * Returns the last EPSText in the collection.
   * @returns {EPSText}
   */
  lastItem: function() {
    return new EPSText();
  },
  
  /*
   * Returns the middle EPSText in the collection.
   * @returns {EPSText}
   */
  middleItem: function() {
    return new EPSText();
  },
  
  /*
   * Returns the EPSText with the index previous to the specified index.
 *
   * @param {EPSText} obj The index of the EPSText that follows the desired EPSText.
   * @returns {EPSText}
   */
  previousItem: function(obj) {
    return new EPSText();
  },
  
  /*
   * Returns the EPSText whose index follows the specified EPSText in the collection.
 *
   * @param {EPSText} obj The EPSText whose index comes before the desired EPSText.
   * @returns {EPSText}
   */
  nextItem: function(obj) {
    return new EPSText();
  },
  
  /*
   * Returns any EPSText in the collection.
   * @returns {EPSText}
   */
  anyItem: function() {
    return new EPSText();
  },
  
  /*
   * Returns every EPSText in the collection.
   * @returns {EPSText}
   */
  everyItem: function() {
    return new EPSText();
  },
  
  /*
   * Generates a string which, if executed, will return the EPSText.
   * @returns {String}
   */
  toSource: function() {
    return new String();
  },
  
  /*
   * Returns the EPSText with the specified index.
 *
   * @param {Number} index The index.
   * @returns {EPSText}
   */
  []: function(index) {
    return new EPSText();
  },
  
};
