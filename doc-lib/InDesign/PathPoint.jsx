/*
 * A path point of a path.
 */
var PathPoint = {
  /*
   * Returns true if the object specifier resolves to valid objects.
   * @type {Boolean}
   */
  isValid: undefined,
  
  /*
   * The parent of the PathPoint (a Path).
   * @type {Path}
   */
  parent: undefined,
  
  /*
   * The index of the PathPoint within its containing object.
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
   * The path point type.
   * @type {PointType}
   */
  pointType: undefined,
  
  /*
   * The location of the path point on the page, in the format [x, y].
   * @type {Mixed}
   */
  anchor: undefined,
  
  /*
   * The left-direction point, which controls the curve of the line segment preceding the path point on the path, in the format [x, y].
   * @type {Mixed}
   */
  leftDirection: undefined,
  
  /*
   * The right-direction point, which controls the curve of the line segment following the path point on the path, in the format [x, y].
   * @type {Mixed}
   */
  rightDirection: undefined,
  
  /*
   * A property that allows setting of several properties at the same time.
   * @type {Object}
   */
  properties: undefined,
  
  /*
   * Deletes the PathPoint.
   */
  remove: function() {
  },
  
  /*
   * Join this path point to another path point. The two points must be end points and their paths combined into a single path on a single page item.
 *
   * @param {PathPoint} reference The reference object. The path point to join to
   * @param {JoinOptions} [given] The join option to use. 
   */
  join: function(reference, given) {
  },
  
  /*
   * Generates a string which, if executed, will return the PathPoint.
   * @returns {String}
   */
  toSource: function() {
    return new String();
  },
  
  /*
   * Resolves the object specifier, creating an array of object references.
   * @returns {PathPoint}
   */
  getElements: function() {
    return new PathPoint();
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
