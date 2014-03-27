/*
 * A collection of XML items.
 */
var XMLItems = {
  /*
   * The number of objects in the collection.
   * @type {Number}
   */
  length: undefined,
  
  /*
   * Displays the number of elements in the XMLItem.
   * @returns {Number}
   */
  count: function() {
    return new Number();
  },
  
  /*
   * Returns the XMLItem with the specified index or name.
 *
   * @param {Mixed} index The index or name. Can accept: Long Integer or String.
   * @returns {XMLItem}
   */
  item: function(index) {
    return new XMLItem();
  },
  
  /*
   * Returns the XMLItem with the specified ID.
 *
   * @param {Number} id The ID.
   * @returns {XMLItem}
   */
  itemByID: function(id) {
    return new XMLItem();
  },
  
  /*
   * Returns the XMLItems within the specified range.
 *
   * @param {Mixed} from The XMLItem, index, or name at the beginning of the range. Can accept: XMLItem, Long Integer or String.
   * @param {Mixed} to The XMLItem, index, or name at the end of the range. Can accept: XMLItem, Long Integer or String.
   * @returns {XMLItem}
   */
  itemByRange: function(from, to) {
    return new XMLItem();
  },
  
  /*
   * Returns the first XMLItem in the collection.
   * @returns {XMLItem}
   */
  firstItem: function() {
    return new XMLItem();
  },
  
  /*
   * Returns the last XMLItem in the collection.
   * @returns {XMLItem}
   */
  lastItem: function() {
    return new XMLItem();
  },
  
  /*
   * Returns the middle XMLItem in the collection.
   * @returns {XMLItem}
   */
  middleItem: function() {
    return new XMLItem();
  },
  
  /*
   * Returns the XMLItem with the index previous to the specified index.
 *
   * @param {XMLItem} obj The index of the XMLItem that follows the desired XMLItem.
   * @returns {XMLItem}
   */
  previousItem: function(obj) {
    return new XMLItem();
  },
  
  /*
   * Returns the XMLItem whose index follows the specified XMLItem in the collection.
 *
   * @param {XMLItem} obj The XMLItem whose index comes before the desired XMLItem.
   * @returns {XMLItem}
   */
  nextItem: function(obj) {
    return new XMLItem();
  },
  
  /*
   * Returns any XMLItem in the collection.
   * @returns {XMLItem}
   */
  anyItem: function() {
    return new XMLItem();
  },
  
  /*
   * Returns every XMLItem in the collection.
   * @returns {XMLItem}
   */
  everyItem: function() {
    return new XMLItem();
  },
  
  /*
   * Generates a string which, if executed, will return the XMLItem.
   * @returns {String}
   */
  toSource: function() {
    return new String();
  },
  
  /*
   * Returns the XMLItem with the specified index.
 *
   * @param {Number} index The index.
   * @returns {XMLItem}
   */
  []: function(index) {
    return new XMLItem();
  },
  
};
