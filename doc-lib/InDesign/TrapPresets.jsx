/*
 * A collection of trap presets.
 */
var TrapPresets = {
  /*
   * The number of objects in the collection.
   * @type {Number}
   */
  length: undefined,
  
  /*
   * Creates a new TrapPreset.
 *
   * @param {Object} [withProperties] Initial values for properties of the new TrapPreset 
   * @returns {TrapPreset}
   */
  add: function(withProperties) {
    return new TrapPreset();
  },
  
  /*
   * Displays the number of elements in the TrapPreset.
   * @returns {Number}
   */
  count: function() {
    return new Number();
  },
  
  /*
   * Returns the TrapPreset with the specified index or name.
 *
   * @param {Mixed} index The index or name. Can accept: Long Integer or String.
   * @returns {TrapPreset}
   */
  item: function(index) {
    return new TrapPreset();
  },
  
  /*
   * Returns the TrapPreset with the specified name.
 *
   * @param {String} name The name.
   * @returns {TrapPreset}
   */
  itemByName: function(name) {
    return new TrapPreset();
  },
  
  /*
   * Returns the TrapPreset with the specified ID.
 *
   * @param {Number} id The ID.
   * @returns {TrapPreset}
   */
  itemByID: function(id) {
    return new TrapPreset();
  },
  
  /*
   * Returns the TrapPresets within the specified range.
 *
   * @param {Mixed} from The TrapPreset, index, or name at the beginning of the range. Can accept: TrapPreset, Long Integer or String.
   * @param {Mixed} to The TrapPreset, index, or name at the end of the range. Can accept: TrapPreset, Long Integer or String.
   * @returns {TrapPreset}
   */
  itemByRange: function(from, to) {
    return new TrapPreset();
  },
  
  /*
   * Returns the first TrapPreset in the collection.
   * @returns {TrapPreset}
   */
  firstItem: function() {
    return new TrapPreset();
  },
  
  /*
   * Returns the last TrapPreset in the collection.
   * @returns {TrapPreset}
   */
  lastItem: function() {
    return new TrapPreset();
  },
  
  /*
   * Returns the middle TrapPreset in the collection.
   * @returns {TrapPreset}
   */
  middleItem: function() {
    return new TrapPreset();
  },
  
  /*
   * Returns the TrapPreset with the index previous to the specified index.
 *
   * @param {TrapPreset} obj The index of the TrapPreset that follows the desired TrapPreset.
   * @returns {TrapPreset}
   */
  previousItem: function(obj) {
    return new TrapPreset();
  },
  
  /*
   * Returns the TrapPreset whose index follows the specified TrapPreset in the collection.
 *
   * @param {TrapPreset} obj The TrapPreset whose index comes before the desired TrapPreset.
   * @returns {TrapPreset}
   */
  nextItem: function(obj) {
    return new TrapPreset();
  },
  
  /*
   * Returns any TrapPreset in the collection.
   * @returns {TrapPreset}
   */
  anyItem: function() {
    return new TrapPreset();
  },
  
  /*
   * Returns every TrapPreset in the collection.
   * @returns {TrapPreset}
   */
  everyItem: function() {
    return new TrapPreset();
  },
  
  /*
   * Generates a string which, if executed, will return the TrapPreset.
   * @returns {String}
   */
  toSource: function() {
    return new String();
  },
  
  /*
   * Returns the TrapPreset with the specified index.
 *
   * @param {Number} index The index.
   * @returns {TrapPreset}
   */
  []: function(index) {
    return new TrapPreset();
  },
  
};
