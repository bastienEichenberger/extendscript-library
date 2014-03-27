/*
 * XML view preferences
 */
var XMLViewPreference = {
  /*
   * If true, displays the tag options dialog when tagging any item whose parent is not tagged.
   * @type {Boolean}
   */
  showTagOptions: undefined,
  
  /*
   * Returns true if the object specifier resolves to valid objects.
   * @type {Boolean}
   */
  isValid: undefined,
  
  /*
   * The parent of the XMLViewPreference (a Application or Document).
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
   * If true, displays the structure view.
   * @type {Boolean}
   */
  showStructure: undefined,
  
  /*
   * If true, displays XML tags.
   * @type {Boolean}
   */
  showTagMarkers: undefined,
  
  /*
   * If true, displays XML tags in tagged frames.
   * @type {Boolean}
   */
  showTaggedFrames: undefined,
  
  /*
   * If true, displays attributes as well as elements in the structure view. Note: Valid only when show structure is true.
   * @type {Boolean}
   */
  showAttributes: undefined,
  
  /*
   * If true, the structure view displays text snippets of element content. Note: Valid only when show structure is true.
   * @type {Boolean}
   */
  showTextSnippets: undefined,
  
  /*
   * A property that allows setting of several properties at the same time.
   * @type {Object}
   */
  properties: undefined,
  
  /*
   * Generates a string which, if executed, will return the XMLViewPreference.
   * @returns {String}
   */
  toSource: function() {
    return new String();
  },
  
  /*
   * Resolves the object specifier, creating an array of object references.
   * @returns {XMLViewPreference}
   */
  getElements: function() {
    return new XMLViewPreference();
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
