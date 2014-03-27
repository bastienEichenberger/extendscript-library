/*
 * A collection of bookmarks.
 */
var Bookmarks = {
  /*
   * The number of objects in the collection.
   * @type {Number}
   */
  length: undefined,
  
  /*
   * Creates a new bookmark.
 *
   * @param {Mixed} destination The bookmark destination. Can accept: HyperlinkTextDestination, HyperlinkPageDestination, HyperlinkExternalPageDestination or Page.
   * @param {Object} [withProperties] Initial values for properties of the new Bookmark 
   * @returns {Bookmark}
   */
  add: function(destination, withProperties) {
    return new Bookmark();
  },
  
  /*
   * Displays the number of elements in the Bookmark.
   * @returns {Number}
   */
  count: function() {
    return new Number();
  },
  
  /*
   * Returns the Bookmark with the specified index or name.
 *
   * @param {Mixed} index The index or name. Can accept: Long Integer or String.
   * @returns {Bookmark}
   */
  item: function(index) {
    return new Bookmark();
  },
  
  /*
   * Returns the Bookmark with the specified name.
 *
   * @param {String} name The name.
   * @returns {Bookmark}
   */
  itemByName: function(name) {
    return new Bookmark();
  },
  
  /*
   * Returns the Bookmark with the specified ID.
 *
   * @param {Number} id The ID.
   * @returns {Bookmark}
   */
  itemByID: function(id) {
    return new Bookmark();
  },
  
  /*
   * Returns the Bookmarks within the specified range.
 *
   * @param {Mixed} from The Bookmark, index, or name at the beginning of the range. Can accept: Bookmark, Long Integer or String.
   * @param {Mixed} to The Bookmark, index, or name at the end of the range. Can accept: Bookmark, Long Integer or String.
   * @returns {Bookmark}
   */
  itemByRange: function(from, to) {
    return new Bookmark();
  },
  
  /*
   * Returns the first Bookmark in the collection.
   * @returns {Bookmark}
   */
  firstItem: function() {
    return new Bookmark();
  },
  
  /*
   * Returns the last Bookmark in the collection.
   * @returns {Bookmark}
   */
  lastItem: function() {
    return new Bookmark();
  },
  
  /*
   * Returns the middle Bookmark in the collection.
   * @returns {Bookmark}
   */
  middleItem: function() {
    return new Bookmark();
  },
  
  /*
   * Returns the Bookmark with the index previous to the specified index.
 *
   * @param {Bookmark} obj The index of the Bookmark that follows the desired Bookmark.
   * @returns {Bookmark}
   */
  previousItem: function(obj) {
    return new Bookmark();
  },
  
  /*
   * Returns the Bookmark whose index follows the specified Bookmark in the collection.
 *
   * @param {Bookmark} obj The Bookmark whose index comes before the desired Bookmark.
   * @returns {Bookmark}
   */
  nextItem: function(obj) {
    return new Bookmark();
  },
  
  /*
   * Returns any Bookmark in the collection.
   * @returns {Bookmark}
   */
  anyItem: function() {
    return new Bookmark();
  },
  
  /*
   * Returns every Bookmark in the collection.
   * @returns {Bookmark}
   */
  everyItem: function() {
    return new Bookmark();
  },
  
  /*
   * Generates a string which, if executed, will return the Bookmark.
   * @returns {String}
   */
  toSource: function() {
    return new String();
  },
  
  /*
   * Returns the Bookmark with the specified index.
 *
   * @param {Number} index The index.
   * @returns {Bookmark}
   */
  []: function(index) {
    return new Bookmark();
  },
  
};
