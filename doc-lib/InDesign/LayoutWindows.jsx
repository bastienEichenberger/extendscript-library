/*
 * A collection of layout windows.
 */
var LayoutWindows = {
  /*
   * The number of objects in the collection.
   * @type {Number}
   */
  length: undefined,
  
  /*
   * Displays the number of elements in the LayoutWindow.
   * @returns {Number}
   */
  count: function() {
    return new Number();
  },
  
  /*
   * Returns the LayoutWindow with the specified index or name.
 *
   * @param {Mixed} index The index or name. Can accept: Long Integer or String.
   * @returns {LayoutWindow}
   */
  item: function(index) {
    return new LayoutWindow();
  },
  
  /*
   * Returns the LayoutWindow with the specified name.
 *
   * @param {String} name The name.
   * @returns {LayoutWindow}
   */
  itemByName: function(name) {
    return new LayoutWindow();
  },
  
  /*
   * Returns the LayoutWindows within the specified range.
 *
   * @param {Mixed} from The LayoutWindow, index, or name at the beginning of the range. Can accept: LayoutWindow, Long Integer or String.
   * @param {Mixed} to The LayoutWindow, index, or name at the end of the range. Can accept: LayoutWindow, Long Integer or String.
   * @returns {LayoutWindow}
   */
  itemByRange: function(from, to) {
    return new LayoutWindow();
  },
  
  /*
   * Returns the first LayoutWindow in the collection.
   * @returns {LayoutWindow}
   */
  firstItem: function() {
    return new LayoutWindow();
  },
  
  /*
   * Returns the last LayoutWindow in the collection.
   * @returns {LayoutWindow}
   */
  lastItem: function() {
    return new LayoutWindow();
  },
  
  /*
   * Returns the middle LayoutWindow in the collection.
   * @returns {LayoutWindow}
   */
  middleItem: function() {
    return new LayoutWindow();
  },
  
  /*
   * Returns the LayoutWindow with the index previous to the specified index.
 *
   * @param {LayoutWindow} obj The index of the LayoutWindow that follows the desired LayoutWindow.
   * @returns {LayoutWindow}
   */
  previousItem: function(obj) {
    return new LayoutWindow();
  },
  
  /*
   * Returns the LayoutWindow whose index follows the specified LayoutWindow in the collection.
 *
   * @param {LayoutWindow} obj The LayoutWindow whose index comes before the desired LayoutWindow.
   * @returns {LayoutWindow}
   */
  nextItem: function(obj) {
    return new LayoutWindow();
  },
  
  /*
   * Returns any LayoutWindow in the collection.
   * @returns {LayoutWindow}
   */
  anyItem: function() {
    return new LayoutWindow();
  },
  
  /*
   * Returns every LayoutWindow in the collection.
   * @returns {LayoutWindow}
   */
  everyItem: function() {
    return new LayoutWindow();
  },
  
  /*
   * Generates a string which, if executed, will return the LayoutWindow.
   * @returns {String}
   */
  toSource: function() {
    return new String();
  },
  
  /*
   * Returns the LayoutWindow with the specified index.
 *
   * @param {Number} index The index.
   * @returns {LayoutWindow}
   */
  []: function(index) {
    return new LayoutWindow();
  },
  
};
