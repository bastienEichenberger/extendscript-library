/*
 * A cross reference text source object.
 */
var CrossReferenceSource = {
  /*
   * If true, the hyperlink is hidden.
   * @type {Boolean}
   */
  hidden: undefined,
  
  /*
   * The unique ID of the CrossReferenceSource.
   * @type {Number}
   */
  id: undefined,
  
  /*
   * Returns true if the object specifier resolves to valid objects.
   * @type {Boolean}
   */
  isValid: undefined,
  
  /*
   * The parent of the CrossReferenceSource (a Document).
   * @type {Document}
   */
  parent: undefined,
  
  /*
   * The index of the CrossReferenceSource within its containing object.
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
   * Format used for cross reference source.
   * @type {CrossReferenceFormat}
   */
  appliedFormat: undefined,
  
  /*
   * The name of the CrossReferenceSource.
   * @type {String}
   */
  name: undefined,
  
  /*
   * The hyperlinked text or insertion point.
   * @type {Text}
   */
  sourceText: undefined,
  
  /*
   * Character style of the hyperlink text source.
   * @type {CharacterStyle}
   */
  appliedCharacterStyle: undefined,
  
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
   * Updates cross reference text source content.
   */
  update: function() {
  },
  
  /*
   * Deletes the CrossReferenceSource.
   */
  remove: function() {
  },
  
  /*
   * Jumps to the hyperlink source.
   */
  showSource: function() {
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
   * Generates a string which, if executed, will return the CrossReferenceSource.
   * @returns {String}
   */
  toSource: function() {
    return new String();
  },
  
  /*
   * Resolves the object specifier, creating an array of object references.
   * @returns {CrossReferenceSource}
   */
  getElements: function() {
    return new CrossReferenceSource();
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
