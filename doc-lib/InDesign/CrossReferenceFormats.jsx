/*
 * A collection of cross reference formats.
 */
var CrossReferenceFormats = {
  /*
   * The number of objects in the collection.
   * @type {Number}
   */
  length: undefined,
  
  /*
   * Creates a new cross reference format.
 *
   * @param {String} [name] The format name. 
   * @param {Object} [withProperties] Initial values for properties of the new CrossReferenceFormat 
   * @returns {CrossReferenceFormat}
   */
  add: function(name, withProperties) {
    return new CrossReferenceFormat();
  },
  
  /*
   * Displays the number of elements in the CrossReferenceFormat.
   * @returns {Number}
   */
  count: function() {
    return new Number();
  },
  
  /*
   * Returns the CrossReferenceFormat with the specified index or name.
 *
   * @param {Mixed} index The index or name. Can accept: Long Integer or String.
   * @returns {CrossReferenceFormat}
   */
  item: function(index) {
    return new CrossReferenceFormat();
  },
  
  /*
   * Returns the CrossReferenceFormat with the specified name.
 *
   * @param {String} name The name.
   * @returns {CrossReferenceFormat}
   */
  itemByName: function(name) {
    return new CrossReferenceFormat();
  },
  
  /*
   * Returns the CrossReferenceFormat with the specified ID.
 *
   * @param {Number} id The ID.
   * @returns {CrossReferenceFormat}
   */
  itemByID: function(id) {
    return new CrossReferenceFormat();
  },
  
  /*
   * Returns the CrossReferenceFormats within the specified range.
 *
   * @param {Mixed} from The CrossReferenceFormat, index, or name at the beginning of the range. Can accept: CrossReferenceFormat, Long Integer or String.
   * @param {Mixed} to The CrossReferenceFormat, index, or name at the end of the range. Can accept: CrossReferenceFormat, Long Integer or String.
   * @returns {CrossReferenceFormat}
   */
  itemByRange: function(from, to) {
    return new CrossReferenceFormat();
  },
  
  /*
   * Returns the first CrossReferenceFormat in the collection.
   * @returns {CrossReferenceFormat}
   */
  firstItem: function() {
    return new CrossReferenceFormat();
  },
  
  /*
   * Returns the last CrossReferenceFormat in the collection.
   * @returns {CrossReferenceFormat}
   */
  lastItem: function() {
    return new CrossReferenceFormat();
  },
  
  /*
   * Returns the middle CrossReferenceFormat in the collection.
   * @returns {CrossReferenceFormat}
   */
  middleItem: function() {
    return new CrossReferenceFormat();
  },
  
  /*
   * Returns the CrossReferenceFormat with the index previous to the specified index.
 *
   * @param {CrossReferenceFormat} obj The index of the CrossReferenceFormat that follows the desired CrossReferenceFormat.
   * @returns {CrossReferenceFormat}
   */
  previousItem: function(obj) {
    return new CrossReferenceFormat();
  },
  
  /*
   * Returns the CrossReferenceFormat whose index follows the specified CrossReferenceFormat in the collection.
 *
   * @param {CrossReferenceFormat} obj The CrossReferenceFormat whose index comes before the desired CrossReferenceFormat.
   * @returns {CrossReferenceFormat}
   */
  nextItem: function(obj) {
    return new CrossReferenceFormat();
  },
  
  /*
   * Returns any CrossReferenceFormat in the collection.
   * @returns {CrossReferenceFormat}
   */
  anyItem: function() {
    return new CrossReferenceFormat();
  },
  
  /*
   * Returns every CrossReferenceFormat in the collection.
   * @returns {CrossReferenceFormat}
   */
  everyItem: function() {
    return new CrossReferenceFormat();
  },
  
  /*
   * Generates a string which, if executed, will return the CrossReferenceFormat.
   * @returns {String}
   */
  toSource: function() {
    return new String();
  },
  
  /*
   * Returns the CrossReferenceFormat with the specified index.
 *
   * @param {Number} index The index.
   * @returns {CrossReferenceFormat}
   */
  []: function(index) {
    return new CrossReferenceFormat();
  },
  
};
