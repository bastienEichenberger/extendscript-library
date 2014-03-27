/*
 * A spread.
 */
var Spread = {
  /*
   * Flattener preference settings.
   * @type {FlattenerPreference}
   */
  flattenerPreferences: undefined,
  
  /*
   * The index of the Spread within its containing object.
   * @type {Number}
   */
  index: undefined,
  
  /*
   * Lists all page items contained by the Spread.
   * @type {PageItem}
   */
  allPageItems: undefined,
  
  /*
   * Lists all graphics contained by the Spread.
   * @type {Graphic}
   */
  allGraphics: undefined,
  
  /*
   * The object timing settings.
   * @type {TimingSetting}
   */
  timingSettings: undefined,
  
  /*
   * The unique ID of the Spread.
   * @type {Number}
   */
  id: undefined,
  
  /*
   * Returns true if the object specifier resolves to valid objects.
   * @type {Boolean}
   */
  isValid: undefined,
  
  /*
   * The parent of the Spread (a Document).
   * @type {Document}
   */
  parent: undefined,
  
  /*
   * A collection of preferences objects.
   * @type {Preferences}
   */
  preferences: undefined,
  
  /*
   * A collection of pages.
   * @type {Pages}
   */
  pages: undefined,
  
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
   * The transparency flattener preferences override for the spread.
   * @type {SpreadFlattenerLevel}
   */
  flattenerOverride: undefined,
  
  /*
   * If true, guarantees that when pages are added to a spread it will contain a maximum of two pages. If false, allows pages to be added or moved into existing spreads. For override information, see preserve layout when shuffling.
   * @type {Boolean}
   */
  allowPageShuffle: undefined,
  
  /*
   * If true, displays master page items on document pages in the spread.
   * @type {Boolean}
   */
  showMasterItems: undefined,
  
  /*
   * The master spread applied to the Spread. Can also accept: NothingEnum enumerator.
   * @type {MasterSpread}
   */
  appliedMaster: undefined,
  
  /*
   * The IDML component name of the Spread.
   * @type {String}
   */
  idmlComponentName: undefined,
  
  /*
   * The type of page transition.
   * @type {PageTransitionTypeOptions}
   */
  pageTransitionType: undefined,
  
  /*
   * The direction of the page transition.
   * @type {PageTransitionDirectionOptions}
   */
  pageTransitionDirection: undefined,
  
  /*
   * The duration of the page transition.
   * @type {PageTransitionDurationOptions}
   */
  pageTransitionDuration: undefined,
  
  /*
   * A property that can be set to any string.
   * @type {String}
   */
  label: undefined,
  
  /*
   * The name of the Spread; this is an alias to the Spread's label property.
   * @type {String}
   */
  name: undefined,
  
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
   * Moves the spread.
 *
   * @param {LocationOptions} [to] The location of the spread relative to the reference object or within the document.  
   * @param {Mixed} [reference] The reference object. Note: Required when the to parameter specifies before or after. Can accept: Spread, Page or Document. 
   * @returns {Spread}
   */
  move: function(to, reference) {
    return new Spread();
  },
  
  /*
   * Deletes the Spread.
   */
  remove: function() {
  },
  
  /*
   * Duplicates the spread.
 *
   * @param {LocationOptions} [to] The location of the spread relative to the reference object or within the document. 
   * @param {Mixed} [reference] The reference object. Note: Required only when the to parameter specifies before or after. Can accept: Spread, Document or MasterSpread. 
   * @returns {Mixed}
   */
  duplicate: function(to, reference) {
    return new Mixed();
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
   * @param {SelectionOptions} [existingSelection] The selection status of the Spread in relation to previously selected objects. 
   */
  select: function(existingSelection) {
  },
  
  /*
   * Creates multiple guides on all pages of the spread.
 *
   * @param {Number} [numberOfRows] The number of rows to create on each page. 
   * @param {Number} [numberOfColumns] The number of columns to create on each page.  
   * @param {Mixed} [rowGutter] The height of the gutter between rows. 
   * @param {Mixed} [columnGutter] The width of the gutter between columns. 
   * @param {Mixed} [guideColor] The color to make the guides, specified either as an array of three doubles, each in the range 0 to 255 and representing R, G, and B values, or as a UI color. Can accept: Array of 3 Reals (0 - 255) or UIColors enumerator. 
   * @param {Boolean} [fitMargins] If true, the row height and column width are calculated based on the space within the page margins. If false, row height and column width are calculated based on the full page. 
   * @param {Boolean} [removeExisting] If true, removes existing guides when creating new ones. 
   * @param {Layer} [layer] The layer on which to create the guides. 
   */
  createGuides: function(numberOfRows, numberOfColumns, rowGutter, columnGutter, guideColor, fitMargins, removeExisting, layer) {
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
   * Generates a string which, if executed, will return the Spread.
   * @returns {String}
   */
  toSource: function() {
    return new String();
  },
  
  /*
   * Resolves the object specifier, creating an array of object references.
   * @returns {Spread}
   */
  getElements: function() {
    return new Spread();
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
