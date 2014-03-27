/*
 * A group.
 */
var Group = {
  /*
   * Dispatched before a Group is placed. This event bubbles. This event is cancelable.
   * @type {String}
   */
  BEFORE_PLACE: undefined,
  
  /*
   * Dispatched after a Group is placed. This event bubbles. This event is not cancelable.
   * @type {String}
   */
  AFTER_PLACE: undefined,
  
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
   * Transparency settings for the fill applied to the Group.
   * @type {FillTransparencySetting}
   */
  fillTransparencySettings: undefined,
  
  /*
   * Transparency settings for the content of the Group.
   * @type {ContentTransparencySetting}
   */
  contentTransparencySettings: undefined,
  
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
   * Export options for the object
   * @type {ObjectExportOption}
   */
  objectExportOptions: undefined,
  
  /*
   * The XML element associated with the Group.
   * @type {XMLItem}
   */
  associatedXMLElement: undefined,
  
  /*
   * Linked Page Item options
   * @type {LinkedPageItemOption}
   */
  linkedPageItemOptions: undefined,
  
  /*
   * If true, the object originated on a master spread and was overridden. If false, the object either originated on a master spread and was not overridden, or the object did not originate on a master page.
   * @type {Boolean}
   */
  overridden: undefined,
  
  /*
   * An object that originated on a master page and has been overridden. Can return: PageItem, Guide, Graphic, Movie or Sound.
   * @type {Mixed}
   */
  overriddenMasterPageItem: undefined,
  
  /*
   * Lists all page items contained by the Group.
   * @type {PageItem}
   */
  allPageItems: undefined,
  
  /*
   * Lists all graphics contained by the Group.
   * @type {Graphic}
   */
  allGraphics: undefined,
  
  /*
   * The page on which this page item appears.
   * @type {Page}
   */
  parentPage: undefined,
  
  /*
   * The page item animation settings.
   * @type {AnimationSetting}
   */
  animationSettings: undefined,
  
  /*
   * The object timing settings.
   * @type {TimingSetting}
   */
  timingSettings: undefined,
  
  /*
   * The list of all articles this page item is part of
   * @type {Article}
   */
  allArticles: undefined,
  
  /*
   * The unique ID of the Group.
   * @type {Number}
   */
  id: undefined,
  
  /*
   * Returns true if the object specifier resolves to valid objects.
   * @type {Boolean}
   */
  isValid: undefined,
  
  /*
   * The parent of the Group (a PlaceGun, ComboBox, ListBox, TextBox, SignatureField, Spread, MasterSpread, SplineItem, Polygon, GraphicLine, Rectangle, Oval, Group, State, Character or Snippet).
   * @type {Mixed}
   */
  parent: undefined,
  
  /*
   * The index of the Group within its containing object.
   * @type {Number}
   */
  index: undefined,
  
  /*
   * A collection of preferences objects.
   * @type {Preferences}
   */
  preferences: undefined,
  
  /*
   * A collection of ellipses.
   * @type {Ovals}
   */
  ovals: undefined,
  
  /*
   * The spline items collection.
   * @type {SplineItems}
   */
  splineItems: undefined,
  
  /*
   * The page items collection, which can be used to process all page items in a container (such as a document, page, or group), regardless of type.
   * @type {PageItems}
   */
  pageItems: undefined,
  
  /*
   * A collection of rectangles.
   * @type {Rectangles}
   */
  rectangles: undefined,
  
  /*
   * A collection of graphic lines.
   * @type {GraphicLines}
   */
  graphicLines: undefined,
  
  /*
   * A collection of text frames.
   * @type {TextFrames}
   */
  textFrames: undefined,
  
  /*
   * A collection of polygons.
   * @type {Polygons}
   */
  polygons: undefined,
  
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
   * A collection of groups.
   * @type {Groups}
   */
  groups: undefined,
  
  /*
   * EPSTexts
   * @type {EPSTexts}
   */
  epstexts: undefined,
  
  /*
   * A collection of form fields.
   * @type {FormFields}
   */
  formFields: undefined,
  
  /*
   * A collection of buttons.
   * @type {Buttons}
   */
  buttons: undefined,
  
  /*
   * A collection of multi-state objects.
   * @type {MultiStateObjects}
   */
  multiStateObjects: undefined,
  
  /*
   * A collection of checkboxes.
   * @type {CheckBoxes}
   */
  checkBoxes: undefined,
  
  /*
   * A collection of comboboxes.
   * @type {ComboBoxes}
   */
  comboBoxes: undefined,
  
  /*
   * A collection of listboxes.
   * @type {ListBoxes}
   */
  listBoxes: undefined,
  
  /*
   * A collection of radio buttons.
   * @type {RadioButtons}
   */
  radioButtons: undefined,
  
  /*
   * A collection of text boxes.
   * @type {TextBoxes}
   */
  textBoxes: undefined,
  
  /*
   * A collection of signature fields.
   * @type {SignatureFields}
   */
  signatureFields: undefined,
  
  /*
   * A collection of group items that are also part of an article.
   * @type {ArticleChildren}
   */
  articleChildren: undefined,
  
  /*
   * If true, the master page item can be overridden.
   * @type {Boolean}
   */
  allowOverrides: undefined,
  
  /*
   * The left margin, width, and right margin constraints this item is subject to when using the object-based layout rule.
   * @type {DimensionsConstraints}
   */
  horizontalLayoutConstraints: undefined,
  
  /*
   * The top margin, height, and bottom margin constraints this item is subject to when using the object-based layout rule.
   * @type {DimensionsConstraints}
   */
  verticalLayoutConstraints: undefined,
  
  /*
   * The bounds of the Group excluding the stroke width, in the format [y1, x1, y2, x2], which give the coordinates of the top-left and bottom-right corners of the bounding box.
   * @type {Mixed}
   */
  geometricBounds: undefined,
  
  /*
   * The bounds of the Group including the stroke width, in the format [y1, x1, y2, x2], which give the coordinates of the top-left and bottom-right corners of the bounding box.
   * @type {Mixed}
   */
  visibleBounds: undefined,
  
  /*
   * The swatch (color, gradient, tint, or mixed ink) applied to the fill of the Group. . Can also accept: String.
   * @type {Swatch}
   */
  fillColor: undefined,
  
  /*
   * The percent of tint to use in the Group's fill color. (To specify a tint percent, use a number in the range of 0 to 100; to use the inherited or overridden value, use -1.)
   * @type {Number}
   */
  fillTint: undefined,
  
  /*
   * If true, the Group's fill color overprints any underlying objects. If false, the fill color knocks out the underlying colors.
   * @type {Boolean}
   */
  overprintFill: undefined,
  
  /*
   * The weight (in points) to apply to the Group's stroke.
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
   * The corner join applied to the Group.
   * @type {EndJoin}
   */
  endJoin: undefined,
  
  /*
   * The name of the stroke style to apply. Can also accept: String.
   * @type {StrokeStyle}
   */
  strokeType: undefined,
  
  /*
   * The corner adjustment applied to the Group.
   * @type {StrokeCornerAdjustment}
   */
  strokeCornerAdjustment: undefined,
  
  /*
   * The dash and gap measurements that define the pattern of a custom dashed line. Define up to six values (in points) in the format [dash1, gap1, dash2, gap2, dash3, gap3].
   * @type {Mixed}
   */
  strokeDashAndGap: undefined,
  
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
   * The swatch (color, gradient, tint, or mixed ink) applied to the stroke of the Group. Can also accept: String.
   * @type {Swatch}
   */
  strokeColor: undefined,
  
  /*
   * The percent of tint to use in object's stroke color. (To specify a tint percent, use a number in the range of 0 to 100; to use the inherited or overridden value, use -1.)
   * @type {Number}
   */
  strokeTint: undefined,
  
  /*
   * The starting point (in page coordinates) of a gradient applied to the fill of the Group, in the format [x, y].
   * @type {Mixed}
   */
  gradientFillStart: undefined,
  
  /*
   * The length (for a linear gradient) or radius (for a radial gradient) applied to the fill of the Group.
   * @type {Mixed}
   */
  gradientFillLength: undefined,
  
  /*
   * The angle of a linear gradient applied to the fill of the Group. (Range: -180 to 180)
   * @type {Number}
   */
  gradientFillAngle: undefined,
  
  /*
   * The starting point (in page coordinates) of a gradient applied to the stroke of the Group, in the format [x, y].
   * @type {Mixed}
   */
  gradientStrokeStart: undefined,
  
  /*
   * The length (for a linear gradient) or radius (for a radial gradient) applied to the stroke of the Group.
   * @type {Mixed}
   */
  gradientStrokeLength: undefined,
  
  /*
   * The angle of a linear gradient applied to the stroke of the Group. (Range: -180 to 180)
   * @type {Number}
   */
  gradientStrokeAngle: undefined,
  
  /*
   * If true, the Group's stroke color overprints any underlying objects. If false, the stroke color knocks out the  underlying colors.
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
   * The stroke alignment applied to the Group.
   * @type {StrokeAlignment}
   */
  strokeAlignment: undefined,
  
  /*
   * If true, the Group does not print.
   * @type {Boolean}
   */
  nonprinting: undefined,
  
  /*
   * The layer that the Group is on.
   * @type {Layer}
   */
  itemLayer: undefined,
  
  /*
   * If true, the Group is locked.
   * @type {Boolean}
   */
  locked: undefined,
  
  /*
   * Display performance options for the Group.
   * @type {DisplaySettingOptions}
   */
  localDisplaySetting: undefined,
  
  /*
   * The rotatation angle of the Group. (Range: -360 to 360)
   * @type {Number}
   */
  rotationAngle: undefined,
  
  /*
   * The skewing angle applied to the Group. (Range: -360 to 360)
   * @type {Number}
   */
  shearAngle: undefined,
  
  /*
   * The horizontal scaling applied to the Group.
   * @type {Number}
   */
  horizontalScale: undefined,
  
  /*
   * The vertical scaling applied to the Group.
   * @type {Number}
   */
  verticalScale: undefined,
  
  /*
   * The rotation angle of the Group relative to its containing object. (Range: -360 to 360)
   * @type {Number}
   */
  absoluteRotationAngle: undefined,
  
  /*
   * The skewing angle of the Group relative to its containing object. (Range: -360 to 360)
   * @type {Number}
   */
  absoluteShearAngle: undefined,
  
  /*
   * The horizontal scale of the Group relative to its containing object.
   * @type {Number}
   */
  absoluteHorizontalScale: undefined,
  
  /*
   * The vertical scale of the Group relative to its containing object.
   * @type {Number}
   */
  absoluteVerticalScale: undefined,
  
  /*
   * The object style applied to the Group.
   * @type {ObjectStyle}
   */
  appliedObjectStyle: undefined,
  
  /*
   * The direction in which to flip the printed image.
   * @type {Flip}
   */
  flip: undefined,
  
  /*
   * Indicates whether the Group has been flipped independently of its parent object and, if yes, the direction in which the Group was flipped.
   * @type {Flip}
   */
  absoluteFlip: undefined,
  
  /*
   * If true, the Group is visible.
   * @type {Boolean}
   */
  visible: undefined,
  
  /*
   * The name of the Group.
   * @type {String}
   */
  name: undefined,
  
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
   * Finds objects that match the find what value.
 *
   * @param {Boolean} [reverseOrder] If true, returns the results in reverse order. 
   * @returns {PageItem}
   */
  findObject: function(reverseOrder) {
    return new PageItem();
  },
  
  /*
   * Finds objects that match the find what value and replace the objects with the change to value.
 *
   * @param {Boolean} [reverseOrder] If true, returns the results in reverse order. 
   * @returns {PageItem}
   */
  changeObject: function(reverseOrder) {
    return new PageItem();
  },
  
  /*
   * Ungroups the group.
   */
  ungroup: function() {
  },
  
  /*
   * Brings the Group to the front of its layer or in front of a particular item.
 *
   * @param {PageItem} [reference] The reference object to bring the object in front of (must have same parent) 
   */
  bringToFront: function(reference) {
  },
  
  /*
   * Sends the Group to the back of its layer or behind a particular item (must have same parent).
 *
   * @param {PageItem} [reference] The reference object to send the object behind 
   */
  sendToBack: function(reference) {
  },
  
  /*
   * Brings the Group forward one level in its layer.
   */
  bringForward: function() {
  },
  
  /*
   * Sends the Group back one level in its layer.
   */
  sendBackward: function() {
  },
  
  /*
   * Places XML content into the specified object. Note: Replaces any existing content.
 *
   * @param {XMLElement} using The XML element whose content you want to place.
   */
  placeXML: function(using) {
  },
  
  /*
   * Tag the object or the parent story using default tags defined in XML preference.
   */
  autoTag: function() {
  },
  
  /*
   * Associates the page item with the specified XML element while preserving existing content.
 *
   * @param {XMLElement} using The XML element.
   */
  markup: function(using) {
  },
  
  /*
   * Overrides a master page item and places the item on the document page as a new object.
 *
   * @param {Page} destinationPage The document page that contains the master page item to override.
   * @returns {Mixed}
   */
  override: function(destinationPage) {
    return new Mixed();
  },
  
  /*
   * Removes the override from a previously overridden master page item.
   */
  removeOverride: function() {
  },
  
  /*
   * Detaches an overridden master page item from the master page.
   */
  detach: function() {
  },
  
  /*
   * Deletes the Group.
   */
  remove: function() {
  },
  
  /*
   * Applies the specified fit option to content in a frame.
 *
   * @param {FitOptions} given The fit option to use.
   */
  fit: function(given) {
  },
  
  /*
   * Flips the Group.
 *
   * @param {Flip} given The axis around which to flip the Group.
   * @param {Mixed} [around] The point around which to flip the Group. Can accept: Array of 2 Units or AnchorPoint enumerator. 
   */
  flipItem: function(given, around) {
  },
  
  /*
   * Duplicates the Group at the specified location or offset.
 *
   * @param {Mixed} [to] The location of the new Group, specified in coordinates in the format [x, y]. Can accept: Array of 2 Units, Spread, Page or Layer. 
   * @param {Mixed} [by] Amount by which to offset the new Group from the original Group's position. 
   * @returns {PageItem}
   */
  duplicate: function(to, by) {
    return new PageItem();
  },
  
  /*
   * Moves the Group to a new location. Note: Either the 'to' or 'by' parameter is required; if both parameters are defined, only the to value is used.
 *
   * @param {Mixed} [to] The new location of the Group,in the format (x, y). Can accept: Array of 2 Units, Spread, Page or Layer. 
   * @param {Mixed} [by] The amount (in measurement units) to move the Group relative to its current position, in the format (x, y). 
   */
  move: function(to, by) {
  },
  
  /*
   * Applies the specified object style.
 *
   * @param {ObjectStyle} using The object style to apply.
   * @param {Boolean} [clearingOverrides] If true, clears the Group's existing attributes before applying the style. 
   * @param {Boolean} [clearingOverridesThroughRootObjectStyle] If true, clears attributes and formatting applied to the Group that are not defined in the object style. 
   */
  applyObjectStyle: function(using, clearingOverrides, clearingOverridesThroughRootObjectStyle) {
  },
  
  /*
   * Clear overrides for object style
   */
  clearObjectStyleOverrides: function() {
  },
  
  /*
   * Converts the Group to a different shape.
 *
   * @param {ConvertShapeOptions} given The Group's new shape.
   * @param {Number} [numberOfSides] The number of sides for the resulting polygon. (Range: 3 to 100) 
   * @param {Number} [insetPercentage] The star inset percentage for the resulting polygon. (Range: 0.0 to 100.0)  
   * @param {Mixed} [cornerRadius] The corner radius of the resulting rectangle. 
   */
  convertShape: function(given, numberOfSides, insetPercentage, cornerRadius) {
  },
  
  /*
   * Clears transformations from the Group. Transformations include rotation, scaling, flipping, fitting, and shearing.
   */
  clearTransformations: function() {
  },
  
  /*
   * Transform the page item.
 *
   * @param {CoordinateSpaces} in The coordinate space to use
   * @param {Mixed} from The temporary origin during the transformation. Can accept: Array of 2 Reals, AnchorPoint enumerator or Array of Arrays of 2 Reals, CoordinateSpaces enumerators, AnchorPoint enumerators, BoundingBoxLimits enumerators or Long Integers.
   * @param {Mixed} withMatrix Transform matrix. Can accept: Array of 6 Reals or TransformationMatrix.
   * @param {Mixed} [replacingCurrent] Transform components to consider; providing this optional parameter causes the target's existing transform components to be replaced with new values.  Without this parameter, the given matrix is concatenated onto the target's existing transform combining the effect of the two. Can accept: MatrixContent enumerator, Array of MatrixContent enumerators or Long Integer. 
   * @param {Boolean} [consideringRulerUnits] If true then a ruler based origin is interpreted using ruler units rather than points. The default value is false. This parameter has no effect unless the reference point is specified relative to a page. 
   */
  transform: function(in, from, withMatrix, replacingCurrent, consideringRulerUnits) {
  },
  
  /*
   * Get the transformation values of the page item.
 *
   * @param {CoordinateSpaces} in The coordinate space to use
   * @returns {TransformationMatrix}
   */
  transformValuesOf: function(in) {
    return new TransformationMatrix();
  },
  
  /*
   * Get the coordinates of the given location in the specified coordinate system.
 *
   * @param {Mixed} location The location requested. Can accept: Array of 2 Reals, AnchorPoint enumerator or Array of Arrays of 2 Reals, CoordinateSpaces enumerators, AnchorPoint enumerators, BoundingBoxLimits enumerators or Long Integers.
   * @param {CoordinateSpaces} in The coordinate space to use.
   * @param {Boolean} [consideringRulerUnits] If true then a ruler location is interpreted using ruler units rather than points. The default value is false. This parameter has no effect unless the reference point is specified relative to a page. 
   * @returns {Mixed}
   */
  resolve: function(location, in, consideringRulerUnits) {
    return new Mixed();
  },
  
  /*
   * Apply an item's scaling to its content if possible.
 *
   * @param {Number} [to] The scale factors to be left on the item.  The default is {1.0, 1.0}. 
   */
  redefineScaling: function(to) {
  },
  
  /*
   * Resize the page item.
 *
   * @param {Mixed} in The bounding box to resize. Can accept: CoordinateSpaces enumerator, BoundingBoxLimits enumerator or Ordered array containing coordinateSpace:CoordinateSpaces enumerator, boundsKind:BoundingBoxLimits enumerator.
   * @param {Mixed} from The transform origin. Legal specifications: relative to bounding box: anchor | {anchor | {x,y}, bounds kind [, coordinate space]}; relative to coordinate space: {x,y} | {{x,y}[, coordinate space]}; relative to layout window ruler: {{x,y}, page index | bounds kind}. Can accept: Array of 2 Reals, AnchorPoint enumerator or Array of Arrays of 2 Reals, CoordinateSpaces enumerators, AnchorPoint enumerators, BoundingBoxLimits enumerators or Long Integers.
   * @param {ResizeMethods} by How the current dimensions are affected by the given values
   * @param {Mixed} values The width and height values. Legal dimensions specifications: {x, y [, coordinate space]}, {x, resize constraint [, coordinate space]}, or {resize constraint, y [, coordinate space]}; where x and y are real numbers and coordinate space is used to determine _only_ the unit of length for x and y; coordinate space is ignored for the 'current dimensions times' resize method). Can accept: Array of Reals, ResizeConstraints enumerators or CoordinateSpaces enumerators.
   * @param {Boolean} [resizeIndividually] If false and multiple page items are targeted, the new dimensions are attained only by moving the individual items rather than resizing them. 
   * @param {Boolean} [consideringRulerUnits] If true then a ruler location is interpreted using ruler units rather than points. The default value is false. This parameter has no effect unless the reference point is specified relative to a page. 
   */
  resize: function(in, from, by, values, resizeIndividually, consideringRulerUnits) {
  },
  
  /*
   * Move the bounding box of the page item
 *
   * @param {Mixed} in The bounding box to resize. Can accept: CoordinateSpaces enumerator or Ordered array containing coordinateSpace:CoordinateSpaces enumerator, boundsKind:BoundingBoxLimits enumerator.
   * @param {Mixed} opposingCorners Opposing corners of new bounding box in the given coordinate space
   */
  reframe: function(in, opposingCorners) {
  },
  
  /*
   * Transforms the Group using the last transformation performed on any object. Transformations include moving, rotating, shearing, scaling, and flipping.
   * @returns {String}
   */
  transformAgain: function() {
    return new String();
  },
  
  /*
   * Transforms the Group using the last sequence of transform operations performed on any single object or performed at the same time on any group of objects. Transformations include moving, rotating, shearing, scaling, and flipping.
   * @returns {String}
   */
  transformSequenceAgain: function() {
    return new String();
  },
  
  /*
   * Transforms the Group using the last transformation performed on any Group. Transformations include moving, rotating, shearing, scaling, and flipping.
   * @returns {String}
   */
  transformAgainIndividually: function() {
    return new String();
  },
  
  /*
   * Transforms the Group using the last sequence of transformations performed on any single object or performed at the same time on any group of objects. Transformations include moving, rotating, shearing, scaling, and flipping.
   * @returns {String}
   */
  transformSequenceAgainIndividually: function() {
    return new String();
  },
  
  /*
   * Create Plain Text QR Code on the page item
 *
   * @param {String} [plainText] QR code Plain Text  
   * @param {Mixed} [qrCodeSwatch] Swatch to be applied on generated QR Code Graphic . Can accept: Swatch or String. 
   * @param {String} [withProperties] Initial values for properties of the new Group. Above parameters can also be passed as properties 
   */
  createPlainTextQRCode: function(plainText, qrCodeSwatch, withProperties) {
  },
  
  /*
   * Create Hyperlink QR Code on the page item or document
 *
   * @param {String} [urlLink] QR code Hyperlink URL  
   * @param {Mixed} [qrCodeSwatch] Swatch to be applied on generated QR Code Graphic . Can accept: Swatch or String. 
   * @param {String} [withProperties] Initial values for properties of the new Group. Above parameters can also be passed as properties 
   */
  createHyperlinkQRCode: function(urlLink, qrCodeSwatch, withProperties) {
  },
  
  /*
   * Create Text Msg QR Code on the page item or document
 *
   * @param {String} [cellNumber] QR code Text Phone Number 
   * @param {String} [textMessage] QR code Text Message 
   * @param {Mixed} [qrCodeSwatch] Swatch to be applied on generated QR Code Graphic . Can accept: Swatch or String. 
   * @param {String} [withProperties] Initial values for properties of the new Group. Above parameters can also be passed as properties 
   */
  createTextMsgQRCode: function(cellNumber, textMessage, qrCodeSwatch, withProperties) {
  },
  
  /*
   * Create Email QR Code on the page item or document
 *
   * @param {String} [emailAddress] QR code Email Address 
   * @param {String} [subject] QR code Email Subject 
   * @param {String} [body] QR code Email Body Message 
   * @param {Mixed} [qrCodeSwatch] Swatch to be applied on generated QR Code Graphic . Can accept: Swatch or String. 
   * @param {String} [withProperties] Initial values for properties of the new Group. Above parameters can also be passed as properties 
   */
  createEmailQRCode: function(emailAddress, subject, body, qrCodeSwatch, withProperties) {
  },
  
  /*
   * Create Business Card QR Code on the page item or load on document's placegun
 *
   * @param {String} [firstName] QR code Business Card First Name 
   * @param {String} [lastName] QR code Business Card Last Name 
   * @param {String} [jobTitle] QR code Business Card Title 
   * @param {String} [cellPhone] QR code Business Card Cell Phone Number 
   * @param {String} [phone] QR code Business Card Phone Number 
   * @param {String} [email] QR code Business Card Email Address 
   * @param {String} [organisation] QR code Business Card Organisation 
   * @param {String} [streetAddress] QR code Business Card Street Address 
   * @param {String} [city] QR code Business Card City 
   * @param {String} [country] QR code Business Card Country 
   * @param {String} [postalCode] QR code Business Card Postal Code 
   * @param {String} [website] QR code Business Card URL 
   * @param {Mixed} [qrCodeSwatch] Swatch to be applied on generated QR Code Graphic . Can accept: Swatch or String. 
   * @param {String} [withProperties] Initial values for properties of the new Group. Above parameters can also be passed as properties 
   */
  createVCardQRCode: function(firstName, lastName, jobTitle, cellPhone, phone, email, organisation, streetAddress, city, country, postalCode, website, qrCodeSwatch, withProperties) {
  },
  
  /*
   * Exports the object(s) to a file.
 *
   * @param {Mixed} format The export format, specified as an enumeration value or as an extension that appears in the Save as type or Format menu in the Export dialog. Can accept: ExportFormat enumerator or String.
   * @param {File} to The path to the export file.
   * @param {Boolean} [showingOptions] If true, displays the export options dialog. 
   * @param {PDFExportPreset} [using] The export style. 
   * @param {String} [versionComments] The comment for this version. 
   * @param {Boolean} [forceSave] If true, forcibly saves a version. 
   */
  exportFile: function(format, to, showingOptions, using, versionComments, forceSave) {
  },
  
  /*
   * asynchronously exports the object(s) to a file.
 *
   * @param {Mixed} format The export format, specified as an enumeration value or as an extension that appears in the Save as type or Format menu in the Export dialog. Can accept: ExportFormat enumerator or String.
   * @param {File} to The path to the export file.
   * @param {Boolean} [showingOptions] If true, displays the export options dialog. 
   * @param {PDFExportPreset} [using] The export style. 
   * @param {String} [versionComments] The comment for this version. 
   * @param {Boolean} [forceSave] If true, forcibly saves a version. 
   * @returns {BackgroundTask}
   */
  asynchronousExportFile: function(format, to, showingOptions, using, versionComments, forceSave) {
    return new BackgroundTask();
  },
  
  /*
   * Duplicate an object and place it into the target page item.
 *
   * @param {PageItem} pageItems One or more page items to place or load
   * @param {Boolean} [linkPageItems] Whether to link pageItems in content placer (if true it will override link stories value) 
   * @param {Boolean} [linkStories] Whether to link stories in content placer (only applicable for single story, pageItem links will also be created in case of more than one item) 
   * @param {Boolean} [mapStyles] Whether to map styles in content placer 
   * @param {Boolean} [showingOptions] Whether to display the link options dialog 
   * @returns {Mixed}
   */
  contentPlace: function(pageItems, linkPageItems, linkStories, mapStyles, showingOptions) {
    return new Mixed();
  },
  
  /*
   * Selects the object.
 *
   * @param {SelectionOptions} [existingSelection] The selection status of the Group in relation to previously selected objects. 
   */
  select: function(existingSelection) {
  },
  
  /*
   * Stores the object in the specified library.
 *
   * @param {Library} using The library in which to store the object.
   * @param {Object} [withProperties] Initial values for properties of the new Group 
   * @returns {Asset}
   */
  store: function(using, withProperties) {
    return new Asset();
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
   * Generates a string which, if executed, will return the Group.
   * @returns {String}
   */
  toSource: function() {
    return new String();
  },
  
  /*
   * Resolves the object specifier, creating an array of object references.
   * @returns {Group}
   */
  getElements: function() {
    return new Group();
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
