/*
 * An object style group.
 */
var ObjectStyleGroup = {
  /*
   * All object styles contained by the ObjectStyleGroup.
   * @type {ObjectStyle}
   */
  allObjectStyles: undefined,
  
  /*
   * The unique ID of the ObjectStyleGroup.
   * @type {Number}
   */
  id: undefined,
  
  /*
   * Returns true if the object specifier resolves to valid objects.
   * @type {Boolean}
   */
  isValid: undefined,
  
  /*
   * The parent of the ObjectStyleGroup (a Document, Application or ObjectStyleGroup).
   * @type {Mixed}
   */
  parent: undefined,
  
  /*
   * The index of the ObjectStyleGroup within its containing object.
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
   * A collection of object styles.
   * @type {ObjectStyles}
   */
  objectStyles: undefined,
  
  /*
   * A collection of object style groups.
   * @type {ObjectStyleGroups}
   */
  objectStyleGroups: undefined,
  
  /*
   * The name of the ObjectStyleGroup.
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
   * Duplicates the ObjectStyleGroup.
   * @returns {ObjectStyleGroup}
   */
  duplicate: function() {
    return new ObjectStyleGroup();
  },
  
  /*
   * Moves the ObjectStyleGroup to the specified location.
 *
   * @param {LocationOptions} to The new location relative to the reference object or within the container object.
   * @param {Mixed} [reference] The reference object. Note: Required when the to parameter is before or after. Can accept: ObjectStyle, ObjectStyleGroup, Document or Application. 
   * @returns {ObjectStyleGroup}
   */
  move: function(to, reference) {
    return new ObjectStyleGroup();
  },
  
  /*
   * Deletes the ObjectStyleGroup.
 *
   * @param {ObjectStyle} [replacingWith] The ObjectStyleGroup to apply in place of the deleted ObjectStyleGroup. 
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
   * Generates a string which, if executed, will return the ObjectStyleGroup.
   * @returns {String}
   */
  toSource: function() {
    return new String();
  },
  
  /*
   * Resolves the object specifier, creating an array of object references.
   * @returns {ObjectStyleGroup}
   */
  getElements: function() {
    return new ObjectStyleGroup();
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
