/*
 * A collection of condition sets for conditional text.
 */
var ConditionSets = {
  /*
   * The number of objects in the collection.
   * @type {Number}
   */
  length: undefined,
  
  /*
   * Creates a new ConditionSet.
 *
   * @param {Object} [withProperties] Initial values for properties of the new ConditionSet 
   * @returns {ConditionSet}
   */
  add: function(withProperties) {
    return new ConditionSet();
  },
  
  /*
   * Displays the number of elements in the ConditionSet.
   * @returns {Number}
   */
  count: function() {
    return new Number();
  },
  
  /*
   * Returns the ConditionSet with the specified index or name.
 *
   * @param {Mixed} index The index or name. Can accept: Long Integer or String.
   * @returns {ConditionSet}
   */
  item: function(index) {
    return new ConditionSet();
  },
  
  /*
   * Returns the ConditionSet with the specified name.
 *
   * @param {String} name The name.
   * @returns {ConditionSet}
   */
  itemByName: function(name) {
    return new ConditionSet();
  },
  
  /*
   * Returns the ConditionSet with the specified ID.
 *
   * @param {Number} id The ID.
   * @returns {ConditionSet}
   */
  itemByID: function(id) {
    return new ConditionSet();
  },
  
  /*
   * Returns the ConditionSets within the specified range.
 *
   * @param {Mixed} from The ConditionSet, index, or name at the beginning of the range. Can accept: ConditionSet, Long Integer or String.
   * @param {Mixed} to The ConditionSet, index, or name at the end of the range. Can accept: ConditionSet, Long Integer or String.
   * @returns {ConditionSet}
   */
  itemByRange: function(from, to) {
    return new ConditionSet();
  },
  
  /*
   * Returns the first ConditionSet in the collection.
   * @returns {ConditionSet}
   */
  firstItem: function() {
    return new ConditionSet();
  },
  
  /*
   * Returns the last ConditionSet in the collection.
   * @returns {ConditionSet}
   */
  lastItem: function() {
    return new ConditionSet();
  },
  
  /*
   * Returns the middle ConditionSet in the collection.
   * @returns {ConditionSet}
   */
  middleItem: function() {
    return new ConditionSet();
  },
  
  /*
   * Returns the ConditionSet with the index previous to the specified index.
 *
   * @param {ConditionSet} obj The index of the ConditionSet that follows the desired ConditionSet.
   * @returns {ConditionSet}
   */
  previousItem: function(obj) {
    return new ConditionSet();
  },
  
  /*
   * Returns the ConditionSet whose index follows the specified ConditionSet in the collection.
 *
   * @param {ConditionSet} obj The ConditionSet whose index comes before the desired ConditionSet.
   * @returns {ConditionSet}
   */
  nextItem: function(obj) {
    return new ConditionSet();
  },
  
  /*
   * Returns any ConditionSet in the collection.
   * @returns {ConditionSet}
   */
  anyItem: function() {
    return new ConditionSet();
  },
  
  /*
   * Returns every ConditionSet in the collection.
   * @returns {ConditionSet}
   */
  everyItem: function() {
    return new ConditionSet();
  },
  
  /*
   * Generates a string which, if executed, will return the ConditionSet.
   * @returns {String}
   */
  toSource: function() {
    return new String();
  },
  
  /*
   * Returns the ConditionSet with the specified index.
 *
   * @param {Number} index The index.
   * @returns {ConditionSet}
   */
  []: function(index) {
    return new ConditionSet();
  },
  
};
