/*
 * A layer in a PSD image or PDF file.
 */
var GraphicLayer = {
  /*
   * The name of the GraphicLayer.
   * @type {String}
   */
  name: undefined,
  
  /*
   * Returns the visibility setting set for the layer before the graphic file was imported. Note: Must occur in the script before overriding the visibility state with a current visibility statement.
   * @type {Boolean}
   */
  originalVisibility: undefined,
  
  /*
   * If true, the layer is a separator layer.
   * @type {Boolean}
   */
  separatorLayer: undefined,
  
  /*
   * If true, the layer is an adjustment layer. Note: Must occur in the script before overriding the visibility state of the layer with a current visibility statement.
   * @type {Boolean}
   */
  adjustmentLayer: undefined,
  
  /*
   * If true, layer effects have been applied to the layer. Note: Must occur in the script before overriding the visibility state of the layer with a current visibility statement.
   * @type {Boolean}
   */
  fxLayer: undefined,
  
  /*
   * If true, the GraphicLayer is locked.
   * @type {Boolean}
   */
  locked: undefined,
  
  /*
   * If true, the layer is a section divider layer.
   * @type {Boolean}
   */
  sectionDividerLayer: undefined,
  
  /*
   * If true, the layer has a view state.
   * @type {Boolean}
   */
  hasViewState: undefined,
  
  /*
   * If true, the view state is on.
   * @type {Boolean}
   */
  viewState: undefined,
  
  /*
   * If true, the layer has an export state.
   * @type {Boolean}
   */
  hasExportState: undefined,
  
  /*
   * If true, the export state is on.
   * @type {Boolean}
   */
  exportState: undefined,
  
  /*
   * If true, the layer has a print state.
   * @type {Boolean}
   */
  hasPrintState: undefined,
  
  /*
   * If true, the print state is on.
   * @type {Boolean}
   */
  printState: undefined,
  
  /*
   * The unique ID of the GraphicLayer.
   * @type {Number}
   */
  id: undefined,
  
  /*
   * Returns true if the object specifier resolves to valid objects.
   * @type {Boolean}
   */
  isValid: undefined,
  
  /*
   * The parent of the GraphicLayer (a GraphicLayerOption or GraphicLayer).
   * @type {Mixed}
   */
  parent: undefined,
  
  /*
   * The index of the GraphicLayer within its containing object.
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
   * A collection of graphic layers.
   * @type {GraphicLayers}
   */
  graphicLayers: undefined,
  
  /*
   * If true, the layer is visible in the document.
   * @type {Boolean}
   */
  currentVisibility: undefined,
  
  /*
   * A property that allows setting of several properties at the same time.
   * @type {Object}
   */
  properties: undefined,
  
  /*
   * Generates a string which, if executed, will return the GraphicLayer.
   * @returns {String}
   */
  toSource: function() {
    return new String();
  },
  
  /*
   * Resolves the object specifier, creating an array of object references.
   * @returns {GraphicLayer}
   */
  getElements: function() {
    return new GraphicLayer();
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
