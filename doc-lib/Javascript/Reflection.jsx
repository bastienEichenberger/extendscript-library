/*
 * Provides information about a class.
 */
var Reflection = {
  /*
   * The class name.
   * @type {String}
   */
  name: undefined,
  
  /*
   * An array of method descriptions.
   * @type {ReflectionInfo}
   */
  methods: undefined,
  
  /*
   * An array of property descriptions.
   * @type {ReflectionInfo}
   */
  properties: undefined,
  
  /*
   * An array of class method descriptions.
   * @type {ReflectionInfo}
   */
  staticMethods: undefined,
  
  /*
   * An array of class property descriptions.
   * @type {ReflectionInfo}
   */
  staticProperties: undefined,
  
  /*
   * The long description text.
   * @type {String}
   */
  description: undefined,
  
  /*
   * The short description text.
   * @type {String}
   */
  help: undefined,
  
  /*
   * Sample code, if present.
   * @type {String}
   */
  sampleCode: undefined,
  
  /*
   * A file containing sample code. May be null.
   * @type {File}
   */
  sampleFile: undefined,
  
  /*
   * Finds an element description by name.
 *
   * @param {String} name The name of the element to find.
   * @returns {ReflectionInfo}
   */
  find: function(name) {
    return new ReflectionInfo();
  },
  
  /*
   * Returns this class information as XML in OMV format.
   * @returns {XML}
   */
  toXML: function() {
    return new XML();
  },
  
};
