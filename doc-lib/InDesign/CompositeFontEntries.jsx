/*
 * A collection of composite font entries.
 */
var CompositeFontEntries = {
  /*
   * The number of objects in the collection.
   * @type {Number}
   */
  length: undefined,
  
  /*
   * Creates a new CompositeFontEntry.
 *
   * @param {Object} [withProperties] Initial values for properties of the new CompositeFontEntry 
   * @returns {CompositeFontEntry}
   */
  add: function(withProperties) {
    return new CompositeFontEntry();
  },
  
  /*
   * Displays the number of elements in the CompositeFontEntry.
   * @returns {Number}
   */
  count: function() {
    return new Number();
  },
  
  /*
   * Returns the CompositeFontEntry with the specified index or name.
 *
   * @param {Mixed} index The index or name. Can accept: Long Integer or String.
   * @returns {CompositeFontEntry}
   */
  item: function(index) {
    return new CompositeFontEntry();
  },
  
  /*
   * Returns the CompositeFontEntry with the specified name.
 *
   * @param {String} name The name.
   * @returns {CompositeFontEntry}
   */
  itemByName: function(name) {
    return new CompositeFontEntry();
  },
  
  /*
   * Returns the CompositeFontEntry with the specified ID.
 *
   * @param {Number} id The ID.
   * @returns {CompositeFontEntry}
   */
  itemByID: function(id) {
    return new CompositeFontEntry();
  },
  
  /*
   * Returns the CompositeFontEntries within the specified range.
 *
   * @param {Mixed} from The CompositeFontEntry, index, or name at the beginning of the range. Can accept: CompositeFontEntry, Long Integer or String.
   * @param {Mixed} to The CompositeFontEntry, index, or name at the end of the range. Can accept: CompositeFontEntry, Long Integer or String.
   * @returns {CompositeFontEntry}
   */
  itemByRange: function(from, to) {
    return new CompositeFontEntry();
  },
  
  /*
   * Returns the first CompositeFontEntry in the collection.
   * @returns {CompositeFontEntry}
   */
  firstItem: function() {
    return new CompositeFontEntry();
  },
  
  /*
   * Returns the last CompositeFontEntry in the collection.
   * @returns {CompositeFontEntry}
   */
  lastItem: function() {
    return new CompositeFontEntry();
  },
  
  /*
   * Returns the middle CompositeFontEntry in the collection.
   * @returns {CompositeFontEntry}
   */
  middleItem: function() {
    return new CompositeFontEntry();
  },
  
  /*
   * Returns the CompositeFontEntry with the index previous to the specified index.
 *
   * @param {CompositeFontEntry} obj The index of the CompositeFontEntry that follows the desired CompositeFontEntry.
   * @returns {CompositeFontEntry}
   */
  previousItem: function(obj) {
    return new CompositeFontEntry();
  },
  
  /*
   * Returns the CompositeFontEntry whose index follows the specified CompositeFontEntry in the collection.
 *
   * @param {CompositeFontEntry} obj The CompositeFontEntry whose index comes before the desired CompositeFontEntry.
   * @returns {CompositeFontEntry}
   */
  nextItem: function(obj) {
    return new CompositeFontEntry();
  },
  
  /*
   * Returns any CompositeFontEntry in the collection.
   * @returns {CompositeFontEntry}
   */
  anyItem: function() {
    return new CompositeFontEntry();
  },
  
  /*
   * Returns every CompositeFontEntry in the collection.
   * @returns {CompositeFontEntry}
   */
  everyItem: function() {
    return new CompositeFontEntry();
  },
  
  /*
   * Generates a string which, if executed, will return the CompositeFontEntry.
   * @returns {String}
   */
  toSource: function() {
    return new String();
  },
  
  /*
   * Returns the CompositeFontEntry with the specified index.
 *
   * @param {Number} index The index.
   * @returns {CompositeFontEntry}
   */
  []: function(index) {
    return new CompositeFontEntry();
  },
  
};
