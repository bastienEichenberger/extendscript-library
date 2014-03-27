/*
 * A collection of animation behaviors.
 */
var AnimationBehaviors = {
  /*
   * The number of objects in the collection.
   * @type {Number}
   */
  length: undefined,
  
  /*
   * Displays the number of elements in the AnimationBehavior.
   * @returns {Number}
   */
  count: function() {
    return new Number();
  },
  
  /*
   * Creates a new AnimationBehavior.
 *
   * @param {Object} [withProperties] Initial values for properties of the new AnimationBehavior 
   * @returns {AnimationBehavior}
   */
  add: function(withProperties) {
    return new AnimationBehavior();
  },
  
  /*
   * Returns the AnimationBehavior with the specified index or name.
 *
   * @param {Mixed} index The index or name. Can accept: Long Integer or String.
   * @returns {AnimationBehavior}
   */
  item: function(index) {
    return new AnimationBehavior();
  },
  
  /*
   * Returns the AnimationBehavior with the specified name.
 *
   * @param {String} name The name.
   * @returns {AnimationBehavior}
   */
  itemByName: function(name) {
    return new AnimationBehavior();
  },
  
  /*
   * Returns the AnimationBehavior with the specified ID.
 *
   * @param {Number} id The ID.
   * @returns {AnimationBehavior}
   */
  itemByID: function(id) {
    return new AnimationBehavior();
  },
  
  /*
   * Returns the AnimationBehaviors within the specified range.
 *
   * @param {Mixed} from The AnimationBehavior, index, or name at the beginning of the range. Can accept: AnimationBehavior, Long Integer or String.
   * @param {Mixed} to The AnimationBehavior, index, or name at the end of the range. Can accept: AnimationBehavior, Long Integer or String.
   * @returns {AnimationBehavior}
   */
  itemByRange: function(from, to) {
    return new AnimationBehavior();
  },
  
  /*
   * Returns the first AnimationBehavior in the collection.
   * @returns {AnimationBehavior}
   */
  firstItem: function() {
    return new AnimationBehavior();
  },
  
  /*
   * Returns the last AnimationBehavior in the collection.
   * @returns {AnimationBehavior}
   */
  lastItem: function() {
    return new AnimationBehavior();
  },
  
  /*
   * Returns the middle AnimationBehavior in the collection.
   * @returns {AnimationBehavior}
   */
  middleItem: function() {
    return new AnimationBehavior();
  },
  
  /*
   * Returns the AnimationBehavior with the index previous to the specified index.
 *
   * @param {AnimationBehavior} obj The index of the AnimationBehavior that follows the desired AnimationBehavior.
   * @returns {AnimationBehavior}
   */
  previousItem: function(obj) {
    return new AnimationBehavior();
  },
  
  /*
   * Returns the AnimationBehavior whose index follows the specified AnimationBehavior in the collection.
 *
   * @param {AnimationBehavior} obj The AnimationBehavior whose index comes before the desired AnimationBehavior.
   * @returns {AnimationBehavior}
   */
  nextItem: function(obj) {
    return new AnimationBehavior();
  },
  
  /*
   * Returns any AnimationBehavior in the collection.
   * @returns {AnimationBehavior}
   */
  anyItem: function() {
    return new AnimationBehavior();
  },
  
  /*
   * Returns every AnimationBehavior in the collection.
   * @returns {AnimationBehavior}
   */
  everyItem: function() {
    return new AnimationBehavior();
  },
  
  /*
   * Generates a string which, if executed, will return the AnimationBehavior.
   * @returns {String}
   */
  toSource: function() {
    return new String();
  },
  
  /*
   * Returns the AnimationBehavior with the specified index.
 *
   * @param {Number} index The index.
   * @returns {AnimationBehavior}
   */
  []: function(index) {
    return new AnimationBehavior();
  },
  
};
