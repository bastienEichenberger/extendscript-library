/*
 * Represents the place gun.
 */
var PlaceGun = {
  /*
   * Whether the place gun is currently loaded with content for placing.
   * @type {Boolean}
   */
  loaded: undefined,
  
  /*
   * Returns true if the object specifier resolves to valid objects.
   * @type {Boolean}
   */
  isValid: undefined,
  
  /*
   * The parent of the PlaceGun (a Document).
   * @type {Document}
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
   * The page items collection, which can be used to process all page items in a container (such as a document, page, or group), regardless of type.
   * @type {PageItems}
   */
  pageItems: undefined,
  
  /*
   * A collection of text frames.
   * @type {TextFrames}
   */
  textFrames: undefined,
  
  /*
   * A collection of rectangles.
   * @type {Rectangles}
   */
  rectangles: undefined,
  
  /*
   * The spline items collection.
   * @type {SplineItems}
   */
  splineItems: undefined,
  
  /*
   * A collection of ellipses.
   * @type {Ovals}
   */
  ovals: undefined,
  
  /*
   * A collection of graphic lines.
   * @type {GraphicLines}
   */
  graphicLines: undefined,
  
  /*
   * A collection of polygons.
   * @type {Polygons}
   */
  polygons: undefined,
  
  /*
   * A collection of groups.
   * @type {Groups}
   */
  groups: undefined,
  
  /*
   * A collection of buttons.
   * @type {Buttons}
   */
  buttons: undefined,
  
  /*
   * A collection of form fields.
   * @type {FormFields}
   */
  formFields: undefined,
  
  /*
   * A collection of multi-state objects.
   * @type {MultiStateObjects}
   */
  multiStateObjects: undefined,
  
  /*
   * EPSTexts
   * @type {EPSTexts}
   */
  epstexts: undefined,
  
  /*
   * A collection of bitmap images in any bitmap file format (including TIFF, JPEG, or GIF).
   * @type {Images}
   */
  images: undefined,
  
  /*
   * A collection of imported graphics in any graphic file format (vector, metafile, or bitmap).
   * @type {Graphics}
   */
  graphics: undefined,
  
  /*
   * A collection of EPS files.
   * @type {EPSs}
   */
  epss: undefined,
  
  /*
   * A collection of WMF graphics.
   * @type {WMFs}
   */
  wmfs: undefined,
  
  /*
   * A collection of PICT graphics.
   * @type {PICTs}
   */
  picts: undefined,
  
  /*
   * A collection of PDF files.
   * @type {PDFs}
   */
  pdfs: undefined,
  
  /*
   * Imported InDesign pages.
   * @type {ImportedPages}
   */
  importedPages: undefined,
  
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
   * A collection of IDML snippets.
   * @type {Snippets}
   */
  snippets: undefined,
  
  /*
   * A property that allows setting of several properties at the same time.
   * @type {Object}
   */
  properties: undefined,
  
  /*
   * Delete the contents of the place gun.
   */
  abortPlaceGun: function() {
  },
  
  /*
   * Rotate the contents of the place gun.
 *
   * @param {RotationDirection} [direction] Which direction to rotate the contents 
   */
  rotate: function(direction) {
  },
  
  /*
   * Load the place gun with one or more files.
 *
   * @param {Mixed} fileName One or more files to place. Can accept: File or Array of Files.
   * @param {Boolean} [showingOptions] Whether to display the import options dialog 
   * @param {Object} [withProperties] Initial values for properties of the placed object(s) 
   */
  loadPlaceGun: function(fileName, showingOptions, withProperties) {
  },
  
  /*
   * Generates a string which, if executed, will return the PlaceGun.
   * @returns {String}
   */
  toSource: function() {
    return new String();
  },
  
  /*
   * Resolves the object specifier, creating an array of object references.
   * @returns {PlaceGun}
   */
  getElements: function() {
    return new PlaceGun();
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
