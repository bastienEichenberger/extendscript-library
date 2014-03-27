/*
 * An article member.
 */
var ArticleMember = {
  /*
   * The underlying page item
   * @type {PageItem}
   */
  itemRef: undefined,
  
  /*
   * The unique ID of the ArticleMember.
   * @type {Number}
   */
  id: undefined,
  
  /*
   * Returns true if the object specifier resolves to valid objects.
   * @type {Boolean}
   */
  isValid: undefined,
  
  /*
   * The parent of the ArticleMember (a Article).
   * @type {Article}
   */
  parent: undefined,
  
  /*
   * The index of the ArticleMember within its containing object.
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
   * A property that allows setting of several properties at the same time.
   * @type {Object}
   */
  properties: undefined,
  
  /*
   * Deletes the ArticleMember.
   */
  remove: function() {
  },
  
  /*
   * Moves the ArticleMember to the specified location.
 *
   * @param {LocationOptions} to The location relative to the reference object or within the containing object.
   * @param {ArticleMember} [reference] The reference object. Note: Required when the to value specifies before or after. 
   * @returns {ArticleMember}
   */
  move: function(to, reference) {
    return new ArticleMember();
  },
  
  /*
   * Generates a string which, if executed, will return the ArticleMember.
   * @returns {String}
   */
  toSource: function() {
    return new String();
  },
  
  /*
   * Resolves the object specifier, creating an array of object references.
   * @returns {ArticleMember}
   */
  getElements: function() {
    return new ArticleMember();
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
