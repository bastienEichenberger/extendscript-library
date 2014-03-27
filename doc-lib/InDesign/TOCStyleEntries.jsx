/*
 * A collection TOC style entries.
 */
var TOCStyleEntries = {
  /*
   * The number of objects in the collection.
   * @type {Number}
   */
  length: undefined,
  
  /*
   * Adds a TOC style entry.
 *
   * @param {String} [styleName] The paragraph style to include as TOC entries in the TOC. 
   * @param {Object} [withProperties] Initial values for properties of the new TOCStyleEntry 
   * @returns {TOCStyleEntry}
   */
  add: function(styleName, withProperties) {
    return new TOCStyleEntry();
  },
  
  /*
   * Displays the number of elements in the TOCStyleEntry.
   * @returns {Number}
   */
  count: function() {
    return new Number();
  },
  
  /*
   * Returns the TOCStyleEntry with the specified index or name.
 *
   * @param {Mixed} index The index or name. Can accept: Long Integer or String.
   * @returns {TOCStyleEntry}
   */
  item: function(index) {
    return new TOCStyleEntry();
  },
  
  /*
   * Returns the TOCStyleEntry with the specified name.
 *
   * @param {String} name The name.
   * @returns {TOCStyleEntry}
   */
  itemByName: function(name) {
    return new TOCStyleEntry();
  },
  
  /*
   * Returns the TOCStyleEntries within the specified range.
 *
   * @param {Mixed} from The TOCStyleEntry, index, or name at the beginning of the range. Can accept: TOCStyleEntry, Long Integer or String.
   * @param {Mixed} to The TOCStyleEntry, index, or name at the end of the range. Can accept: TOCStyleEntry, Long Integer or String.
   * @returns {TOCStyleEntry}
   */
  itemByRange: function(from, to) {
    return new TOCStyleEntry();
  },
  
  /*
   * Returns the first TOCStyleEntry in the collection.
   * @returns {TOCStyleEntry}
   */
  firstItem: function() {
    return new TOCStyleEntry();
  },
  
  /*
   * Returns the last TOCStyleEntry in the collection.
   * @returns {TOCStyleEntry}
   */
  lastItem: function() {
    return new TOCStyleEntry();
  },
  
  /*
   * Returns the middle TOCStyleEntry in the collection.
   * @returns {TOCStyleEntry}
   */
  middleItem: function() {
    return new TOCStyleEntry();
  },
  
  /*
   * Returns the TOCStyleEntry with the index previous to the specified index.
 *
   * @param {TOCStyleEntry} obj The index of the TOCStyleEntry that follows the desired TOCStyleEntry.
   * @returns {TOCStyleEntry}
   */
  previousItem: function(obj) {
    return new TOCStyleEntry();
  },
  
  /*
   * Returns the TOCStyleEntry whose index follows the specified TOCStyleEntry in the collection.
 *
   * @param {TOCStyleEntry} obj The TOCStyleEntry whose index comes before the desired TOCStyleEntry.
   * @returns {TOCStyleEntry}
   */
  nextItem: function(obj) {
    return new TOCStyleEntry();
  },
  
  /*
   * Returns any TOCStyleEntry in the collection.
   * @returns {TOCStyleEntry}
   */
  anyItem: function() {
    return new TOCStyleEntry();
  },
  
  /*
   * Returns every TOCStyleEntry in the collection.
   * @returns {TOCStyleEntry}
   */
  everyItem: function() {
    return new TOCStyleEntry();
  },
  
  /*
   * Generates a string which, if executed, will return the TOCStyleEntry.
   * @returns {String}
   */
  toSource: function() {
    return new String();
  },
  
  /*
   * Returns the TOCStyleEntry with the specified index.
 *
   * @param {Number} index The index.
   * @returns {TOCStyleEntry}
   */
  []: function(index) {
    return new TOCStyleEntry();
  },
  
};
