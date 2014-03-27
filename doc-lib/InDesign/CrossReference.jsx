/*
 * A cross reference to a different index topic. &amp;&#35;40;For cross references in text, use the &apos;cross reference source' and 'hyperlink' objects.&#41;
 */
var CrossReference = {
  /*
   * The unique ID of the CrossReference.
   * @type {Number}
   */
  id: undefined,
  
  /*
   * Returns true if the object specifier resolves to valid objects.
   * @type {Boolean}
   */
  isValid: undefined,
  
  /*
   * The parent of the CrossReference (a Topic).
   * @type {Topic}
   */
  parent: undefined,
  
  /*
   * The index of the CrossReference within its containing object.
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
   * The topic to which this CrossReference points.
   * @type {Topic}
   */
  referencedTopic: undefined,
  
  /*
   * The text that precedes or follows the referenced topic.
   * @type {CrossReferenceType}
   */
  crossReferenceType: undefined,
  
  /*
   * The text used for a custom cross reference type. Note: Valid only for custom cross reference types.
   * @type {String}
   */
  customTypeString: undefined,
  
  /*
   * A property that can be set to any string.
   * @type {String}
   */
  label: undefined,
  
  /*
   * The name of the CrossReference; this is an alias to the CrossReference's label property.
   * @type {String}
   */
  name: undefined,
  
  /*
   * A property that allows setting of several properties at the same time.
   * @type {Object}
   */
  properties: undefined,
  
  /*
   * Deletes the CrossReference.
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
   * Generates a string which, if executed, will return the CrossReference.
   * @returns {String}
   */
  toSource: function() {
    return new String();
  },
  
  /*
   * Resolves the object specifier, creating an array of object references.
   * @returns {CrossReference}
   */
  getElements: function() {
    return new CrossReference();
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
