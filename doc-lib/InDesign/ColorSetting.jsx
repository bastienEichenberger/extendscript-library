/*
 * Color management settings.
 */
var ColorSetting = {
  /*
   * The available color engines.
   * @type {String}
   */
  engineList: undefined,
  
  /*
   * A list of valid color management system settings configurations.
   * @type {String}
   */
  cmsSettingsList: undefined,
  
  /*
   * A list of valid CMYK color profiles.
   * @type {String}
   */
  workingSpaceCMYKList: undefined,
  
  /*
   * A list of valid RGB color profiles.
   * @type {String}
   */
  workingSpaceRGBList: undefined,
  
  /*
   * Returns true if the object specifier resolves to valid objects.
   * @type {Boolean}
   */
  isValid: undefined,
  
  /*
   * The parent of the ColorSetting (a Application).
   * @type {Application}
   */
  parent: undefined,
  
  /*
   * A collection of events.
   * @type {Events}
   */
  events: undefined,
  
  /*
   * A collection of event listeners.
   * @type {EventListeners}
   */
  eventListeners: undefined,
  
  /*
   * The policy for handling colors in a CMYK color model, including reading and embedding color profiles, resolving mismatches between embedded color profiles and the working space, and moving colors between documents.
   * @type {ColorSettingsPolicy}
   */
  cmykPolicy: undefined,
  
  /*
   * If true, enables color management.
   * @type {Boolean}
   */
  enableColorManagement: undefined,
  
  /*
   * The color management module (CMM) for mapping color space gamuts between documents.
   * @type {String}
   */
  engine: undefined,
  
  /*
   * If true, displays a prompt when opening a file whose embedded color profile does not match the current working space. The prompt provides the option to override the default mismatch behavior.
   * @type {Boolean}
   */
  mismatchAskWhenOpening: undefined,
  
  /*
   * If true, displays a prompt when importing an object (via pasting, drag-and-drop, or other similar methods) whose colors do not match the current working space. The prompt provides the option to override the default mismatch behavior.
   * @type {Boolean}
   */
  mismatchAskWhenPasting: undefined,
  
  /*
   * If true, displays a prompt when opening a file that does not have an embedded color profile. The prompt provides the option to assign a color profile.
   * @type {Boolean}
   */
  missingAskWhenOpening: undefined,
  
  /*
   * The policy for handling colors in an RGB color model, including reading and embedding color profiles, handling mismatches between embedded color profiles and the working space, and moving colors from one document to another.
   * @type {ColorSettingsPolicy}
   */
  rgbPolicy: undefined,
  
  /*
   * The current color management system settings configuration. Note: For information on possible values, see CMS settings list.
   * @type {String}
   */
  cmsSettings: undefined,
  
  /*
   * The file path of the CSF file to use.
   * @type {File}
   */
  cmsSettingsPath: undefined,
  
  /*
   * If true, uses black point compensation to ensure that shadow detail is preserved by simulating the full dynamic range of the output device.
   * @type {Boolean}
   */
  useBPC: undefined,
  
  /*
   * The current CMYK profile.
   * @type {String}
   */
  workingSpaceCMYK: undefined,
  
  /*
   * The current RGB profile.
   * @type {String}
   */
  workingSpaceRGB: undefined,
  
  /*
   * The default rendering intent.
   * @type {DefaultRenderingIntent}
   */
  intent: undefined,
  
  /*
   * If true, uses LAB alternates for spot colors when available.
   * @type {Boolean}
   */
  accurateLABSpots: undefined,
  
  /*
   * If true, uses idealized black for CMYK-to-RGB or CMYK-to-Gray conversions to the screen.
   * @type {Boolean}
   */
  idealizedBlackToScreen: undefined,
  
  /*
   * If true, uses idealized black for CMYK-to-RGB or CMYK-to-Gray conversions to print or export.
   * @type {Boolean}
   */
  idealizedBlackToExport: undefined,
  
  /*
   * A property that allows setting of several properties at the same time.
   * @type {Object}
   */
  properties: undefined,
  
  /*
   * Generates a string which, if executed, will return the ColorSetting.
   * @returns {String}
   */
  toSource: function() {
    return new String();
  },
  
  /*
   * Resolves the object specifier, creating an array of object references.
   * @returns {ColorSetting}
   */
  getElements: function() {
    return new ColorSetting();
  },
  
  /*
   * Retrieves the object specifier.
   * @returns {String}
   */
  toSpecifier: function() {
    return new String();
  },
  
  /*
   * Adds an event listener.
 *
   * @param {String} eventType The event type.
   * @param {Mixed} handler The event handler. Can accept: File or JavaScript Function.
   * @param {Boolean} [captures] This parameter is obsolete. 
   * @returns {EventListener}
   */
  addEventListener: function(eventType, handler, captures) {
    return new EventListener();
  },
  
  /*
   * Removes the event listener.
 *
   * @param {String} eventType The registered event type.
   * @param {Mixed} handler The registered event handler. Can accept: File or JavaScript Function.
   * @param {Boolean} [captures] This parameter is obsolete. 
   * @returns {Boolean}
   */
  removeEventListener: function(eventType, handler, captures) {
    return new Boolean();
  },
  
};
