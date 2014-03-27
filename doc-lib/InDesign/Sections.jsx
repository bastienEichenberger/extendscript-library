/*
 * A collection of sections.
 */
var Sections = {
  /*
   * The number of objects in the collection.
   * @type {Number}
   */
  length: undefined,
  
  /*
   * Displays the number of elements in the Section.
   * @returns {Number}
   */
  count: function() {
    return new Number();
  },
  
  /*
   * Creates a new section.
 *
   * @param {Page} [reference] The page on which the section begins. 
   * @param {Object} [withProperties] Initial values for properties of the new Section 
   * @returns {Section}
   */
  add: function(reference, withProperties) {
    return new Section();
  },
  
  /*
   * Returns the Section with the specified index or name.
 *
   * @param {Mixed} index The index or name. Can accept: Long Integer or String.
   * @returns {Section}
   */
  item: function(index) {
    return new Section();
  },
  
  /*
   * Returns the Section with the specified name.
 *
   * @param {String} name The name.
   * @returns {Section}
   */
  itemByName: function(name) {
    return new Section();
  },
  
  /*
   * Returns the Section with the specified ID.
 *
   * @param {Number} id The ID.
   * @returns {Section}
   */
  itemByID: function(id) {
    return new Section();
  },
  
  /*
   * Returns the Sections within the specified range.
 *
   * @param {Mixed} from The Section, index, or name at the beginning of the range. Can accept: Section, Long Integer or String.
   * @param {Mixed} to The Section, index, or name at the end of the range. Can accept: Section, Long Integer or String.
   * @returns {Section}
   */
  itemByRange: function(from, to) {
    return new Section();
  },
  
  /*
   * Returns the first Section in the collection.
   * @returns {Section}
   */
  firstItem: function() {
    return new Section();
  },
  
  /*
   * Returns the last Section in the collection.
   * @returns {Section}
   */
  lastItem: function() {
    return new Section();
  },
  
  /*
   * Returns the middle Section in the collection.
   * @returns {Section}
   */
  middleItem: function() {
    return new Section();
  },
  
  /*
   * Returns the Section with the index previous to the specified index.
 *
   * @param {Section} obj The index of the Section that follows the desired Section.
   * @returns {Section}
   */
  previousItem: function(obj) {
    return new Section();
  },
  
  /*
   * Returns the Section whose index follows the specified Section in the collection.
 *
   * @param {Section} obj The Section whose index comes before the desired Section.
   * @returns {Section}
   */
  nextItem: function(obj) {
    return new Section();
  },
  
  /*
   * Returns any Section in the collection.
   * @returns {Section}
   */
  anyItem: function() {
    return new Section();
  },
  
  /*
   * Returns every Section in the collection.
   * @returns {Section}
   */
  everyItem: function() {
    return new Section();
  },
  
  /*
   * Generates a string which, if executed, will return the Section.
   * @returns {String}
   */
  toSource: function() {
    return new String();
  },
  
  /*
   * Returns the Section with the specified index.
 *
   * @param {Number} index The index.
   * @returns {Section}
   */
  []: function(index) {
    return new Section();
  },
  
};
