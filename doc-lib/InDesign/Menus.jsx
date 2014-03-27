/*
 * A collection of menus.
 */
var Menus = {
  /*
   * The number of objects in the collection.
   * @type {Number}
   */
  length: undefined,
  
  /*
   * Displays the number of elements in the Menu.
   * @returns {Number}
   */
  count: function() {
    return new Number();
  },
  
  /*
   * Returns the Menu with the specified index or name.
 *
   * @param {Mixed} index The index or name. Can accept: Long Integer or String.
   * @returns {Menu}
   */
  item: function(index) {
    return new Menu();
  },
  
  /*
   * Returns the Menu with the specified name.
 *
   * @param {String} name The name.
   * @returns {Menu}
   */
  itemByName: function(name) {
    return new Menu();
  },
  
  /*
   * Returns the Menus within the specified range.
 *
   * @param {Mixed} from The Menu, index, or name at the beginning of the range. Can accept: Menu, Long Integer or String.
   * @param {Mixed} to The Menu, index, or name at the end of the range. Can accept: Menu, Long Integer or String.
   * @returns {Menu}
   */
  itemByRange: function(from, to) {
    return new Menu();
  },
  
  /*
   * Returns the first Menu in the collection.
   * @returns {Menu}
   */
  firstItem: function() {
    return new Menu();
  },
  
  /*
   * Returns the last Menu in the collection.
   * @returns {Menu}
   */
  lastItem: function() {
    return new Menu();
  },
  
  /*
   * Returns the middle Menu in the collection.
   * @returns {Menu}
   */
  middleItem: function() {
    return new Menu();
  },
  
  /*
   * Returns the Menu with the index previous to the specified index.
 *
   * @param {Menu} obj The index of the Menu that follows the desired Menu.
   * @returns {Menu}
   */
  previousItem: function(obj) {
    return new Menu();
  },
  
  /*
   * Returns the Menu whose index follows the specified Menu in the collection.
 *
   * @param {Menu} obj The Menu whose index comes before the desired Menu.
   * @returns {Menu}
   */
  nextItem: function(obj) {
    return new Menu();
  },
  
  /*
   * Returns any Menu in the collection.
   * @returns {Menu}
   */
  anyItem: function() {
    return new Menu();
  },
  
  /*
   * Returns every Menu in the collection.
   * @returns {Menu}
   */
  everyItem: function() {
    return new Menu();
  },
  
  /*
   * Generates a string which, if executed, will return the Menu.
   * @returns {String}
   */
  toSource: function() {
    return new String();
  },
  
  /*
   * Returns the Menu with the specified index.
 *
   * @param {Number} index The index.
   * @returns {Menu}
   */
  []: function(index) {
    return new Menu();
  },
  
};
