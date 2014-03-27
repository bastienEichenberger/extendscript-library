/*
 * A collection of text variables.
 */
var TextVariables = {
  /*
   * The number of objects in the collection.
   * @type {Number}
   */
  length: undefined,
  
  /*
   * Creates a new TextVariable.
 *
   * @param {Object} [withProperties] Initial values for properties of the new TextVariable 
   * @returns {TextVariable}
   */
  add: function(withProperties) {
    return new TextVariable();
  },
  
  /*
   * Displays the number of elements in the TextVariable.
   * @returns {Number}
   */
  count: function() {
    return new Number();
  },
  
  /*
   * Returns the TextVariable with the specified index or name.
 *
   * @param {Mixed} index The index or name. Can accept: Long Integer or String.
   * @returns {TextVariable}
   */
  item: function(index) {
    return new TextVariable();
  },
  
  /*
   * Returns the TextVariable with the specified name.
 *
   * @param {String} name The name.
   * @returns {TextVariable}
   */
  itemByName: function(name) {
    return new TextVariable();
  },
  
  /*
   * Returns the TextVariables within the specified range.
 *
   * @param {Mixed} from The TextVariable, index, or name at the beginning of the range. Can accept: TextVariable, Long Integer or String.
   * @param {Mixed} to The TextVariable, index, or name at the end of the range. Can accept: TextVariable, Long Integer or String.
   * @returns {TextVariable}
   */
  itemByRange: function(from, to) {
    return new TextVariable();
  },
  
  /*
   * Returns the first TextVariable in the collection.
   * @returns {TextVariable}
   */
  firstItem: function() {
    return new TextVariable();
  },
  
  /*
   * Returns the last TextVariable in the collection.
   * @returns {TextVariable}
   */
  lastItem: function() {
    return new TextVariable();
  },
  
  /*
   * Returns the middle TextVariable in the collection.
   * @returns {TextVariable}
   */
  middleItem: function() {
    return new TextVariable();
  },
  
  /*
   * Returns the TextVariable with the index previous to the specified index.
 *
   * @param {TextVariable} obj The index of the TextVariable that follows the desired TextVariable.
   * @returns {TextVariable}
   */
  previousItem: function(obj) {
    return new TextVariable();
  },
  
  /*
   * Returns the TextVariable whose index follows the specified TextVariable in the collection.
 *
   * @param {TextVariable} obj The TextVariable whose index comes before the desired TextVariable.
   * @returns {TextVariable}
   */
  nextItem: function(obj) {
    return new TextVariable();
  },
  
  /*
   * Returns any TextVariable in the collection.
   * @returns {TextVariable}
   */
  anyItem: function() {
    return new TextVariable();
  },
  
  /*
   * Returns every TextVariable in the collection.
   * @returns {TextVariable}
   */
  everyItem: function() {
    return new TextVariable();
  },
  
  /*
   * Generates a string which, if executed, will return the TextVariable.
   * @returns {String}
   */
  toSource: function() {
    return new String();
  },
  
  /*
   * Returns the TextVariable with the specified index.
 *
   * @param {Number} index The index.
   * @returns {TextVariable}
   */
  []: function(index) {
    return new TextVariable();
  },
  
};
