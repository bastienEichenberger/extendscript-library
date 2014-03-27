/*
 * Drop shadow settings.
 */
var FindChangeDropShadowSetting = {
  /*
   * Returns true if the object specifier resolves to valid objects.
   * @type {Boolean}
   */
  isValid: undefined,
  
  /*
   * The parent of the FindChangeDropShadowSetting (a FindChangeTransparencySetting, FindChangeStrokeTransparencySetting, FindChangeFillTransparencySetting or FindChangeContentTransparencySetting).
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
   * The distance between the item and its shadow. Can return: Unit (0 - 1000 points) or NothingEnum enumerator.
   * @type {Mixed}
   */
  distance: undefined,
  
  /*
   * The angle at which the shadow is thrown. Can return: Real (-180 - 180) or NothingEnum enumerator.
   * @type {Mixed}
   */
  angle: undefined,
  
  /*
   * The shadow mode. Can return: ShadowMode enumerator or NothingEnum enumerator.
   * @type {Mixed}
   */
  mode: undefined,
  
  /*
   * The blending mode for the drop shadow effect. Can return: BlendMode enumerator or NothingEnum enumerator.
   * @type {Mixed}
   */
  blendMode: undefined,
  
  /*
   * The opacity of the drop shadow (as a percentage). (Range: 0 to 100). Can return: Real (0 - 100) or NothingEnum enumerator.
   * @type {Mixed}
   */
  opacity: undefined,
  
  /*
   * The horizontal offset of the drop shadow. Range depends on the unit type. For points: -1000 to 1000; for picas: -83p4 to 83p4; for inches: -13.8889 to 13.8889; for mm: -352.778 to 352.778; for cm: -35.277 to 35.277; for ciceros: -78c2.389 to 78c2.389. Can return: Unit (-1000 - 1000 points) or NothingEnum enumerator.
   * @type {Mixed}
   */
  xOffset: undefined,
  
  /*
   * The vertical offset of the drop shadow. (Range depends on the unit type. For points: -1000 to 1000; for picas: -83p4 to 83p4; for inches: -13.8889 to 13.8889; for mm: -352.778 to 352.778; for cm: -35.277 to 35.277; for ciceros: -78c2.389 to 78c2.389). Can return: Unit (-1000 - 1000 points) or NothingEnum enumerator.
   * @type {Mixed}
   */
  yOffset: undefined,
  
  /*
   * The radius (in pixels) of the blur applied to the drop shadow. (Range depends on the unit type. For points: 0 to 144; for picas: 0p0 to 12p0; for inches: 0 to 2; for mm: 0 to 50.08; for cm: 0 to 5.08; for ciceros: 0c0 to 11c3.128.). Can return: Unit (0 - 144 points) or NothingEnum enumerator.
   * @type {Mixed}
   */
  size: undefined,
  
  /*
   * The color applied to the drop shadow, specified as a swatch (color, gradient, tint, or mixed ink), or as an array of color values. The color mode dictates the array values: for RGB, specify three values, each in the range 0 to 255, in the format [R,G,B]; for CMYK, specify four values, each as a percentage and each in the range 0 to 100, in the format [C,M,Y,K]; for LAB, specify three values in the format [L,A,B], with L in the range 0 to 100 and A and B in the range -128 to 127. Can return: Swatch or NothingEnum enumerator.
   * @type {Mixed}
   */
  effectColor: undefined,
  
  /*
   * The amount (as a percentage) of noise applied to the shadow. (Range: 0 to 100). Can return: Real (0 - 100) or NothingEnum enumerator.
   * @type {Mixed}
   */
  noise: undefined,
  
  /*
   * The amount (as a percentage of the blur width) to spread the footprint of the drop shadow and reduce the radius of the blur. (Range: 0 to 100). Can return: Real (0 - 100) or NothingEnum enumerator.
   * @type {Mixed}
   */
  spread: undefined,
  
  /*
   * If true, uses the global light angle. Can return: Boolean or NothingEnum enumerator.
   * @type {Mixed}
   */
  useGlobalLight: undefined,
  
  /*
   * If true, the layer will knock out the drop shadow. Can return: Boolean or NothingEnum enumerator.
   * @type {Mixed}
   */
  knockedOut: undefined,
  
  /*
   * If true, the drop shadow will take into account other non-shadow effects. Can return: Boolean or NothingEnum enumerator.
   * @type {Mixed}
   */
  honorOtherEffects: undefined,
  
  /*
   * A property that allows setting of several properties at the same time.
   * @type {Object}
   */
  properties: undefined,
  
  /*
   * Generates a string which, if executed, will return the FindChangeDropShadowSetting.
   * @returns {String}
   */
  toSource: function() {
    return new String();
  },
  
  /*
   * Resolves the object specifier, creating an array of object references.
   * @returns {FindChangeDropShadowSetting}
   */
  getElements: function() {
    return new FindChangeDropShadowSetting();
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
