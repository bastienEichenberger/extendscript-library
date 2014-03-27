/*
 * An object that can contain a data merge text field.
 */
var DataMergeTextPlaceholder = {
  /*
   * The data merge field to insert in the placeholder. For information, see data merge text placeholder and data merge image placeholder.
   * @type {DataMergeField}
   */
  field: undefined,
  
  /*
   * The insertion point before the table in the story containing the table.
   * @type {InsertionPoint}
   */
  storyOffset: undefined,
  
  /*
   * The story that contains the text.
   * @type {Story}
   */
  parentStory: undefined,
  
  /*
   * The number of objects in the collection.
   * @type {Number}
   */
  length: undefined,
  
  /*
   * Returns true if the object specifier resolves to valid objects.
   * @type {Boolean}
   */
  isValid: undefined,
  
  /*
   * The parent of the DataMergeTextPlaceholder (a Document).
   * @type {Document}
   */
  parent: undefined,
  
  /*
   * The index of the DataMergeTextPlaceholder within its containing object.
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
   * Generates a string which, if executed, will return the DataMergeTextPlaceholder.
   * @returns {String}
   */
  toSource: function() {
    return new String();
  },
  
  /*
   * Resolves the object specifier, creating an array of object references.
   * @returns {DataMergeTextPlaceholder}
   */
  getElements: function() {
    return new DataMergeTextPlaceholder();
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
