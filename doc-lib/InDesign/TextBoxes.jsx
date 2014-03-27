/*
 * A collection of text boxes.
 */
var TextBoxes = {
  /*
   * The number of objects in the collection.
   * @type {Number}
   */
  length: undefined,
  
  /*
   * Displays the number of elements in the TextBox.
   * @returns {Number}
   */
  count: function() {
    return new Number();
  },
  
  /*
   * Creates a new TextBox
 *
   * @param {Layer} [layer] The layer on which to create the TextBox. 
   * @param {LocationOptions} [at] The location at which to insert the TextBox relative to the reference object or within the container object. 
   * @param {Mixed} [reference] The reference object. Note: Required when the at parameter is before or after. Can accept: Document, Spread, MasterSpread, Page, Layer or PageItem. 
   * @param {Object} [withProperties] Initial values for properties of the new TextBox 
   * @returns {TextBox}
   */
  add: function(layer, at, reference, withProperties) {
    return new TextBox();
  },
  
  /*
   * Returns the TextBox with the specified index or name.
 *
   * @param {Mixed} index The index or name. Can accept: Long Integer or String.
   * @returns {TextBox}
   */
  item: function(index) {
    return new TextBox();
  },
  
  /*
   * Returns the TextBox with the specified name.
 *
   * @param {String} name The name.
   * @returns {TextBox}
   */
  itemByName: function(name) {
    return new TextBox();
  },
  
  /*
   * Returns the TextBox with the specified ID.
 *
   * @param {Number} id The ID.
   * @returns {TextBox}
   */
  itemByID: function(id) {
    return new TextBox();
  },
  
  /*
   * Returns the TextBoxes within the specified range.
 *
   * @param {Mixed} from The TextBox, index, or name at the beginning of the range. Can accept: TextBox, Long Integer or String.
   * @param {Mixed} to The TextBox, index, or name at the end of the range. Can accept: TextBox, Long Integer or String.
   * @returns {TextBox}
   */
  itemByRange: function(from, to) {
    return new TextBox();
  },
  
  /*
   * Returns the first TextBox in the collection.
   * @returns {TextBox}
   */
  firstItem: function() {
    return new TextBox();
  },
  
  /*
   * Returns the last TextBox in the collection.
   * @returns {TextBox}
   */
  lastItem: function() {
    return new TextBox();
  },
  
  /*
   * Returns the middle TextBox in the collection.
   * @returns {TextBox}
   */
  middleItem: function() {
    return new TextBox();
  },
  
  /*
   * Returns the TextBox with the index previous to the specified index.
 *
   * @param {TextBox} obj The index of the TextBox that follows the desired TextBox.
   * @returns {TextBox}
   */
  previousItem: function(obj) {
    return new TextBox();
  },
  
  /*
   * Returns the TextBox whose index follows the specified TextBox in the collection.
 *
   * @param {TextBox} obj The TextBox whose index comes before the desired TextBox.
   * @returns {TextBox}
   */
  nextItem: function(obj) {
    return new TextBox();
  },
  
  /*
   * Returns any TextBox in the collection.
   * @returns {TextBox}
   */
  anyItem: function() {
    return new TextBox();
  },
  
  /*
   * Returns every TextBox in the collection.
   * @returns {TextBox}
   */
  everyItem: function() {
    return new TextBox();
  },
  
  /*
   * Generates a string which, if executed, will return the TextBox.
   * @returns {String}
   */
  toSource: function() {
    return new String();
  },
  
  /*
   * Returns the TextBox with the specified index.
 *
   * @param {Number} index The index.
   * @returns {TextBox}
   */
  []: function(index) {
    return new TextBox();
  },
  
};
