/*
 * A collection of table style mappings.
 */
var TableStyleMappings = {
  /*
   * The number of objects in the collection.
   * @type {Number}
   */
  length: undefined,
  
  /*
   * Adds a style mapping.
 *
   * @param {String} sourceStyleName The source style name.
   * @param {String} destinationStyleName The destination style name.
   * @param {MapType} mappingRuleType The mapping type
   * @param {Object} [withProperties] Initial values for properties of the new TableStyleMapping 
   * @returns {TableStyleMapping}
   */
  add: function(sourceStyleName, destinationStyleName, mappingRuleType, withProperties) {
    return new TableStyleMapping();
  },
  
  /*
   * Displays the number of elements in the TableStyleMapping.
   * @returns {Number}
   */
  count: function() {
    return new Number();
  },
  
  /*
   * Returns the TableStyleMapping with the specified index or name.
 *
   * @param {Mixed} index The index or name. Can accept: Long Integer or String.
   * @returns {TableStyleMapping}
   */
  item: function(index) {
    return new TableStyleMapping();
  },
  
  /*
   * Returns the TableStyleMappings within the specified range.
 *
   * @param {Mixed} from The TableStyleMapping, index, or name at the beginning of the range. Can accept: TableStyleMapping, Long Integer or String.
   * @param {Mixed} to The TableStyleMapping, index, or name at the end of the range. Can accept: TableStyleMapping, Long Integer or String.
   * @returns {TableStyleMapping}
   */
  itemByRange: function(from, to) {
    return new TableStyleMapping();
  },
  
  /*
   * Returns the first TableStyleMapping in the collection.
   * @returns {TableStyleMapping}
   */
  firstItem: function() {
    return new TableStyleMapping();
  },
  
  /*
   * Returns the last TableStyleMapping in the collection.
   * @returns {TableStyleMapping}
   */
  lastItem: function() {
    return new TableStyleMapping();
  },
  
  /*
   * Returns the middle TableStyleMapping in the collection.
   * @returns {TableStyleMapping}
   */
  middleItem: function() {
    return new TableStyleMapping();
  },
  
  /*
   * Returns the TableStyleMapping with the index previous to the specified index.
 *
   * @param {TableStyleMapping} obj The index of the TableStyleMapping that follows the desired TableStyleMapping.
   * @returns {TableStyleMapping}
   */
  previousItem: function(obj) {
    return new TableStyleMapping();
  },
  
  /*
   * Returns the TableStyleMapping whose index follows the specified TableStyleMapping in the collection.
 *
   * @param {TableStyleMapping} obj The TableStyleMapping whose index comes before the desired TableStyleMapping.
   * @returns {TableStyleMapping}
   */
  nextItem: function(obj) {
    return new TableStyleMapping();
  },
  
  /*
   * Returns any TableStyleMapping in the collection.
   * @returns {TableStyleMapping}
   */
  anyItem: function() {
    return new TableStyleMapping();
  },
  
  /*
   * Returns every TableStyleMapping in the collection.
   * @returns {TableStyleMapping}
   */
  everyItem: function() {
    return new TableStyleMapping();
  },
  
  /*
   * Generates a string which, if executed, will return the TableStyleMapping.
   * @returns {String}
   */
  toSource: function() {
    return new String();
  },
  
  /*
   * Returns the TableStyleMapping with the specified index.
 *
   * @param {Number} index The index.
   * @returns {TableStyleMapping}
   */
  []: function(index) {
    return new TableStyleMapping();
  },
  
};
