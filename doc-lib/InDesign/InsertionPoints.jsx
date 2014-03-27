/*
 * A collection of insertion points.
 */
var InsertionPoints = {
  /*
   * The number of objects in the collection.
   * @type {Number}
   */
  length: undefined,
  
  /*
   * Displays the number of elements in the InsertionPoint.
   * @returns {Number}
   */
  count: function() {
    return new Number();
  },
  
  /*
   * Returns the InsertionPoint with the specified index or name.
 *
   * @param {Mixed} index The index or name. Can accept: Long Integer or String.
   * @returns {InsertionPoint}
   */
  item: function(index) {
    return new InsertionPoint();
  },
  
  /*
   * Returns the InsertionPoints within the specified range.
 *
   * @param {Mixed} from The InsertionPoint, index, or name at the beginning of the range. Can accept: InsertionPoint, Long Integer or String.
   * @param {Mixed} to The InsertionPoint, index, or name at the end of the range. Can accept: InsertionPoint, Long Integer or String.
   * @returns {InsertionPoint}
   */
  itemByRange: function(from, to) {
    return new InsertionPoint();
  },
  
  /*
   * Returns the first InsertionPoint in the collection.
   * @returns {InsertionPoint}
   */
  firstItem: function() {
    return new InsertionPoint();
  },
  
  /*
   * Returns the last InsertionPoint in the collection.
   * @returns {InsertionPoint}
   */
  lastItem: function() {
    return new InsertionPoint();
  },
  
  /*
   * Returns the middle InsertionPoint in the collection.
   * @returns {InsertionPoint}
   */
  middleItem: function() {
    return new InsertionPoint();
  },
  
  /*
   * Returns the InsertionPoint with the index previous to the specified index.
 *
   * @param {InsertionPoint} obj The index of the InsertionPoint that follows the desired InsertionPoint.
   * @returns {InsertionPoint}
   */
  previousItem: function(obj) {
    return new InsertionPoint();
  },
  
  /*
   * Returns the InsertionPoint whose index follows the specified InsertionPoint in the collection.
 *
   * @param {InsertionPoint} obj The InsertionPoint whose index comes before the desired InsertionPoint.
   * @returns {InsertionPoint}
   */
  nextItem: function(obj) {
    return new InsertionPoint();
  },
  
  /*
   * Returns any InsertionPoint in the collection.
   * @returns {InsertionPoint}
   */
  anyItem: function() {
    return new InsertionPoint();
  },
  
  /*
   * Returns every InsertionPoint in the collection.
   * @returns {InsertionPoint}
   */
  everyItem: function() {
    return new InsertionPoint();
  },
  
  /*
   * Generates a string which, if executed, will return the InsertionPoint.
   * @returns {String}
   */
  toSource: function() {
    return new String();
  },
  
  /*
   * Returns the InsertionPoint with the specified index.
 *
   * @param {Number} index The index.
   * @returns {InsertionPoint}
   */
  []: function(index) {
    return new InsertionPoint();
  },
  
};
