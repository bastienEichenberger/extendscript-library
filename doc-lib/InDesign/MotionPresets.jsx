/*
 * A collection of Motion presets.
 */
var MotionPresets = {
  /*
   * The number of objects in the collection.
   * @type {Number}
   */
  length: undefined,
  
  /*
   * Creates a new MotionPreset.
 *
   * @param {Object} [withProperties] Initial values for properties of the new MotionPreset 
   * @returns {MotionPreset}
   */
  add: function(withProperties) {
    return new MotionPreset();
  },
  
  /*
   * Displays the number of elements in the MotionPreset.
   * @returns {Number}
   */
  count: function() {
    return new Number();
  },
  
  /*
   * Returns the MotionPreset with the specified index or name.
 *
   * @param {Mixed} index The index or name. Can accept: Long Integer or String.
   * @returns {MotionPreset}
   */
  item: function(index) {
    return new MotionPreset();
  },
  
  /*
   * Returns the MotionPreset with the specified name.
 *
   * @param {String} name The name.
   * @returns {MotionPreset}
   */
  itemByName: function(name) {
    return new MotionPreset();
  },
  
  /*
   * Returns the MotionPreset with the specified ID.
 *
   * @param {Number} id The ID.
   * @returns {MotionPreset}
   */
  itemByID: function(id) {
    return new MotionPreset();
  },
  
  /*
   * Returns the MotionPresets within the specified range.
 *
   * @param {Mixed} from The MotionPreset, index, or name at the beginning of the range. Can accept: MotionPreset, Long Integer or String.
   * @param {Mixed} to The MotionPreset, index, or name at the end of the range. Can accept: MotionPreset, Long Integer or String.
   * @returns {MotionPreset}
   */
  itemByRange: function(from, to) {
    return new MotionPreset();
  },
  
  /*
   * Returns the first MotionPreset in the collection.
   * @returns {MotionPreset}
   */
  firstItem: function() {
    return new MotionPreset();
  },
  
  /*
   * Returns the last MotionPreset in the collection.
   * @returns {MotionPreset}
   */
  lastItem: function() {
    return new MotionPreset();
  },
  
  /*
   * Returns the middle MotionPreset in the collection.
   * @returns {MotionPreset}
   */
  middleItem: function() {
    return new MotionPreset();
  },
  
  /*
   * Returns the MotionPreset with the index previous to the specified index.
 *
   * @param {MotionPreset} obj The index of the MotionPreset that follows the desired MotionPreset.
   * @returns {MotionPreset}
   */
  previousItem: function(obj) {
    return new MotionPreset();
  },
  
  /*
   * Returns the MotionPreset whose index follows the specified MotionPreset in the collection.
 *
   * @param {MotionPreset} obj The MotionPreset whose index comes before the desired MotionPreset.
   * @returns {MotionPreset}
   */
  nextItem: function(obj) {
    return new MotionPreset();
  },
  
  /*
   * Returns any MotionPreset in the collection.
   * @returns {MotionPreset}
   */
  anyItem: function() {
    return new MotionPreset();
  },
  
  /*
   * Returns every MotionPreset in the collection.
   * @returns {MotionPreset}
   */
  everyItem: function() {
    return new MotionPreset();
  },
  
  /*
   * Generates a string which, if executed, will return the MotionPreset.
   * @returns {String}
   */
  toSource: function() {
    return new String();
  },
  
  /*
   * Returns the MotionPreset with the specified index.
 *
   * @param {Number} index The index.
   * @returns {MotionPreset}
   */
  []: function(index) {
    return new MotionPreset();
  },
  
};
