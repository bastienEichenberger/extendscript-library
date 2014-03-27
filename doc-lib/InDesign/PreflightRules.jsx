/*
 * A collection of preflight rules.
 */
var PreflightRules = {
  /*
   * The number of objects in the collection.
   * @type {Number}
   */
  length: undefined,
  
  /*
   * Displays the number of elements in the PreflightRule.
   * @returns {Number}
   */
  count: function() {
    return new Number();
  },
  
  /*
   * Returns the PreflightRule with the specified index or name.
 *
   * @param {Mixed} index The index or name. Can accept: Long Integer or String.
   * @returns {PreflightRule}
   */
  item: function(index) {
    return new PreflightRule();
  },
  
  /*
   * Returns the PreflightRule with the specified name.
 *
   * @param {String} name The name.
   * @returns {PreflightRule}
   */
  itemByName: function(name) {
    return new PreflightRule();
  },
  
  /*
   * Returns the PreflightRule with the specified ID.
 *
   * @param {Number} id The ID.
   * @returns {PreflightRule}
   */
  itemByID: function(id) {
    return new PreflightRule();
  },
  
  /*
   * Returns the PreflightRules within the specified range.
 *
   * @param {Mixed} from The PreflightRule, index, or name at the beginning of the range. Can accept: PreflightRule, Long Integer or String.
   * @param {Mixed} to The PreflightRule, index, or name at the end of the range. Can accept: PreflightRule, Long Integer or String.
   * @returns {PreflightRule}
   */
  itemByRange: function(from, to) {
    return new PreflightRule();
  },
  
  /*
   * Returns the first PreflightRule in the collection.
   * @returns {PreflightRule}
   */
  firstItem: function() {
    return new PreflightRule();
  },
  
  /*
   * Returns the last PreflightRule in the collection.
   * @returns {PreflightRule}
   */
  lastItem: function() {
    return new PreflightRule();
  },
  
  /*
   * Returns the middle PreflightRule in the collection.
   * @returns {PreflightRule}
   */
  middleItem: function() {
    return new PreflightRule();
  },
  
  /*
   * Returns the PreflightRule with the index previous to the specified index.
 *
   * @param {PreflightRule} obj The index of the PreflightRule that follows the desired PreflightRule.
   * @returns {PreflightRule}
   */
  previousItem: function(obj) {
    return new PreflightRule();
  },
  
  /*
   * Returns the PreflightRule whose index follows the specified PreflightRule in the collection.
 *
   * @param {PreflightRule} obj The PreflightRule whose index comes before the desired PreflightRule.
   * @returns {PreflightRule}
   */
  nextItem: function(obj) {
    return new PreflightRule();
  },
  
  /*
   * Returns any PreflightRule in the collection.
   * @returns {PreflightRule}
   */
  anyItem: function() {
    return new PreflightRule();
  },
  
  /*
   * Returns every PreflightRule in the collection.
   * @returns {PreflightRule}
   */
  everyItem: function() {
    return new PreflightRule();
  },
  
  /*
   * Generates a string which, if executed, will return the PreflightRule.
   * @returns {String}
   */
  toSource: function() {
    return new String();
  },
  
  /*
   * Returns the PreflightRule with the specified index.
 *
   * @param {Number} index The index.
   * @returns {PreflightRule}
   */
  []: function(index) {
    return new PreflightRule();
  },
  
};
