/*
 * A collection of multi-state objects.
 */
var MultiStateObjects = {
  /*
   * The number of objects in the collection.
   * @type {Number}
   */
  length: undefined,
  
  /*
   * Displays the number of elements in the MultiStateObject.
   * @returns {Number}
   */
  count: function() {
    return new Number();
  },
  
  /*
   * Creates a new MultiStateObject
 *
   * @param {Layer} [layer] The layer on which to create the MultiStateObject. 
   * @param {LocationOptions} [at] The location at which to insert the MultiStateObject relative to the reference object or within the container object. 
   * @param {Mixed} [reference] The reference object. Note: Required when the at parameter is before or after. Can accept: Document, Spread, MasterSpread, Page, Layer or PageItem. 
   * @param {Object} [withProperties] Initial values for properties of the new MultiStateObject 
   * @returns {MultiStateObject}
   */
  add: function(layer, at, reference, withProperties) {
    return new MultiStateObject();
  },
  
  /*
   * Returns the MultiStateObject with the specified index or name.
 *
   * @param {Mixed} index The index or name. Can accept: Long Integer or String.
   * @returns {MultiStateObject}
   */
  item: function(index) {
    return new MultiStateObject();
  },
  
  /*
   * Returns the MultiStateObject with the specified name.
 *
   * @param {String} name The name.
   * @returns {MultiStateObject}
   */
  itemByName: function(name) {
    return new MultiStateObject();
  },
  
  /*
   * Returns the MultiStateObject with the specified ID.
 *
   * @param {Number} id The ID.
   * @returns {MultiStateObject}
   */
  itemByID: function(id) {
    return new MultiStateObject();
  },
  
  /*
   * Returns the MultiStateObjects within the specified range.
 *
   * @param {Mixed} from The MultiStateObject, index, or name at the beginning of the range. Can accept: MultiStateObject, Long Integer or String.
   * @param {Mixed} to The MultiStateObject, index, or name at the end of the range. Can accept: MultiStateObject, Long Integer or String.
   * @returns {MultiStateObject}
   */
  itemByRange: function(from, to) {
    return new MultiStateObject();
  },
  
  /*
   * Returns the first MultiStateObject in the collection.
   * @returns {MultiStateObject}
   */
  firstItem: function() {
    return new MultiStateObject();
  },
  
  /*
   * Returns the last MultiStateObject in the collection.
   * @returns {MultiStateObject}
   */
  lastItem: function() {
    return new MultiStateObject();
  },
  
  /*
   * Returns the middle MultiStateObject in the collection.
   * @returns {MultiStateObject}
   */
  middleItem: function() {
    return new MultiStateObject();
  },
  
  /*
   * Returns the MultiStateObject with the index previous to the specified index.
 *
   * @param {MultiStateObject} obj The index of the MultiStateObject that follows the desired MultiStateObject.
   * @returns {MultiStateObject}
   */
  previousItem: function(obj) {
    return new MultiStateObject();
  },
  
  /*
   * Returns the MultiStateObject whose index follows the specified MultiStateObject in the collection.
 *
   * @param {MultiStateObject} obj The MultiStateObject whose index comes before the desired MultiStateObject.
   * @returns {MultiStateObject}
   */
  nextItem: function(obj) {
    return new MultiStateObject();
  },
  
  /*
   * Returns any MultiStateObject in the collection.
   * @returns {MultiStateObject}
   */
  anyItem: function() {
    return new MultiStateObject();
  },
  
  /*
   * Returns every MultiStateObject in the collection.
   * @returns {MultiStateObject}
   */
  everyItem: function() {
    return new MultiStateObject();
  },
  
  /*
   * Generates a string which, if executed, will return the MultiStateObject.
   * @returns {String}
   */
  toSource: function() {
    return new String();
  },
  
  /*
   * Returns the MultiStateObject with the specified index.
 *
   * @param {Number} index The index.
   * @returns {MultiStateObject}
   */
  []: function(index) {
    return new MultiStateObject();
  },
  
};
