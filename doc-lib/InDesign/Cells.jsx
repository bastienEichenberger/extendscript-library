/*
 * A collection of table cells.
 */
var Cells = {
  /*
   * The number of objects in the collection.
   * @type {Number}
   */
  length: undefined,
  
  /*
   * Displays the number of elements in the Cell.
   * @returns {Number}
   */
  count: function() {
    return new Number();
  },
  
  /*
   * Returns the Cell with the specified index or name.
 *
   * @param {Mixed} index The index or name. Can accept: Long Integer or String.
   * @returns {Cell}
   */
  item: function(index) {
    return new Cell();
  },
  
  /*
   * Returns the Cell with the specified name.
 *
   * @param {String} name The name.
   * @returns {Cell}
   */
  itemByName: function(name) {
    return new Cell();
  },
  
  /*
   * Returns the Cell with the specified ID.
 *
   * @param {Number} id The ID.
   * @returns {Cell}
   */
  itemByID: function(id) {
    return new Cell();
  },
  
  /*
   * Returns the Cells within the specified range.
 *
   * @param {Mixed} from The Cell, index, or name at the beginning of the range. Can accept: Cell, Long Integer or String.
   * @param {Mixed} to The Cell, index, or name at the end of the range. Can accept: Cell, Long Integer or String.
   * @returns {Cell}
   */
  itemByRange: function(from, to) {
    return new Cell();
  },
  
  /*
   * Returns the first Cell in the collection.
   * @returns {Cell}
   */
  firstItem: function() {
    return new Cell();
  },
  
  /*
   * Returns the last Cell in the collection.
   * @returns {Cell}
   */
  lastItem: function() {
    return new Cell();
  },
  
  /*
   * Returns the middle Cell in the collection.
   * @returns {Cell}
   */
  middleItem: function() {
    return new Cell();
  },
  
  /*
   * Returns the Cell with the index previous to the specified index.
 *
   * @param {Cell} obj The index of the Cell that follows the desired Cell.
   * @returns {Cell}
   */
  previousItem: function(obj) {
    return new Cell();
  },
  
  /*
   * Returns the Cell whose index follows the specified Cell in the collection.
 *
   * @param {Cell} obj The Cell whose index comes before the desired Cell.
   * @returns {Cell}
   */
  nextItem: function(obj) {
    return new Cell();
  },
  
  /*
   * Returns any Cell in the collection.
   * @returns {Cell}
   */
  anyItem: function() {
    return new Cell();
  },
  
  /*
   * Returns every Cell in the collection.
   * @returns {Cell}
   */
  everyItem: function() {
    return new Cell();
  },
  
  /*
   * Generates a string which, if executed, will return the Cell.
   * @returns {String}
   */
  toSource: function() {
    return new String();
  },
  
  /*
   * Returns the Cell with the specified index.
 *
   * @param {Number} index The index.
   * @returns {Cell}
   */
  []: function(index) {
    return new Cell();
  },
  
};
