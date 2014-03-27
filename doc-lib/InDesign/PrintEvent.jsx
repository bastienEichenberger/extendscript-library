/*
 * A print event
 */
var PrintEvent = {
  /*
   * Dispatched before a PrintEvent is printed. This event bubbles. This event is cancelable.
   * @type {String}
   */
  BEFORE_PRINT: undefined,
  
  /*
   * Dispatched after a PrintEvent is printed. This event bubbles. This event is not cancelable.
   * @type {String}
   */
  AFTER_PRINT: undefined,
  
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
   * The unique ID of the PrintEvent.
   * @type {Number}
   */
  id: undefined,
  
  /*
   * Returns true if the object specifier resolves to valid objects.
   * @type {Boolean}
   */
  isValid: undefined,
  
  /*
   * The parent of the PrintEvent (a Document).
   * @type {Document}
   */
  parent: undefined,
  
  /*
   * The index of the PrintEvent within its containing object.
   * @type {Number}
   */
  index: undefined,
  
  /*
   * UI options for print document
   * @type {DocumentPrintUiOptions}
   */
  documentPrintUiOption: undefined,
  
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
   * Generates a string which, if executed, will return the PrintEvent.
   * @returns {String}
   */
  toSource: function() {
    return new String();
  },
  
  /*
   * Resolves the object specifier, creating an array of object references.
   * @returns {PrintEvent}
   */
  getElements: function() {
    return new PrintEvent();
  },
  
  /*
   * Retrieves the object specifier.
   * @returns {String}
   */
  toSpecifier: function() {
    return new String();
  },
  
};
