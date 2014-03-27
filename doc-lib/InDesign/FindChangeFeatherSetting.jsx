/*
 * Feather effect settings.
 */
var FindChangeFeatherSetting = {
  /*
   * Returns true if the object specifier resolves to valid objects.
   * @type {Boolean}
   */
  isValid: undefined,
  
  /*
   * The parent of the FindChangeFeatherSetting (a FindChangeTransparencySetting, FindChangeStrokeTransparencySetting, FindChangeFillTransparencySetting or FindChangeContentTransparencySetting).
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
   * The feather mode. Can return: FeatherMode enumerator or NothingEnum enumerator.
   * @type {Mixed}
   */
  mode: undefined,
  
  /*
   * The feather width. (Range depends on the unit type. For points: 0 to 1000; for picas: 0 to 83p4; for inches: 0 to 13.8889; for mm: 0 to 352.778; for cm: 0 to 35.277; for ciceros: 0 to 78c2.389.). Can return: Unit (0 - 1000 points) or NothingEnum enumerator.
   * @type {Mixed}
   */
  width: undefined,
  
  /*
   * The corner effect applied to the feather. Can return: FeatherCornerType enumerator or NothingEnum enumerator.
   * @type {Mixed}
   */
  cornerType: undefined,
  
  /*
   * The amount (as a percentage) of noise applied to the feather. (Range: 0 to 100). Can return: Real (0 - 100) or NothingEnum enumerator.
   * @type {Mixed}
   */
  noise: undefined,
  
  /*
   * The amount to choke the feather (as a percentage of the feather width). (Range: 0 to 100). Can return: Real (0 - 100) or NothingEnum enumerator.
   * @type {Mixed}
   */
  chokeAmount: undefined,
  
  /*
   * A property that allows setting of several properties at the same time.
   * @type {Object}
   */
  properties: undefined,
  
  /*
   * Generates a string which, if executed, will return the FindChangeFeatherSetting.
   * @returns {String}
   */
  toSource: function() {
    return new String();
  },
  
  /*
   * Resolves the object specifier, creating an array of object references.
   * @returns {FindChangeFeatherSetting}
   */
  getElements: function() {
    return new FindChangeFeatherSetting();
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
