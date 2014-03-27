/*
 * A collection of menu separators.
 */
var MenuSeparators = {
  /*
   * The number of objects in the collection.
   * @type {Number}
   */
  length: undefined,
  
  /*
   * Creates a new menu separator.
 *
   * @param {LocationOptions} [at] The location of the menu separator relative to the reference object or within the containing object. 
   * @param {MenuElement} [reference] The reference object. Note: Required when the at parameter specifies before or after. 
   * @param {Object} [withProperties] Initial values for properties of the new MenuSeparator 
   * @returns {MenuSeparator}
   */
  add: function(at, reference, withProperties) {
    return new MenuSeparator();
  },
  
  /*
   * Displays the number of elements in the MenuSeparator.
   * @returns {Number}
   */
  count: function() {
    return new Number();
  },
  
  /*
   * Returns the MenuSeparator with the specified index or name.
 *
   * @param {Mixed} index The index or name. Can accept: Long Integer or String.
   * @returns {MenuSeparator}
   */
  item: function(index) {
    return new MenuSeparator();
  },
  
  /*
   * Returns the MenuSeparator with the specified ID.
 *
   * @param {Number} id The ID.
   * @returns {MenuSeparator}
   */
  itemByID: function(id) {
    return new MenuSeparator();
  },
  
  /*
   * Returns the MenuSeparators within the specified range.
 *
   * @param {Mixed} from The MenuSeparator, index, or name at the beginning of the range. Can accept: MenuSeparator, Long Integer or String.
   * @param {Mixed} to The MenuSeparator, index, or name at the end of the range. Can accept: MenuSeparator, Long Integer or String.
   * @returns {MenuSeparator}
   */
  itemByRange: function(from, to) {
    return new MenuSeparator();
  },
  
  /*
   * Returns the first MenuSeparator in the collection.
   * @returns {MenuSeparator}
   */
  firstItem: function() {
    return new MenuSeparator();
  },
  
  /*
   * Returns the last MenuSeparator in the collection.
   * @returns {MenuSeparator}
   */
  lastItem: function() {
    return new MenuSeparator();
  },
  
  /*
   * Returns the middle MenuSeparator in the collection.
   * @returns {MenuSeparator}
   */
  middleItem: function() {
    return new MenuSeparator();
  },
  
  /*
   * Returns the MenuSeparator with the index previous to the specified index.
 *
   * @param {MenuSeparator} obj The index of the MenuSeparator that follows the desired MenuSeparator.
   * @returns {MenuSeparator}
   */
  previousItem: function(obj) {
    return new MenuSeparator();
  },
  
  /*
   * Returns the MenuSeparator whose index follows the specified MenuSeparator in the collection.
 *
   * @param {MenuSeparator} obj The MenuSeparator whose index comes before the desired MenuSeparator.
   * @returns {MenuSeparator}
   */
  nextItem: function(obj) {
    return new MenuSeparator();
  },
  
  /*
   * Returns any MenuSeparator in the collection.
   * @returns {MenuSeparator}
   */
  anyItem: function() {
    return new MenuSeparator();
  },
  
  /*
   * Returns every MenuSeparator in the collection.
   * @returns {MenuSeparator}
   */
  everyItem: function() {
    return new MenuSeparator();
  },
  
  /*
   * Generates a string which, if executed, will return the MenuSeparator.
   * @returns {String}
   */
  toSource: function() {
    return new String();
  },
  
  /*
   * Returns the MenuSeparator with the specified index.
 *
   * @param {Number} index The index.
   * @returns {MenuSeparator}
   */
  []: function(index) {
    return new MenuSeparator();
  },
  
};
