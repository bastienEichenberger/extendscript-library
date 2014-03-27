/*
 * A text variable definition in a document.
 */
var TextVariable = {
  /*
   * Variable instances associated with the text variable.
   * @type {TextVariableInstance}
   */
  associatedInstances: undefined,
  
  /*
   * The preferences associated with the text variable. Can return: PageNumberVariablePreference, ChapterNumberVariablePreference, DateVariablePreference, FileNameVariablePreference, MatchCharacterStylePreference, MatchParagraphStylePreference, CustomTextVariablePreference or CaptionMetadataVariablePreference.
   * @type {Mixed}
   */
  variableOptions: undefined,
  
  /*
   * Returns true if the object specifier resolves to valid objects.
   * @type {Boolean}
   */
  isValid: undefined,
  
  /*
   * The parent of the TextVariable (a Application or Document).
   * @type {Mixed}
   */
  parent: undefined,
  
  /*
   * The index of the TextVariable within its containing object.
   * @type {Number}
   */
  index: undefined,
  
  /*
   * A collection of preferences objects.
   * @type {Preferences}
   */
  preferences: undefined,
  
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
   * The name of the TextVariable.
   * @type {String}
   */
  name: undefined,
  
  /*
   * The variable type.
   * @type {VariableTypes}
   */
  variableType: undefined,
  
  /*
   * A property that allows setting of several properties at the same time.
   * @type {Object}
   */
  properties: undefined,
  
  /*
   * Deletes the TextVariable.
   */
  remove: function() {
  },
  
  /*
   * Convert all of this variable's instances to text.
   * @returns {Text}
   */
  convertToText: function() {
    return new Text();
  },
  
  /*
   * Generates a string which, if executed, will return the TextVariable.
   * @returns {String}
   */
  toSource: function() {
    return new String();
  },
  
  /*
   * Resolves the object specifier, creating an array of object references.
   * @returns {TextVariable}
   */
  getElements: function() {
    return new TextVariable();
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
