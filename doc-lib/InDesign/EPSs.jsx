/*
 * A collection of EPS files.
 */
var EPSs = {
  /*
   * The number of objects in the collection.
   * @type {Number}
   */
  length: undefined,
  
  /*
   * Displays the number of elements in the EPS.
   * @returns {Number}
   */
  count: function() {
    return new Number();
  },
  
  /*
   * Returns the EPS with the specified index or name.
 *
   * @param {Mixed} index The index or name. Can accept: Long Integer or String.
   * @returns {EPS}
   */
  item: function(index) {
    return new EPS();
  },
  
  /*
   * Returns the EPS with the specified name.
 *
   * @param {String} name The name.
   * @returns {EPS}
   */
  itemByName: function(name) {
    return new EPS();
  },
  
  /*
   * Returns the EPS with the specified ID.
 *
   * @param {Number} id The ID.
   * @returns {EPS}
   */
  itemByID: function(id) {
    return new EPS();
  },
  
  /*
   * Returns the EPSs within the specified range.
 *
   * @param {Mixed} from The EPS, index, or name at the beginning of the range. Can accept: EPS, Long Integer or String.
   * @param {Mixed} to The EPS, index, or name at the end of the range. Can accept: EPS, Long Integer or String.
   * @returns {EPS}
   */
  itemByRange: function(from, to) {
    return new EPS();
  },
  
  /*
   * Returns the first EPS in the collection.
   * @returns {EPS}
   */
  firstItem: function() {
    return new EPS();
  },
  
  /*
   * Returns the last EPS in the collection.
   * @returns {EPS}
   */
  lastItem: function() {
    return new EPS();
  },
  
  /*
   * Returns the middle EPS in the collection.
   * @returns {EPS}
   */
  middleItem: function() {
    return new EPS();
  },
  
  /*
   * Returns the EPS with the index previous to the specified index.
 *
   * @param {EPS} obj The index of the EPS that follows the desired EPS.
   * @returns {EPS}
   */
  previousItem: function(obj) {
    return new EPS();
  },
  
  /*
   * Returns the EPS whose index follows the specified EPS in the collection.
 *
   * @param {EPS} obj The EPS whose index comes before the desired EPS.
   * @returns {EPS}
   */
  nextItem: function(obj) {
    return new EPS();
  },
  
  /*
   * Returns any EPS in the collection.
   * @returns {EPS}
   */
  anyItem: function() {
    return new EPS();
  },
  
  /*
   * Returns every EPS in the collection.
   * @returns {EPS}
   */
  everyItem: function() {
    return new EPS();
  },
  
  /*
   * Generates a string which, if executed, will return the EPS.
   * @returns {String}
   */
  toSource: function() {
    return new String();
  },
  
  /*
   * Returns the EPS with the specified index.
 *
   * @param {Number} index The index.
   * @returns {EPS}
   */
  []: function(index) {
    return new EPS();
  },
  
};
