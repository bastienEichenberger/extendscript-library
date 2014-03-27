/*
 * [object Object]
 */
var Event = {
  /*
   * undefined
   * @type {any}
   */
  NOT_DISPATCHING: undefined,
  
  /*
   * undefined
   * @type {any}
   */
  CAPTURING_PHASE: undefined,
  
  /*
   * undefined
   * @type {any}
   */
  AT_TARGET: undefined,
  
  /*
   * undefined
   * @type {any}
   */
  BUBBLING_PHASE: undefined,
  
  /*
   * True if this event can be captured.
   * @type {Boolean}
   */
  captures: undefined,
  
  /*
   * True if the event is of a type that bubbles.
   * @type {Boolean}
   */
  bubbles: undefined,
  
  /*
   * True if the default action associated with the event can be canceled with preventDefault().
   * @type {Boolean}
   */
  cancelable: undefined,
  
  /*
   * The event target object which is currently handling the event. During capturing and bubbling, this is different from the property target.
   * @type {Boolean}
   */
  currentTarget: undefined,
  
  /*
   * The current phase of event propagation; one of none, target, capture, bubble.
   * @type {String}
   */
  eventPhase: undefined,
  
  /*
   * The event target object for this event.
   * @type {Object}
   */
  target: undefined,
  
  /*
   * The date and time at which the event occurred.
   * @type {Date}
   */
  timeStamp: undefined,
  
  /*
   * The name of the event that this object represents.
   * @type {String}
   */
  type: undefined,
  
  /*
   * Prevents the default action associated with this event from being called.
   */
  preventDefault: function() {
  },
  
  /*
   * Stops the propagation of this event.
   */
  stopPropagation: function() {
  },
  
};
