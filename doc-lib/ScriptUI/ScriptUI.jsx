/*
 * A global class containing central information about ScriptUI. Not instantiable.
 */
var ScriptUI = {
  /*
   * The font constants defined by the host application.
   * @type {Object}
   */
  applicationFonts: undefined,
  
  /*
   * An object whose properties are the names of compatability modes supported by the host application.
   * @type {Object}
   */
  compatibility: undefined,
  
  /*
   * A string containing the internal version number of the ScriptUI module.
   * @type {String}
   */
  coreVersion: undefined,
  
  /*
   * An object whose properties define attributes of the environment in which ScriptUI operates.
   * @type {Environment}
   */
  environment: undefined,
  
  /*
   * An object whose properties and methods provide access to objects used in the ScriptUI event system.
   * @type {Events}
   */
  events: undefined,
  
  /*
   * A string containing the name of the UI component framework with which this version of ScriptUI is compatible.
   * @type {String}
   */
  frameworkName: undefined,
  
  /*
   * A string containing the version number of the ScriptUI component framework
   * @type {Mixed}
   */
  version: undefined,
  
  /*
   * undefined
   * @type {String}
   */
  Alignment: undefined,
  
  /*
   * undefined
   * @type {Object}
   */
  FontStyle: undefined,
  
  /*
   * Finds and returns the resource for a given text string from the host application's resource data.
 *
   * @param {String} text The text to match.
   * @returns {String}
   */
  getResourceText: function(text) {
    return new String();
  },
  
  /*
   * Loads a new image from resources or disk files into an image object.
 *
   * @param {String} normal The resource name or the disk file path to the image used for the normal state.
   * @param {String} [disabled] The resource name, or the disk file path to the image used for the disabled state.
   * @param {String} [pressed] The resource name, or the file-system path to the image used for the pressed state.
   * @param {String} [rollover] The resource name, or the file-system path to the image used for the rollover state.
   * @returns {ScriptUIImage}
   */
  newImage: function(normal, disabled, pressed, rollover) {
    return new ScriptUIImage();
  },
  
  /*
   * Creates a new font object for use in text controls and titles.
 *
   * @param {String} name The font name, or the font family name.
   * @param {undefined} style undefined
   * @param {Number} size The font size in points.
   * @returns {ScriptUIFont}
   */
  newFont: function(name, style, size) {
    return new ScriptUIFont();
  },
  
};
