/*
 * A collection of indexes.
 */
var Indexes = {
  /*
   * The number of objects in the collection.
   * @type {Number}
   */
  length: undefined,
  
  /*
   * Creates a new Index.
 *
   * @param {Object} [withProperties] Initial values for properties of the new Index 
   * @returns {Index}
   */
  add: function(withProperties) {
    return new Index();
  },
  
  /*
   * Displays the number of elements in the Index.
   * @returns {Number}
   */
  count: function() {
    return new Number();
  },
  
  /*
   * Returns the Index with the specified index or name.
 *
   * @param {Mixed} index The index or name. Can accept: Long Integer or String.
   * @returns {Index}
   */
  item: function(index) {
    return new Index();
  },
  
  /*
   * Returns the Index with the specified name.
 *
   * @param {String} name The name.
   * @returns {Index}
   */
  itemByName: function(name) {
    return new Index();
  },
  
  /*
   * Returns the Index with the specified ID.
 *
   * @param {Number} id The ID.
   * @returns {Index}
   */
  itemByID: function(id) {
    return new Index();
  },
  
  /*
   * Returns the Indexes within the specified range.
 *
   * @param {Mixed} from The Index, index, or name at the beginning of the range. Can accept: Index, Long Integer or String.
   * @param {Mixed} to The Index, index, or name at the end of the range. Can accept: Index, Long Integer or String.
   * @returns {Index}
   */
  itemByRange: function(from, to) {
    return new Index();
  },
  
  /*
   * Returns the first Index in the collection.
   * @returns {Index}
   */
  firstItem: function() {
    return new Index();
  },
  
  /*
   * Returns the last Index in the collection.
   * @returns {Index}
   */
  lastItem: function() {
    return new Index();
  },
  
  /*
   * Returns the middle Index in the collection.
   * @returns {Index}
   */
  middleItem: function() {
    return new Index();
  },
  
  /*
   * Returns the Index with the index previous to the specified index.
 *
   * @param {Index} obj The index of the Index that follows the desired Index.
   * @returns {Index}
   */
  previousItem: function(obj) {
    return new Index();
  },
  
  /*
   * Returns the Index whose index follows the specified Index in the collection.
 *
   * @param {Index} obj The Index whose index comes before the desired Index.
   * @returns {Index}
   */
  nextItem: function(obj) {
    return new Index();
  },
  
  /*
   * Returns any Index in the collection.
   * @returns {Index}
   */
  anyItem: function() {
    return new Index();
  },
  
  /*
   * Returns every Index in the collection.
   * @returns {Index}
   */
  everyItem: function() {
    return new Index();
  },
  
  /*
   * Generates a string which, if executed, will return the Index.
   * @returns {String}
   */
  toSource: function() {
    return new String();
  },
  
  /*
   * Returns the Index with the specified index.
 *
   * @param {Number} index The index.
   * @returns {Index}
   */
  []: function(index) {
    return new Index();
  },
  
};
