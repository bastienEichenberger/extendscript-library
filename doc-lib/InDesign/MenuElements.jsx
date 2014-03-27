/*
 * A collection of menu elements.
 */
var MenuElements = {
  /*
   * The number of objects in the collection.
   * @type {Number}
   */
  length: undefined,
  
  /*
   * Displays the number of elements in the MenuElement.
   * @returns {Number}
   */
  count: function() {
    return new Number();
  },
  
  /*
   * Returns the MenuElement with the specified index or name.
 *
   * @param {Mixed} index The index or name. Can accept: Long Integer or String.
   * @returns {MenuElement}
   */
  item: function(index) {
    return new MenuElement();
  },
  
  /*
   * Returns the MenuElements within the specified range.
 *
   * @param {Mixed} from The MenuElement, index, or name at the beginning of the range. Can accept: MenuElement, Long Integer or String.
   * @param {Mixed} to The MenuElement, index, or name at the end of the range. Can accept: MenuElement, Long Integer or String.
   * @returns {MenuElement}
   */
  itemByRange: function(from, to) {
    return new MenuElement();
  },
  
  /*
   * Returns the first MenuElement in the collection.
   * @returns {MenuElement}
   */
  firstItem: function() {
    return new MenuElement();
  },
  
  /*
   * Returns the last MenuElement in the collection.
   * @returns {MenuElement}
   */
  lastItem: function() {
    return new MenuElement();
  },
  
  /*
   * Returns the middle MenuElement in the collection.
   * @returns {MenuElement}
   */
  middleItem: function() {
    return new MenuElement();
  },
  
  /*
   * Returns the MenuElement with the index previous to the specified index.
 *
   * @param {MenuElement} obj The index of the MenuElement that follows the desired MenuElement.
   * @returns {MenuElement}
   */
  previousItem: function(obj) {
    return new MenuElement();
  },
  
  /*
   * Returns the MenuElement whose index follows the specified MenuElement in the collection.
 *
   * @param {MenuElement} obj The MenuElement whose index comes before the desired MenuElement.
   * @returns {MenuElement}
   */
  nextItem: function(obj) {
    return new MenuElement();
  },
  
  /*
   * Returns any MenuElement in the collection.
   * @returns {MenuElement}
   */
  anyItem: function() {
    return new MenuElement();
  },
  
  /*
   * Returns every MenuElement in the collection.
   * @returns {MenuElement}
   */
  everyItem: function() {
    return new MenuElement();
  },
  
  /*
   * Generates a string which, if executed, will return the MenuElement.
   * @returns {String}
   */
  toSource: function() {
    return new String();
  },
  
  /*
   * Returns the MenuElement with the specified index.
 *
   * @param {Number} index The index.
   * @returns {MenuElement}
   */
  []: function(index) {
    return new MenuElement();
  },
  
};
