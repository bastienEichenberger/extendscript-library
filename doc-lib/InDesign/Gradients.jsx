/*
 * A collection of gradients.
 */
var Gradients = {
  /*
   * The number of objects in the collection.
   * @type {Number}
   */
  length: undefined,
  
  /*
   * Creates a new Gradient.
 *
   * @param {Object} [withProperties] Initial values for properties of the new Gradient 
   * @returns {Gradient}
   */
  add: function(withProperties) {
    return new Gradient();
  },
  
  /*
   * Displays the number of elements in the Gradient.
   * @returns {Number}
   */
  count: function() {
    return new Number();
  },
  
  /*
   * Returns the Gradient with the specified index or name.
 *
   * @param {Mixed} index The index or name. Can accept: Long Integer or String.
   * @returns {Gradient}
   */
  item: function(index) {
    return new Gradient();
  },
  
  /*
   * Returns the Gradient with the specified name.
 *
   * @param {String} name The name.
   * @returns {Gradient}
   */
  itemByName: function(name) {
    return new Gradient();
  },
  
  /*
   * Returns the Gradient with the specified ID.
 *
   * @param {Number} id The ID.
   * @returns {Gradient}
   */
  itemByID: function(id) {
    return new Gradient();
  },
  
  /*
   * Returns the Gradients within the specified range.
 *
   * @param {Mixed} from The Gradient, index, or name at the beginning of the range. Can accept: Gradient, Long Integer or String.
   * @param {Mixed} to The Gradient, index, or name at the end of the range. Can accept: Gradient, Long Integer or String.
   * @returns {Gradient}
   */
  itemByRange: function(from, to) {
    return new Gradient();
  },
  
  /*
   * Returns the first Gradient in the collection.
   * @returns {Gradient}
   */
  firstItem: function() {
    return new Gradient();
  },
  
  /*
   * Returns the last Gradient in the collection.
   * @returns {Gradient}
   */
  lastItem: function() {
    return new Gradient();
  },
  
  /*
   * Returns the middle Gradient in the collection.
   * @returns {Gradient}
   */
  middleItem: function() {
    return new Gradient();
  },
  
  /*
   * Returns the Gradient with the index previous to the specified index.
 *
   * @param {Gradient} obj The index of the Gradient that follows the desired Gradient.
   * @returns {Gradient}
   */
  previousItem: function(obj) {
    return new Gradient();
  },
  
  /*
   * Returns the Gradient whose index follows the specified Gradient in the collection.
 *
   * @param {Gradient} obj The Gradient whose index comes before the desired Gradient.
   * @returns {Gradient}
   */
  nextItem: function(obj) {
    return new Gradient();
  },
  
  /*
   * Returns any Gradient in the collection.
   * @returns {Gradient}
   */
  anyItem: function() {
    return new Gradient();
  },
  
  /*
   * Returns every Gradient in the collection.
   * @returns {Gradient}
   */
  everyItem: function() {
    return new Gradient();
  },
  
  /*
   * Generates a string which, if executed, will return the Gradient.
   * @returns {String}
   */
  toSource: function() {
    return new String();
  },
  
  /*
   * Returns the Gradient with the specified index.
 *
   * @param {Number} index The index.
   * @returns {Gradient}
   */
  []: function(index) {
    return new Gradient();
  },
  
};
