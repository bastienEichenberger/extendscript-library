/*
 * A collection of lines.
 */
var Lines = {
  /*
   * The number of objects in the collection.
   * @type {Number}
   */
  length: undefined,
  
  /*
   * Displays the number of elements in the Line.
   * @returns {Number}
   */
  count: function() {
    return new Number();
  },
  
  /*
   * Returns the Line with the specified index or name.
 *
   * @param {Mixed} index The index or name. Can accept: Long Integer or String.
   * @returns {Line}
   */
  item: function(index) {
    return new Line();
  },
  
  /*
   * Returns the Lines within the specified range.
 *
   * @param {Mixed} from The Line, index, or name at the beginning of the range. Can accept: Line, Long Integer or String.
   * @param {Mixed} to The Line, index, or name at the end of the range. Can accept: Line, Long Integer or String.
   * @returns {Line}
   */
  itemByRange: function(from, to) {
    return new Line();
  },
  
  /*
   * Returns the first Line in the collection.
   * @returns {Line}
   */
  firstItem: function() {
    return new Line();
  },
  
  /*
   * Returns the last Line in the collection.
   * @returns {Line}
   */
  lastItem: function() {
    return new Line();
  },
  
  /*
   * Returns the middle Line in the collection.
   * @returns {Line}
   */
  middleItem: function() {
    return new Line();
  },
  
  /*
   * Returns the Line with the index previous to the specified index.
 *
   * @param {Line} obj The index of the Line that follows the desired Line.
   * @returns {Line}
   */
  previousItem: function(obj) {
    return new Line();
  },
  
  /*
   * Returns the Line whose index follows the specified Line in the collection.
 *
   * @param {Line} obj The Line whose index comes before the desired Line.
   * @returns {Line}
   */
  nextItem: function(obj) {
    return new Line();
  },
  
  /*
   * Returns any Line in the collection.
   * @returns {Line}
   */
  anyItem: function() {
    return new Line();
  },
  
  /*
   * Returns every Line in the collection.
   * @returns {Line}
   */
  everyItem: function() {
    return new Line();
  },
  
  /*
   * Generates a string which, if executed, will return the Line.
   * @returns {String}
   */
  toSource: function() {
    return new String();
  },
  
  /*
   * Returns the Line with the specified index.
 *
   * @param {Number} index The index.
   * @returns {Line}
   */
  []: function(index) {
    return new Line();
  },
  
};
