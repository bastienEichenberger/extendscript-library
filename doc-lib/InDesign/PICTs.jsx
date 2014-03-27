/*
 * A collection of PICT graphics.
 */
var PICTs = {
  /*
   * The number of objects in the collection.
   * @type {Number}
   */
  length: undefined,
  
  /*
   * Displays the number of elements in the PICT.
   * @returns {Number}
   */
  count: function() {
    return new Number();
  },
  
  /*
   * Returns the PICT with the specified index or name.
 *
   * @param {Mixed} index The index or name. Can accept: Long Integer or String.
   * @returns {PICT}
   */
  item: function(index) {
    return new PICT();
  },
  
  /*
   * Returns the PICT with the specified name.
 *
   * @param {String} name The name.
   * @returns {PICT}
   */
  itemByName: function(name) {
    return new PICT();
  },
  
  /*
   * Returns the PICT with the specified ID.
 *
   * @param {Number} id The ID.
   * @returns {PICT}
   */
  itemByID: function(id) {
    return new PICT();
  },
  
  /*
   * Returns the PICTs within the specified range.
 *
   * @param {Mixed} from The PICT, index, or name at the beginning of the range. Can accept: PICT, Long Integer or String.
   * @param {Mixed} to The PICT, index, or name at the end of the range. Can accept: PICT, Long Integer or String.
   * @returns {PICT}
   */
  itemByRange: function(from, to) {
    return new PICT();
  },
  
  /*
   * Returns the first PICT in the collection.
   * @returns {PICT}
   */
  firstItem: function() {
    return new PICT();
  },
  
  /*
   * Returns the last PICT in the collection.
   * @returns {PICT}
   */
  lastItem: function() {
    return new PICT();
  },
  
  /*
   * Returns the middle PICT in the collection.
   * @returns {PICT}
   */
  middleItem: function() {
    return new PICT();
  },
  
  /*
   * Returns the PICT with the index previous to the specified index.
 *
   * @param {PICT} obj The index of the PICT that follows the desired PICT.
   * @returns {PICT}
   */
  previousItem: function(obj) {
    return new PICT();
  },
  
  /*
   * Returns the PICT whose index follows the specified PICT in the collection.
 *
   * @param {PICT} obj The PICT whose index comes before the desired PICT.
   * @returns {PICT}
   */
  nextItem: function(obj) {
    return new PICT();
  },
  
  /*
   * Returns any PICT in the collection.
   * @returns {PICT}
   */
  anyItem: function() {
    return new PICT();
  },
  
  /*
   * Returns every PICT in the collection.
   * @returns {PICT}
   */
  everyItem: function() {
    return new PICT();
  },
  
  /*
   * Generates a string which, if executed, will return the PICT.
   * @returns {String}
   */
  toSource: function() {
    return new String();
  },
  
  /*
   * Returns the PICT with the specified index.
 *
   * @param {Number} index The index.
   * @returns {PICT}
   */
  []: function(index) {
    return new PICT();
  },
  
};
