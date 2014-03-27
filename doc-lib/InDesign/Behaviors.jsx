/*
 * A collection of behavior objects.
 */
var Behaviors = {
  /*
   * The number of objects in the collection.
   * @type {Number}
   */
  length: undefined,
  
  /*
   * Displays the number of elements in the Behavior.
   * @returns {Number}
   */
  count: function() {
    return new Number();
  },
  
  /*
   * Returns the Behavior with the specified index or name.
 *
   * @param {Mixed} index The index or name. Can accept: Long Integer or String.
   * @returns {Behavior}
   */
  item: function(index) {
    return new Behavior();
  },
  
  /*
   * Returns the Behavior with the specified name.
 *
   * @param {String} name The name.
   * @returns {Behavior}
   */
  itemByName: function(name) {
    return new Behavior();
  },
  
  /*
   * Returns the Behavior with the specified ID.
 *
   * @param {Number} id The ID.
   * @returns {Behavior}
   */
  itemByID: function(id) {
    return new Behavior();
  },
  
  /*
   * Returns the Behaviors within the specified range.
 *
   * @param {Mixed} from The Behavior, index, or name at the beginning of the range. Can accept: Behavior, Long Integer or String.
   * @param {Mixed} to The Behavior, index, or name at the end of the range. Can accept: Behavior, Long Integer or String.
   * @returns {Behavior}
   */
  itemByRange: function(from, to) {
    return new Behavior();
  },
  
  /*
   * Returns the first Behavior in the collection.
   * @returns {Behavior}
   */
  firstItem: function() {
    return new Behavior();
  },
  
  /*
   * Returns the last Behavior in the collection.
   * @returns {Behavior}
   */
  lastItem: function() {
    return new Behavior();
  },
  
  /*
   * Returns the middle Behavior in the collection.
   * @returns {Behavior}
   */
  middleItem: function() {
    return new Behavior();
  },
  
  /*
   * Returns the Behavior with the index previous to the specified index.
 *
   * @param {Behavior} obj The index of the Behavior that follows the desired Behavior.
   * @returns {Behavior}
   */
  previousItem: function(obj) {
    return new Behavior();
  },
  
  /*
   * Returns the Behavior whose index follows the specified Behavior in the collection.
 *
   * @param {Behavior} obj The Behavior whose index comes before the desired Behavior.
   * @returns {Behavior}
   */
  nextItem: function(obj) {
    return new Behavior();
  },
  
  /*
   * Returns any Behavior in the collection.
   * @returns {Behavior}
   */
  anyItem: function() {
    return new Behavior();
  },
  
  /*
   * Returns every Behavior in the collection.
   * @returns {Behavior}
   */
  everyItem: function() {
    return new Behavior();
  },
  
  /*
   * Generates a string which, if executed, will return the Behavior.
   * @returns {String}
   */
  toSource: function() {
    return new String();
  },
  
  /*
   * Returns the Behavior with the specified index.
 *
   * @param {Number} index The index.
   * @returns {Behavior}
   */
  []: function(index) {
    return new Behavior();
  },
  
};
