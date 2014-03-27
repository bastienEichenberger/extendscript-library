/*
 * Creates an event.
 * @constructor
   *
 * @param {String} type undefined
 * @param {Boolean} captures Set to true if this event can be captured.
 * @param {Boolean} bubbles Set to true if the event bubbles.
 * @param {Object} [view] The ScriptUI element that this event relates to.
 * @param {Number} [detail] The click count for a mouse-click event.
 */
function UIEvent(type, captures, bubbles, view, detail) {
  /*
   * True if this event can be captured.
   * @type {Boolean}
   */
  this.captures = undefined;
  
  /*
   * True if the event is of a type that bubbles.
   * @type {Boolean}
   */
  this.bubbles = undefined;
  
  /*
   * True if the default action associated with the event can be canceled with preventDefault().
   * @type {Boolean}
   */
  this.cancelable = undefined;
  
  /*
   * The event target object which is currently handling the event. During capturing and bubbling, this is different from the property target.
   * @type {Boolean}
   */
  this.currentTarget = undefined;
  
  /*
   * The current phase of event propagation; one of none, target, capture, bubble.
   * @type {String}
   */
  this.eventPhase = undefined;
  
  /*
   * The event target object for this event.
   * @type {Object}
   */
  this.target = undefined;
  
  /*
   * The date and time at which the event occurred.
   * @type {Date}
   */
  this.timeStamp = undefined;
  
  /*
   * The name of the event that this  object represents.
   * @type {String}
   */
  this.type = undefined;
  
  /*
   * The ScriptUI element that this event relates to.
   * @type {Mixed}
   */
  this.view = undefined;
  
  /*
   * The click count for a mouse-click event.
   * @type {Mixed}
   */
  this.detail = undefined;
  
  /*
   * Prevents the default action associated with this event from being called.
   */
  this.preventDefault = function() {
  }
  
  /*
   * Stops the propagation of this event.
   */
  this.stopPropagation = function() {
  }
  
  /*
   * Initializes a UI event as a core W3C event.
   *
   * @param {String} type The event type.
   * @param {Boolean} captures Set to true if this event can be captured.
   * @param {Boolean} bubbles Set to true if the event bubbles.
   * @param {Boolean} cancelable Set to true if the default action is cancelable.
   */
  this.initEvent = function(type, captures, bubbles, cancelable) {
  }
  
  /*
   * Initializes an event.
   *
   * @param {String} type The event type.
   * @param {Boolean} captures Set to true if this event can be captured.
   * @param {Boolean} bubbles Set to true if the event bubbles.
   * @param {Object} [view] The ScriptUI element that this event relates to.
   * @param {Number} [detail] The click count for a mouse-click event.
   */
  this.initUIEvent = function(type, captures, bubbles, view, detail) {
  }
  
}
