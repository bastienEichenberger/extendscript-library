/*
 * A collection of listboxes.
 */
var ListBoxes = {
  /*
   * The number of objects in the collection.
   * @type {Number}
   */
  length: undefined,
  
  /*
   * Displays the number of elements in the ListBox.
   * @returns {Number}
   */
  count: function() {
    return new Number();
  },
  
  /*
   * Creates a new ListBox
 *
   * @param {Layer} [layer] The layer on which to create the ListBox. 
   * @param {LocationOptions} [at] The location at which to insert the ListBox relative to the reference object or within the container object. 
   * @param {Mixed} [reference] The reference object. Note: Required when the at parameter is before or after. Can accept: Document, Spread, MasterSpread, Page, Layer or PageItem. 
   * @param {Object} [withProperties] Initial values for properties of the new ListBox 
   * @returns {ListBox}
   */
  add: function(layer, at, reference, withProperties) {
    return new ListBox();
  },
  
  /*
   * Returns the ListBox with the specified index or name.
 *
   * @param {Mixed} index The index or name. Can accept: Long Integer or String.
   * @returns {ListBox}
   */
  item: function(index) {
    return new ListBox();
  },
  
  /*
   * Returns the ListBox with the specified name.
 *
   * @param {String} name The name.
   * @returns {ListBox}
   */
  itemByName: function(name) {
    return new ListBox();
  },
  
  /*
   * Returns the ListBox with the specified ID.
 *
   * @param {Number} id The ID.
   * @returns {ListBox}
   */
  itemByID: function(id) {
    return new ListBox();
  },
  
  /*
   * Returns the ListBoxes within the specified range.
 *
   * @param {Mixed} from The ListBox, index, or name at the beginning of the range. Can accept: ListBox, Long Integer or String.
   * @param {Mixed} to The ListBox, index, or name at the end of the range. Can accept: ListBox, Long Integer or String.
   * @returns {ListBox}
   */
  itemByRange: function(from, to) {
    return new ListBox();
  },
  
  /*
   * Returns the first ListBox in the collection.
   * @returns {ListBox}
   */
  firstItem: function() {
    return new ListBox();
  },
  
  /*
   * Returns the last ListBox in the collection.
   * @returns {ListBox}
   */
  lastItem: function() {
    return new ListBox();
  },
  
  /*
   * Returns the middle ListBox in the collection.
   * @returns {ListBox}
   */
  middleItem: function() {
    return new ListBox();
  },
  
  /*
   * Returns the ListBox with the index previous to the specified index.
 *
   * @param {ListBox} obj The index of the ListBox that follows the desired ListBox.
   * @returns {ListBox}
   */
  previousItem: function(obj) {
    return new ListBox();
  },
  
  /*
   * Returns the ListBox whose index follows the specified ListBox in the collection.
 *
   * @param {ListBox} obj The ListBox whose index comes before the desired ListBox.
   * @returns {ListBox}
   */
  nextItem: function(obj) {
    return new ListBox();
  },
  
  /*
   * Returns any ListBox in the collection.
   * @returns {ListBox}
   */
  anyItem: function() {
    return new ListBox();
  },
  
  /*
   * Returns every ListBox in the collection.
   * @returns {ListBox}
   */
  everyItem: function() {
    return new ListBox();
  },
  
  /*
   * Generates a string which, if executed, will return the ListBox.
   * @returns {String}
   */
  toSource: function() {
    return new String();
  },
  
  /*
   * Returns the ListBox with the specified index.
 *
   * @param {Number} index The index.
   * @returns {ListBox}
   */
  []: function(index) {
    return new ListBox();
  },
  
};
