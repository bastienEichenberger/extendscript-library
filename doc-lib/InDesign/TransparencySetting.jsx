/*
 * Transparency settings.
 */
var TransparencySetting = {
  /*
   * Blending mode settings.
   * @type {BlendingSetting}
   */
  blendingSettings: undefined,
  
  /*
   * Settings related to the drop shadow effect.
   * @type {DropShadowSetting}
   */
  dropShadowSettings: undefined,
  
  /*
   * Settings related to the feather effect.
   * @type {FeatherSetting}
   */
  featherSettings: undefined,
  
  /*
   * Settings related to the inner shadow effect.
   * @type {InnerShadowSetting}
   */
  innerShadowSettings: undefined,
  
  /*
   * Settings related to the outer glow effect.
   * @type {OuterGlowSetting}
   */
  outerGlowSettings: undefined,
  
  /*
   * Settings related to the inner glow effect.
   * @type {InnerGlowSetting}
   */
  innerGlowSettings: undefined,
  
  /*
   * Settings related to the bevel and emboss effect.
   * @type {BevelAndEmbossSetting}
   */
  bevelAndEmbossSettings: undefined,
  
  /*
   * Settings related to the satin effect
   * @type {SatinSetting}
   */
  satinSettings: undefined,
  
  /*
   * Settings related to the directional feather effect.
   * @type {DirectionalFeatherSetting}
   */
  directionalFeatherSettings: undefined,
  
  /*
   * Settings related to the gradient feather effect.
   * @type {GradientFeatherSetting}
   */
  gradientFeatherSettings: undefined,
  
  /*
   * Returns true if the object specifier resolves to valid objects.
   * @type {Boolean}
   */
  isValid: undefined,
  
  /*
   * The parent of the TransparencySetting (a PageItem, HtmlItem, FormField, SignatureField, TextBox, RadioButton, ListBox, ComboBox, CheckBox, MultiStateObject, Button, MediaItem, Sound, Movie, EPSText, SplineItem, Polygon, GraphicLine, Rectangle, Oval, Graphic, ImportedPage, PICT, WMF, PDF, EPS, Image, Group, TextFrame, PageItemDefault or ObjectStyle).
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
   * Generates a string which, if executed, will return the TransparencySetting.
   * @returns {String}
   */
  toSource: function() {
    return new String();
  },
  
  /*
   * Resolves the object specifier, creating an array of object references.
   * @returns {TransparencySetting}
   */
  getElements: function() {
    return new TransparencySetting();
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
