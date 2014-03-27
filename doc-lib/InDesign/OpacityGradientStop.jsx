/*
 * An opacity gradient stop.
 */
var OpacityGradientStop = {
  /*
   * Returns true if the object specifier resolves to valid objects.
   * @type {Boolean}
   */
  isValid: undefined,
  
  /*
   * The parent of the OpacityGradientStop (a GradientFeatherSetting or FindChangeGradientFeatherSetting).
   * @type {Mixed}
   */
  parent: undefined,
  
  /*
   * The index of the OpacityGradientStop within its containing object.
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
   * The opacity of the opacity gradient stop (as a percentage). (Range: 0 to 100)
   * @type {Number}
   */
  opacity: undefined,
  
  /*
   * The location of the opacity gradient stop, as a percentage of the OpacityGradientStop size. (Range: 0 to 100)
   * @type {Number}
   */
  location: undefined,
  
  /*
   * The mid-point of the opacity gradient stop, as a percentage of the OpacityGradientStop size. (Range: 13 to 87)
   * @type {Number}
   */
  midpoint: undefined,
  
  /*
   * A property that allows setting of several properties at the same time.
   * @type {Object}
   */
  properties: undefined,
  
  /*
   * Deletes the OpacityGradientStop.
   */
  remove: function() {
  },
  
  /*
   * Generates a string which, if executed, will return the OpacityGradientStop.
   * @returns {String}
   */
  toSource: function() {
    return new String();
  },
  
  /*
   * Resolves the object specifier, creating an array of object references.
   * @returns {OpacityGradientStop}
   */
  getElements: function() {
    return new OpacityGradientStop();
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
