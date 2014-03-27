/*
 * The media items collection.
 */
var MediaItems = {
  /*
   * The number of objects in the collection.
   * @type {Number}
   */
  length: undefined,
  
  /*
   * Displays the number of elements in the MediaItem.
   * @returns {Number}
   */
  count: function() {
    return new Number();
  },
  
  /*
   * Returns the MediaItem with the specified index or name.
 *
   * @param {Mixed} index The index or name. Can accept: Long Integer or String.
   * @returns {MediaItem}
   */
  item: function(index) {
    return new MediaItem();
  },
  
  /*
   * Returns the MediaItem with the specified name.
 *
   * @param {String} name The name.
   * @returns {MediaItem}
   */
  itemByName: function(name) {
    return new MediaItem();
  },
  
  /*
   * Returns the MediaItem with the specified ID.
 *
   * @param {Number} id The ID.
   * @returns {MediaItem}
   */
  itemByID: function(id) {
    return new MediaItem();
  },
  
  /*
   * Returns the MediaItems within the specified range.
 *
   * @param {Mixed} from The MediaItem, index, or name at the beginning of the range. Can accept: MediaItem, Long Integer or String.
   * @param {Mixed} to The MediaItem, index, or name at the end of the range. Can accept: MediaItem, Long Integer or String.
   * @returns {MediaItem}
   */
  itemByRange: function(from, to) {
    return new MediaItem();
  },
  
  /*
   * Returns the first MediaItem in the collection.
   * @returns {MediaItem}
   */
  firstItem: function() {
    return new MediaItem();
  },
  
  /*
   * Returns the last MediaItem in the collection.
   * @returns {MediaItem}
   */
  lastItem: function() {
    return new MediaItem();
  },
  
  /*
   * Returns the middle MediaItem in the collection.
   * @returns {MediaItem}
   */
  middleItem: function() {
    return new MediaItem();
  },
  
  /*
   * Returns the MediaItem with the index previous to the specified index.
 *
   * @param {MediaItem} obj The index of the MediaItem that follows the desired MediaItem.
   * @returns {MediaItem}
   */
  previousItem: function(obj) {
    return new MediaItem();
  },
  
  /*
   * Returns the MediaItem whose index follows the specified MediaItem in the collection.
 *
   * @param {MediaItem} obj The MediaItem whose index comes before the desired MediaItem.
   * @returns {MediaItem}
   */
  nextItem: function(obj) {
    return new MediaItem();
  },
  
  /*
   * Returns any MediaItem in the collection.
   * @returns {MediaItem}
   */
  anyItem: function() {
    return new MediaItem();
  },
  
  /*
   * Returns every MediaItem in the collection.
   * @returns {MediaItem}
   */
  everyItem: function() {
    return new MediaItem();
  },
  
  /*
   * Generates a string which, if executed, will return the MediaItem.
   * @returns {String}
   */
  toSource: function() {
    return new String();
  },
  
  /*
   * Returns the MediaItem with the specified index.
 *
   * @param {Number} index The index.
   * @returns {MediaItem}
   */
  []: function(index) {
    return new MediaItem();
  },
  
};
