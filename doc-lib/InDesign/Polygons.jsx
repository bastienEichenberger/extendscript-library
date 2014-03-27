/*
 * A collection of polygons.
 */
var Polygons = {
  /*
   * The number of objects in the collection.
   * @type {Number}
   */
  length: undefined,
  
  /*
   * Creates a new Polygon.
 *
   * @param {Layer} [layer] The layer on which to create the Polygon. 
   * @param {Number} [numberOfSides] The number of sides to give the Polygon. (Range: 3 to 100) 
   * @param {Number} [insetPercentage] The star inset percentage applied to the Polygon. 
   * @param {LocationOptions} [at] The location at which to insert the Polygon relative to the reference object or within the container object. 
   * @param {Mixed} [reference] The reference object. Note: Required when the at parameter is before or after. Can accept: Document, Spread, MasterSpread, Page, Layer or PageItem. 
   * @param {Object} [withProperties] Initial values for properties of the new Polygon 
   * @returns {Polygon}
   */
  add: function(layer, numberOfSides, insetPercentage, at, reference, withProperties) {
    return new Polygon();
  },
  
  /*
   * Displays the number of elements in the Polygon.
   * @returns {Number}
   */
  count: function() {
    return new Number();
  },
  
  /*
   * Returns the Polygon with the specified index or name.
 *
   * @param {Mixed} index The index or name. Can accept: Long Integer or String.
   * @returns {Polygon}
   */
  item: function(index) {
    return new Polygon();
  },
  
  /*
   * Returns the Polygon with the specified name.
 *
   * @param {String} name The name.
   * @returns {Polygon}
   */
  itemByName: function(name) {
    return new Polygon();
  },
  
  /*
   * Returns the Polygon with the specified ID.
 *
   * @param {Number} id The ID.
   * @returns {Polygon}
   */
  itemByID: function(id) {
    return new Polygon();
  },
  
  /*
   * Returns the Polygons within the specified range.
 *
   * @param {Mixed} from The Polygon, index, or name at the beginning of the range. Can accept: Polygon, Long Integer or String.
   * @param {Mixed} to The Polygon, index, or name at the end of the range. Can accept: Polygon, Long Integer or String.
   * @returns {Polygon}
   */
  itemByRange: function(from, to) {
    return new Polygon();
  },
  
  /*
   * Returns the first Polygon in the collection.
   * @returns {Polygon}
   */
  firstItem: function() {
    return new Polygon();
  },
  
  /*
   * Returns the last Polygon in the collection.
   * @returns {Polygon}
   */
  lastItem: function() {
    return new Polygon();
  },
  
  /*
   * Returns the middle Polygon in the collection.
   * @returns {Polygon}
   */
  middleItem: function() {
    return new Polygon();
  },
  
  /*
   * Returns the Polygon with the index previous to the specified index.
 *
   * @param {Polygon} obj The index of the Polygon that follows the desired Polygon.
   * @returns {Polygon}
   */
  previousItem: function(obj) {
    return new Polygon();
  },
  
  /*
   * Returns the Polygon whose index follows the specified Polygon in the collection.
 *
   * @param {Polygon} obj The Polygon whose index comes before the desired Polygon.
   * @returns {Polygon}
   */
  nextItem: function(obj) {
    return new Polygon();
  },
  
  /*
   * Returns any Polygon in the collection.
   * @returns {Polygon}
   */
  anyItem: function() {
    return new Polygon();
  },
  
  /*
   * Returns every Polygon in the collection.
   * @returns {Polygon}
   */
  everyItem: function() {
    return new Polygon();
  },
  
  /*
   * Generates a string which, if executed, will return the Polygon.
   * @returns {String}
   */
  toSource: function() {
    return new String();
  },
  
  /*
   * Returns the Polygon with the specified index.
 *
   * @param {Number} index The index.
   * @returns {Polygon}
   */
  []: function(index) {
    return new Polygon();
  },
  
};
