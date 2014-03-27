/*
 * A collection of goto anchor behavior objects.
 */
var GotoAnchorBehaviors = {
  /*
   * The number of objects in the collection.
   * @type {Number}
   */
  length: undefined,
  
  /*
   * Displays the number of elements in the GotoAnchorBehavior.
   * @returns {Number}
   */
  count: function() {
    return new Number();
  },
  
  /*
   * Creates a new GotoAnchorBehavior.
 *
   * @param {Object} [withProperties] Initial values for properties of the new GotoAnchorBehavior 
   * @returns {GotoAnchorBehavior}
   */
  add: function(withProperties) {
    return new GotoAnchorBehavior();
  },
  
  /*
   * Returns the GotoAnchorBehavior with the specified index or name.
 *
   * @param {Mixed} index The index or name. Can accept: Long Integer or String.
   * @returns {GotoAnchorBehavior}
   */
  item: function(index) {
    return new GotoAnchorBehavior();
  },
  
  /*
   * Returns the GotoAnchorBehavior with the specified name.
 *
   * @param {String} name The name.
   * @returns {GotoAnchorBehavior}
   */
  itemByName: function(name) {
    return new GotoAnchorBehavior();
  },
  
  /*
   * Returns the GotoAnchorBehavior with the specified ID.
 *
   * @param {Number} id The ID.
   * @returns {GotoAnchorBehavior}
   */
  itemByID: function(id) {
    return new GotoAnchorBehavior();
  },
  
  /*
   * Returns the GotoAnchorBehaviors within the specified range.
 *
   * @param {Mixed} from The GotoAnchorBehavior, index, or name at the beginning of the range. Can accept: GotoAnchorBehavior, Long Integer or String.
   * @param {Mixed} to The GotoAnchorBehavior, index, or name at the end of the range. Can accept: GotoAnchorBehavior, Long Integer or String.
   * @returns {GotoAnchorBehavior}
   */
  itemByRange: function(from, to) {
    return new GotoAnchorBehavior();
  },
  
  /*
   * Returns the first GotoAnchorBehavior in the collection.
   * @returns {GotoAnchorBehavior}
   */
  firstItem: function() {
    return new GotoAnchorBehavior();
  },
  
  /*
   * Returns the last GotoAnchorBehavior in the collection.
   * @returns {GotoAnchorBehavior}
   */
  lastItem: function() {
    return new GotoAnchorBehavior();
  },
  
  /*
   * Returns the middle GotoAnchorBehavior in the collection.
   * @returns {GotoAnchorBehavior}
   */
  middleItem: function() {
    return new GotoAnchorBehavior();
  },
  
  /*
   * Returns the GotoAnchorBehavior with the index previous to the specified index.
 *
   * @param {GotoAnchorBehavior} obj The index of the GotoAnchorBehavior that follows the desired GotoAnchorBehavior.
   * @returns {GotoAnchorBehavior}
   */
  previousItem: function(obj) {
    return new GotoAnchorBehavior();
  },
  
  /*
   * Returns the GotoAnchorBehavior whose index follows the specified GotoAnchorBehavior in the collection.
 *
   * @param {GotoAnchorBehavior} obj The GotoAnchorBehavior whose index comes before the desired GotoAnchorBehavior.
   * @returns {GotoAnchorBehavior}
   */
  nextItem: function(obj) {
    return new GotoAnchorBehavior();
  },
  
  /*
   * Returns any GotoAnchorBehavior in the collection.
   * @returns {GotoAnchorBehavior}
   */
  anyItem: function() {
    return new GotoAnchorBehavior();
  },
  
  /*
   * Returns every GotoAnchorBehavior in the collection.
   * @returns {GotoAnchorBehavior}
   */
  everyItem: function() {
    return new GotoAnchorBehavior();
  },
  
  /*
   * Generates a string which, if executed, will return the GotoAnchorBehavior.
   * @returns {String}
   */
  toSource: function() {
    return new String();
  },
  
  /*
   * Returns the GotoAnchorBehavior with the specified index.
 *
   * @param {Number} index The index.
   * @returns {GotoAnchorBehavior}
   */
  []: function(index) {
    return new GotoAnchorBehavior();
  },
  
};
