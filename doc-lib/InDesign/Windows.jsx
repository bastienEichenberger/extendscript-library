/*
 * A collection of windows.
 */
var Windows = {
  /*
   * The number of objects in the collection.
   * @type {Number}
   */
  length: undefined,
  
  /*
   * Displays the number of elements in the Window.
   * @returns {Number}
   */
  count: function() {
    return new Number();
  },
  
  /*
   * Creates a new Window.
 *
   * @param {Object} [withProperties] Initial values for properties of the new Window 
   * @returns {Window}
   */
  add: function(withProperties) {
    return new Window();
  },
  
  /*
   * Returns the Window with the specified index or name.
 *
   * @param {Mixed} index The index or name. Can accept: Long Integer or String.
   * @returns {Window}
   */
  item: function(index) {
    return new Window();
  },
  
  /*
   * Returns the Window with the specified name.
 *
   * @param {String} name The name.
   * @returns {Window}
   */
  itemByName: function(name) {
    return new Window();
  },
  
  /*
   * Returns the Windows within the specified range.
 *
   * @param {Mixed} from The Window, index, or name at the beginning of the range. Can accept: Window, Long Integer or String.
   * @param {Mixed} to The Window, index, or name at the end of the range. Can accept: Window, Long Integer or String.
   * @returns {Window}
   */
  itemByRange: function(from, to) {
    return new Window();
  },
  
  /*
   * Returns the first Window in the collection.
   * @returns {Window}
   */
  firstItem: function() {
    return new Window();
  },
  
  /*
   * Returns the last Window in the collection.
   * @returns {Window}
   */
  lastItem: function() {
    return new Window();
  },
  
  /*
   * Returns the middle Window in the collection.
   * @returns {Window}
   */
  middleItem: function() {
    return new Window();
  },
  
  /*
   * Returns the Window with the index previous to the specified index.
 *
   * @param {Window} obj The index of the Window that follows the desired Window.
   * @returns {Window}
   */
  previousItem: function(obj) {
    return new Window();
  },
  
  /*
   * Returns the Window whose index follows the specified Window in the collection.
 *
   * @param {Window} obj The Window whose index comes before the desired Window.
   * @returns {Window}
   */
  nextItem: function(obj) {
    return new Window();
  },
  
  /*
   * Returns any Window in the collection.
   * @returns {Window}
   */
  anyItem: function() {
    return new Window();
  },
  
  /*
   * Returns every Window in the collection.
   * @returns {Window}
   */
  everyItem: function() {
    return new Window();
  },
  
  /*
   * Generates a string which, if executed, will return the Window.
   * @returns {String}
   */
  toSource: function() {
    return new String();
  },
  
  /*
   * Returns the Window with the specified index.
 *
   * @param {Number} index The index.
   * @returns {Window}
   */
  []: function(index) {
    return new Window();
  },
  
};
