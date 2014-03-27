/*
 * A collection of form fields.
 */
var FormFields = {
  /*
   * The number of objects in the collection.
   * @type {Number}
   */
  length: undefined,
  
  /*
   * Displays the number of elements in the FormField.
   * @returns {Number}
   */
  count: function() {
    return new Number();
  },
  
  /*
   * Creates a new FormField
 *
   * @param {Layer} [layer] The layer on which to create the FormField. 
   * @param {LocationOptions} [at] The location at which to insert the FormField relative to the reference object or within the container object. 
   * @param {Mixed} [reference] The reference object. Note: Required when the at parameter is before or after. Can accept: Document, Spread, MasterSpread, Page, Layer or PageItem. 
   * @param {Object} [withProperties] Initial values for properties of the new FormField 
   * @returns {FormField}
   */
  add: function(layer, at, reference, withProperties) {
    return new FormField();
  },
  
  /*
   * Returns the FormField with the specified index or name.
 *
   * @param {Mixed} index The index or name. Can accept: Long Integer or String.
   * @returns {FormField}
   */
  item: function(index) {
    return new FormField();
  },
  
  /*
   * Returns the FormField with the specified name.
 *
   * @param {String} name The name.
   * @returns {FormField}
   */
  itemByName: function(name) {
    return new FormField();
  },
  
  /*
   * Returns the FormField with the specified ID.
 *
   * @param {Number} id The ID.
   * @returns {FormField}
   */
  itemByID: function(id) {
    return new FormField();
  },
  
  /*
   * Returns the FormFields within the specified range.
 *
   * @param {Mixed} from The FormField, index, or name at the beginning of the range. Can accept: FormField, Long Integer or String.
   * @param {Mixed} to The FormField, index, or name at the end of the range. Can accept: FormField, Long Integer or String.
   * @returns {FormField}
   */
  itemByRange: function(from, to) {
    return new FormField();
  },
  
  /*
   * Returns the first FormField in the collection.
   * @returns {FormField}
   */
  firstItem: function() {
    return new FormField();
  },
  
  /*
   * Returns the last FormField in the collection.
   * @returns {FormField}
   */
  lastItem: function() {
    return new FormField();
  },
  
  /*
   * Returns the middle FormField in the collection.
   * @returns {FormField}
   */
  middleItem: function() {
    return new FormField();
  },
  
  /*
   * Returns the FormField with the index previous to the specified index.
 *
   * @param {FormField} obj The index of the FormField that follows the desired FormField.
   * @returns {FormField}
   */
  previousItem: function(obj) {
    return new FormField();
  },
  
  /*
   * Returns the FormField whose index follows the specified FormField in the collection.
 *
   * @param {FormField} obj The FormField whose index comes before the desired FormField.
   * @returns {FormField}
   */
  nextItem: function(obj) {
    return new FormField();
  },
  
  /*
   * Returns any FormField in the collection.
   * @returns {FormField}
   */
  anyItem: function() {
    return new FormField();
  },
  
  /*
   * Returns every FormField in the collection.
   * @returns {FormField}
   */
  everyItem: function() {
    return new FormField();
  },
  
  /*
   * Generates a string which, if executed, will return the FormField.
   * @returns {String}
   */
  toSource: function() {
    return new String();
  },
  
  /*
   * Returns the FormField with the specified index.
 *
   * @param {Number} index The index.
   * @returns {FormField}
   */
  []: function(index) {
    return new FormField();
  },
  
};
