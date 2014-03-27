/*
 * Inner glow effect settings.
 */
var FindChangeInnerGlowSetting = {
  /*
   * Returns true if the object specifier resolves to valid objects.
   * @type {Boolean}
   */
  isValid: undefined,
  
  /*
   * The parent of the FindChangeInnerGlowSetting (a FindChangeTransparencySetting, FindChangeStrokeTransparencySetting, FindChangeFillTransparencySetting or FindChangeContentTransparencySetting).
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
   * If true, the inner glow effect is applied. Can return: Boolean or NothingEnum enumerator.
   * @type {Mixed}
   */
  applied: undefined,
  
  /*
   * The blending mode for the inner glow effect. Can return: BlendMode enumerator or NothingEnum enumerator.
   * @type {Mixed}
   */
  blendMode: undefined,
  
  /*
   * The opacity of the inner glow (as a percentage). (Range: 0 to 100). Can return: Real (0 - 100) or NothingEnum enumerator.
   * @type {Mixed}
   */
  opacity: undefined,
  
  /*
   * The amount (as a percentage) of noise applied to the inner glow. (Range: 0 to 100). Can return: Real (0 - 100) or NothingEnum enumerator.
   * @type {Mixed}
   */
  noise: undefined,
  
  /*
   * The color applied to the inner glow, specified as a swatch (color, gradient, tint, or mixed ink), or as an array of color values. The color mode dictates the array values: for RGB, specify three values, each in the range 0 to 255, in the format [R,G,B]; for CMYK, specify four values, each as a percentage and each in the range 0 to 100, in the format [C,M,Y,K]; for LAB, specify three values in the format [L,A,B], with L in the range 0 to 100 and A and B in the range -128 to 127. Can return: Swatch or NothingEnum enumerator.
   * @type {Mixed}
   */
  effectColor: undefined,
  
  /*
   * The technique used for the inner glow. Can return: GlowTechnique enumerator or NothingEnum enumerator.
   * @type {Mixed}
   */
  technique: undefined,
  
  /*
   * The amount of spread (as a percentage of the inner glow size). (Range: 0 to 100). Can return: Real (0 - 100) or NothingEnum enumerator.
   * @type {Mixed}
   */
  spread: undefined,
  
  /*
   * The size of the inner glow. Can return: Unit (0 - 144 points) or NothingEnum enumerator.
   * @type {Mixed}
   */
  size: undefined,
  
  /*
   * The light source of the inner glow effect. Can return: InnerGlowSource enumerator or NothingEnum enumerator.
   * @type {Mixed}
   */
  source: undefined,
  
  /*
   * A property that allows setting of several properties at the same time.
   * @type {Object}
   */
  properties: undefined,
  
  /*
   * Generates a string which, if executed, will return the FindChangeInnerGlowSetting.
   * @returns {String}
   */
  toSource: function() {
    return new String();
  },
  
  /*
   * Resolves the object specifier, creating an array of object references.
   * @returns {FindChangeInnerGlowSetting}
   */
  getElements: function() {
    return new FindChangeInnerGlowSetting();
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
