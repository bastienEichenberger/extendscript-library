/*
 * A collection of view zoom behavior objects.
 */
var ViewZoomBehaviors = {
  /*
   * The number of objects in the collection.
   * @type {Number}
   */
  length: undefined,
  
  /*
   * Displays the number of elements in the ViewZoomBehavior.
   * @returns {Number}
   */
  count: function() {
    return new Number();
  },
  
  /*
   * Creates a new ViewZoomBehavior.
 *
   * @param {Object} [withProperties] Initial values for properties of the new ViewZoomBehavior 
   * @returns {ViewZoomBehavior}
   */
  add: function(withProperties) {
    return new ViewZoomBehavior();
  },
  
  /*
   * Returns the ViewZoomBehavior with the specified index or name.
 *
   * @param {Mixed} index The index or name. Can accept: Long Integer or String.
   * @returns {ViewZoomBehavior}
   */
  item: function(index) {
    return new ViewZoomBehavior();
  },
  
  /*
   * Returns the ViewZoomBehavior with the specified name.
 *
   * @param {String} name The name.
   * @returns {ViewZoomBehavior}
   */
  itemByName: function(name) {
    return new ViewZoomBehavior();
  },
  
  /*
   * Returns the ViewZoomBehavior with the specified ID.
 *
   * @param {Number} id The ID.
   * @returns {ViewZoomBehavior}
   */
  itemByID: function(id) {
    return new ViewZoomBehavior();
  },
  
  /*
   * Returns the ViewZoomBehaviors within the specified range.
 *
   * @param {Mixed} from The ViewZoomBehavior, index, or name at the beginning of the range. Can accept: ViewZoomBehavior, Long Integer or String.
   * @param {Mixed} to The ViewZoomBehavior, index, or name at the end of the range. Can accept: ViewZoomBehavior, Long Integer or String.
   * @returns {ViewZoomBehavior}
   */
  itemByRange: function(from, to) {
    return new ViewZoomBehavior();
  },
  
  /*
   * Returns the first ViewZoomBehavior in the collection.
   * @returns {ViewZoomBehavior}
   */
  firstItem: function() {
    return new ViewZoomBehavior();
  },
  
  /*
   * Returns the last ViewZoomBehavior in the collection.
   * @returns {ViewZoomBehavior}
   */
  lastItem: function() {
    return new ViewZoomBehavior();
  },
  
  /*
   * Returns the middle ViewZoomBehavior in the collection.
   * @returns {ViewZoomBehavior}
   */
  middleItem: function() {
    return new ViewZoomBehavior();
  },
  
  /*
   * Returns the ViewZoomBehavior with the index previous to the specified index.
 *
   * @param {ViewZoomBehavior} obj The index of the ViewZoomBehavior that follows the desired ViewZoomBehavior.
   * @returns {ViewZoomBehavior}
   */
  previousItem: function(obj) {
    return new ViewZoomBehavior();
  },
  
  /*
   * Returns the ViewZoomBehavior whose index follows the specified ViewZoomBehavior in the collection.
 *
   * @param {ViewZoomBehavior} obj The ViewZoomBehavior whose index comes before the desired ViewZoomBehavior.
   * @returns {ViewZoomBehavior}
   */
  nextItem: function(obj) {
    return new ViewZoomBehavior();
  },
  
  /*
   * Returns any ViewZoomBehavior in the collection.
   * @returns {ViewZoomBehavior}
   */
  anyItem: function() {
    return new ViewZoomBehavior();
  },
  
  /*
   * Returns every ViewZoomBehavior in the collection.
   * @returns {ViewZoomBehavior}
   */
  everyItem: function() {
    return new ViewZoomBehavior();
  },
  
  /*
   * Generates a string which, if executed, will return the ViewZoomBehavior.
   * @returns {String}
   */
  toSource: function() {
    return new String();
  },
  
  /*
   * Returns the ViewZoomBehavior with the specified index.
 *
   * @param {Number} index The index.
   * @returns {ViewZoomBehavior}
   */
  []: function(index) {
    return new ViewZoomBehavior();
  },
  
};
