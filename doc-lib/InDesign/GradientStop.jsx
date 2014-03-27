/*
 * A gradient stop in a gradient.
 */
var GradientStop = {
  /*
   * Returns true if the object specifier resolves to valid objects.
   * @type {Boolean}
   */
  isValid: undefined,
  
  /*
   * The parent of the GradientStop (a Gradient).
   * @type {Gradient}
   */
  parent: undefined,
  
  /*
   * The index of the GradientStop within its containing object.
   * @type {Number}
   */
  index: undefined,
  
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
   * The swatch (color, gradient, tint, or mixed ink) applied to the gradient stop. Can return: MixedInk or Color.
   * @type {Mixed}
   */
  stopColor: undefined,
  
  /*
   * The starting location (as a percentage of the gradient length) of the gradient stop on the gradient. (Range: 0 to 100).
   * @type {Number}
   */
  location: undefined,
  
  /*
   * The mid-point (as a percentage of the gradient length) of the gradient stop. (Range: 13 to 87)
   * @type {Number}
   */
  midpoint: undefined,
  
  /*
   * A property that allows setting of several properties at the same time.
   * @type {Object}
   */
  properties: undefined,
  
  /*
   * Deletes the GradientStop.
   */
  remove: function() {
  },
  
  /*
   * Generates a string which, if executed, will return the GradientStop.
   * @returns {String}
   */
  toSource: function() {
    return new String();
  },
  
  /*
   * Resolves the object specifier, creating an array of object references.
   * @returns {GradientStop}
   */
  getElements: function() {
    return new GradientStop();
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
