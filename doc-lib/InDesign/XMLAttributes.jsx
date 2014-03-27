/*
 * A collection of XML attributes.
 */
var XMLAttributes = {
  /*
   * The number of objects in the collection.
   * @type {Number}
   */
  length: undefined,
  
  /*
   * Creates a new XML attribute.
 *
   * @param {String} name The name of the attribute.
   * @param {String} value The value of the attribute.
   * @param {Object} [withProperties] Initial values for properties of the new XMLAttribute 
   * @returns {XMLAttribute}
   */
  add: function(name, value, withProperties) {
    return new XMLAttribute();
  },
  
  /*
   * Displays the number of elements in the XMLAttribute.
   * @returns {Number}
   */
  count: function() {
    return new Number();
  },
  
  /*
   * Returns the XMLAttribute with the specified index or name.
 *
   * @param {Mixed} index The index or name. Can accept: Long Integer or String.
   * @returns {XMLAttribute}
   */
  item: function(index) {
    return new XMLAttribute();
  },
  
  /*
   * Returns the XMLAttribute with the specified name.
 *
   * @param {String} name The name.
   * @returns {XMLAttribute}
   */
  itemByName: function(name) {
    return new XMLAttribute();
  },
  
  /*
   * Returns the XMLAttributes within the specified range.
 *
   * @param {Mixed} from The XMLAttribute, index, or name at the beginning of the range. Can accept: XMLAttribute, Long Integer or String.
   * @param {Mixed} to The XMLAttribute, index, or name at the end of the range. Can accept: XMLAttribute, Long Integer or String.
   * @returns {XMLAttribute}
   */
  itemByRange: function(from, to) {
    return new XMLAttribute();
  },
  
  /*
   * Returns the first XMLAttribute in the collection.
   * @returns {XMLAttribute}
   */
  firstItem: function() {
    return new XMLAttribute();
  },
  
  /*
   * Returns the last XMLAttribute in the collection.
   * @returns {XMLAttribute}
   */
  lastItem: function() {
    return new XMLAttribute();
  },
  
  /*
   * Returns the middle XMLAttribute in the collection.
   * @returns {XMLAttribute}
   */
  middleItem: function() {
    return new XMLAttribute();
  },
  
  /*
   * Returns the XMLAttribute with the index previous to the specified index.
 *
   * @param {XMLAttribute} obj The index of the XMLAttribute that follows the desired XMLAttribute.
   * @returns {XMLAttribute}
   */
  previousItem: function(obj) {
    return new XMLAttribute();
  },
  
  /*
   * Returns the XMLAttribute whose index follows the specified XMLAttribute in the collection.
 *
   * @param {XMLAttribute} obj The XMLAttribute whose index comes before the desired XMLAttribute.
   * @returns {XMLAttribute}
   */
  nextItem: function(obj) {
    return new XMLAttribute();
  },
  
  /*
   * Returns any XMLAttribute in the collection.
   * @returns {XMLAttribute}
   */
  anyItem: function() {
    return new XMLAttribute();
  },
  
  /*
   * Returns every XMLAttribute in the collection.
   * @returns {XMLAttribute}
   */
  everyItem: function() {
    return new XMLAttribute();
  },
  
  /*
   * Generates a string which, if executed, will return the XMLAttribute.
   * @returns {String}
   */
  toSource: function() {
    return new String();
  },
  
  /*
   * Returns the XMLAttribute with the specified index.
 *
   * @param {Number} index The index.
   * @returns {XMLAttribute}
   */
  []: function(index) {
    return new XMLAttribute();
  },
  
};
