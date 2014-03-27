/*
 * A collection of text style ranges.
 */
var TextStyleRanges = {
  /*
   * The number of objects in the collection.
   * @type {Number}
   */
  length: undefined,
  
  /*
   * Displays the number of elements in the TextStyleRange.
   * @returns {Number}
   */
  count: function() {
    return new Number();
  },
  
  /*
   * Returns the TextStyleRange with the specified index or name.
 *
   * @param {Mixed} index The index or name. Can accept: Long Integer or String.
   * @returns {TextStyleRange}
   */
  item: function(index) {
    return new TextStyleRange();
  },
  
  /*
   * Returns the TextStyleRanges within the specified range.
 *
   * @param {Mixed} from The TextStyleRange, index, or name at the beginning of the range. Can accept: TextStyleRange, Long Integer or String.
   * @param {Mixed} to The TextStyleRange, index, or name at the end of the range. Can accept: TextStyleRange, Long Integer or String.
   * @returns {TextStyleRange}
   */
  itemByRange: function(from, to) {
    return new TextStyleRange();
  },
  
  /*
   * Returns the first TextStyleRange in the collection.
   * @returns {TextStyleRange}
   */
  firstItem: function() {
    return new TextStyleRange();
  },
  
  /*
   * Returns the last TextStyleRange in the collection.
   * @returns {TextStyleRange}
   */
  lastItem: function() {
    return new TextStyleRange();
  },
  
  /*
   * Returns the middle TextStyleRange in the collection.
   * @returns {TextStyleRange}
   */
  middleItem: function() {
    return new TextStyleRange();
  },
  
  /*
   * Returns the TextStyleRange with the index previous to the specified index.
 *
   * @param {TextStyleRange} obj The index of the TextStyleRange that follows the desired TextStyleRange.
   * @returns {TextStyleRange}
   */
  previousItem: function(obj) {
    return new TextStyleRange();
  },
  
  /*
   * Returns the TextStyleRange whose index follows the specified TextStyleRange in the collection.
 *
   * @param {TextStyleRange} obj The TextStyleRange whose index comes before the desired TextStyleRange.
   * @returns {TextStyleRange}
   */
  nextItem: function(obj) {
    return new TextStyleRange();
  },
  
  /*
   * Returns any TextStyleRange in the collection.
   * @returns {TextStyleRange}
   */
  anyItem: function() {
    return new TextStyleRange();
  },
  
  /*
   * Returns every TextStyleRange in the collection.
   * @returns {TextStyleRange}
   */
  everyItem: function() {
    return new TextStyleRange();
  },
  
  /*
   * Generates a string which, if executed, will return the TextStyleRange.
   * @returns {String}
   */
  toSource: function() {
    return new String();
  },
  
  /*
   * Returns the TextStyleRange with the specified index.
 *
   * @param {Number} index The index.
   * @returns {TextStyleRange}
   */
  []: function(index) {
    return new TextStyleRange();
  },
  
};
