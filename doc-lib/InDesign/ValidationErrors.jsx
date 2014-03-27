/*
 * A collection of XML validation errors.
 */
var ValidationErrors = {
  /*
   * The number of objects in the collection.
   * @type {Number}
   */
  length: undefined,
  
  /*
   * Displays the number of elements in the ValidationError.
   * @returns {Number}
   */
  count: function() {
    return new Number();
  },
  
  /*
   * Returns the ValidationError with the specified index or name.
 *
   * @param {Mixed} index The index or name. Can accept: Long Integer or String.
   * @returns {ValidationError}
   */
  item: function(index) {
    return new ValidationError();
  },
  
  /*
   * Returns the ValidationErrors within the specified range.
 *
   * @param {Mixed} from The ValidationError, index, or name at the beginning of the range. Can accept: ValidationError, Long Integer or String.
   * @param {Mixed} to The ValidationError, index, or name at the end of the range. Can accept: ValidationError, Long Integer or String.
   * @returns {ValidationError}
   */
  itemByRange: function(from, to) {
    return new ValidationError();
  },
  
  /*
   * Returns the first ValidationError in the collection.
   * @returns {ValidationError}
   */
  firstItem: function() {
    return new ValidationError();
  },
  
  /*
   * Returns the last ValidationError in the collection.
   * @returns {ValidationError}
   */
  lastItem: function() {
    return new ValidationError();
  },
  
  /*
   * Returns the middle ValidationError in the collection.
   * @returns {ValidationError}
   */
  middleItem: function() {
    return new ValidationError();
  },
  
  /*
   * Returns the ValidationError with the index previous to the specified index.
 *
   * @param {ValidationError} obj The index of the ValidationError that follows the desired ValidationError.
   * @returns {ValidationError}
   */
  previousItem: function(obj) {
    return new ValidationError();
  },
  
  /*
   * Returns the ValidationError whose index follows the specified ValidationError in the collection.
 *
   * @param {ValidationError} obj The ValidationError whose index comes before the desired ValidationError.
   * @returns {ValidationError}
   */
  nextItem: function(obj) {
    return new ValidationError();
  },
  
  /*
   * Returns any ValidationError in the collection.
   * @returns {ValidationError}
   */
  anyItem: function() {
    return new ValidationError();
  },
  
  /*
   * Returns every ValidationError in the collection.
   * @returns {ValidationError}
   */
  everyItem: function() {
    return new ValidationError();
  },
  
  /*
   * Generates a string which, if executed, will return the ValidationError.
   * @returns {String}
   */
  toSource: function() {
    return new String();
  },
  
  /*
   * Returns the ValidationError with the specified index.
 *
   * @param {Number} index The index.
   * @returns {ValidationError}
   */
  []: function(index) {
    return new ValidationError();
  },
  
};
