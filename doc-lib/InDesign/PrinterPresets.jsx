/*
 * A collection of printer presets.
 */
var PrinterPresets = {
  /*
   * The number of objects in the collection.
   * @type {Number}
   */
  length: undefined,
  
  /*
   * Creates a new PrinterPreset.
 *
   * @param {Object} [withProperties] Initial values for properties of the new PrinterPreset 
   * @returns {PrinterPreset}
   */
  add: function(withProperties) {
    return new PrinterPreset();
  },
  
  /*
   * Displays the number of elements in the PrinterPreset.
   * @returns {Number}
   */
  count: function() {
    return new Number();
  },
  
  /*
   * Returns the PrinterPreset with the specified index or name.
 *
   * @param {Mixed} index The index or name. Can accept: Long Integer or String.
   * @returns {PrinterPreset}
   */
  item: function(index) {
    return new PrinterPreset();
  },
  
  /*
   * Returns the PrinterPreset with the specified name.
 *
   * @param {String} name The name.
   * @returns {PrinterPreset}
   */
  itemByName: function(name) {
    return new PrinterPreset();
  },
  
  /*
   * Returns the PrinterPresets within the specified range.
 *
   * @param {Mixed} from The PrinterPreset, index, or name at the beginning of the range. Can accept: PrinterPreset, Long Integer or String.
   * @param {Mixed} to The PrinterPreset, index, or name at the end of the range. Can accept: PrinterPreset, Long Integer or String.
   * @returns {PrinterPreset}
   */
  itemByRange: function(from, to) {
    return new PrinterPreset();
  },
  
  /*
   * Returns the first PrinterPreset in the collection.
   * @returns {PrinterPreset}
   */
  firstItem: function() {
    return new PrinterPreset();
  },
  
  /*
   * Returns the last PrinterPreset in the collection.
   * @returns {PrinterPreset}
   */
  lastItem: function() {
    return new PrinterPreset();
  },
  
  /*
   * Returns the middle PrinterPreset in the collection.
   * @returns {PrinterPreset}
   */
  middleItem: function() {
    return new PrinterPreset();
  },
  
  /*
   * Returns the PrinterPreset with the index previous to the specified index.
 *
   * @param {PrinterPreset} obj The index of the PrinterPreset that follows the desired PrinterPreset.
   * @returns {PrinterPreset}
   */
  previousItem: function(obj) {
    return new PrinterPreset();
  },
  
  /*
   * Returns the PrinterPreset whose index follows the specified PrinterPreset in the collection.
 *
   * @param {PrinterPreset} obj The PrinterPreset whose index comes before the desired PrinterPreset.
   * @returns {PrinterPreset}
   */
  nextItem: function(obj) {
    return new PrinterPreset();
  },
  
  /*
   * Returns any PrinterPreset in the collection.
   * @returns {PrinterPreset}
   */
  anyItem: function() {
    return new PrinterPreset();
  },
  
  /*
   * Returns every PrinterPreset in the collection.
   * @returns {PrinterPreset}
   */
  everyItem: function() {
    return new PrinterPreset();
  },
  
  /*
   * Generates a string which, if executed, will return the PrinterPreset.
   * @returns {String}
   */
  toSource: function() {
    return new String();
  },
  
  /*
   * Returns the PrinterPreset with the specified index.
 *
   * @param {Number} index The index.
   * @returns {PrinterPreset}
   */
  []: function(index) {
    return new PrinterPreset();
  },
  
};
