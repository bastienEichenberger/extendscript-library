/*
 * A collection of panels.
 */
var Panels = {
  /*
   * The number of objects in the collection.
   * @type {Number}
   */
  length: undefined,
  
  /*
   * Displays the number of elements in the Panel.
   * @returns {Number}
   */
  count: function() {
    return new Number();
  },
  
  /*
   * Returns the Panel with the specified index or name.
 *
   * @param {Mixed} index The index or name. Can accept: Long Integer or String.
   * @returns {Panel}
   */
  item: function(index) {
    return new Panel();
  },
  
  /*
   * Returns the Panel with the specified name.
 *
   * @param {String} name The name.
   * @returns {Panel}
   */
  itemByName: function(name) {
    return new Panel();
  },
  
  /*
   * Returns the Panels within the specified range.
 *
   * @param {Mixed} from The Panel, index, or name at the beginning of the range. Can accept: Panel, Long Integer or String.
   * @param {Mixed} to The Panel, index, or name at the end of the range. Can accept: Panel, Long Integer or String.
   * @returns {Panel}
   */
  itemByRange: function(from, to) {
    return new Panel();
  },
  
  /*
   * Returns the first Panel in the collection.
   * @returns {Panel}
   */
  firstItem: function() {
    return new Panel();
  },
  
  /*
   * Returns the last Panel in the collection.
   * @returns {Panel}
   */
  lastItem: function() {
    return new Panel();
  },
  
  /*
   * Returns the middle Panel in the collection.
   * @returns {Panel}
   */
  middleItem: function() {
    return new Panel();
  },
  
  /*
   * Returns the Panel with the index previous to the specified index.
 *
   * @param {Panel} obj The index of the Panel that follows the desired Panel.
   * @returns {Panel}
   */
  previousItem: function(obj) {
    return new Panel();
  },
  
  /*
   * Returns the Panel whose index follows the specified Panel in the collection.
 *
   * @param {Panel} obj The Panel whose index comes before the desired Panel.
   * @returns {Panel}
   */
  nextItem: function(obj) {
    return new Panel();
  },
  
  /*
   * Returns any Panel in the collection.
   * @returns {Panel}
   */
  anyItem: function() {
    return new Panel();
  },
  
  /*
   * Returns every Panel in the collection.
   * @returns {Panel}
   */
  everyItem: function() {
    return new Panel();
  },
  
  /*
   * Generates a string which, if executed, will return the Panel.
   * @returns {String}
   */
  toSource: function() {
    return new String();
  },
  
  /*
   * Returns the Panel with the specified index.
 *
   * @param {Number} index The index.
   * @returns {Panel}
   */
  []: function(index) {
    return new Panel();
  },
  
};
