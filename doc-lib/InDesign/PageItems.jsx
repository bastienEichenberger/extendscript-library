/*
 * The page items collection, which can be used to process all page items in a container &amp;&#35;40;such as a document, page, or group&#41;, regardless of type.
 */
var PageItems = {
  /*
   * The number of objects in the collection.
   * @type {Number}
   */
  length: undefined,
  
  /*
   * Displays the number of elements in the PageItem.
   * @returns {Number}
   */
  count: function() {
    return new Number();
  },
  
  /*
   * Returns the PageItem with the specified index or name.
 *
   * @param {Mixed} index The index or name. Can accept: Long Integer or String.
   * @returns {PageItem}
   */
  item: function(index) {
    return new PageItem();
  },
  
  /*
   * Returns the PageItem with the specified name.
 *
   * @param {String} name The name.
   * @returns {PageItem}
   */
  itemByName: function(name) {
    return new PageItem();
  },
  
  /*
   * Returns the PageItem with the specified ID.
 *
   * @param {Number} id The ID.
   * @returns {PageItem}
   */
  itemByID: function(id) {
    return new PageItem();
  },
  
  /*
   * Returns the PageItems within the specified range.
 *
   * @param {Mixed} from The PageItem, index, or name at the beginning of the range. Can accept: PageItem, Long Integer or String.
   * @param {Mixed} to The PageItem, index, or name at the end of the range. Can accept: PageItem, Long Integer or String.
   * @returns {PageItem}
   */
  itemByRange: function(from, to) {
    return new PageItem();
  },
  
  /*
   * Returns the first PageItem in the collection.
   * @returns {PageItem}
   */
  firstItem: function() {
    return new PageItem();
  },
  
  /*
   * Returns the last PageItem in the collection.
   * @returns {PageItem}
   */
  lastItem: function() {
    return new PageItem();
  },
  
  /*
   * Returns the middle PageItem in the collection.
   * @returns {PageItem}
   */
  middleItem: function() {
    return new PageItem();
  },
  
  /*
   * Returns the PageItem with the index previous to the specified index.
 *
   * @param {PageItem} obj The index of the PageItem that follows the desired PageItem.
   * @returns {PageItem}
   */
  previousItem: function(obj) {
    return new PageItem();
  },
  
  /*
   * Returns the PageItem whose index follows the specified PageItem in the collection.
 *
   * @param {PageItem} obj The PageItem whose index comes before the desired PageItem.
   * @returns {PageItem}
   */
  nextItem: function(obj) {
    return new PageItem();
  },
  
  /*
   * Returns any PageItem in the collection.
   * @returns {PageItem}
   */
  anyItem: function() {
    return new PageItem();
  },
  
  /*
   * Returns every PageItem in the collection.
   * @returns {PageItem}
   */
  everyItem: function() {
    return new PageItem();
  },
  
  /*
   * Generates a string which, if executed, will return the PageItem.
   * @returns {String}
   */
  toSource: function() {
    return new String();
  },
  
  /*
   * Returns the PageItem with the specified index.
 *
   * @param {Number} index The index.
   * @returns {PageItem}
   */
  []: function(index) {
    return new PageItem();
  },
  
};
