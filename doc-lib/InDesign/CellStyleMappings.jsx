/*
 * A collection of cell style mappings.
 */
var CellStyleMappings = {
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
   * @param {Object} [withProperties] Initial values for properties of the new CellStyleMapping 
   * @returns {CellStyleMapping}
   */
  add: function(sourceStyleName, destinationStyleName, mappingRuleType, withProperties) {
    return new CellStyleMapping();
  },
  
  /*
   * Displays the number of elements in the CellStyleMapping.
   * @returns {Number}
   */
  count: function() {
    return new Number();
  },
  
  /*
   * Returns the CellStyleMapping with the specified index or name.
 *
   * @param {Mixed} index The index or name. Can accept: Long Integer or String.
   * @returns {CellStyleMapping}
   */
  item: function(index) {
    return new CellStyleMapping();
  },
  
  /*
   * Returns the CellStyleMappings within the specified range.
 *
   * @param {Mixed} from The CellStyleMapping, index, or name at the beginning of the range. Can accept: CellStyleMapping, Long Integer or String.
   * @param {Mixed} to The CellStyleMapping, index, or name at the end of the range. Can accept: CellStyleMapping, Long Integer or String.
   * @returns {CellStyleMapping}
   */
  itemByRange: function(from, to) {
    return new CellStyleMapping();
  },
  
  /*
   * Returns the first CellStyleMapping in the collection.
   * @returns {CellStyleMapping}
   */
  firstItem: function() {
    return new CellStyleMapping();
  },
  
  /*
   * Returns the last CellStyleMapping in the collection.
   * @returns {CellStyleMapping}
   */
  lastItem: function() {
    return new CellStyleMapping();
  },
  
  /*
   * Returns the middle CellStyleMapping in the collection.
   * @returns {CellStyleMapping}
   */
  middleItem: function() {
    return new CellStyleMapping();
  },
  
  /*
   * Returns the CellStyleMapping with the index previous to the specified index.
 *
   * @param {CellStyleMapping} obj The index of the CellStyleMapping that follows the desired CellStyleMapping.
   * @returns {CellStyleMapping}
   */
  previousItem: function(obj) {
    return new CellStyleMapping();
  },
  
  /*
   * Returns the CellStyleMapping whose index follows the specified CellStyleMapping in the collection.
 *
   * @param {CellStyleMapping} obj The CellStyleMapping whose index comes before the desired CellStyleMapping.
   * @returns {CellStyleMapping}
   */
  nextItem: function(obj) {
    return new CellStyleMapping();
  },
  
  /*
   * Returns any CellStyleMapping in the collection.
   * @returns {CellStyleMapping}
   */
  anyItem: function() {
    return new CellStyleMapping();
  },
  
  /*
   * Returns every CellStyleMapping in the collection.
   * @returns {CellStyleMapping}
   */
  everyItem: function() {
    return new CellStyleMapping();
  },
  
  /*
   * Generates a string which, if executed, will return the CellStyleMapping.
   * @returns {String}
   */
  toSource: function() {
    return new String();
  },
  
  /*
   * Returns the CellStyleMapping with the specified index.
 *
   * @param {Number} index The index.
   * @returns {CellStyleMapping}
   */
  []: function(index) {
    return new CellStyleMapping();
  },
  
};
