/*
 * A mapping object that maps an export type to an export tag.
 */
var StyleExportTagMap = {
  /*
   * The type of export.
   * @type {String}
   */
  exportType: undefined,
  
  /*
   * Returns true if the object specifier resolves to valid objects.
   * @type {Boolean}
   */
  isValid: undefined,
  
  /*
   * The parent of the StyleExportTagMap (a CharacterStyle or ParagraphStyle).
   * @type {Mixed}
   */
  parent: undefined,
  
  /*
   * The index of the StyleExportTagMap within its containing object.
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
   * Split Document (EPUB only)
   * @type {Boolean}
   */
  splitDocument: undefined,
  
  /*
   * Emit CSS
   * @type {Boolean}
   */
  emitCss: undefined,
  
  /*
   * The tag to map.
   * @type {String}
   */
  exportTag: undefined,
  
  /*
   * The class to map.
   * @type {String}
   */
  exportClass: undefined,
  
  /*
   * The attributes to map.
   * @type {String}
   */
  exportAttributes: undefined,
  
  /*
   * A property that allows setting of several properties at the same time.
   * @type {Object}
   */
  properties: undefined,
  
  /*
   * Deletes the StyleExportTagMap.
   */
  remove: function() {
  },
  
  /*
   * Generates a string which, if executed, will return the StyleExportTagMap.
   * @returns {String}
   */
  toSource: function() {
    return new String();
  },
  
  /*
   * Resolves the object specifier, creating an array of object references.
   * @returns {StyleExportTagMap}
   */
  getElements: function() {
    return new StyleExportTagMap();
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
