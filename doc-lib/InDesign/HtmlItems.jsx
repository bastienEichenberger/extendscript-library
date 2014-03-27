/*
 * A collection of embedded HTML page items.
 */
var HtmlItems = {
  /*
   * The number of objects in the collection.
   * @type {Number}
   */
  length: undefined,
  
  /*
   * Creates a new HtmlItem
 *
   * @param {Layer} [layer] The layer on which to create the HtmlItem. 
   * @param {LocationOptions} [at] The location at which to insert the HtmlItem relative to the reference object or within the container object. 
   * @param {Mixed} [reference] The reference object. Note: Required when the at parameter is before or after. Can accept: Document, Spread, MasterSpread, Page, Layer or PageItem. 
   * @param {Object} [withProperties] Initial values for properties of the new HtmlItem 
   * @returns {HtmlItem}
   */
  add: function(layer, at, reference, withProperties) {
    return new HtmlItem();
  },
  
  /*
   * Displays the number of elements in the HtmlItem.
   * @returns {Number}
   */
  count: function() {
    return new Number();
  },
  
  /*
   * Returns the HtmlItem with the specified index or name.
 *
   * @param {Mixed} index The index or name. Can accept: Long Integer or String.
   * @returns {HtmlItem}
   */
  item: function(index) {
    return new HtmlItem();
  },
  
  /*
   * Returns the HtmlItem with the specified name.
 *
   * @param {String} name The name.
   * @returns {HtmlItem}
   */
  itemByName: function(name) {
    return new HtmlItem();
  },
  
  /*
   * Returns the HtmlItem with the specified ID.
 *
   * @param {Number} id The ID.
   * @returns {HtmlItem}
   */
  itemByID: function(id) {
    return new HtmlItem();
  },
  
  /*
   * Returns the HtmlItems within the specified range.
 *
   * @param {Mixed} from The HtmlItem, index, or name at the beginning of the range. Can accept: HtmlItem, Long Integer or String.
   * @param {Mixed} to The HtmlItem, index, or name at the end of the range. Can accept: HtmlItem, Long Integer or String.
   * @returns {HtmlItem}
   */
  itemByRange: function(from, to) {
    return new HtmlItem();
  },
  
  /*
   * Returns the first HtmlItem in the collection.
   * @returns {HtmlItem}
   */
  firstItem: function() {
    return new HtmlItem();
  },
  
  /*
   * Returns the last HtmlItem in the collection.
   * @returns {HtmlItem}
   */
  lastItem: function() {
    return new HtmlItem();
  },
  
  /*
   * Returns the middle HtmlItem in the collection.
   * @returns {HtmlItem}
   */
  middleItem: function() {
    return new HtmlItem();
  },
  
  /*
   * Returns the HtmlItem with the index previous to the specified index.
 *
   * @param {HtmlItem} obj The index of the HtmlItem that follows the desired HtmlItem.
   * @returns {HtmlItem}
   */
  previousItem: function(obj) {
    return new HtmlItem();
  },
  
  /*
   * Returns the HtmlItem whose index follows the specified HtmlItem in the collection.
 *
   * @param {HtmlItem} obj The HtmlItem whose index comes before the desired HtmlItem.
   * @returns {HtmlItem}
   */
  nextItem: function(obj) {
    return new HtmlItem();
  },
  
  /*
   * Returns any HtmlItem in the collection.
   * @returns {HtmlItem}
   */
  anyItem: function() {
    return new HtmlItem();
  },
  
  /*
   * Returns every HtmlItem in the collection.
   * @returns {HtmlItem}
   */
  everyItem: function() {
    return new HtmlItem();
  },
  
  /*
   * Generates a string which, if executed, will return the HtmlItem.
   * @returns {String}
   */
  toSource: function() {
    return new String();
  },
  
  /*
   * Returns the HtmlItem with the specified index.
 *
   * @param {Number} index The index.
   * @returns {HtmlItem}
   */
  []: function(index) {
    return new HtmlItem();
  },
  
};
