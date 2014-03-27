/*
 * Pages panel.
 */
var PagesPanel = {
  /*
   * The name of the PagesPanel.
   * @type {String}
   */
  name: undefined,
  
  /*
   * Returns true if the object specifier resolves to valid objects.
   * @type {Boolean}
   */
  isValid: undefined,
  
  /*
   * The parent of the PagesPanel (a Application).
   * @type {Application}
   */
  parent: undefined,
  
  /*
   * The index of the PagesPanel within its containing object.
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
   * View setting for how to arrange the pages in the page section of the panel.
   * @type {PageViewOptions}
   */
  pagesViewSetting: undefined,
  
  /*
   * Page icon size.
   * @type {IconSizes}
   */
  iconSize: undefined,
  
  /*
   * Master page icon size.
   * @type {IconSizes}
   */
  masterIconSize: undefined,
  
  /*
   * If true, master page icons will be arranged vertically around the binding spine. If false, master page icons will be arranged horizontally.
   * @type {Boolean}
   */
  masterVerticalView: undefined,
  
  /*
   * Specifies the behavior of the document and master page areas of the panel when the panel is resized.
   * @type {PanelLayoutResize}
   */
  resizeBehavior: undefined,
  
  /*
   * If true, the pages area of the panel will be drawn above the master pages area.
   * @type {Boolean}
   */
  pagesOnTop: undefined,
  
  /*
   * If true, display thumbnails of the pages in the pages area of the panel.
   * @type {Boolean}
   */
  pagesThumbnails: undefined,
  
  /*
   * If true, display thumbnails of the pages in the master pages area of the panel.
   * @type {Boolean}
   */
  mastersThumbnails: undefined,
  
  /*
   * If true, a transparency icon will display next to spreads with elements having transparency applied.
   * @type {Boolean}
   */
  transparencyIcons: undefined,
  
  /*
   * If true, a page transitions icon will display next to spreads with page transitions applied.
   * @type {Boolean}
   */
  transitionsIcons: undefined,
  
  /*
   * If true, a rotation icon will display next to spreads with non-zero rotation applied.
   * @type {Boolean}
   */
  rotationIcons: undefined,
  
  /*
   * If true, the panel is visible.
   * @type {Boolean}
   */
  visible: undefined,
  
  /*
   * A property that allows setting of several properties at the same time.
   * @type {Object}
   */
  properties: undefined,
  
  /*
   * Generates a string which, if executed, will return the PagesPanel.
   * @returns {String}
   */
  toSource: function() {
    return new String();
  },
  
  /*
   * Resolves the object specifier, creating an array of object references.
   * @returns {PagesPanel}
   */
  getElements: function() {
    return new PagesPanel();
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
