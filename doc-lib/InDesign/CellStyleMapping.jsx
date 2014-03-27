/*
 * A cell style mapping.
 */
var CellStyleMapping = {
  /*
   * Returns true if the object specifier resolves to valid objects.
   * @type {Boolean}
   */
  isValid: undefined,
  
  /*
   * The parent of the CellStyleMapping (a Application, Document, Story or XmlStory).
   * @type {Mixed}
   */
  parent: undefined,
  
  /*
   * The index of the CellStyleMapping within its containing object.
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
   * The source style name property.
   * @type {String}
   */
  sourceStyleName: undefined,
  
  /*
   * The destination style name property.
   * @type {String}
   */
  destinationStyleName: undefined,
  
  /*
   * The type of the mapping rule.
   * @type {MapType}
   */
  mappingRuleType: undefined,
  
  /*
   * A property that allows setting of several properties at the same time.
   * @type {Object}
   */
  properties: undefined,
  
  /*
   * deletes a style mapping.
   */
  remove: function() {
  },
  
  /*
   * Generates a string which, if executed, will return the CellStyleMapping.
   * @returns {String}
   */
  toSource: function() {
    return new String();
  },
  
  /*
   * Resolves the object specifier, creating an array of object references.
   * @returns {CellStyleMapping}
   */
  getElements: function() {
    return new CellStyleMapping();
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
