/*
 * Print booklet preferences.
 */
var PrintBookletPrintPreference = {
  /*
   * Available printers.
   * @type {String}
   */
  printerList: undefined,
  
  /*
   * Available PPDs.
   * @type {String}
   */
  ppdList: undefined,
  
  /*
   * A list of the available paper sizes.
   * @type {String}
   */
  paperSizeList: undefined,
  
  /*
   * Lists the ink screenings available in the PPD. Note: Valid only when color output is separations or in rip separations.
   * @type {String}
   */
  screeningList: undefined,
  
  /*
   * Returns true if the object specifier resolves to valid objects.
   * @type {Boolean}
   */
  isValid: undefined,
  
  /*
   * The parent of the PrintBookletPrintPreference (a Document).
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
   * The current printer. Can return: Printer enumerator or String.
   * @type {Mixed}
   */
  printer: undefined,
  
  /*
   * The PPD, specified as a PPD name or an enumeration. Can return: PPDValues enumerator or String.
   * @type {Mixed}
   */
  ppd: undefined,
  
  /*
   * The PostScript file to print to. Note: Valid only when the current printer is defined as postscript file.
   * @type {File}
   */
  printFile: undefined,
  
  /*
   * The number of copies to print. Note: Not valid when printer is PostScript File.
   * @type {Number}
   */
  copies: undefined,
  
  /*
   * If true, collate printed copies.
   * @type {Boolean}
   */
  collating: undefined,
  
  /*
   * If true, prints pages in reverse order.
   * @type {Boolean}
   */
  reverseOrder: undefined,
  
  /*
   * If true, prints non-printing objects. Note: Valid only when trapping is off.
   * @type {Boolean}
   */
  printNonprinting: undefined,
  
  /*
   * If true, prints blank pages. Note: Valid only when trapping is off.
   * @type {Boolean}
   */
  printBlankPages: undefined,
  
  /*
   * If true, prints visible guides and baseline grids. Note: Valid only when trapping is off.
   * @type {Boolean}
   */
  printGuidesGrids: undefined,
  
  /*
   * The paper size, specified as either a string or an enumeration. For information on paper size names, see paper size list. Can return: PaperSizes enumerator or String.
   * @type {Mixed}
   */
  paperSize: undefined,
  
  /*
   * The paper height. Note: Valid only when paper size is custom or scale mode is scale width height. Can return: PaperSize enumerator or Unit.
   * @type {Mixed}
   */
  paperHeight: undefined,
  
  /*
   * The paper width. Note: Valid only when paper size is custom or scale mode is scale width height. Can return: PaperSize enumerator or Unit.
   * @type {Mixed}
   */
  paperWidth: undefined,
  
  /*
   * The amount of space to offset the page from the left edge of the imageable area.
   * @type {Mixed}
   */
  paperOffset: undefined,
  
  /*
   * The space between document pages on the printing medium.
   * @type {Mixed}
   */
  paperGap: undefined,
  
  /*
   * If true, uses transverse orientation.
   * @type {Boolean}
   */
  paperTransverse: undefined,
  
  /*
   * The orientation of the printed page.
   * @type {PrintPageOrientation}
   */
  printPageOrientation: undefined,
  
  /*
   * The position of the page on the printing medium. Note: Valid only when tile is false.
   * @type {PagePositions}
   */
  pagePosition: undefined,
  
  /*
   * The policy for scaling the page. Note: Valid only when printing from Layout view.
   * @type {ScaleModes}
   */
  scaleMode: undefined,
  
  /*
   * The amount (as a percentage)  that the page width is scaled during printing. (Range: 0 to 1000) Note: Valid only when scale mode is scale width height.
   * @type {Number}
   */
  scaleWidth: undefined,
  
  /*
   * The amount (as a percentage) that the page height is scaled during printing. (Range: 0 to 1000) Note: Valid only when scale mode is scale width height.
   * @type {Number}
   */
  scaleHeight: undefined,
  
  /*
   * If true, constrains the proportions of the scaling; uses the most recent value for either scale width or scale height to define both values. Note: Valid only when scale mode is scale width height.
   * @type {Boolean}
   */
  scaleProportional: undefined,
  
  /*
   * The layers to print.
   * @type {PrintLayerOptions}
   */
  printLayers: undefined,
  
  /*
   * If true, prints all printer marks. If false, prints specified printer marks.
   * @type {Boolean}
   */
  allPrinterMarks: undefined,
  
  /*
   * Prints crop marks that define where the page should be trimmed.
   * @type {Boolean}
   */
  cropMarks: undefined,
  
  /*
   * If true, print bleed marks.
   * @type {Boolean}
   */
  bleedMarks: undefined,
  
  /*
   * If true, prints small targets outside the page area for aligning color separations.
   * @type {Boolean}
   */
  registrationMarks: undefined,
  
  /*
   * If true, add small squares of color representing the CMYK inks and tints of gray in 10% increments.
   * @type {Boolean}
   */
  colorBars: undefined,
  
  /*
   * If true, prints the filename, page number, current date and time, and color separation name.
   * @type {Boolean}
   */
  pageInformationMarks: undefined,
  
  /*
   * The type of printer marks, either an enum value or the name of a custom marks file. Can return: MarkTypes enumerator or String.
   * @type {Mixed}
   */
  markType: undefined,
  
  /*
   * The stroke weight (in points) for printer marks.
   * @type {MarkLineWeight}
   */
  markLineWeight: undefined,
  
  /*
   * The distance to offset the page marks from the edge of the page.
   * @type {Mixed}
   */
  markOffset: undefined,
  
  /*
   * If true, uses the bleed area set for the document.
   * @type {Boolean}
   */
  useDocumentBleedToPrint: undefined,
  
  /*
   * The height of the bleed area at the top of the page. Note: Valid only when use document bleed to print is true.
   * @type {Mixed}
   */
  bleedTop: undefined,
  
  /*
   * The height of the bleed area at the bottom of the page. Note: Valid only when use document bleed to print is true.
   * @type {Mixed}
   */
  bleedBottom: undefined,
  
  /*
   * The width of the bleed area at the inside of the page. Note: Valid only when use document bleed to print is true.
   * @type {Mixed}
   */
  bleedInside: undefined,
  
  /*
   * The width of the bleed area at the outside of the page. Note: Valid only when use document bleed to print is true.
   * @type {Mixed}
   */
  bleedOutside: undefined,
  
  /*
   * If true, forces all bleed area settings to be the same, using the most recent bleed measurement setting. If false, allows bleed top, bleed bottom, bleed inside, and bleed outside to have different measurements.
   * @type {Boolean}
   */
  bleedChain: undefined,
  
  /*
   * The color output mode for composites. Note: Not valid when a device-independent PPD is specified.
   * @type {ColorOutputModes}
   */
  colorOutput: undefined,
  
  /*
   * If true, prints all text as black unless text has the color None or Paper or a color value that equals white. If false, prints colored text, such as blue hyperlinks, in halftone patterns. Note: Valid only when trapping is off.
   * @type {Boolean}
   */
  textAsBlack: undefined,
  
  /*
   * The type of trapping.
   * @type {Trapping}
   */
  trapping: undefined,
  
  /*
   * The direction in which to flip the printed image.
   * @type {Flip}
   */
  flip: undefined,
  
  /*
   * If true, prints the document as a negative.
   * @type {Boolean}
   */
  negative: undefined,
  
  /*
   * The ink screening settings for composite gray output in PostScript or PDF format. . Can return: Screeening enumerator or String.
   * @type {Mixed}
   */
  screening: undefined,
  
  /*
   * The screen angle to use when printing composites. (Range: 0 to 360) Note: Valid only for PostScript or PDF files that use custom screening.
   * @type {Number}
   */
  compositeAngle: undefined,
  
  /*
   * The screen frequency to use when printing composites. (Range: 1 to 500) Note: Valid only for PostScript or PDF files that use custom screening.
   * @type {Number}
   */
  compositeFrequency: undefined,
  
  /*
   * If true, simulates the effects of overprinting spot inks with different neutral density values by converting spot colors to process colors for printing. Note: Not valid when the color output mode is defined to leave color profiles unchanged.
   * @type {Boolean}
   */
  simulateOverprint: undefined,
  
  /*
   * If true, prints the cyan ink. Note: Valid only when trapping is off.
   * @type {Boolean}
   */
  printCyan: undefined,
  
  /*
   * The angle override for cyan ink. (Range: 0 to 360)
   * @type {Number}
   */
  cyanAngle: undefined,
  
  /*
   * The frequency override for cyan ink. (Range: 1 to 500)
   * @type {Number}
   */
  cyanFrequency: undefined,
  
  /*
   * If true, prints the magenta ink. Note: Valid only when trapping is off.
   * @type {Boolean}
   */
  printMagenta: undefined,
  
  /*
   * The angle override for magenta ink. (Range: 0 to 360)
   * @type {Number}
   */
  magentaAngle: undefined,
  
  /*
   * The frequency override for magenta ink. (Range: 1 to 500)
   * @type {Number}
   */
  magentaFrequency: undefined,
  
  /*
   * If true, prints the yellow ink. Note: Valid only when trapping is off.
   * @type {Boolean}
   */
  printYellow: undefined,
  
  /*
   * The angle override for yellow ink. (Range: 0 to 360)
   * @type {Number}
   */
  yellowAngle: undefined,
  
  /*
   * The frequency override for yellow ink. (Range: 1 to 500)
   * @type {Number}
   */
  yellowFrequency: undefined,
  
  /*
   * If true, prints the black ink. Note: Valid only when trapping is off.
   * @type {Boolean}
   */
  printBlack: undefined,
  
  /*
   * The angle override for black ink. (Range: 0 to 360)
   * @type {Number}
   */
  blackAngle: undefined,
  
  /*
   * The frequency override for black ink. (Range: 1 to 500)
   * @type {Number}
   */
  blackFrequency: undefined,
  
  /*
   * The image data sent to the printer or file.
   * @type {ImageDataTypes}
   */
  sendImageData: undefined,
  
  /*
   * Controls how fonts are downloaded to the printer.
   * @type {FontDownloading}
   */
  fontDownloading: undefined,
  
  /*
   * If true, downloads all fonts listed in the selected PPD. Valid only when font downloading is complete or subset.
   * @type {Boolean}
   */
  downloadPPDFonts: undefined,
  
  /*
   * The PostScript level of the printer.
   * @type {PostScriptLevels}
   */
  postscriptLevel: undefined,
  
  /*
   * The format in which to send image data to the printer.
   * @type {DataFormat}
   */
  dataFormat: undefined,
  
  /*
   * The source of the color management system. Note: Valid only when use color management is true.
   * @type {SourceSpaces}
   */
  sourceSpace: undefined,
  
  /*
   * The color profile. Can return: Profile enumerator or String.
   * @type {Mixed}
   */
  profile: undefined,
  
  /*
   * The color-rendering dictionary (CRD), specified as a CRD name or an enumeration value. Note: Valid only when use color management is true. Can return: ColorRenderingDictionary enumerator or String.
   * @type {Mixed}
   */
  crd: undefined,
  
  /*
   * The rendering intent. Note: Valid only when use color management is true.
   * @type {RenderingIntent}
   */
  intent: undefined,
  
  /*
   * If true, preserves uncalibrated color numbers.
   * @type {Boolean}
   */
  preserveColorNumbers: undefined,
  
  /*
   * If true, prints graphics that are either OPI comments stored in imported EPS files or linked using OPI comments. For information on linking files using OPI comments, see omit EPS, omit PDF, or omit bitmaps.
   * @type {Boolean}
   */
  opiImageReplacement: undefined,
  
  /*
   * If true, replaces EPS images with OPI links.
   * @type {Boolean}
   */
  omitEPS: undefined,
  
  /*
   * If true, replaces PDF images with OPI links.
   * @type {Boolean}
   */
  omitPDF: undefined,
  
  /*
   * If true, replaces bitmap images with OPI links.
   * @type {Boolean}
   */
  omitBitmaps: undefined,
  
  /*
   * The name of the transparency flattener preset.
   * @type {String}
   */
  flattenerPresetName: undefined,
  
  /*
   * If true, ignores flattener spread overrides.
   * @type {Boolean}
   */
  ignoreSpreadOverrides: undefined,
  
  /*
   * If true, uses bitmap printing.
   * @type {Boolean}
   */
  bitmapPrinting: undefined,
  
  /*
   * The resolution for bitmap printing. (Range: 72 to 1200) Note: Valid when bitmap printing is true.
   * @type {Number}
   */
  bitmapResolution: undefined,
  
  /*
   * The current printer preset type. Can return: PrinterPresetTypes enumerator or PrinterPreset.
   * @type {Mixed}
   */
  activePrinterPreset: undefined,
  
  /*
   * A property that allows setting of several properties at the same time.
   * @type {Object}
   */
  properties: undefined,
  
  /*
   * Generates a string which, if executed, will return the PrintBookletPrintPreference.
   * @returns {String}
   */
  toSource: function() {
    return new String();
  },
  
  /*
   * Resolves the object specifier, creating an array of object references.
   * @returns {PrintBookletPrintPreference}
   */
  getElements: function() {
    return new PrintBookletPrintPreference();
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
