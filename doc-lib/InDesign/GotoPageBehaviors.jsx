/*
 * A collection of go to page behavior objects.
 */
var GotoPageBehaviors = {
  /*
   * The number of objects in the collection.
   * @type {Number}
   */
  length: undefined,
  
  /*
   * Displays the number of elements in the GotoPageBehavior.
   * @returns {Number}
   */
  count: function() {
    return new Number();
  },
  
  /*
   * Creates a new GotoPageBehavior.
 *
   * @param {Object} [withProperties] Initial values for properties of the new GotoPageBehavior 
   * @returns {GotoPageBehavior}
   */
  add: function(withProperties) {
    return new GotoPageBehavior();
  },
  
  /*
   * Returns the GotoPageBehavior with the specified index or name.
 *
   * @param {Mixed} index The index or name. Can accept: Long Integer or String.
   * @returns {GotoPageBehavior}
   */
  item: function(index) {
    return new GotoPageBehavior();
  },
  
  /*
   * Returns the GotoPageBehavior with the specified name.
 *
   * @param {String} name The name.
   * @returns {GotoPageBehavior}
   */
  itemByName: function(name) {
    return new GotoPageBehavior();
  },
  
  /*
   * Returns the GotoPageBehavior with the specified ID.
 *
   * @param {Number} id The ID.
   * @returns {GotoPageBehavior}
   */
  itemByID: function(id) {
    return new GotoPageBehavior();
  },
  
  /*
   * Returns the GotoPageBehaviors within the specified range.
 *
   * @param {Mixed} from The GotoPageBehavior, index, or name at the beginning of the range. Can accept: GotoPageBehavior, Long Integer or String.
   * @param {Mixed} to The GotoPageBehavior, index, or name at the end of the range. Can accept: GotoPageBehavior, Long Integer or String.
   * @returns {GotoPageBehavior}
   */
  itemByRange: function(from, to) {
    return new GotoPageBehavior();
  },
  
  /*
   * Returns the first GotoPageBehavior in the collection.
   * @returns {GotoPageBehavior}
   */
  firstItem: function() {
    return new GotoPageBehavior();
  },
  
  /*
   * Returns the last GotoPageBehavior in the collection.
   * @returns {GotoPageBehavior}
   */
  lastItem: function() {
    return new GotoPageBehavior();
  },
  
  /*
   * Returns the middle GotoPageBehavior in the collection.
   * @returns {GotoPageBehavior}
   */
  middleItem: function() {
    return new GotoPageBehavior();
  },
  
  /*
   * Returns the GotoPageBehavior with the index previous to the specified index.
 *
   * @param {GotoPageBehavior} obj The index of the GotoPageBehavior that follows the desired GotoPageBehavior.
   * @returns {GotoPageBehavior}
   */
  previousItem: function(obj) {
    return new GotoPageBehavior();
  },
  
  /*
   * Returns the GotoPageBehavior whose index follows the specified GotoPageBehavior in the collection.
 *
   * @param {GotoPageBehavior} obj The GotoPageBehavior whose index comes before the desired GotoPageBehavior.
   * @returns {GotoPageBehavior}
   */
  nextItem: function(obj) {
    return new GotoPageBehavior();
  },
  
  /*
   * Returns any GotoPageBehavior in the collection.
   * @returns {GotoPageBehavior}
   */
  anyItem: function() {
    return new GotoPageBehavior();
  },
  
  /*
   * Returns every GotoPageBehavior in the collection.
   * @returns {GotoPageBehavior}
   */
  everyItem: function() {
    return new GotoPageBehavior();
  },
  
  /*
   * Generates a string which, if executed, will return the GotoPageBehavior.
   * @returns {String}
   */
  toSource: function() {
    return new String();
  },
  
  /*
   * Returns the GotoPageBehavior with the specified index.
 *
   * @param {Number} index The index.
   * @returns {GotoPageBehavior}
   */
  []: function(index) {
    return new GotoPageBehavior();
  },
  
};
