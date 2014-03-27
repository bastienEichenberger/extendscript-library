/*
 * A collection of checkboxes.
 */
var CheckBoxes = {
  /*
   * The number of objects in the collection.
   * @type {Number}
   */
  length: undefined,
  
  /*
   * Displays the number of elements in the CheckBox.
   * @returns {Number}
   */
  count: function() {
    return new Number();
  },
  
  /*
   * Creates a new CheckBox
 *
   * @param {Layer} [layer] The layer on which to create the CheckBox. 
   * @param {LocationOptions} [at] The location at which to insert the CheckBox relative to the reference object or within the container object. 
   * @param {Mixed} [reference] The reference object. Note: Required when the at parameter is before or after. Can accept: Document, Spread, MasterSpread, Page, Layer or PageItem. 
   * @param {Object} [withProperties] Initial values for properties of the new CheckBox 
   * @returns {CheckBox}
   */
  add: function(layer, at, reference, withProperties) {
    return new CheckBox();
  },
  
  /*
   * Returns the CheckBox with the specified index or name.
 *
   * @param {Mixed} index The index or name. Can accept: Long Integer or String.
   * @returns {CheckBox}
   */
  item: function(index) {
    return new CheckBox();
  },
  
  /*
   * Returns the CheckBox with the specified name.
 *
   * @param {String} name The name.
   * @returns {CheckBox}
   */
  itemByName: function(name) {
    return new CheckBox();
  },
  
  /*
   * Returns the CheckBox with the specified ID.
 *
   * @param {Number} id The ID.
   * @returns {CheckBox}
   */
  itemByID: function(id) {
    return new CheckBox();
  },
  
  /*
   * Returns the CheckBoxes within the specified range.
 *
   * @param {Mixed} from The CheckBox, index, or name at the beginning of the range. Can accept: CheckBox, Long Integer or String.
   * @param {Mixed} to The CheckBox, index, or name at the end of the range. Can accept: CheckBox, Long Integer or String.
   * @returns {CheckBox}
   */
  itemByRange: function(from, to) {
    return new CheckBox();
  },
  
  /*
   * Returns the first CheckBox in the collection.
   * @returns {CheckBox}
   */
  firstItem: function() {
    return new CheckBox();
  },
  
  /*
   * Returns the last CheckBox in the collection.
   * @returns {CheckBox}
   */
  lastItem: function() {
    return new CheckBox();
  },
  
  /*
   * Returns the middle CheckBox in the collection.
   * @returns {CheckBox}
   */
  middleItem: function() {
    return new CheckBox();
  },
  
  /*
   * Returns the CheckBox with the index previous to the specified index.
 *
   * @param {CheckBox} obj The index of the CheckBox that follows the desired CheckBox.
   * @returns {CheckBox}
   */
  previousItem: function(obj) {
    return new CheckBox();
  },
  
  /*
   * Returns the CheckBox whose index follows the specified CheckBox in the collection.
 *
   * @param {CheckBox} obj The CheckBox whose index comes before the desired CheckBox.
   * @returns {CheckBox}
   */
  nextItem: function(obj) {
    return new CheckBox();
  },
  
  /*
   * Returns any CheckBox in the collection.
   * @returns {CheckBox}
   */
  anyItem: function() {
    return new CheckBox();
  },
  
  /*
   * Returns every CheckBox in the collection.
   * @returns {CheckBox}
   */
  everyItem: function() {
    return new CheckBox();
  },
  
  /*
   * Generates a string which, if executed, will return the CheckBox.
   * @returns {String}
   */
  toSource: function() {
    return new String();
  },
  
  /*
   * Returns the CheckBox with the specified index.
 *
   * @param {Number} index The index.
   * @returns {CheckBox}
   */
  []: function(index) {
    return new CheckBox();
  },
  
};
