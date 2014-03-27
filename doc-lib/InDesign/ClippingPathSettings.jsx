/*
 * Clipping path settings.
 */
var ClippingPathSettings = {
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
   * The parent of the ClippingPathSettings (a Image, EPS, WMF, PICT, PDF or ImportedPage).
   * @type {Mixed}
   */
  parent: undefined,
  
  /*
   * A collection of paths.
   * @type {Paths}
   */
  paths: undefined,
  
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
   * The clipping path type.
   * @type {ClippingPathType}
   */
  clippingType: undefined,
  
  /*
   * If true, inverts the clipping path.
   * @type {Boolean}
   */
  invertPath: undefined,
  
  /*
   * If true, creates interior clipping paths within the surrounding clipping path. Note: Valid only when clipping type is alpha channel or detect edges.
   * @type {Boolean}
   */
  includeInsideEdges: undefined,
  
  /*
   * If true, truncates the clipping path at the edge of the frame containing the graphic. Note: Valid only when clipping type is alpha channel or detect edges.
   * @type {Boolean}
   */
  restrictToFrame: undefined,
  
  /*
   * If true, uses the high-resolution version of the graphic to create the clipping path. If false, calculates the clipping path based on screen-display resolution. Note: Valid only when clipping type is detect edges.
   * @type {Boolean}
   */
  useHighResolutionImage: undefined,
  
  /*
   * The lowest value (darkest) pixel to allow in the image. All pixels in the image whose values are greater than (lighter than) the threshold value are clipped (obscured). (Range: 0 to 255) Note: Valid only when clipping type is detect edges or alpha channel.
   * @type {Number}
   */
  threshold: undefined,
  
  /*
   * Specifies how similar a pixel's intensity value can be to the threshold value before the pixel is obscured by the clipping path. (Range: 0 to 10) Note: Valid only when clipping type is detect edges or alpha channel.
   * @type {Number}
   */
  tolerance: undefined,
  
  /*
   * Shrinks the area enclosed by the clipping path by the specified amount. (Range depends on the unit. For points: -10000 to 10000; picas: -833p4 to 833p4; inches: -138.8889 to 138.8889; mm: -3527.778 to 3527.778; cm: -352.7778 to 352.7778; ciceros: -781c11.889 to 781c11.889)
   * @type {Mixed}
   */
  insetFrame: undefined,
  
  /*
   * The name of the Photoshop path or alpha channel to use as a clipping path.
   * @type {String}
   */
  appliedPathName: undefined,
  
  /*
   * A property that allows setting of several properties at the same time.
   * @type {Object}
   */
  properties: undefined,
  
  /*
   * Converts the clipping path to a frame.
   * @returns {PageItem}
   */
  convertToFrame: function() {
    return new PageItem();
  },
  
  /*
   * Generates a string which, if executed, will return the ClippingPathSettings.
   * @returns {String}
   */
  toSource: function() {
    return new String();
  },
  
  /*
   * Resolves the object specifier, creating an array of object references.
   * @returns {ClippingPathSettings}
   */
  getElements: function() {
    return new ClippingPathSettings();
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
