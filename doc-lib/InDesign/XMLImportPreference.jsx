/*
 * XML import preferences.
 */
var XMLImportPreference = {
  /*
   * Returns true if the object specifier resolves to valid objects.
   * @type {Boolean}
   */
  isValid: undefined,
  
  /*
   * The parent of the XMLImportPreference (a Application or Document).
   * @type {Mixed}
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
   * If true, creates a link to the imported XML file. If false, embeds the file.
   * @type {Boolean}
   */
  createLinkToXML: undefined,
  
  /*
   * If true, repeating text elements inherit the formatting applied to placeholder text. Note: Valid only when import style is merge.
   * @type {Boolean}
   */
  repeatTextElements: undefined,
  
  /*
   * If true, ignores elements that do not match the existing structure. Note: Valid only when import style is merge.
   * @type {Boolean}
   */
  ignoreUnmatchedIncoming: undefined,
  
  /*
   * If true, imports text into tables if tags match placeholder tables and their cells. Note: Valid only when import style is merge.
   * @type {Boolean}
   */
  importTextIntoTables: undefined,
  
  /*
   * If true, leaves existing content in place if the matching XML content contains only whitespace characters such as a carriage return or a tab character. Note: Valid only when import style is merge.
   * @type {Boolean}
   */
  ignoreWhitespace: undefined,
  
  /*
   * If true, deletes existing elements or placeholders in the document that do not have matches in the XML file. Note: Valid only when import style is merge.
   * @type {Boolean}
   */
  removeUnmatchedExisting: undefined,
  
  /*
   * If true, imports into the selected XML element. If false, imports at the root element.
   * @type {Boolean}
   */
  importToSelected: undefined,
  
  /*
   * The style of incorporating imported XML content into the document.
   * @type {XMLImportStyles}
   */
  importStyle: undefined,
  
  /*
   * If true, transforms the XML using an XSLT file.
   * @type {Boolean}
   */
  allowTransform: undefined,
  
  /*
   * The name of the XSLT file. Note: Valid when allow transform is true. Can return: File or XMLTransformFile enumerator.
   * @type {Mixed}
   */
  transformFilename: undefined,
  
  /*
   * Stylesheet parameters as a list of name/value pairs in the format [[name, value], [name, value], ...]. Can return: Ordered array containing name:String, value:String.
   * @type {Mixed}
   */
  transformParameters: undefined,
  
  /*
   * If true, imports CALS tables as InDesign tables.
   * @type {Boolean}
   */
  importCALSTables: undefined,
  
  /*
   * A property that allows setting of several properties at the same time.
   * @type {Object}
   */
  properties: undefined,
  
  /*
   * Generates a string which, if executed, will return the XMLImportPreference.
   * @returns {String}
   */
  toSource: function() {
    return new String();
  },
  
  /*
   * Resolves the object specifier, creating an array of object references.
   * @returns {XMLImportPreference}
   */
  getElements: function() {
    return new XMLImportPreference();
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
