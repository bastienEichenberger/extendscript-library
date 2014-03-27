/*
 * General application preferences.
 */
var GeneralPreference = {
  /*
   * The value of the system reported main monitor resolution
   * @type {Number}
   */
  mainMonitorPpi: undefined,
  
  /*
   * Returns true if the object specifier resolves to valid objects.
   * @type {Boolean}
   */
  isValid: undefined,
  
  /*
   * The parent of the GeneralPreference (a Application).
   * @type {Application}
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
   * Tool tip behavior.
   * @type {ToolTipOptions}
   */
  toolTips: undefined,
  
  /*
   * Controls whether or not to greek vector graphics when dragging at high quality.
   * @type {Boolean}
   */
  greekVectorGraphicsOnDrag: undefined,
  
  /*
   * Show the conveyor on content collector or content placer tool activation
   * @type {Boolean}
   */
  showConveyor: undefined,
  
  /*
   * Enable the creation of links on content place
   * @type {Boolean}
   */
  createLinksOnContentPlace: undefined,
  
  /*
   * Enable the mapping of styles on content place
   * @type {Boolean}
   */
  mapStylesOnContentPlace: undefined,
  
  /*
   * Enable the use of a custom monitor resolution in pixels per inch as opposed to querying the system settings
   * @type {Boolean}
   */
  useCustomMonitorResolution: undefined,
  
  /*
   * When using a custom monitor resolution, what is the value of that resolution in pixels per inch
   * @type {Number}
   */
  customMonitorPpi: undefined,
  
  /*
   * Specify the Application User Interface brightness preference (from 0.0 to 1.0). To use color theme brightness preset values, specify 0.0 for Dark, 0.33 for Medium Dark, 0.67 for Medium Bright, and 1.0 for Bright. Any value between 0.0 and 1.0 can also be used.
   * @type {Number}
   */
  uiBrightnessPreference: undefined,
  
  /*
   * Specify the Pasteboard color preference (0 or 1). Specify 0 to set preference to Default White, and 1 to set preference to Match with Theme Color.
   * @type {Number}
   */
  pasteboardColorPreference: undefined,
  
  /*
   * Controls whether or not the content grabber adornment is shown.
   * @type {Boolean}
   */
  showContentGrabber: undefined,
  
  /*
   * Controls whether or not the live corners grabber adornment is shown.
   * @type {Boolean}
   */
  showLiveCorners: undefined,
  
  /*
   * Controls whether or not to show the master page overlay when a page is selected using the Page Tool.
   * @type {Boolean}
   */
  showMasterPageOverlay: undefined,
  
  /*
   * Controls whether page items move when a page is repositioned from the UI. The option/alt key temporarily reverses this property
   * @type {Boolean}
   */
  objectsMoveWithPage: undefined,
  
  /*
   * Controls whether or not you can select and interact with a locked item. When this is off, only position is locked.
   * @type {Boolean}
   */
  preventSelectingLockedItems: undefined,
  
  /*
   * Controls whether or not multi-touch gestures are enabled.
   * @type {Boolean}
   */
  enableMultiTouchGestures: undefined,
  
  /*
   * Controls the appearance of the Tools panel.
   * @type {ToolsPanelOptions}
   */
  toolsPanel: undefined,
  
  /*
   * If true, panel drawers close automatically.
   * @type {Boolean}
   */
  autoCollapseIconPanels: undefined,
  
  /*
   * Controls whether or not to show thumbnails of imported files in the Place icon.
   * @type {Boolean}
   */
  placeCursorUsesThumbnails: undefined,
  
  /*
   * If true, vertical reveal strips appear when palette UI is hidden.
   * @type {Boolean}
   */
  autoShowHiddenPanels: undefined,
  
  /*
   * If true, application lives in a frame.
   * @type {Boolean}
   */
  useApplicationFrame: undefined,
  
  /*
   * If true, application bar is shown.
   * @type {Boolean}
   */
  applicationBarShown: undefined,
  
  /*
   * If true, documents open as tabs.
   * @type {Boolean}
   */
  openDocumentsAsTabs: undefined,
  
  /*
   * If true, floating windows can be docked by user as tabs.
   * @type {Boolean}
   */
  enableFloatingWindowDocking: undefined,
  
  /*
   * Number of items to show in the Open Recent menu list. Range: 0 to 30
   * @type {Number}
   */
  openRecentLength: undefined,
  
  /*
   * Controls whether or not to dynamically display transformation information as part of the cursor while manipulating page items.
   * @type {Boolean}
   */
  showTransformationValues: undefined,
  
  /*
   * Controls whether or not the anchor object adornment is shown.
   * @type {Boolean}
   */
  showAnchorObjectAdornment: undefined,
  
  /*
   * Controls whether or not to highlight object under selection tool.
   * @type {Boolean}
   */
  highlightObjectUnderSelectionTool: undefined,
  
  /*
   * The pages to create preview images for. Note: Valid when include preview is true.
   * @type {PreviewPagesOptions}
   */
  previewPages: undefined,
  
  /*
   * The location in which to store temporary files.
   * @type {File}
   */
  temporaryFolder: undefined,
  
  /*
   * The page numbering method.
   * @type {PageNumberingOptions}
   */
  pageNumbering: undefined,
  
  /*
   * The threshold at which to trigger font subsetting based on the number of glyphs the font contains.
   * @type {Number}
   */
  completeFontDownloadGlyphLimit: undefined,
  
  /*
   * If true, includes a preview in saved documents.
   * @type {Boolean}
   */
  includePreview: undefined,
  
  /*
   * The preview size. Note: Valid when include preview is true.
   * @type {PreviewSizeOptions}
   */
  previewSize: undefined,
  
  /*
   * A property that allows setting of several properties at the same time.
   * @type {Object}
   */
  properties: undefined,
  
  /*
   * Generates a string which, if executed, will return the GeneralPreference.
   * @returns {String}
   */
  toSource: function() {
    return new String();
  },
  
  /*
   * Resolves the object specifier, creating an array of object references.
   * @returns {GeneralPreference}
   */
  getElements: function() {
    return new GeneralPreference();
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
