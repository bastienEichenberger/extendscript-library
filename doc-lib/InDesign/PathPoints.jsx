/*
 * A collection of path points.
 */
var PathPoints = {
  /*
   * The number of objects in the collection.
   * @type {Number}
   */
  length: undefined,
  
  /*
   * Creates a new PathPoint.
 *
   * @param {Object} [withProperties] Initial values for properties of the new PathPoint 
   * @returns {PathPoint}
   */
  add: function(withProperties) {
    return new PathPoint();
  },
  
  /*
   * Displays the number of elements in the PathPoint.
   * @returns {Number}
   */
  count: function() {
    return new Number();
  },
  
  /*
   * Returns the PathPoint with the specified index or name.
 *
   * @param {Mixed} index The index or name. Can accept: Long Integer or String.
   * @returns {PathPoint}
   */
  item: function(index) {
    return new PathPoint();
  },
  
  /*
   * Returns the PathPoints within the specified range.
 *
   * @param {Mixed} from The PathPoint, index, or name at the beginning of the range. Can accept: PathPoint, Long Integer or String.
   * @param {Mixed} to The PathPoint, index, or name at the end of the range. Can accept: PathPoint, Long Integer or String.
   * @returns {PathPoint}
   */
  itemByRange: function(from, to) {
    return new PathPoint();
  },
  
  /*
   * Returns the first PathPoint in the collection.
   * @returns {PathPoint}
   */
  firstItem: function() {
    return new PathPoint();
  },
  
  /*
   * Returns the last PathPoint in the collection.
   * @returns {PathPoint}
   */
  lastItem: function() {
    return new PathPoint();
  },
  
  /*
   * Returns the middle PathPoint in the collection.
   * @returns {PathPoint}
   */
  middleItem: function() {
    return new PathPoint();
  },
  
  /*
   * Returns the PathPoint with the index previous to the specified index.
 *
   * @param {PathPoint} obj The index of the PathPoint that follows the desired PathPoint.
   * @returns {PathPoint}
   */
  previousItem: function(obj) {
    return new PathPoint();
  },
  
  /*
   * Returns the PathPoint whose index follows the specified PathPoint in the collection.
 *
   * @param {PathPoint} obj The PathPoint whose index comes before the desired PathPoint.
   * @returns {PathPoint}
   */
  nextItem: function(obj) {
    return new PathPoint();
  },
  
  /*
   * Returns any PathPoint in the collection.
   * @returns {PathPoint}
   */
  anyItem: function() {
    return new PathPoint();
  },
  
  /*
   * Returns every PathPoint in the collection.
   * @returns {PathPoint}
   */
  everyItem: function() {
    return new PathPoint();
  },
  
  /*
   * Generates a string which, if executed, will return the PathPoint.
   * @returns {String}
   */
  toSource: function() {
    return new String();
  },
  
  /*
   * Returns the PathPoint with the specified index.
 *
   * @param {Number} index The index.
   * @returns {PathPoint}
   */
  []: function(index) {
    return new PathPoint();
  },
  
};
