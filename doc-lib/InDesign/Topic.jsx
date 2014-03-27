/*
 * An index topic.
 */
var Topic = {
  /*
   * Returns true if the object specifier resolves to valid objects.
   * @type {Boolean}
   */
  isValid: undefined,
  
  /*
   * The parent of the Topic (a IndexSection, Topic or Index).
   * @type {Mixed}
   */
  parent: undefined,
  
  /*
   * The index of the Topic within its containing object.
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
   * A collection of index topics.
   * @type {Topics}
   */
  topics: undefined,
  
  /*
   * A collection of index cross references. (For cross references in text, use the 'cross reference source' and 'hyperlink' objects.)
   * @type {CrossReferences}
   */
  crossReferences: undefined,
  
  /*
   * A collection of index page references.
   * @type {PageReferences}
   */
  pageReferences: undefined,
  
  /*
   * The string by which the topic is sorted instead of the topic name is not used. Note: The actual topic text, rather than the sort order text, appears in the index.
   * @type {String}
   */
  sortOrder: undefined,
  
  /*
   * The name of the Topic.
   * @type {String}
   */
  name: undefined,
  
  /*
   * A property that allows setting of several properties at the same time.
   * @type {Object}
   */
  properties: undefined,
  
  /*
   * Deletes the Topic.
   */
  remove: function() {
  },
  
  /*
   * Makes the initial letter for the specified index topic or group of index topics upper case.
 *
   * @param {IndexCapitalizationOptions} [capitalizationOption] The entry or entries to capitalize. 
   */
  capitalize: function(capitalizationOption) {
  },
  
  /*
   * Generates a string which, if executed, will return the Topic.
   * @returns {String}
   */
  toSource: function() {
    return new String();
  },
  
  /*
   * Resolves the object specifier, creating an array of object references.
   * @returns {Topic}
   */
  getElements: function() {
    return new Topic();
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
