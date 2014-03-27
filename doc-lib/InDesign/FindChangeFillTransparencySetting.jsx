/*
 * Transparency settings for the fill applied to the parent object.
 */
var FindChangeFillTransparencySetting = {
  /*
   * Blending mode settings.
   * @type {FindChangeBlendingSetting}
   */
  blendingSettings: undefined,
  
  /*
   * Settings related to the drop shadow effect.
   * @type {FindChangeDropShadowSetting}
   */
  dropShadowSettings: undefined,
  
  /*
   * Settings related to the feather effect.
   * @type {FindChangeFeatherSetting}
   */
  featherSettings: undefined,
  
  /*
   * Settings related to the inner shadow effect.
   * @type {FindChangeInnerShadowSetting}
   */
  innerShadowSettings: undefined,
  
  /*
   * Settings related to the outer glow effect.
   * @type {FindChangeOuterGlowSetting}
   */
  outerGlowSettings: undefined,
  
  /*
   * Settings related to the inner glow effect.
   * @type {FindChangeInnerGlowSetting}
   */
  innerGlowSettings: undefined,
  
  /*
   * Settings related to the bevel and emboss effect.
   * @type {FindChangeBevelAndEmbossSetting}
   */
  bevelAndEmbossSettings: undefined,
  
  /*
   * Settings related to the satin effect
   * @type {FindChangeSatinSetting}
   */
  satinSettings: undefined,
  
  /*
   * Settings related to the directional feather effect.
   * @type {FindChangeDirectionalFeatherSetting}
   */
  directionalFeatherSettings: undefined,
  
  /*
   * Settings related to the gradient feather effect.
   * @type {FindChangeGradientFeatherSetting}
   */
  gradientFeatherSettings: undefined,
  
  /*
   * Returns true if the object specifier resolves to valid objects.
   * @type {Boolean}
   */
  isValid: undefined,
  
  /*
   * The parent of the FindChangeFillTransparencySetting (a FindObjectPreference or ChangeObjectPreference).
   * @type {Mixed}
   */
  parent: undefined,
  
  /*
   * A collection of preferences objects.
   * @type {Preferences}
   */
  preferences: undefined,
  
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
   * A property that allows setting of several properties at the same time.
   * @type {Object}
   */
  properties: undefined,
  
  /*
   * Generates a string which, if executed, will return the FindChangeFillTransparencySetting.
   * @returns {String}
   */
  toSource: function() {
    return new String();
  },
  
  /*
   * Resolves the object specifier, creating an array of object references.
   * @returns {FindChangeFillTransparencySetting}
   */
  getElements: function() {
    return new FindChangeFillTransparencySetting();
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
