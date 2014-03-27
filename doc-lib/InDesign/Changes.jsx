/*
 * A collection of changes.
 */
var Changes = {
  /*
   * The number of objects in the collection.
   * @type {Number}
   */
  length: undefined,
  
  /*
   * Displays the number of elements in the Change.
   * @returns {Number}
   */
  count: function() {
    return new Number();
  },
  
  /*
   * Returns the Change with the specified index or name.
 *
   * @param {Mixed} index The index or name. Can accept: Long Integer or String.
   * @returns {Change}
   */
  item: function(index) {
    return new Change();
  },
  
  /*
   * Returns the Changes within the specified range.
 *
   * @param {Mixed} from The Change, index, or name at the beginning of the range. Can accept: Change, Long Integer or String.
   * @param {Mixed} to The Change, index, or name at the end of the range. Can accept: Change, Long Integer or String.
   * @returns {Change}
   */
  itemByRange: function(from, to) {
    return new Change();
  },
  
  /*
   * Returns the first Change in the collection.
   * @returns {Change}
   */
  firstItem: function() {
    return new Change();
  },
  
  /*
   * Returns the last Change in the collection.
   * @returns {Change}
   */
  lastItem: function() {
    return new Change();
  },
  
  /*
   * Returns the middle Change in the collection.
   * @returns {Change}
   */
  middleItem: function() {
    return new Change();
  },
  
  /*
   * Returns the Change with the index previous to the specified index.
 *
   * @param {Change} obj The index of the Change that follows the desired Change.
   * @returns {Change}
   */
  previousItem: function(obj) {
    return new Change();
  },
  
  /*
   * Returns the Change whose index follows the specified Change in the collection.
 *
   * @param {Change} obj The Change whose index comes before the desired Change.
   * @returns {Change}
   */
  nextItem: function(obj) {
    return new Change();
  },
  
  /*
   * Returns any Change in the collection.
   * @returns {Change}
   */
  anyItem: function() {
    return new Change();
  },
  
  /*
   * Returns every Change in the collection.
   * @returns {Change}
   */
  everyItem: function() {
    return new Change();
  },
  
  /*
   * Generates a string which, if executed, will return the Change.
   * @returns {String}
   */
  toSource: function() {
    return new String();
  },
  
  /*
   * Returns the Change with the specified index.
 *
   * @param {Number} index The index.
   * @returns {Change}
   */
  []: function(index) {
    return new Change();
  },
  
};
