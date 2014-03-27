/*
 * A collection of graphic lines.
 */
var GraphicLines = {
  /*
   * The number of objects in the collection.
   * @type {Number}
   */
  length: undefined,
  
  /*
   * Creates a new GraphicLine
 *
   * @param {Layer} [layer] The layer on which to create the GraphicLine. 
   * @param {LocationOptions} [at] The location at which to insert the GraphicLine relative to the reference object or within the container object. 
   * @param {Mixed} [reference] The reference object. Note: Required when the at parameter is before or after. Can accept: Document, Spread, MasterSpread, Page, Layer or PageItem. 
   * @param {Object} [withProperties] Initial values for properties of the new GraphicLine 
   * @returns {GraphicLine}
   */
  add: function(layer, at, reference, withProperties) {
    return new GraphicLine();
  },
  
  /*
   * Displays the number of elements in the GraphicLine.
   * @returns {Number}
   */
  count: function() {
    return new Number();
  },
  
  /*
   * Returns the GraphicLine with the specified index or name.
 *
   * @param {Mixed} index The index or name. Can accept: Long Integer or String.
   * @returns {GraphicLine}
   */
  item: function(index) {
    return new GraphicLine();
  },
  
  /*
   * Returns the GraphicLine with the specified name.
 *
   * @param {String} name The name.
   * @returns {GraphicLine}
   */
  itemByName: function(name) {
    return new GraphicLine();
  },
  
  /*
   * Returns the GraphicLine with the specified ID.
 *
   * @param {Number} id The ID.
   * @returns {GraphicLine}
   */
  itemByID: function(id) {
    return new GraphicLine();
  },
  
  /*
   * Returns the GraphicLines within the specified range.
 *
   * @param {Mixed} from The GraphicLine, index, or name at the beginning of the range. Can accept: GraphicLine, Long Integer or String.
   * @param {Mixed} to The GraphicLine, index, or name at the end of the range. Can accept: GraphicLine, Long Integer or String.
   * @returns {GraphicLine}
   */
  itemByRange: function(from, to) {
    return new GraphicLine();
  },
  
  /*
   * Returns the first GraphicLine in the collection.
   * @returns {GraphicLine}
   */
  firstItem: function() {
    return new GraphicLine();
  },
  
  /*
   * Returns the last GraphicLine in the collection.
   * @returns {GraphicLine}
   */
  lastItem: function() {
    return new GraphicLine();
  },
  
  /*
   * Returns the middle GraphicLine in the collection.
   * @returns {GraphicLine}
   */
  middleItem: function() {
    return new GraphicLine();
  },
  
  /*
   * Returns the GraphicLine with the index previous to the specified index.
 *
   * @param {GraphicLine} obj The index of the GraphicLine that follows the desired GraphicLine.
   * @returns {GraphicLine}
   */
  previousItem: function(obj) {
    return new GraphicLine();
  },
  
  /*
   * Returns the GraphicLine whose index follows the specified GraphicLine in the collection.
 *
   * @param {GraphicLine} obj The GraphicLine whose index comes before the desired GraphicLine.
   * @returns {GraphicLine}
   */
  nextItem: function(obj) {
    return new GraphicLine();
  },
  
  /*
   * Returns any GraphicLine in the collection.
   * @returns {GraphicLine}
   */
  anyItem: function() {
    return new GraphicLine();
  },
  
  /*
   * Returns every GraphicLine in the collection.
   * @returns {GraphicLine}
   */
  everyItem: function() {
    return new GraphicLine();
  },
  
  /*
   * Generates a string which, if executed, will return the GraphicLine.
   * @returns {String}
   */
  toSource: function() {
    return new String();
  },
  
  /*
   * Returns the GraphicLine with the specified index.
 *
   * @param {Number} index The index.
   * @returns {GraphicLine}
   */
  []: function(index) {
    return new GraphicLine();
  },
  
};
