/*
 * A text variable instance in the text.
 */
var TextVariableInstance = {
  /*
   * The name of the TextVariableInstance.
   * @type {String}
   */
  name: undefined,
  
  /*
   * The text that replaces the variable marker. Note: This property cannot be set; it can be used only to update variables. .
   * @type {String}
   */
  resultText: undefined,
  
  /*
   * The insertion point before the table in the story containing the table.
   * @type {InsertionPoint}
   */
  storyOffset: undefined,
  
  /*
   * The unique ID of the TextVariableInstance.
   * @type {Number}
   */
  id: undefined,
  
  /*
   * Returns true if the object specifier resolves to valid objects.
   * @type {Boolean}
   */
  isValid: undefined,
  
  /*
   * The parent of the TextVariableInstance (a XmlStory, TextFrame, Story, Note, Cell, Footnote or Change).
   * @type {Mixed}
   */
  parent: undefined,
  
  /*
   * The index of the TextVariableInstance within its containing object.
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
   * The associated text variable.
   * @type {TextVariable}
   */
  associatedTextVariable: undefined,
  
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
   * Deletes the TextVariableInstance.
   */
  remove: function() {
  },
  
  /*
   * Converts the footnote to part of the story text and places the converted text at the former location of the footnote marker in the text.
   * @returns {Text}
   */
  convertToText: function() {
    return new Text();
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
   * Generates a string which, if executed, will return the TextVariableInstance.
   * @returns {String}
   */
  toSource: function() {
    return new String();
  },
  
  /*
   * Resolves the object specifier, creating an array of object references.
   * @returns {TextVariableInstance}
   */
  getElements: function() {
    return new TextVariableInstance();
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
