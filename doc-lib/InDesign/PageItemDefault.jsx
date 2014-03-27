/*
 * Default page item formatting properties.
 */
var PageItemDefault = {
  /*
   * Transparency settings.
   * @type {TransparencySetting}
   */
  transparencySettings: undefined,
  
  /*
   * Transparency settings for the stroke.
   * @type {StrokeTransparencySetting}
   */
  strokeTransparencySettings: undefined,
  
  /*
   * Transparency settings for the fill applied to the PageItemDefault.
   * @type {FillTransparencySetting}
   */
  fillTransparencySettings: undefined,
  
  /*
   * Transparency settings for the content of the PageItemDefault.
   * @type {ContentTransparencySetting}
   */
  contentTransparencySettings: undefined,
  
  /*
   * Returns true if the object specifier resolves to valid objects.
   * @type {Boolean}
   */
  isValid: undefined,
  
  /*
   * The parent of the PageItemDefault (a Application or Document).
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
   * The shape to be applied to the top left corner of rectangular shapes and all corners of non-rectangular shapes.Note: corner option differs from end join in which you can set a radius for a corner option, whereas the rounded or beveled effect of an end join depends on the stroke weight.
   * @type {CornerOptions}
   */
  topLeftCornerOption: undefined,
  
  /*
   * The shape to apply to the top right corner of rectangular shapes
   * @type {CornerOptions}
   */
  topRightCornerOption: undefined,
  
  /*
   * The shape to apply to the bottom left corner of rectangular shapes.
   * @type {CornerOptions}
   */
  bottomLeftCornerOption: undefined,
  
  /*
   * The shape to apply to the bottom right corner of rectangular shapes.
   * @type {CornerOptions}
   */
  bottomRightCornerOption: undefined,
  
  /*
   * The radius in measurement units of the corner effect applied to the top left corner of rectangular shapes and all corners of non-rectangular shapes
   * @type {Mixed}
   */
  topLeftCornerRadius: undefined,
  
  /*
   * The radius in measurement units of the corner effect applied to the top right corner of rectangular shapes
   * @type {Mixed}
   */
  topRightCornerRadius: undefined,
  
  /*
   * The radius in measurement units of the corner effect applied to the bottom left corner of rectangular shapes
   * @type {Mixed}
   */
  bottomLeftCornerRadius: undefined,
  
  /*
   * The radius in measurement units of the corner effect applied to the bottom right corner of rectangular shapes
   * @type {Mixed}
   */
  bottomRightCornerRadius: undefined,
  
  /*
   * The default graphic object style applied to the PageItemDefault. Can also accept: String.
   * @type {ObjectStyle}
   */
  appliedGraphicObjectStyle: undefined,
  
  /*
   * The default text object style applied to the PageItemDefault. Can also accept: String.
   * @type {ObjectStyle}
   */
  appliedTextObjectStyle: undefined,
  
  /*
   * The default frame grid object style applied to the PageItemDefault. Can also accept: String.
   * @type {ObjectStyle}
   */
  appliedGridObjectStyle: undefined,
  
  /*
   * The swatch (color, gradient, tint, or mixed ink) applied to the fill of the PageItemDefault. . Can also accept: String.
   * @type {Swatch}
   */
  fillColor: undefined,
  
  /*
   * The percent of tint to use in the PageItemDefault's fill color. (To specify a tint percent, use a number in the range of 0 to 100; to use the inherited or overridden value, use -1.)
   * @type {Number}
   */
  fillTint: undefined,
  
  /*
   * The weight (in points) to apply to the PageItemDefault's stroke.
   * @type {Mixed}
   */
  strokeWeight: undefined,
  
  /*
   * The limit of the ratio of stroke width to miter length before a miter (pointed) join becomes a bevel (squared-off) join.
   * @type {Number}
   */
  miterLimit: undefined,
  
  /*
   * The end shape of an open path.
   * @type {EndCap}
   */
  endCap: undefined,
  
  /*
   * The corner join applied to the PageItemDefault.
   * @type {EndJoin}
   */
  endJoin: undefined,
  
  /*
   * The name of the stroke style to apply. Can also accept: String.
   * @type {StrokeStyle}
   */
  strokeType: undefined,
  
  /*
   * The arrowhead applied to the start of the path.
   * @type {ArrowHead}
   */
  leftLineEnd: undefined,
  
  /*
   * The arrowhead applied to the end of the path.
   * @type {ArrowHead}
   */
  rightLineEnd: undefined,
  
  /*
   * The swatch (color, gradient, tint, or mixed ink) applied to the stroke of the PageItemDefault. Can also accept: String.
   * @type {Swatch}
   */
  strokeColor: undefined,
  
  /*
   * The percent of tint to use in object's stroke color. (To specify a tint percent, use a number in the range of 0 to 100; to use the inherited or overridden value, use -1.)
   * @type {Number}
   */
  strokeTint: undefined,
  
  /*
   * The angle of a linear gradient applied to the fill of the PageItemDefault. (Range: -180 to 180)
   * @type {Number}
   */
  gradientFillAngle: undefined,
  
  /*
   * The angle of a linear gradient applied to the stroke of the PageItemDefault. (Range: -180 to 180)
   * @type {Number}
   */
  gradientStrokeAngle: undefined,
  
  /*
   * If true, the PageItemDefault's stroke color overprints any underlying objects. If false, the stroke color knocks out the  underlying colors.
   * @type {Boolean}
   */
  overprintStroke: undefined,
  
  /*
   * If true, the PageItemDefault's fill color overprints any underlying objects. If false, the fill color knocks out the underlying colors.
   * @type {Boolean}
   */
  overprintFill: undefined,
  
  /*
   * The swatch (color, gradient, tint, or mixed ink) applied to the gap of a dashed, dotted, or striped stroke. For information, see stroke type.
   * @type {Swatch}
   */
  gapColor: undefined,
  
  /*
   * The tint as a percentage of the gap color. (To specify a tint percent, use a number in the range of 0 to 100; to use the inherited or overridden value, use -1.)
   * @type {Number}
   */
  gapTint: undefined,
  
  /*
   * If true, the gap color overprints any underlying colors. If false, the gap color knocks out the underlying colors.
   * @type {Boolean}
   */
  overprintGap: undefined,
  
  /*
   * The stroke alignment applied to the PageItemDefault.
   * @type {StrokeAlignment}
   */
  strokeAlignment: undefined,
  
  /*
   * If true, the PageItemDefault does not print.
   * @type {Boolean}
   */
  nonprinting: undefined,
  
  /*
   * A property that allows setting of several properties at the same time.
   * @type {Object}
   */
  properties: undefined,
  
  /*
   * Applies the specified object style.
 *
   * @param {ObjectStyle} using The object style to apply.
   * @param {Boolean} [clearingOverrides] If true, clears the PageItemDefault's existing attributes before applying the style. 
   * @param {Boolean} [clearingOverridesThroughRootObjectStyle] If true, clears attributes and formatting applied to the PageItemDefault that are not defined in the object style. 
   */
  applyObjectStyle: function(using, clearingOverrides, clearingOverridesThroughRootObjectStyle) {
  },
  
  /*
   * Clear overrides for object style
   */
  clearObjectStyleOverrides: function() {
  },
  
  /*
   * Generates a string which, if executed, will return the PageItemDefault.
   * @returns {String}
   */
  toSource: function() {
    return new String();
  },
  
  /*
   * Resolves the object specifier, creating an array of object references.
   * @returns {PageItemDefault}
   */
  getElements: function() {
    return new PageItemDefault();
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
