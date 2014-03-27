/*
 * A path.
 */
var Path = {
  /*
   * Returns true if the object specifier resolves to valid objects.
   * @type {Boolean}
   */
  isValid: undefined,
  
  /*
   * The parent of the Path (a SplineItem, Polygon, GraphicLine, Rectangle, Oval, TextFrame, MediaItem, Sound, Movie, Button, MultiStateObject, ClippingPathSettings or TextWrapPreference).
   * @type {Mixed}
   */
  parent: undefined,
  
  /*
   * The index of the Path within its containing object.
   * @type {Number}
   */
  index: undefined,
  
  /*
   * A collection of path points.
   * @type {PathPoints}
   */
  pathPoints: undefined,
  
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
   * The path type.
   * @type {PathType}
   */
  pathType: undefined,
  
  /*
   * A list of the coordinates of all of the path points on the path, including anchor points and left- and right-direction points. When creating a path using this property, supply either a list of anchor point coordinates ([[x1, y1], [x2, y2], ...]) or a list of anchor point, left-direction point, and right-direction point coordinates ([[[x1, y1], [x2, y2], [x3, y3]], [[x4, y4], [x5, y5], [x6, y6]], ...]). Note: Providing only anchor points results in a path on which all of the path points are connected with straight line segments; supplying the positions of left- and right-direction points specifies curved line segments. Can return: Array of Arrays of 2 Units.
   * @type {Mixed}
   */
  entirePath: undefined,
  
  /*
   * A property that allows setting of several properties at the same time.
   * @type {Object}
   */
  properties: undefined,
  
  /*
   * Deletes the Path.
   */
  remove: function() {
  },
  
  /*
   * Reverses the path.
   */
  reverse: function() {
  },
  
  /*
   * Generates a string which, if executed, will return the Path.
   * @returns {String}
   */
  toSource: function() {
    return new String();
  },
  
  /*
   * Resolves the object specifier, creating an array of object references.
   * @returns {Path}
   */
  getElements: function() {
    return new Path();
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
