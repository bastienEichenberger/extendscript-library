/*
 * Anchored object default settings.
 */
var AnchoredObjectDefault = {
  /*
   * Returns true if the object specifier resolves to valid objects.
   * @type {Boolean}
   */
  isValid: undefined,
  
  /*
   * The parent of the AnchoredObjectDefault (a Application or Document).
   * @type {Mixed}
   */
  parent: undefined,
  
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
   * The initial frame type of a new anchored object.
   * @type {ContentType}
   */
  anchorContent: undefined,
  
  /*
   * The initial height of a new anchored object.
   * @type {Mixed}
   */
  initialAnchorHeight: undefined,
  
  /*
   * The initial width of a new anchored object.
   * @type {Mixed}
   */
  initialAnchorWidth: undefined,
  
  /*
   * The initial paragraph style of a new anchored object. Note: Valid when anchor content is text.
   * @type {ParagraphStyle}
   */
  anchoredParagraphStyle: undefined,
  
  /*
   * The initial object style of a new anchored object.
   * @type {ObjectStyle}
   */
  anchoredObjectStyle: undefined,
  
  /*
   * A property that allows setting of several properties at the same time.
   * @type {Object}
   */
  properties: undefined,
  
  /*
   * Generates a string which, if executed, will return the AnchoredObjectDefault.
   * @returns {String}
   */
  toSource: function() {
    return new String();
  },
  
  /*
   * Resolves the object specifier, creating an array of object references.
   * @returns {AnchoredObjectDefault}
   */
  getElements: function() {
    return new AnchoredObjectDefault();
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
