/*
 * A collection of stroke styles.
 */
var StrokeStyles = {
  /*
   * The number of objects in the collection.
   * @type {Number}
   */
  length: undefined,
  
  /*
   * Displays the number of elements in the StrokeStyle.
   * @returns {Number}
   */
  count: function() {
    return new Number();
  },
  
  /*
   * Returns the StrokeStyle with the specified index or name.
 *
   * @param {Mixed} index The index or name. Can accept: Long Integer or String.
   * @returns {StrokeStyle}
   */
  item: function(index) {
    return new StrokeStyle();
  },
  
  /*
   * Returns the StrokeStyle with the specified name.
 *
   * @param {String} name The name.
   * @returns {StrokeStyle}
   */
  itemByName: function(name) {
    return new StrokeStyle();
  },
  
  /*
   * Returns the StrokeStyle with the specified ID.
 *
   * @param {Number} id The ID.
   * @returns {StrokeStyle}
   */
  itemByID: function(id) {
    return new StrokeStyle();
  },
  
  /*
   * Returns the StrokeStyles within the specified range.
 *
   * @param {Mixed} from The StrokeStyle, index, or name at the beginning of the range. Can accept: StrokeStyle, Long Integer or String.
   * @param {Mixed} to The StrokeStyle, index, or name at the end of the range. Can accept: StrokeStyle, Long Integer or String.
   * @returns {StrokeStyle}
   */
  itemByRange: function(from, to) {
    return new StrokeStyle();
  },
  
  /*
   * Returns the first StrokeStyle in the collection.
   * @returns {StrokeStyle}
   */
  firstItem: function() {
    return new StrokeStyle();
  },
  
  /*
   * Returns the last StrokeStyle in the collection.
   * @returns {StrokeStyle}
   */
  lastItem: function() {
    return new StrokeStyle();
  },
  
  /*
   * Returns the middle StrokeStyle in the collection.
   * @returns {StrokeStyle}
   */
  middleItem: function() {
    return new StrokeStyle();
  },
  
  /*
   * Returns the StrokeStyle with the index previous to the specified index.
 *
   * @param {StrokeStyle} obj The index of the StrokeStyle that follows the desired StrokeStyle.
   * @returns {StrokeStyle}
   */
  previousItem: function(obj) {
    return new StrokeStyle();
  },
  
  /*
   * Returns the StrokeStyle whose index follows the specified StrokeStyle in the collection.
 *
   * @param {StrokeStyle} obj The StrokeStyle whose index comes before the desired StrokeStyle.
   * @returns {StrokeStyle}
   */
  nextItem: function(obj) {
    return new StrokeStyle();
  },
  
  /*
   * Returns any StrokeStyle in the collection.
   * @returns {StrokeStyle}
   */
  anyItem: function() {
    return new StrokeStyle();
  },
  
  /*
   * Returns every StrokeStyle in the collection.
   * @returns {StrokeStyle}
   */
  everyItem: function() {
    return new StrokeStyle();
  },
  
  /*
   * Generates a string which, if executed, will return the StrokeStyle.
   * @returns {String}
   */
  toSource: function() {
    return new String();
  },
  
  /*
   * Returns the StrokeStyle with the specified index.
 *
   * @param {Number} index The index.
   * @returns {StrokeStyle}
   */
  []: function(index) {
    return new StrokeStyle();
  },
  
};
