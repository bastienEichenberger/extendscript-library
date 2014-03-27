/*
 * The spline items collection.
 */
var SplineItems = {
  /*
   * The number of objects in the collection.
   * @type {Number}
   */
  length: undefined,
  
  /*
   * Displays the number of elements in the SplineItem.
   * @returns {Number}
   */
  count: function() {
    return new Number();
  },
  
  /*
   * Returns the SplineItem with the specified index or name.
 *
   * @param {Mixed} index The index or name. Can accept: Long Integer or String.
   * @returns {SplineItem}
   */
  item: function(index) {
    return new SplineItem();
  },
  
  /*
   * Returns the SplineItem with the specified name.
 *
   * @param {String} name The name.
   * @returns {SplineItem}
   */
  itemByName: function(name) {
    return new SplineItem();
  },
  
  /*
   * Returns the SplineItem with the specified ID.
 *
   * @param {Number} id The ID.
   * @returns {SplineItem}
   */
  itemByID: function(id) {
    return new SplineItem();
  },
  
  /*
   * Returns the SplineItems within the specified range.
 *
   * @param {Mixed} from The SplineItem, index, or name at the beginning of the range. Can accept: SplineItem, Long Integer or String.
   * @param {Mixed} to The SplineItem, index, or name at the end of the range. Can accept: SplineItem, Long Integer or String.
   * @returns {SplineItem}
   */
  itemByRange: function(from, to) {
    return new SplineItem();
  },
  
  /*
   * Returns the first SplineItem in the collection.
   * @returns {SplineItem}
   */
  firstItem: function() {
    return new SplineItem();
  },
  
  /*
   * Returns the last SplineItem in the collection.
   * @returns {SplineItem}
   */
  lastItem: function() {
    return new SplineItem();
  },
  
  /*
   * Returns the middle SplineItem in the collection.
   * @returns {SplineItem}
   */
  middleItem: function() {
    return new SplineItem();
  },
  
  /*
   * Returns the SplineItem with the index previous to the specified index.
 *
   * @param {SplineItem} obj The index of the SplineItem that follows the desired SplineItem.
   * @returns {SplineItem}
   */
  previousItem: function(obj) {
    return new SplineItem();
  },
  
  /*
   * Returns the SplineItem whose index follows the specified SplineItem in the collection.
 *
   * @param {SplineItem} obj The SplineItem whose index comes before the desired SplineItem.
   * @returns {SplineItem}
   */
  nextItem: function(obj) {
    return new SplineItem();
  },
  
  /*
   * Returns any SplineItem in the collection.
   * @returns {SplineItem}
   */
  anyItem: function() {
    return new SplineItem();
  },
  
  /*
   * Returns every SplineItem in the collection.
   * @returns {SplineItem}
   */
  everyItem: function() {
    return new SplineItem();
  },
  
  /*
   * Generates a string which, if executed, will return the SplineItem.
   * @returns {String}
   */
  toSource: function() {
    return new String();
  },
  
  /*
   * Returns the SplineItem with the specified index.
 *
   * @param {Number} index The index.
   * @returns {SplineItem}
   */
  []: function(index) {
    return new SplineItem();
  },
  
};
