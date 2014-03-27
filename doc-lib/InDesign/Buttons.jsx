/*
 * A collection of buttons.
 */
var Buttons = {
  /*
   * The number of objects in the collection.
   * @type {Number}
   */
  length: undefined,
  
  /*
   * Displays the number of elements in the Button.
   * @returns {Number}
   */
  count: function() {
    return new Number();
  },
  
  /*
   * Creates a new Button
 *
   * @param {Layer} [layer] The layer on which to create the Button. 
   * @param {LocationOptions} [at] The location at which to insert the Button relative to the reference object or within the container object. 
   * @param {Mixed} [reference] The reference object. Note: Required when the at parameter is before or after. Can accept: Document, Spread, MasterSpread, Page, Layer or PageItem. 
   * @param {Object} [withProperties] Initial values for properties of the new Button 
   * @returns {Button}
   */
  add: function(layer, at, reference, withProperties) {
    return new Button();
  },
  
  /*
   * Returns the Button with the specified index or name.
 *
   * @param {Mixed} index The index or name. Can accept: Long Integer or String.
   * @returns {Button}
   */
  item: function(index) {
    return new Button();
  },
  
  /*
   * Returns the Button with the specified name.
 *
   * @param {String} name The name.
   * @returns {Button}
   */
  itemByName: function(name) {
    return new Button();
  },
  
  /*
   * Returns the Button with the specified ID.
 *
   * @param {Number} id The ID.
   * @returns {Button}
   */
  itemByID: function(id) {
    return new Button();
  },
  
  /*
   * Returns the Buttons within the specified range.
 *
   * @param {Mixed} from The Button, index, or name at the beginning of the range. Can accept: Button, Long Integer or String.
   * @param {Mixed} to The Button, index, or name at the end of the range. Can accept: Button, Long Integer or String.
   * @returns {Button}
   */
  itemByRange: function(from, to) {
    return new Button();
  },
  
  /*
   * Returns the first Button in the collection.
   * @returns {Button}
   */
  firstItem: function() {
    return new Button();
  },
  
  /*
   * Returns the last Button in the collection.
   * @returns {Button}
   */
  lastItem: function() {
    return new Button();
  },
  
  /*
   * Returns the middle Button in the collection.
   * @returns {Button}
   */
  middleItem: function() {
    return new Button();
  },
  
  /*
   * Returns the Button with the index previous to the specified index.
 *
   * @param {Button} obj The index of the Button that follows the desired Button.
   * @returns {Button}
   */
  previousItem: function(obj) {
    return new Button();
  },
  
  /*
   * Returns the Button whose index follows the specified Button in the collection.
 *
   * @param {Button} obj The Button whose index comes before the desired Button.
   * @returns {Button}
   */
  nextItem: function(obj) {
    return new Button();
  },
  
  /*
   * Returns any Button in the collection.
   * @returns {Button}
   */
  anyItem: function() {
    return new Button();
  },
  
  /*
   * Returns every Button in the collection.
   * @returns {Button}
   */
  everyItem: function() {
    return new Button();
  },
  
  /*
   * Generates a string which, if executed, will return the Button.
   * @returns {String}
   */
  toSource: function() {
    return new String();
  },
  
  /*
   * Returns the Button with the specified index.
 *
   * @param {Number} index The index.
   * @returns {Button}
   */
  []: function(index) {
    return new Button();
  },
  
};
