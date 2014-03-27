/*
 * A collection of mojikumi tables.
 */
var MojikumiTables = {
  /*
   * The number of objects in the collection.
   * @type {Number}
   */
  length: undefined,
  
  /*
   * Creates a new mojikumi table.
 *
   * @param {String} name The name of the new mojikumi table.
   * @param {Object} [withProperties] Initial values for properties of the new MojikumiTable 
   * @returns {MojikumiTable}
   */
  add: function(name, withProperties) {
    return new MojikumiTable();
  },
  
  /*
   * Displays the number of elements in the MojikumiTable.
   * @returns {Number}
   */
  count: function() {
    return new Number();
  },
  
  /*
   * Returns the MojikumiTable with the specified index or name.
 *
   * @param {Mixed} index The index or name. Can accept: Long Integer or String.
   * @returns {MojikumiTable}
   */
  item: function(index) {
    return new MojikumiTable();
  },
  
  /*
   * Returns the MojikumiTable with the specified name.
 *
   * @param {String} name The name.
   * @returns {MojikumiTable}
   */
  itemByName: function(name) {
    return new MojikumiTable();
  },
  
  /*
   * Returns the MojikumiTable with the specified ID.
 *
   * @param {Number} id The ID.
   * @returns {MojikumiTable}
   */
  itemByID: function(id) {
    return new MojikumiTable();
  },
  
  /*
   * Returns the MojikumiTables within the specified range.
 *
   * @param {Mixed} from The MojikumiTable, index, or name at the beginning of the range. Can accept: MojikumiTable, Long Integer or String.
   * @param {Mixed} to The MojikumiTable, index, or name at the end of the range. Can accept: MojikumiTable, Long Integer or String.
   * @returns {MojikumiTable}
   */
  itemByRange: function(from, to) {
    return new MojikumiTable();
  },
  
  /*
   * Returns the first MojikumiTable in the collection.
   * @returns {MojikumiTable}
   */
  firstItem: function() {
    return new MojikumiTable();
  },
  
  /*
   * Returns the last MojikumiTable in the collection.
   * @returns {MojikumiTable}
   */
  lastItem: function() {
    return new MojikumiTable();
  },
  
  /*
   * Returns the middle MojikumiTable in the collection.
   * @returns {MojikumiTable}
   */
  middleItem: function() {
    return new MojikumiTable();
  },
  
  /*
   * Returns the MojikumiTable with the index previous to the specified index.
 *
   * @param {MojikumiTable} obj The index of the MojikumiTable that follows the desired MojikumiTable.
   * @returns {MojikumiTable}
   */
  previousItem: function(obj) {
    return new MojikumiTable();
  },
  
  /*
   * Returns the MojikumiTable whose index follows the specified MojikumiTable in the collection.
 *
   * @param {MojikumiTable} obj The MojikumiTable whose index comes before the desired MojikumiTable.
   * @returns {MojikumiTable}
   */
  nextItem: function(obj) {
    return new MojikumiTable();
  },
  
  /*
   * Returns any MojikumiTable in the collection.
   * @returns {MojikumiTable}
   */
  anyItem: function() {
    return new MojikumiTable();
  },
  
  /*
   * Returns every MojikumiTable in the collection.
   * @returns {MojikumiTable}
   */
  everyItem: function() {
    return new MojikumiTable();
  },
  
  /*
   * Generates a string which, if executed, will return the MojikumiTable.
   * @returns {String}
   */
  toSource: function() {
    return new String();
  },
  
  /*
   * Returns the MojikumiTable with the specified index.
 *
   * @param {Number} index The index.
   * @returns {MojikumiTable}
   */
  []: function(index) {
    return new MojikumiTable();
  },
  
};
