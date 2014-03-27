/*
 * An import or export event.
 */
var ImportExportEvent = {
  /*
   * Dispatched before a ImportExportEvent is exported. This event bubbles. This event is cancelable.
   * @type {String}
   */
  BEFORE_EXPORT: undefined,
  
  /*
   * Dispatched after a ImportExportEvent is exported. This event bubbles. This event is not cancelable.
   * @type {String}
   */
  AFTER_EXPORT: undefined,
  
  /*
   * Dispatched before importing a file into a ImportExportEvent. This event bubbles. This event is cancelable.
   * @type {String}
   */
  BEFORE_IMPORT: undefined,
  
  /*
   * Dispatched after importing a file into a ImportExportEvent. This event bubbles. This event is not cancelable.
   * @type {String}
   */
  AFTER_IMPORT: undefined,
  
  /*
   * Dispatched after a ImportExportEvent export is canceled or fails. This event bubbles. This event is not cancelable.
   * @type {String}
   */
  FAILED_EXPORT: undefined,
  
  /*
   * The full path to the ImportExportEvent, including the name of the ImportExportEvent.
   * @type {File}
   */
  fullName: undefined,
  
  /*
   * The import/export file format.
   * @type {String}
   */
  format: undefined,
  
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
   * The unique ID of the ImportExportEvent.
   * @type {Number}
   */
  id: undefined,
  
  /*
   * Returns true if the object specifier resolves to valid objects.
   * @type {Boolean}
   */
  isValid: undefined,
  
  /*
   * The parent of the ImportExportEvent (a Application or Document).
   * @type {Mixed}
   */
  parent: undefined,
  
  /*
   * The index of the ImportExportEvent within its containing object.
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
   * Generates a string which, if executed, will return the ImportExportEvent.
   * @returns {String}
   */
  toSource: function() {
    return new String();
  },
  
  /*
   * Resolves the object specifier, creating an array of object references.
   * @returns {ImportExportEvent}
   */
  getElements: function() {
    return new ImportExportEvent();
  },
  
  /*
   * Retrieves the object specifier.
   * @returns {String}
   */
  toSpecifier: function() {
    return new String();
  },
  
};
