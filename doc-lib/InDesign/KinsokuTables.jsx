/*
 * A collection of kinsoku tables.
 */
var KinsokuTables = {
  /*
   * The number of objects in the collection.
   * @type {Number}
   */
  length: undefined,
  
  /*
   * Creates a new kinsoku table.
 *
   * @param {String} name The name of the new kinsoku table.
   * @param {Object} [withProperties] Initial values for properties of the new KinsokuTable 
   * @returns {KinsokuTable}
   */
  add: function(name, withProperties) {
    return new KinsokuTable();
  },
  
  /*
   * Displays the number of elements in the KinsokuTable.
   * @returns {Number}
   */
  count: function() {
    return new Number();
  },
  
  /*
   * Returns the KinsokuTable with the specified index or name.
 *
   * @param {Mixed} index The index or name. Can accept: Long Integer or String.
   * @returns {KinsokuTable}
   */
  item: function(index) {
    return new KinsokuTable();
  },
  
  /*
   * Returns the KinsokuTable with the specified name.
 *
   * @param {String} name The name.
   * @returns {KinsokuTable}
   */
  itemByName: function(name) {
    return new KinsokuTable();
  },
  
  /*
   * Returns the KinsokuTable with the specified ID.
 *
   * @param {Number} id The ID.
   * @returns {KinsokuTable}
   */
  itemByID: function(id) {
    return new KinsokuTable();
  },
  
  /*
   * Returns the KinsokuTables within the specified range.
 *
   * @param {Mixed} from The KinsokuTable, index, or name at the beginning of the range. Can accept: KinsokuTable, Long Integer or String.
   * @param {Mixed} to The KinsokuTable, index, or name at the end of the range. Can accept: KinsokuTable, Long Integer or String.
   * @returns {KinsokuTable}
   */
  itemByRange: function(from, to) {
    return new KinsokuTable();
  },
  
  /*
   * Returns the first KinsokuTable in the collection.
   * @returns {KinsokuTable}
   */
  firstItem: function() {
    return new KinsokuTable();
  },
  
  /*
   * Returns the last KinsokuTable in the collection.
   * @returns {KinsokuTable}
   */
  lastItem: function() {
    return new KinsokuTable();
  },
  
  /*
   * Returns the middle KinsokuTable in the collection.
   * @returns {KinsokuTable}
   */
  middleItem: function() {
    return new KinsokuTable();
  },
  
  /*
   * Returns the KinsokuTable with the index previous to the specified index.
 *
   * @param {KinsokuTable} obj The index of the KinsokuTable that follows the desired KinsokuTable.
   * @returns {KinsokuTable}
   */
  previousItem: function(obj) {
    return new KinsokuTable();
  },
  
  /*
   * Returns the KinsokuTable whose index follows the specified KinsokuTable in the collection.
 *
   * @param {KinsokuTable} obj The KinsokuTable whose index comes before the desired KinsokuTable.
   * @returns {KinsokuTable}
   */
  nextItem: function(obj) {
    return new KinsokuTable();
  },
  
  /*
   * Returns any KinsokuTable in the collection.
   * @returns {KinsokuTable}
   */
  anyItem: function() {
    return new KinsokuTable();
  },
  
  /*
   * Returns every KinsokuTable in the collection.
   * @returns {KinsokuTable}
   */
  everyItem: function() {
    return new KinsokuTable();
  },
  
  /*
   * Generates a string which, if executed, will return the KinsokuTable.
   * @returns {String}
   */
  toSource: function() {
    return new String();
  },
  
  /*
   * Returns the KinsokuTable with the specified index.
 *
   * @param {Number} index The index.
   * @returns {KinsokuTable}
   */
  []: function(index) {
    return new KinsokuTable();
  },
  
};
