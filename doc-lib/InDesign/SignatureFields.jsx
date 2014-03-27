/*
 * A collection of signature fields.
 */
var SignatureFields = {
  /*
   * The number of objects in the collection.
   * @type {Number}
   */
  length: undefined,
  
  /*
   * Displays the number of elements in the SignatureField.
   * @returns {Number}
   */
  count: function() {
    return new Number();
  },
  
  /*
   * Creates a new SignatureField
 *
   * @param {Layer} [layer] The layer on which to create the SignatureField. 
   * @param {LocationOptions} [at] The location at which to insert the SignatureField relative to the reference object or within the container object. 
   * @param {Mixed} [reference] The reference object. Note: Required when the at parameter is before or after. Can accept: Document, Spread, MasterSpread, Page, Layer or PageItem. 
   * @param {Object} [withProperties] Initial values for properties of the new SignatureField 
   * @returns {SignatureField}
   */
  add: function(layer, at, reference, withProperties) {
    return new SignatureField();
  },
  
  /*
   * Returns the SignatureField with the specified index or name.
 *
   * @param {Mixed} index The index or name. Can accept: Long Integer or String.
   * @returns {SignatureField}
   */
  item: function(index) {
    return new SignatureField();
  },
  
  /*
   * Returns the SignatureField with the specified name.
 *
   * @param {String} name The name.
   * @returns {SignatureField}
   */
  itemByName: function(name) {
    return new SignatureField();
  },
  
  /*
   * Returns the SignatureField with the specified ID.
 *
   * @param {Number} id The ID.
   * @returns {SignatureField}
   */
  itemByID: function(id) {
    return new SignatureField();
  },
  
  /*
   * Returns the SignatureFields within the specified range.
 *
   * @param {Mixed} from The SignatureField, index, or name at the beginning of the range. Can accept: SignatureField, Long Integer or String.
   * @param {Mixed} to The SignatureField, index, or name at the end of the range. Can accept: SignatureField, Long Integer or String.
   * @returns {SignatureField}
   */
  itemByRange: function(from, to) {
    return new SignatureField();
  },
  
  /*
   * Returns the first SignatureField in the collection.
   * @returns {SignatureField}
   */
  firstItem: function() {
    return new SignatureField();
  },
  
  /*
   * Returns the last SignatureField in the collection.
   * @returns {SignatureField}
   */
  lastItem: function() {
    return new SignatureField();
  },
  
  /*
   * Returns the middle SignatureField in the collection.
   * @returns {SignatureField}
   */
  middleItem: function() {
    return new SignatureField();
  },
  
  /*
   * Returns the SignatureField with the index previous to the specified index.
 *
   * @param {SignatureField} obj The index of the SignatureField that follows the desired SignatureField.
   * @returns {SignatureField}
   */
  previousItem: function(obj) {
    return new SignatureField();
  },
  
  /*
   * Returns the SignatureField whose index follows the specified SignatureField in the collection.
 *
   * @param {SignatureField} obj The SignatureField whose index comes before the desired SignatureField.
   * @returns {SignatureField}
   */
  nextItem: function(obj) {
    return new SignatureField();
  },
  
  /*
   * Returns any SignatureField in the collection.
   * @returns {SignatureField}
   */
  anyItem: function() {
    return new SignatureField();
  },
  
  /*
   * Returns every SignatureField in the collection.
   * @returns {SignatureField}
   */
  everyItem: function() {
    return new SignatureField();
  },
  
  /*
   * Generates a string which, if executed, will return the SignatureField.
   * @returns {String}
   */
  toSource: function() {
    return new String();
  },
  
  /*
   * Returns the SignatureField with the specified index.
 *
   * @param {Number} index The index.
   * @returns {SignatureField}
   */
  []: function(index) {
    return new SignatureField();
  },
  
};
