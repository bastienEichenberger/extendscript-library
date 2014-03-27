/*
 * A state &amp;&#35;40;states define the display of the field in an exported PDF or SWF&#41;.
 */
var State = {
  /*
   * The unique ID of the State.
   * @type {Number}
   */
  id: undefined,
  
  /*
   * Returns true if the object specifier resolves to valid objects.
   * @type {Boolean}
   */
  isValid: undefined,
  
  /*
   * The parent of the State (a Button, MultiStateObject, CheckBox or RadioButton).
   * @type {Mixed}
   */
  parent: undefined,
  
  /*
   * The index of the State within its containing object.
   * @type {Number}
   */
  index: undefined,
  
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
   * The name of the State.
   * @type {String}
   */
  name: undefined,
  
  /*
   * If true, the state is active in the exported PDF.
   * @type {Boolean}
   */
  active: undefined,
  
  /*
   * If true, the state is enabled in PDF documents.
   * @type {Boolean}
   */
  enabled: undefined,
  
  /*
   * For a button, the type of user action that dictates the object's appearance. For a MultiStateObject, which has no user actions associated with states, this property is a numeric value uniquely identifying the state. Can return: StateTypes enumerator or Long Integer.
   * @type {Mixed}
   */
  statetype: undefined,
  
  /*
   * A property that allows setting of several properties at the same time.
   * @type {Object}
   */
  properties: undefined,
  
  /*
   * Releases this state's appearance as a page item, removing the state from its parent object.
   */
  releaseAsObject: function() {
  },
  
  /*
   * Moves the state to a new position in its parent collection.
 *
   * @param {Number} newPosition the index to move the state to in its parent collection
   */
  move: function(newPosition) {
  },
  
  /*
   * Adds page items to this state.
 *
   * @param {PageItem} pageitems One or more page items to add to this state.
   */
  addItemsToState: function(pageitems) {
  },
  
  /*
   * Deletes the State.
   */
  remove: function() {
  },
  
  /*
   * Generates a string which, if executed, will return the State.
   * @returns {String}
   */
  toSource: function() {
    return new String();
  },
  
  /*
   * Resolves the object specifier, creating an array of object references.
   * @returns {State}
   */
  getElements: function() {
    return new State();
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
