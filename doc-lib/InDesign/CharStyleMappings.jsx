/*
 * A collection of char style mappings.
 */
var CharStyleMappings = {
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
   * @param {Object} [withProperties] Initial values for properties of the new CharStyleMapping 
   * @returns {CharStyleMapping}
   */
  add: function(sourceStyleName, destinationStyleName, mappingRuleType, withProperties) {
    return new CharStyleMapping();
  },
  
  /*
   * Displays the number of elements in the CharStyleMapping.
   * @returns {Number}
   */
  count: function() {
    return new Number();
  },
  
  /*
   * Returns the CharStyleMapping with the specified index or name.
 *
   * @param {Mixed} index The index or name. Can accept: Long Integer or String.
   * @returns {CharStyleMapping}
   */
  item: function(index) {
    return new CharStyleMapping();
  },
  
  /*
   * Returns the CharStyleMappings within the specified range.
 *
   * @param {Mixed} from The CharStyleMapping, index, or name at the beginning of the range. Can accept: CharStyleMapping, Long Integer or String.
   * @param {Mixed} to The CharStyleMapping, index, or name at the end of the range. Can accept: CharStyleMapping, Long Integer or String.
   * @returns {CharStyleMapping}
   */
  itemByRange: function(from, to) {
    return new CharStyleMapping();
  },
  
  /*
   * Returns the first CharStyleMapping in the collection.
   * @returns {CharStyleMapping}
   */
  firstItem: function() {
    return new CharStyleMapping();
  },
  
  /*
   * Returns the last CharStyleMapping in the collection.
   * @returns {CharStyleMapping}
   */
  lastItem: function() {
    return new CharStyleMapping();
  },
  
  /*
   * Returns the middle CharStyleMapping in the collection.
   * @returns {CharStyleMapping}
   */
  middleItem: function() {
    return new CharStyleMapping();
  },
  
  /*
   * Returns the CharStyleMapping with the index previous to the specified index.
 *
   * @param {CharStyleMapping} obj The index of the CharStyleMapping that follows the desired CharStyleMapping.
   * @returns {CharStyleMapping}
   */
  previousItem: function(obj) {
    return new CharStyleMapping();
  },
  
  /*
   * Returns the CharStyleMapping whose index follows the specified CharStyleMapping in the collection.
 *
   * @param {CharStyleMapping} obj The CharStyleMapping whose index comes before the desired CharStyleMapping.
   * @returns {CharStyleMapping}
   */
  nextItem: function(obj) {
    return new CharStyleMapping();
  },
  
  /*
   * Returns any CharStyleMapping in the collection.
   * @returns {CharStyleMapping}
   */
  anyItem: function() {
    return new CharStyleMapping();
  },
  
  /*
   * Returns every CharStyleMapping in the collection.
   * @returns {CharStyleMapping}
   */
  everyItem: function() {
    return new CharStyleMapping();
  },
  
  /*
   * Generates a string which, if executed, will return the CharStyleMapping.
   * @returns {String}
   */
  toSource: function() {
    return new String();
  },
  
  /*
   * Returns the CharStyleMapping with the specified index.
 *
   * @param {Number} index The index.
   * @returns {CharStyleMapping}
   */
  []: function(index) {
    return new CharStyleMapping();
  },
  
};
