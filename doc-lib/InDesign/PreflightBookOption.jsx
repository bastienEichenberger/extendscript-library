/*
 * Preflight book options.
 */
var PreflightBookOption = {
  /*
   * Returns true if the object specifier resolves to valid objects.
   * @type {Boolean}
   */
  isValid: undefined,
  
  /*
   * The parent of the PreflightBookOption (a Application or Book).
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
   * The pages or documents to preflight, specified either as an enumeration or a string. To specify a range, separate page numbers in the string with a hyphen (-). To specify separate pages, separate page numbers in the string with a comma (,). Can return: PreflightScopeOptions enumerator or String.
   * @type {Mixed}
   */
  preflightScope: undefined,
  
  /*
   * Which layers to preflight.
   * @type {PreflightLayerOptions}
   */
  preflightWhichLayers: undefined,
  
  /*
   * If true, include objects on pasteboard when preflighting.
   * @type {Boolean}
   */
  preflightIncludeObjectsOnPasteboard: undefined,
  
  /*
   * If true, include objects that do not print when preflighting.
   * @type {Boolean}
   */
  preflightIncludeNonprintingObjects: undefined,
  
  /*
   * The policy for preflighting applied when opening a document or book, whether to use embedded profile or the another profile when the preflight is turned on.
   * @type {PreflightProfileOptions}
   */
  preflightProfilePolicy: undefined,
  
  /*
   * The working preflight profile. Can return: PreflightProfile or String.
   * @type {Mixed}
   */
  preflightWorkingProfile: undefined,
  
  /*
   * A property that allows setting of several properties at the same time.
   * @type {Object}
   */
  properties: undefined,
  
  /*
   * Generates a string which, if executed, will return the PreflightBookOption.
   * @returns {String}
   */
  toSource: function() {
    return new String();
  },
  
  /*
   * Resolves the object specifier, creating an array of object references.
   * @returns {PreflightBookOption}
   */
  getElements: function() {
    return new PreflightBookOption();
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
