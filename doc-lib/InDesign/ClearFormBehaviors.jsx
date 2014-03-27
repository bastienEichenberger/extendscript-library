/*
 * A collection of clear form behavior objects.
 */
var ClearFormBehaviors = {
  /*
   * The number of objects in the collection.
   * @type {Number}
   */
  length: undefined,
  
  /*
   * Displays the number of elements in the ClearFormBehavior.
   * @returns {Number}
   */
  count: function() {
    return new Number();
  },
  
  /*
   * Creates a new ClearFormBehavior.
 *
   * @param {Object} [withProperties] Initial values for properties of the new ClearFormBehavior 
   * @returns {ClearFormBehavior}
   */
  add: function(withProperties) {
    return new ClearFormBehavior();
  },
  
  /*
   * Returns the ClearFormBehavior with the specified index or name.
 *
   * @param {Mixed} index The index or name. Can accept: Long Integer or String.
   * @returns {ClearFormBehavior}
   */
  item: function(index) {
    return new ClearFormBehavior();
  },
  
  /*
   * Returns the ClearFormBehavior with the specified name.
 *
   * @param {String} name The name.
   * @returns {ClearFormBehavior}
   */
  itemByName: function(name) {
    return new ClearFormBehavior();
  },
  
  /*
   * Returns the ClearFormBehavior with the specified ID.
 *
   * @param {Number} id The ID.
   * @returns {ClearFormBehavior}
   */
  itemByID: function(id) {
    return new ClearFormBehavior();
  },
  
  /*
   * Returns the ClearFormBehaviors within the specified range.
 *
   * @param {Mixed} from The ClearFormBehavior, index, or name at the beginning of the range. Can accept: ClearFormBehavior, Long Integer or String.
   * @param {Mixed} to The ClearFormBehavior, index, or name at the end of the range. Can accept: ClearFormBehavior, Long Integer or String.
   * @returns {ClearFormBehavior}
   */
  itemByRange: function(from, to) {
    return new ClearFormBehavior();
  },
  
  /*
   * Returns the first ClearFormBehavior in the collection.
   * @returns {ClearFormBehavior}
   */
  firstItem: function() {
    return new ClearFormBehavior();
  },
  
  /*
   * Returns the last ClearFormBehavior in the collection.
   * @returns {ClearFormBehavior}
   */
  lastItem: function() {
    return new ClearFormBehavior();
  },
  
  /*
   * Returns the middle ClearFormBehavior in the collection.
   * @returns {ClearFormBehavior}
   */
  middleItem: function() {
    return new ClearFormBehavior();
  },
  
  /*
   * Returns the ClearFormBehavior with the index previous to the specified index.
 *
   * @param {ClearFormBehavior} obj The index of the ClearFormBehavior that follows the desired ClearFormBehavior.
   * @returns {ClearFormBehavior}
   */
  previousItem: function(obj) {
    return new ClearFormBehavior();
  },
  
  /*
   * Returns the ClearFormBehavior whose index follows the specified ClearFormBehavior in the collection.
 *
   * @param {ClearFormBehavior} obj The ClearFormBehavior whose index comes before the desired ClearFormBehavior.
   * @returns {ClearFormBehavior}
   */
  nextItem: function(obj) {
    return new ClearFormBehavior();
  },
  
  /*
   * Returns any ClearFormBehavior in the collection.
   * @returns {ClearFormBehavior}
   */
  anyItem: function() {
    return new ClearFormBehavior();
  },
  
  /*
   * Returns every ClearFormBehavior in the collection.
   * @returns {ClearFormBehavior}
   */
  everyItem: function() {
    return new ClearFormBehavior();
  },
  
  /*
   * Generates a string which, if executed, will return the ClearFormBehavior.
   * @returns {String}
   */
  toSource: function() {
    return new String();
  },
  
  /*
   * Returns the ClearFormBehavior with the specified index.
 *
   * @param {Number} index The index.
   * @returns {ClearFormBehavior}
   */
  []: function(index) {
    return new ClearFormBehavior();
  },
  
};
