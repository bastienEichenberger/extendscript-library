/*
 * A collection of index sections.
 */
var IndexSections = {
  /*
   * The number of objects in the collection.
   * @type {Number}
   */
  length: undefined,
  
  /*
   * Displays the number of elements in the IndexSection.
   * @returns {Number}
   */
  count: function() {
    return new Number();
  },
  
  /*
   * Returns the IndexSection with the specified index or name.
 *
   * @param {Mixed} index The index or name. Can accept: Long Integer or String.
   * @returns {IndexSection}
   */
  item: function(index) {
    return new IndexSection();
  },
  
  /*
   * Returns the IndexSection with the specified name.
 *
   * @param {String} name The name.
   * @returns {IndexSection}
   */
  itemByName: function(name) {
    return new IndexSection();
  },
  
  /*
   * Returns the IndexSection with the specified ID.
 *
   * @param {Number} id The ID.
   * @returns {IndexSection}
   */
  itemByID: function(id) {
    return new IndexSection();
  },
  
  /*
   * Returns the IndexSections within the specified range.
 *
   * @param {Mixed} from The IndexSection, index, or name at the beginning of the range. Can accept: IndexSection, Long Integer or String.
   * @param {Mixed} to The IndexSection, index, or name at the end of the range. Can accept: IndexSection, Long Integer or String.
   * @returns {IndexSection}
   */
  itemByRange: function(from, to) {
    return new IndexSection();
  },
  
  /*
   * Returns the first IndexSection in the collection.
   * @returns {IndexSection}
   */
  firstItem: function() {
    return new IndexSection();
  },
  
  /*
   * Returns the last IndexSection in the collection.
   * @returns {IndexSection}
   */
  lastItem: function() {
    return new IndexSection();
  },
  
  /*
   * Returns the middle IndexSection in the collection.
   * @returns {IndexSection}
   */
  middleItem: function() {
    return new IndexSection();
  },
  
  /*
   * Returns the IndexSection with the index previous to the specified index.
 *
   * @param {IndexSection} obj The index of the IndexSection that follows the desired IndexSection.
   * @returns {IndexSection}
   */
  previousItem: function(obj) {
    return new IndexSection();
  },
  
  /*
   * Returns the IndexSection whose index follows the specified IndexSection in the collection.
 *
   * @param {IndexSection} obj The IndexSection whose index comes before the desired IndexSection.
   * @returns {IndexSection}
   */
  nextItem: function(obj) {
    return new IndexSection();
  },
  
  /*
   * Returns any IndexSection in the collection.
   * @returns {IndexSection}
   */
  anyItem: function() {
    return new IndexSection();
  },
  
  /*
   * Returns every IndexSection in the collection.
   * @returns {IndexSection}
   */
  everyItem: function() {
    return new IndexSection();
  },
  
  /*
   * Generates a string which, if executed, will return the IndexSection.
   * @returns {String}
   */
  toSource: function() {
    return new String();
  },
  
  /*
   * Returns the IndexSection with the specified index.
 *
   * @param {Number} index The index.
   * @returns {IndexSection}
   */
  []: function(index) {
    return new IndexSection();
  },
  
};
