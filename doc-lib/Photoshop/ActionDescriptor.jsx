/*
 * A record of key-value pairs for actions, such as those included on the Adobe Photoshop Actions menu. The ActionDescriptor class is part of the Action Manager functionality. For more details on the Action Manager, see the Photoshop Scripting Guide.
 */
var ActionDescriptor = {
  /*
   * The number of keys contained in the descriptor.
   * @type {int}
   */
  count: undefined,
  
  /*
   * The number of keys contained in the descriptor.
   * @type {int}
   */
  count: undefined,
  
  /*
   * Clears the descriptor.
   */
  clear: function() {
  },
  
  /*
   * Erases a key from the descriptor.
 *
   * @param {Number} key undefined
   */
  erase: function(key) {
  },
  
  /*
   * Creates a descriptor from a stream of bytes; for reading from disk.
 *
   * @param {String} value undefined
   */
  fromStream: function(value) {
  },
  
  /*
   * Gets the value of a key of type boolean.
 *
   * @param {Number} key undefined
   * @returns {Boolean}
   */
  getBoolean: function(key) {
    return new Boolean();
  },
  
  /*
   * Gets the value of a key of type class.
 *
   * @param {Number} key undefined
   * @returns {Number}
   */
  getClass: function(key) {
    return new Number();
  },
  
  /*
   * Gets raw byte data as a string value.
 *
   * @param {Number} key undefined
   * @returns {String}
   */
  getData: function(key) {
    return new String();
  },
  
  /*
   * Gets the value of a key of type double.
 *
   * @param {Number} key undefined
   * @returns {Number}
   */
  getDouble: function(key) {
    return new Number();
  },
  
  /*
   * Gets the enumeration type of a key.
 *
   * @param {Number} key undefined
   * @returns {Number}
   */
  getEnumerationType: function(key) {
    return new Number();
  },
  
  /*
   * Gets the enumeration value of a key.
 *
   * @param {Number} key undefined
   * @returns {Number}
   */
  getEnumerationValue: function(key) {
    return new Number();
  },
  
  /*
   * Gets the value of a key of type integer.
 *
   * @param {Number} key undefined
   * @returns {Number}
   */
  getInteger: function(key) {
    return new Number();
  },
  
  /*
   * Gets the ID of the Nth key, provided by index.
 *
   * @param {Number} key undefined
   * @returns {Number}
   */
  getKey: function(key) {
    return new Number();
  },
  
  /*
   * Gets the value of a key of type list.
 *
   * @param {Number} key undefined
   * @returns {ActionList}
   */
  getList: function(key) {
    return new ActionList();
  },
  
  /*
   * Gets the class ID of an object in a key of type object.
 *
   * @param {Number} key undefined
   * @returns {Number}
   */
  getObjectType: function(key) {
    return new Number();
  },
  
  /*
   * Gets the value of a key of type object.
 *
   * @param {Number} key undefined
   * @returns {ActionDescriptor}
   */
  getObjectValue: function(key) {
    return new ActionDescriptor();
  },
  
  /*
   * Gets the value of a key of type File.
 *
   * @param {Number} key undefined
   * @returns {File}
   */
  getPath: function(key) {
    return new File();
  },
  
  /*
   * Gets the value of a key of type ActionReference.
 *
   * @param {Number} key undefined
   * @returns {ActionReference}
   */
  getReference: function(key) {
    return new ActionReference();
  },
  
  /*
   * Gets the value of a key of type string.
 *
   * @param {Number} key undefined
   * @returns {String}
   */
  getString: function(key) {
    return new String();
  },
  
  /*
   * Gets the type of a key.
 *
   * @param {Number} key undefined
   * @returns {DescValueType}
   */
  getType: function(key) {
    return new DescValueType();
  },
  
  /*
   * Gets the unit type of a key of type UnitDouble.
 *
   * @param {Number} key undefined
   * @returns {Number}
   */
  getUnitDoubleType: function(key) {
    return new Number();
  },
  
  /*
   * ...
 *
   * @param {Number} key undefined
   * @returns {Number}
   */
  getUnitDoubleValue: function(key) {
    return new Number();
  },
  
  /*
   * ...
 *
   * @param {Number} key undefined
   * @returns {Boolean}
   */
  hasKey: function(key) {
    return new Boolean();
  },
  
  /*
   * ...
 *
   * @param {ActionDescriptor} otherDesc undefined
   * @returns {Boolean}
   */
  isEqual: function(otherDesc) {
    return new Boolean();
  },
  
  /*
   * ...
 *
   * @param {Number} key undefined
   * @param {Boolean} value undefined
   */
  putBoolean: function(key, value) {
  },
  
  /*
   * ...
 *
   * @param {Number} key undefined
   * @param {Number} value undefined
   */
  putClass: function(key, value) {
  },
  
  /*
   * ...
 *
   * @param {Number} key undefined
   * @param {String} value undefined
   */
  putData: function(key, value) {
  },
  
  /*
   * ...
 *
   * @param {Number} key undefined
   * @param {Number} value undefined
   */
  putDouble: function(key, value) {
  },
  
  /*
   * ...
 *
   * @param {Number} key undefined
   * @param {Number} enumType undefined
   * @param {Number} value undefined
   */
  putEnumerated: function(key, enumType, value) {
  },
  
  /*
   * ...
 *
   * @param {Number} key undefined
   * @param {Number} value undefined
   */
  putInteger: function(key, value) {
  },
  
  /*
   * ...
 *
   * @param {Number} key undefined
   * @param {ActionList} value undefined
   */
  putList: function(key, value) {
  },
  
  /*
   * ...
 *
   * @param {Number} key undefined
   * @param {Number} classID undefined
   * @param {ActionDescriptor} value undefined
   */
  putObject: function(key, classID, value) {
  },
  
  /*
   * ...
 *
   * @param {Number} key undefined
   * @param {File} value undefined
   */
  putPath: function(key, value) {
  },
  
  /*
   * ...
 *
   * @param {Number} key undefined
   * @param {ActionReference} value undefined
   */
  putReference: function(key, value) {
  },
  
  /*
   * ...
 *
   * @param {Number} key undefined
   * @param {String} value undefined
   */
  putString: function(key, value) {
  },
  
  /*
   * ...
 *
   * @param {Number} key undefined
   * @param {Number} unitID undefined
   * @param {Number} value undefined
   */
  putUnitDouble: function(key, unitID, value) {
  },
  
  /*
   * ...
   * @returns {String}
   */
  toStream: function() {
    return new String();
  },
  
};
