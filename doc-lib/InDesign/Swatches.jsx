/*
 * A collection of swatches.
 */
var Swatches = {
  /*
   * The number of objects in the collection.
   * @type {Number}
   */
  length: undefined,
  
  /*
   * Displays the number of elements in the Swatch.
   * @returns {Number}
   */
  count: function() {
    return new Number();
  },
  
  /*
   * Returns the Swatch with the specified index or name.
 *
   * @param {Mixed} index The index or name. Can accept: Long Integer or String.
   * @returns {Swatch}
   */
  item: function(index) {
    return new Swatch();
  },
  
  /*
   * Returns the Swatch with the specified name.
 *
   * @param {String} name The name.
   * @returns {Swatch}
   */
  itemByName: function(name) {
    return new Swatch();
  },
  
  /*
   * Returns the Swatch with the specified ID.
 *
   * @param {Number} id The ID.
   * @returns {Swatch}
   */
  itemByID: function(id) {
    return new Swatch();
  },
  
  /*
   * Returns the Swatches within the specified range.
 *
   * @param {Mixed} from The Swatch, index, or name at the beginning of the range. Can accept: Swatch, Long Integer or String.
   * @param {Mixed} to The Swatch, index, or name at the end of the range. Can accept: Swatch, Long Integer or String.
   * @returns {Swatch}
   */
  itemByRange: function(from, to) {
    return new Swatch();
  },
  
  /*
   * Returns the first Swatch in the collection.
   * @returns {Swatch}
   */
  firstItem: function() {
    return new Swatch();
  },
  
  /*
   * Returns the last Swatch in the collection.
   * @returns {Swatch}
   */
  lastItem: function() {
    return new Swatch();
  },
  
  /*
   * Returns the middle Swatch in the collection.
   * @returns {Swatch}
   */
  middleItem: function() {
    return new Swatch();
  },
  
  /*
   * Returns the Swatch with the index previous to the specified index.
 *
   * @param {Swatch} obj The index of the Swatch that follows the desired Swatch.
   * @returns {Swatch}
   */
  previousItem: function(obj) {
    return new Swatch();
  },
  
  /*
   * Returns the Swatch whose index follows the specified Swatch in the collection.
 *
   * @param {Swatch} obj The Swatch whose index comes before the desired Swatch.
   * @returns {Swatch}
   */
  nextItem: function(obj) {
    return new Swatch();
  },
  
  /*
   * Returns any Swatch in the collection.
   * @returns {Swatch}
   */
  anyItem: function() {
    return new Swatch();
  },
  
  /*
   * Returns every Swatch in the collection.
   * @returns {Swatch}
   */
  everyItem: function() {
    return new Swatch();
  },
  
  /*
   * Generates a string which, if executed, will return the Swatch.
   * @returns {String}
   */
  toSource: function() {
    return new String();
  },
  
  /*
   * Returns the Swatch with the specified index.
 *
   * @param {Number} index The index.
   * @returns {Swatch}
   */
  []: function(index) {
    return new Swatch();
  },
  
};
