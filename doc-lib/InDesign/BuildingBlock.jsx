/*
 * A cross reference building block object.
 */
var BuildingBlock = {
  /*
   * Returns true if the object specifier resolves to valid objects.
   * @type {Boolean}
   */
  isValid: undefined,
  
  /*
   * The parent of the BuildingBlock (a CrossReferenceFormat).
   * @type {CrossReferenceFormat}
   */
  parent: undefined,
  
  /*
   * The index of the BuildingBlock within its containing object.
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
   * Type of the building block.
   * @type {BuildingBlockTypes}
   */
  blockType: undefined,
  
  /*
   * Character style to be applied to the building block.
   * @type {CharacterStyle}
   */
  appliedCharacterStyle: undefined,
  
  /*
   * Building block custom text. Currently this is only useful in custom string building block. It is ignored for other types of building blocks.
   * @type {String}
   */
  customText: undefined,
  
  /*
   * Delimiter character for paragraph text and full paragraph building blocks. It is ignored for other types of building blocks.
   * @type {String}
   */
  appliedDelimiter: undefined,
  
  /*
   * If true, the source generated for the building block includes the delimiter. It is ignored if no delimiter is specified on the building block.
   * @type {Boolean}
   */
  includeDelimiter: undefined,
  
  /*
   * A property that allows setting of several properties at the same time.
   * @type {Object}
   */
  properties: undefined,
  
  /*
   * Deletes the BuildingBlock.
   */
  remove: function() {
  },
  
  /*
   * Generates a string which, if executed, will return the BuildingBlock.
   * @returns {String}
   */
  toSource: function() {
    return new String();
  },
  
  /*
   * Resolves the object specifier, creating an array of object references.
   * @returns {BuildingBlock}
   */
  getElements: function() {
    return new BuildingBlock();
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
