/*
 * A document event.
 */
var DocumentEvent = {
  /*
   * Dispatched before a Document is created. This event bubbles. This event is cancelable.
   * @type {String}
   */
  BEFORE_NEW: undefined,
  
  /*
   * Dispatched after a Document is created. This event bubbles. This event is not cancelable.
   * @type {String}
   */
  AFTER_NEW: undefined,
  
  /*
   * Dispatched before a Document is opened. This event bubbles. This event is cancelable.
   * @type {String}
   */
  BEFORE_OPEN: undefined,
  
  /*
   * Dispatched after a Document is opened. This event bubbles. This event is not cancelable.
   * @type {String}
   */
  AFTER_OPEN: undefined,
  
  /*
   * Dispatched before a Document is saved. This event bubbles. This event is cancelable.
   * @type {String}
   */
  BEFORE_SAVE: undefined,
  
  /*
   * Dispatched after a Document is saved. This event bubbles. This event is not cancelable.
   * @type {String}
   */
  AFTER_SAVE: undefined,
  
  /*
   * Dispatched before a Document is saved under a new name. This event bubbles. This event is cancelable.
   * @type {String}
   */
  BEFORE_SAVE_AS: undefined,
  
  /*
   * Dispatched after a Document is saved under a new name. This event bubbles. This event is not cancelable.
   * @type {String}
   */
  AFTER_SAVE_AS: undefined,
  
  /*
   * Dispatched before a copy of a Document is saved. This event bubbles. This event is cancelable.
   * @type {String}
   */
  BEFORE_SAVE_A_COPY: undefined,
  
  /*
   * Dispatched after a copy of a Document is saved. This event bubbles. This event is not cancelable.
   * @type {String}
   */
  AFTER_SAVE_A_COPY: undefined,
  
  /*
   * Dispatched before a Document is reverted. This event bubbles. This event is cancelable.
   * @type {String}
   */
  BEFORE_REVERT: undefined,
  
  /*
   * Dispatched after a Document is reverted. This event bubbles. This event is not cancelable.
   * @type {String}
   */
  AFTER_REVERT: undefined,
  
  /*
   * Dispatched before a Document is closed. This event bubbles. This event is not cancelable.
   * @type {String}
   */
  BEFORE_CLOSE: undefined,
  
  /*
   * Dispatched after a Document is closed. This event bubbles. This event is not cancelable.
   * @type {String}
   */
  AFTER_CLOSE: undefined,
  
  /*
   * The full path to the DocumentEvent, including the name of the DocumentEvent.
   * @type {File}
   */
  fullName: undefined,
  
  /*
   * The name of the event.
   * @type {String}
   */
  eventType: undefined,
  
  /*
   * The target of the event.
   * @type {Object}
   */
  target: undefined,
  
  /*
   * The current propagation target of the event.
   * @type {Object}
   */
  currentTarget: undefined,
  
  /*
   * The current propagation phase of the event.
   * @type {EventPhases}
   */
  eventPhase: undefined,
  
  /*
   * If true, the event supports the bubbling phase of propagation.
   * @type {Boolean}
   */
  bubbles: undefined,
  
  /*
   * If true, the default behavior of the event on its target can be canceled.
   * @type {Boolean}
   */
  cancelable: undefined,
  
  /*
   * The time the event was initialized.
   * @type {Date}
   */
  timeStamp: undefined,
  
  /*
   * If true, propagation of the event beyond the current target has been stopped.
   * @type {Boolean}
   */
  propagationStopped: undefined,
  
  /*
   * If true, the default behavior of the event on its target has been canceled.
   * @type {Boolean}
   */
  defaultPrevented: undefined,
  
  /*
   * The unique ID of the DocumentEvent.
   * @type {Number}
   */
  id: undefined,
  
  /*
   * Returns true if the object specifier resolves to valid objects.
   * @type {Boolean}
   */
  isValid: undefined,
  
  /*
   * The parent of the DocumentEvent (a Application or Document).
   * @type {Mixed}
   */
  parent: undefined,
  
  /*
   * The index of the DocumentEvent within its containing object.
   * @type {Number}
   */
  index: undefined,
  
  /*
   * Controls the display of dialogs and alerts during script processing.
   * @type {UserInteractionLevels}
   */
  userInteractionLevel: undefined,
  
  /*
   * A property that allows setting of several properties at the same time.
   * @type {Object}
   */
  properties: undefined,
  
  /*
   * Stops propagation of the event beyond the current target.
   */
  stopPropagation: function() {
  },
  
  /*
   * Cancels the default behavior of the event on its target.
   */
  preventDefault: function() {
  },
  
  /*
   * Generates a string which, if executed, will return the DocumentEvent.
   * @returns {String}
   */
  toSource: function() {
    return new String();
  },
  
  /*
   * Resolves the object specifier, creating an array of object references.
   * @returns {DocumentEvent}
   */
  getElements: function() {
    return new DocumentEvent();
  },
  
  /*
   * Retrieves the object specifier.
   * @returns {String}
   */
  toSpecifier: function() {
    return new String();
  },
  
};
