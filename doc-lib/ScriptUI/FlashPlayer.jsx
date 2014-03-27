/*
 * A control that contains a Flash Player, which can load and play Flash movies stored in SWF files.
 */
var FlashPlayer = {
  /*
   * True if this element is active.
   * @type {Boolean}
   */
  active: undefined,
  
  /*
   * True if this element is shown, false if it is hidden.
   * @type {Boolean}
   */
  visible: undefined,
  
  /*
   * The boundaries of the element, in parent-relative coordinates.
   * @type {Bounds}
   */
  bounds: undefined,
  
  /*
   * The upper left corner of this element relative to its parent.
   * @type {Point}
   */
  location: undefined,
  
  /*
   * The maximum height and width to which the element can be resized.
   * @type {Dimension}
   */
  maximumSize: undefined,
  
  /*
   * The minimum height and width to which the element can be resized.
   * @type {Dimension}
   */
  minimumSize: undefined,
  
  /*
   * The preferred size, used by layout managers to determine the best size for each element.
   * @type {Dimension}
   */
  preferredSize: undefined,
  
  /*
   * The current dimensions of this element.
   * @type {Dimension}
   */
  size: undefined,
  
  /*
   * The bounds of this element relative to the top-level parent window.
   * @type {Bounds}
   */
  windowBounds: undefined,
  
  /*
   * undefined
   * @type {String}
   */
  alignment: undefined,
  
  /*
   * An object that contains one or more creation properties of the container (properties used only when the element is created).
   * @type {Object}
   */
  properties: undefined,
  
  /*
   * True if this element is enabled.
   * @type {Boolean}
   */
  enabled: undefined,
  
  /*
   * The help text that is displayed when the mouse hovers over the element.
   * @type {String}
   */
  helpTip: undefined,
  
  /*
   * The number of pixels to indent the element during automatic layout.
   * @type {Number}
   */
  indent: undefined,
  
  /*
   * The parent element.
   * @type {Object}
   */
  parent: undefined,
  
  /*
   * The window that this element belongs to.
   * @type {Window}
   */
  window: undefined,
  
  /*
   * The element type, "flashplayer".
   * @type {String}
   */
  type: undefined,
  
  /*
   * Invokes an ActionScript function defined in the Flash application.
 *
   * @param {String} name The name of a Flash ActionScript function that has been registered with the ExternalInterface object by the currently loaded SWF file.
   * @param {Mixed} [argument] An argument to pass through to the function.
   * @returns {Mixed}
   */
  invokePlayerFunction: function(name, argument) {
    return new Mixed();
  },
  
  /*
   * Loads a movie into the Flash Player, and begins playing it.
 *
   * @param {File} file The File object for the SWF file to load.
   */
  loadMovie: function(file) {
  },
  
  /*
   * Restarts a movie that has been stopped.
 *
   * @param {Boolean} rewind When true, restarts the movie from the beginning; otherwise, starts playing from the	point where it was stopped.
   */
  playMovie: function(rewind) {
  },
  
  /*
   * Halts playback of the current movie.
   */
  stopMovie: function() {
  },
  
  /*
   * Sends a notification message, simulating the specified user interaction event.
 *
   * @param {String} [eventName] The name of the control event handler to call.
   */
  notify: function(eventName) {
  },
  
  /*
   * Shows this element.
   */
  show: function() {
  },
  
  /*
   * Hides this element.
   */
  hide: function() {
  },
  
  /*
   * Registers an event handler for a particular type of event occuring in this element.
 *
   * @param {String} eventName The name of the event.
   * @param {Function} handler The function that handles the event.
   * @param {Boolean} capturePhase When true, the handler is called only in the capturing phase of the event propagation.
   * @returns {Boolean}
   */
  addEventListener: function(eventName, handler, capturePhase) {
    return new Boolean();
  },
  
  /*
   * Unregisters an event handler for a particular type of event occuring in this element.
 *
   * @param {String} eventName The name of the event.
   * @param {Function} handler The function that handles the event.
   * @param {Boolean} capturePhase Whether to call the handler only in the capturing phase of the event propagation.
   * @returns {Boolean}
   */
  removeEventListener: function(eventName, handler, capturePhase) {
    return new Boolean();
  },
  
  /*
   * Simulates the occurrence of an event in this target.
   * @returns {Event}
   */
  dispatchEvent: function() {
    return new Event();
  },
  
  /*
   * A function definition for a callback from the Flash ActionScript environment.
   */
  callback: function() {
  },
  
};
