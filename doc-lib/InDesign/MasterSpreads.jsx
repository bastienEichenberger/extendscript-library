/*
 * A collection of master spreads.
 */
var MasterSpreads = {
  /*
   * The number of objects in the collection.
   * @type {Number}
   */
  length: undefined,
  
  /*
   * Creates a new master spread.
 *
   * @param {Number} [pagesPerSpread] The number of pages to include in the master spread. 
   * @param {Object} [withProperties] Initial values for properties of the new MasterSpread 
   * @returns {MasterSpread}
   */
  add: function(pagesPerSpread, withProperties) {
    return new MasterSpread();
  },
  
  /*
   * Displays the number of elements in the MasterSpread.
   * @returns {Number}
   */
  count: function() {
    return new Number();
  },
  
  /*
   * Returns the MasterSpread with the specified index or name.
 *
   * @param {Mixed} index The index or name. Can accept: Long Integer or String.
   * @returns {MasterSpread}
   */
  item: function(index) {
    return new MasterSpread();
  },
  
  /*
   * Returns the MasterSpread with the specified name.
 *
   * @param {String} name The name.
   * @returns {MasterSpread}
   */
  itemByName: function(name) {
    return new MasterSpread();
  },
  
  /*
   * Returns the MasterSpread with the specified ID.
 *
   * @param {Number} id The ID.
   * @returns {MasterSpread}
   */
  itemByID: function(id) {
    return new MasterSpread();
  },
  
  /*
   * Returns the MasterSpreads within the specified range.
 *
   * @param {Mixed} from The MasterSpread, index, or name at the beginning of the range. Can accept: MasterSpread, Long Integer or String.
   * @param {Mixed} to The MasterSpread, index, or name at the end of the range. Can accept: MasterSpread, Long Integer or String.
   * @returns {MasterSpread}
   */
  itemByRange: function(from, to) {
    return new MasterSpread();
  },
  
  /*
   * Returns the first MasterSpread in the collection.
   * @returns {MasterSpread}
   */
  firstItem: function() {
    return new MasterSpread();
  },
  
  /*
   * Returns the last MasterSpread in the collection.
   * @returns {MasterSpread}
   */
  lastItem: function() {
    return new MasterSpread();
  },
  
  /*
   * Returns the middle MasterSpread in the collection.
   * @returns {MasterSpread}
   */
  middleItem: function() {
    return new MasterSpread();
  },
  
  /*
   * Returns the MasterSpread with the index previous to the specified index.
 *
   * @param {MasterSpread} obj The index of the MasterSpread that follows the desired MasterSpread.
   * @returns {MasterSpread}
   */
  previousItem: function(obj) {
    return new MasterSpread();
  },
  
  /*
   * Returns the MasterSpread whose index follows the specified MasterSpread in the collection.
 *
   * @param {MasterSpread} obj The MasterSpread whose index comes before the desired MasterSpread.
   * @returns {MasterSpread}
   */
  nextItem: function(obj) {
    return new MasterSpread();
  },
  
  /*
   * Returns any MasterSpread in the collection.
   * @returns {MasterSpread}
   */
  anyItem: function() {
    return new MasterSpread();
  },
  
  /*
   * Returns every MasterSpread in the collection.
   * @returns {MasterSpread}
   */
  everyItem: function() {
    return new MasterSpread();
  },
  
  /*
   * Generates a string which, if executed, will return the MasterSpread.
   * @returns {String}
   */
  toSource: function() {
    return new String();
  },
  
  /*
   * Returns the MasterSpread with the specified index.
 *
   * @param {Number} index The index.
   * @returns {MasterSpread}
   */
  []: function(index) {
    return new MasterSpread();
  },
  
};
