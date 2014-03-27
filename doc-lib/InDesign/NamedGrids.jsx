/*
 * A collection of named grids.
 */
var NamedGrids = {
  /*
   * The number of objects in the collection.
   * @type {Number}
   */
  length: undefined,
  
  /*
   * Creates a new NamedGrid.
 *
   * @param {Object} [withProperties] Initial values for properties of the new NamedGrid 
   * @returns {NamedGrid}
   */
  add: function(withProperties) {
    return new NamedGrid();
  },
  
  /*
   * Displays the number of elements in the NamedGrid.
   * @returns {Number}
   */
  count: function() {
    return new Number();
  },
  
  /*
   * Returns the NamedGrid with the specified index or name.
 *
   * @param {Mixed} index The index or name. Can accept: Long Integer or String.
   * @returns {NamedGrid}
   */
  item: function(index) {
    return new NamedGrid();
  },
  
  /*
   * Returns the NamedGrid with the specified name.
 *
   * @param {String} name The name.
   * @returns {NamedGrid}
   */
  itemByName: function(name) {
    return new NamedGrid();
  },
  
  /*
   * Returns the NamedGrid with the specified ID.
 *
   * @param {Number} id The ID.
   * @returns {NamedGrid}
   */
  itemByID: function(id) {
    return new NamedGrid();
  },
  
  /*
   * Returns the NamedGrids within the specified range.
 *
   * @param {Mixed} from The NamedGrid, index, or name at the beginning of the range. Can accept: NamedGrid, Long Integer or String.
   * @param {Mixed} to The NamedGrid, index, or name at the end of the range. Can accept: NamedGrid, Long Integer or String.
   * @returns {NamedGrid}
   */
  itemByRange: function(from, to) {
    return new NamedGrid();
  },
  
  /*
   * Returns the first NamedGrid in the collection.
   * @returns {NamedGrid}
   */
  firstItem: function() {
    return new NamedGrid();
  },
  
  /*
   * Returns the last NamedGrid in the collection.
   * @returns {NamedGrid}
   */
  lastItem: function() {
    return new NamedGrid();
  },
  
  /*
   * Returns the middle NamedGrid in the collection.
   * @returns {NamedGrid}
   */
  middleItem: function() {
    return new NamedGrid();
  },
  
  /*
   * Returns the NamedGrid with the index previous to the specified index.
 *
   * @param {NamedGrid} obj The index of the NamedGrid that follows the desired NamedGrid.
   * @returns {NamedGrid}
   */
  previousItem: function(obj) {
    return new NamedGrid();
  },
  
  /*
   * Returns the NamedGrid whose index follows the specified NamedGrid in the collection.
 *
   * @param {NamedGrid} obj The NamedGrid whose index comes before the desired NamedGrid.
   * @returns {NamedGrid}
   */
  nextItem: function(obj) {
    return new NamedGrid();
  },
  
  /*
   * Returns any NamedGrid in the collection.
   * @returns {NamedGrid}
   */
  anyItem: function() {
    return new NamedGrid();
  },
  
  /*
   * Returns every NamedGrid in the collection.
   * @returns {NamedGrid}
   */
  everyItem: function() {
    return new NamedGrid();
  },
  
  /*
   * Generates a string which, if executed, will return the NamedGrid.
   * @returns {String}
   */
  toSource: function() {
    return new String();
  },
  
  /*
   * Returns the NamedGrid with the specified index.
 *
   * @param {Number} index The index.
   * @returns {NamedGrid}
   */
  []: function(index) {
    return new NamedGrid();
  },
  
};
