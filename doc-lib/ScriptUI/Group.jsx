/*
 * A container for other controls within a window.
 */
var Group = {
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
   * Tells the layout manager how unlike-sized children of this container should be aligned within a column or row.
   * @type {String}
   */
  alignChildren: undefined,
  
  /*
   * An array of child elements.
   * @type {Object}
   */
  children: undefined,
  
  /*
   * The layout manager for this container.
   * @type {LayoutManager}
   */
  layout: undefined,
  
  /*
   * The number of pixels between the edges of a container and the outermost child elements.
   * @type {Number}
   */
  margins: undefined,
  
  /*
   * The layout orientation of children in a container.
   * @type {String}
   */
  orientation: undefined,
  
  /*
   * The number of pixels separating one child element from its adjacent sibling element.
   * @type {Number}
   */
  spacing: undefined,
  
  /*
   * undefined
   * @type {String}
   */
  alignment: undefined,
  
  /*
   * An object that contains one or more creation properties of the control (properties used only when the element is created).
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
   * The element type; "group".
   * @type {String}
   */
  type: undefined,
  
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
   * Adds a child element to this container.
 *
   * @param {String} type undefined
   * @param {Bounds} [bounds] A bounds specification that describes the size and position of the new control or container, relative to its parent.
   * @param {String} [text] The text or label, a localizable string.
   * @param {Object} [properties] An object that contains one or more creation properties of the new child (properties used only when the element is created).
   * @returns {Object}
   */
  add: function(type, bounds, text, properties) {
    return new Object();
  },
  
  /*
   * undefined
 *
   * @param {Mixed} what undefined
   */
  remove: function(what) {
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
   * An event-handler callback function, called when the group is about to be drawn.
   */
  onDraw: function() {
  },
  
};
