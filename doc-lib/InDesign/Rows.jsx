/*
 * A collection of table rows.
 */
var Rows = {
  /*
   * The number of objects in the collection.
   * @type {Number}
   */
  length: undefined,
  
  /*
   * Creates a new Row.
 *
   * @param {LocationOptions} [at] The Row's location relative to the reference object or within the table.  
   * @param {Mixed} [reference] The reference object. Note: The reference object must be within the table. Required only when the at value contains before or after. Can accept: Row, Column, Cell or Table. 
   * @param {Object} [withProperties] Initial values for properties of the new Row 
   * @returns {Mixed}
   */
  add: function(at, reference, withProperties) {
    return new Mixed();
  },
  
  /*
   * Displays the number of elements in the Row.
   * @returns {Number}
   */
  count: function() {
    return new Number();
  },
  
  /*
   * Returns the Row with the specified index or name.
 *
   * @param {Mixed} index The index or name. Can accept: Long Integer or String.
   * @returns {Row}
   */
  item: function(index) {
    return new Row();
  },
  
  /*
   * Returns the Row with the specified name.
 *
   * @param {String} name The name.
   * @returns {Row}
   */
  itemByName: function(name) {
    return new Row();
  },
  
  /*
   * Returns the Rows within the specified range.
 *
   * @param {Mixed} from The Row, index, or name at the beginning of the range. Can accept: Row, Long Integer or String.
   * @param {Mixed} to The Row, index, or name at the end of the range. Can accept: Row, Long Integer or String.
   * @returns {Row}
   */
  itemByRange: function(from, to) {
    return new Row();
  },
  
  /*
   * Returns the first Row in the collection.
   * @returns {Row}
   */
  firstItem: function() {
    return new Row();
  },
  
  /*
   * Returns the last Row in the collection.
   * @returns {Row}
   */
  lastItem: function() {
    return new Row();
  },
  
  /*
   * Returns the middle Row in the collection.
   * @returns {Row}
   */
  middleItem: function() {
    return new Row();
  },
  
  /*
   * Returns the Row with the index previous to the specified index.
 *
   * @param {Row} obj The index of the Row that follows the desired Row.
   * @returns {Row}
   */
  previousItem: function(obj) {
    return new Row();
  },
  
  /*
   * Returns the Row whose index follows the specified Row in the collection.
 *
   * @param {Row} obj The Row whose index comes before the desired Row.
   * @returns {Row}
   */
  nextItem: function(obj) {
    return new Row();
  },
  
  /*
   * Returns any Row in the collection.
   * @returns {Row}
   */
  anyItem: function() {
    return new Row();
  },
  
  /*
   * Returns every Row in the collection.
   * @returns {Row}
   */
  everyItem: function() {
    return new Row();
  },
  
  /*
   * Generates a string which, if executed, will return the Row.
   * @returns {String}
   */
  toSource: function() {
    return new String();
  },
  
  /*
   * Returns the Row with the specified index.
 *
   * @param {Number} index The index.
   * @returns {Row}
   */
  []: function(index) {
    return new Row();
  },
  
};
