/*
 * Satin effect settings.
 */
var SatinSetting = {
  /*
   * Returns true if the object specifier resolves to valid objects.
   * @type {Boolean}
   */
  isValid: undefined,
  
  /*
   * The parent of the SatinSetting (a TransparencySetting, StrokeTransparencySetting, FillTransparencySetting or ContentTransparencySetting).
   * @type {Mixed}
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
   * If true, applies the satin effect.
   * @type {Boolean}
   */
  applied: undefined,
  
  /*
   * The color applied to the satin effect, specified as a swatch (color, gradient, tint, or mixed ink), a color library color, a hex value, or as an array of color values. The color mode dictates the array values: for RGB, specify three values, each in the range 0 to 255, in the format [R,G,B]; for CMYK, specify four values, each as a percentage and each in the range 0 to 100, in the format [C,M,Y,K]; for LAB, specify three values in the format [L,A,B], with L in the range 0 to 100 and A and B in the range -128 to 127; for HSB, specify three colors in the format [H,S,B], with H in the range 0 to 360 and S and B as percentages in the range 0 to 100.
   * @type {Swatch}
   */
  effectColor: undefined,
  
  /*
   * The blending mode for the satin effect.
   * @type {BlendMode}
   */
  blendMode: undefined,
  
  /*
   * The opacity of the satin effect (as a percentage). (Range: 0 to 100)
   * @type {Number}
   */
  opacity: undefined,
  
  /*
   * The light angle of the satin effect. (Range: -360 to 360)
   * @type {Number}
   */
  angle: undefined,
  
  /*
   * The distance (in pixels) from the SatinSetting to the satin effect.
   * @type {Mixed}
   */
  distance: undefined,
  
  /*
   * The width (in pixels) of the satin effect.
   * @type {Mixed}
   */
  size: undefined,
  
  /*
   * If true, inverts the satin effect.
   * @type {Boolean}
   */
  invertEffect: undefined,
  
  /*
   * A property that allows setting of several properties at the same time.
   * @type {Object}
   */
  properties: undefined,
  
  /*
   * Generates a string which, if executed, will return the SatinSetting.
   * @returns {String}
   */
  toSource: function() {
    return new String();
  },
  
  /*
   * Resolves the object specifier, creating an array of object references.
   * @returns {SatinSetting}
   */
  getElements: function() {
    return new SatinSetting();
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
