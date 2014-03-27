/*
 * A preflight profile.
 */
var PreflightProfile = {
  /*
   * The unique ID of the PreflightProfile.
   * @type {Number}
   */
  id: undefined,
  
  /*
   * Returns true if the object specifier resolves to valid objects.
   * @type {Boolean}
   */
  isValid: undefined,
  
  /*
   * The parent of the PreflightProfile (a Application or Document).
   * @type {Mixed}
   */
  parent: undefined,
  
  /*
   * The index of the PreflightProfile within its containing object.
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
   * A collection of preflight profile rules.
   * @type {PreflightProfileRules}
   */
  preflightProfileRules: undefined,
  
  /*
   * A collection of preflight rule instances.
   * @type {PreflightRuleInstances}
   */
  preflightRuleInstances: undefined,
  
  /*
   * The name of the PreflightProfile.
   * @type {String}
   */
  name: undefined,
  
  /*
   * The description of the PreflightProfile.
   * @type {String}
   */
  description: undefined,
  
  /*
   * A property that can be set to any string.
   * @type {String}
   */
  label: undefined,
  
  /*
   * A property that allows setting of several properties at the same time.
   * @type {Object}
   */
  properties: undefined,
  
  /*
   * Deletes the PreflightProfile.
   */
  remove: function() {
  },
  
  /*
   * Duplicates the PreflightProfile.
   * @returns {PreflightProfile}
   */
  duplicate: function() {
    return new PreflightProfile();
  },
  
  /*
   * Update the preflight profile by copying from another profile.
 *
   * @param {Mixed} [using] The preflight profile to copy. Can accept: String or PreflightProfile. 
   */
  update: function(using) {
  },
  
  /*
   * Unembed this profile.
   */
  unembed: function() {
  },
  
  /*
   * Saves this preflight profile to a InDesign preflight profile file.
 *
   * @param {File} to The preflight profile file to save to.
   */
  save: function(to) {
  },
  
  /*
   * Sets the label to the value associated with the specified key.
 *
   * @param {String} key The key.
   * @param {String} value The value.
   */
  insertLabel: function(key, value) {
  },
  
  /*
   * Gets the label value associated with the specified key.
 *
   * @param {String} key The key.
   * @returns {String}
   */
  extractLabel: function(key) {
    return new String();
  },
  
  /*
   * Generates a string which, if executed, will return the PreflightProfile.
   * @returns {String}
   */
  toSource: function() {
    return new String();
  },
  
  /*
   * Resolves the object specifier, creating an array of object references.
   * @returns {PreflightProfile}
   */
  getElements: function() {
    return new PreflightProfile();
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
