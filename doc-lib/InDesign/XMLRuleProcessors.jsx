/*
 * A collection of XML rule processors.
 */
var XMLRuleProcessors = {
  /*
   * The number of objects in the collection.
   * @type {Number}
   */
  length: undefined,
  
  /*
   * Create a new XMLRuleProcessor
 *
   * @param {String} rulePaths The XPath condition paths of the rules in the rule set.
   * @param {Mixed} [prefixMappingTable] The namespace mapping table. Can accept: Array of Arrays of 2 Strings. 
   * @param {Object} [withProperties] Initial values for properties of the new XMLRuleProcessor 
   * @returns {XMLRuleProcessor}
   */
  add: function(rulePaths, prefixMappingTable, withProperties) {
    return new XMLRuleProcessor();
  },
  
  /*
   * Displays the number of elements in the XMLRuleProcessor.
   * @returns {Number}
   */
  count: function() {
    return new Number();
  },
  
  /*
   * Returns the XMLRuleProcessor with the specified index or name.
 *
   * @param {Mixed} index The index or name. Can accept: Long Integer or String.
   * @returns {XMLRuleProcessor}
   */
  item: function(index) {
    return new XMLRuleProcessor();
  },
  
  /*
   * Returns the XMLRuleProcessor with the specified name.
 *
   * @param {String} name The name.
   * @returns {XMLRuleProcessor}
   */
  itemByName: function(name) {
    return new XMLRuleProcessor();
  },
  
  /*
   * Returns the XMLRuleProcessor with the specified ID.
 *
   * @param {Number} id The ID.
   * @returns {XMLRuleProcessor}
   */
  itemByID: function(id) {
    return new XMLRuleProcessor();
  },
  
  /*
   * Returns the XMLRuleProcessors within the specified range.
 *
   * @param {Mixed} from The XMLRuleProcessor, index, or name at the beginning of the range. Can accept: XMLRuleProcessor, Long Integer or String.
   * @param {Mixed} to The XMLRuleProcessor, index, or name at the end of the range. Can accept: XMLRuleProcessor, Long Integer or String.
   * @returns {XMLRuleProcessor}
   */
  itemByRange: function(from, to) {
    return new XMLRuleProcessor();
  },
  
  /*
   * Returns the first XMLRuleProcessor in the collection.
   * @returns {XMLRuleProcessor}
   */
  firstItem: function() {
    return new XMLRuleProcessor();
  },
  
  /*
   * Returns the last XMLRuleProcessor in the collection.
   * @returns {XMLRuleProcessor}
   */
  lastItem: function() {
    return new XMLRuleProcessor();
  },
  
  /*
   * Returns the middle XMLRuleProcessor in the collection.
   * @returns {XMLRuleProcessor}
   */
  middleItem: function() {
    return new XMLRuleProcessor();
  },
  
  /*
   * Returns the XMLRuleProcessor with the index previous to the specified index.
 *
   * @param {XMLRuleProcessor} obj The index of the XMLRuleProcessor that follows the desired XMLRuleProcessor.
   * @returns {XMLRuleProcessor}
   */
  previousItem: function(obj) {
    return new XMLRuleProcessor();
  },
  
  /*
   * Returns the XMLRuleProcessor whose index follows the specified XMLRuleProcessor in the collection.
 *
   * @param {XMLRuleProcessor} obj The XMLRuleProcessor whose index comes before the desired XMLRuleProcessor.
   * @returns {XMLRuleProcessor}
   */
  nextItem: function(obj) {
    return new XMLRuleProcessor();
  },
  
  /*
   * Returns any XMLRuleProcessor in the collection.
   * @returns {XMLRuleProcessor}
   */
  anyItem: function() {
    return new XMLRuleProcessor();
  },
  
  /*
   * Returns every XMLRuleProcessor in the collection.
   * @returns {XMLRuleProcessor}
   */
  everyItem: function() {
    return new XMLRuleProcessor();
  },
  
  /*
   * Generates a string which, if executed, will return the XMLRuleProcessor.
   * @returns {String}
   */
  toSource: function() {
    return new String();
  },
  
  /*
   * Returns the XMLRuleProcessor with the specified index.
 *
   * @param {Number} index The index.
   * @returns {XMLRuleProcessor}
   */
  []: function(index) {
    return new XMLRuleProcessor();
  },
  
};
