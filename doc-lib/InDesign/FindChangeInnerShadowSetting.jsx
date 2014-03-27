/*
 * Inner shadow effect settings.
 */
var FindChangeInnerShadowSetting = {
  /*
   * Returns true if the object specifier resolves to valid objects.
   * @type {Boolean}
   */
  isValid: undefined,
  
  /*
   * The parent of the FindChangeInnerShadowSetting (a FindChangeTransparencySetting, FindChangeStrokeTransparencySetting, FindChangeFillTransparencySetting or FindChangeContentTransparencySetting).
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
   * The horizontal offset of the shadow. Can return: Unit (-1000 - 1000 points) or NothingEnum enumerator.
   * @type {Mixed}
   */
  xOffset: undefined,
  
  /*
   * The vertical offset of the shadow. Can return: Unit (-1000 - 1000 points) or NothingEnum enumerator.
   * @type {Mixed}
   */
  yOffset: undefined,
  
  /*
   * If true, the inner shadow effect is applied. Can return: Boolean or NothingEnum enumerator.
   * @type {Mixed}
   */
  applied: undefined,
  
  /*
   * The color applied to the inner shadow, specified as a swatch (color, gradient, tint, or mixed ink), or as an array of color values. The color mode dictates the array values: for RGB, specify three values, each in the range 0 to 255, in the format [R,G,B]; for CMYK, specify four values, each as a percentage and each in the range 0 to 100, in the format [C,M,Y,K]; for LAB, specify three values in the format [L,A,B], with L in the range 0 to 100 and A and B in the range -128 to 127. . Can return: Swatch or NothingEnum enumerator.
   * @type {Mixed}
   */
  effectColor: undefined,
  
  /*
   * The blending mode for the inner shadow effect. Can return: BlendMode enumerator or NothingEnum enumerator.
   * @type {Mixed}
   */
  blendMode: undefined,
  
  /*
   * The opacity (as a percentage) of the inner shadow. (Range: 0 to 100). Can return: Real (0 - 100) or NothingEnum enumerator.
   * @type {Mixed}
   */
  opacity: undefined,
  
  /*
   * The angle at which the inner shadow is thrown. (Range: -360 to 360). Can return: Real (-180 - 180) or NothingEnum enumerator.
   * @type {Mixed}
   */
  angle: undefined,
  
  /*
   * The distance between the FindChangeInnerShadowSetting and the shadow. . Can return: Unit (0 - 1000 points) or NothingEnum enumerator.
   * @type {Mixed}
   */
  distance: undefined,
  
  /*
   * If true, the global light angle is used. Can return: Boolean or NothingEnum enumerator.
   * @type {Mixed}
   */
  useGlobalLight: undefined,
  
  /*
   * The amount to choke the inner shadow (as a percentage of shadow size). (Range: 0 to 100). Can return: Real (0 - 100) or NothingEnum enumerator.
   * @type {Mixed}
   */
  chokeAmount: undefined,
  
  /*
   * The size of the inner shadow. Can return: Unit (0 - 144 points) or NothingEnum enumerator.
   * @type {Mixed}
   */
  size: undefined,
  
  /*
   * The amount (as a percentage) of noise to add to the shadow. (Range: 0 to 100). Can return: Real (0 - 100) or NothingEnum enumerator.
   * @type {Mixed}
   */
  noise: undefined,
  
  /*
   * A property that allows setting of several properties at the same time.
   * @type {Object}
   */
  properties: undefined,
  
  /*
   * Generates a string which, if executed, will return the FindChangeInnerShadowSetting.
   * @returns {String}
   */
  toSource: function() {
    return new String();
  },
  
  /*
   * Resolves the object specifier, creating an array of object references.
   * @returns {FindChangeInnerShadowSetting}
   */
  getElements: function() {
    return new FindChangeInnerShadowSetting();
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
