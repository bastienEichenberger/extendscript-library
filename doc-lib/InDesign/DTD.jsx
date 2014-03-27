/*
 * The document DTD.
 */
var DTD = {
  /*
   * The system ID of the DOCTYPE declaration. Note: Valid only when the DTD is an external subset.
   * @type {String}
   */
  systemId: undefined,
  
  /*
   * The public ID of the DOCTYPE declaration. Note: Valid only when the DTD is an external subset.
   * @type {String}
   */
  publicId: undefined,
  
  /*
   * The contents of the text. Can return: String or SpecialCharacters enumerator.
   * @type {Mixed}
   */
  contents: undefined,
  
  /*
   * The unique ID of the DTD.
   * @type {Number}
   */
  id: undefined,
  
  /*
   * Returns true if the object specifier resolves to valid objects.
   * @type {Boolean}
   */
  isValid: undefined,
  
  /*
   * The parent of the DTD (a Document).
   * @type {Document}
   */
  parent: undefined,
  
  /*
   * The index of the DTD within its containing object.
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
   * The tag of the root object.
   * @type {XMLTag}
   */
  rootTag: undefined,
  
  /*
   * A property that allows setting of several properties at the same time.
   * @type {Object}
   */
  properties: undefined,
  
  /*
   * Deletes the DTD.
   */
  remove: function() {
  },
  
  /*
   * Selects the object.
 *
   * @param {SelectionOptions} [existingSelection] The selection status of the DTD in relation to previously selected objects. 
   */
  select: function(existingSelection) {
  },
  
  /*
   * Generates a string which, if executed, will return the DTD.
   * @returns {String}
   */
  toSource: function() {
    return new String();
  },
  
  /*
   * Resolves the object specifier, creating an array of object references.
   * @returns {DTD}
   */
  getElements: function() {
    return new DTD();
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
