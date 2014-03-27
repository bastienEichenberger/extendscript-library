/*
 * Creates a new window.
 * @constructor
   *
 * @param {String} type The window type.
 * @param {String} [title] The window title, a localizable string.
 * @param {Bounds} [bounds] The window's position and size.
 * @param {Object} [properties] An object containing creation-only properties.
 */
function Window(type, title, bounds, properties) {
  /*
   * undefined
   * @type {String}
   */
  this.frameworkName = undefined;
  
  /*
   * undefined
   * @type {Mixed}
   */
  this.version = undefined;
  
  /*
   * undefined
   * @type {ScriptUIGraphics}
   */
  this.graphics = undefined;
  
  /*
   * When true, the element is shown, when false it is hidden.
   * @type {Boolean}
   */
  this.visible = undefined;
  
  /*
   * The bounds of the window's drawable area, excluding the frame, in screen coordinates.
   * @type {Bounds}
   */
  this.bounds = undefined;
  
  /*
   * The bounds of the window frame in screen coordinates.
   * @type {Bounds}
   */
  this.frameBounds = undefined;
  
  /*
   * The top left corner of the window frame in screen coordinates.
   * @type {Point}
   */
  this.frameLocation = undefined;
  
  /*
   * The size and location of the window's frame in screen coordinates.
   * @type {Dimension}
   */
  this.frameSize = undefined;
  
  /*
   * The upper left corner of the window's drawable area.
   * @type {Point}
   */
  this.location = undefined;
  
  /*
   * The largest rectangle to which the window can be resized.
   * @type {Dimension}
   */
  this.maximumSize = undefined;
  
  /*
   * The smallest rectangle to which the window can be resized.
   * @type {Dimension}
   */
  this.minimumSize = undefined;
  
  /*
   * The preferred size of the window.
   * @type {Dimension}
   */
  this.preferredSize = undefined;
  
  /*
   * The current size and location of the content area of the window in screen coordinates.
   * @type {Dimension}
   */
  this.size = undefined;
  
  /*
   * The bounds of this window relative to the top-level parent window.
   * @type {Bounds}
   */
  this.windowBounds = undefined;
  
  /*
   * A number of characters for which to reserve space when calculating the preferred size of the window.
   * @type {Number}
   */
  this.characters = undefined;
  
  /*
   * The default text justification style for child text elements.
   * @type {String}
   */
  this.justify = undefined;
  
  /*
   * The title, label, or displayed text, a localizeable string.
   * @type {String}
   */
  this.text = undefined;
  
  /*
   * Set to true to make this window active.
   * @type {Boolean}
   */
  this.active = undefined;
  
  /*
   * undefined
   * @type {String}
   */
  this.shortcutKey = undefined;
  
  /*
   * undefined
   * @type {Object}
   */
  this.cancelElement = undefined;
  
  /*
   * undefined
   * @type {Object}
   */
  this.defaultElement = undefined;
  
  /*
   * True if the window is expanded.
   * @type {Boolean}
   */
  this.maximized = undefined;
  
  /*
   * True if the window is minimized or iconified.
   * @type {Boolean}
   */
  this.minimized = undefined;
  
  /*
   * Tells the layout manager how unlike-sized children of this container should be aligned within a column or row.
   * @type {String}
   */
  this.alignChildren = undefined;
  
  /*
   * The collection of UI elements that have been added to this container.
   * @type {Object}
   */
  this.children = undefined;
  
  /*
   * The layout manager for this container.
   * @type {LayoutManager}
   */
  this.layout = undefined;
  
  /*
   * The number of pixels between the edges of a container and the outermost child elements.
   * @type {Number}
   */
  this.margins = undefined;
  
  /*
   * The layout orientation of children in a container.
   * @type {String}
   */
  this.orientation = undefined;
  
  /*
   * The number of pixels separating one child element from its adjacent sibling element.
   * @type {Number}
   */
  this.spacing = undefined;
  
  /*
   * undefined
   * @type {String}
   */
  this.alignment = undefined;
  
  /*
   * An object that contains one or more creation properties of the container (properties used only when the element is created).
   * @type {Object}
   */
  this.properties = undefined;
  
  /*
   * True if this element is enabled.
   * @type {Boolean}
   */
  this.enabled = undefined;
  
  /*
   * The help text that is displayed when the mouse hovers over the element.
   * @type {String}
   */
  this.helpTip = undefined;
  
  /*
   * The number of pixels to indent the element.
   * @type {Number}
   */
  this.indent = undefined;
  
  /*
   * The immediate parent element.
   * @type {Object}
   */
  this.parent = undefined;
  
  /*
   * The window that this element belongs to.
   * @type {Window}
   */
  this.window = undefined;
  
  /*
   * The element type; "dialog", "palette", or "window".
   * @type {String}
   */
  this.type = undefined;
  
  /*
   * The opacity of the window, in the range [0..1].
   * @type {Number}
   */
  this.opacity = undefined;
  
  /*
   * Use this method to find an existing window.
   *
   * @param {String} type The name of a predefined resource available to JavaScript in the current application; or the window type.
   * @param {String} title The window title.
   * @returns {Window}
   */
  this.find = function(type, title) {
    return new Window();
  }
  
  /*
   * Displays a platform-standard dialog containing a short message and an OK button.
   *
   * @param {String} message TThe string for the displayed message.
   * @param {String} [title] A string to appear as the title of the dialog, if the platform supports a title.
   * @param {Boolean} errorIcon When true, the platform-standard alert icon is replaced by the platform-standard error icon in the dialog.
   */
  this.alert = function(message, title, errorIcon) {
  }
  
  /*
   * Displays a platform-standard dialog containing a short message and two buttons labeled Yes and No.
   *
   * @param {String} message The string for the displayed message.
   * @param {Boolean} noAsDefault When true, the No button is the default choice, selected when the user types Enter.
   * @param {String} [title] A string to appear as the title of the dialog, if the platform supports a title.
   * @returns {Boolean}
   */
  this.confirm = function(message, noAsDefault, title) {
    return new Boolean();
  }
  
  /*
   * Displays a modal dialog that returns the user’s text input.
   *
   * @param {String} prompt The string for the displayed message.
   * @param {String} [default] The initial value to be displayed in the text edit field.
   * @param {String} [title] A string to appear as the title of the dialog.
   * @returns {String}
   */
  this.prompt = function(prompt, default, title) {
    return new String();
  }
  
  /*
   * Makes this window visible.
   */
  this.show = function() {
  }
  
  /*
   * Hides this windows.
   */
  this.hide = function() {
  }
  
  /*
   * Sends a notification message to all listeners, simulating the specified user interaction event.
   *
   * @param {String} [eventName] The event name; if omitted, the default event is sent.
   */
  this.notify = function(eventName) {
  }
  
  /*
   * Centers this window on screen or with repect to another window.
   *
   * @param {Window} [window] The relative window. If not specified, centers on the screen.
   */
  this.center = function(window) {
  }
  
  /*
   * Closes this window.
   *
   * @param {Mixed} [return] A number to be returned from the show() method that invoked this window as a modal dialog.
   */
  this.close = function(return) {
  }
  
  /*
   * Creates and returns a new control or container object and adds it to the children of this window.
   *
   * @param {String} type undefined
   * @param {Bounds} [bounds] A bounds specification that describes the size and position of the new control or container, relative to its parent.
   * @param {String} [text] The text or label, a localizable string.
   * @param {Object} [properties] An object that contains one or more creation properties of the new child (properties used only when the element is created).
   * @returns {Object}
   */
  this.add = function(type, bounds, text, properties) {
    return new Object();
  }
  
  /*
   * undefined
   *
   * @param {Mixed} what undefined
   */
  this.remove = function(what) {
  }
  
  /*
   * Registers an event handler for a particular type of event occuring in this window.
   *
   * @param {String} eventName The name of the event.
   * @param {Function} handler The function that handles the event.
   * @param {Boolean} [capturePhase] When true, the handler is called only in the capturing phase of the event propagation.
   * @returns {Boolean}
   */
  this.addEventListener = function(eventName, handler, capturePhase) {
    return new Boolean();
  }
  
  /*
   * Unregisters an event handler for a particular type of event occuring in this window.
   *
   * @param {String} eventName The name of the event.
   * @param {Function} handler The function that handles the event.
   * @param {Boolean} capturePhase Whether to call the handler only in the capturing phase of the event propagation.
   * @returns {Boolean}
   */
  this.removeEventListener = function(eventName, handler, capturePhase) {
    return new Boolean();
  }
  
  /*
   * Simulates the occurrence of an event in this target.
   * @returns {UIEvent}
   */
  this.dispatchEvent = function() {
    return new UIEvent();
  }
  
  /*
   * An event-handler callback function, called when the window acquires the keyboard focus.
   */
  this.onActivate = function() {
  }
  
  /*
   * An event-handler callback function, called when the window loses the keyboard focus.
   */
  this.onDeactivate = function() {
  }
  
  /*
   * An event-handler callback function, called  when the window is about to be closed.
   * @returns {Boolean}
   */
  this.onClose = function() {
    return new Boolean();
  }
  
  /*
   * An event-handler callback function, called  when the window  has been moved
   */
  this.onMove = function() {
  }
  
  /*
   * An event-handler callback function, called  when the window is being moved
   */
  this.onMoving = function() {
  }
  
  /*
   * An event-handler callback function, called after the window has been resized
   */
  this.onResize = function() {
  }
  
  /*
   * An event-handler callback function, called while a window is being resized
   */
  this.onResizing = function() {
  }
  
  /*
   * undefined
   */
  this.onShortcutKey = function() {
  }
  
  /*
   * An event-handler callback function, called just before the window is displayed
   */
  this.onShow = function() {
  }
  
}
