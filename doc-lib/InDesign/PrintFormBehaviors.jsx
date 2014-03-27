/*
 * A collection of print form behavior objects.
 */
var PrintFormBehaviors = {
  /*
   * The number of objects in the collection.
   * @type {Number}
   */
  length: undefined,
  
  /*
   * Displays the number of elements in the PrintFormBehavior.
   * @returns {Number}
   */
  count: function() {
    return new Number();
  },
  
  /*
   * Creates a new PrintFormBehavior.
 *
   * @param {Object} [withProperties] Initial values for properties of the new PrintFormBehavior 
   * @returns {PrintFormBehavior}
   */
  add: function(withProperties) {
    return new PrintFormBehavior();
  },
  
  /*
   * Returns the PrintFormBehavior with the specified index or name.
 *
   * @param {Mixed} index The index or name. Can accept: Long Integer or String.
   * @returns {PrintFormBehavior}
   */
  item: function(index) {
    return new PrintFormBehavior();
  },
  
  /*
   * Returns the PrintFormBehavior with the specified name.
 *
   * @param {String} name The name.
   * @returns {PrintFormBehavior}
   */
  itemByName: function(name) {
    return new PrintFormBehavior();
  },
  
  /*
   * Returns the PrintFormBehavior with the specified ID.
 *
   * @param {Number} id The ID.
   * @returns {PrintFormBehavior}
   */
  itemByID: function(id) {
    return new PrintFormBehavior();
  },
  
  /*
   * Returns the PrintFormBehaviors within the specified range.
 *
   * @param {Mixed} from The PrintFormBehavior, index, or name at the beginning of the range. Can accept: PrintFormBehavior, Long Integer or String.
   * @param {Mixed} to The PrintFormBehavior, index, or name at the end of the range. Can accept: PrintFormBehavior, Long Integer or String.
   * @returns {PrintFormBehavior}
   */
  itemByRange: function(from, to) {
    return new PrintFormBehavior();
  },
  
  /*
   * Returns the first PrintFormBehavior in the collection.
   * @returns {PrintFormBehavior}
   */
  firstItem: function() {
    return new PrintFormBehavior();
  },
  
  /*
   * Returns the last PrintFormBehavior in the collection.
   * @returns {PrintFormBehavior}
   */
  lastItem: function() {
    return new PrintFormBehavior();
  },
  
  /*
   * Returns the middle PrintFormBehavior in the collection.
   * @returns {PrintFormBehavior}
   */
  middleItem: function() {
    return new PrintFormBehavior();
  },
  
  /*
   * Returns the PrintFormBehavior with the index previous to the specified index.
 *
   * @param {PrintFormBehavior} obj The index of the PrintFormBehavior that follows the desired PrintFormBehavior.
   * @returns {PrintFormBehavior}
   */
  previousItem: function(obj) {
    return new PrintFormBehavior();
  },
  
  /*
   * Returns the PrintFormBehavior whose index follows the specified PrintFormBehavior in the collection.
 *
   * @param {PrintFormBehavior} obj The PrintFormBehavior whose index comes before the desired PrintFormBehavior.
   * @returns {PrintFormBehavior}
   */
  nextItem: function(obj) {
    return new PrintFormBehavior();
  },
  
  /*
   * Returns any PrintFormBehavior in the collection.
   * @returns {PrintFormBehavior}
   */
  anyItem: function() {
    return new PrintFormBehavior();
  },
  
  /*
   * Returns every PrintFormBehavior in the collection.
   * @returns {PrintFormBehavior}
   */
  everyItem: function() {
    return new PrintFormBehavior();
  },
  
  /*
   * Generates a string which, if executed, will return the PrintFormBehavior.
   * @returns {String}
   */
  toSource: function() {
    return new String();
  },
  
  /*
   * Returns the PrintFormBehavior with the specified index.
 *
   * @param {Number} index The index.
   * @returns {PrintFormBehavior}
   */
  []: function(index) {
    return new PrintFormBehavior();
  },
  
};
