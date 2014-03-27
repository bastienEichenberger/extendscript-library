/*
 * A collection of prefight rule data objects.
 */
var RuleDataObjects = {
  /*
   * The number of objects in the collection.
   * @type {Number}
   */
  length: undefined,
  
  /*
   * Add a new preflight rule data to a preflight profile rule.
 *
   * @param {String} name The name of the rule data to add
   * @param {RuleDataType} dataType The type of data
   * @param {Mixed} dataValue The value of data. Can accept: String, Real, Long Integer, Short Integer, Boolean, Object or Array of Strings, Reals, Long Integers, Short Integers, Booleans, Objects or Arrays of Array of Arrays of Array of Strings, Reals, Long Integers, Short Integers, Booleans or Objects.
   * @param {Object} [withProperties] Initial values for properties of the new RuleDataObject 
   * @returns {RuleDataObject}
   */
  add: function(name, dataType, dataValue, withProperties) {
    return new RuleDataObject();
  },
  
  /*
   * Displays the number of elements in the RuleDataObject.
   * @returns {Number}
   */
  count: function() {
    return new Number();
  },
  
  /*
   * Returns the RuleDataObject with the specified index or name.
 *
   * @param {Mixed} index The index or name. Can accept: Long Integer or String.
   * @returns {RuleDataObject}
   */
  item: function(index) {
    return new RuleDataObject();
  },
  
  /*
   * Returns the RuleDataObject with the specified name.
 *
   * @param {String} name The name.
   * @returns {RuleDataObject}
   */
  itemByName: function(name) {
    return new RuleDataObject();
  },
  
  /*
   * Returns the RuleDataObject with the specified ID.
 *
   * @param {Number} id The ID.
   * @returns {RuleDataObject}
   */
  itemByID: function(id) {
    return new RuleDataObject();
  },
  
  /*
   * Returns the RuleDataObjects within the specified range.
 *
   * @param {Mixed} from The RuleDataObject, index, or name at the beginning of the range. Can accept: RuleDataObject, Long Integer or String.
   * @param {Mixed} to The RuleDataObject, index, or name at the end of the range. Can accept: RuleDataObject, Long Integer or String.
   * @returns {RuleDataObject}
   */
  itemByRange: function(from, to) {
    return new RuleDataObject();
  },
  
  /*
   * Returns the first RuleDataObject in the collection.
   * @returns {RuleDataObject}
   */
  firstItem: function() {
    return new RuleDataObject();
  },
  
  /*
   * Returns the last RuleDataObject in the collection.
   * @returns {RuleDataObject}
   */
  lastItem: function() {
    return new RuleDataObject();
  },
  
  /*
   * Returns the middle RuleDataObject in the collection.
   * @returns {RuleDataObject}
   */
  middleItem: function() {
    return new RuleDataObject();
  },
  
  /*
   * Returns the RuleDataObject with the index previous to the specified index.
 *
   * @param {RuleDataObject} obj The index of the RuleDataObject that follows the desired RuleDataObject.
   * @returns {RuleDataObject}
   */
  previousItem: function(obj) {
    return new RuleDataObject();
  },
  
  /*
   * Returns the RuleDataObject whose index follows the specified RuleDataObject in the collection.
 *
   * @param {RuleDataObject} obj The RuleDataObject whose index comes before the desired RuleDataObject.
   * @returns {RuleDataObject}
   */
  nextItem: function(obj) {
    return new RuleDataObject();
  },
  
  /*
   * Returns any RuleDataObject in the collection.
   * @returns {RuleDataObject}
   */
  anyItem: function() {
    return new RuleDataObject();
  },
  
  /*
   * Returns every RuleDataObject in the collection.
   * @returns {RuleDataObject}
   */
  everyItem: function() {
    return new RuleDataObject();
  },
  
  /*
   * Generates a string which, if executed, will return the RuleDataObject.
   * @returns {String}
   */
  toSource: function() {
    return new String();
  },
  
  /*
   * Returns the RuleDataObject with the specified index.
 *
   * @param {Number} index The index.
   * @returns {RuleDataObject}
   */
  []: function(index) {
    return new RuleDataObject();
  },
  
};
