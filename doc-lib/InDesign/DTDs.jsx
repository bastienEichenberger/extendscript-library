/*
 * A collection of DTDs.
 */
var DTDs = {
  /*
   * The number of objects in the collection.
   * @type {Number}
   */
  length: undefined,
  
  /*
   * Displays the number of elements in the DTD.
   * @returns {Number}
   */
  count: function() {
    return new Number();
  },
  
  /*
   * Returns the DTD with the specified index or name.
 *
   * @param {Mixed} index The index or name. Can accept: Long Integer or String.
   * @returns {DTD}
   */
  item: function(index) {
    return new DTD();
  },
  
  /*
   * Returns the DTD with the specified ID.
 *
   * @param {Number} id The ID.
   * @returns {DTD}
   */
  itemByID: function(id) {
    return new DTD();
  },
  
  /*
   * Returns the DTDs within the specified range.
 *
   * @param {Mixed} from The DTD, index, or name at the beginning of the range. Can accept: DTD, Long Integer or String.
   * @param {Mixed} to The DTD, index, or name at the end of the range. Can accept: DTD, Long Integer or String.
   * @returns {DTD}
   */
  itemByRange: function(from, to) {
    return new DTD();
  },
  
  /*
   * Returns the first DTD in the collection.
   * @returns {DTD}
   */
  firstItem: function() {
    return new DTD();
  },
  
  /*
   * Returns the last DTD in the collection.
   * @returns {DTD}
   */
  lastItem: function() {
    return new DTD();
  },
  
  /*
   * Returns the middle DTD in the collection.
   * @returns {DTD}
   */
  middleItem: function() {
    return new DTD();
  },
  
  /*
   * Returns the DTD with the index previous to the specified index.
 *
   * @param {DTD} obj The index of the DTD that follows the desired DTD.
   * @returns {DTD}
   */
  previousItem: function(obj) {
    return new DTD();
  },
  
  /*
   * Returns the DTD whose index follows the specified DTD in the collection.
 *
   * @param {DTD} obj The DTD whose index comes before the desired DTD.
   * @returns {DTD}
   */
  nextItem: function(obj) {
    return new DTD();
  },
  
  /*
   * Returns any DTD in the collection.
   * @returns {DTD}
   */
  anyItem: function() {
    return new DTD();
  },
  
  /*
   * Returns every DTD in the collection.
   * @returns {DTD}
   */
  everyItem: function() {
    return new DTD();
  },
  
  /*
   * Generates a string which, if executed, will return the DTD.
   * @returns {String}
   */
  toSource: function() {
    return new String();
  },
  
  /*
   * Returns the DTD with the specified index.
 *
   * @param {Number} index The index.
   * @returns {DTD}
   */
  []: function(index) {
    return new DTD();
  },
  
};
