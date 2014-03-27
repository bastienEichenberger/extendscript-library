/*
 * A layer.
 */
var Layer = {
  /*
   * Lists all page items contained by the Layer.
   * @type {PageItem}
   */
  allPageItems: undefined,
  
  /*
   * Lists all graphics contained by the Layer.
   * @type {Graphic}
   */
  allGraphics: undefined,
  
  /*
   * The unique ID of the Layer.
   * @type {Number}
   */
  id: undefined,
  
  /*
   * Returns true if the object specifier resolves to valid objects.
   * @type {Boolean}
   */
  isValid: undefined,
  
  /*
   * The parent of the Layer (a Document).
   * @type {Document}
   */
  parent: undefined,
  
  /*
   * The index of the Layer within its containing object.
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
   * The name of the Layer.
   * @type {String}
   */
  name: undefined,
  
  /*
   * If true, the Layer is visible.
   * @type {Boolean}
   */
  visible: undefined,
  
  /*
   * If true, the Layer is locked.
   * @type {Boolean}
   */
  locked: undefined,
  
  /*
   * The color of the layer, specified either as an array of three doubles, each in the range 0 to 255 and representing R, G, and B values, or as a UI color. Can return: Array of 3 Reals (0 - 255) or UIColors enumerator.
   * @type {Mixed}
   */
  layerColor: undefined,
  
  /*
   * If true, text wrap settings applied to objects on the layer will not affect text on other layers when the layer is hidden.
   * @type {Boolean}
   */
  ignoreWrap: undefined,
  
  /*
   * If true, guides are visible on the layer.
   * @type {Boolean}
   */
  showGuides: undefined,
  
  /*
   * If true, the guide positions on the layer are locked.
   * @type {Boolean}
   */
  lockGuides: undefined,
  
  /*
   * If true, the layer will print.
   * @type {Boolean}
   */
  printable: undefined,
  
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
   * Moves the Layer to the specified location.
 *
   * @param {LocationOptions} to The location relative to the reference object or within the containing object.
   * @param {Layer} [reference] The reference object. Note: Required when the to value specifies before or after. 
   * @returns {Layer}
   */
  move: function(to, reference) {
    return new Layer();
  },
  
  /*
   * Deletes the Layer.
   */
  remove: function() {
  },
  
  /*
   * Duplicates the Layer.
   * @returns {Layer}
   */
  duplicate: function() {
    return new Layer();
  },
  
  /*
   * Merges the layer with other layer(s).
 *
   * @param {Layer} with The layer(s) with which to merge.
   * @returns {Layer}
   */
  merge: function(with) {
    return new Layer();
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
   * Generates a string which, if executed, will return the Layer.
   * @returns {String}
   */
  toSource: function() {
    return new String();
  },
  
  /*
   * Resolves the object specifier, creating an array of object references.
   * @returns {Layer}
   */
  getElements: function() {
    return new Layer();
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
