/*
 * A collection of menu items.
 */
var MenuItems = {
  /*
   * The number of objects in the collection.
   * @type {Number}
   */
  length: undefined,
  
  /*
   * Creates a new menu item.
 *
   * @param {MenuAction} associatedMenuAction The menu action that implements the  menu item.
   * @param {LocationOptions} [at] The location of the menu item relative to the reference object or within the containing object. 
   * @param {MenuElement} [reference] The reference object. Note: Required when the at parameter specifies before or after. 
   * @param {Object} [withProperties] Initial values for properties of the new MenuItem 
   * @returns {MenuItem}
   */
  add: function(associatedMenuAction, at, reference, withProperties) {
    return new MenuItem();
  },
  
  /*
   * Displays the number of elements in the MenuItem.
   * @returns {Number}
   */
  count: function() {
    return new Number();
  },
  
  /*
   * Returns the MenuItem with the specified index or name.
 *
   * @param {Mixed} index The index or name. Can accept: Long Integer or String.
   * @returns {MenuItem}
   */
  item: function(index) {
    return new MenuItem();
  },
  
  /*
   * Returns the MenuItem with the specified name.
 *
   * @param {String} name The name.
   * @returns {MenuItem}
   */
  itemByName: function(name) {
    return new MenuItem();
  },
  
  /*
   * Returns the MenuItem with the specified ID.
 *
   * @param {Number} id The ID.
   * @returns {MenuItem}
   */
  itemByID: function(id) {
    return new MenuItem();
  },
  
  /*
   * Returns the MenuItems within the specified range.
 *
   * @param {Mixed} from The MenuItem, index, or name at the beginning of the range. Can accept: MenuItem, Long Integer or String.
   * @param {Mixed} to The MenuItem, index, or name at the end of the range. Can accept: MenuItem, Long Integer or String.
   * @returns {MenuItem}
   */
  itemByRange: function(from, to) {
    return new MenuItem();
  },
  
  /*
   * Returns the first MenuItem in the collection.
   * @returns {MenuItem}
   */
  firstItem: function() {
    return new MenuItem();
  },
  
  /*
   * Returns the last MenuItem in the collection.
   * @returns {MenuItem}
   */
  lastItem: function() {
    return new MenuItem();
  },
  
  /*
   * Returns the middle MenuItem in the collection.
   * @returns {MenuItem}
   */
  middleItem: function() {
    return new MenuItem();
  },
  
  /*
   * Returns the MenuItem with the index previous to the specified index.
 *
   * @param {MenuItem} obj The index of the MenuItem that follows the desired MenuItem.
   * @returns {MenuItem}
   */
  previousItem: function(obj) {
    return new MenuItem();
  },
  
  /*
   * Returns the MenuItem whose index follows the specified MenuItem in the collection.
 *
   * @param {MenuItem} obj The MenuItem whose index comes before the desired MenuItem.
   * @returns {MenuItem}
   */
  nextItem: function(obj) {
    return new MenuItem();
  },
  
  /*
   * Returns any MenuItem in the collection.
   * @returns {MenuItem}
   */
  anyItem: function() {
    return new MenuItem();
  },
  
  /*
   * Returns every MenuItem in the collection.
   * @returns {MenuItem}
   */
  everyItem: function() {
    return new MenuItem();
  },
  
  /*
   * Generates a string which, if executed, will return the MenuItem.
   * @returns {String}
   */
  toSource: function() {
    return new String();
  },
  
  /*
   * Returns the MenuItem with the specified index.
 *
   * @param {Number} index The index.
   * @returns {MenuItem}
   */
  []: function(index) {
    return new MenuItem();
  },
  
};
