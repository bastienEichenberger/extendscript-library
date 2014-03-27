/*
 * Document preferences.
 */
var DocumentPreference = {
  /*
   * Returns true if the object specifier resolves to valid objects.
   * @type {Boolean}
   */
  isValid: undefined,
  
  /*
   * The parent of the DocumentPreference (a Application or Document).
   * @type {Mixed}
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
   * The height of the page.
   * @type {Mixed}
   */
  pageHeight: undefined,
  
  /*
   * The width of the page.
   * @type {Mixed}
   */
  pageWidth: undefined,
  
  /*
   * The page orientation.
   * @type {PageOrientation}
   */
  pageOrientation: undefined,
  
  /*
   * The color of the column guides, specified either as an array of three doubles, each in the range 0 to 255 and representing R, G, and B values,, or as a UI color. Can return: Array of 3 Reals (0 - 255) or UIColors enumerator.
   * @type {Mixed}
   */
  columnGuideColor: undefined,
  
  /*
   * The color of the margin guides, specified either as an array of three doubles, each in the range 0 to 255, representing R, G, and B values, or as a UI color. Can return: Array of 3 Reals (0 - 255) or UIColors enumerator.
   * @type {Mixed}
   */
  marginGuideColor: undefined,
  
  /*
   * If true, the document A-master has primary text frames when a new document is created.
   * @type {Boolean}
   */
  createPrimaryTextFrame: undefined,
  
  /*
   * The number of pages in the document. (Range: 1 to 9999)
   * @type {Number}
   */
  pagesPerDocument: undefined,
  
  /*
   * If true, the document has facing pages.
   * @type {Boolean}
   */
  facingPages: undefined,
  
  /*
   * The amount to offset the top document bleed.
   * @type {Mixed}
   */
  documentBleedTopOffset: undefined,
  
  /*
   * The amount to offset the bottom document bleed. Note: To set the bleed bottom offset, document bleed uniform size must be false.
   * @type {Mixed}
   */
  documentBleedBottomOffset: undefined,
  
  /*
   * The amount to offset the inside or left document bleed. Note: To set the bleed inside or left offset, document bleed uniform size must be false.
   * @type {Mixed}
   */
  documentBleedInsideOrLeftOffset: undefined,
  
  /*
   * The amount to offset the outside or right document bleed. Note: To set the bleed outside or right offset, document bleed uniform size must be false.
   * @type {Mixed}
   */
  documentBleedOutsideOrRightOffset: undefined,
  
  /*
   * If true, uses the document bleed top offset value for bleed offset measurements on all sides of the document. The default setting is true.
   * @type {Boolean}
   */
  documentBleedUniformSize: undefined,
  
  /*
   * The amount to offset the top slug.
   * @type {Mixed}
   */
  slugTopOffset: undefined,
  
  /*
   * The amount to offset the bottom slug. Note: To set the slug bottom offset, document slug uniform size must be false.
   * @type {Mixed}
   */
  slugBottomOffset: undefined,
  
  /*
   * The amount to offset the inside or left slug. Note: To set the slug inside or left offset, document slug uniform size must be false.
   * @type {Mixed}
   */
  slugInsideOrLeftOffset: undefined,
  
  /*
   * The amount to offset the outside or right slug. Note: To set the slug right or outside offset, document slug uniform size must be false.
   * @type {Mixed}
   */
  slugRightOrOutsideOffset: undefined,
  
  /*
   * If true, uses the slug top offset value for slug measurements on all sides of the document. The default value is false.
   * @type {Boolean}
   */
  documentSlugUniformSize: undefined,
  
  /*
   * If true, preserves the layout of spreads that contained more than two pages when allow page shuffle was turned on. If false, changes multi-page spreads to two-page spreads if the spreads were created or changed since allow page shuffle was turned on.
   * @type {Boolean}
   */
  preserveLayoutWhenShuffling: undefined,
  
  /*
   * If true, guarantees that when pages are added to a spread it will contain a maximum of two pages. If false, allows pages to be added or moved into existing spreads. For override information, see preserve layout when shuffling.
   * @type {Boolean}
   */
  allowPageShuffle: undefined,
  
  /*
   * If true, overprints black when saving the document.
   * @type {Boolean}
   */
  overprintBlack: undefined,
  
  /*
   * If true, locks column guides.
   * @type {Boolean}
   */
  columnGuideLocked: undefined,
  
  /*
   * The starting page number for a document. This is the same as the starting page number for the first section of a document. Default value is 1.
   * @type {Number}
   */
  startPageNumber: undefined,
  
  /*
   * The intent for a document.
   * @type {DocumentIntentOptions}
   */
  intent: undefined,
  
  /*
   * The placement of the page binding.
   * @type {PageBindingOptions}
   */
  pageBinding: undefined,
  
  /*
   * The direction of text in the column.
   * @type {HorizontalOrVertical}
   */
  columnDirection: undefined,
  
  /*
   * The size of the page.
   * @type {String}
   */
  pageSize: undefined,
  
  /*
   * If true, causes UI-based snippet import to use original location for page items.
   * @type {Boolean}
   */
  snippetImportUsesOriginalLocation: undefined,
  
  /*
   * A property that allows setting of several properties at the same time.
   * @type {Object}
   */
  properties: undefined,
  
  /*
   * Generates a string which, if executed, will return the DocumentPreference.
   * @returns {String}
   */
  toSource: function() {
    return new String();
  },
  
  /*
   * Resolves the object specifier, creating an array of object references.
   * @returns {DocumentPreference}
   */
  getElements: function() {
    return new DocumentPreference();
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
