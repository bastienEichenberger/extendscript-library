/*
 * A collection of tints.
 */
var Tints = {
  /*
   * The number of objects in the collection.
   * @type {Number}
   */
  length: undefined,
  
  /*
   * Displays the number of elements in the Tint.
   * @returns {Number}
   */
  count: function() {
    return new Number();
  },
  
  /*
   * Creates a new tint swatch.
 *
   * @param {Color} baseColor The color that the tint is based upon.
   * @param {Object} [withProperties] Initial values for properties of the new Tint 
   * @returns {Tint}
   */
  add: function(baseColor, withProperties) {
    return new Tint();
  },
  
  /*
   * Returns the Tint with the specified index or name.
 *
   * @param {Mixed} index The index or name. Can accept: Long Integer or String.
   * @returns {Tint}
   */
  item: function(index) {
    return new Tint();
  },
  
  /*
   * Returns the Tint with the specified name.
 *
   * @param {String} name The name.
   * @returns {Tint}
   */
  itemByName: function(name) {
    return new Tint();
  },
  
  /*
   * Returns the Tint with the specified ID.
 *
   * @param {Number} id The ID.
   * @returns {Tint}
   */
  itemByID: function(id) {
    return new Tint();
  },
  
  /*
   * Returns the Tints within the specified range.
 *
   * @param {Mixed} from The Tint, index, or name at the beginning of the range. Can accept: Tint, Long Integer or String.
   * @param {Mixed} to The Tint, index, or name at the end of the range. Can accept: Tint, Long Integer or String.
   * @returns {Tint}
   */
  itemByRange: function(from, to) {
    return new Tint();
  },
  
  /*
   * Returns the first Tint in the collection.
   * @returns {Tint}
   */
  firstItem: function() {
    return new Tint();
  },
  
  /*
   * Returns the last Tint in the collection.
   * @returns {Tint}
   */
  lastItem: function() {
    return new Tint();
  },
  
  /*
   * Returns the middle Tint in the collection.
   * @returns {Tint}
   */
  middleItem: function() {
    return new Tint();
  },
  
  /*
   * Returns the Tint with the index previous to the specified index.
 *
   * @param {Tint} obj The index of the Tint that follows the desired Tint.
   * @returns {Tint}
   */
  previousItem: function(obj) {
    return new Tint();
  },
  
  /*
   * Returns the Tint whose index follows the specified Tint in the collection.
 *
   * @param {Tint} obj The Tint whose index comes before the desired Tint.
   * @returns {Tint}
   */
  nextItem: function(obj) {
    return new Tint();
  },
  
  /*
   * Returns any Tint in the collection.
   * @returns {Tint}
   */
  anyItem: function() {
    return new Tint();
  },
  
  /*
   * Returns every Tint in the collection.
   * @returns {Tint}
   */
  everyItem: function() {
    return new Tint();
  },
  
  /*
   * Generates a string which, if executed, will return the Tint.
   * @returns {String}
   */
  toSource: function() {
    return new String();
  },
  
  /*
   * Returns the Tint with the specified index.
 *
   * @param {Number} index The index.
   * @returns {Tint}
   */
  []: function(index) {
    return new Tint();
  },
  
};
