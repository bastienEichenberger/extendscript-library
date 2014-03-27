/*
 * Clipboard preferences.
 */
var ClipboardPreference = {
  /*
   * Returns true if the object specifier resolves to valid objects.
   * @type {Boolean}
   */
  isValid: undefined,
  
  /*
   * The parent of the ClipboardPreference (a Application).
   * @type {Application}
   */
  parent: undefined,
  
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
   * If true, includes text attributes when pasting text.
   * @type {Boolean}
   */
  preferStyledTextWhenPasting: undefined,
  
  /*
   * If true, pastes PDF if available.
   * @type {Boolean}
   */
  preferPDFWhenPasting: undefined,
  
  /*
   * If true, copies PDF to the clipboard.
   * @type {Boolean}
   */
  copyPDFToClipboard: undefined,
  
  /*
   * If true, objects cut or copied from different layers retain their layer assignment when pasted.
   * @type {Boolean}
   */
  pasteRemembersLayers: undefined,
  
  /*
   * If true, preserves PDF data on the system clipboard when the application exits.
   * @type {Boolean}
   */
  preservePdfClipboardAtQuit: undefined,
  
  /*
   * A property that allows setting of several properties at the same time.
   * @type {Object}
   */
  properties: undefined,
  
  /*
   * Generates a string which, if executed, will return the ClipboardPreference.
   * @returns {String}
   */
  toSource: function() {
    return new String();
  },
  
  /*
   * Resolves the object specifier, creating an array of object references.
   * @returns {ClipboardPreference}
   */
  getElements: function() {
    return new ClipboardPreference();
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
