/*
 * A collection of dropdowns.
 */
var Dropdowns = {
  /*
   * The number of objects in the collection.
   * @type {Number}
   */
  length: undefined,
  
  /*
   * Creates a new Dropdown.
 *
   * @param {Object} [withProperties] Initial values for properties of the new Dropdown 
   * @returns {Dropdown}
   */
  add: function(withProperties) {
    return new Dropdown();
  },
  
  /*
   * Displays the number of elements in the Dropdown.
   * @returns {Number}
   */
  count: function() {
    return new Number();
  },
  
  /*
   * Returns the Dropdown with the specified index or name.
 *
   * @param {Mixed} index The index or name. Can accept: Long Integer or String.
   * @returns {Dropdown}
   */
  item: function(index) {
    return new Dropdown();
  },
  
  /*
   * Returns the Dropdown with the specified ID.
 *
   * @param {Number} id The ID.
   * @returns {Dropdown}
   */
  itemByID: function(id) {
    return new Dropdown();
  },
  
  /*
   * Returns the Dropdowns within the specified range.
 *
   * @param {Mixed} from The Dropdown, index, or name at the beginning of the range. Can accept: Dropdown, Long Integer or String.
   * @param {Mixed} to The Dropdown, index, or name at the end of the range. Can accept: Dropdown, Long Integer or String.
   * @returns {Dropdown}
   */
  itemByRange: function(from, to) {
    return new Dropdown();
  },
  
  /*
   * Returns the first Dropdown in the collection.
   * @returns {Dropdown}
   */
  firstItem: function() {
    return new Dropdown();
  },
  
  /*
   * Returns the last Dropdown in the collection.
   * @returns {Dropdown}
   */
  lastItem: function() {
    return new Dropdown();
  },
  
  /*
   * Returns the middle Dropdown in the collection.
   * @returns {Dropdown}
   */
  middleItem: function() {
    return new Dropdown();
  },
  
  /*
   * Returns the Dropdown with the index previous to the specified index.
 *
   * @param {Dropdown} obj The index of the Dropdown that follows the desired Dropdown.
   * @returns {Dropdown}
   */
  previousItem: function(obj) {
    return new Dropdown();
  },
  
  /*
   * Returns the Dropdown whose index follows the specified Dropdown in the collection.
 *
   * @param {Dropdown} obj The Dropdown whose index comes before the desired Dropdown.
   * @returns {Dropdown}
   */
  nextItem: function(obj) {
    return new Dropdown();
  },
  
  /*
   * Returns any Dropdown in the collection.
   * @returns {Dropdown}
   */
  anyItem: function() {
    return new Dropdown();
  },
  
  /*
   * Returns every Dropdown in the collection.
   * @returns {Dropdown}
   */
  everyItem: function() {
    return new Dropdown();
  },
  
  /*
   * Generates a string which, if executed, will return the Dropdown.
   * @returns {String}
   */
  toSource: function() {
    return new String();
  },
  
  /*
   * Returns the Dropdown with the specified index.
 *
   * @param {Number} index The index.
   * @returns {Dropdown}
   */
  []: function(index) {
    return new Dropdown();
  },
  
};
