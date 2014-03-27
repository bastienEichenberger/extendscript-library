/*
 * A collection of navigation points.
 */
var NavigationPoints = {
  /*
   * The number of objects in the collection.
   * @type {Number}
   */
  length: undefined,
  
  /*
   * Creates a new NavigationPoint.
 *
   * @param {Object} [withProperties] Initial values for properties of the new NavigationPoint 
   * @returns {NavigationPoint}
   */
  add: function(withProperties) {
    return new NavigationPoint();
  },
  
  /*
   * Displays the number of elements in the NavigationPoint.
   * @returns {Number}
   */
  count: function() {
    return new Number();
  },
  
  /*
   * Returns the NavigationPoint with the specified index or name.
 *
   * @param {Mixed} index The index or name. Can accept: Long Integer or String.
   * @returns {NavigationPoint}
   */
  item: function(index) {
    return new NavigationPoint();
  },
  
  /*
   * Returns the NavigationPoint with the specified name.
 *
   * @param {String} name The name.
   * @returns {NavigationPoint}
   */
  itemByName: function(name) {
    return new NavigationPoint();
  },
  
  /*
   * Returns the NavigationPoint with the specified ID.
 *
   * @param {Number} id The ID.
   * @returns {NavigationPoint}
   */
  itemByID: function(id) {
    return new NavigationPoint();
  },
  
  /*
   * Returns the NavigationPoints within the specified range.
 *
   * @param {Mixed} from The NavigationPoint, index, or name at the beginning of the range. Can accept: NavigationPoint, Long Integer or String.
   * @param {Mixed} to The NavigationPoint, index, or name at the end of the range. Can accept: NavigationPoint, Long Integer or String.
   * @returns {NavigationPoint}
   */
  itemByRange: function(from, to) {
    return new NavigationPoint();
  },
  
  /*
   * Returns the first NavigationPoint in the collection.
   * @returns {NavigationPoint}
   */
  firstItem: function() {
    return new NavigationPoint();
  },
  
  /*
   * Returns the last NavigationPoint in the collection.
   * @returns {NavigationPoint}
   */
  lastItem: function() {
    return new NavigationPoint();
  },
  
  /*
   * Returns the middle NavigationPoint in the collection.
   * @returns {NavigationPoint}
   */
  middleItem: function() {
    return new NavigationPoint();
  },
  
  /*
   * Returns the NavigationPoint with the index previous to the specified index.
 *
   * @param {NavigationPoint} obj The index of the NavigationPoint that follows the desired NavigationPoint.
   * @returns {NavigationPoint}
   */
  previousItem: function(obj) {
    return new NavigationPoint();
  },
  
  /*
   * Returns the NavigationPoint whose index follows the specified NavigationPoint in the collection.
 *
   * @param {NavigationPoint} obj The NavigationPoint whose index comes before the desired NavigationPoint.
   * @returns {NavigationPoint}
   */
  nextItem: function(obj) {
    return new NavigationPoint();
  },
  
  /*
   * Returns any NavigationPoint in the collection.
   * @returns {NavigationPoint}
   */
  anyItem: function() {
    return new NavigationPoint();
  },
  
  /*
   * Returns every NavigationPoint in the collection.
   * @returns {NavigationPoint}
   */
  everyItem: function() {
    return new NavigationPoint();
  },
  
  /*
   * Generates a string which, if executed, will return the NavigationPoint.
   * @returns {String}
   */
  toSource: function() {
    return new String();
  },
  
  /*
   * Returns the NavigationPoint with the specified index.
 *
   * @param {Number} index The index.
   * @returns {NavigationPoint}
   */
  []: function(index) {
    return new NavigationPoint();
  },
  
};
