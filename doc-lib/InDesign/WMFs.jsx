/*
 * A collection of WMF graphics.
 */
var WMFs = {
  /*
   * The number of objects in the collection.
   * @type {Number}
   */
  length: undefined,
  
  /*
   * Displays the number of elements in the WMF.
   * @returns {Number}
   */
  count: function() {
    return new Number();
  },
  
  /*
   * Returns the WMF with the specified index or name.
 *
   * @param {Mixed} index The index or name. Can accept: Long Integer or String.
   * @returns {WMF}
   */
  item: function(index) {
    return new WMF();
  },
  
  /*
   * Returns the WMF with the specified name.
 *
   * @param {String} name The name.
   * @returns {WMF}
   */
  itemByName: function(name) {
    return new WMF();
  },
  
  /*
   * Returns the WMF with the specified ID.
 *
   * @param {Number} id The ID.
   * @returns {WMF}
   */
  itemByID: function(id) {
    return new WMF();
  },
  
  /*
   * Returns the WMFs within the specified range.
 *
   * @param {Mixed} from The WMF, index, or name at the beginning of the range. Can accept: WMF, Long Integer or String.
   * @param {Mixed} to The WMF, index, or name at the end of the range. Can accept: WMF, Long Integer or String.
   * @returns {WMF}
   */
  itemByRange: function(from, to) {
    return new WMF();
  },
  
  /*
   * Returns the first WMF in the collection.
   * @returns {WMF}
   */
  firstItem: function() {
    return new WMF();
  },
  
  /*
   * Returns the last WMF in the collection.
   * @returns {WMF}
   */
  lastItem: function() {
    return new WMF();
  },
  
  /*
   * Returns the middle WMF in the collection.
   * @returns {WMF}
   */
  middleItem: function() {
    return new WMF();
  },
  
  /*
   * Returns the WMF with the index previous to the specified index.
 *
   * @param {WMF} obj The index of the WMF that follows the desired WMF.
   * @returns {WMF}
   */
  previousItem: function(obj) {
    return new WMF();
  },
  
  /*
   * Returns the WMF whose index follows the specified WMF in the collection.
 *
   * @param {WMF} obj The WMF whose index comes before the desired WMF.
   * @returns {WMF}
   */
  nextItem: function(obj) {
    return new WMF();
  },
  
  /*
   * Returns any WMF in the collection.
   * @returns {WMF}
   */
  anyItem: function() {
    return new WMF();
  },
  
  /*
   * Returns every WMF in the collection.
   * @returns {WMF}
   */
  everyItem: function() {
    return new WMF();
  },
  
  /*
   * Generates a string which, if executed, will return the WMF.
   * @returns {String}
   */
  toSource: function() {
    return new String();
  },
  
  /*
   * Returns the WMF with the specified index.
 *
   * @param {Number} index The index.
   * @returns {WMF}
   */
  []: function(index) {
    return new WMF();
  },
  
};
