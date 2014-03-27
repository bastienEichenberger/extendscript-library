/*
 * A font.
 */
var Font = {
  /*
   * If true, the font can be embedded.
   * @type {Boolean}
   */
  allowEditableEmbedding: undefined,
  
  /*
   * If true, the font can be converted to outlines.
   * @type {Boolean}
   */
  allowOutlines: undefined,
  
  /*
   * If true, the font can be embedded in a PDF document.
   * @type {Boolean}
   */
  allowPDFEmbedding: undefined,
  
  /*
   * If true, the can font be printed.
   * @type {Boolean}
   */
  allowPrinting: undefined,
  
  /*
   * The name of the font family
   * @type {String}
   */
  fontFamily: undefined,
  
  /*
   * The full path to the Font.
   * @type {String}
   */
  location: undefined,
  
  /*
   * The name of the Font.
   * @type {String}
   */
  name: undefined,
  
  /*
   * The PostScript name of the font.
   * @type {String}
   */
  postscriptName: undefined,
  
  /*
   * If true, the font allows only restricted printing.
   * @type {Boolean}
   */
  restrictedPrinting: undefined,
  
  /*
   * The status of the font.
   * @type {FontStatus}
   */
  status: undefined,
  
  /*
   * The name of the font style.
   * @type {String}
   */
  fontStyleName: undefined,
  
  /*
   * The type of font.
   * @type {FontTypes}
   */
  fontType: undefined,
  
  /*
   * The writing script.
   * @type {Number}
   */
  writingScript: undefined,
  
  /*
   * The full font name.
   * @type {String}
   */
  fullName: undefined,
  
  /*
   * The full native name of the font.
   * @type {String}
   */
  fullNameNative: undefined,
  
  /*
   * The native name of the font style.
   * @type {String}
   */
  fontStyleNameNative: undefined,
  
  /*
   * The platform font name.
   * @type {String}
   */
  platformName: undefined,
  
  /*
   * The font version.
   * @type {String}
   */
  version: undefined,
  
  /*
   * The registry of a CID font.
   * @type {String}
   */
  registry: undefined,
  
  /*
   * The ordering of a CID font.
   * @type {String}
   */
  ordering: undefined,
  
  /*
   * Returns true if the object specifier resolves to valid objects.
   * @type {Boolean}
   */
  isValid: undefined,
  
  /*
   * The parent of the Font (a Document or Application).
   * @type {Mixed}
   */
  parent: undefined,
  
  /*
   * The index of the Font within its containing object.
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
   * A property that allows setting of several properties at the same time.
   * @type {Object}
   */
  properties: undefined,
  
  /*
   * Checks whether the font supports the specified OpenType feature.
 *
   * @param {Mixed} using The OpenType feature to check for, specified either as an OpenType feature or a string. Can accept: OpenTypeFeature enumerator or String.
   * @returns {Boolean}
   */
  checkOpenTypeFeature: function(using) {
    return new Boolean();
  },
  
  /*
   * Create a copy of the font with just enough information to render the list of characters given.
 *
   * @param {String} charactersForSubset String with all the characters used in the resulting font.
   * @param {File} fontDestination File location for the new font.
   */
  createSubsetFont: function(charactersForSubset, fontDestination) {
  },
  
  /*
   * Generates a string which, if executed, will return the Font.
   * @returns {String}
   */
  toSource: function() {
    return new String();
  },
  
  /*
   * Resolves the object specifier, creating an array of object references.
   * @returns {Font}
   */
  getElements: function() {
    return new Font();
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
