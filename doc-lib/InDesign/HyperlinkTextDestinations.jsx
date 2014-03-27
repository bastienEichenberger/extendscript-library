/*
 * A collection of hyperlink text destinations.
 */
var HyperlinkTextDestinations = {
  /*
   * The number of objects in the collection.
   * @type {Number}
   */
  length: undefined,
  
  /*
   * Creates a new hyperlink text destination.
 *
   * @param {Text} destination The text or insertion point location that the hyperlink points to.
   * @param {Object} [withProperties] Initial values for properties of the new HyperlinkTextDestination 
   * @returns {HyperlinkTextDestination}
   */
  add: function(destination, withProperties) {
    return new HyperlinkTextDestination();
  },
  
  /*
   * Displays the number of elements in the HyperlinkTextDestination.
   * @returns {Number}
   */
  count: function() {
    return new Number();
  },
  
  /*
   * Returns the HyperlinkTextDestination with the specified index or name.
 *
   * @param {Mixed} index The index or name. Can accept: Long Integer or String.
   * @returns {HyperlinkTextDestination}
   */
  item: function(index) {
    return new HyperlinkTextDestination();
  },
  
  /*
   * Returns the HyperlinkTextDestination with the specified name.
 *
   * @param {String} name The name.
   * @returns {HyperlinkTextDestination}
   */
  itemByName: function(name) {
    return new HyperlinkTextDestination();
  },
  
  /*
   * Returns the HyperlinkTextDestination with the specified ID.
 *
   * @param {Number} id The ID.
   * @returns {HyperlinkTextDestination}
   */
  itemByID: function(id) {
    return new HyperlinkTextDestination();
  },
  
  /*
   * Returns the HyperlinkTextDestinations within the specified range.
 *
   * @param {Mixed} from The HyperlinkTextDestination, index, or name at the beginning of the range. Can accept: HyperlinkTextDestination, Long Integer or String.
   * @param {Mixed} to The HyperlinkTextDestination, index, or name at the end of the range. Can accept: HyperlinkTextDestination, Long Integer or String.
   * @returns {HyperlinkTextDestination}
   */
  itemByRange: function(from, to) {
    return new HyperlinkTextDestination();
  },
  
  /*
   * Returns the first HyperlinkTextDestination in the collection.
   * @returns {HyperlinkTextDestination}
   */
  firstItem: function() {
    return new HyperlinkTextDestination();
  },
  
  /*
   * Returns the last HyperlinkTextDestination in the collection.
   * @returns {HyperlinkTextDestination}
   */
  lastItem: function() {
    return new HyperlinkTextDestination();
  },
  
  /*
   * Returns the middle HyperlinkTextDestination in the collection.
   * @returns {HyperlinkTextDestination}
   */
  middleItem: function() {
    return new HyperlinkTextDestination();
  },
  
  /*
   * Returns the HyperlinkTextDestination with the index previous to the specified index.
 *
   * @param {HyperlinkTextDestination} obj The index of the HyperlinkTextDestination that follows the desired HyperlinkTextDestination.
   * @returns {HyperlinkTextDestination}
   */
  previousItem: function(obj) {
    return new HyperlinkTextDestination();
  },
  
  /*
   * Returns the HyperlinkTextDestination whose index follows the specified HyperlinkTextDestination in the collection.
 *
   * @param {HyperlinkTextDestination} obj The HyperlinkTextDestination whose index comes before the desired HyperlinkTextDestination.
   * @returns {HyperlinkTextDestination}
   */
  nextItem: function(obj) {
    return new HyperlinkTextDestination();
  },
  
  /*
   * Returns any HyperlinkTextDestination in the collection.
   * @returns {HyperlinkTextDestination}
   */
  anyItem: function() {
    return new HyperlinkTextDestination();
  },
  
  /*
   * Returns every HyperlinkTextDestination in the collection.
   * @returns {HyperlinkTextDestination}
   */
  everyItem: function() {
    return new HyperlinkTextDestination();
  },
  
  /*
   * Generates a string which, if executed, will return the HyperlinkTextDestination.
   * @returns {String}
   */
  toSource: function() {
    return new String();
  },
  
  /*
   * Returns the HyperlinkTextDestination with the specified index.
 *
   * @param {Number} index The index.
   * @returns {HyperlinkTextDestination}
   */
  []: function(index) {
    return new HyperlinkTextDestination();
  },
  
};
