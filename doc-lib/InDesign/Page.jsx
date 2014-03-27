/*
 * A page.
 */
var Page = {
  /*
   * The alternate layout section to which the page belongs.
   * @type {Section}
   */
  appliedAlternateLayout: undefined,
  
  /*
   * Margin preference settings.
   * @type {MarginPreference}
   */
  marginPreferences: undefined,
  
  /*
   * The side of the binding spine on which to place the page within the spread.
   * @type {PageSideOptions}
   */
  side: undefined,
  
  /*
   * The name of the Page.
   * @type {String}
   */
  name: undefined,
  
  /*
   * The section to which the page belongs.
   * @type {Section}
   */
  appliedSection: undefined,
  
  /*
   * The index of the Page within its containing object.
   * @type {Number}
   */
  index: undefined,
  
  /*
   * The sequential number of the page within the document.
   * @type {Number}
   */
  documentOffset: undefined,
  
  /*
   * The bounds of the Page, in the format [y1, x1, y2, x2].
   * @type {Mixed}
   */
  bounds: undefined,
  
  /*
   * The items on a specified document page that originated on the applied master page and have not been overridden or detached. Can return: Array of PageItems, Guides, Graphics, Movies or Sounds.
   * @type {Mixed}
   */
  masterPageItems: undefined,
  
  /*
   * Lists all page items contained by the Page.
   * @type {PageItem}
   */
  allPageItems: undefined,
  
  /*
   * Lists all graphics contained by the Page.
   * @type {Graphic}
   */
  allGraphics: undefined,
  
  /*
   * Default grid properties. Note: Applies to named, layout, and frame (story) grids.
   * @type {GridDataInformation}
   */
  gridData: undefined,
  
  /*
   * The unique ID of the Page.
   * @type {Number}
   */
  id: undefined,
  
  /*
   * Returns true if the object specifier resolves to valid objects.
   * @type {Boolean}
   */
  isValid: undefined,
  
  /*
   * The parent of the Page (a Spread or MasterSpread).
   * @type {Mixed}
   */
  parent: undefined,
  
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
   * A collection of guides.
   * @type {Guides}
   */
  guides: undefined,
  
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
   * layout rule
   * @type {LayoutRuleOptions}
   */
  layoutRule: undefined,
  
  /*
   * snapshot blending mode
   * @type {SnapshotBlendingModes}
   */
  snapshotBlendingMode: undefined,
  
  /*
   * optional page for HTML5 pagination. Obsolete after CS6
   * @type {Boolean}
   */
  optionalPage: undefined,
  
  /*
   * The trap preset applied to the page. Can also accept: String.
   * @type {TrapPreset}
   */
  appliedTrapPreset: undefined,
  
  /*
   * The color label of the Page, specified either as  an array of three doubles, each in the range 0 to 255 and representing R, G, and B values, or as a UI color. Can return: Array of 3 Reals (0 - 255) or UIColors enumerator or PageColorOptions enumerator.
   * @type {Mixed}
   */
  pageColor: undefined,
  
  /*
   * The master spread applied to the Page. Can also accept: NothingEnum enumerator.
   * @type {MasterSpread}
   */
  appliedMaster: undefined,
  
  /*
   * The transform applied to the master page before it is applied to Page.
   * @type {TransformationMatrix}
   */
  masterPageTransform: undefined,
  
  /*
   * The order in which the focus moves to different form fields in the PDF when the tab key is pressed. Can return: Array of Buttons, CheckBoxes, ComboBoxes, ListBoxes, RadioButtons, TextBoxes or SignatureFields.
   * @type {Mixed}
   */
  tabOrder: undefined,
  
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
   * Places the XML element onto a page. If the place point is above an existing page item, place the XML element into the page item.
 *
   * @param {XMLElement} using The XML element to place.
   * @param {Mixed} placePoint The point at which to place the object, specified in the format [x, y].
   * @param {Boolean} [autoflowing] If true, autoflows placed text. 
   * @returns {PageItem}
   */
  placeXML: function(using, placePoint, autoflowing) {
    return new PageItem();
  },
  
  /*
   * Replaces the content of XML element with content imported from a file.
 *
   * @param {String} using The file path to the import file.
   * @param {String} [relativeBasePath] Base path used to resolve relative paths. 
   * @returns {PageItem}
   */
  setContent: function(using, relativeBasePath) {
    return new PageItem();
  },
  
  /*
   * Create a snapshot of the layout for the current Page size and shape.
   */
  snapshotCurrentLayout: function() {
  },
  
  /*
   * Delete the snapshot of the layout for the current Page size and shape.
   */
  deleteLayoutSnapshot: function() {
  },
  
  /*
   * Delete all layout snapshots for this Page.
   */
  deleteAllLayoutSnapshots: function() {
  },
  
  /*
   * Moves the page.
 *
   * @param {LocationOptions} [to] The new location of the page relative to the reference object or within the document or spread.  
   * @param {Mixed} [reference] The reference object. Note: Required when the to parameter value specifies before or after. Can accept: Page or Spread. 
   * @param {BindingOptions} [binding] The location of the binding spine in spreads. 
   * @returns {Page}
   */
  move: function(to, reference, binding) {
    return new Page();
  },
  
  /*
   * Deletes the Page.
   */
  remove: function() {
  },
  
  /*
   * Duplicates the page.
 *
   * @param {LocationOptions} [to] The location at which to place the duplicate page relative to the reference object or within the document or spread.  
   * @param {Mixed} [reference] The reference object. Note: Required when the to value specifies before or after. Can accept: Page or Spread. 
   * @returns {Page}
   */
  duplicate: function(to, reference) {
    return new Page();
  },
  
  /*
   * Deprecated: Use contentPlace method. Original Description: Create a linked story and place it into the target.
 *
   * @param {Story} parentStory The story to place and link from.
   * @param {Mixed} [placePoint] The point at which to place 
   * @param {Layer} [destinationLayer] The layer on which to place 
   * @param {Boolean} [showingOptions] Whether to display the link options dialog 
   * @returns {Story}
   */
  placeAndLink: function(parentStory, placePoint, destinationLayer, showingOptions) {
    return new Story();
  },
  
  /*
   * Places the file.
 *
   * @param {File} fileName The file to place
   * @param {Mixed} [placePoint] The point at which to place 
   * @param {Layer} [destinationLayer] The layer on which to place 
   * @param {Boolean} [showingOptions] Whether to display the import options dialog 
   * @param {Boolean} [autoflowing] Whether to autoflow placed text 
   * @param {Object} [withProperties] Initial values for properties of the placed object(s) 
   * @returns {Mixed}
   */
  place: function(fileName, placePoint, destinationLayer, showingOptions, autoflowing, withProperties) {
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
   * Selects the object.
 *
   * @param {SelectionOptions} [existingSelection] The selection status of the Page in relation to previously selected objects. 
   */
  select: function(existingSelection) {
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
   * Move the bounding box of the page item
 *
   * @param {Mixed} in The bounding box to resize. Can accept: CoordinateSpaces enumerator or Ordered array containing coordinateSpace:CoordinateSpaces enumerator, boundsKind:BoundingBoxLimits enumerator.
   * @param {Mixed} opposingCorners Opposing corners of new bounding box in the given coordinate space
   */
  reframe: function(in, opposingCorners) {
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
   * Duplicate an object and place it into the target.
 *
   * @param {PageItem} pageItems One or more page items to place or load
   * @param {Boolean} [linkPageItems] Whether to link pageItems in content placer (if true it will override link stories value) 
   * @param {Boolean} [linkStories] Whether to link stories in content placer (only applicable for single story, pageItem links will also be created in case of more than one item) 
   * @param {Boolean} [mapStyles] Whether to map styles in content placer 
   * @param {Mixed} [placePoint] The point at which to place 
   * @param {Layer} [destinationLayer] The layer on which to place 
   * @param {Boolean} [showingOptions] Whether to display the link options dialog 
   * @returns {Mixed}
   */
  contentPlace: function(pageItems, linkPageItems, linkStories, mapStyles, placePoint, destinationLayer, showingOptions) {
    return new Mixed();
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
   * Generates a string which, if executed, will return the Page.
   * @returns {String}
   */
  toSource: function() {
    return new String();
  },
  
  /*
   * Resolves the object specifier, creating an array of object references.
   * @returns {Page}
   */
  getElements: function() {
    return new Page();
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
