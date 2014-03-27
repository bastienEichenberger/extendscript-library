/*
 * [object Object]
 */
var ListBox = {
  /*
   * The array of choice items displayed in the list.
   * @type {ListItem}
   */
  items: undefined,
  
  /*
   * The width and height in pixels of each item in the list.
   * @type {Dimension}
   */
  itemSize: undefined,
  
  /*
   * The currently selected item for a single-selection list, or an array of items for current selection in a multi-selection list.
   * @type {ListItem}
   */
  selection: undefined,
  
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
   * undefined
   * @type {Object}
   */
  children: undefined,
  
  /*
   * For a multi-column list box, the column properties.
   * @type {Object}
   */
  columns: undefined,
  
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
   * The element type; "listbox".
   * @type {String}
   */
  type: undefined,
  
  /*
   * Adds an item to the choices in this list.
 *
   * @param {String} type The type of the child element, the string "item".
   * @param {String} [text] The localizable text label for the item.
   * @returns {ListItem}
   */
  add: function(type, text) {
    return new ListItem();
  },
  
  /*
   * Retrieves an item object from the list that has a given text label.
 *
   * @param {String} text The text string to match.
   * @returns {ListItem}
   */
  find: function(text) {
    return new ListItem();
  },
  
  /*
   * Removes a child item from the list.
 *
   * @param {Mixed} what undefined
   */
  remove: function(what) {
  },
  
  /*
   * Removes all child items from the list.
   */
  removeAll: function() {
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
   * An event-handler callback function, called when the content of the element has been changed
   */
  onChange: function() {
  },
  
  /*
   * An event-handler callback function, called when an item in the listbox is double-clicked
   */
  onDoubleClick: function() {
  },
  
  /*
   * undefined
   */
  onShortcutKey: function() {
  },
  
  /*
   * An event-handler callback function, called when the window is about to be drawn.
   */
  onDraw: function() {
  },
  
};
