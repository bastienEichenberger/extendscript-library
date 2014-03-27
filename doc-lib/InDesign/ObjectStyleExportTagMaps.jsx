/*
 * A collection of object style export tag maps.
 */
var ObjectStyleExportTagMaps = {
  /*
   * The number of objects in the collection.
   * @type {Number}
   */
  length: undefined,
  
  /*
   * Create a new mapping
 *
   * @param {String} exportType The type of export.
   * @param {String} exportTag The tag to map.
   * @param {String} exportClass The class to map.
   * @param {String} exportAttributes The attributes to map.
   * @param {Object} [withProperties] Initial values for properties of the new ObjectStyleExportTagMap 
   * @returns {ObjectStyleExportTagMap}
   */
  add: function(exportType, exportTag, exportClass, exportAttributes, withProperties) {
    return new ObjectStyleExportTagMap();
  },
  
  /*
   * Displays the number of elements in the ObjectStyleExportTagMap.
   * @returns {Number}
   */
  count: function() {
    return new Number();
  },
  
  /*
   * Returns the ObjectStyleExportTagMap with the specified index or name.
 *
   * @param {Mixed} index The index or name. Can accept: Long Integer or String.
   * @returns {ObjectStyleExportTagMap}
   */
  item: function(index) {
    return new ObjectStyleExportTagMap();
  },
  
  /*
   * Returns the ObjectStyleExportTagMaps within the specified range.
 *
   * @param {Mixed} from The ObjectStyleExportTagMap, index, or name at the beginning of the range. Can accept: ObjectStyleExportTagMap, Long Integer or String.
   * @param {Mixed} to The ObjectStyleExportTagMap, index, or name at the end of the range. Can accept: ObjectStyleExportTagMap, Long Integer or String.
   * @returns {ObjectStyleExportTagMap}
   */
  itemByRange: function(from, to) {
    return new ObjectStyleExportTagMap();
  },
  
  /*
   * Returns the first ObjectStyleExportTagMap in the collection.
   * @returns {ObjectStyleExportTagMap}
   */
  firstItem: function() {
    return new ObjectStyleExportTagMap();
  },
  
  /*
   * Returns the last ObjectStyleExportTagMap in the collection.
   * @returns {ObjectStyleExportTagMap}
   */
  lastItem: function() {
    return new ObjectStyleExportTagMap();
  },
  
  /*
   * Returns the middle ObjectStyleExportTagMap in the collection.
   * @returns {ObjectStyleExportTagMap}
   */
  middleItem: function() {
    return new ObjectStyleExportTagMap();
  },
  
  /*
   * Returns the ObjectStyleExportTagMap with the index previous to the specified index.
 *
   * @param {ObjectStyleExportTagMap} obj The index of the ObjectStyleExportTagMap that follows the desired ObjectStyleExportTagMap.
   * @returns {ObjectStyleExportTagMap}
   */
  previousItem: function(obj) {
    return new ObjectStyleExportTagMap();
  },
  
  /*
   * Returns the ObjectStyleExportTagMap whose index follows the specified ObjectStyleExportTagMap in the collection.
 *
   * @param {ObjectStyleExportTagMap} obj The ObjectStyleExportTagMap whose index comes before the desired ObjectStyleExportTagMap.
   * @returns {ObjectStyleExportTagMap}
   */
  nextItem: function(obj) {
    return new ObjectStyleExportTagMap();
  },
  
  /*
   * Returns any ObjectStyleExportTagMap in the collection.
   * @returns {ObjectStyleExportTagMap}
   */
  anyItem: function() {
    return new ObjectStyleExportTagMap();
  },
  
  /*
   * Returns every ObjectStyleExportTagMap in the collection.
   * @returns {ObjectStyleExportTagMap}
   */
  everyItem: function() {
    return new ObjectStyleExportTagMap();
  },
  
  /*
   * Generates a string which, if executed, will return the ObjectStyleExportTagMap.
   * @returns {String}
   */
  toSource: function() {
    return new String();
  },
  
  /*
   * Returns the ObjectStyleExportTagMap with the specified index.
 *
   * @param {Number} index The index.
   * @returns {ObjectStyleExportTagMap}
   */
  []: function(index) {
    return new ObjectStyleExportTagMap();
  },
  
};
