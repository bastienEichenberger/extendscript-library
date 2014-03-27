/*
 * A collection of text columns.
 */
var TextColumns = {
  /*
   * The number of objects in the collection.
   * @type {Number}
   */
  length: undefined,
  
  /*
   * Displays the number of elements in the TextColumn.
   * @returns {Number}
   */
  count: function() {
    return new Number();
  },
  
  /*
   * Returns the TextColumn with the specified index or name.
 *
   * @param {Mixed} index The index or name. Can accept: Long Integer or String.
   * @returns {TextColumn}
   */
  item: function(index) {
    return new TextColumn();
  },
  
  /*
   * Returns the TextColumns within the specified range.
 *
   * @param {Mixed} from The TextColumn, index, or name at the beginning of the range. Can accept: TextColumn, Long Integer or String.
   * @param {Mixed} to The TextColumn, index, or name at the end of the range. Can accept: TextColumn, Long Integer or String.
   * @returns {TextColumn}
   */
  itemByRange: function(from, to) {
    return new TextColumn();
  },
  
  /*
   * Returns the first TextColumn in the collection.
   * @returns {TextColumn}
   */
  firstItem: function() {
    return new TextColumn();
  },
  
  /*
   * Returns the last TextColumn in the collection.
   * @returns {TextColumn}
   */
  lastItem: function() {
    return new TextColumn();
  },
  
  /*
   * Returns the middle TextColumn in the collection.
   * @returns {TextColumn}
   */
  middleItem: function() {
    return new TextColumn();
  },
  
  /*
   * Returns the TextColumn with the index previous to the specified index.
 *
   * @param {TextColumn} obj The index of the TextColumn that follows the desired TextColumn.
   * @returns {TextColumn}
   */
  previousItem: function(obj) {
    return new TextColumn();
  },
  
  /*
   * Returns the TextColumn whose index follows the specified TextColumn in the collection.
 *
   * @param {TextColumn} obj The TextColumn whose index comes before the desired TextColumn.
   * @returns {TextColumn}
   */
  nextItem: function(obj) {
    return new TextColumn();
  },
  
  /*
   * Returns any TextColumn in the collection.
   * @returns {TextColumn}
   */
  anyItem: function() {
    return new TextColumn();
  },
  
  /*
   * Returns every TextColumn in the collection.
   * @returns {TextColumn}
   */
  everyItem: function() {
    return new TextColumn();
  },
  
  /*
   * Generates a string which, if executed, will return the TextColumn.
   * @returns {String}
   */
  toSource: function() {
    return new String();
  },
  
  /*
   * Returns the TextColumn with the specified index.
 *
   * @param {Number} index The index.
   * @returns {TextColumn}
   */
  []: function(index) {
    return new TextColumn();
  },
  
};
