/*
 * Stroke/fill proxy settings.
 */
var StrokeFillProxySetting = {
  /*
   * Returns true if the object specifier resolves to valid objects.
   * @type {Boolean}
   */
  isValid: undefined,
  
  /*
   * The parent of the StrokeFillProxySetting (a Application).
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
   * Which part of the stroke/fill proxy is currently active.
   * @type {StrokeFillProxyOptions}
   */
  active: undefined,
  
  /*
   * Which target is affected by changes to the stroke/fill proxy.
   * @type {StrokeFillTargetOptions}
   */
  target: undefined,
  
  /*
   * The swatch (color, gradient, tint, or mixed ink) applied to the fill of the StrokeFillProxySetting. . Can also accept: String.
   * @type {Swatch}
   */
  fillColor: undefined,
  
  /*
   * The swatch (color, gradient, tint, or mixed ink) applied to the stroke of the StrokeFillProxySetting. Can also accept: String.
   * @type {Swatch}
   */
  strokeColor: undefined,
  
  /*
   * A property that allows setting of several properties at the same time.
   * @type {Object}
   */
  properties: undefined,
  
  /*
   * Generates a string which, if executed, will return the StrokeFillProxySetting.
   * @returns {String}
   */
  toSource: function() {
    return new String();
  },
  
  /*
   * Resolves the object specifier, creating an array of object references.
   * @returns {StrokeFillProxySetting}
   */
  getElements: function() {
    return new StrokeFillProxySetting();
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
