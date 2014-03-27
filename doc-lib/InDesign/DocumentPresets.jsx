/*
 * A collection of document presets.
 */
var DocumentPresets = {
  /*
   * The number of objects in the collection.
   * @type {Number}
   */
  length: undefined,
  
  /*
   * Creates a new DocumentPreset.
 *
   * @param {Object} [withProperties] Initial values for properties of the new DocumentPreset 
   * @returns {DocumentPreset}
   */
  add: function(withProperties) {
    return new DocumentPreset();
  },
  
  /*
   * Displays the number of elements in the DocumentPreset.
   * @returns {Number}
   */
  count: function() {
    return new Number();
  },
  
  /*
   * Returns the DocumentPreset with the specified index or name.
 *
   * @param {Mixed} index The index or name. Can accept: Long Integer or String.
   * @returns {DocumentPreset}
   */
  item: function(index) {
    return new DocumentPreset();
  },
  
  /*
   * Returns the DocumentPreset with the specified name.
 *
   * @param {String} name The name.
   * @returns {DocumentPreset}
   */
  itemByName: function(name) {
    return new DocumentPreset();
  },
  
  /*
   * Returns the DocumentPreset with the specified ID.
 *
   * @param {Number} id The ID.
   * @returns {DocumentPreset}
   */
  itemByID: function(id) {
    return new DocumentPreset();
  },
  
  /*
   * Returns the DocumentPresets within the specified range.
 *
   * @param {Mixed} from The DocumentPreset, index, or name at the beginning of the range. Can accept: DocumentPreset, Long Integer or String.
   * @param {Mixed} to The DocumentPreset, index, or name at the end of the range. Can accept: DocumentPreset, Long Integer or String.
   * @returns {DocumentPreset}
   */
  itemByRange: function(from, to) {
    return new DocumentPreset();
  },
  
  /*
   * Returns the first DocumentPreset in the collection.
   * @returns {DocumentPreset}
   */
  firstItem: function() {
    return new DocumentPreset();
  },
  
  /*
   * Returns the last DocumentPreset in the collection.
   * @returns {DocumentPreset}
   */
  lastItem: function() {
    return new DocumentPreset();
  },
  
  /*
   * Returns the middle DocumentPreset in the collection.
   * @returns {DocumentPreset}
   */
  middleItem: function() {
    return new DocumentPreset();
  },
  
  /*
   * Returns the DocumentPreset with the index previous to the specified index.
 *
   * @param {DocumentPreset} obj The index of the DocumentPreset that follows the desired DocumentPreset.
   * @returns {DocumentPreset}
   */
  previousItem: function(obj) {
    return new DocumentPreset();
  },
  
  /*
   * Returns the DocumentPreset whose index follows the specified DocumentPreset in the collection.
 *
   * @param {DocumentPreset} obj The DocumentPreset whose index comes before the desired DocumentPreset.
   * @returns {DocumentPreset}
   */
  nextItem: function(obj) {
    return new DocumentPreset();
  },
  
  /*
   * Returns any DocumentPreset in the collection.
   * @returns {DocumentPreset}
   */
  anyItem: function() {
    return new DocumentPreset();
  },
  
  /*
   * Returns every DocumentPreset in the collection.
   * @returns {DocumentPreset}
   */
  everyItem: function() {
    return new DocumentPreset();
  },
  
  /*
   * Generates a string which, if executed, will return the DocumentPreset.
   * @returns {String}
   */
  toSource: function() {
    return new String();
  },
  
  /*
   * Returns the DocumentPreset with the specified index.
 *
   * @param {Number} index The index.
   * @returns {DocumentPreset}
   */
  []: function(index) {
    return new DocumentPreset();
  },
  
};
