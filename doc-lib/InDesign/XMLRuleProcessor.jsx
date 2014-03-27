/*
 * An XML rule processor.
 */
var XMLRuleProcessor = {
  /*
   * If true, the XML rule process has halted.
   * @type {Boolean}
   */
  halted: undefined,
  
  /*
   * The XPath condition paths of the rules in the rule set.
   * @type {String}
   */
  rulePaths: undefined,
  
  /*
   * The unique ID of the XMLRuleProcessor.
   * @type {Number}
   */
  id: undefined,
  
  /*
   * Returns true if the object specifier resolves to valid objects.
   * @type {Boolean}
   */
  isValid: undefined,
  
  /*
   * The parent of the XMLRuleProcessor (a Application).
   * @type {Application}
   */
  parent: undefined,
  
  /*
   * The index of the XMLRuleProcessor within its containing object.
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
   * A property that can be set to any string.
   * @type {String}
   */
  label: undefined,
  
  /*
   * The name of the XMLRuleProcessor; this is an alias to the XMLRuleProcessor's label property.
   * @type {String}
   */
  name: undefined,
  
  /*
   * A property that allows setting of several properties at the same time.
   * @type {Object}
   */
  properties: undefined,
  
  /*
   * Deletes the XMLRuleProcessor.
   */
  remove: function() {
  },
  
  /*
   * Start processing an XML rule set.
 *
   * @param {XMLElement} initialElement The XML element at which to start processing the rule set.
   * @returns {XMLRuleMatchData}
   */
  startProcessingRuleSet: function(initialElement) {
    return new XMLRuleMatchData();
  },
  
  /*
   * Finds the next matching XML element.
   * @returns {XMLRuleMatchData}
   */
  findNextMatch: function() {
    return new XMLRuleMatchData();
  },
  
  /*
   * Process the XML elements of the current XML element.
   * @returns {XMLRuleMatchData}
   */
  startProcessingSubtree: function() {
    return new XMLRuleMatchData();
  },
  
  /*
   * Do not process XML elements (children) of the current XML element.
   */
  skipChildren: function() {
  },
  
  /*
   * Stop processing XML rule set.
   */
  endProcessingRuleSet: function() {
  },
  
  /*
   * Halt the XML rule processor.
   */
  halt: function() {
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
   * Generates a string which, if executed, will return the XMLRuleProcessor.
   * @returns {String}
   */
  toSource: function() {
    return new String();
  },
  
  /*
   * Resolves the object specifier, creating an array of object references.
   * @returns {XMLRuleProcessor}
   */
  getElements: function() {
    return new XMLRuleProcessor();
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
