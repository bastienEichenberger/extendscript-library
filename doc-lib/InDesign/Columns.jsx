/*
 * A collection of table columns.
 */
var Columns = {
  /*
   * The number of objects in the collection.
   * @type {Number}
   */
  length: undefined,
  
  /*
   * Creates a new Column.
 *
   * @param {LocationOptions} [at] The Column's location relative to the reference object or within the table.  
   * @param {Mixed} [reference] The reference object. Note: The reference object must be within the table. Required only when the at value contains before or after. Can accept: Row, Column, Cell or Table. 
   * @param {Object} [withProperties] Initial values for properties of the new Column 
   * @returns {Mixed}
   */
  add: function(at, reference, withProperties) {
    return new Mixed();
  },
  
  /*
   * Displays the number of elements in the Column.
   * @returns {Number}
   */
  count: function() {
    return new Number();
  },
  
  /*
   * Returns the Column with the specified index or name.
 *
   * @param {Mixed} index The index or name. Can accept: Long Integer or String.
   * @returns {Column}
   */
  item: function(index) {
    return new Column();
  },
  
  /*
   * Returns the Column with the specified name.
 *
   * @param {String} name The name.
   * @returns {Column}
   */
  itemByName: function(name) {
    return new Column();
  },
  
  /*
   * Returns the Columns within the specified range.
 *
   * @param {Mixed} from The Column, index, or name at the beginning of the range. Can accept: Column, Long Integer or String.
   * @param {Mixed} to The Column, index, or name at the end of the range. Can accept: Column, Long Integer or String.
   * @returns {Column}
   */
  itemByRange: function(from, to) {
    return new Column();
  },
  
  /*
   * Returns the first Column in the collection.
   * @returns {Column}
   */
  firstItem: function() {
    return new Column();
  },
  
  /*
   * Returns the last Column in the collection.
   * @returns {Column}
   */
  lastItem: function() {
    return new Column();
  },
  
  /*
   * Returns the middle Column in the collection.
   * @returns {Column}
   */
  middleItem: function() {
    return new Column();
  },
  
  /*
   * Returns the Column with the index previous to the specified index.
 *
   * @param {Column} obj The index of the Column that follows the desired Column.
   * @returns {Column}
   */
  previousItem: function(obj) {
    return new Column();
  },
  
  /*
   * Returns the Column whose index follows the specified Column in the collection.
 *
   * @param {Column} obj The Column whose index comes before the desired Column.
   * @returns {Column}
   */
  nextItem: function(obj) {
    return new Column();
  },
  
  /*
   * Returns any Column in the collection.
   * @returns {Column}
   */
  anyItem: function() {
    return new Column();
  },
  
  /*
   * Returns every Column in the collection.
   * @returns {Column}
   */
  everyItem: function() {
    return new Column();
  },
  
  /*
   * Generates a string which, if executed, will return the Column.
   * @returns {String}
   */
  toSource: function() {
    return new String();
  },
  
  /*
   * Returns the Column with the specified index.
 *
   * @param {Number} index The index.
   * @returns {Column}
   */
  []: function(index) {
    return new Column();
  },
  
};
