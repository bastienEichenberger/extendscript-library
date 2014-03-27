/*
 * A collection of cross reference text sources.
 */
var CrossReferenceSources = {
  /*
   * The number of objects in the collection.
   * @type {Number}
   */
  length: undefined,
  
  /*
   * Creates a new cross reference text source.
 *
   * @param {Text} source The text or insertion point to create the source.
   * @param {CrossReferenceFormat} appliedFormat Format used for cross reference source.
   * @param {Object} [withProperties] Initial values for properties of the new CrossReferenceSource 
   * @returns {CrossReferenceSource}
   */
  add: function(source, appliedFormat, withProperties) {
    return new CrossReferenceSource();
  },
  
  /*
   * Displays the number of elements in the CrossReferenceSource.
   * @returns {Number}
   */
  count: function() {
    return new Number();
  },
  
  /*
   * Returns the CrossReferenceSource with the specified index or name.
 *
   * @param {Mixed} index The index or name. Can accept: Long Integer or String.
   * @returns {CrossReferenceSource}
   */
  item: function(index) {
    return new CrossReferenceSource();
  },
  
  /*
   * Returns the CrossReferenceSource with the specified name.
 *
   * @param {String} name The name.
   * @returns {CrossReferenceSource}
   */
  itemByName: function(name) {
    return new CrossReferenceSource();
  },
  
  /*
   * Returns the CrossReferenceSource with the specified ID.
 *
   * @param {Number} id The ID.
   * @returns {CrossReferenceSource}
   */
  itemByID: function(id) {
    return new CrossReferenceSource();
  },
  
  /*
   * Returns the CrossReferenceSources within the specified range.
 *
   * @param {Mixed} from The CrossReferenceSource, index, or name at the beginning of the range. Can accept: CrossReferenceSource, Long Integer or String.
   * @param {Mixed} to The CrossReferenceSource, index, or name at the end of the range. Can accept: CrossReferenceSource, Long Integer or String.
   * @returns {CrossReferenceSource}
   */
  itemByRange: function(from, to) {
    return new CrossReferenceSource();
  },
  
  /*
   * Returns the first CrossReferenceSource in the collection.
   * @returns {CrossReferenceSource}
   */
  firstItem: function() {
    return new CrossReferenceSource();
  },
  
  /*
   * Returns the last CrossReferenceSource in the collection.
   * @returns {CrossReferenceSource}
   */
  lastItem: function() {
    return new CrossReferenceSource();
  },
  
  /*
   * Returns the middle CrossReferenceSource in the collection.
   * @returns {CrossReferenceSource}
   */
  middleItem: function() {
    return new CrossReferenceSource();
  },
  
  /*
   * Returns the CrossReferenceSource with the index previous to the specified index.
 *
   * @param {CrossReferenceSource} obj The index of the CrossReferenceSource that follows the desired CrossReferenceSource.
   * @returns {CrossReferenceSource}
   */
  previousItem: function(obj) {
    return new CrossReferenceSource();
  },
  
  /*
   * Returns the CrossReferenceSource whose index follows the specified CrossReferenceSource in the collection.
 *
   * @param {CrossReferenceSource} obj The CrossReferenceSource whose index comes before the desired CrossReferenceSource.
   * @returns {CrossReferenceSource}
   */
  nextItem: function(obj) {
    return new CrossReferenceSource();
  },
  
  /*
   * Returns any CrossReferenceSource in the collection.
   * @returns {CrossReferenceSource}
   */
  anyItem: function() {
    return new CrossReferenceSource();
  },
  
  /*
   * Returns every CrossReferenceSource in the collection.
   * @returns {CrossReferenceSource}
   */
  everyItem: function() {
    return new CrossReferenceSource();
  },
  
  /*
   * Generates a string which, if executed, will return the CrossReferenceSource.
   * @returns {String}
   */
  toSource: function() {
    return new String();
  },
  
  /*
   * Returns the CrossReferenceSource with the specified index.
 *
   * @param {Number} index The index.
   * @returns {CrossReferenceSource}
   */
  []: function(index) {
    return new CrossReferenceSource();
  },
  
};
