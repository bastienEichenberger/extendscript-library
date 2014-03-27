/*
 * A collection of PDF export presets.
 */
var PDFExportPresets = {
  /*
   * The number of objects in the collection.
   * @type {Number}
   */
  length: undefined,
  
  /*
   * Creates a new PDFExportPreset.
 *
   * @param {Object} [withProperties] Initial values for properties of the new PDFExportPreset 
   * @returns {PDFExportPreset}
   */
  add: function(withProperties) {
    return new PDFExportPreset();
  },
  
  /*
   * Displays the number of elements in the PDFExportPreset.
   * @returns {Number}
   */
  count: function() {
    return new Number();
  },
  
  /*
   * Returns the PDFExportPreset with the specified index or name.
 *
   * @param {Mixed} index The index or name. Can accept: Long Integer or String.
   * @returns {PDFExportPreset}
   */
  item: function(index) {
    return new PDFExportPreset();
  },
  
  /*
   * Returns the PDFExportPreset with the specified name.
 *
   * @param {String} name The name.
   * @returns {PDFExportPreset}
   */
  itemByName: function(name) {
    return new PDFExportPreset();
  },
  
  /*
   * Returns the PDFExportPresets within the specified range.
 *
   * @param {Mixed} from The PDFExportPreset, index, or name at the beginning of the range. Can accept: PDFExportPreset, Long Integer or String.
   * @param {Mixed} to The PDFExportPreset, index, or name at the end of the range. Can accept: PDFExportPreset, Long Integer or String.
   * @returns {PDFExportPreset}
   */
  itemByRange: function(from, to) {
    return new PDFExportPreset();
  },
  
  /*
   * Returns the first PDFExportPreset in the collection.
   * @returns {PDFExportPreset}
   */
  firstItem: function() {
    return new PDFExportPreset();
  },
  
  /*
   * Returns the last PDFExportPreset in the collection.
   * @returns {PDFExportPreset}
   */
  lastItem: function() {
    return new PDFExportPreset();
  },
  
  /*
   * Returns the middle PDFExportPreset in the collection.
   * @returns {PDFExportPreset}
   */
  middleItem: function() {
    return new PDFExportPreset();
  },
  
  /*
   * Returns the PDFExportPreset with the index previous to the specified index.
 *
   * @param {PDFExportPreset} obj The index of the PDFExportPreset that follows the desired PDFExportPreset.
   * @returns {PDFExportPreset}
   */
  previousItem: function(obj) {
    return new PDFExportPreset();
  },
  
  /*
   * Returns the PDFExportPreset whose index follows the specified PDFExportPreset in the collection.
 *
   * @param {PDFExportPreset} obj The PDFExportPreset whose index comes before the desired PDFExportPreset.
   * @returns {PDFExportPreset}
   */
  nextItem: function(obj) {
    return new PDFExportPreset();
  },
  
  /*
   * Returns any PDFExportPreset in the collection.
   * @returns {PDFExportPreset}
   */
  anyItem: function() {
    return new PDFExportPreset();
  },
  
  /*
   * Returns every PDFExportPreset in the collection.
   * @returns {PDFExportPreset}
   */
  everyItem: function() {
    return new PDFExportPreset();
  },
  
  /*
   * Generates a string which, if executed, will return the PDFExportPreset.
   * @returns {String}
   */
  toSource: function() {
    return new String();
  },
  
  /*
   * Returns the PDFExportPreset with the specified index.
 *
   * @param {Number} index The index.
   * @returns {PDFExportPreset}
   */
  []: function(index) {
    return new PDFExportPreset();
  },
  
};
