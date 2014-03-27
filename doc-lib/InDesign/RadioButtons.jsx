/*
 * A collection of radio buttons.
 */
var RadioButtons = {
  /*
   * The number of objects in the collection.
   * @type {Number}
   */
  length: undefined,
  
  /*
   * Displays the number of elements in the RadioButton.
   * @returns {Number}
   */
  count: function() {
    return new Number();
  },
  
  /*
   * Creates a new RadioButton
 *
   * @param {Layer} [layer] The layer on which to create the RadioButton. 
   * @param {LocationOptions} [at] The location at which to insert the RadioButton relative to the reference object or within the container object. 
   * @param {Mixed} [reference] The reference object. Note: Required when the at parameter is before or after. Can accept: Document, Spread, MasterSpread, Page, Layer or PageItem. 
   * @param {Object} [withProperties] Initial values for properties of the new RadioButton 
   * @returns {RadioButton}
   */
  add: function(layer, at, reference, withProperties) {
    return new RadioButton();
  },
  
  /*
   * Returns the RadioButton with the specified index or name.
 *
   * @param {Mixed} index The index or name. Can accept: Long Integer or String.
   * @returns {RadioButton}
   */
  item: function(index) {
    return new RadioButton();
  },
  
  /*
   * Returns the RadioButton with the specified name.
 *
   * @param {String} name The name.
   * @returns {RadioButton}
   */
  itemByName: function(name) {
    return new RadioButton();
  },
  
  /*
   * Returns the RadioButton with the specified ID.
 *
   * @param {Number} id The ID.
   * @returns {RadioButton}
   */
  itemByID: function(id) {
    return new RadioButton();
  },
  
  /*
   * Returns the RadioButtons within the specified range.
 *
   * @param {Mixed} from The RadioButton, index, or name at the beginning of the range. Can accept: RadioButton, Long Integer or String.
   * @param {Mixed} to The RadioButton, index, or name at the end of the range. Can accept: RadioButton, Long Integer or String.
   * @returns {RadioButton}
   */
  itemByRange: function(from, to) {
    return new RadioButton();
  },
  
  /*
   * Returns the first RadioButton in the collection.
   * @returns {RadioButton}
   */
  firstItem: function() {
    return new RadioButton();
  },
  
  /*
   * Returns the last RadioButton in the collection.
   * @returns {RadioButton}
   */
  lastItem: function() {
    return new RadioButton();
  },
  
  /*
   * Returns the middle RadioButton in the collection.
   * @returns {RadioButton}
   */
  middleItem: function() {
    return new RadioButton();
  },
  
  /*
   * Returns the RadioButton with the index previous to the specified index.
 *
   * @param {RadioButton} obj The index of the RadioButton that follows the desired RadioButton.
   * @returns {RadioButton}
   */
  previousItem: function(obj) {
    return new RadioButton();
  },
  
  /*
   * Returns the RadioButton whose index follows the specified RadioButton in the collection.
 *
   * @param {RadioButton} obj The RadioButton whose index comes before the desired RadioButton.
   * @returns {RadioButton}
   */
  nextItem: function(obj) {
    return new RadioButton();
  },
  
  /*
   * Returns any RadioButton in the collection.
   * @returns {RadioButton}
   */
  anyItem: function() {
    return new RadioButton();
  },
  
  /*
   * Returns every RadioButton in the collection.
   * @returns {RadioButton}
   */
  everyItem: function() {
    return new RadioButton();
  },
  
  /*
   * Generates a string which, if executed, will return the RadioButton.
   * @returns {String}
   */
  toSource: function() {
    return new String();
  },
  
  /*
   * Returns the RadioButton with the specified index.
 *
   * @param {Number} index The index.
   * @returns {RadioButton}
   */
  []: function(index) {
    return new RadioButton();
  },
  
};
