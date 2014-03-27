/*
 * A section.
 */
var Section = {
  /*
   * The number of pages in the section.
   * @type {Number}
   */
  length: undefined,
  
  /*
   * The number of pages in the alternate layout section.
   * @type {Number}
   */
  alternateLayoutLength: undefined,
  
  /*
   * The unique ID of the Section.
   * @type {Number}
   */
  id: undefined,
  
  /*
   * Returns true if the object specifier resolves to valid objects.
   * @type {Boolean}
   */
  isValid: undefined,
  
  /*
   * The parent of the Section (a Document).
   * @type {Document}
   */
  parent: undefined,
  
  /*
   * The index of the Section within its containing object.
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
   * The alternate layout name for a set of pages.
   * @type {String}
   */
  alternateLayout: undefined,
  
  /*
   * The name of the Section.
   * @type {String}
   */
  name: undefined,
  
  /*
   * The page number style. Can return: PageNumberStyle enumerator or String.
   * @type {Mixed}
   */
  pageNumberStyle: undefined,
  
  /*
   * If true, continues page numbers sequentially from the previous section.
   * @type {Boolean}
   */
  continueNumbering: undefined,
  
  /*
   * If true, places the specified prefix before page numbers on all pages in the section.
   * @type {Boolean}
   */
  includeSectionPrefix: undefined,
  
  /*
   * The page number assigned to the first page in the section. Note: Valid only when continue numbering is false.
   * @type {Number}
   */
  pageNumberStart: undefined,
  
  /*
   * The section marker.
   * @type {String}
   */
  marker: undefined,
  
  /*
   * The start page for the section.
   * @type {Page}
   */
  pageStart: undefined,
  
  /*
   * The prefix to place before page numbers on pages in the section. May include up to 8 characters. Note: Valid only when include section prefix is true.
   * @type {String}
   */
  sectionPrefix: undefined,
  
  /*
   * A property that can be set to any string.
   * @type {String}
   */
  label: undefined,
  
  /*
   * A property that allows setting of several properties at the same time.
   * @type {Object}
   */
  properties: undefined,
  
  /*
   * Deletes the Section.
   */
  remove: function() {
  },
  
  /*
   * Sets the label to the value associated with the specified key.
 *
   * @param {String} key The key.
   * @param {String} value The value.
   */
  insertLabel: function(key, value) {
  },
  
  /*
   * Gets the label value associated with the specified key.
 *
   * @param {String} key The key.
   * @returns {String}
   */
  extractLabel: function(key) {
    return new String();
  },
  
  /*
   * Generates a string which, if executed, will return the Section.
   * @returns {String}
   */
  toSource: function() {
    return new String();
  },
  
  /*
   * Resolves the object specifier, creating an array of object references.
   * @returns {Section}
   */
  getElements: function() {
    return new Section();
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
