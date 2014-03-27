/*
 * A collection of show/hide fields behavior objects.
 */
var ShowHideFieldsBehaviors = {
  /*
   * The number of objects in the collection.
   * @type {Number}
   */
  length: undefined,
  
  /*
   * Displays the number of elements in the ShowHideFieldsBehavior.
   * @returns {Number}
   */
  count: function() {
    return new Number();
  },
  
  /*
   * Creates a new ShowHideFieldsBehavior.
 *
   * @param {Object} [withProperties] Initial values for properties of the new ShowHideFieldsBehavior 
   * @returns {ShowHideFieldsBehavior}
   */
  add: function(withProperties) {
    return new ShowHideFieldsBehavior();
  },
  
  /*
   * Returns the ShowHideFieldsBehavior with the specified index or name.
 *
   * @param {Mixed} index The index or name. Can accept: Long Integer or String.
   * @returns {ShowHideFieldsBehavior}
   */
  item: function(index) {
    return new ShowHideFieldsBehavior();
  },
  
  /*
   * Returns the ShowHideFieldsBehavior with the specified name.
 *
   * @param {String} name The name.
   * @returns {ShowHideFieldsBehavior}
   */
  itemByName: function(name) {
    return new ShowHideFieldsBehavior();
  },
  
  /*
   * Returns the ShowHideFieldsBehavior with the specified ID.
 *
   * @param {Number} id The ID.
   * @returns {ShowHideFieldsBehavior}
   */
  itemByID: function(id) {
    return new ShowHideFieldsBehavior();
  },
  
  /*
   * Returns the ShowHideFieldsBehaviors within the specified range.
 *
   * @param {Mixed} from The ShowHideFieldsBehavior, index, or name at the beginning of the range. Can accept: ShowHideFieldsBehavior, Long Integer or String.
   * @param {Mixed} to The ShowHideFieldsBehavior, index, or name at the end of the range. Can accept: ShowHideFieldsBehavior, Long Integer or String.
   * @returns {ShowHideFieldsBehavior}
   */
  itemByRange: function(from, to) {
    return new ShowHideFieldsBehavior();
  },
  
  /*
   * Returns the first ShowHideFieldsBehavior in the collection.
   * @returns {ShowHideFieldsBehavior}
   */
  firstItem: function() {
    return new ShowHideFieldsBehavior();
  },
  
  /*
   * Returns the last ShowHideFieldsBehavior in the collection.
   * @returns {ShowHideFieldsBehavior}
   */
  lastItem: function() {
    return new ShowHideFieldsBehavior();
  },
  
  /*
   * Returns the middle ShowHideFieldsBehavior in the collection.
   * @returns {ShowHideFieldsBehavior}
   */
  middleItem: function() {
    return new ShowHideFieldsBehavior();
  },
  
  /*
   * Returns the ShowHideFieldsBehavior with the index previous to the specified index.
 *
   * @param {ShowHideFieldsBehavior} obj The index of the ShowHideFieldsBehavior that follows the desired ShowHideFieldsBehavior.
   * @returns {ShowHideFieldsBehavior}
   */
  previousItem: function(obj) {
    return new ShowHideFieldsBehavior();
  },
  
  /*
   * Returns the ShowHideFieldsBehavior whose index follows the specified ShowHideFieldsBehavior in the collection.
 *
   * @param {ShowHideFieldsBehavior} obj The ShowHideFieldsBehavior whose index comes before the desired ShowHideFieldsBehavior.
   * @returns {ShowHideFieldsBehavior}
   */
  nextItem: function(obj) {
    return new ShowHideFieldsBehavior();
  },
  
  /*
   * Returns any ShowHideFieldsBehavior in the collection.
   * @returns {ShowHideFieldsBehavior}
   */
  anyItem: function() {
    return new ShowHideFieldsBehavior();
  },
  
  /*
   * Returns every ShowHideFieldsBehavior in the collection.
   * @returns {ShowHideFieldsBehavior}
   */
  everyItem: function() {
    return new ShowHideFieldsBehavior();
  },
  
  /*
   * Generates a string which, if executed, will return the ShowHideFieldsBehavior.
   * @returns {String}
   */
  toSource: function() {
    return new String();
  },
  
  /*
   * Returns the ShowHideFieldsBehavior with the specified index.
 *
   * @param {Number} index The index.
   * @returns {ShowHideFieldsBehavior}
   */
  []: function(index) {
    return new ShowHideFieldsBehavior();
  },
  
};
