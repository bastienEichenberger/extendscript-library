/*
 * A character style group.
 */
var CharacterStyleGroup = {
  /*
   * Lists all character styles (regardless of their group).
   * @type {CharacterStyle}
   */
  allCharacterStyles: undefined,
  
  /*
   * The unique ID of the CharacterStyleGroup.
   * @type {Number}
   */
  id: undefined,
  
  /*
   * Returns true if the object specifier resolves to valid objects.
   * @type {Boolean}
   */
  isValid: undefined,
  
  /*
   * The parent of the CharacterStyleGroup (a Document, Application or CharacterStyleGroup).
   * @type {Mixed}
   */
  parent: undefined,
  
  /*
   * The index of the CharacterStyleGroup within its containing object.
   * @type {Number}
   */
  index: undefined,
  
  /*
   * A collection of character styles.
   * @type {CharacterStyles}
   */
  characterStyles: undefined,
  
  /*
   * A collection of character style groups.
   * @type {CharacterStyleGroups}
   */
  characterStyleGroups: undefined,
  
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
   * The name of the CharacterStyleGroup.
   * @type {String}
   */
  name: undefined,
  
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
   * Duplicates the CharacterStyleGroup.
   * @returns {CharacterStyleGroup}
   */
  duplicate: function() {
    return new CharacterStyleGroup();
  },
  
  /*
   * Moves the style to the specified location.
 *
   * @param {LocationOptions} to The location relative to the reference object or within the containing object.
   * @param {Mixed} [reference] The reference object. Note: Required when the to parameter specifies before or after. Can accept: ParagraphStyle, ParagraphStyleGroup, CharacterStyle, CharacterStyleGroup, CellStyle, CellStyleGroup, TableStyle, TableStyleGroup, Document or Application. 
   * @returns {CharacterStyleGroup}
   */
  move: function(to, reference) {
    return new CharacterStyleGroup();
  },
  
  /*
   * Deletes the style.
 *
   * @param {Mixed} [replacingWith] The style to apply in place of the deleted style. Can accept: ParagraphStyle or CharacterStyle. 
   */
  remove: function(replacingWith) {
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
   * Generates a string which, if executed, will return the CharacterStyleGroup.
   * @returns {String}
   */
  toSource: function() {
    return new String();
  },
  
  /*
   * Resolves the object specifier, creating an array of object references.
   * @returns {CharacterStyleGroup}
   */
  getElements: function() {
    return new CharacterStyleGroup();
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
