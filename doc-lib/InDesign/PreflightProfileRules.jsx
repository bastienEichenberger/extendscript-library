/*
 * A collection of preflight profile rules.
 */
var PreflightProfileRules = {
  /*
   * The number of objects in the collection.
   * @type {Number}
   */
  length: undefined,
  
  /*
   * Adds a new preflight rule to the profile.
 *
   * @param {String} id The ID of the rule to be added
   * @param {Object} [withProperties] Initial values for properties of the new PreflightProfileRule 
   * @returns {Mixed}
   */
  add: function(id, withProperties) {
    return new Mixed();
  },
  
  /*
   * Displays the number of elements in the PreflightProfileRule.
   * @returns {Number}
   */
  count: function() {
    return new Number();
  },
  
  /*
   * Returns the PreflightProfileRule with the specified index or name.
 *
   * @param {Mixed} index The index or name. Can accept: Long Integer or String.
   * @returns {PreflightProfileRule}
   */
  item: function(index) {
    return new PreflightProfileRule();
  },
  
  /*
   * Returns the PreflightProfileRule with the specified name.
 *
   * @param {String} name The name.
   * @returns {PreflightProfileRule}
   */
  itemByName: function(name) {
    return new PreflightProfileRule();
  },
  
  /*
   * Returns the PreflightProfileRule with the specified ID.
 *
   * @param {Number} id The ID.
   * @returns {PreflightProfileRule}
   */
  itemByID: function(id) {
    return new PreflightProfileRule();
  },
  
  /*
   * Returns the PreflightProfileRules within the specified range.
 *
   * @param {Mixed} from The PreflightProfileRule, index, or name at the beginning of the range. Can accept: PreflightProfileRule, Long Integer or String.
   * @param {Mixed} to The PreflightProfileRule, index, or name at the end of the range. Can accept: PreflightProfileRule, Long Integer or String.
   * @returns {PreflightProfileRule}
   */
  itemByRange: function(from, to) {
    return new PreflightProfileRule();
  },
  
  /*
   * Returns the first PreflightProfileRule in the collection.
   * @returns {PreflightProfileRule}
   */
  firstItem: function() {
    return new PreflightProfileRule();
  },
  
  /*
   * Returns the last PreflightProfileRule in the collection.
   * @returns {PreflightProfileRule}
   */
  lastItem: function() {
    return new PreflightProfileRule();
  },
  
  /*
   * Returns the middle PreflightProfileRule in the collection.
   * @returns {PreflightProfileRule}
   */
  middleItem: function() {
    return new PreflightProfileRule();
  },
  
  /*
   * Returns the PreflightProfileRule with the index previous to the specified index.
 *
   * @param {PreflightProfileRule} obj The index of the PreflightProfileRule that follows the desired PreflightProfileRule.
   * @returns {PreflightProfileRule}
   */
  previousItem: function(obj) {
    return new PreflightProfileRule();
  },
  
  /*
   * Returns the PreflightProfileRule whose index follows the specified PreflightProfileRule in the collection.
 *
   * @param {PreflightProfileRule} obj The PreflightProfileRule whose index comes before the desired PreflightProfileRule.
   * @returns {PreflightProfileRule}
   */
  nextItem: function(obj) {
    return new PreflightProfileRule();
  },
  
  /*
   * Returns any PreflightProfileRule in the collection.
   * @returns {PreflightProfileRule}
   */
  anyItem: function() {
    return new PreflightProfileRule();
  },
  
  /*
   * Returns every PreflightProfileRule in the collection.
   * @returns {PreflightProfileRule}
   */
  everyItem: function() {
    return new PreflightProfileRule();
  },
  
  /*
   * Generates a string which, if executed, will return the PreflightProfileRule.
   * @returns {String}
   */
  toSource: function() {
    return new String();
  },
  
  /*
   * Returns the PreflightProfileRule with the specified index.
 *
   * @param {Number} index The index.
   * @returns {PreflightProfileRule}
   */
  []: function(index) {
    return new PreflightProfileRule();
  },
  
};
