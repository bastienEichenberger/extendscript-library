/*
 * Directional feather effect settings.
 */
var DirectionalFeatherSetting = {
  /*
   * Returns true if the object specifier resolves to valid objects.
   * @type {Boolean}
   */
  isValid: undefined,
  
  /*
   * The parent of the DirectionalFeatherSetting (a TransparencySetting, StrokeTransparencySetting, FillTransparencySetting or ContentTransparencySetting).
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
   * If true, the directional feather effect is applied.
   * @type {Boolean}
   */
  applied: undefined,
  
  /*
   * The feather width (in pixels) on the left side of the DirectionalFeatherSetting.
   * @type {Mixed}
   */
  leftWidth: undefined,
  
  /*
   * The feather width (in pixels) on the right side of the DirectionalFeatherSetting. (Range: .2 to 250)
   * @type {Mixed}
   */
  rightWidth: undefined,
  
  /*
   * The feather width (in pixels) on the top side of the object DirectionalFeatherSetting. (Range: .2 to 250)
   * @type {Mixed}
   */
  topWidth: undefined,
  
  /*
   * The feather width (in pixels) on the bottom side of the object DirectionalFeatherSetting. (Range: .2 to 250)
   * @type {Mixed}
   */
  bottomWidth: undefined,
  
  /*
   * The amount to choke the directional feather (as a percentage of the feather width). (Range: 0 to 100)
   * @type {Number}
   */
  chokeAmount: undefined,
  
  /*
   * The angle of the feather. (Range: 180 to -180)
   * @type {Number}
   */
  angle: undefined,
  
  /*
   * The shape-following algorithm applied to the feather.
   * @type {FollowShapeModeOptions}
   */
  followShapeMode: undefined,
  
  /*
   * The amount of noise (as a percentage) applied to the feather region. (Range: 0 to 100)
   * @type {Number}
   */
  noise: undefined,
  
  /*
   * A property that allows setting of several properties at the same time.
   * @type {Object}
   */
  properties: undefined,
  
  /*
   * Generates a string which, if executed, will return the DirectionalFeatherSetting.
   * @returns {String}
   */
  toSource: function() {
    return new String();
  },
  
  /*
   * Resolves the object specifier, creating an array of object references.
   * @returns {DirectionalFeatherSetting}
   */
  getElements: function() {
    return new DirectionalFeatherSetting();
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
