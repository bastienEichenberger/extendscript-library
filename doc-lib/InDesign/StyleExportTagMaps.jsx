/*
 * A collection of style export tag maps.
 */
var StyleExportTagMaps = {
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
   * @param {Object} [withProperties] Initial values for properties of the new StyleExportTagMap 
   * @returns {StyleExportTagMap}
   */
  add: function(exportType, exportTag, exportClass, exportAttributes, withProperties) {
    return new StyleExportTagMap();
  },
  
  /*
   * Displays the number of elements in the StyleExportTagMap.
   * @returns {Number}
   */
  count: function() {
    return new Number();
  },
  
  /*
   * Returns the StyleExportTagMap with the specified index or name.
 *
   * @param {Mixed} index The index or name. Can accept: Long Integer or String.
   * @returns {StyleExportTagMap}
   */
  item: function(index) {
    return new StyleExportTagMap();
  },
  
  /*
   * Returns the StyleExportTagMaps within the specified range.
 *
   * @param {Mixed} from The StyleExportTagMap, index, or name at the beginning of the range. Can accept: StyleExportTagMap, Long Integer or String.
   * @param {Mixed} to The StyleExportTagMap, index, or name at the end of the range. Can accept: StyleExportTagMap, Long Integer or String.
   * @returns {StyleExportTagMap}
   */
  itemByRange: function(from, to) {
    return new StyleExportTagMap();
  },
  
  /*
   * Returns the first StyleExportTagMap in the collection.
   * @returns {StyleExportTagMap}
   */
  firstItem: function() {
    return new StyleExportTagMap();
  },
  
  /*
   * Returns the last StyleExportTagMap in the collection.
   * @returns {StyleExportTagMap}
   */
  lastItem: function() {
    return new StyleExportTagMap();
  },
  
  /*
   * Returns the middle StyleExportTagMap in the collection.
   * @returns {StyleExportTagMap}
   */
  middleItem: function() {
    return new StyleExportTagMap();
  },
  
  /*
   * Returns the StyleExportTagMap with the index previous to the specified index.
 *
   * @param {StyleExportTagMap} obj The index of the StyleExportTagMap that follows the desired StyleExportTagMap.
   * @returns {StyleExportTagMap}
   */
  previousItem: function(obj) {
    return new StyleExportTagMap();
  },
  
  /*
   * Returns the StyleExportTagMap whose index follows the specified StyleExportTagMap in the collection.
 *
   * @param {StyleExportTagMap} obj The StyleExportTagMap whose index comes before the desired StyleExportTagMap.
   * @returns {StyleExportTagMap}
   */
  nextItem: function(obj) {
    return new StyleExportTagMap();
  },
  
  /*
   * Returns any StyleExportTagMap in the collection.
   * @returns {StyleExportTagMap}
   */
  anyItem: function() {
    return new StyleExportTagMap();
  },
  
  /*
   * Returns every StyleExportTagMap in the collection.
   * @returns {StyleExportTagMap}
   */
  everyItem: function() {
    return new StyleExportTagMap();
  },
  
  /*
   * Generates a string which, if executed, will return the StyleExportTagMap.
   * @returns {String}
   */
  toSource: function() {
    return new String();
  },
  
  /*
   * Returns the StyleExportTagMap with the specified index.
 *
   * @param {Number} index The index.
   * @returns {StyleExportTagMap}
   */
  []: function(index) {
    return new StyleExportTagMap();
  },
  
};
