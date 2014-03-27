/*
 * A collection of rectangles.
 */
var Rectangles = {
  /*
   * The number of objects in the collection.
   * @type {Number}
   */
  length: undefined,
  
  /*
   * Creates a new Rectangle
 *
   * @param {Layer} [layer] The layer on which to create the Rectangle. 
   * @param {LocationOptions} [at] The location at which to insert the Rectangle relative to the reference object or within the container object. 
   * @param {Mixed} [reference] The reference object. Note: Required when the at parameter is before or after. Can accept: Document, Spread, MasterSpread, Page, Layer or PageItem. 
   * @param {Object} [withProperties] Initial values for properties of the new Rectangle 
   * @returns {Rectangle}
   */
  add: function(layer, at, reference, withProperties) {
    return new Rectangle();
  },
  
  /*
   * Displays the number of elements in the Rectangle.
   * @returns {Number}
   */
  count: function() {
    return new Number();
  },
  
  /*
   * Returns the Rectangle with the specified index or name.
 *
   * @param {Mixed} index The index or name. Can accept: Long Integer or String.
   * @returns {Rectangle}
   */
  item: function(index) {
    return new Rectangle();
  },
  
  /*
   * Returns the Rectangle with the specified name.
 *
   * @param {String} name The name.
   * @returns {Rectangle}
   */
  itemByName: function(name) {
    return new Rectangle();
  },
  
  /*
   * Returns the Rectangle with the specified ID.
 *
   * @param {Number} id The ID.
   * @returns {Rectangle}
   */
  itemByID: function(id) {
    return new Rectangle();
  },
  
  /*
   * Returns the Rectangles within the specified range.
 *
   * @param {Mixed} from The Rectangle, index, or name at the beginning of the range. Can accept: Rectangle, Long Integer or String.
   * @param {Mixed} to The Rectangle, index, or name at the end of the range. Can accept: Rectangle, Long Integer or String.
   * @returns {Rectangle}
   */
  itemByRange: function(from, to) {
    return new Rectangle();
  },
  
  /*
   * Returns the first Rectangle in the collection.
   * @returns {Rectangle}
   */
  firstItem: function() {
    return new Rectangle();
  },
  
  /*
   * Returns the last Rectangle in the collection.
   * @returns {Rectangle}
   */
  lastItem: function() {
    return new Rectangle();
  },
  
  /*
   * Returns the middle Rectangle in the collection.
   * @returns {Rectangle}
   */
  middleItem: function() {
    return new Rectangle();
  },
  
  /*
   * Returns the Rectangle with the index previous to the specified index.
 *
   * @param {Rectangle} obj The index of the Rectangle that follows the desired Rectangle.
   * @returns {Rectangle}
   */
  previousItem: function(obj) {
    return new Rectangle();
  },
  
  /*
   * Returns the Rectangle whose index follows the specified Rectangle in the collection.
 *
   * @param {Rectangle} obj The Rectangle whose index comes before the desired Rectangle.
   * @returns {Rectangle}
   */
  nextItem: function(obj) {
    return new Rectangle();
  },
  
  /*
   * Returns any Rectangle in the collection.
   * @returns {Rectangle}
   */
  anyItem: function() {
    return new Rectangle();
  },
  
  /*
   * Returns every Rectangle in the collection.
   * @returns {Rectangle}
   */
  everyItem: function() {
    return new Rectangle();
  },
  
  /*
   * Generates a string which, if executed, will return the Rectangle.
   * @returns {String}
   */
  toSource: function() {
    return new String();
  },
  
  /*
   * Returns the Rectangle with the specified index.
 *
   * @param {Number} index The index.
   * @returns {Rectangle}
   */
  []: function(index) {
    return new Rectangle();
  },
  
};
