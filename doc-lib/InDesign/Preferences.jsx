/*
 * A collection of preferences objects.
 */
var Preferences = {
  /*
   * The number of objects in the collection.
   * @type {Number}
   */
  length: undefined,
  
  /*
   * Displays the number of elements in the Preference.
   * @returns {Number}
   */
  count: function() {
    return new Number();
  },
  
  /*
   * Returns the Preference with the specified index or name.
 *
   * @param {Mixed} index The index or name. Can accept: Long Integer or String.
   * @returns {Preference}
   */
  item: function(index) {
    return new Preference();
  },
  
  /*
   * Returns the Preferences within the specified range.
 *
   * @param {Mixed} from The Preference, index, or name at the beginning of the range. Can accept: Preference, Long Integer or String.
   * @param {Mixed} to The Preference, index, or name at the end of the range. Can accept: Preference, Long Integer or String.
   * @returns {Preference}
   */
  itemByRange: function(from, to) {
    return new Preference();
  },
  
  /*
   * Returns the first Preference in the collection.
   * @returns {Preference}
   */
  firstItem: function() {
    return new Preference();
  },
  
  /*
   * Returns the last Preference in the collection.
   * @returns {Preference}
   */
  lastItem: function() {
    return new Preference();
  },
  
  /*
   * Returns the middle Preference in the collection.
   * @returns {Preference}
   */
  middleItem: function() {
    return new Preference();
  },
  
  /*
   * Returns the Preference with the index previous to the specified index.
 *
   * @param {Preference} obj The index of the Preference that follows the desired Preference.
   * @returns {Preference}
   */
  previousItem: function(obj) {
    return new Preference();
  },
  
  /*
   * Returns the Preference whose index follows the specified Preference in the collection.
 *
   * @param {Preference} obj The Preference whose index comes before the desired Preference.
   * @returns {Preference}
   */
  nextItem: function(obj) {
    return new Preference();
  },
  
  /*
   * Returns any Preference in the collection.
   * @returns {Preference}
   */
  anyItem: function() {
    return new Preference();
  },
  
  /*
   * Returns every Preference in the collection.
   * @returns {Preference}
   */
  everyItem: function() {
    return new Preference();
  },
  
  /*
   * Generates a string which, if executed, will return the Preference.
   * @returns {String}
   */
  toSource: function() {
    return new String();
  },
  
  /*
   * Returns the Preference with the specified index.
 *
   * @param {Number} index The index.
   * @returns {Preference}
   */
  []: function(index) {
    return new Preference();
  },
  
};
