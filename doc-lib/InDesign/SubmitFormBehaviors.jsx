/*
 * A collection of submit form behavior objects.
 */
var SubmitFormBehaviors = {
  /*
   * The number of objects in the collection.
   * @type {Number}
   */
  length: undefined,
  
  /*
   * Displays the number of elements in the SubmitFormBehavior.
   * @returns {Number}
   */
  count: function() {
    return new Number();
  },
  
  /*
   * Creates a new SubmitFormBehavior.
 *
   * @param {Object} [withProperties] Initial values for properties of the new SubmitFormBehavior 
   * @returns {SubmitFormBehavior}
   */
  add: function(withProperties) {
    return new SubmitFormBehavior();
  },
  
  /*
   * Returns the SubmitFormBehavior with the specified index or name.
 *
   * @param {Mixed} index The index or name. Can accept: Long Integer or String.
   * @returns {SubmitFormBehavior}
   */
  item: function(index) {
    return new SubmitFormBehavior();
  },
  
  /*
   * Returns the SubmitFormBehavior with the specified name.
 *
   * @param {String} name The name.
   * @returns {SubmitFormBehavior}
   */
  itemByName: function(name) {
    return new SubmitFormBehavior();
  },
  
  /*
   * Returns the SubmitFormBehavior with the specified ID.
 *
   * @param {Number} id The ID.
   * @returns {SubmitFormBehavior}
   */
  itemByID: function(id) {
    return new SubmitFormBehavior();
  },
  
  /*
   * Returns the SubmitFormBehaviors within the specified range.
 *
   * @param {Mixed} from The SubmitFormBehavior, index, or name at the beginning of the range. Can accept: SubmitFormBehavior, Long Integer or String.
   * @param {Mixed} to The SubmitFormBehavior, index, or name at the end of the range. Can accept: SubmitFormBehavior, Long Integer or String.
   * @returns {SubmitFormBehavior}
   */
  itemByRange: function(from, to) {
    return new SubmitFormBehavior();
  },
  
  /*
   * Returns the first SubmitFormBehavior in the collection.
   * @returns {SubmitFormBehavior}
   */
  firstItem: function() {
    return new SubmitFormBehavior();
  },
  
  /*
   * Returns the last SubmitFormBehavior in the collection.
   * @returns {SubmitFormBehavior}
   */
  lastItem: function() {
    return new SubmitFormBehavior();
  },
  
  /*
   * Returns the middle SubmitFormBehavior in the collection.
   * @returns {SubmitFormBehavior}
   */
  middleItem: function() {
    return new SubmitFormBehavior();
  },
  
  /*
   * Returns the SubmitFormBehavior with the index previous to the specified index.
 *
   * @param {SubmitFormBehavior} obj The index of the SubmitFormBehavior that follows the desired SubmitFormBehavior.
   * @returns {SubmitFormBehavior}
   */
  previousItem: function(obj) {
    return new SubmitFormBehavior();
  },
  
  /*
   * Returns the SubmitFormBehavior whose index follows the specified SubmitFormBehavior in the collection.
 *
   * @param {SubmitFormBehavior} obj The SubmitFormBehavior whose index comes before the desired SubmitFormBehavior.
   * @returns {SubmitFormBehavior}
   */
  nextItem: function(obj) {
    return new SubmitFormBehavior();
  },
  
  /*
   * Returns any SubmitFormBehavior in the collection.
   * @returns {SubmitFormBehavior}
   */
  anyItem: function() {
    return new SubmitFormBehavior();
  },
  
  /*
   * Returns every SubmitFormBehavior in the collection.
   * @returns {SubmitFormBehavior}
   */
  everyItem: function() {
    return new SubmitFormBehavior();
  },
  
  /*
   * Generates a string which, if executed, will return the SubmitFormBehavior.
   * @returns {String}
   */
  toSource: function() {
    return new String();
  },
  
  /*
   * Returns the SubmitFormBehavior with the specified index.
 *
   * @param {Number} index The index.
   * @returns {SubmitFormBehavior}
   */
  []: function(index) {
    return new SubmitFormBehavior();
  },
  
};
