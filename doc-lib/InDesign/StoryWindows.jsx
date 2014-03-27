/*
 * A collection of story windows.
 */
var StoryWindows = {
  /*
   * The number of objects in the collection.
   * @type {Number}
   */
  length: undefined,
  
  /*
   * Displays the number of elements in the StoryWindow.
   * @returns {Number}
   */
  count: function() {
    return new Number();
  },
  
  /*
   * Returns the StoryWindow with the specified index or name.
 *
   * @param {Mixed} index The index or name. Can accept: Long Integer or String.
   * @returns {StoryWindow}
   */
  item: function(index) {
    return new StoryWindow();
  },
  
  /*
   * Returns the StoryWindow with the specified name.
 *
   * @param {String} name The name.
   * @returns {StoryWindow}
   */
  itemByName: function(name) {
    return new StoryWindow();
  },
  
  /*
   * Returns the StoryWindows within the specified range.
 *
   * @param {Mixed} from The StoryWindow, index, or name at the beginning of the range. Can accept: StoryWindow, Long Integer or String.
   * @param {Mixed} to The StoryWindow, index, or name at the end of the range. Can accept: StoryWindow, Long Integer or String.
   * @returns {StoryWindow}
   */
  itemByRange: function(from, to) {
    return new StoryWindow();
  },
  
  /*
   * Returns the first StoryWindow in the collection.
   * @returns {StoryWindow}
   */
  firstItem: function() {
    return new StoryWindow();
  },
  
  /*
   * Returns the last StoryWindow in the collection.
   * @returns {StoryWindow}
   */
  lastItem: function() {
    return new StoryWindow();
  },
  
  /*
   * Returns the middle StoryWindow in the collection.
   * @returns {StoryWindow}
   */
  middleItem: function() {
    return new StoryWindow();
  },
  
  /*
   * Returns the StoryWindow with the index previous to the specified index.
 *
   * @param {StoryWindow} obj The index of the StoryWindow that follows the desired StoryWindow.
   * @returns {StoryWindow}
   */
  previousItem: function(obj) {
    return new StoryWindow();
  },
  
  /*
   * Returns the StoryWindow whose index follows the specified StoryWindow in the collection.
 *
   * @param {StoryWindow} obj The StoryWindow whose index comes before the desired StoryWindow.
   * @returns {StoryWindow}
   */
  nextItem: function(obj) {
    return new StoryWindow();
  },
  
  /*
   * Returns any StoryWindow in the collection.
   * @returns {StoryWindow}
   */
  anyItem: function() {
    return new StoryWindow();
  },
  
  /*
   * Returns every StoryWindow in the collection.
   * @returns {StoryWindow}
   */
  everyItem: function() {
    return new StoryWindow();
  },
  
  /*
   * Generates a string which, if executed, will return the StoryWindow.
   * @returns {String}
   */
  toSource: function() {
    return new String();
  },
  
  /*
   * Returns the StoryWindow with the specified index.
 *
   * @param {Number} index The index.
   * @returns {StoryWindow}
   */
  []: function(index) {
    return new StoryWindow();
  },
  
};
