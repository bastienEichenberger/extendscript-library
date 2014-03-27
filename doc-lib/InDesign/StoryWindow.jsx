/*
 * A story window.
 */
var StoryWindow = {
  /*
   * Dispatched after the active selection changes. This event bubbles. This event is not cancelable.
   * @type {String}
   */
  AFTER_SELECTION_CHANGED: undefined,
  
  /*
   * Dispatched after an attribute on the active selection changes. This event bubbles. This event is not cancelable.
   * @type {String}
   */
  AFTER_SELECTION_ATTRIBUTE_CHANGED: undefined,
  
  /*
   * Dispatched before the StoryWindow becomes inactive. This event bubbles. This event is not cancelable.
   * @type {String}
   */
  BEFORE_DEACTIVATE: undefined,
  
  /*
   * Dispatched after the StoryWindow becomes active. This event bubbles. This event is not cancelable.
   * @type {String}
   */
  AFTER_ACTIVATE: undefined,
  
  /*
   * Dispatched when the value of a property changes on this StoryWindow. This event bubbles. This event is not cancelable.
   * @type {String}
   */
  AFTER_ATTRIBUTE_CHANGED: undefined,
  
  /*
   * Dispatched after a StoryWindow is opened. This event bubbles. This event is not cancelable.
   * @type {String}
   */
  AFTER_OPEN: undefined,
  
  /*
   * Dispatched before a StoryWindow is closed. This event bubbles. This event is cancelable.
   * @type {String}
   */
  BEFORE_CLOSE: undefined,
  
  /*
   * Dispatched when a StoryWindow is closing. Since the close has been committed, it can no longer be canceled. This event bubbles. This event is not cancelable.
   * @type {String}
   */
  AFTER_CLOSE: undefined,
  
  /*
   * The name of the StoryWindow.
   * @type {String}
   */
  name: undefined,
  
  /*
   * Returns true if the object specifier resolves to valid objects.
   * @type {Boolean}
   */
  isValid: undefined,
  
  /*
   * The parent of the StoryWindow (a Document).
   * @type {Document}
   */
  parent: undefined,
  
  /*
   * The index of the StoryWindow within its containing object.
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
   * The selected object(s). Can also accept: Object or NothingEnum enumerator.
   * @type {Object}
   */
  selection: undefined,
  
  /*
   * The bounds of the window (specified in pixels) in the form [top, left, bottom, right].
   * @type {Number}
   */
  bounds: undefined,
  
  /*
   * The key object of the selection. Can also accept: NothingEnum enumerator.
   * @type {PageItem}
   */
  selectionKeyObject: undefined,
  
  /*
   * A property that allows setting of several properties at the same time.
   * @type {Object}
   */
  properties: undefined,
  
  /*
   * Selects the specified object(s).
 *
   * @param {Mixed} selectableItems The objects to select. Can accept: Object, Array of Objects, NothingEnum enumerator or SelectAll enumerator.
   * @param {SelectionOptions} [existingSelection] The selection status of the StoryWindow in relation to previously selected objects. 
   */
  select: function(selectableItems, existingSelection) {
  },
  
  /*
   * Closes the StoryWindow.
   */
  close: function() {
  },
  
  /*
   * Maximizes the window.
   */
  maximize: function() {
  },
  
  /*
   * Minimizes the window.
   */
  minimize: function() {
  },
  
  /*
   * Restores the window.
   */
  restore: function() {
  },
  
  /*
   * Brings the object to the front.
   */
  bringToFront: function() {
  },
  
  /*
   * Generates a string which, if executed, will return the StoryWindow.
   * @returns {String}
   */
  toSource: function() {
    return new String();
  },
  
  /*
   * Resolves the object specifier, creating an array of object references.
   * @returns {StoryWindow}
   */
  getElements: function() {
    return new StoryWindow();
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
