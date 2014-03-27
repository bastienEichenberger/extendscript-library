/*
 * A collection of object styles.
 */
var ObjectStyles = {
  /*
   * The number of objects in the collection.
   * @type {Number}
   */
  length: undefined,
  
  /*
   * Creates a new ObjectStyle.
 *
   * @param {Object} [withProperties] Initial values for properties of the new ObjectStyle 
   * @returns {ObjectStyle}
   */
  add: function(withProperties) {
    return new ObjectStyle();
  },
  
  /*
   * Displays the number of elements in the ObjectStyle.
   * @returns {Number}
   */
  count: function() {
    return new Number();
  },
  
  /*
   * Returns the ObjectStyle with the specified index or name.
 *
   * @param {Mixed} index The index or name. Can accept: Long Integer or String.
   * @returns {ObjectStyle}
   */
  item: function(index) {
    return new ObjectStyle();
  },
  
  /*
   * Returns the ObjectStyle with the specified name.
 *
   * @param {String} name The name.
   * @returns {ObjectStyle}
   */
  itemByName: function(name) {
    return new ObjectStyle();
  },
  
  /*
   * Returns the ObjectStyle with the specified ID.
 *
   * @param {Number} id The ID.
   * @returns {ObjectStyle}
   */
  itemByID: function(id) {
    return new ObjectStyle();
  },
  
  /*
   * Returns the ObjectStyles within the specified range.
 *
   * @param {Mixed} from The ObjectStyle, index, or name at the beginning of the range. Can accept: ObjectStyle, Long Integer or String.
   * @param {Mixed} to The ObjectStyle, index, or name at the end of the range. Can accept: ObjectStyle, Long Integer or String.
   * @returns {ObjectStyle}
   */
  itemByRange: function(from, to) {
    return new ObjectStyle();
  },
  
  /*
   * Returns the first ObjectStyle in the collection.
   * @returns {ObjectStyle}
   */
  firstItem: function() {
    return new ObjectStyle();
  },
  
  /*
   * Returns the last ObjectStyle in the collection.
   * @returns {ObjectStyle}
   */
  lastItem: function() {
    return new ObjectStyle();
  },
  
  /*
   * Returns the middle ObjectStyle in the collection.
   * @returns {ObjectStyle}
   */
  middleItem: function() {
    return new ObjectStyle();
  },
  
  /*
   * Returns the ObjectStyle with the index previous to the specified index.
 *
   * @param {ObjectStyle} obj The index of the ObjectStyle that follows the desired ObjectStyle.
   * @returns {ObjectStyle}
   */
  previousItem: function(obj) {
    return new ObjectStyle();
  },
  
  /*
   * Returns the ObjectStyle whose index follows the specified ObjectStyle in the collection.
 *
   * @param {ObjectStyle} obj The ObjectStyle whose index comes before the desired ObjectStyle.
   * @returns {ObjectStyle}
   */
  nextItem: function(obj) {
    return new ObjectStyle();
  },
  
  /*
   * Returns any ObjectStyle in the collection.
   * @returns {ObjectStyle}
   */
  anyItem: function() {
    return new ObjectStyle();
  },
  
  /*
   * Returns every ObjectStyle in the collection.
   * @returns {ObjectStyle}
   */
  everyItem: function() {
    return new ObjectStyle();
  },
  
  /*
   * Generates a string which, if executed, will return the ObjectStyle.
   * @returns {String}
   */
  toSource: function() {
    return new String();
  },
  
  /*
   * Returns the ObjectStyle with the specified index.
 *
   * @param {Number} index The index.
   * @returns {ObjectStyle}
   */
  []: function(index) {
    return new ObjectStyle();
  },
  
};
