/*
 * A collection of assignments.
 */
var Assignments = {
  /*
   * The number of objects in the collection.
   * @type {Number}
   */
  length: undefined,
  
  /*
   * Creates a new assignment.
 *
   * @param {File} filePath The full path name of the new assignment.
   * @param {String} [versionComments] The comment for this version. 
   * @param {Boolean} [forceSave] If true, forcibly saves a version. 
   * @param {Object} [withProperties] Initial values for properties of the new Assignment 
   * @returns {Assignment}
   */
  add: function(filePath, versionComments, forceSave, withProperties) {
    return new Assignment();
  },
  
  /*
   * Displays the number of elements in the Assignment.
   * @returns {Number}
   */
  count: function() {
    return new Number();
  },
  
  /*
   * Returns the Assignment with the specified index or name.
 *
   * @param {Mixed} index The index or name. Can accept: Long Integer or String.
   * @returns {Assignment}
   */
  item: function(index) {
    return new Assignment();
  },
  
  /*
   * Returns the Assignment with the specified name.
 *
   * @param {String} name The name.
   * @returns {Assignment}
   */
  itemByName: function(name) {
    return new Assignment();
  },
  
  /*
   * Returns the Assignment with the specified ID.
 *
   * @param {Number} id The ID.
   * @returns {Assignment}
   */
  itemByID: function(id) {
    return new Assignment();
  },
  
  /*
   * Returns the Assignments within the specified range.
 *
   * @param {Mixed} from The Assignment, index, or name at the beginning of the range. Can accept: Assignment, Long Integer or String.
   * @param {Mixed} to The Assignment, index, or name at the end of the range. Can accept: Assignment, Long Integer or String.
   * @returns {Assignment}
   */
  itemByRange: function(from, to) {
    return new Assignment();
  },
  
  /*
   * Returns the first Assignment in the collection.
   * @returns {Assignment}
   */
  firstItem: function() {
    return new Assignment();
  },
  
  /*
   * Returns the last Assignment in the collection.
   * @returns {Assignment}
   */
  lastItem: function() {
    return new Assignment();
  },
  
  /*
   * Returns the middle Assignment in the collection.
   * @returns {Assignment}
   */
  middleItem: function() {
    return new Assignment();
  },
  
  /*
   * Returns the Assignment with the index previous to the specified index.
 *
   * @param {Assignment} obj The index of the Assignment that follows the desired Assignment.
   * @returns {Assignment}
   */
  previousItem: function(obj) {
    return new Assignment();
  },
  
  /*
   * Returns the Assignment whose index follows the specified Assignment in the collection.
 *
   * @param {Assignment} obj The Assignment whose index comes before the desired Assignment.
   * @returns {Assignment}
   */
  nextItem: function(obj) {
    return new Assignment();
  },
  
  /*
   * Returns any Assignment in the collection.
   * @returns {Assignment}
   */
  anyItem: function() {
    return new Assignment();
  },
  
  /*
   * Returns every Assignment in the collection.
   * @returns {Assignment}
   */
  everyItem: function() {
    return new Assignment();
  },
  
  /*
   * Generates a string which, if executed, will return the Assignment.
   * @returns {String}
   */
  toSource: function() {
    return new String();
  },
  
  /*
   * Returns the Assignment with the specified index.
 *
   * @param {Number} index The index.
   * @returns {Assignment}
   */
  []: function(index) {
    return new Assignment();
  },
  
};
