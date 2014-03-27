/*
 * Member of a group that is part of an article.
 */
var ArticleChild = {
  /*
   * The underlying page item
   * @type {PageItem}
   */
  itemRef: undefined,
  
  /*
   * The unique ID of the ArticleChild.
   * @type {Number}
   */
  id: undefined,
  
  /*
   * Returns true if the object specifier resolves to valid objects.
   * @type {Boolean}
   */
  isValid: undefined,
  
  /*
   * The parent of the ArticleChild (a Group).
   * @type {Group}
   */
  parent: undefined,
  
  /*
   * The index of the ArticleChild within its containing object.
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
   * Moves the ArticleChild to the specified location.
 *
   * @param {LocationOptions} to The location relative to the reference object or within the containing object.
   * @param {ArticleChild} [reference] The reference object. Note: Required when the to value specifies before or after. 
   * @returns {ArticleChild}
   */
  move: function(to, reference) {
    return new ArticleChild();
  },
  
  /*
   * Generates a string which, if executed, will return the ArticleChild.
   * @returns {String}
   */
  toSource: function() {
    return new String();
  },
  
  /*
   * Resolves the object specifier, creating an array of object references.
   * @returns {ArticleChild}
   */
  getElements: function() {
    return new ArticleChild();
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
