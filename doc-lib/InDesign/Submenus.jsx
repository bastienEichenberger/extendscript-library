/*
 * A collection of submenus.
 */
var Submenus = {
  /*
   * The number of objects in the collection.
   * @type {Number}
   */
  length: undefined,
  
  /*
   * Creates a new submenu.
 *
   * @param {String} title The name of the Submenu for display in the user interface. The title includes any ampersand characters (&), which are used to tell the Windows OS to underline the following character in the name for use with the Alt key to navigate to a menu item. Double ampersands are used to display an actual ampersand character in the name. The Mac OS ignores and removes the extra ampersand characters.
   * @param {LocationOptions} [at] The location of the submenu relative to the reference object or within the containing object. 
   * @param {MenuElement} [reference] The reference object. Note: Required when the at parameter specifies before or after. 
   * @param {Object} [withProperties] Initial values for properties of the new Submenu 
   * @returns {Submenu}
   */
  add: function(title, at, reference, withProperties) {
    return new Submenu();
  },
  
  /*
   * Displays the number of elements in the Submenu.
   * @returns {Number}
   */
  count: function() {
    return new Number();
  },
  
  /*
   * Returns the Submenu with the specified index or name.
 *
   * @param {Mixed} index The index or name. Can accept: Long Integer or String.
   * @returns {Submenu}
   */
  item: function(index) {
    return new Submenu();
  },
  
  /*
   * Returns the Submenu with the specified name.
 *
   * @param {String} name The name.
   * @returns {Submenu}
   */
  itemByName: function(name) {
    return new Submenu();
  },
  
  /*
   * Returns the Submenus within the specified range.
 *
   * @param {Mixed} from The Submenu, index, or name at the beginning of the range. Can accept: Submenu, Long Integer or String.
   * @param {Mixed} to The Submenu, index, or name at the end of the range. Can accept: Submenu, Long Integer or String.
   * @returns {Submenu}
   */
  itemByRange: function(from, to) {
    return new Submenu();
  },
  
  /*
   * Returns the first Submenu in the collection.
   * @returns {Submenu}
   */
  firstItem: function() {
    return new Submenu();
  },
  
  /*
   * Returns the last Submenu in the collection.
   * @returns {Submenu}
   */
  lastItem: function() {
    return new Submenu();
  },
  
  /*
   * Returns the middle Submenu in the collection.
   * @returns {Submenu}
   */
  middleItem: function() {
    return new Submenu();
  },
  
  /*
   * Returns the Submenu with the index previous to the specified index.
 *
   * @param {Submenu} obj The index of the Submenu that follows the desired Submenu.
   * @returns {Submenu}
   */
  previousItem: function(obj) {
    return new Submenu();
  },
  
  /*
   * Returns the Submenu whose index follows the specified Submenu in the collection.
 *
   * @param {Submenu} obj The Submenu whose index comes before the desired Submenu.
   * @returns {Submenu}
   */
  nextItem: function(obj) {
    return new Submenu();
  },
  
  /*
   * Returns any Submenu in the collection.
   * @returns {Submenu}
   */
  anyItem: function() {
    return new Submenu();
  },
  
  /*
   * Returns every Submenu in the collection.
   * @returns {Submenu}
   */
  everyItem: function() {
    return new Submenu();
  },
  
  /*
   * Generates a string which, if executed, will return the Submenu.
   * @returns {String}
   */
  toSource: function() {
    return new String();
  },
  
  /*
   * Returns the Submenu with the specified index.
 *
   * @param {Number} index The index.
   * @returns {Submenu}
   */
  []: function(index) {
    return new Submenu();
  },
  
};
