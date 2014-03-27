/*
 * A collection of open file behavior objects.
 */
var OpenFileBehaviors = {
  /*
   * The number of objects in the collection.
   * @type {Number}
   */
  length: undefined,
  
  /*
   * Displays the number of elements in the OpenFileBehavior.
   * @returns {Number}
   */
  count: function() {
    return new Number();
  },
  
  /*
   * Creates a new OpenFileBehavior.
 *
   * @param {Object} [withProperties] Initial values for properties of the new OpenFileBehavior 
   * @returns {OpenFileBehavior}
   */
  add: function(withProperties) {
    return new OpenFileBehavior();
  },
  
  /*
   * Returns the OpenFileBehavior with the specified index or name.
 *
   * @param {Mixed} index The index or name. Can accept: Long Integer or String.
   * @returns {OpenFileBehavior}
   */
  item: function(index) {
    return new OpenFileBehavior();
  },
  
  /*
   * Returns the OpenFileBehavior with the specified name.
 *
   * @param {String} name The name.
   * @returns {OpenFileBehavior}
   */
  itemByName: function(name) {
    return new OpenFileBehavior();
  },
  
  /*
   * Returns the OpenFileBehavior with the specified ID.
 *
   * @param {Number} id The ID.
   * @returns {OpenFileBehavior}
   */
  itemByID: function(id) {
    return new OpenFileBehavior();
  },
  
  /*
   * Returns the OpenFileBehaviors within the specified range.
 *
   * @param {Mixed} from The OpenFileBehavior, index, or name at the beginning of the range. Can accept: OpenFileBehavior, Long Integer or String.
   * @param {Mixed} to The OpenFileBehavior, index, or name at the end of the range. Can accept: OpenFileBehavior, Long Integer or String.
   * @returns {OpenFileBehavior}
   */
  itemByRange: function(from, to) {
    return new OpenFileBehavior();
  },
  
  /*
   * Returns the first OpenFileBehavior in the collection.
   * @returns {OpenFileBehavior}
   */
  firstItem: function() {
    return new OpenFileBehavior();
  },
  
  /*
   * Returns the last OpenFileBehavior in the collection.
   * @returns {OpenFileBehavior}
   */
  lastItem: function() {
    return new OpenFileBehavior();
  },
  
  /*
   * Returns the middle OpenFileBehavior in the collection.
   * @returns {OpenFileBehavior}
   */
  middleItem: function() {
    return new OpenFileBehavior();
  },
  
  /*
   * Returns the OpenFileBehavior with the index previous to the specified index.
 *
   * @param {OpenFileBehavior} obj The index of the OpenFileBehavior that follows the desired OpenFileBehavior.
   * @returns {OpenFileBehavior}
   */
  previousItem: function(obj) {
    return new OpenFileBehavior();
  },
  
  /*
   * Returns the OpenFileBehavior whose index follows the specified OpenFileBehavior in the collection.
 *
   * @param {OpenFileBehavior} obj The OpenFileBehavior whose index comes before the desired OpenFileBehavior.
   * @returns {OpenFileBehavior}
   */
  nextItem: function(obj) {
    return new OpenFileBehavior();
  },
  
  /*
   * Returns any OpenFileBehavior in the collection.
   * @returns {OpenFileBehavior}
   */
  anyItem: function() {
    return new OpenFileBehavior();
  },
  
  /*
   * Returns every OpenFileBehavior in the collection.
   * @returns {OpenFileBehavior}
   */
  everyItem: function() {
    return new OpenFileBehavior();
  },
  
  /*
   * Generates a string which, if executed, will return the OpenFileBehavior.
   * @returns {String}
   */
  toSource: function() {
    return new String();
  },
  
  /*
   * Returns the OpenFileBehavior with the specified index.
 *
   * @param {Number} index The index.
   * @returns {OpenFileBehavior}
   */
  []: function(index) {
    return new OpenFileBehavior();
  },
  
};
