/*
 * A collection of mixed inks.
 */
var MixedInks = {
  /*
   * The number of objects in the collection.
   * @type {Number}
   */
  length: undefined,
  
  /*
   * Displays the number of elements in the MixedInk.
   * @returns {Number}
   */
  count: function() {
    return new Number();
  },
  
  /*
   * Creates a new mixed ink swatch.
 *
   * @param {Mixed} inkList The inks to mix. Note: Must contain at least two process inks and one spot ink. Can accept: Array of Inks or MixedInkGroup.
   * @param {Number} inkPercentages The percent to use of each ink in the ink list. (Range: 0 to 100 for each ink)
   * @param {Object} [withProperties] Initial values for properties of the new MixedInk 
   * @returns {MixedInk}
   */
  add: function(inkList, inkPercentages, withProperties) {
    return new MixedInk();
  },
  
  /*
   * Returns the MixedInk with the specified index or name.
 *
   * @param {Mixed} index The index or name. Can accept: Long Integer or String.
   * @returns {MixedInk}
   */
  item: function(index) {
    return new MixedInk();
  },
  
  /*
   * Returns the MixedInk with the specified name.
 *
   * @param {String} name The name.
   * @returns {MixedInk}
   */
  itemByName: function(name) {
    return new MixedInk();
  },
  
  /*
   * Returns the MixedInk with the specified ID.
 *
   * @param {Number} id The ID.
   * @returns {MixedInk}
   */
  itemByID: function(id) {
    return new MixedInk();
  },
  
  /*
   * Returns the MixedInks within the specified range.
 *
   * @param {Mixed} from The MixedInk, index, or name at the beginning of the range. Can accept: MixedInk, Long Integer or String.
   * @param {Mixed} to The MixedInk, index, or name at the end of the range. Can accept: MixedInk, Long Integer or String.
   * @returns {MixedInk}
   */
  itemByRange: function(from, to) {
    return new MixedInk();
  },
  
  /*
   * Returns the first MixedInk in the collection.
   * @returns {MixedInk}
   */
  firstItem: function() {
    return new MixedInk();
  },
  
  /*
   * Returns the last MixedInk in the collection.
   * @returns {MixedInk}
   */
  lastItem: function() {
    return new MixedInk();
  },
  
  /*
   * Returns the middle MixedInk in the collection.
   * @returns {MixedInk}
   */
  middleItem: function() {
    return new MixedInk();
  },
  
  /*
   * Returns the MixedInk with the index previous to the specified index.
 *
   * @param {MixedInk} obj The index of the MixedInk that follows the desired MixedInk.
   * @returns {MixedInk}
   */
  previousItem: function(obj) {
    return new MixedInk();
  },
  
  /*
   * Returns the MixedInk whose index follows the specified MixedInk in the collection.
 *
   * @param {MixedInk} obj The MixedInk whose index comes before the desired MixedInk.
   * @returns {MixedInk}
   */
  nextItem: function(obj) {
    return new MixedInk();
  },
  
  /*
   * Returns any MixedInk in the collection.
   * @returns {MixedInk}
   */
  anyItem: function() {
    return new MixedInk();
  },
  
  /*
   * Returns every MixedInk in the collection.
   * @returns {MixedInk}
   */
  everyItem: function() {
    return new MixedInk();
  },
  
  /*
   * Generates a string which, if executed, will return the MixedInk.
   * @returns {String}
   */
  toSource: function() {
    return new String();
  },
  
  /*
   * Returns the MixedInk with the specified index.
 *
   * @param {Number} index The index.
   * @returns {MixedInk}
   */
  []: function(index) {
    return new MixedInk();
  },
  
};
