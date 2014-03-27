/*
 * A collection of cell styles.
 */
var CellStyles = {
  /*
   * The number of objects in the collection. Can return: Long Integer or NothingEnum enumerator.
   * @type {Mixed}
   */
  length: undefined,
  
  /*
   * Creates a new CellStyle.
 *
   * @param {Object} [withProperties] Initial values for properties of the new CellStyle 
   * @returns {CellStyle}
   */
  add: function(withProperties) {
    return new CellStyle();
  },
  
  /*
   * Displays the number of elements in the CellStyle.
   * @returns {Number}
   */
  count: function() {
    return new Number();
  },
  
  /*
   * Returns the CellStyle with the specified index or name.
 *
   * @param {Mixed} index The index or name. Can accept: Long Integer or String.
   * @returns {CellStyle}
   */
  item: function(index) {
    return new CellStyle();
  },
  
  /*
   * Returns the CellStyle with the specified name.
 *
   * @param {String} name The name.
   * @returns {CellStyle}
   */
  itemByName: function(name) {
    return new CellStyle();
  },
  
  /*
   * Returns the CellStyle with the specified ID.
 *
   * @param {Number} id The ID.
   * @returns {CellStyle}
   */
  itemByID: function(id) {
    return new CellStyle();
  },
  
  /*
   * Returns the CellStyles within the specified range.
 *
   * @param {Mixed} from The CellStyle, index, or name at the beginning of the range. Can accept: CellStyle, Long Integer or String.
   * @param {Mixed} to The CellStyle, index, or name at the end of the range. Can accept: CellStyle, Long Integer or String.
   * @returns {CellStyle}
   */
  itemByRange: function(from, to) {
    return new CellStyle();
  },
  
  /*
   * Returns the first CellStyle in the collection.
   * @returns {CellStyle}
   */
  firstItem: function() {
    return new CellStyle();
  },
  
  /*
   * Returns the last CellStyle in the collection.
   * @returns {CellStyle}
   */
  lastItem: function() {
    return new CellStyle();
  },
  
  /*
   * Returns the middle CellStyle in the collection.
   * @returns {CellStyle}
   */
  middleItem: function() {
    return new CellStyle();
  },
  
  /*
   * Returns the CellStyle with the index previous to the specified index.
 *
   * @param {CellStyle} obj The index of the CellStyle that follows the desired CellStyle.
   * @returns {CellStyle}
   */
  previousItem: function(obj) {
    return new CellStyle();
  },
  
  /*
   * Returns the CellStyle whose index follows the specified CellStyle in the collection.
 *
   * @param {CellStyle} obj The CellStyle whose index comes before the desired CellStyle.
   * @returns {CellStyle}
   */
  nextItem: function(obj) {
    return new CellStyle();
  },
  
  /*
   * Returns any CellStyle in the collection.
   * @returns {CellStyle}
   */
  anyItem: function() {
    return new CellStyle();
  },
  
  /*
   * Returns every CellStyle in the collection.
   * @returns {CellStyle}
   */
  everyItem: function() {
    return new CellStyle();
  },
  
  /*
   * Generates a string which, if executed, will return the CellStyle.
   * @returns {String}
   */
  toSource: function() {
    return new String();
  },
  
  /*
   * Returns the CellStyle with the specified index.
 *
   * @param {Number} index The index.
   * @returns {CellStyle}
   */
  []: function(index) {
    return new CellStyle();
  },
  
};
