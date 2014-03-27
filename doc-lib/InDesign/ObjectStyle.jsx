/*
 * An object style.
 */
var ObjectStyle = {
  /*
   * Export options for the object
   * @type {ObjectExportOption}
   */
  objectExportOptions: undefined,
  
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
   * Transparency settings for the fill applied to the ObjectStyle.
   * @type {FillTransparencySetting}
   */
  fillTransparencySettings: undefined,
  
  /*
   * Transparency settings for the content of the ObjectStyle.
   * @type {ContentTransparencySetting}
   */
  contentTransparencySettings: undefined,
  
  /*
   * The object effects enabling settings.
   * @type {ObjectStyleObjectEffectsCategorySettings}
   */
  objectEffectsEnablingSettings: undefined,
  
  /*
   * The stroke effects enabling settings.
   * @type {ObjectStyleStrokeEffectsCategorySettings}
   */
  strokeEffectsEnablingSettings: undefined,
  
  /*
   * The fill effects enabling settings.
   * @type {ObjectStyleFillEffectsCategorySettings}
   */
  fillEffectsEnablingSettings: undefined,
  
  /*
   * The content effects enabling settings.
   * @type {ObjectStyleContentEffectsCategorySettings}
   */
  contentEffectsEnablingSettings: undefined,
  
  /*
   * The unique ID of the ObjectStyle.
   * @type {Number}
   */
  id: undefined,
  
  /*
   * Returns true if the object specifier resolves to valid objects.
   * @type {Boolean}
   */
  isValid: undefined,
  
  /*
   * The parent of the ObjectStyle (a Document, Application or ObjectStyleGroup).
   * @type {Mixed}
   */
  parent: undefined,
  
  /*
   * The index of the ObjectStyle within its containing object.
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
   * A collection of object style export tag maps.
   * @type {ObjectStyleExportTagMaps}
   */
  objectStyleExportTagMaps: undefined,
  
  /*
   * A collection of preferences objects.
   * @type {Preferences}
   */
  preferences: undefined,
  
  /*
   * If true, the object style will apply auto-sizing text frame options.
   * @type {Boolean}
   */
  enableTextFrameAutoSizingOptions: undefined,
  
  /*
   * If true, the object style will apply an epub tag and class.
   * @type {Boolean}
   */
  enableExportTagging: undefined,
  
  /*
   * If true, the object style will apply alt text export options.
   * @type {Boolean}
   */
  enableObjectExportAltTextOptions: undefined,
  
  /*
   * If true, the object style will apply tagged pdf export options.
   * @type {Boolean}
   */
  enableObjectExportTaggedPdfOptions: undefined,
  
  /*
   * If true, the object style will apply epub export options.
   * @type {Boolean}
   */
  enableObjectExportEpubOptions: undefined,
  
  /*
   * The style that this style is based on. Can return: ObjectStyle or String.
   * @type {Mixed}
   */
  basedOn: undefined,
  
  /*
   * The name of the ObjectStyle.
   * @type {String}
   */
  name: undefined,
  
  /*
   * The paragraph style applied to the text. Can also accept: String.
   * @type {ParagraphStyle}
   */
  appliedParagraphStyle: undefined,
  
  /*
   * If true, applies paragraph styles using Next Paragraph Style settings, beginning with the Next Paragraph Style defined in the paragraph style associated with the object style (if any).
   * @type {Boolean}
   */
  applyNextParagraphStyle: undefined,
  
  /*
   * If true, the object style will apply a fill.
   * @type {Boolean}
   */
  enableFill: undefined,
  
  /*
   * If true, the object style will apply a stroke.
   * @type {Boolean}
   */
  enableStroke: undefined,
  
  /*
   * If true, the object style will apply a paragraph style.
   * @type {Boolean}
   */
  enableParagraphStyle: undefined,
  
  /*
   * If true, the object style will apply general text frame options.
   * @type {Boolean}
   */
  enableTextFrameGeneralOptions: undefined,
  
  /*
   * If true, the object style will apply baseline text frame options.
   * @type {Boolean}
   */
  enableTextFrameBaselineOptions: undefined,
  
  /*
   * If true, the object style will apply story options.
   * @type {Boolean}
   */
  enableStoryOptions: undefined,
  
  /*
   * If true, the object style will apply text wrap, contour, and non-printing settings.
   * @type {Boolean}
   */
  enableTextWrapAndOthers: undefined,
  
  /*
   * If true, the object style will apply an anchored object setting.
   * @type {Boolean}
   */
  enableAnchoredObjectOptions: undefined,
  
  /*
   * The swatch (color, gradient, tint, or mixed ink) applied to the fill of the ObjectStyle. . Can also accept: String.
   * @type {Swatch}
   */
  fillColor: undefined,
  
  /*
   * The percent of tint to use in the ObjectStyle's fill color. (To specify a tint percent, use a number in the range of 0 to 100; to use the inherited or overridden value, use -1.)
   * @type {Number}
   */
  fillTint: undefined,
  
  /*
   * If true, the ObjectStyle's fill color overprints any underlying objects. If false, the fill color knocks out the underlying colors.
   * @type {Boolean}
   */
  overprintFill: undefined,
  
  /*
   * The weight (in points) to apply to the ObjectStyle's stroke.
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
   * The corner join applied to the ObjectStyle.
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
   * The swatch (color, gradient, tint, or mixed ink) applied to the stroke of the ObjectStyle. Can also accept: String.
   * @type {Swatch}
   */
  strokeColor: undefined,
  
  /*
   * The percent of tint to use in object's stroke color. (To specify a tint percent, use a number in the range of 0 to 100; to use the inherited or overridden value, use -1.)
   * @type {Number}
   */
  strokeTint: undefined,
  
  /*
   * If true, the ObjectStyle's stroke color overprints any underlying objects. If false, the stroke color knocks out the  underlying colors.
   * @type {Boolean}
   */
  overprintStroke: undefined,
  
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
   * The stroke alignment applied to the ObjectStyle.
   * @type {StrokeAlignment}
   */
  strokeAlignment: undefined,
  
  /*
   * If true, the ObjectStyle does not print.
   * @type {Boolean}
   */
  nonprinting: undefined,
  
  /*
   * The angle of a linear gradient applied to the fill of the ObjectStyle. (Range: -180 to 180)
   * @type {Number}
   */
  gradientFillAngle: undefined,
  
  /*
   * The angle of a linear gradient applied to the stroke of the ObjectStyle. (Range: -180 to 180)
   * @type {Number}
   */
  gradientStrokeAngle: undefined,
  
  /*
   * Text frame preference settings.
   * @type {TextFramePreference}
   */
  textFramePreferences: undefined,
  
  /*
   * Baseline frame grid option settings.
   * @type {BaselineFrameGridOption}
   */
  baselineFrameGridOptions: undefined,
  
  /*
   * Anchored object settings.
   * @type {AnchoredObjectSetting}
   */
  anchoredObjectSettings: undefined,
  
  /*
   * The text wrap preference properties that define the default formatting for wrapping text around objects.
   * @type {TextWrapPreference}
   */
  textWrapPreferences: undefined,
  
  /*
   * Story preference settings.
   * @type {StoryPreference}
   */
  storyPreferences: undefined,
  
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
   * The frame fitting option to apply to placed or pasted content. Can be applied to a frame, object style, or document or to the application.
   * @type {FrameFittingOption}
   */
  frameFittingOptions: undefined,
  
  /*
   * If true, the object style will apply frame fitting options.
   * @type {Boolean}
   */
  enableFrameFittingOptions: undefined,
  
  /*
   * If true, the object style will apply stroke options and corner options.
   * @type {Boolean}
   */
  enableStrokeAndCornerOptions: undefined,
  
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
   * Duplicates the ObjectStyle.
   * @returns {ObjectStyle}
   */
  duplicate: function() {
    return new ObjectStyle();
  },
  
  /*
   * Moves the ObjectStyle to the specified location.
 *
   * @param {LocationOptions} to The new location relative to the reference object or within the container object.
   * @param {Mixed} [reference] The reference object. Note: Required when the to parameter is before or after. Can accept: ObjectStyle, ObjectStyleGroup, Document or Application. 
   * @returns {ObjectStyle}
   */
  move: function(to, reference) {
    return new ObjectStyle();
  },
  
  /*
   * Deletes the style.
 *
   * @param {ObjectStyle} [replacingWith] The style to apply in place of the deleted style. 
   */
  remove: function(replacingWith) {
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
   * Generates a string which, if executed, will return the ObjectStyle.
   * @returns {String}
   */
  toSource: function() {
    return new String();
  },
  
  /*
   * Resolves the object specifier, creating an array of object references.
   * @returns {ObjectStyle}
   */
  getElements: function() {
    return new ObjectStyle();
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
