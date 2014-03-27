/*
 * A collection of ellipses.
 */
var Ovals = {
  /*
   * The number of objects in the collection.
   * @type {Number}
   */
  length: undefined,
  
  /*
   * Creates a new Oval
 *
   * @param {Layer} [layer] The layer on which to create the Oval. 
   * @param {LocationOptions} [at] The location at which to insert the Oval relative to the reference object or within the container object. 
   * @param {Mixed} [reference] The reference object. Note: Required when the at parameter is before or after. Can accept: Document, Spread, MasterSpread, Page, Layer or PageItem. 
   * @param {Object} [withProperties] Initial values for properties of the new Oval 
   * @returns {Oval}
   */
  add: function(layer, at, reference, withProperties) {
    return new Oval();
  },
  
  /*
   * Displays the number of elements in the Oval.
   * @returns {Number}
   */
  count: function() {
    return new Number();
  },
  
  /*
   * Returns the Oval with the specified index or name.
 *
   * @param {Mixed} index The index or name. Can accept: Long Integer or String.
   * @returns {Oval}
   */
  item: function(index) {
    return new Oval();
  },
  
  /*
   * Returns the Oval with the specified name.
 *
   * @param {String} name The name.
   * @returns {Oval}
   */
  itemByName: function(name) {
    return new Oval();
  },
  
  /*
   * Returns the Oval with the specified ID.
 *
   * @param {Number} id The ID.
   * @returns {Oval}
   */
  itemByID: function(id) {
    return new Oval();
  },
  
  /*
   * Returns the Ovals within the specified range.
 *
   * @param {Mixed} from The Oval, index, or name at the beginning of the range. Can accept: Oval, Long Integer or String.
   * @param {Mixed} to The Oval, index, or name at the end of the range. Can accept: Oval, Long Integer or String.
   * @returns {Oval}
   */
  itemByRange: function(from, to) {
    return new Oval();
  },
  
  /*
   * Returns the first Oval in the collection.
   * @returns {Oval}
   */
  firstItem: function() {
    return new Oval();
  },
  
  /*
   * Returns the last Oval in the collection.
   * @returns {Oval}
   */
  lastItem: function() {
    return new Oval();
  },
  
  /*
   * Returns the middle Oval in the collection.
   * @returns {Oval}
   */
  middleItem: function() {
    return new Oval();
  },
  
  /*
   * Returns the Oval with the index previous to the specified index.
 *
   * @param {Oval} obj The index of the Oval that follows the desired Oval.
   * @returns {Oval}
   */
  previousItem: function(obj) {
    return new Oval();
  },
  
  /*
   * Returns the Oval whose index follows the specified Oval in the collection.
 *
   * @param {Oval} obj The Oval whose index comes before the desired Oval.
   * @returns {Oval}
   */
  nextItem: function(obj) {
    return new Oval();
  },
  
  /*
   * Returns any Oval in the collection.
   * @returns {Oval}
   */
  anyItem: function() {
    return new Oval();
  },
  
  /*
   * Returns every Oval in the collection.
   * @returns {Oval}
   */
  everyItem: function() {
    return new Oval();
  },
  
  /*
   * Generates a string which, if executed, will return the Oval.
   * @returns {String}
   */
  toSource: function() {
    return new String();
  },
  
  /*
   * Returns the Oval with the specified index.
 *
   * @param {Number} index The index.
   * @returns {Oval}
   */
  []: function(index) {
    return new Oval();
  },
  
};
