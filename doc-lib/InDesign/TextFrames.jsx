/*
 * A collection of text frames.
 */
var TextFrames = {
  /*
   * The number of objects in the collection.
   * @type {Number}
   */
  length: undefined,
  
  /*
   * Creates a new TextFrame
 *
   * @param {Layer} [layer] The layer on which to create the TextFrame. 
   * @param {LocationOptions} [at] The location at which to insert the TextFrame relative to the reference object or within the container object. 
   * @param {Mixed} [reference] The reference object. Note: Required when the at parameter is before or after. Can accept: Document, Spread, MasterSpread, Page, Layer or PageItem. 
   * @param {Object} [withProperties] Initial values for properties of the new TextFrame 
   * @returns {TextFrame}
   */
  add: function(layer, at, reference, withProperties) {
    return new TextFrame();
  },
  
  /*
   * Displays the number of elements in the TextFrame.
   * @returns {Number}
   */
  count: function() {
    return new Number();
  },
  
  /*
   * Returns the TextFrame with the specified index or name.
 *
   * @param {Mixed} index The index or name. Can accept: Long Integer or String.
   * @returns {TextFrame}
   */
  item: function(index) {
    return new TextFrame();
  },
  
  /*
   * Returns the TextFrame with the specified name.
 *
   * @param {String} name The name.
   * @returns {TextFrame}
   */
  itemByName: function(name) {
    return new TextFrame();
  },
  
  /*
   * Returns the TextFrame with the specified ID.
 *
   * @param {Number} id The ID.
   * @returns {TextFrame}
   */
  itemByID: function(id) {
    return new TextFrame();
  },
  
  /*
   * Returns the TextFrames within the specified range.
 *
   * @param {Mixed} from The TextFrame, index, or name at the beginning of the range. Can accept: TextFrame, Long Integer or String.
   * @param {Mixed} to The TextFrame, index, or name at the end of the range. Can accept: TextFrame, Long Integer or String.
   * @returns {TextFrame}
   */
  itemByRange: function(from, to) {
    return new TextFrame();
  },
  
  /*
   * Returns the first TextFrame in the collection.
   * @returns {TextFrame}
   */
  firstItem: function() {
    return new TextFrame();
  },
  
  /*
   * Returns the last TextFrame in the collection.
   * @returns {TextFrame}
   */
  lastItem: function() {
    return new TextFrame();
  },
  
  /*
   * Returns the middle TextFrame in the collection.
   * @returns {TextFrame}
   */
  middleItem: function() {
    return new TextFrame();
  },
  
  /*
   * Returns the TextFrame with the index previous to the specified index.
 *
   * @param {TextFrame} obj The index of the TextFrame that follows the desired TextFrame.
   * @returns {TextFrame}
   */
  previousItem: function(obj) {
    return new TextFrame();
  },
  
  /*
   * Returns the TextFrame whose index follows the specified TextFrame in the collection.
 *
   * @param {TextFrame} obj The TextFrame whose index comes before the desired TextFrame.
   * @returns {TextFrame}
   */
  nextItem: function(obj) {
    return new TextFrame();
  },
  
  /*
   * Returns any TextFrame in the collection.
   * @returns {TextFrame}
   */
  anyItem: function() {
    return new TextFrame();
  },
  
  /*
   * Returns every TextFrame in the collection.
   * @returns {TextFrame}
   */
  everyItem: function() {
    return new TextFrame();
  },
  
  /*
   * Generates a string which, if executed, will return the TextFrame.
   * @returns {String}
   */
  toSource: function() {
    return new String();
  },
  
  /*
   * Returns the TextFrame with the specified index.
 *
   * @param {Number} index The index.
   * @returns {TextFrame}
   */
  []: function(index) {
    return new TextFrame();
  },
  
};
