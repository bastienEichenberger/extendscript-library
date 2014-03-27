/*
 * Outer glow effect settings.
 */
var OuterGlowSetting = {
  /*
   * Returns true if the object specifier resolves to valid objects.
   * @type {Boolean}
   */
  isValid: undefined,
  
  /*
   * The parent of the OuterGlowSetting (a TransparencySetting, StrokeTransparencySetting, FillTransparencySetting or ContentTransparencySetting).
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
   * If true, the outer glow effect is applied.
   * @type {Boolean}
   */
  applied: undefined,
  
  /*
   * The blending mode for the outer glow effect.
   * @type {BlendMode}
   */
  blendMode: undefined,
  
  /*
   * The opacity of the outer glow (as a percentage). (Range: 0 to 100)
   * @type {Number}
   */
  opacity: undefined,
  
  /*
   * The amount (as a percentage) of noise applied to the outer glow. (Range: 0 to 100)
   * @type {Number}
   */
  noise: undefined,
  
  /*
   * The color applied to the outer glow, specified as a swatch (color, gradient, tint, or mixed ink), or an array of color values. The color mode dictates the array values: for RGB, specify three values, each in the range 0 to 255, in the format [R,G,B]; for CMYK, specify four values, each as a percentage and each in the range 0 to 100, in the format [C,M,Y,K]; for LAB, specify three values in the format [L,A,B], with L in the range 0 to 100 and A and B in the range -128 to 127.
   * @type {Swatch}
   */
  effectColor: undefined,
  
  /*
   * The technique applied to the outer glow.
   * @type {GlowTechnique}
   */
  technique: undefined,
  
  /*
   * The amount of spread (as a percentage of the outer glow size). (Range: 0 to 100)
   * @type {Number}
   */
  spread: undefined,
  
  /*
   * The size of the outer glow.
   * @type {Mixed}
   */
  size: undefined,
  
  /*
   * A property that allows setting of several properties at the same time.
   * @type {Object}
   */
  properties: undefined,
  
  /*
   * Generates a string which, if executed, will return the OuterGlowSetting.
   * @returns {String}
   */
  toSource: function() {
    return new String();
  },
  
  /*
   * Resolves the object specifier, creating an array of object references.
   * @returns {OuterGlowSetting}
   */
  getElements: function() {
    return new OuterGlowSetting();
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
