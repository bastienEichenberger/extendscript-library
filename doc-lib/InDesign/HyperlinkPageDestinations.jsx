/*
 * A collection of hyperlink page destinations.
 */
var HyperlinkPageDestinations = {
  /*
   * The number of objects in the collection.
   * @type {Number}
   */
  length: undefined,
  
  /*
   * Creates a new hyperlink page destination.
 *
   * @param {Page} [destination] The document page that the hyperlink points to. 
   * @param {Object} [withProperties] Initial values for properties of the new HyperlinkPageDestination 
   * @returns {HyperlinkPageDestination}
   */
  add: function(destination, withProperties) {
    return new HyperlinkPageDestination();
  },
  
  /*
   * Displays the number of elements in the HyperlinkPageDestination.
   * @returns {Number}
   */
  count: function() {
    return new Number();
  },
  
  /*
   * Returns the HyperlinkPageDestination with the specified index or name.
 *
   * @param {Mixed} index The index or name. Can accept: Long Integer or String.
   * @returns {HyperlinkPageDestination}
   */
  item: function(index) {
    return new HyperlinkPageDestination();
  },
  
  /*
   * Returns the HyperlinkPageDestination with the specified name.
 *
   * @param {String} name The name.
   * @returns {HyperlinkPageDestination}
   */
  itemByName: function(name) {
    return new HyperlinkPageDestination();
  },
  
  /*
   * Returns the HyperlinkPageDestination with the specified ID.
 *
   * @param {Number} id The ID.
   * @returns {HyperlinkPageDestination}
   */
  itemByID: function(id) {
    return new HyperlinkPageDestination();
  },
  
  /*
   * Returns the HyperlinkPageDestinations within the specified range.
 *
   * @param {Mixed} from The HyperlinkPageDestination, index, or name at the beginning of the range. Can accept: HyperlinkPageDestination, Long Integer or String.
   * @param {Mixed} to The HyperlinkPageDestination, index, or name at the end of the range. Can accept: HyperlinkPageDestination, Long Integer or String.
   * @returns {HyperlinkPageDestination}
   */
  itemByRange: function(from, to) {
    return new HyperlinkPageDestination();
  },
  
  /*
   * Returns the first HyperlinkPageDestination in the collection.
   * @returns {HyperlinkPageDestination}
   */
  firstItem: function() {
    return new HyperlinkPageDestination();
  },
  
  /*
   * Returns the last HyperlinkPageDestination in the collection.
   * @returns {HyperlinkPageDestination}
   */
  lastItem: function() {
    return new HyperlinkPageDestination();
  },
  
  /*
   * Returns the middle HyperlinkPageDestination in the collection.
   * @returns {HyperlinkPageDestination}
   */
  middleItem: function() {
    return new HyperlinkPageDestination();
  },
  
  /*
   * Returns the HyperlinkPageDestination with the index previous to the specified index.
 *
   * @param {HyperlinkPageDestination} obj The index of the HyperlinkPageDestination that follows the desired HyperlinkPageDestination.
   * @returns {HyperlinkPageDestination}
   */
  previousItem: function(obj) {
    return new HyperlinkPageDestination();
  },
  
  /*
   * Returns the HyperlinkPageDestination whose index follows the specified HyperlinkPageDestination in the collection.
 *
   * @param {HyperlinkPageDestination} obj The HyperlinkPageDestination whose index comes before the desired HyperlinkPageDestination.
   * @returns {HyperlinkPageDestination}
   */
  nextItem: function(obj) {
    return new HyperlinkPageDestination();
  },
  
  /*
   * Returns any HyperlinkPageDestination in the collection.
   * @returns {HyperlinkPageDestination}
   */
  anyItem: function() {
    return new HyperlinkPageDestination();
  },
  
  /*
   * Returns every HyperlinkPageDestination in the collection.
   * @returns {HyperlinkPageDestination}
   */
  everyItem: function() {
    return new HyperlinkPageDestination();
  },
  
  /*
   * Generates a string which, if executed, will return the HyperlinkPageDestination.
   * @returns {String}
   */
  toSource: function() {
    return new String();
  },
  
  /*
   * Returns the HyperlinkPageDestination with the specified index.
 *
   * @param {Number} index The index.
   * @returns {HyperlinkPageDestination}
   */
  []: function(index) {
    return new HyperlinkPageDestination();
  },
  
};
