/*
 * An XML comment.
 */
var XMLComment = {
  /*
   * The insertion point before the table in the story containing the table.
   * @type {InsertionPoint}
   */
  storyOffset: undefined,
  
  /*
   * The unique ID of the XMLComment.
   * @type {Number}
   */
  id: undefined,
  
  /*
   * Returns true if the object specifier resolves to valid objects.
   * @type {Boolean}
   */
  isValid: undefined,
  
  /*
   * The parent of the XMLComment (a Document or XMLElement).
   * @type {Mixed}
   */
  parent: undefined,
  
  /*
   * The index of the XMLComment within its containing object.
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
   * The text of the XML comment.
   * @type {String}
   */
  value: undefined,
  
  /*
   * A property that allows setting of several properties at the same time.
   * @type {Object}
   */
  properties: undefined,
  
  /*
   * Moves the element to the specified location.
 *
   * @param {LocationOptions} to The location in relation to the reference object or within the containing object.
   * @param {Mixed} [reference] The reference object. Note: Required when the to parameter specifies before or after. . Can accept: XMLItem or Text. 
   * @returns {XMLComment}
   */
  move: function(to, reference) {
    return new XMLComment();
  },
  
  /*
   * Duplicates the XMLComment.
   * @returns {XMLComment}
   */
  duplicate: function() {
    return new XMLComment();
  },
  
  /*
   * Deletes the XMLComment.
   */
  remove: function() {
  },
  
  /*
   * Selects the object.
 *
   * @param {SelectionOptions} [existingSelection] The selection status of the XMLComment in relation to previously selected objects. 
   */
  select: function(existingSelection) {
  },
  
  /*
   * Generates a string which, if executed, will return the XMLComment.
   * @returns {String}
   */
  toSource: function() {
    return new String();
  },
  
  /*
   * Resolves the object specifier, creating an array of object references.
   * @returns {XMLComment}
   */
  getElements: function() {
    return new XMLComment();
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
