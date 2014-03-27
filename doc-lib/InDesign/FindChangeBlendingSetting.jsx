/*
 * Basic object blending settings.
 */
var FindChangeBlendingSetting = {
  /*
   * Returns true if the object specifier resolves to valid objects.
   * @type {Boolean}
   */
  isValid: undefined,
  
  /*
   * The parent of the FindChangeBlendingSetting (a FindChangeTransparencySetting, FindChangeStrokeTransparencySetting, FindChangeFillTransparencySetting or FindChangeContentTransparencySetting).
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
   * The blending mode for controlling how the base color interacts with the color of the FindChangeBlendingSetting. Can return: BlendMode enumerator or NothingEnum enumerator.
   * @type {Mixed}
   */
  blendMode: undefined,
  
  /*
   * The fill opacity of the FindChangeBlendingSetting (as a percentage). (Range: 0 to 100). Can return: Real (0 - 100) or NothingEnum enumerator.
   * @type {Mixed}
   */
  opacity: undefined,
  
  /*
   * If true, the FindChangeBlendingSetting is a knockout group. Can return: Boolean or NothingEnum enumerator.
   * @type {Mixed}
   */
  knockoutGroup: undefined,
  
  /*
   * If true, blending is applied only to the group. If false, blending includes all objects beneath the group. Can return: Boolean or NothingEnum enumerator.
   * @type {Mixed}
   */
  isolateBlending: undefined,
  
  /*
   * A property that allows setting of several properties at the same time.
   * @type {Object}
   */
  properties: undefined,
  
  /*
   * Generates a string which, if executed, will return the FindChangeBlendingSetting.
   * @returns {String}
   */
  toSource: function() {
    return new String();
  },
  
  /*
   * Resolves the object specifier, creating an array of object references.
   * @returns {FindChangeBlendingSetting}
   */
  getElements: function() {
    return new FindChangeBlendingSetting();
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
