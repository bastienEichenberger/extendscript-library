/*
 * A collection of dialog rows.
 */
var DialogRows = {
  /*
   * The number of objects in the collection.
   * @type {Number}
   */
  length: undefined,
  
  /*
   * Creates a new DialogRow.
 *
   * @param {Object} [withProperties] Initial values for properties of the new DialogRow 
   * @returns {DialogRow}
   */
  add: function(withProperties) {
    return new DialogRow();
  },
  
  /*
   * Displays the number of elements in the DialogRow.
   * @returns {Number}
   */
  count: function() {
    return new Number();
  },
  
  /*
   * Returns the DialogRow with the specified index or name.
 *
   * @param {Mixed} index The index or name. Can accept: Long Integer or String.
   * @returns {DialogRow}
   */
  item: function(index) {
    return new DialogRow();
  },
  
  /*
   * Returns the DialogRow with the specified ID.
 *
   * @param {Number} id The ID.
   * @returns {DialogRow}
   */
  itemByID: function(id) {
    return new DialogRow();
  },
  
  /*
   * Returns the DialogRows within the specified range.
 *
   * @param {Mixed} from The DialogRow, index, or name at the beginning of the range. Can accept: DialogRow, Long Integer or String.
   * @param {Mixed} to The DialogRow, index, or name at the end of the range. Can accept: DialogRow, Long Integer or String.
   * @returns {DialogRow}
   */
  itemByRange: function(from, to) {
    return new DialogRow();
  },
  
  /*
   * Returns the first DialogRow in the collection.
   * @returns {DialogRow}
   */
  firstItem: function() {
    return new DialogRow();
  },
  
  /*
   * Returns the last DialogRow in the collection.
   * @returns {DialogRow}
   */
  lastItem: function() {
    return new DialogRow();
  },
  
  /*
   * Returns the middle DialogRow in the collection.
   * @returns {DialogRow}
   */
  middleItem: function() {
    return new DialogRow();
  },
  
  /*
   * Returns the DialogRow with the index previous to the specified index.
 *
   * @param {DialogRow} obj The index of the DialogRow that follows the desired DialogRow.
   * @returns {DialogRow}
   */
  previousItem: function(obj) {
    return new DialogRow();
  },
  
  /*
   * Returns the DialogRow whose index follows the specified DialogRow in the collection.
 *
   * @param {DialogRow} obj The DialogRow whose index comes before the desired DialogRow.
   * @returns {DialogRow}
   */
  nextItem: function(obj) {
    return new DialogRow();
  },
  
  /*
   * Returns any DialogRow in the collection.
   * @returns {DialogRow}
   */
  anyItem: function() {
    return new DialogRow();
  },
  
  /*
   * Returns every DialogRow in the collection.
   * @returns {DialogRow}
   */
  everyItem: function() {
    return new DialogRow();
  },
  
  /*
   * Generates a string which, if executed, will return the DialogRow.
   * @returns {String}
   */
  toSource: function() {
    return new String();
  },
  
  /*
   * Returns the DialogRow with the specified index.
 *
   * @param {Number} index The index.
   * @returns {DialogRow}
   */
  []: function(index) {
    return new DialogRow();
  },
  
};
