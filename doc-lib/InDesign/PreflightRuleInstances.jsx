/*
 * A collection of preflight rule instances.
 */
var PreflightRuleInstances = {
  /*
   * The number of objects in the collection.
   * @type {Number}
   */
  length: undefined,
  
  /*
   * Adds a new preflight rule to the profile.
 *
   * @param {String} id The ID of the rule to be added
   * @param {Object} [withProperties] Initial values for properties of the new PreflightRuleInstance 
   * @returns {Mixed}
   */
  add: function(id, withProperties) {
    return new Mixed();
  },
  
  /*
   * Displays the number of elements in the PreflightRuleInstance.
   * @returns {Number}
   */
  count: function() {
    return new Number();
  },
  
  /*
   * Returns the PreflightRuleInstance with the specified index or name.
 *
   * @param {Mixed} index The index or name. Can accept: Long Integer or String.
   * @returns {PreflightRuleInstance}
   */
  item: function(index) {
    return new PreflightRuleInstance();
  },
  
  /*
   * Returns the PreflightRuleInstance with the specified name.
 *
   * @param {String} name The name.
   * @returns {PreflightRuleInstance}
   */
  itemByName: function(name) {
    return new PreflightRuleInstance();
  },
  
  /*
   * Returns the PreflightRuleInstance with the specified ID.
 *
   * @param {Number} id The ID.
   * @returns {PreflightRuleInstance}
   */
  itemByID: function(id) {
    return new PreflightRuleInstance();
  },
  
  /*
   * Returns the PreflightRuleInstances within the specified range.
 *
   * @param {Mixed} from The PreflightRuleInstance, index, or name at the beginning of the range. Can accept: PreflightRuleInstance, Long Integer or String.
   * @param {Mixed} to The PreflightRuleInstance, index, or name at the end of the range. Can accept: PreflightRuleInstance, Long Integer or String.
   * @returns {PreflightRuleInstance}
   */
  itemByRange: function(from, to) {
    return new PreflightRuleInstance();
  },
  
  /*
   * Returns the first PreflightRuleInstance in the collection.
   * @returns {PreflightRuleInstance}
   */
  firstItem: function() {
    return new PreflightRuleInstance();
  },
  
  /*
   * Returns the last PreflightRuleInstance in the collection.
   * @returns {PreflightRuleInstance}
   */
  lastItem: function() {
    return new PreflightRuleInstance();
  },
  
  /*
   * Returns the middle PreflightRuleInstance in the collection.
   * @returns {PreflightRuleInstance}
   */
  middleItem: function() {
    return new PreflightRuleInstance();
  },
  
  /*
   * Returns the PreflightRuleInstance with the index previous to the specified index.
 *
   * @param {PreflightRuleInstance} obj The index of the PreflightRuleInstance that follows the desired PreflightRuleInstance.
   * @returns {PreflightRuleInstance}
   */
  previousItem: function(obj) {
    return new PreflightRuleInstance();
  },
  
  /*
   * Returns the PreflightRuleInstance whose index follows the specified PreflightRuleInstance in the collection.
 *
   * @param {PreflightRuleInstance} obj The PreflightRuleInstance whose index comes before the desired PreflightRuleInstance.
   * @returns {PreflightRuleInstance}
   */
  nextItem: function(obj) {
    return new PreflightRuleInstance();
  },
  
  /*
   * Returns any PreflightRuleInstance in the collection.
   * @returns {PreflightRuleInstance}
   */
  anyItem: function() {
    return new PreflightRuleInstance();
  },
  
  /*
   * Returns every PreflightRuleInstance in the collection.
   * @returns {PreflightRuleInstance}
   */
  everyItem: function() {
    return new PreflightRuleInstance();
  },
  
  /*
   * Generates a string which, if executed, will return the PreflightRuleInstance.
   * @returns {String}
   */
  toSource: function() {
    return new String();
  },
  
  /*
   * Returns the PreflightRuleInstance with the specified index.
 *
   * @param {Number} index The index.
   * @returns {PreflightRuleInstance}
   */
  []: function(index) {
    return new PreflightRuleInstance();
  },
  
};
