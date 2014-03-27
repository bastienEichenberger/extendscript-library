/*
 * An assigned story.
 */
var AssignedStory = {
  /*
   * A reference to the assigned story. Can return: Story, PageItem, Oval, Rectangle or Polygon.
   * @type {Mixed}
   */
  storyReference: undefined,
  
  /*
   * The file path (colon delimited on the Mac OS). Can also accept: File.
   * @type {String}
   */
  filePath: undefined,
  
  /*
   * The unique ID of the AssignedStory.
   * @type {Number}
   */
  id: undefined,
  
  /*
   * Returns true if the object specifier resolves to valid objects.
   * @type {Boolean}
   */
  isValid: undefined,
  
  /*
   * The parent of the AssignedStory (a Assignment).
   * @type {Assignment}
   */
  parent: undefined,
  
  /*
   * The index of the AssignedStory within its containing object.
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
   * The name of the AssignedStory.
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
   * Moves the assigned story to the specified location.
 *
   * @param {LocationOptions} [to] The location of the assigned story relative to the reference object or within the containing object. 
   * @param {Mixed} [reference] The reference object. Note: Required when the to parameter specifies before or after. Can accept: Assignment or AssignedStory. 
   * @returns {AssignedStory}
   */
  move: function(to, reference) {
    return new AssignedStory();
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
   * Generates a string which, if executed, will return the AssignedStory.
   * @returns {String}
   */
  toSource: function() {
    return new String();
  },
  
  /*
   * Resolves the object specifier, creating an array of object references.
   * @returns {AssignedStory}
   */
  getElements: function() {
    return new AssignedStory();
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
