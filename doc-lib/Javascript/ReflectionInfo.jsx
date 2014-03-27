/*
 * Provides information about a method, a property or a method parameters.
 */
var ReflectionInfo = {
  /*
   * The class object that this element belongs to.
   * @type {Reflection}
   */
  parent: undefined,
  
  /*
   * The element name.
   * @type {String}
   */
  name: undefined,
  
  /*
   * The element type.
   * @type {String}
   */
  type: undefined,
  
  /*
   * The data type.
   * @type {String}
   */
  dataType: undefined,
  
  /*
   * The description of method or function arguments.
   * @type {ReflectionInfo}
   */
  arguments: undefined,
  
  /*
   * The minimum value.
   * @type {Number}
   */
  min: undefined,
  
  /*
   * The maximum value.
   * @type {Number}
   */
  max: undefined,
  
  /*
   * The default value.
   * @type {any}
   */
  defaultValue: undefined,
  
  /*
   * Contains true if the class describes a collection class.
   * @type {Boolean}
   */
  isCollection: undefined,
  
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
  
};
