/*
 * A collection of comboboxes.
 */
var ComboBoxes = {
  /*
   * The number of objects in the collection.
   * @type {Number}
   */
  length: undefined,
  
  /*
   * Displays the number of elements in the ComboBox.
   * @returns {Number}
   */
  count: function() {
    return new Number();
  },
  
  /*
   * Creates a new ComboBox
 *
   * @param {Layer} [layer] The layer on which to create the ComboBox. 
   * @param {LocationOptions} [at] The location at which to insert the ComboBox relative to the reference object or within the container object. 
   * @param {Mixed} [reference] The reference object. Note: Required when the at parameter is before or after. Can accept: Document, Spread, MasterSpread, Page, Layer or PageItem. 
   * @param {Object} [withProperties] Initial values for properties of the new ComboBox 
   * @returns {ComboBox}
   */
  add: function(layer, at, reference, withProperties) {
    return new ComboBox();
  },
  
  /*
   * Returns the ComboBox with the specified index or name.
 *
   * @param {Mixed} index The index or name. Can accept: Long Integer or String.
   * @returns {ComboBox}
   */
  item: function(index) {
    return new ComboBox();
  },
  
  /*
   * Returns the ComboBox with the specified name.
 *
   * @param {String} name The name.
   * @returns {ComboBox}
   */
  itemByName: function(name) {
    return new ComboBox();
  },
  
  /*
   * Returns the ComboBox with the specified ID.
 *
   * @param {Number} id The ID.
   * @returns {ComboBox}
   */
  itemByID: function(id) {
    return new ComboBox();
  },
  
  /*
   * Returns the ComboBoxes within the specified range.
 *
   * @param {Mixed} from The ComboBox, index, or name at the beginning of the range. Can accept: ComboBox, Long Integer or String.
   * @param {Mixed} to The ComboBox, index, or name at the end of the range. Can accept: ComboBox, Long Integer or String.
   * @returns {ComboBox}
   */
  itemByRange: function(from, to) {
    return new ComboBox();
  },
  
  /*
   * Returns the first ComboBox in the collection.
   * @returns {ComboBox}
   */
  firstItem: function() {
    return new ComboBox();
  },
  
  /*
   * Returns the last ComboBox in the collection.
   * @returns {ComboBox}
   */
  lastItem: function() {
    return new ComboBox();
  },
  
  /*
   * Returns the middle ComboBox in the collection.
   * @returns {ComboBox}
   */
  middleItem: function() {
    return new ComboBox();
  },
  
  /*
   * Returns the ComboBox with the index previous to the specified index.
 *
   * @param {ComboBox} obj The index of the ComboBox that follows the desired ComboBox.
   * @returns {ComboBox}
   */
  previousItem: function(obj) {
    return new ComboBox();
  },
  
  /*
   * Returns the ComboBox whose index follows the specified ComboBox in the collection.
 *
   * @param {ComboBox} obj The ComboBox whose index comes before the desired ComboBox.
   * @returns {ComboBox}
   */
  nextItem: function(obj) {
    return new ComboBox();
  },
  
  /*
   * Returns any ComboBox in the collection.
   * @returns {ComboBox}
   */
  anyItem: function() {
    return new ComboBox();
  },
  
  /*
   * Returns every ComboBox in the collection.
   * @returns {ComboBox}
   */
  everyItem: function() {
    return new ComboBox();
  },
  
  /*
   * Generates a string which, if executed, will return the ComboBox.
   * @returns {String}
   */
  toSource: function() {
    return new String();
  },
  
  /*
   * Returns the ComboBox with the specified index.
 *
   * @param {Number} index The index.
   * @returns {ComboBox}
   */
  []: function(index) {
    return new ComboBox();
  },
  
};
