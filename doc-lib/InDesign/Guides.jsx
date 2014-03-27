/*
 * A collection of guides.
 */
var Guides = {
  /*
   * The number of objects in the collection.
   * @type {Number}
   */
  length: undefined,
  
  /*
   * Creates a new guide.
 *
   * @param {Layer} [layer] The layer on which to create the guide. 
   * @param {Object} [withProperties] Initial values for properties of the new Guide 
   * @returns {Guide}
   */
  add: function(layer, withProperties) {
    return new Guide();
  },
  
  /*
   * Displays the number of elements in the Guide.
   * @returns {Number}
   */
  count: function() {
    return new Number();
  },
  
  /*
   * Returns the Guide with the specified index or name.
 *
   * @param {Mixed} index The index or name. Can accept: Long Integer or String.
   * @returns {Guide}
   */
  item: function(index) {
    return new Guide();
  },
  
  /*
   * Returns the Guide with the specified name.
 *
   * @param {String} name The name.
   * @returns {Guide}
   */
  itemByName: function(name) {
    return new Guide();
  },
  
  /*
   * Returns the Guide with the specified ID.
 *
   * @param {Number} id The ID.
   * @returns {Guide}
   */
  itemByID: function(id) {
    return new Guide();
  },
  
  /*
   * Returns the Guides within the specified range.
 *
   * @param {Mixed} from The Guide, index, or name at the beginning of the range. Can accept: Guide, Long Integer or String.
   * @param {Mixed} to The Guide, index, or name at the end of the range. Can accept: Guide, Long Integer or String.
   * @returns {Guide}
   */
  itemByRange: function(from, to) {
    return new Guide();
  },
  
  /*
   * Returns the first Guide in the collection.
   * @returns {Guide}
   */
  firstItem: function() {
    return new Guide();
  },
  
  /*
   * Returns the last Guide in the collection.
   * @returns {Guide}
   */
  lastItem: function() {
    return new Guide();
  },
  
  /*
   * Returns the middle Guide in the collection.
   * @returns {Guide}
   */
  middleItem: function() {
    return new Guide();
  },
  
  /*
   * Returns the Guide with the index previous to the specified index.
 *
   * @param {Guide} obj The index of the Guide that follows the desired Guide.
   * @returns {Guide}
   */
  previousItem: function(obj) {
    return new Guide();
  },
  
  /*
   * Returns the Guide whose index follows the specified Guide in the collection.
 *
   * @param {Guide} obj The Guide whose index comes before the desired Guide.
   * @returns {Guide}
   */
  nextItem: function(obj) {
    return new Guide();
  },
  
  /*
   * Returns any Guide in the collection.
   * @returns {Guide}
   */
  anyItem: function() {
    return new Guide();
  },
  
  /*
   * Returns every Guide in the collection.
   * @returns {Guide}
   */
  everyItem: function() {
    return new Guide();
  },
  
  /*
   * Generates a string which, if executed, will return the Guide.
   * @returns {String}
   */
  toSource: function() {
    return new String();
  },
  
  /*
   * Returns the Guide with the specified index.
 *
   * @param {Number} index The index.
   * @returns {Guide}
   */
  []: function(index) {
    return new Guide();
  },
  
};
