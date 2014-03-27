/*
 * The link options for a linked story.
 */
var LinkedStoryOption = {
  /*
   * Returns true if the object specifier resolves to valid objects.
   * @type {Boolean}
   */
  isValid: undefined,
  
  /*
   * The parent of the LinkedStoryOption (a Application, Document, Story or XmlStory).
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
   * If true, the linked story will be updated while saving.
   * @type {Boolean}
   */
  updateWhileSaving: undefined,
  
  /*
   * If true, a warning will be shown if the update link operation will override local edits.
   * @type {Boolean}
   */
  warnOnUpdateOfEditedStory: undefined,
  
  /*
   * If true, forced line breaks will be removed during story creation or update.
   * @type {Boolean}
   */
  removeForcedLineBreaks: undefined,
  
  /*
   * If true, style mappings will be applied during linked story creation or update.
   * @type {Boolean}
   */
  applyStyleMappings: undefined,
  
  /*
   * A property that allows setting of several properties at the same time.
   * @type {Object}
   */
  properties: undefined,
  
  /*
   * Generates a string which, if executed, will return the LinkedStoryOption.
   * @returns {String}
   */
  toSource: function() {
    return new String();
  },
  
  /*
   * Resolves the object specifier, creating an array of object references.
   * @returns {LinkedStoryOption}
   */
  getElements: function() {
    return new LinkedStoryOption();
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
