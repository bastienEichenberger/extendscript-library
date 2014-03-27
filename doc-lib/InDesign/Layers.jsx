/*
 * A collection of layers.
 */
var Layers = {
  /*
   * The number of objects in the collection.
   * @type {Number}
   */
  length: undefined,
  
  /*
   * Creates a new Layer.
 *
   * @param {Object} [withProperties] Initial values for properties of the new Layer 
   * @returns {Layer}
   */
  add: function(withProperties) {
    return new Layer();
  },
  
  /*
   * Displays the number of elements in the Layer.
   * @returns {Number}
   */
  count: function() {
    return new Number();
  },
  
  /*
   * Returns the Layer with the specified index or name.
 *
   * @param {Mixed} index The index or name. Can accept: Long Integer or String.
   * @returns {Layer}
   */
  item: function(index) {
    return new Layer();
  },
  
  /*
   * Returns the Layer with the specified name.
 *
   * @param {String} name The name.
   * @returns {Layer}
   */
  itemByName: function(name) {
    return new Layer();
  },
  
  /*
   * Returns the Layer with the specified ID.
 *
   * @param {Number} id The ID.
   * @returns {Layer}
   */
  itemByID: function(id) {
    return new Layer();
  },
  
  /*
   * Returns the Layers within the specified range.
 *
   * @param {Mixed} from The Layer, index, or name at the beginning of the range. Can accept: Layer, Long Integer or String.
   * @param {Mixed} to The Layer, index, or name at the end of the range. Can accept: Layer, Long Integer or String.
   * @returns {Layer}
   */
  itemByRange: function(from, to) {
    return new Layer();
  },
  
  /*
   * Returns the first Layer in the collection.
   * @returns {Layer}
   */
  firstItem: function() {
    return new Layer();
  },
  
  /*
   * Returns the last Layer in the collection.
   * @returns {Layer}
   */
  lastItem: function() {
    return new Layer();
  },
  
  /*
   * Returns the middle Layer in the collection.
   * @returns {Layer}
   */
  middleItem: function() {
    return new Layer();
  },
  
  /*
   * Returns the Layer with the index previous to the specified index.
 *
   * @param {Layer} obj The index of the Layer that follows the desired Layer.
   * @returns {Layer}
   */
  previousItem: function(obj) {
    return new Layer();
  },
  
  /*
   * Returns the Layer whose index follows the specified Layer in the collection.
 *
   * @param {Layer} obj The Layer whose index comes before the desired Layer.
   * @returns {Layer}
   */
  nextItem: function(obj) {
    return new Layer();
  },
  
  /*
   * Returns any Layer in the collection.
   * @returns {Layer}
   */
  anyItem: function() {
    return new Layer();
  },
  
  /*
   * Returns every Layer in the collection.
   * @returns {Layer}
   */
  everyItem: function() {
    return new Layer();
  },
  
  /*
   * Generates a string which, if executed, will return the Layer.
   * @returns {String}
   */
  toSource: function() {
    return new String();
  },
  
  /*
   * Returns the Layer with the specified index.
 *
   * @param {Number} index The index.
   * @returns {Layer}
   */
  []: function(index) {
    return new Layer();
  },
  
};
