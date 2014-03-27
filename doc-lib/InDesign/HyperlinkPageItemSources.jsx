/*
 * A collection of hyperlink page item sources.
 */
var HyperlinkPageItemSources = {
  /*
   * The number of objects in the collection.
   * @type {Number}
   */
  length: undefined,
  
  /*
   * Creates a new hyperlink page item source.
 *
   * @param {PageItem} source The page item to hyperlink.
   * @param {Object} [withProperties] Initial values for properties of the new HyperlinkPageItemSource 
   * @returns {HyperlinkPageItemSource}
   */
  add: function(source, withProperties) {
    return new HyperlinkPageItemSource();
  },
  
  /*
   * Displays the number of elements in the HyperlinkPageItemSource.
   * @returns {Number}
   */
  count: function() {
    return new Number();
  },
  
  /*
   * Returns the HyperlinkPageItemSource with the specified index or name.
 *
   * @param {Mixed} index The index or name. Can accept: Long Integer or String.
   * @returns {HyperlinkPageItemSource}
   */
  item: function(index) {
    return new HyperlinkPageItemSource();
  },
  
  /*
   * Returns the HyperlinkPageItemSource with the specified name.
 *
   * @param {String} name The name.
   * @returns {HyperlinkPageItemSource}
   */
  itemByName: function(name) {
    return new HyperlinkPageItemSource();
  },
  
  /*
   * Returns the HyperlinkPageItemSource with the specified ID.
 *
   * @param {Number} id The ID.
   * @returns {HyperlinkPageItemSource}
   */
  itemByID: function(id) {
    return new HyperlinkPageItemSource();
  },
  
  /*
   * Returns the HyperlinkPageItemSources within the specified range.
 *
   * @param {Mixed} from The HyperlinkPageItemSource, index, or name at the beginning of the range. Can accept: HyperlinkPageItemSource, Long Integer or String.
   * @param {Mixed} to The HyperlinkPageItemSource, index, or name at the end of the range. Can accept: HyperlinkPageItemSource, Long Integer or String.
   * @returns {HyperlinkPageItemSource}
   */
  itemByRange: function(from, to) {
    return new HyperlinkPageItemSource();
  },
  
  /*
   * Returns the first HyperlinkPageItemSource in the collection.
   * @returns {HyperlinkPageItemSource}
   */
  firstItem: function() {
    return new HyperlinkPageItemSource();
  },
  
  /*
   * Returns the last HyperlinkPageItemSource in the collection.
   * @returns {HyperlinkPageItemSource}
   */
  lastItem: function() {
    return new HyperlinkPageItemSource();
  },
  
  /*
   * Returns the middle HyperlinkPageItemSource in the collection.
   * @returns {HyperlinkPageItemSource}
   */
  middleItem: function() {
    return new HyperlinkPageItemSource();
  },
  
  /*
   * Returns the HyperlinkPageItemSource with the index previous to the specified index.
 *
   * @param {HyperlinkPageItemSource} obj The index of the HyperlinkPageItemSource that follows the desired HyperlinkPageItemSource.
   * @returns {HyperlinkPageItemSource}
   */
  previousItem: function(obj) {
    return new HyperlinkPageItemSource();
  },
  
  /*
   * Returns the HyperlinkPageItemSource whose index follows the specified HyperlinkPageItemSource in the collection.
 *
   * @param {HyperlinkPageItemSource} obj The HyperlinkPageItemSource whose index comes before the desired HyperlinkPageItemSource.
   * @returns {HyperlinkPageItemSource}
   */
  nextItem: function(obj) {
    return new HyperlinkPageItemSource();
  },
  
  /*
   * Returns any HyperlinkPageItemSource in the collection.
   * @returns {HyperlinkPageItemSource}
   */
  anyItem: function() {
    return new HyperlinkPageItemSource();
  },
  
  /*
   * Returns every HyperlinkPageItemSource in the collection.
   * @returns {HyperlinkPageItemSource}
   */
  everyItem: function() {
    return new HyperlinkPageItemSource();
  },
  
  /*
   * Generates a string which, if executed, will return the HyperlinkPageItemSource.
   * @returns {String}
   */
  toSource: function() {
    return new String();
  },
  
  /*
   * Returns the HyperlinkPageItemSource with the specified index.
 *
   * @param {Number} index The index.
   * @returns {HyperlinkPageItemSource}
   */
  []: function(index) {
    return new HyperlinkPageItemSource();
  },
  
};
