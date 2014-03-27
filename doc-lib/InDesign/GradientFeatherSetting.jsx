/*
 * Gradient feather effect settings.
 */
var GradientFeatherSetting = {
  /*
   * Returns true if the object specifier resolves to valid objects.
   * @type {Boolean}
   */
  isValid: undefined,
  
  /*
   * The parent of the GradientFeatherSetting (a TransparencySetting, StrokeTransparencySetting, FillTransparencySetting or ContentTransparencySetting).
   * @type {Mixed}
   */
  parent: undefined,
  
  /*
   * A collection of opacity gradient stops.
   * @type {OpacityGradientStops}
   */
  opacityGradientStops: undefined,
  
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
   * If true, the gradient feather effect is applied.
   * @type {Boolean}
   */
  applied: undefined,
  
  /*
   * The type of gradient.
   * @type {GradientType}
   */
  type: undefined,
  
  /*
   * The angle of the gradient feather.
   * @type {Number}
   */
  angle: undefined,
  
  /*
   * The length of the axial gradient, or radius of the radial gradient.
   * @type {Mixed}
   */
  length: undefined,
  
  /*
   * The center point (for a radial gradient) or starting point (for a linear gradient) applied to the fill, as page coordinates in the format [x, y].
   * @type {Mixed}
   */
  gradientStart: undefined,
  
  /*
   * The hilite angle of the radial gradient feather.
   * @type {Number}
   */
  hiliteAngle: undefined,
  
  /*
   * The hilite length of the radial gradient feather.
   * @type {Mixed}
   */
  hiliteLength: undefined,
  
  /*
   * A property that allows setting of several properties at the same time.
   * @type {Object}
   */
  properties: undefined,
  
  /*
   * Generates a string which, if executed, will return the GradientFeatherSetting.
   * @returns {String}
   */
  toSource: function() {
    return new String();
  },
  
  /*
   * Resolves the object specifier, creating an array of object references.
   * @returns {GradientFeatherSetting}
   */
  getElements: function() {
    return new GradientFeatherSetting();
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
