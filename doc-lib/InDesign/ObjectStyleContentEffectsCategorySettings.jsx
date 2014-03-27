/*
 * Object style content effects category settings.
 */
var ObjectStyleContentEffectsCategorySettings = {
  /*
   * Returns true if the object specifier resolves to valid objects.
   * @type {Boolean}
   */
  isValid: undefined,
  
  /*
   * The parent of the ObjectStyleContentEffectsCategorySettings (a ObjectStyle).
   * @type {ObjectStyle}
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
   * If true, the object style will apply transparency settings.
   * @type {Boolean}
   */
  enableTransparency: undefined,
  
  /*
   * If true, the object style will apply drop shadows.
   * @type {Boolean}
   */
  enableDropShadow: undefined,
  
  /*
   * If true, the object style will apply feathering.
   * @type {Boolean}
   */
  enableFeather: undefined,
  
  /*
   * If true, the object style will apply inner shadows.
   * @type {Boolean}
   */
  enableInnerShadow: undefined,
  
  /*
   * If true, the object style will apply outer glow.
   * @type {Boolean}
   */
  enableOuterGlow: undefined,
  
  /*
   * If true, the object style will apply inner glow.
   * @type {Boolean}
   */
  enableInnerGlow: undefined,
  
  /*
   * If true, the object style will apply bevel emboss.
   * @type {Boolean}
   */
  enableBevelEmboss: undefined,
  
  /*
   * If true, the object style will apply satin.
   * @type {Boolean}
   */
  enableSatin: undefined,
  
  /*
   * If true, the object style will apply directional feathering.
   * @type {Boolean}
   */
  enableDirectionalFeather: undefined,
  
  /*
   * If true, the object style will apply gradient feathering.
   * @type {Boolean}
   */
  enableGradientFeather: undefined,
  
  /*
   * A property that allows setting of several properties at the same time.
   * @type {Object}
   */
  properties: undefined,
  
  /*
   * Generates a string which, if executed, will return the ObjectStyleContentEffectsCategorySettings.
   * @returns {String}
   */
  toSource: function() {
    return new String();
  },
  
  /*
   * Resolves the object specifier, creating an array of object references.
   * @returns {ObjectStyleContentEffectsCategorySettings}
   */
  getElements: function() {
    return new ObjectStyleContentEffectsCategorySettings();
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
