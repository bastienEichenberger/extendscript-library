/*
 * A collection of XML import maps.
 */
var XMLImportMaps = {
  /*
   * The number of objects in the collection.
   * @type {Number}
   */
  length: undefined,
  
  /*
   * Create a new mapping
 *
   * @param {Mixed} markupTag The tag to map. Can accept: XMLTag or String.
   * @param {Mixed} mappedStyle the mapped style. Can accept: ParagraphStyle, CharacterStyle, TableStyle, CellStyle or String.
   * @param {Object} [withProperties] Initial values for properties of the new XMLImportMap 
   * @returns {XMLImportMap}
   */
  add: function(markupTag, mappedStyle, withProperties) {
    return new XMLImportMap();
  },
  
  /*
   * Displays the number of elements in the XMLImportMap.
   * @returns {Number}
   */
  count: function() {
    return new Number();
  },
  
  /*
   * Returns the XMLImportMap with the specified index or name.
 *
   * @param {Mixed} index The index or name. Can accept: Long Integer or String.
   * @returns {XMLImportMap}
   */
  item: function(index) {
    return new XMLImportMap();
  },
  
  /*
   * Returns the XMLImportMaps within the specified range.
 *
   * @param {Mixed} from The XMLImportMap, index, or name at the beginning of the range. Can accept: XMLImportMap, Long Integer or String.
   * @param {Mixed} to The XMLImportMap, index, or name at the end of the range. Can accept: XMLImportMap, Long Integer or String.
   * @returns {XMLImportMap}
   */
  itemByRange: function(from, to) {
    return new XMLImportMap();
  },
  
  /*
   * Returns the first XMLImportMap in the collection.
   * @returns {XMLImportMap}
   */
  firstItem: function() {
    return new XMLImportMap();
  },
  
  /*
   * Returns the last XMLImportMap in the collection.
   * @returns {XMLImportMap}
   */
  lastItem: function() {
    return new XMLImportMap();
  },
  
  /*
   * Returns the middle XMLImportMap in the collection.
   * @returns {XMLImportMap}
   */
  middleItem: function() {
    return new XMLImportMap();
  },
  
  /*
   * Returns the XMLImportMap with the index previous to the specified index.
 *
   * @param {XMLImportMap} obj The index of the XMLImportMap that follows the desired XMLImportMap.
   * @returns {XMLImportMap}
   */
  previousItem: function(obj) {
    return new XMLImportMap();
  },
  
  /*
   * Returns the XMLImportMap whose index follows the specified XMLImportMap in the collection.
 *
   * @param {XMLImportMap} obj The XMLImportMap whose index comes before the desired XMLImportMap.
   * @returns {XMLImportMap}
   */
  nextItem: function(obj) {
    return new XMLImportMap();
  },
  
  /*
   * Returns any XMLImportMap in the collection.
   * @returns {XMLImportMap}
   */
  anyItem: function() {
    return new XMLImportMap();
  },
  
  /*
   * Returns every XMLImportMap in the collection.
   * @returns {XMLImportMap}
   */
  everyItem: function() {
    return new XMLImportMap();
  },
  
  /*
   * Generates a string which, if executed, will return the XMLImportMap.
   * @returns {String}
   */
  toSource: function() {
    return new String();
  },
  
  /*
   * Returns the XMLImportMap with the specified index.
 *
   * @param {Number} index The index.
   * @returns {XMLImportMap}
   */
  []: function(index) {
    return new XMLImportMap();
  },
  
};
