/*
 * A collection of hyperlinks.
 */
var Hyperlinks = {
  /*
   * The number of objects in the collection.
   * @type {Number}
   */
  length: undefined,
  
  /*
   * Creates a new hyperlink.
 *
   * @param {Mixed} hyperlinkSource The hyperlinked object. Can accept: HyperlinkPageItemSource, HyperlinkTextSource or CrossReferenceSource.
   * @param {Mixed} [hyperlinkDestination] The destination that the hyperlink points to. Can accept: Ordered array containing fileName:String, volumn:String, directoryId:Long Integer, dataLinkClassId:Long Integer, destinationUid:Long Integer, HyperlinkTextDestination, HyperlinkPageDestination, HyperlinkExternalPageDestination, HyperlinkURLDestination or ParagraphDestination. 
   * @param {Object} [withProperties] Initial values for properties of the new Hyperlink 
   * @returns {Hyperlink}
   */
  add: function(hyperlinkSource, hyperlinkDestination, withProperties) {
    return new Hyperlink();
  },
  
  /*
   * Displays the number of elements in the Hyperlink.
   * @returns {Number}
   */
  count: function() {
    return new Number();
  },
  
  /*
   * Returns the Hyperlink with the specified index or name.
 *
   * @param {Mixed} index The index or name. Can accept: Long Integer or String.
   * @returns {Hyperlink}
   */
  item: function(index) {
    return new Hyperlink();
  },
  
  /*
   * Returns the Hyperlink with the specified name.
 *
   * @param {String} name The name.
   * @returns {Hyperlink}
   */
  itemByName: function(name) {
    return new Hyperlink();
  },
  
  /*
   * Returns the Hyperlink with the specified ID.
 *
   * @param {Number} id The ID.
   * @returns {Hyperlink}
   */
  itemByID: function(id) {
    return new Hyperlink();
  },
  
  /*
   * Returns the Hyperlinks within the specified range.
 *
   * @param {Mixed} from The Hyperlink, index, or name at the beginning of the range. Can accept: Hyperlink, Long Integer or String.
   * @param {Mixed} to The Hyperlink, index, or name at the end of the range. Can accept: Hyperlink, Long Integer or String.
   * @returns {Hyperlink}
   */
  itemByRange: function(from, to) {
    return new Hyperlink();
  },
  
  /*
   * Returns the first Hyperlink in the collection.
   * @returns {Hyperlink}
   */
  firstItem: function() {
    return new Hyperlink();
  },
  
  /*
   * Returns the last Hyperlink in the collection.
   * @returns {Hyperlink}
   */
  lastItem: function() {
    return new Hyperlink();
  },
  
  /*
   * Returns the middle Hyperlink in the collection.
   * @returns {Hyperlink}
   */
  middleItem: function() {
    return new Hyperlink();
  },
  
  /*
   * Returns the Hyperlink with the index previous to the specified index.
 *
   * @param {Hyperlink} obj The index of the Hyperlink that follows the desired Hyperlink.
   * @returns {Hyperlink}
   */
  previousItem: function(obj) {
    return new Hyperlink();
  },
  
  /*
   * Returns the Hyperlink whose index follows the specified Hyperlink in the collection.
 *
   * @param {Hyperlink} obj The Hyperlink whose index comes before the desired Hyperlink.
   * @returns {Hyperlink}
   */
  nextItem: function(obj) {
    return new Hyperlink();
  },
  
  /*
   * Returns any Hyperlink in the collection.
   * @returns {Hyperlink}
   */
  anyItem: function() {
    return new Hyperlink();
  },
  
  /*
   * Returns every Hyperlink in the collection.
   * @returns {Hyperlink}
   */
  everyItem: function() {
    return new Hyperlink();
  },
  
  /*
   * Generates a string which, if executed, will return the Hyperlink.
   * @returns {String}
   */
  toSource: function() {
    return new String();
  },
  
  /*
   * Returns the Hyperlink with the specified index.
 *
   * @param {Number} index The index.
   * @returns {Hyperlink}
   */
  []: function(index) {
    return new Hyperlink();
  },
  
};
