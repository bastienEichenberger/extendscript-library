/*
 * A collection of paragraph destinations.
 */
var ParagraphDestinations = {
  /*
   * The number of objects in the collection.
   * @type {Number}
   */
  length: undefined,
  
  /*
   * Creates a new paragraph destination.
 *
   * @param {Text} destination The text or insertion point inside the paragraph that the cross reference points to. The insertion point is always adjusted to the beginning of the paragraph.
   * @param {Object} [withProperties] Initial values for properties of the new ParagraphDestination 
   * @returns {ParagraphDestination}
   */
  add: function(destination, withProperties) {
    return new ParagraphDestination();
  },
  
  /*
   * Displays the number of elements in the ParagraphDestination.
   * @returns {Number}
   */
  count: function() {
    return new Number();
  },
  
  /*
   * Returns the ParagraphDestination with the specified index or name.
 *
   * @param {Mixed} index The index or name. Can accept: Long Integer or String.
   * @returns {ParagraphDestination}
   */
  item: function(index) {
    return new ParagraphDestination();
  },
  
  /*
   * Returns the ParagraphDestination with the specified name.
 *
   * @param {String} name The name.
   * @returns {ParagraphDestination}
   */
  itemByName: function(name) {
    return new ParagraphDestination();
  },
  
  /*
   * Returns the ParagraphDestination with the specified ID.
 *
   * @param {Number} id The ID.
   * @returns {ParagraphDestination}
   */
  itemByID: function(id) {
    return new ParagraphDestination();
  },
  
  /*
   * Returns the ParagraphDestinations within the specified range.
 *
   * @param {Mixed} from The ParagraphDestination, index, or name at the beginning of the range. Can accept: ParagraphDestination, Long Integer or String.
   * @param {Mixed} to The ParagraphDestination, index, or name at the end of the range. Can accept: ParagraphDestination, Long Integer or String.
   * @returns {ParagraphDestination}
   */
  itemByRange: function(from, to) {
    return new ParagraphDestination();
  },
  
  /*
   * Returns the first ParagraphDestination in the collection.
   * @returns {ParagraphDestination}
   */
  firstItem: function() {
    return new ParagraphDestination();
  },
  
  /*
   * Returns the last ParagraphDestination in the collection.
   * @returns {ParagraphDestination}
   */
  lastItem: function() {
    return new ParagraphDestination();
  },
  
  /*
   * Returns the middle ParagraphDestination in the collection.
   * @returns {ParagraphDestination}
   */
  middleItem: function() {
    return new ParagraphDestination();
  },
  
  /*
   * Returns the ParagraphDestination with the index previous to the specified index.
 *
   * @param {ParagraphDestination} obj The index of the ParagraphDestination that follows the desired ParagraphDestination.
   * @returns {ParagraphDestination}
   */
  previousItem: function(obj) {
    return new ParagraphDestination();
  },
  
  /*
   * Returns the ParagraphDestination whose index follows the specified ParagraphDestination in the collection.
 *
   * @param {ParagraphDestination} obj The ParagraphDestination whose index comes before the desired ParagraphDestination.
   * @returns {ParagraphDestination}
   */
  nextItem: function(obj) {
    return new ParagraphDestination();
  },
  
  /*
   * Returns any ParagraphDestination in the collection.
   * @returns {ParagraphDestination}
   */
  anyItem: function() {
    return new ParagraphDestination();
  },
  
  /*
   * Returns every ParagraphDestination in the collection.
   * @returns {ParagraphDestination}
   */
  everyItem: function() {
    return new ParagraphDestination();
  },
  
  /*
   * Generates a string which, if executed, will return the ParagraphDestination.
   * @returns {String}
   */
  toSource: function() {
    return new String();
  },
  
  /*
   * Returns the ParagraphDestination with the specified index.
 *
   * @param {Number} index The index.
   * @returns {ParagraphDestination}
   */
  []: function(index) {
    return new ParagraphDestination();
  },
  
};
