/*
 * Bevel and emboss effect settings.
 */
var BevelAndEmbossSetting = {
  /*
   * Returns true if the object specifier resolves to valid objects.
   * @type {Boolean}
   */
  isValid: undefined,
  
  /*
   * The parent of the BevelAndEmbossSetting (a TransparencySetting, StrokeTransparencySetting, FillTransparencySetting or ContentTransparencySetting).
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
   * If true, the bevel or emboss effect is applied.
   * @type {Boolean}
   */
  applied: undefined,
  
  /*
   * The style of bevel or emboss.
   * @type {BevelAndEmbossStyle}
   */
  style: undefined,
  
  /*
   * The edging technique of the bevel or emboss.
   * @type {BevelAndEmbossTechnique}
   */
  technique: undefined,
  
  /*
   * The depth of the bevel or emboss (as a percentage). (Range: 0 to 1000)
   * @type {Number}
   */
  depth: undefined,
  
  /*
   * The direction of the bevel or emboss.
   * @type {BevelAndEmbossDirection}
   */
  direction: undefined,
  
  /*
   * The size of the bevel or emboss.
   * @type {Mixed}
   */
  size: undefined,
  
  /*
   * The amount (in pixels) of softening.
   * @type {Mixed}
   */
  soften: undefined,
  
  /*
   * The angle of the light source. (Range: -180 to 180)
   * @type {Number}
   */
  angle: undefined,
  
  /*
   * The altitude of the light source. (Range: 0 to 90)
   * @type {Number}
   */
  altitude: undefined,
  
  /*
   * If true, the global light source is used.
   * @type {Boolean}
   */
  useGlobalLight: undefined,
  
  /*
   * The color applied to the highlight portion of the effect, specified as a swatch (color, gradient, tint, or mixed ink), a color library color, a hex value, or as an array of color values. The color mode dictates the array values: for RGB, specify three values, each in the range 0 to 255, in the format [R,G,B]; for CMYK, specify four values, each as a percentage and each in the range 0 to 100, in the format [C,M,Y,K]; for LAB, specify three values in the format [L,A,B], with L in the range 0 to 100 and A and B in the range -128 to 127; for HSB, specify three colors in the format [H,S,B], with H in the range 0 to 360 and S and B as percentages in the range 0 to 100.
   * @type {Swatch}
   */
  highlightColor: undefined,
  
  /*
   * The blending mode for the highlight portion of the effect.
   * @type {BlendMode}
   */
  highlightBlendMode: undefined,
  
  /*
   * The opacity of the highlight portion of the effect (as a percentage). (Range: 0 to 100)
   * @type {Number}
   */
  highlightOpacity: undefined,
  
  /*
   * The color applied to the shadow portion of the effect, specified as a swatch (color, gradient, tint, or mixed ink), a color library color, a hex value, or as an array of color values. The color mode dictates the array values: for RGB, specify three values, each in the range 0 to 255, in the format [R,G,B]; for CMYK, specify four values, each as a percentage and each in the range 0 to 100, in the format [C,M,Y,K]; for LAB, specify three values in the format [L,A,B], with L in the range 0 to 100 and A and B in the range -128 to 127; for HSB, specify three colors in the format [H,S,B], with H in the range 0 to 360 and S and B as percentages in the range 0 to 100.
   * @type {Swatch}
   */
  shadowColor: undefined,
  
  /*
   * The blending mode for the shadow portion of the effect.
   * @type {BlendMode}
   */
  shadowBlendMode: undefined,
  
  /*
   * The opacity of the shadow portion of the effect (as a percentage). (Range: 0 to 100)
   * @type {Number}
   */
  shadowOpacity: undefined,
  
  /*
   * A property that allows setting of several properties at the same time.
   * @type {Object}
   */
  properties: undefined,
  
  /*
   * Generates a string which, if executed, will return the BevelAndEmbossSetting.
   * @returns {String}
   */
  toSource: function() {
    return new String();
  },
  
  /*
   * Resolves the object specifier, creating an array of object references.
   * @returns {BevelAndEmbossSetting}
   */
  getElements: function() {
    return new BevelAndEmbossSetting();
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
