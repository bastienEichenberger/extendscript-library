/*
 * A collection of spreads.
 */
var Spreads = {
  /*
   * The number of objects in the collection.
   * @type {Number}
   */
  length: undefined,
  
  /*
   * Displays the number of elements in the Spread.
   * @returns {Number}
   */
  count: function() {
    return new Number();
  },
  
  /*
   * Creates a new spread.
 *
   * @param {LocationOptions} [at] The location of the spread relative to the reference object or within the document.  
   * @param {Mixed} [reference] The reference object. Note: Required when the at parameter specifies before or after. Can accept: Spread or Document. 
   * @param {Object} [withProperties] Initial values for properties of the new Spread 
   * @returns {Spread}
   */
  add: function(at, reference, withProperties) {
    return new Spread();
  },
  
  /*
   * Returns the Spread with the specified index or name.
 *
   * @param {Mixed} index The index or name. Can accept: Long Integer or String.
   * @returns {Spread}
   */
  item: function(index) {
    return new Spread();
  },
  
  /*
   * Returns the Spread with the specified name.
 *
   * @param {String} name The name.
   * @returns {Spread}
   */
  itemByName: function(name) {
    return new Spread();
  },
  
  /*
   * Returns the Spread with the specified ID.
 *
   * @param {Number} id The ID.
   * @returns {Spread}
   */
  itemByID: function(id) {
    return new Spread();
  },
  
  /*
   * Returns the Spreads within the specified range.
 *
   * @param {Mixed} from The Spread, index, or name at the beginning of the range. Can accept: Spread, Long Integer or String.
   * @param {Mixed} to The Spread, index, or name at the end of the range. Can accept: Spread, Long Integer or String.
   * @returns {Spread}
   */
  itemByRange: function(from, to) {
    return new Spread();
  },
  
  /*
   * Returns the first Spread in the collection.
   * @returns {Spread}
   */
  firstItem: function() {
    return new Spread();
  },
  
  /*
   * Returns the last Spread in the collection.
   * @returns {Spread}
   */
  lastItem: function() {
    return new Spread();
  },
  
  /*
   * Returns the middle Spread in the collection.
   * @returns {Spread}
   */
  middleItem: function() {
    return new Spread();
  },
  
  /*
   * Returns the Spread with the index previous to the specified index.
 *
   * @param {Spread} obj The index of the Spread that follows the desired Spread.
   * @returns {Spread}
   */
  previousItem: function(obj) {
    return new Spread();
  },
  
  /*
   * Returns the Spread whose index follows the specified Spread in the collection.
 *
   * @param {Spread} obj The Spread whose index comes before the desired Spread.
   * @returns {Spread}
   */
  nextItem: function(obj) {
    return new Spread();
  },
  
  /*
   * Returns any Spread in the collection.
   * @returns {Spread}
   */
  anyItem: function() {
    return new Spread();
  },
  
  /*
   * Returns every Spread in the collection.
   * @returns {Spread}
   */
  everyItem: function() {
    return new Spread();
  },
  
  /*
   * Generates a string which, if executed, will return the Spread.
   * @returns {String}
   */
  toSource: function() {
    return new String();
  },
  
  /*
   * Returns the Spread with the specified index.
 *
   * @param {Number} index The index.
   * @returns {Spread}
   */
  []: function(index) {
    return new Spread();
  },
  
};
