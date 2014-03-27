/*
 * A contour option.
 */
var ContourOption = {
  /*
   * A list of the clipping paths stored in the graphic.
   * @type {String}
   */
  photoshopPathNames: undefined,
  
  /*
   * A list of the alpha channels stored in the graphic.
   * @type {String}
   */
  alphaChannelPathNames: undefined,
  
  /*
   * Returns true if the object specifier resolves to valid objects.
   * @type {Boolean}
   */
  isValid: undefined,
  
  /*
   * The parent of the ContourOption (a TextWrapPreference).
   * @type {TextWrapPreference}
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
   * The contour type.
   * @type {ContourOptionsTypes}
   */
  contourType: undefined,
  
  /*
   * If true, creates interior clipping paths within the surrounding clipping path. Note: Valid only when clipping type is alpha channel or detect edges.
   * @type {Boolean}
   */
  includeInsideEdges: undefined,
  
  /*
   * The alpha channel or Photoshop path to use for the contour option. Valid only when the contour options is photoshop path or alpha channel.
   * @type {String}
   */
  contourPathName: undefined,
  
  /*
   * A property that allows setting of several properties at the same time.
   * @type {Object}
   */
  properties: undefined,
  
  /*
   * Generates a string which, if executed, will return the ContourOption.
   * @returns {String}
   */
  toSource: function() {
    return new String();
  },
  
  /*
   * Resolves the object specifier, creating an array of object references.
   * @returns {ContourOption}
   */
  getElements: function() {
    return new ContourOption();
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
