/*
 * A scrollbar with a draggable scroll indicator and stepper buttons to move the indicator.
 */
var Scrollbar = {
  /*
   * The amount by which to increment or decrement a scrollbar element's position when the user clicks a stepper button.
   * @type {Number}
   */
  stepdelta: undefined,
  
  /*
   * The amount to increment or decrement a scrollbar indicator's position when the user clicks ahead or behind the moveable element.
   * @type {Number}
   */
  jumpdelta: undefined,
  
  /*
   * The current position of the indicator.
   * @type {Number}
   */
  value: undefined,
  
  /*
   * undefined
   * @type {Number}
   */
  minvalue: undefined,
  
  /*
   * undefined
   * @type {Number}
   */
  maxvalue: undefined,
  
  /*
   * True if this element is active.
   * @type {Boolean}
   */
  active: undefined,
  
  /*
   * undefined
   * @type {String}
   */
  shortcutKey: undefined,
  
  /*
   * undefined
   * @type {ScriptUIGraphics}
   */
  graphics: undefined,
  
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
   * An array of child elements.
   * @type {Object}
   */
  children: undefined,
  
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
   * The element type, "scrollbar".
   * @type {String}
   */
  type: undefined,
  
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
   * An event-handler callback function, called when the element acquires the keyboard focus.
   */
  onActivate: function() {
  },
  
  /*
   * An event-handler callback function, called when the element loses the keyboard focus.
   */
  onDeactivate: function() {
  },
  
  /*
   * An event-handler callback function, called when the window is about to be drawn.
   */
  onDraw: function() {
  },
  
  /*
   * An event-handler callback function, called when the content of the element is in the process of changing
   */
  onChanging: function() {
  },
  
  /*
   * An event-handler callback function, called when the user has finished dragging the position indicator, or has clicked the control.
   */
  onChange: function() {
  },
  
  /*
   * undefined
   */
  onShortcutKey: function() {
  },
  
};
