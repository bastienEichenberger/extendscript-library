/*
 * An XML attribute.
 */
var XMLAttribute = {
  /*
   * Returns true if the object specifier resolves to valid objects.
   * @type {Boolean}
   */
  isValid: undefined,
  
  /*
   * The parent of the XMLAttribute (a XMLElement).
   * @type {XMLElement}
   */
  parent: undefined,
  
  /*
   * The index of the XMLAttribute within its containing object.
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
   * The name of the XMLAttribute.
   * @type {String}
   */
  name: undefined,
  
  /*
   * The value of the XMLAttribute.
   * @type {String}
   */
  value: undefined,
  
  /*
   * A property that allows setting of several properties at the same time.
   * @type {Object}
   */
  properties: undefined,
  
  /*
   * Deletes the XMLAttribute.
   */
  remove: function() {
  },
  
  /*
   * Converts the XML attribute to a child element of its parent element.
 *
   * @param {XMLElementLocation} [located] The location of the new XML element within the parent XML element of the XML attribute. 
   * @param {XMLTag} [markupTag] The XML tag to apply to the new XML element. 
   * @returns {XMLElement}
   */
  convertToElement: function(located, markupTag) {
    return new XMLElement();
  },
  
  /*
   * Selects the object.
 *
   * @param {SelectionOptions} [existingSelection] The selection status of the XMLAttribute in relation to previously selected objects. 
   */
  select: function(existingSelection) {
  },
  
  /*
   * Generates a string which, if executed, will return the XMLAttribute.
   * @returns {String}
   */
  toSource: function() {
    return new String();
  },
  
  /*
   * Resolves the object specifier, creating an array of object references.
   * @returns {XMLAttribute}
   */
  getElements: function() {
    return new XMLAttribute();
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
