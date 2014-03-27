/*
 * A collection of gradient stops.
 */
var GradientStops = {
  /*
   * The number of objects in the collection.
   * @type {Number}
   */
  length: undefined,
  
  /*
   * Creates a new GradientStop.
 *
   * @param {Object} [withProperties] Initial values for properties of the new GradientStop 
   * @returns {GradientStop}
   */
  add: function(withProperties) {
    return new GradientStop();
  },
  
  /*
   * Displays the number of elements in the GradientStop.
   * @returns {Number}
   */
  count: function() {
    return new Number();
  },
  
  /*
   * Returns the GradientStop with the specified index or name.
 *
   * @param {Mixed} index The index or name. Can accept: Long Integer or String.
   * @returns {GradientStop}
   */
  item: function(index) {
    return new GradientStop();
  },
  
  /*
   * Returns the GradientStops within the specified range.
 *
   * @param {Mixed} from The GradientStop, index, or name at the beginning of the range. Can accept: GradientStop, Long Integer or String.
   * @param {Mixed} to The GradientStop, index, or name at the end of the range. Can accept: GradientStop, Long Integer or String.
   * @returns {GradientStop}
   */
  itemByRange: function(from, to) {
    return new GradientStop();
  },
  
  /*
   * Returns the first GradientStop in the collection.
   * @returns {GradientStop}
   */
  firstItem: function() {
    return new GradientStop();
  },
  
  /*
   * Returns the last GradientStop in the collection.
   * @returns {GradientStop}
   */
  lastItem: function() {
    return new GradientStop();
  },
  
  /*
   * Returns the middle GradientStop in the collection.
   * @returns {GradientStop}
   */
  middleItem: function() {
    return new GradientStop();
  },
  
  /*
   * Returns the GradientStop with the index previous to the specified index.
 *
   * @param {GradientStop} obj The index of the GradientStop that follows the desired GradientStop.
   * @returns {GradientStop}
   */
  previousItem: function(obj) {
    return new GradientStop();
  },
  
  /*
   * Returns the GradientStop whose index follows the specified GradientStop in the collection.
 *
   * @param {GradientStop} obj The GradientStop whose index comes before the desired GradientStop.
   * @returns {GradientStop}
   */
  nextItem: function(obj) {
    return new GradientStop();
  },
  
  /*
   * Returns any GradientStop in the collection.
   * @returns {GradientStop}
   */
  anyItem: function() {
    return new GradientStop();
  },
  
  /*
   * Returns every GradientStop in the collection.
   * @returns {GradientStop}
   */
  everyItem: function() {
    return new GradientStop();
  },
  
  /*
   * Generates a string which, if executed, will return the GradientStop.
   * @returns {String}
   */
  toSource: function() {
    return new String();
  },
  
  /*
   * Returns the GradientStop with the specified index.
 *
   * @param {Number} index The index.
   * @returns {GradientStop}
   */
  []: function(index) {
    return new GradientStop();
  },
  
};
