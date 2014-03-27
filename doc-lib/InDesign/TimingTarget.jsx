/*
 * a timing target.
 */
var TimingTarget = {
  /*
   * Returns true if the object specifier resolves to valid objects.
   * @type {Boolean}
   */
  isValid: undefined,
  
  /*
   * The parent of the TimingTarget (a TimingGroup).
   * @type {TimingGroup}
   */
  parent: undefined,
  
  /*
   * The index of the TimingTarget within its containing object.
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
   * A page item target that is an animation, media, or mso. Can return: PageItem, Graphic, Behavior or MediaItem.
   * @type {Mixed}
   */
  dynamicTarget: undefined,
  
  /*
   * The time delay in seconds for a single target or a group of targets after the previoius group has finished.
   * @type {Number}
   */
  delaySeconds: undefined,
  
  /*
   * Set to true if reversing animation on rolloff. Valid only for self rolloff trigger event.
   * @type {Boolean}
   */
  reverseAnimation: undefined,
  
  /*
   * A property that allows setting of several properties at the same time.
   * @type {Object}
   */
  properties: undefined,
  
  /*
   * Deletes the TimingTarget.
   */
  remove: function() {
  },
  
  /*
   * Unlink target from this group and append to the end of this timing list.
   */
  unlink: function() {
  },
  
  /*
   * Moves the timing group or target to the specified location.
 *
   * @param {LocationOptions} to The location in relation to the reference object or within the containing object.
   * @param {Mixed} [reference] The reference object. Note: Required when the to parameter specifies before or after. . Can accept: TimingGroup, TimingTarget or TimingList. 
   * @returns {TimingTarget}
   */
  move: function(to, reference) {
    return new TimingTarget();
  },
  
  /*
   * Generates a string which, if executed, will return the TimingTarget.
   * @returns {String}
   */
  toSource: function() {
    return new String();
  },
  
  /*
   * Resolves the object specifier, creating an array of object references.
   * @returns {TimingTarget}
   */
  getElements: function() {
    return new TimingTarget();
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
