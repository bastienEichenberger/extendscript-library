/*
 * A collection of paths.
 */
var Paths = {
  /*
   * The number of objects in the collection.
   * @type {Number}
   */
  length: undefined,
  
  /*
   * Creates a new Path.
 *
   * @param {Object} [withProperties] Initial values for properties of the new Path 
   * @returns {Path}
   */
  add: function(withProperties) {
    return new Path();
  },
  
  /*
   * Displays the number of elements in the Path.
   * @returns {Number}
   */
  count: function() {
    return new Number();
  },
  
  /*
   * Returns the Path with the specified index or name.
 *
   * @param {Mixed} index The index or name. Can accept: Long Integer or String.
   * @returns {Path}
   */
  item: function(index) {
    return new Path();
  },
  
  /*
   * Returns the Paths within the specified range.
 *
   * @param {Mixed} from The Path, index, or name at the beginning of the range. Can accept: Path, Long Integer or String.
   * @param {Mixed} to The Path, index, or name at the end of the range. Can accept: Path, Long Integer or String.
   * @returns {Path}
   */
  itemByRange: function(from, to) {
    return new Path();
  },
  
  /*
   * Returns the first Path in the collection.
   * @returns {Path}
   */
  firstItem: function() {
    return new Path();
  },
  
  /*
   * Returns the last Path in the collection.
   * @returns {Path}
   */
  lastItem: function() {
    return new Path();
  },
  
  /*
   * Returns the middle Path in the collection.
   * @returns {Path}
   */
  middleItem: function() {
    return new Path();
  },
  
  /*
   * Returns the Path with the index previous to the specified index.
 *
   * @param {Path} obj The index of the Path that follows the desired Path.
   * @returns {Path}
   */
  previousItem: function(obj) {
    return new Path();
  },
  
  /*
   * Returns the Path whose index follows the specified Path in the collection.
 *
   * @param {Path} obj The Path whose index comes before the desired Path.
   * @returns {Path}
   */
  nextItem: function(obj) {
    return new Path();
  },
  
  /*
   * Returns any Path in the collection.
   * @returns {Path}
   */
  anyItem: function() {
    return new Path();
  },
  
  /*
   * Returns every Path in the collection.
   * @returns {Path}
   */
  everyItem: function() {
    return new Path();
  },
  
  /*
   * Generates a string which, if executed, will return the Path.
   * @returns {String}
   */
  toSource: function() {
    return new String();
  },
  
  /*
   * Returns the Path with the specified index.
 *
   * @param {Number} index The index.
   * @returns {Path}
   */
  []: function(index) {
    return new Path();
  },
  
};
