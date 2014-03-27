/*
 * A collection of dialog columns.
 */
var DialogColumns = {
  /*
   * The number of objects in the collection.
   * @type {Number}
   */
  length: undefined,
  
  /*
   * Creates a new DialogColumn.
 *
   * @param {Object} [withProperties] Initial values for properties of the new DialogColumn 
   * @returns {DialogColumn}
   */
  add: function(withProperties) {
    return new DialogColumn();
  },
  
  /*
   * Displays the number of elements in the DialogColumn.
   * @returns {Number}
   */
  count: function() {
    return new Number();
  },
  
  /*
   * Returns the DialogColumn with the specified index or name.
 *
   * @param {Mixed} index The index or name. Can accept: Long Integer or String.
   * @returns {DialogColumn}
   */
  item: function(index) {
    return new DialogColumn();
  },
  
  /*
   * Returns the DialogColumn with the specified ID.
 *
   * @param {Number} id The ID.
   * @returns {DialogColumn}
   */
  itemByID: function(id) {
    return new DialogColumn();
  },
  
  /*
   * Returns the DialogColumns within the specified range.
 *
   * @param {Mixed} from The DialogColumn, index, or name at the beginning of the range. Can accept: DialogColumn, Long Integer or String.
   * @param {Mixed} to The DialogColumn, index, or name at the end of the range. Can accept: DialogColumn, Long Integer or String.
   * @returns {DialogColumn}
   */
  itemByRange: function(from, to) {
    return new DialogColumn();
  },
  
  /*
   * Returns the first DialogColumn in the collection.
   * @returns {DialogColumn}
   */
  firstItem: function() {
    return new DialogColumn();
  },
  
  /*
   * Returns the last DialogColumn in the collection.
   * @returns {DialogColumn}
   */
  lastItem: function() {
    return new DialogColumn();
  },
  
  /*
   * Returns the middle DialogColumn in the collection.
   * @returns {DialogColumn}
   */
  middleItem: function() {
    return new DialogColumn();
  },
  
  /*
   * Returns the DialogColumn with the index previous to the specified index.
 *
   * @param {DialogColumn} obj The index of the DialogColumn that follows the desired DialogColumn.
   * @returns {DialogColumn}
   */
  previousItem: function(obj) {
    return new DialogColumn();
  },
  
  /*
   * Returns the DialogColumn whose index follows the specified DialogColumn in the collection.
 *
   * @param {DialogColumn} obj The DialogColumn whose index comes before the desired DialogColumn.
   * @returns {DialogColumn}
   */
  nextItem: function(obj) {
    return new DialogColumn();
  },
  
  /*
   * Returns any DialogColumn in the collection.
   * @returns {DialogColumn}
   */
  anyItem: function() {
    return new DialogColumn();
  },
  
  /*
   * Returns every DialogColumn in the collection.
   * @returns {DialogColumn}
   */
  everyItem: function() {
    return new DialogColumn();
  },
  
  /*
   * Generates a string which, if executed, will return the DialogColumn.
   * @returns {String}
   */
  toSource: function() {
    return new String();
  },
  
  /*
   * Returns the DialogColumn with the specified index.
 *
   * @param {Number} index The index.
   * @returns {DialogColumn}
   */
  []: function(index) {
    return new DialogColumn();
  },
  
};
