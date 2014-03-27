/*
 * A collection of table styles.
 */
var TableStyles = {
  /*
   * The number of objects in the collection.
   * @type {Number}
   */
  length: undefined,
  
  /*
   * Creates a new TableStyle.
 *
   * @param {Object} [withProperties] Initial values for properties of the new TableStyle 
   * @returns {TableStyle}
   */
  add: function(withProperties) {
    return new TableStyle();
  },
  
  /*
   * Displays the number of elements in the TableStyle.
   * @returns {Number}
   */
  count: function() {
    return new Number();
  },
  
  /*
   * Returns the TableStyle with the specified index or name.
 *
   * @param {Mixed} index The index or name. Can accept: Long Integer or String.
   * @returns {TableStyle}
   */
  item: function(index) {
    return new TableStyle();
  },
  
  /*
   * Returns the TableStyle with the specified name.
 *
   * @param {String} name The name.
   * @returns {TableStyle}
   */
  itemByName: function(name) {
    return new TableStyle();
  },
  
  /*
   * Returns the TableStyle with the specified ID.
 *
   * @param {Number} id The ID.
   * @returns {TableStyle}
   */
  itemByID: function(id) {
    return new TableStyle();
  },
  
  /*
   * Returns the TableStyles within the specified range.
 *
   * @param {Mixed} from The TableStyle, index, or name at the beginning of the range. Can accept: TableStyle, Long Integer or String.
   * @param {Mixed} to The TableStyle, index, or name at the end of the range. Can accept: TableStyle, Long Integer or String.
   * @returns {TableStyle}
   */
  itemByRange: function(from, to) {
    return new TableStyle();
  },
  
  /*
   * Returns the first TableStyle in the collection.
   * @returns {TableStyle}
   */
  firstItem: function() {
    return new TableStyle();
  },
  
  /*
   * Returns the last TableStyle in the collection.
   * @returns {TableStyle}
   */
  lastItem: function() {
    return new TableStyle();
  },
  
  /*
   * Returns the middle TableStyle in the collection.
   * @returns {TableStyle}
   */
  middleItem: function() {
    return new TableStyle();
  },
  
  /*
   * Returns the TableStyle with the index previous to the specified index.
 *
   * @param {TableStyle} obj The index of the TableStyle that follows the desired TableStyle.
   * @returns {TableStyle}
   */
  previousItem: function(obj) {
    return new TableStyle();
  },
  
  /*
   * Returns the TableStyle whose index follows the specified TableStyle in the collection.
 *
   * @param {TableStyle} obj The TableStyle whose index comes before the desired TableStyle.
   * @returns {TableStyle}
   */
  nextItem: function(obj) {
    return new TableStyle();
  },
  
  /*
   * Returns any TableStyle in the collection.
   * @returns {TableStyle}
   */
  anyItem: function() {
    return new TableStyle();
  },
  
  /*
   * Returns every TableStyle in the collection.
   * @returns {TableStyle}
   */
  everyItem: function() {
    return new TableStyle();
  },
  
  /*
   * Generates a string which, if executed, will return the TableStyle.
   * @returns {String}
   */
  toSource: function() {
    return new String();
  },
  
  /*
   * Returns the TableStyle with the specified index.
 *
   * @param {Number} index The index.
   * @returns {TableStyle}
   */
  []: function(index) {
    return new TableStyle();
  },
  
};
