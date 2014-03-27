/*
 * A mapping object that maps a style &amp;&#35;40;paragraph, character, table, or cell&#41; to an XML tag.
 */
var XMLExportMap = {
  /*
   * The style mapped to the XML tag. Can return: ParagraphStyle, CharacterStyle, TableStyle or CellStyle. Can also accept: String.
   * @type {Mixed}
   */
  mappedStyle: undefined,
  
  /*
   * Returns true if the object specifier resolves to valid objects.
   * @type {Boolean}
   */
  isValid: undefined,
  
  /*
   * The parent of the XMLExportMap (a Application or Document).
   * @type {Mixed}
   */
  parent: undefined,
  
  /*
   * The index of the XMLExportMap within its containing object.
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
   * The XML tag applied to the element. Can also accept: String.
   * @type {XMLTag}
   */
  markupTag: undefined,
  
  /*
   * If true, includes stories on master spreads when mapping styles to tags.
   * @type {Boolean}
   */
  includeMasterPageStories: undefined,
  
  /*
   * If true, includes stories on the pasteboard when mapping styles to tags.
   * @type {Boolean}
   */
  includePasteboardStories: undefined,
  
  /*
   * If true, includes empty stories when mapping styles to tags.
   * @type {Boolean}
   */
  includeEmptyStories: undefined,
  
  /*
   * A property that allows setting of several properties at the same time.
   * @type {Object}
   */
  properties: undefined,
  
  /*
   * Deletes the XMLExportMap.
   */
  remove: function() {
  },
  
  /*
   * Generates a string which, if executed, will return the XMLExportMap.
   * @returns {String}
   */
  toSource: function() {
    return new String();
  },
  
  /*
   * Resolves the object specifier, creating an array of object references.
   * @returns {XMLExportMap}
   */
  getElements: function() {
    return new XMLExportMap();
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
