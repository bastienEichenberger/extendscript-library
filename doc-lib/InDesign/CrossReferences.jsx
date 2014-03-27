/*
 * A collection of index cross references. &amp;&#35;40;For cross references in text, use the &apos;cross reference source' and 'hyperlink' objects.&#41;
 */
var CrossReferences = {
  /*
   * The number of objects in the collection.
   * @type {Number}
   */
  length: undefined,
  
  /*
   * Creates a new cross reference.
 *
   * @param {Topic} referencedTopic The topic that the cross reference points to.
   * @param {CrossReferenceType} crossReferenceType The cross reference type.
   * @param {String} [customTypeString] The custom string to use in the cross reference. Valid only for custom cross reference types. 
   * @param {Object} [withProperties] Initial values for properties of the new CrossReference 
   * @returns {CrossReference}
   */
  add: function(referencedTopic, crossReferenceType, customTypeString, withProperties) {
    return new CrossReference();
  },
  
  /*
   * Displays the number of elements in the CrossReference.
   * @returns {Number}
   */
  count: function() {
    return new Number();
  },
  
  /*
   * Returns the CrossReference with the specified index or name.
 *
   * @param {Mixed} index The index or name. Can accept: Long Integer or String.
   * @returns {CrossReference}
   */
  item: function(index) {
    return new CrossReference();
  },
  
  /*
   * Returns the CrossReference with the specified name.
 *
   * @param {String} name The name.
   * @returns {CrossReference}
   */
  itemByName: function(name) {
    return new CrossReference();
  },
  
  /*
   * Returns the CrossReference with the specified ID.
 *
   * @param {Number} id The ID.
   * @returns {CrossReference}
   */
  itemByID: function(id) {
    return new CrossReference();
  },
  
  /*
   * Returns the CrossReferences within the specified range.
 *
   * @param {Mixed} from The CrossReference, index, or name at the beginning of the range. Can accept: CrossReference, Long Integer or String.
   * @param {Mixed} to The CrossReference, index, or name at the end of the range. Can accept: CrossReference, Long Integer or String.
   * @returns {CrossReference}
   */
  itemByRange: function(from, to) {
    return new CrossReference();
  },
  
  /*
   * Returns the first CrossReference in the collection.
   * @returns {CrossReference}
   */
  firstItem: function() {
    return new CrossReference();
  },
  
  /*
   * Returns the last CrossReference in the collection.
   * @returns {CrossReference}
   */
  lastItem: function() {
    return new CrossReference();
  },
  
  /*
   * Returns the middle CrossReference in the collection.
   * @returns {CrossReference}
   */
  middleItem: function() {
    return new CrossReference();
  },
  
  /*
   * Returns the CrossReference with the index previous to the specified index.
 *
   * @param {CrossReference} obj The index of the CrossReference that follows the desired CrossReference.
   * @returns {CrossReference}
   */
  previousItem: function(obj) {
    return new CrossReference();
  },
  
  /*
   * Returns the CrossReference whose index follows the specified CrossReference in the collection.
 *
   * @param {CrossReference} obj The CrossReference whose index comes before the desired CrossReference.
   * @returns {CrossReference}
   */
  nextItem: function(obj) {
    return new CrossReference();
  },
  
  /*
   * Returns any CrossReference in the collection.
   * @returns {CrossReference}
   */
  anyItem: function() {
    return new CrossReference();
  },
  
  /*
   * Returns every CrossReference in the collection.
   * @returns {CrossReference}
   */
  everyItem: function() {
    return new CrossReference();
  },
  
  /*
   * Generates a string which, if executed, will return the CrossReference.
   * @returns {String}
   */
  toSource: function() {
    return new String();
  },
  
  /*
   * Returns the CrossReference with the specified index.
 *
   * @param {Number} index The index.
   * @returns {CrossReference}
   */
  []: function(index) {
    return new CrossReference();
  },
  
};
