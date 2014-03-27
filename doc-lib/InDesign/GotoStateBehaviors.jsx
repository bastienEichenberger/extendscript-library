/*
 * A collection of goto state behaviors.
 */
var GotoStateBehaviors = {
  /*
   * The number of objects in the collection.
   * @type {Number}
   */
  length: undefined,
  
  /*
   * Displays the number of elements in the GotoStateBehavior.
   * @returns {Number}
   */
  count: function() {
    return new Number();
  },
  
  /*
   * Creates a new GotoStateBehavior.
 *
   * @param {Object} [withProperties] Initial values for properties of the new GotoStateBehavior 
   * @returns {GotoStateBehavior}
   */
  add: function(withProperties) {
    return new GotoStateBehavior();
  },
  
  /*
   * Returns the GotoStateBehavior with the specified index or name.
 *
   * @param {Mixed} index The index or name. Can accept: Long Integer or String.
   * @returns {GotoStateBehavior}
   */
  item: function(index) {
    return new GotoStateBehavior();
  },
  
  /*
   * Returns the GotoStateBehavior with the specified name.
 *
   * @param {String} name The name.
   * @returns {GotoStateBehavior}
   */
  itemByName: function(name) {
    return new GotoStateBehavior();
  },
  
  /*
   * Returns the GotoStateBehavior with the specified ID.
 *
   * @param {Number} id The ID.
   * @returns {GotoStateBehavior}
   */
  itemByID: function(id) {
    return new GotoStateBehavior();
  },
  
  /*
   * Returns the GotoStateBehaviors within the specified range.
 *
   * @param {Mixed} from The GotoStateBehavior, index, or name at the beginning of the range. Can accept: GotoStateBehavior, Long Integer or String.
   * @param {Mixed} to The GotoStateBehavior, index, or name at the end of the range. Can accept: GotoStateBehavior, Long Integer or String.
   * @returns {GotoStateBehavior}
   */
  itemByRange: function(from, to) {
    return new GotoStateBehavior();
  },
  
  /*
   * Returns the first GotoStateBehavior in the collection.
   * @returns {GotoStateBehavior}
   */
  firstItem: function() {
    return new GotoStateBehavior();
  },
  
  /*
   * Returns the last GotoStateBehavior in the collection.
   * @returns {GotoStateBehavior}
   */
  lastItem: function() {
    return new GotoStateBehavior();
  },
  
  /*
   * Returns the middle GotoStateBehavior in the collection.
   * @returns {GotoStateBehavior}
   */
  middleItem: function() {
    return new GotoStateBehavior();
  },
  
  /*
   * Returns the GotoStateBehavior with the index previous to the specified index.
 *
   * @param {GotoStateBehavior} obj The index of the GotoStateBehavior that follows the desired GotoStateBehavior.
   * @returns {GotoStateBehavior}
   */
  previousItem: function(obj) {
    return new GotoStateBehavior();
  },
  
  /*
   * Returns the GotoStateBehavior whose index follows the specified GotoStateBehavior in the collection.
 *
   * @param {GotoStateBehavior} obj The GotoStateBehavior whose index comes before the desired GotoStateBehavior.
   * @returns {GotoStateBehavior}
   */
  nextItem: function(obj) {
    return new GotoStateBehavior();
  },
  
  /*
   * Returns any GotoStateBehavior in the collection.
   * @returns {GotoStateBehavior}
   */
  anyItem: function() {
    return new GotoStateBehavior();
  },
  
  /*
   * Returns every GotoStateBehavior in the collection.
   * @returns {GotoStateBehavior}
   */
  everyItem: function() {
    return new GotoStateBehavior();
  },
  
  /*
   * Generates a string which, if executed, will return the GotoStateBehavior.
   * @returns {String}
   */
  toSource: function() {
    return new String();
  },
  
  /*
   * Returns the GotoStateBehavior with the specified index.
 *
   * @param {Number} index The index.
   * @returns {GotoStateBehavior}
   */
  []: function(index) {
    return new GotoStateBehavior();
  },
  
};
