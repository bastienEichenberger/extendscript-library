/*
 * A collection of para style mappings.
 */
var ParaStyleMappings = {
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
   * @param {Object} [withProperties] Initial values for properties of the new ParaStyleMapping 
   * @returns {ParaStyleMapping}
   */
  add: function(sourceStyleName, destinationStyleName, mappingRuleType, withProperties) {
    return new ParaStyleMapping();
  },
  
  /*
   * Displays the number of elements in the ParaStyleMapping.
   * @returns {Number}
   */
  count: function() {
    return new Number();
  },
  
  /*
   * Returns the ParaStyleMapping with the specified index or name.
 *
   * @param {Mixed} index The index or name. Can accept: Long Integer or String.
   * @returns {ParaStyleMapping}
   */
  item: function(index) {
    return new ParaStyleMapping();
  },
  
  /*
   * Returns the ParaStyleMappings within the specified range.
 *
   * @param {Mixed} from The ParaStyleMapping, index, or name at the beginning of the range. Can accept: ParaStyleMapping, Long Integer or String.
   * @param {Mixed} to The ParaStyleMapping, index, or name at the end of the range. Can accept: ParaStyleMapping, Long Integer or String.
   * @returns {ParaStyleMapping}
   */
  itemByRange: function(from, to) {
    return new ParaStyleMapping();
  },
  
  /*
   * Returns the first ParaStyleMapping in the collection.
   * @returns {ParaStyleMapping}
   */
  firstItem: function() {
    return new ParaStyleMapping();
  },
  
  /*
   * Returns the last ParaStyleMapping in the collection.
   * @returns {ParaStyleMapping}
   */
  lastItem: function() {
    return new ParaStyleMapping();
  },
  
  /*
   * Returns the middle ParaStyleMapping in the collection.
   * @returns {ParaStyleMapping}
   */
  middleItem: function() {
    return new ParaStyleMapping();
  },
  
  /*
   * Returns the ParaStyleMapping with the index previous to the specified index.
 *
   * @param {ParaStyleMapping} obj The index of the ParaStyleMapping that follows the desired ParaStyleMapping.
   * @returns {ParaStyleMapping}
   */
  previousItem: function(obj) {
    return new ParaStyleMapping();
  },
  
  /*
   * Returns the ParaStyleMapping whose index follows the specified ParaStyleMapping in the collection.
 *
   * @param {ParaStyleMapping} obj The ParaStyleMapping whose index comes before the desired ParaStyleMapping.
   * @returns {ParaStyleMapping}
   */
  nextItem: function(obj) {
    return new ParaStyleMapping();
  },
  
  /*
   * Returns any ParaStyleMapping in the collection.
   * @returns {ParaStyleMapping}
   */
  anyItem: function() {
    return new ParaStyleMapping();
  },
  
  /*
   * Returns every ParaStyleMapping in the collection.
   * @returns {ParaStyleMapping}
   */
  everyItem: function() {
    return new ParaStyleMapping();
  },
  
  /*
   * Generates a string which, if executed, will return the ParaStyleMapping.
   * @returns {String}
   */
  toSource: function() {
    return new String();
  },
  
  /*
   * Returns the ParaStyleMapping with the specified index.
 *
   * @param {Number} index The index.
   * @returns {ParaStyleMapping}
   */
  []: function(index) {
    return new ParaStyleMapping();
  },
  
};
