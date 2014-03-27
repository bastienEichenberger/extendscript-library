/*
 * An XML processing instruction.
 */
var XMLInstruction = {
  /*
   * The insertion point before the table in the story containing the table.
   * @type {InsertionPoint}
   */
  storyOffset: undefined,
  
  /*
   * The unique ID of the XMLInstruction.
   * @type {Number}
   */
  id: undefined,
  
  /*
   * Returns true if the object specifier resolves to valid objects.
   * @type {Boolean}
   */
  isValid: undefined,
  
  /*
   * The parent of the XMLInstruction (a Document or XMLElement).
   * @type {Mixed}
   */
  parent: undefined,
  
  /*
   * The index of the XMLInstruction within its containing object.
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
   * A name that identifies the processing instruction to an application reading the exported XML file.
   * @type {String}
   */
  target: undefined,
  
  /*
   * A value that tells the application reading the exported XML file what to do with the processing instruction.
   * @type {String}
   */
  data: undefined,
  
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
   * @returns {XMLInstruction}
   */
  move: function(to, reference) {
    return new XMLInstruction();
  },
  
  /*
   * Duplicates the XMLInstruction.
   * @returns {XMLInstruction}
   */
  duplicate: function() {
    return new XMLInstruction();
  },
  
  /*
   * Deletes the XMLInstruction.
   */
  remove: function() {
  },
  
  /*
   * Selects the object.
 *
   * @param {SelectionOptions} [existingSelection] The selection status of the XMLInstruction in relation to previously selected objects. 
   */
  select: function(existingSelection) {
  },
  
  /*
   * Generates a string which, if executed, will return the XMLInstruction.
   * @returns {String}
   */
  toSource: function() {
    return new String();
  },
  
  /*
   * Resolves the object specifier, creating an array of object references.
   * @returns {XMLInstruction}
   */
  getElements: function() {
    return new XMLInstruction();
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
