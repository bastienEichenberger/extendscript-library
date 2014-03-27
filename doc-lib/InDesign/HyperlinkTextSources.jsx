/*
 * A collection of hyperlink text sources.
 */
var HyperlinkTextSources = {
  /*
   * The number of objects in the collection.
   * @type {Number}
   */
  length: undefined,
  
  /*
   * Creates a new hyperlink text source.
 *
   * @param {Text} source The text or insertion point to hyperlink.
   * @param {Object} [withProperties] Initial values for properties of the new HyperlinkTextSource 
   * @returns {HyperlinkTextSource}
   */
  add: function(source, withProperties) {
    return new HyperlinkTextSource();
  },
  
  /*
   * Displays the number of elements in the HyperlinkTextSource.
   * @returns {Number}
   */
  count: function() {
    return new Number();
  },
  
  /*
   * Returns the HyperlinkTextSource with the specified index or name.
 *
   * @param {Mixed} index The index or name. Can accept: Long Integer or String.
   * @returns {HyperlinkTextSource}
   */
  item: function(index) {
    return new HyperlinkTextSource();
  },
  
  /*
   * Returns the HyperlinkTextSource with the specified name.
 *
   * @param {String} name The name.
   * @returns {HyperlinkTextSource}
   */
  itemByName: function(name) {
    return new HyperlinkTextSource();
  },
  
  /*
   * Returns the HyperlinkTextSource with the specified ID.
 *
   * @param {Number} id The ID.
   * @returns {HyperlinkTextSource}
   */
  itemByID: function(id) {
    return new HyperlinkTextSource();
  },
  
  /*
   * Returns the HyperlinkTextSources within the specified range.
 *
   * @param {Mixed} from The HyperlinkTextSource, index, or name at the beginning of the range. Can accept: HyperlinkTextSource, Long Integer or String.
   * @param {Mixed} to The HyperlinkTextSource, index, or name at the end of the range. Can accept: HyperlinkTextSource, Long Integer or String.
   * @returns {HyperlinkTextSource}
   */
  itemByRange: function(from, to) {
    return new HyperlinkTextSource();
  },
  
  /*
   * Returns the first HyperlinkTextSource in the collection.
   * @returns {HyperlinkTextSource}
   */
  firstItem: function() {
    return new HyperlinkTextSource();
  },
  
  /*
   * Returns the last HyperlinkTextSource in the collection.
   * @returns {HyperlinkTextSource}
   */
  lastItem: function() {
    return new HyperlinkTextSource();
  },
  
  /*
   * Returns the middle HyperlinkTextSource in the collection.
   * @returns {HyperlinkTextSource}
   */
  middleItem: function() {
    return new HyperlinkTextSource();
  },
  
  /*
   * Returns the HyperlinkTextSource with the index previous to the specified index.
 *
   * @param {HyperlinkTextSource} obj The index of the HyperlinkTextSource that follows the desired HyperlinkTextSource.
   * @returns {HyperlinkTextSource}
   */
  previousItem: function(obj) {
    return new HyperlinkTextSource();
  },
  
  /*
   * Returns the HyperlinkTextSource whose index follows the specified HyperlinkTextSource in the collection.
 *
   * @param {HyperlinkTextSource} obj The HyperlinkTextSource whose index comes before the desired HyperlinkTextSource.
   * @returns {HyperlinkTextSource}
   */
  nextItem: function(obj) {
    return new HyperlinkTextSource();
  },
  
  /*
   * Returns any HyperlinkTextSource in the collection.
   * @returns {HyperlinkTextSource}
   */
  anyItem: function() {
    return new HyperlinkTextSource();
  },
  
  /*
   * Returns every HyperlinkTextSource in the collection.
   * @returns {HyperlinkTextSource}
   */
  everyItem: function() {
    return new HyperlinkTextSource();
  },
  
  /*
   * Generates a string which, if executed, will return the HyperlinkTextSource.
   * @returns {String}
   */
  toSource: function() {
    return new String();
  },
  
  /*
   * Returns the HyperlinkTextSource with the specified index.
 *
   * @param {Number} index The index.
   * @returns {HyperlinkTextSource}
   */
  []: function(index) {
    return new HyperlinkTextSource();
  },
  
};
