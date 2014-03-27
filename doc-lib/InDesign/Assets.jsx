/*
 * A collection of object library assets.
 */
var Assets = {
  /*
   * The number of objects in the collection.
   * @type {Number}
   */
  length: undefined,
  
  /*
   * Displays the number of elements in the Asset.
   * @returns {Number}
   */
  count: function() {
    return new Number();
  },
  
  /*
   * Returns the Asset with the specified index or name.
 *
   * @param {Mixed} index The index or name. Can accept: Long Integer or String.
   * @returns {Asset}
   */
  item: function(index) {
    return new Asset();
  },
  
  /*
   * Returns the Asset with the specified name.
 *
   * @param {String} name The name.
   * @returns {Asset}
   */
  itemByName: function(name) {
    return new Asset();
  },
  
  /*
   * Returns the Asset with the specified ID.
 *
   * @param {Number} id The ID.
   * @returns {Asset}
   */
  itemByID: function(id) {
    return new Asset();
  },
  
  /*
   * Returns the Assets within the specified range.
 *
   * @param {Mixed} from The Asset, index, or name at the beginning of the range. Can accept: Asset, Long Integer or String.
   * @param {Mixed} to The Asset, index, or name at the end of the range. Can accept: Asset, Long Integer or String.
   * @returns {Asset}
   */
  itemByRange: function(from, to) {
    return new Asset();
  },
  
  /*
   * Returns the first Asset in the collection.
   * @returns {Asset}
   */
  firstItem: function() {
    return new Asset();
  },
  
  /*
   * Returns the last Asset in the collection.
   * @returns {Asset}
   */
  lastItem: function() {
    return new Asset();
  },
  
  /*
   * Returns the middle Asset in the collection.
   * @returns {Asset}
   */
  middleItem: function() {
    return new Asset();
  },
  
  /*
   * Returns the Asset with the index previous to the specified index.
 *
   * @param {Asset} obj The index of the Asset that follows the desired Asset.
   * @returns {Asset}
   */
  previousItem: function(obj) {
    return new Asset();
  },
  
  /*
   * Returns the Asset whose index follows the specified Asset in the collection.
 *
   * @param {Asset} obj The Asset whose index comes before the desired Asset.
   * @returns {Asset}
   */
  nextItem: function(obj) {
    return new Asset();
  },
  
  /*
   * Returns any Asset in the collection.
   * @returns {Asset}
   */
  anyItem: function() {
    return new Asset();
  },
  
  /*
   * Returns every Asset in the collection.
   * @returns {Asset}
   */
  everyItem: function() {
    return new Asset();
  },
  
  /*
   * Generates a string which, if executed, will return the Asset.
   * @returns {String}
   */
  toSource: function() {
    return new String();
  },
  
  /*
   * Returns the Asset with the specified index.
 *
   * @param {Number} index The index.
   * @returns {Asset}
   */
  []: function(index) {
    return new Asset();
  },
  
};
