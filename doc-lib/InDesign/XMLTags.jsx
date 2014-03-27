/*
 * A collection of XML tags.
 */
var XMLTags = {
  /*
   * The number of objects in the collection.
   * @type {Number}
   */
  length: undefined,
  
  /*
   * Creates a tag.
 *
   * @param {String} [name] The name of the tag. 
   * @param {Mixed} [tagColor] The dolor of the tag, specified either as an array of three doubles, each in the range 0 to 255 and representing R, G, and B values, or as a UI color. Can accept: Array of 3 Reals (0 - 255) or UIColors enumerator. 
   * @param {Object} [withProperties] Initial values for properties of the new XMLTag 
   * @returns {XMLTag}
   */
  add: function(name, tagColor, withProperties) {
    return new XMLTag();
  },
  
  /*
   * Displays the number of elements in the XMLTag.
   * @returns {Number}
   */
  count: function() {
    return new Number();
  },
  
  /*
   * Returns the XMLTag with the specified index or name.
 *
   * @param {Mixed} index The index or name. Can accept: Long Integer or String.
   * @returns {XMLTag}
   */
  item: function(index) {
    return new XMLTag();
  },
  
  /*
   * Returns the XMLTag with the specified name.
 *
   * @param {String} name The name.
   * @returns {XMLTag}
   */
  itemByName: function(name) {
    return new XMLTag();
  },
  
  /*
   * Returns the XMLTag with the specified ID.
 *
   * @param {Number} id The ID.
   * @returns {XMLTag}
   */
  itemByID: function(id) {
    return new XMLTag();
  },
  
  /*
   * Returns the XMLTags within the specified range.
 *
   * @param {Mixed} from The XMLTag, index, or name at the beginning of the range. Can accept: XMLTag, Long Integer or String.
   * @param {Mixed} to The XMLTag, index, or name at the end of the range. Can accept: XMLTag, Long Integer or String.
   * @returns {XMLTag}
   */
  itemByRange: function(from, to) {
    return new XMLTag();
  },
  
  /*
   * Returns the first XMLTag in the collection.
   * @returns {XMLTag}
   */
  firstItem: function() {
    return new XMLTag();
  },
  
  /*
   * Returns the last XMLTag in the collection.
   * @returns {XMLTag}
   */
  lastItem: function() {
    return new XMLTag();
  },
  
  /*
   * Returns the middle XMLTag in the collection.
   * @returns {XMLTag}
   */
  middleItem: function() {
    return new XMLTag();
  },
  
  /*
   * Returns the XMLTag with the index previous to the specified index.
 *
   * @param {XMLTag} obj The index of the XMLTag that follows the desired XMLTag.
   * @returns {XMLTag}
   */
  previousItem: function(obj) {
    return new XMLTag();
  },
  
  /*
   * Returns the XMLTag whose index follows the specified XMLTag in the collection.
 *
   * @param {XMLTag} obj The XMLTag whose index comes before the desired XMLTag.
   * @returns {XMLTag}
   */
  nextItem: function(obj) {
    return new XMLTag();
  },
  
  /*
   * Returns any XMLTag in the collection.
   * @returns {XMLTag}
   */
  anyItem: function() {
    return new XMLTag();
  },
  
  /*
   * Returns every XMLTag in the collection.
   * @returns {XMLTag}
   */
  everyItem: function() {
    return new XMLTag();
  },
  
  /*
   * Generates a string which, if executed, will return the XMLTag.
   * @returns {String}
   */
  toSource: function() {
    return new String();
  },
  
  /*
   * Returns the XMLTag with the specified index.
 *
   * @param {Number} index The index.
   * @returns {XMLTag}
   */
  []: function(index) {
    return new XMLTag();
  },
  
};
