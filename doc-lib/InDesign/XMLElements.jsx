/*
 * A collection of XML elements.
 */
var XMLElements = {
  /*
   * The number of objects in the collection.
   * @type {Number}
   */
  length: undefined,
  
  /*
   * Displays the number of elements in the XMLElement.
   * @returns {Number}
   */
  count: function() {
    return new Number();
  },
  
  /*
   * Creates a new XML element.
 *
   * @param {Mixed} markupTag The XML tag used to identify the element. Can accept: String or XMLTag.
   * @param {Mixed} [xmlContent] The content to be marked up. Can accept: Text, Story, PageItem, Movie, Sound, Graphic, Table or Cell. 
   * @param {Object} [withProperties] Initial values for properties of the new XMLElement 
   * @returns {XMLElement}
   */
  add: function(markupTag, xmlContent, withProperties) {
    return new XMLElement();
  },
  
  /*
   * Returns the XMLElement with the specified index or name.
 *
   * @param {Mixed} index The index or name. Can accept: Long Integer or String.
   * @returns {XMLElement}
   */
  item: function(index) {
    return new XMLElement();
  },
  
  /*
   * Returns the XMLElement with the specified ID.
 *
   * @param {Number} id The ID.
   * @returns {XMLElement}
   */
  itemByID: function(id) {
    return new XMLElement();
  },
  
  /*
   * Returns the XMLElements within the specified range.
 *
   * @param {Mixed} from The XMLElement, index, or name at the beginning of the range. Can accept: XMLElement, Long Integer or String.
   * @param {Mixed} to The XMLElement, index, or name at the end of the range. Can accept: XMLElement, Long Integer or String.
   * @returns {XMLElement}
   */
  itemByRange: function(from, to) {
    return new XMLElement();
  },
  
  /*
   * Returns the first XMLElement in the collection.
   * @returns {XMLElement}
   */
  firstItem: function() {
    return new XMLElement();
  },
  
  /*
   * Returns the last XMLElement in the collection.
   * @returns {XMLElement}
   */
  lastItem: function() {
    return new XMLElement();
  },
  
  /*
   * Returns the middle XMLElement in the collection.
   * @returns {XMLElement}
   */
  middleItem: function() {
    return new XMLElement();
  },
  
  /*
   * Returns the XMLElement with the index previous to the specified index.
 *
   * @param {XMLElement} obj The index of the XMLElement that follows the desired XMLElement.
   * @returns {XMLElement}
   */
  previousItem: function(obj) {
    return new XMLElement();
  },
  
  /*
   * Returns the XMLElement whose index follows the specified XMLElement in the collection.
 *
   * @param {XMLElement} obj The XMLElement whose index comes before the desired XMLElement.
   * @returns {XMLElement}
   */
  nextItem: function(obj) {
    return new XMLElement();
  },
  
  /*
   * Returns any XMLElement in the collection.
   * @returns {XMLElement}
   */
  anyItem: function() {
    return new XMLElement();
  },
  
  /*
   * Returns every XMLElement in the collection.
   * @returns {XMLElement}
   */
  everyItem: function() {
    return new XMLElement();
  },
  
  /*
   * Generates a string which, if executed, will return the XMLElement.
   * @returns {String}
   */
  toSource: function() {
    return new String();
  },
  
  /*
   * Returns the XMLElement with the specified index.
 *
   * @param {Number} index The index.
   * @returns {XMLElement}
   */
  []: function(index) {
    return new XMLElement();
  },
  
};
