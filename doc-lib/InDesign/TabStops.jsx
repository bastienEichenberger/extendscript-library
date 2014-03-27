/*
 * A collection of tab stops.
 */
var TabStops = {
  /*
   * The number of objects in the collection.
   * @type {Number}
   */
  length: undefined,
  
  /*
   * Creates a new TabStop.
 *
   * @param {Object} [withProperties] Initial values for properties of the new TabStop 
   * @returns {TabStop}
   */
  add: function(withProperties) {
    return new TabStop();
  },
  
  /*
   * Displays the number of elements in the TabStop.
   * @returns {Number}
   */
  count: function() {
    return new Number();
  },
  
  /*
   * Returns the TabStop with the specified index or name.
 *
   * @param {Mixed} index The index or name. Can accept: Long Integer or String.
   * @returns {TabStop}
   */
  item: function(index) {
    return new TabStop();
  },
  
  /*
   * Returns the TabStops within the specified range.
 *
   * @param {Mixed} from The TabStop, index, or name at the beginning of the range. Can accept: TabStop, Long Integer or String.
   * @param {Mixed} to The TabStop, index, or name at the end of the range. Can accept: TabStop, Long Integer or String.
   * @returns {TabStop}
   */
  itemByRange: function(from, to) {
    return new TabStop();
  },
  
  /*
   * Returns the first TabStop in the collection.
   * @returns {TabStop}
   */
  firstItem: function() {
    return new TabStop();
  },
  
  /*
   * Returns the last TabStop in the collection.
   * @returns {TabStop}
   */
  lastItem: function() {
    return new TabStop();
  },
  
  /*
   * Returns the middle TabStop in the collection.
   * @returns {TabStop}
   */
  middleItem: function() {
    return new TabStop();
  },
  
  /*
   * Returns the TabStop with the index previous to the specified index.
 *
   * @param {TabStop} obj The index of the TabStop that follows the desired TabStop.
   * @returns {TabStop}
   */
  previousItem: function(obj) {
    return new TabStop();
  },
  
  /*
   * Returns the TabStop whose index follows the specified TabStop in the collection.
 *
   * @param {TabStop} obj The TabStop whose index comes before the desired TabStop.
   * @returns {TabStop}
   */
  nextItem: function(obj) {
    return new TabStop();
  },
  
  /*
   * Returns any TabStop in the collection.
   * @returns {TabStop}
   */
  anyItem: function() {
    return new TabStop();
  },
  
  /*
   * Returns every TabStop in the collection.
   * @returns {TabStop}
   */
  everyItem: function() {
    return new TabStop();
  },
  
  /*
   * Generates a string which, if executed, will return the TabStop.
   * @returns {String}
   */
  toSource: function() {
    return new String();
  },
  
  /*
   * Returns the TabStop with the specified index.
 *
   * @param {Number} index The index.
   * @returns {TabStop}
   */
  []: function(index) {
    return new TabStop();
  },
  
};
