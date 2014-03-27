/*
 * A collection of index page references.
 */
var PageReferences = {
  /*
   * The number of objects in the collection.
   * @type {Number}
   */
  length: undefined,
  
  /*
   * Creates a new page reference.
 *
   * @param {Text} source The text or insertion point to which the page reference points.
   * @param {PageReferenceType} [pageReferenceType] The page number for an index page reference or the last page in an index page reference page range. 
   * @param {Mixed} [pageReferenceLimit] The paragraph style or number of paragraphs or pages that defines the last page in a page range. Valid only when page reference type specifies the next use of a paragraph style or a number of paragraphs or pages. . Can accept: ParagraphStyle or Long Integer. 
   * @param {CharacterStyle} [pageNumberStyleOverride] The style override for the page number.  
   * @param {Object} [withProperties] Initial values for properties of the new PageReference 
   * @returns {PageReference}
   */
  add: function(source, pageReferenceType, pageReferenceLimit, pageNumberStyleOverride, withProperties) {
    return new PageReference();
  },
  
  /*
   * Displays the number of elements in the PageReference.
   * @returns {Number}
   */
  count: function() {
    return new Number();
  },
  
  /*
   * Returns the PageReference with the specified index or name.
 *
   * @param {Mixed} index The index or name. Can accept: Long Integer or String.
   * @returns {PageReference}
   */
  item: function(index) {
    return new PageReference();
  },
  
  /*
   * Returns the PageReference with the specified name.
 *
   * @param {String} name The name.
   * @returns {PageReference}
   */
  itemByName: function(name) {
    return new PageReference();
  },
  
  /*
   * Returns the PageReference with the specified ID.
 *
   * @param {Number} id The ID.
   * @returns {PageReference}
   */
  itemByID: function(id) {
    return new PageReference();
  },
  
  /*
   * Returns the PageReferences within the specified range.
 *
   * @param {Mixed} from The PageReference, index, or name at the beginning of the range. Can accept: PageReference, Long Integer or String.
   * @param {Mixed} to The PageReference, index, or name at the end of the range. Can accept: PageReference, Long Integer or String.
   * @returns {PageReference}
   */
  itemByRange: function(from, to) {
    return new PageReference();
  },
  
  /*
   * Returns the first PageReference in the collection.
   * @returns {PageReference}
   */
  firstItem: function() {
    return new PageReference();
  },
  
  /*
   * Returns the last PageReference in the collection.
   * @returns {PageReference}
   */
  lastItem: function() {
    return new PageReference();
  },
  
  /*
   * Returns the middle PageReference in the collection.
   * @returns {PageReference}
   */
  middleItem: function() {
    return new PageReference();
  },
  
  /*
   * Returns the PageReference with the index previous to the specified index.
 *
   * @param {PageReference} obj The index of the PageReference that follows the desired PageReference.
   * @returns {PageReference}
   */
  previousItem: function(obj) {
    return new PageReference();
  },
  
  /*
   * Returns the PageReference whose index follows the specified PageReference in the collection.
 *
   * @param {PageReference} obj The PageReference whose index comes before the desired PageReference.
   * @returns {PageReference}
   */
  nextItem: function(obj) {
    return new PageReference();
  },
  
  /*
   * Returns any PageReference in the collection.
   * @returns {PageReference}
   */
  anyItem: function() {
    return new PageReference();
  },
  
  /*
   * Returns every PageReference in the collection.
   * @returns {PageReference}
   */
  everyItem: function() {
    return new PageReference();
  },
  
  /*
   * Generates a string which, if executed, will return the PageReference.
   * @returns {String}
   */
  toSource: function() {
    return new String();
  },
  
  /*
   * Returns the PageReference with the specified index.
 *
   * @param {Number} index The index.
   * @returns {PageReference}
   */
  []: function(index) {
    return new PageReference();
  },
  
};
