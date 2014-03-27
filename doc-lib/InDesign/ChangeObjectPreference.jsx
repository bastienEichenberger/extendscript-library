/*
 * Change object preferences.
 */
var ChangeObjectPreference = {
  /*
   * Transparency settings. Can return: FindChangeTransparencySetting or NothingEnum enumerator.
   * @type {Mixed}
   */
  transparencySettings: undefined,
  
  /*
   * Transparency settings for the stroke. Can return: FindChangeStrokeTransparencySetting or NothingEnum enumerator.
   * @type {Mixed}
   */
  strokeTransparencySettings: undefined,
  
  /*
   * Transparency settings for the fill applied to the ChangeObjectPreference. Can return: FindChangeFillTransparencySetting or NothingEnum enumerator.
   * @type {Mixed}
   */
  fillTransparencySettings: undefined,
  
  /*
   * Transparency settings for the content of the ChangeObjectPreference. Can return: FindChangeContentTransparencySetting or NothingEnum enumerator.
   * @type {Mixed}
   */
  contentTransparencySettings: undefined,
  
  /*
   * If true, the text wrap path has been explicitly modified by the user. Can return: Boolean or NothingEnum enumerator.
   * @type {Mixed}
   */
  userModifiedWrap: undefined,
  
  /*
   * Returns true if the object specifier resolves to valid objects.
   * @type {Boolean}
   */
  isValid: undefined,
  
  /*
   * The parent of the ChangeObjectPreference (a Application).
   * @type {Application}
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
   * The direction of the story. Can return: StoryDirectionOptions enumerator or NothingEnum enumerator.
   * @type {Mixed}
   */
  storyDirection: undefined,
  
  /*
   * The point in the referenced object relative to which to position the anchored object. Notes: Valid only when anchored position is custom. Can return: AnchorPoint enumerator or NothingEnum enumerator.
   * @type {Mixed}
   */
  positionReferencePoint: undefined,
  
  /*
   * If true, text wraps on the master spread apply to that spread only, and not to any pages the master spread has been applied to. Can return: Boolean or NothingEnum enumerator.
   * @type {Mixed}
   */
  applyToMasterPageOnly: undefined,
  
  /*
   * Text wrap side options. Can return: TextWrapSideOptions enumerator or NothingEnum enumerator.
   * @type {Mixed}
   */
  textWrapSide: undefined,
  
  /*
   * The minimum space between text and the edges of the wrapped object. Specify four values in the format [top, left, bottom, right]. . Can return: Ordered array containing top:Unit, left:Unit, bottom:Unit, right:Unit or NothingEnum enumerator.
   * @type {Mixed}
   */
  textWrapOffset: undefined,
  
  /*
   * The text wrap mode. . Can return: TextWrapModes enumerator or NothingEnum enumerator.
   * @type {Mixed}
   */
  textWrapMode: undefined,
  
  /*
   * The applied object style(s). Can return: String or NothingEnum enumerator. Can also accept: ObjectStyle.
   * @type {Mixed}
   */
  appliedObjectStyles: undefined,
  
  /*
   * The swatch (color, gradient, tint, or mixed ink) applied to the fill of the ChangeObjectPreference. . Can return: Swatch or NothingEnum enumerator. Can also accept: String.
   * @type {Mixed}
   */
  fillColor: undefined,
  
  /*
   * The percent of tint to use in the ChangeObjectPreference's fill color. (To specify a tint percent, use a number in the range of 0 to 100; to use the inherited or overridden value, use -1.). Can return: Real or NothingEnum enumerator.
   * @type {Mixed}
   */
  fillTint: undefined,
  
  /*
   * If true, the ChangeObjectPreference's fill color overprints any underlying objects. If false, the fill color knocks out the underlying colors. Can return: Boolean or NothingEnum enumerator.
   * @type {Mixed}
   */
  overprintFill: undefined,
  
  /*
   * The weight (in points) to apply to the ChangeObjectPreference's stroke. Can return: Unit or NothingEnum enumerator.
   * @type {Mixed}
   */
  strokeWeight: undefined,
  
  /*
   * The limit of the ratio of stroke width to miter length before a miter (pointed) join becomes a bevel (squared-off) join. Can return: Real (1 - 500) or NothingEnum enumerator.
   * @type {Mixed}
   */
  miterLimit: undefined,
  
  /*
   * The end shape of an open path. Can return: EndCap enumerator or NothingEnum enumerator.
   * @type {Mixed}
   */
  endCap: undefined,
  
  /*
   * The corner join applied to the ChangeObjectPreference. Can return: EndJoin enumerator or NothingEnum enumerator.
   * @type {Mixed}
   */
  endJoin: undefined,
  
  /*
   * The name of the stroke style to apply. Can return: StrokeStyle or NothingEnum enumerator. Can also accept: String.
   * @type {Mixed}
   */
  strokeType: undefined,
  
  /*
   * The corner adjustment applied to the ChangeObjectPreference. Can return: StrokeCornerAdjustment enumerator or NothingEnum enumerator.
   * @type {Mixed}
   */
  strokeCornerAdjustment: undefined,
  
  /*
   * The dash and gap measurements that define the pattern of a custom dashed line. Define up to six values (in points) in the format [dash1, gap1, dash2, gap2, dash3, gap3]. Can return: Array of Units or NothingEnum enumerator.
   * @type {Mixed}
   */
  strokeDashAndGap: undefined,
  
  /*
   * The arrowhead applied to the start of the path. . Can return: ArrowHead enumerator or NothingEnum enumerator.
   * @type {Mixed}
   */
  leftLineEnd: undefined,
  
  /*
   * The arrowhead applied to the end of the path. Can return: ArrowHead enumerator or NothingEnum enumerator.
   * @type {Mixed}
   */
  rightLineEnd: undefined,
  
  /*
   * The swatch (color, gradient, tint, or mixed ink) applied to the stroke of the ChangeObjectPreference. Can return: Swatch or NothingEnum enumerator. Can also accept: String.
   * @type {Mixed}
   */
  strokeColor: undefined,
  
  /*
   * The percent of tint to use in object's stroke color. (To specify a tint percent, use a number in the range of 0 to 100; to use the inherited or overridden value, use -1.). Can return: Real or NothingEnum enumerator.
   * @type {Mixed}
   */
  strokeTint: undefined,
  
  /*
   * If true, the ChangeObjectPreference's stroke color overprints any underlying objects. If false, the stroke color knocks out the  underlying colors. Can return: Boolean or NothingEnum enumerator.
   * @type {Mixed}
   */
  overprintStroke: undefined,
  
  /*
   * The swatch (color, gradient, tint, or mixed ink) applied to the gap of a dashed, dotted, or striped stroke. For information, see stroke type. Can return: Swatch or NothingEnum enumerator.
   * @type {Mixed}
   */
  gapColor: undefined,
  
  /*
   * The tint as a percentage of the gap color. (To specify a tint percent, use a number in the range of 0 to 100; to use the inherited or overridden value, use -1.). Can return: Real or NothingEnum enumerator.
   * @type {Mixed}
   */
  gapTint: undefined,
  
  /*
   * If true, the gap color overprints any underlying colors. If false, the gap color knocks out the underlying colors. Can return: Boolean or NothingEnum enumerator.
   * @type {Mixed}
   */
  overprintGap: undefined,
  
  /*
   * The stroke alignment applied to the ChangeObjectPreference. Can return: StrokeAlignment enumerator or NothingEnum enumerator.
   * @type {Mixed}
   */
  strokeAlignment: undefined,
  
  /*
   * If true, the ChangeObjectPreference does not print. Can return: Boolean or NothingEnum enumerator.
   * @type {Mixed}
   */
  nonprinting: undefined,
  
  /*
   * The angle of a linear gradient applied to the fill of the ChangeObjectPreference. (Range: -180 to 180). Can return: Real or NothingEnum enumerator.
   * @type {Mixed}
   */
  gradientFillAngle: undefined,
  
  /*
   * The angle of a linear gradient applied to the stroke of the ChangeObjectPreference. (Range: -180 to 180). Can return: Real or NothingEnum enumerator.
   * @type {Mixed}
   */
  gradientStrokeAngle: undefined,
  
  /*
   * The number of columns in the text frame. Note: Depending on the value of use fixed column width, the number of columns can change automatically when the text frame size changes. Can return: Long Integer (1 - 40) or NothingEnum enumerator.
   * @type {Mixed}
   */
  textColumnCount: undefined,
  
  /*
   * The space between columns in the text frame. Can return: Unit (0 - 8640 points) or NothingEnum enumerator.
   * @type {Mixed}
   */
  textColumnGutter: undefined,
  
  /*
   * The column width of the columns in the text frame. Can return: Unit (0 - 8640 points) or NothingEnum enumerator.
   * @type {Mixed}
   */
  textColumnFixedWidth: undefined,
  
  /*
   * If true, maintains column width when the text frame is resized. If false, causes columns to resize when the text frame is resized. Note: When true, resizing the frame can change the number of columns in the frame. Can return: Boolean or NothingEnum enumerator.
   * @type {Mixed}
   */
  useFixedColumnWidth: undefined,
  
  /*
   * The amount to offset text from the edges of the text frame, specified either as a single value applied uniformly to all sides of the text frame or as an array of 4 values in the format [top inset, left inset, bottom inset, right inset]. Can return: Unit (0 - 8640 points), Array of 4 Units (0 - 8640 points) or NothingEnum enumerator.
   * @type {Mixed}
   */
  insetSpacing: undefined,
  
  /*
   * The distance between the baseline of the text and the top inset of the text frame or cell. Can return: FirstBaseline enumerator or NothingEnum enumerator.
   * @type {Mixed}
   */
  firstBaselineOffset: undefined,
  
  /*
   * The minimum distance between the baseline of the text and the top inset of the text frame or cell. Can return: Unit (0 - 8640 points) or NothingEnum enumerator.
   * @type {Mixed}
   */
  minimumFirstBaselineOffset: undefined,
  
  /*
   * The vertical alignment of the text content. . Can return: VerticalJustification enumerator or NothingEnum enumerator.
   * @type {Mixed}
   */
  verticalJustification: undefined,
  
  /*
   * The maximum amount of vertical space between two paragraphs. Note: Valid only when vertical justification is justified; the specified amount is applied in addition to the space before or space after values defined for the paragraph. Can return: Unit (0 - 8640 points) or NothingEnum enumerator.
   * @type {Mixed}
   */
  verticalThreshold: undefined,
  
  /*
   * If true, ignores text wrap settings for drawn or placed objects in the text frame. . Can return: Boolean or NothingEnum enumerator.
   * @type {Mixed}
   */
  ignoreWrap: undefined,
  
  /*
   * If true, uses a custom baseline frame grid. Can return: Boolean or NothingEnum enumerator.
   * @type {Mixed}
   */
  useCustomBaselineFrameGrid: undefined,
  
  /*
   * The amount to offset the baseline grid. Can return: Unit (0 - 8640 points) or NothingEnum enumerator.
   * @type {Mixed}
   */
  startingOffsetForBaselineFrameGrid: undefined,
  
  /*
   * The location (top of page, top margin, top of frame, or frame inset) on which to base the custom baseline grid. Can return: BaselineFrameGridRelativeOption enumerator or NothingEnum enumerator.
   * @type {Mixed}
   */
  baselineFrameGridRelativeOption: undefined,
  
  /*
   * The distance between grid lines. Can return: Unit (1 - 8640 points) or NothingEnum enumerator.
   * @type {Mixed}
   */
  baselineFrameGridIncrement: undefined,
  
  /*
   * The grid line color, specified either as an array of three doubles, each in the range 0 to 255 and representing R, G, and B values, or as a UI color. Can return: Array of 3 Reals (0 - 255) or UIColors enumerator or NothingEnum enumerator.
   * @type {Mixed}
   */
  baselineFrameGridColor: undefined,
  
  /*
   * If true, inverts the text wrap. Can return: Boolean or NothingEnum enumerator.
   * @type {Mixed}
   */
  inverse: undefined,
  
  /*
   * The contour type. Can return: ContourOptionsTypes enumerator or NothingEnum enumerator.
   * @type {Mixed}
   */
  contourType: undefined,
  
  /*
   * If true, creates interior clipping paths within the surrounding clipping path. Note: Valid only when clipping type is alpha channel or detect edges. . Can return: Boolean or NothingEnum enumerator.
   * @type {Mixed}
   */
  includeInsideEdges: undefined,
  
  /*
   * The position of the anchored object relative to the anchor. Can return: AnchorPosition enumerator or NothingEnum enumerator.
   * @type {Mixed}
   */
  anchoredPosition: undefined,
  
  /*
   * If true, the position of the anchored object is relative to the binding spine of the page or spread. Can return: Boolean or NothingEnum enumerator.
   * @type {Mixed}
   */
  spineRelative: undefined,
  
  /*
   * If true, prevents manual positioning of the anchored object. Can return: Boolean or NothingEnum enumerator.
   * @type {Mixed}
   */
  lockPosition: undefined,
  
  /*
   * If true, pins the position of the anchored object within the text frame top and bottom. Can return: Boolean or NothingEnum enumerator.
   * @type {Mixed}
   */
  pinPosition: undefined,
  
  /*
   * The point in the anchored object to position. Can return: AnchorPoint enumerator or NothingEnum enumerator.
   * @type {Mixed}
   */
  anchorPoint: undefined,
  
  /*
   * The horizontal reference point on the page. Valid only when anchored position is custom. Can return: AnchoredRelativeTo enumerator or NothingEnum enumerator.
   * @type {Mixed}
   */
  horizontalReferencePoint: undefined,
  
  /*
   * The vertical reference point on the page. Valid when anchored position is custom. Can return: VerticallyRelativeTo enumerator or NothingEnum enumerator.
   * @type {Mixed}
   */
  verticalReferencePoint: undefined,
  
  /*
   * The horizontal (x) offset of the anchored object. Can return: Unit or NothingEnum enumerator.
   * @type {Mixed}
   */
  anchorXoffset: undefined,
  
  /*
   * The vertical (y) offset of the anchored object. Corresponds to the space after property for above line positioning. Can return: Unit or NothingEnum enumerator.
   * @type {Mixed}
   */
  anchorYoffset: undefined,
  
  /*
   * The space above an above-line anchored object. Can return: Unit or NothingEnum enumerator.
   * @type {Mixed}
   */
  anchorSpaceAbove: undefined,
  
  /*
   * If true, adjust the position of characters at the edges of the frame to provide a better appearance. Can return: Boolean or NothingEnum enumerator.
   * @type {Mixed}
   */
  opticalMarginAlignment: undefined,
  
  /*
   * The point size used as the basis for calculating optical margin alignment. (Range: 0.1 to 1296). Can return: Unit (0.1 - 1296 points) or NothingEnum enumerator.
   * @type {Mixed}
   */
  opticalMarginSize: undefined,
  
  /*
   * The amount in measurement units to crop the left edge of a graphic. Can return: Unit or NothingEnum enumerator.
   * @type {Mixed}
   */
  leftCrop: undefined,
  
  /*
   * The amount in measurement units to crop the top edge of a graphic. Can return: Unit or NothingEnum enumerator.
   * @type {Mixed}
   */
  topCrop: undefined,
  
  /*
   * The amount in measurement units to crop the right edge of a graphic. Can return: Unit or NothingEnum enumerator.
   * @type {Mixed}
   */
  rightCrop: undefined,
  
  /*
   * The amount in measurement units to crop the bottom edge of a graphic. Can return: Unit or NothingEnum enumerator.
   * @type {Mixed}
   */
  bottomCrop: undefined,
  
  /*
   * The frame fitting option to apply to placed or pasted content if the frame is empty. Can be applied to a frame, object style, or document or to the application. Can return: EmptyFrameFittingOptions enumerator or NothingEnum enumerator.
   * @type {Mixed}
   */
  fittingOnEmptyFrame: undefined,
  
  /*
   * The point with which to align the image empty when fitting in a frame. For information, see frame fitting options. Can return: AnchorPoint enumerator or NothingEnum enumerator.
   * @type {Mixed}
   */
  fittingAlignment: undefined,
  
  /*
   * The shape to be applied to the top left corner of rectangular shapes and all corners of non-rectangular shapes.Note: corner option differs from end join in which you can set a radius for a corner option, whereas the rounded or beveled effect of an end join depends on the stroke weight. Can return: CornerOptions enumerator or NothingEnum enumerator.
   * @type {Mixed}
   */
  topLeftCornerOption: undefined,
  
  /*
   * The shape to apply to the top right corner of rectangular shapes. Can return: CornerOptions enumerator or NothingEnum enumerator.
   * @type {Mixed}
   */
  topRightCornerOption: undefined,
  
  /*
   * The shape to apply to the bottom left corner of rectangular shapes. Can return: CornerOptions enumerator or NothingEnum enumerator.
   * @type {Mixed}
   */
  bottomLeftCornerOption: undefined,
  
  /*
   * The shape to apply to the bottom right corner of rectangular shapes. Can return: CornerOptions enumerator or NothingEnum enumerator.
   * @type {Mixed}
   */
  bottomRightCornerOption: undefined,
  
  /*
   * The radius in measurement units of the corner effect applied to the top left corner of rectangular shapes and all corners of non-rectangular shapes. Can return: Unit or NothingEnum enumerator.
   * @type {Mixed}
   */
  topLeftCornerRadius: undefined,
  
  /*
   * The radius in measurement units of the corner effect applied to the top right corner of rectangular shapes. Can return: Unit or NothingEnum enumerator.
   * @type {Mixed}
   */
  topRightCornerRadius: undefined,
  
  /*
   * The radius in measurement units of the corner effect applied to the bottom left corner of rectangular shapes. Can return: Unit or NothingEnum enumerator.
   * @type {Mixed}
   */
  bottomLeftCornerRadius: undefined,
  
  /*
   * The radius in measurement units of the corner effect applied to the bottom right corner of rectangular shapes. Can return: Unit or NothingEnum enumerator.
   * @type {Mixed}
   */
  bottomRightCornerRadius: undefined,
  
  /*
   * Auto-sizing type of text frame. Based on type, reference value is automatically adjusted. For example, for height only type, top-left reference point becomes top-center. Recommended to change auto-sizing type, after setting other auto-sizing attributes. Can return: AutoSizingTypeEnum enumerator or NothingEnum enumerator.
   * @type {Mixed}
   */
  autoSizingType: undefined,
  
  /*
   * The reference point for auto sizing of text frame. Reference point is automatically adjusted to the suitable value depending on the auto-sizing type value. As an example, top left reference point becomes top center for height only dimension. Can return: AutoSizingReferenceEnum enumerator or NothingEnum enumerator.
   * @type {Mixed}
   */
  autoSizingReferencePoint: undefined,
  
  /*
   * If true, minimum height value is used during the auto-sizing of text frame. . Can return: Boolean or NothingEnum enumerator.
   * @type {Mixed}
   */
  useMinimumHeightForAutoSizing: undefined,
  
  /*
   * The minimum height for auto-sizing of the text frame. Can return: Unit or NothingEnum enumerator.
   * @type {Mixed}
   */
  minimumHeightForAutoSizing: undefined,
  
  /*
   * If true, minimum width value is used during the auto-sizing of text frame. . Can return: Boolean or NothingEnum enumerator.
   * @type {Mixed}
   */
  useMinimumWidthForAutoSizing: undefined,
  
  /*
   * The minimum width for auto-sizing of the text frame. Can return: Unit or NothingEnum enumerator.
   * @type {Mixed}
   */
  minimumWidthForAutoSizing: undefined,
  
  /*
   * If true, line-breaks are not introduced after auto sizing. . Can return: Boolean or NothingEnum enumerator.
   * @type {Mixed}
   */
  useNoLineBreaksForAutoSizing: undefined,
  
  /*
   * The source type of alternate text. Can return: SourceType enumerator or NothingEnum enumerator.
   * @type {Mixed}
   */
  altTextSourceType: undefined,
  
  /*
   * The source type of actual text. Can return: SourceType enumerator or NothingEnum enumerator.
   * @type {Mixed}
   */
  actualTextSourceType: undefined,
  
  /*
   * The custom alternate text entered by the user. Can return: String or NothingEnum enumerator.
   * @type {Mixed}
   */
  customAltText: undefined,
  
  /*
   * The custom actual text entered by the user. Can return: String or NothingEnum enumerator.
   * @type {Mixed}
   */
  customActualText: undefined,
  
  /*
   * The metadata property to use as source of alternate text. Can return: Ordered array containing namespacePrefix:String, propertyPath:String or NothingEnum enumerator.
   * @type {Mixed}
   */
  altMetadataProperty: undefined,
  
  /*
   * The metadata property to use as source of actual text. Can return: Ordered array containing namespacePrefix:String, propertyPath:String or NothingEnum enumerator.
   * @type {Mixed}
   */
  actualMetadataProperty: undefined,
  
  /*
   * The tag type of page item. Can return: TagType enumerator or NothingEnum enumerator.
   * @type {Mixed}
   */
  applyTagType: undefined,
  
  /*
   * If true, custom image conversion is enabled for object. Can return: Boolean or NothingEnum enumerator.
   * @type {Mixed}
   */
  customImageConversion: undefined,
  
  /*
   * Allows user to select the image format for conversion. Can return: ImageFormat enumerator or NothingEnum enumerator.
   * @type {Mixed}
   */
  imageConversionType: undefined,
  
  /*
   * Allows user to select the image size option for conversion. Can return: ImageSizeOption enumerator or NothingEnum enumerator.
   * @type {Mixed}
   */
  customImageSizeOption: undefined,
  
  /*
   * The export resolution. Can return: ImageResolution enumerator or NothingEnum enumerator.
   * @type {Mixed}
   */
  imageExportResolution: undefined,
  
  /*
   * The color palette for GIF conversion. Note: Not valid when image conversion is JPEG. . Can return: GIFOptionsPalette enumerator or NothingEnum enumerator.
   * @type {Mixed}
   */
  gifOptionsPalette: undefined,
  
  /*
   * If true, generates interlaced GIFs. Note: Not valid  when image conversion is JPEG. Can return: Boolean or NothingEnum enumerator.
   * @type {Mixed}
   */
  gifOptionsInterlaced: undefined,
  
  /*
   * The quality of converted JPEG images. Note: Not valid when image conversion is GIF. . Can return: JPEGOptionsQuality enumerator or NothingEnum enumerator.
   * @type {Mixed}
   */
  jpegOptionsQuality: undefined,
  
  /*
   * The formatting method for converted JPEG images. Note: Not valid  when image conversion is GIF. Can return: JPEGOptionsFormat enumerator or NothingEnum enumerator.
   * @type {Mixed}
   */
  jpegOptionsFormat: undefined,
  
  /*
   * Alignment applied to images. Can return: ImageAlignmentType enumerator or NothingEnum enumerator.
   * @type {Mixed}
   */
  imageAlignment: undefined,
  
  /*
   * Space Before applied to images. Can return: Real (0 - 8640) or NothingEnum enumerator.
   * @type {Mixed}
   */
  imageSpaceBefore: undefined,
  
  /*
   * Space After applied to images. Can return: Real (0 - 8640) or NothingEnum enumerator.
   * @type {Mixed}
   */
  imageSpaceAfter: undefined,
  
  /*
   * If true, image page break settings will be used in objects. Can return: Boolean or NothingEnum enumerator.
   * @type {Mixed}
   */
  useImagePageBreak: undefined,
  
  /*
   * Image page break settings to be used with objects. Can return: ImagePageBreakType enumerator or NothingEnum enumerator.
   * @type {Mixed}
   */
  imagePageBreak: undefined,
  
  /*
   * A property that allows setting of several properties at the same time.
   * @type {Object}
   */
  properties: undefined,
  
  /*
   * Provides the alternate text for the object
   * @returns {String}
   */
  altText: function() {
    return new String();
  },
  
  /*
   * Provides the actual text for the object
   * @returns {String}
   */
  actualText: function() {
    return new String();
  },
  
  /*
   * Generates a string which, if executed, will return the ChangeObjectPreference.
   * @returns {String}
   */
  toSource: function() {
    return new String();
  },
  
  /*
   * Resolves the object specifier, creating an array of object references.
   * @returns {ChangeObjectPreference}
   */
  getElements: function() {
    return new ChangeObjectPreference();
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
