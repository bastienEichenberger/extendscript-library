/*
 * a timing group.
 */
var TimingGroup = {
  /*
   * Returns true if the object specifier resolves to valid objects.
   * @type {Boolean}
   */
  isValid: undefined,
  
  /*
   * The parent of the TimingGroup (a TimingList).
   * @type {TimingList}
   */
  parent: undefined,
  
  /*
   * The index of the TimingGroup within its containing object.
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
   * A collection of timing target.
   * @type {TimingTargets}
   */
  timingTargets: undefined,
  
  /*
   * The placement of the timing group in the timing list.
   * @type {Number}
   */
  placement: undefined,
  
  /*
   * The number of times this timing group plays.
   * @type {Number}
   */
  plays: undefined,
  
  /*
   * Set to true if timing group loops.
   * @type {Boolean}
   */
  playsLoop: undefined,
  
  /*
   * A property that allows setting of several properties at the same time.
   * @type {Object}
   */
  properties: undefined,
  
  /*
   * Deletes the TimingGroup.
   */
  remove: function() {
  },
  
  /*
   * Unlink all targets in the group into separate groups in this timing list.
   */
  unlink: function() {
  },
  
  /*
   * Moves the timing group or target to the specified location.
 *
   * @param {LocationOptions} to The location in relation to the reference object or within the containing object.
   * @param {Mixed} [reference] The reference object. Note: Required when the to parameter specifies before or after. . Can accept: TimingGroup, TimingTarget or TimingList. 
   * @returns {TimingGroup}
   */
  move: function(to, reference) {
    return new TimingGroup();
  },
  
  /*
   * Generates a string which, if executed, will return the TimingGroup.
   * @returns {String}
   */
  toSource: function() {
    return new String();
  },
  
  /*
   * Resolves the object specifier, creating an array of object references.
   * @returns {TimingGroup}
   */
  getElements: function() {
    return new TimingGroup();
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
