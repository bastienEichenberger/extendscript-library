/*
 * Guide preferences.
 */
var GuidePreference = {
  /*
   * Returns true if the object specifier resolves to valid objects.
   * @type {Boolean}
   */
  isValid: undefined,
  
  /*
   * The parent of the GuidePreference (a Application or Document).
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
   * If true, places guides behind all other objects on the spread.
   * @type {Boolean}
   */
  guidesInBack: undefined,
  
  /*
   * If true, displays the guides.
   * @type {Boolean}
   */
  guidesShown: undefined,
  
  /*
   * If true, guides cannot be moved, added, or deleted.
   * @type {Boolean}
   */
  guidesLocked: undefined,
  
  /*
   * If true, an object within the specified range snaps to the nearest guide when the object is created, moved, or resized. For range information, see guide snapto zone.
   * @type {Boolean}
   */
  guidesSnapto: undefined,
  
  /*
   * The magnification (as a percentage) less than which ruler guides do not appear. (Range: 5 to 4000)
   * @type {Number}
   */
  rulerGuidesViewThreshold: undefined,
  
  /*
   * The color of the guide, specified either as an array of three doubles, each in the range 0 to 255 and representing R, G, and B values, or as a UI color. . Can return: Array of 3 Reals (0 - 255) or UIColors enumerator.
   * @type {Mixed}
   */
  rulerGuidesColor: undefined,
  
  /*
   * A property that allows setting of several properties at the same time.
   * @type {Object}
   */
  properties: undefined,
  
  /*
   * Generates a string which, if executed, will return the GuidePreference.
   * @returns {String}
   */
  toSource: function() {
    return new String();
  },
  
  /*
   * Resolves the object specifier, creating an array of object references.
   * @returns {GuidePreference}
   */
  getElements: function() {
    return new GuidePreference();
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
