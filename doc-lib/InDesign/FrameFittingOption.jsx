/*
 * Options for fitting placed or pasted content in a frame.
 */
var FrameFittingOption = {
  /*
   * Returns true if the object specifier resolves to valid objects.
   * @type {Boolean}
   */
  isValid: undefined,
  
  /*
   * The parent of the FrameFittingOption (a ObjectStyle, Oval, Rectangle, Polygon, Application or Document).
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
   * If true, the last saved fitting options will be applied to the contents of a frame when it is resized.
   * @type {Boolean}
   */
  autoFit: undefined,
  
  /*
   * The amount in measurement units to crop the left edge of a graphic.
   * @type {Mixed}
   */
  leftCrop: undefined,
  
  /*
   * The amount in measurement units to crop the top edge of a graphic.
   * @type {Mixed}
   */
  topCrop: undefined,
  
  /*
   * The amount in measurement units to crop the right edge of a graphic.
   * @type {Mixed}
   */
  rightCrop: undefined,
  
  /*
   * The amount in measurement units to crop the bottom edge of a graphic.
   * @type {Mixed}
   */
  bottomCrop: undefined,
  
  /*
   * The frame fitting option to apply to placed or pasted content if the frame is empty. Can be applied to a frame, object style, or document or to the application.
   * @type {EmptyFrameFittingOptions}
   */
  fittingOnEmptyFrame: undefined,
  
  /*
   * The point with which to align the image empty when fitting in a frame. For information, see frame fitting options.
   * @type {AnchorPoint}
   */
  fittingAlignment: undefined,
  
  /*
   * A property that allows setting of several properties at the same time.
   * @type {Object}
   */
  properties: undefined,
  
  /*
   * Generates a string which, if executed, will return the FrameFittingOption.
   * @returns {String}
   */
  toSource: function() {
    return new String();
  },
  
  /*
   * Resolves the object specifier, creating an array of object references.
   * @returns {FrameFittingOption}
   */
  getElements: function() {
    return new FrameFittingOption();
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
