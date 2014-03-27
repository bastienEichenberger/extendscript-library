/*
 * A collection of movie behavior objects.
 */
var MovieBehaviors = {
  /*
   * The number of objects in the collection.
   * @type {Number}
   */
  length: undefined,
  
  /*
   * Displays the number of elements in the MovieBehavior.
   * @returns {Number}
   */
  count: function() {
    return new Number();
  },
  
  /*
   * Creates a new MovieBehavior.
 *
   * @param {Object} [withProperties] Initial values for properties of the new MovieBehavior 
   * @returns {MovieBehavior}
   */
  add: function(withProperties) {
    return new MovieBehavior();
  },
  
  /*
   * Returns the MovieBehavior with the specified index or name.
 *
   * @param {Mixed} index The index or name. Can accept: Long Integer or String.
   * @returns {MovieBehavior}
   */
  item: function(index) {
    return new MovieBehavior();
  },
  
  /*
   * Returns the MovieBehavior with the specified name.
 *
   * @param {String} name The name.
   * @returns {MovieBehavior}
   */
  itemByName: function(name) {
    return new MovieBehavior();
  },
  
  /*
   * Returns the MovieBehavior with the specified ID.
 *
   * @param {Number} id The ID.
   * @returns {MovieBehavior}
   */
  itemByID: function(id) {
    return new MovieBehavior();
  },
  
  /*
   * Returns the MovieBehaviors within the specified range.
 *
   * @param {Mixed} from The MovieBehavior, index, or name at the beginning of the range. Can accept: MovieBehavior, Long Integer or String.
   * @param {Mixed} to The MovieBehavior, index, or name at the end of the range. Can accept: MovieBehavior, Long Integer or String.
   * @returns {MovieBehavior}
   */
  itemByRange: function(from, to) {
    return new MovieBehavior();
  },
  
  /*
   * Returns the first MovieBehavior in the collection.
   * @returns {MovieBehavior}
   */
  firstItem: function() {
    return new MovieBehavior();
  },
  
  /*
   * Returns the last MovieBehavior in the collection.
   * @returns {MovieBehavior}
   */
  lastItem: function() {
    return new MovieBehavior();
  },
  
  /*
   * Returns the middle MovieBehavior in the collection.
   * @returns {MovieBehavior}
   */
  middleItem: function() {
    return new MovieBehavior();
  },
  
  /*
   * Returns the MovieBehavior with the index previous to the specified index.
 *
   * @param {MovieBehavior} obj The index of the MovieBehavior that follows the desired MovieBehavior.
   * @returns {MovieBehavior}
   */
  previousItem: function(obj) {
    return new MovieBehavior();
  },
  
  /*
   * Returns the MovieBehavior whose index follows the specified MovieBehavior in the collection.
 *
   * @param {MovieBehavior} obj The MovieBehavior whose index comes before the desired MovieBehavior.
   * @returns {MovieBehavior}
   */
  nextItem: function(obj) {
    return new MovieBehavior();
  },
  
  /*
   * Returns any MovieBehavior in the collection.
   * @returns {MovieBehavior}
   */
  anyItem: function() {
    return new MovieBehavior();
  },
  
  /*
   * Returns every MovieBehavior in the collection.
   * @returns {MovieBehavior}
   */
  everyItem: function() {
    return new MovieBehavior();
  },
  
  /*
   * Generates a string which, if executed, will return the MovieBehavior.
   * @returns {String}
   */
  toSource: function() {
    return new String();
  },
  
  /*
   * Returns the MovieBehavior with the specified index.
 *
   * @param {Number} index The index.
   * @returns {MovieBehavior}
   */
  []: function(index) {
    return new MovieBehavior();
  },
  
};
