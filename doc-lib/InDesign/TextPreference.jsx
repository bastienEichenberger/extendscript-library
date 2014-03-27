/*
 * Text preferences.
 */
var TextPreference = {
  /*
   * Returns true if the object specifier resolves to valid objects.
   * @type {Boolean}
   */
  isValid: undefined,
  
  /*
   * The parent of the TextPreference (a Application or Document).
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
   * If true, converts straight quotes to typographic quotes.
   * @type {Boolean}
   */
  typographersQuotes: undefined,
  
  /*
   * If true, highlights hyphenation and justification rule violations in the text.
   * @type {Boolean}
   */
  highlightHjViolations: undefined,
  
  /*
   * If true, highlights paragraphs that violate keep options.
   * @type {Boolean}
   */
  highlightKeeps: undefined,
  
  /*
   * If true, highlights substituted glyphs.
   * @type {Boolean}
   */
  highlightSubstitutedGlyphs: undefined,
  
  /*
   * If true, highlights custom kerned or tracked characters.
   * @type {Boolean}
   */
  highlightCustomSpacing: undefined,
  
  /*
   * If true, highlights missing fonts.
   * @type {Boolean}
   */
  highlightSubstitutedFonts: undefined,
  
  /*
   * If true, automatically selects the correct optical size.
   * @type {Boolean}
   */
  useOpticalSize: undefined,
  
  /*
   * If true, applies the leading changes made to a text range to the entire paragraph. If false, applies leading changes only to the text range.
   * @type {Boolean}
   */
  useParagraphLeading: undefined,
  
  /*
   * The size of superscript characters, specified as a percentage of the font size. (Range: 0 to 200)
   * @type {Number}
   */
  superscriptSize: undefined,
  
  /*
   * The position of superscript characters, specified as a percentage of the regular leading. (Range: -500 to 500)
   * @type {Number}
   */
  superscriptPosition: undefined,
  
  /*
   * The size of subscript characters, specified as a percentage of the font size. (Range: 0 to 200)
   * @type {Number}
   */
  subscriptSize: undefined,
  
  /*
   * The position of subscript characters, specified as a percentage of the regular leading. (Range: -500 to 500)
   * @type {Number}
   */
  subscriptPosition: undefined,
  
  /*
   * The size of text formatted as small caps, specified as a percentage of the font size. (Range: 1 to 200)
   * @type {Number}
   */
  smallCap: undefined,
  
  /*
   * The amount that leading increases each time the user presses the option/alt-up arrow keys or decreases each time the user presses the option/alt-down arrow keys. (Range: .001 to 100)
   * @type {Mixed}
   */
  leadingKeyIncrement: undefined,
  
  /*
   * The amount that the baseline shift increases each time the user presses the option/alt-shift-up arrow keys or decreases each time the user presses the option/alt-shift-down arrow keys. (Range: .001 to 100)
   * @type {Mixed}
   */
  baselineShiftKeyIncrement: undefined,
  
  /*
   * The amount the kerning value per 1000 ems increases each time the user presses of the option/alt-right arrow keys or decreases each time the user presses the option/alt-left arrow keys. (Range: 1 to 100)
   * @type {Number}
   */
  kerningKeyIncrement: undefined,
  
  /*
   * If true, shows hidden characters.
   * @type {Boolean}
   */
  showInvisibles: undefined,
  
  /*
   * If true, justifies text around text wrap objects.
   * @type {Boolean}
   */
  justifyTextWraps: undefined,
  
  /*
   * If true, moves wrapped text to the next available leading increment below the text wrap objects (skip by leading).
   * @type {Boolean}
   */
  abutTextToTextWrap: undefined,
  
  /*
   * If true, text wrap does not affect text on layers above the layer that contains the text wrap object. If false, text wrap affects text on all visible layers.
   * @type {Boolean}
   */
  zOrderTextWrap: undefined,
  
  /*
   * If true, links placed text files and spreadsheet files. If false, embeds the files.
   * @type {Boolean}
   */
  linkTextFilesWhenImporting: undefined,
  
  /*
   * If true, uses on-screen highlighting to identify kinsoku.
   * @type {Boolean}
   */
  highlightKinsoku: undefined,
  
  /*
   * If true, Japanese composer treats quotes as half width and rotates them in vertical.
   * @type {Boolean}
   */
  quoteCharactersRotatedInVertical: undefined,
  
  /*
   * If true, reverses X and Y scaling on Roman characters in vertical text.
   * @type {Boolean}
   */
  useNewVerticalScaling: undefined,
  
  /*
   * If true, uses the glyph CID to get the mojikumi class of the character.
   * @type {Boolean}
   */
  useCidMojikumi: undefined,
  
  /*
   * If true, highlights character and paragraph styles with colored backgrounds.
   * @type {Boolean}
   */
  enableStylePreviewMode: undefined,
  
  /*
   * If true, enable automatic adding and deleting of pages in response to text reflow.
   * @type {Boolean}
   */
  smartTextReflow: undefined,
  
  /*
   * Specifies where to insert new pages in response to overset text.
   * @type {AddPageOptions}
   */
  addPages: undefined,
  
  /*
   * Restrict the adding of pages during smart text reflow to overridden master text frames.
   * @type {Boolean}
   */
  limitToMasterTextFrames: undefined,
  
  /*
   * Preserve left-hand and right-and pages when facing pages are enabled during smart text reflow.
   * @type {Boolean}
   */
  preserveFacingPageSpreads: undefined,
  
  /*
   * Enable auto-deletion of pages containing empty threaded text frames.
   * @type {Boolean}
   */
  deleteEmptyPages: undefined,
  
  /*
   * A property that allows setting of several properties at the same time.
   * @type {Object}
   */
  properties: undefined,
  
  /*
   * Generates a string which, if executed, will return the TextPreference.
   * @returns {String}
   */
  toSource: function() {
    return new String();
  },
  
  /*
   * Resolves the object specifier, creating an array of object references.
   * @returns {TextPreference}
   */
  getElements: function() {
    return new TextPreference();
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
