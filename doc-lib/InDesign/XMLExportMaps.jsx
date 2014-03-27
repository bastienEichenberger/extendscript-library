/*
 * A collection of XML export maps.
 */
var XMLExportMaps = {
  /*
   * The number of objects in the collection.
   * @type {Number}
   */
  length: undefined,
  
  /*
   * Create a new mapping
 *
   * @param {Mixed} mappedStyle The mapped style. Can accept: ParagraphStyle, CharacterStyle, TableStyle, CellStyle or String.
   * @param {Mixed} markupTag The tag to map. Can accept: XMLTag or String.
   * @param {Object} [withProperties] Initial values for properties of the new XMLExportMap 
   * @returns {XMLExportMap}
   */
  add: function(mappedStyle, markupTag, withProperties) {
    return new XMLExportMap();
  },
  
  /*
   * Displays the number of elements in the XMLExportMap.
   * @returns {Number}
   */
  count: function() {
    return new Number();
  },
  
  /*
   * Returns the XMLExportMap with the specified index or name.
 *
   * @param {Mixed} index The index or name. Can accept: Long Integer or String.
   * @returns {XMLExportMap}
   */
  item: function(index) {
    return new XMLExportMap();
  },
  
  /*
   * Returns the XMLExportMaps within the specified range.
 *
   * @param {Mixed} from The XMLExportMap, index, or name at the beginning of the range. Can accept: XMLExportMap, Long Integer or String.
   * @param {Mixed} to The XMLExportMap, index, or name at the end of the range. Can accept: XMLExportMap, Long Integer or String.
   * @returns {XMLExportMap}
   */
  itemByRange: function(from, to) {
    return new XMLExportMap();
  },
  
  /*
   * Returns the first XMLExportMap in the collection.
   * @returns {XMLExportMap}
   */
  firstItem: function() {
    return new XMLExportMap();
  },
  
  /*
   * Returns the last XMLExportMap in the collection.
   * @returns {XMLExportMap}
   */
  lastItem: function() {
    return new XMLExportMap();
  },
  
  /*
   * Returns the middle XMLExportMap in the collection.
   * @returns {XMLExportMap}
   */
  middleItem: function() {
    return new XMLExportMap();
  },
  
  /*
   * Returns the XMLExportMap with the index previous to the specified index.
 *
   * @param {XMLExportMap} obj The index of the XMLExportMap that follows the desired XMLExportMap.
   * @returns {XMLExportMap}
   */
  previousItem: function(obj) {
    return new XMLExportMap();
  },
  
  /*
   * Returns the XMLExportMap whose index follows the specified XMLExportMap in the collection.
 *
   * @param {XMLExportMap} obj The XMLExportMap whose index comes before the desired XMLExportMap.
   * @returns {XMLExportMap}
   */
  nextItem: function(obj) {
    return new XMLExportMap();
  },
  
  /*
   * Returns any XMLExportMap in the collection.
   * @returns {XMLExportMap}
   */
  anyItem: function() {
    return new XMLExportMap();
  },
  
  /*
   * Returns every XMLExportMap in the collection.
   * @returns {XMLExportMap}
   */
  everyItem: function() {
    return new XMLExportMap();
  },
  
  /*
   * Generates a string which, if executed, will return the XMLExportMap.
   * @returns {String}
   */
  toSource: function() {
    return new String();
  },
  
  /*
   * Returns the XMLExportMap with the specified index.
 *
   * @param {Number} index The index.
   * @returns {XMLExportMap}
   */
  []: function(index) {
    return new XMLExportMap();
  },
  
};
