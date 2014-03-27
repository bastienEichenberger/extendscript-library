/*
 * A collection of conditions for conditional text.
 */
var Conditions = {
  /*
   * The number of objects in the collection.
   * @type {Number}
   */
  length: undefined,
  
  /*
   * Creates a new Condition.
 *
   * @param {Object} [withProperties] Initial values for properties of the new Condition 
   * @returns {Condition}
   */
  add: function(withProperties) {
    return new Condition();
  },
  
  /*
   * Displays the number of elements in the Condition.
   * @returns {Number}
   */
  count: function() {
    return new Number();
  },
  
  /*
   * Returns the Condition with the specified index or name.
 *
   * @param {Mixed} index The index or name. Can accept: Long Integer or String.
   * @returns {Condition}
   */
  item: function(index) {
    return new Condition();
  },
  
  /*
   * Returns the Condition with the specified name.
 *
   * @param {String} name The name.
   * @returns {Condition}
   */
  itemByName: function(name) {
    return new Condition();
  },
  
  /*
   * Returns the Condition with the specified ID.
 *
   * @param {Number} id The ID.
   * @returns {Condition}
   */
  itemByID: function(id) {
    return new Condition();
  },
  
  /*
   * Returns the Conditions within the specified range.
 *
   * @param {Mixed} from The Condition, index, or name at the beginning of the range. Can accept: Condition, Long Integer or String.
   * @param {Mixed} to The Condition, index, or name at the end of the range. Can accept: Condition, Long Integer or String.
   * @returns {Condition}
   */
  itemByRange: function(from, to) {
    return new Condition();
  },
  
  /*
   * Returns the first Condition in the collection.
   * @returns {Condition}
   */
  firstItem: function() {
    return new Condition();
  },
  
  /*
   * Returns the last Condition in the collection.
   * @returns {Condition}
   */
  lastItem: function() {
    return new Condition();
  },
  
  /*
   * Returns the middle Condition in the collection.
   * @returns {Condition}
   */
  middleItem: function() {
    return new Condition();
  },
  
  /*
   * Returns the Condition with the index previous to the specified index.
 *
   * @param {Condition} obj The index of the Condition that follows the desired Condition.
   * @returns {Condition}
   */
  previousItem: function(obj) {
    return new Condition();
  },
  
  /*
   * Returns the Condition whose index follows the specified Condition in the collection.
 *
   * @param {Condition} obj The Condition whose index comes before the desired Condition.
   * @returns {Condition}
   */
  nextItem: function(obj) {
    return new Condition();
  },
  
  /*
   * Returns any Condition in the collection.
   * @returns {Condition}
   */
  anyItem: function() {
    return new Condition();
  },
  
  /*
   * Returns every Condition in the collection.
   * @returns {Condition}
   */
  everyItem: function() {
    return new Condition();
  },
  
  /*
   * Generates a string which, if executed, will return the Condition.
   * @returns {String}
   */
  toSource: function() {
    return new String();
  },
  
  /*
   * Returns the Condition with the specified index.
 *
   * @param {Number} index The index.
   * @returns {Condition}
   */
  []: function(index) {
    return new Condition();
  },
  
};
