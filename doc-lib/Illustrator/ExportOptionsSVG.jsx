/*
 * Options which may be supplied when exporting a document as an SVG file.
 */
var ExportOptionsSVG = {
  /*
   * The version of DTD that the exported file should be conforming to.
   * @type {SVGDTDVersion}
   */
  DTD: undefined,
  
  /*
   * The type of font that should be included in the exported file.
   * @type {SVGFontType}
   */
  fontType: undefined,
  
  /*
   * What font glyphs should be included in the exported file.
   * @type {SVGFontSubsetting}
   */
  fontSubsetting: undefined,
  
  /*
   * Should the raster images in the exported file be included.
   * @type {Boolean}
   */
  embedRasterImages: undefined,
  
  /*
   * Decimal precision for element coordinate values.
   * @type {Int32}
   */
  coordinatePrecision: undefined,
  
  /*
   * How should the text in the document be encoded.
   * @type {SVGDocumentEncoding}
   */
  documentEncoding: undefined,
  
  /*
   * How should the CSS properties of the document be included in the document.
   * @type {SVGCSSPropertyLocation}
   */
  cssProperties: undefined,
  
  /*
   * Should the exported file be compressed.
   * @type {Boolean}
   */
  compressed: undefined,
  
  /*
   * undefined
   * @type {Boolean}
   */
  optimizeForSVGViewer: undefined,
  
  /*
   * undefined
   * @type {Boolean}
   */
  includeVariablesAndDatasets: undefined,
  
  /*
   * undefined
   * @type {Boolean}
   */
  includeFileInfo: undefined,
  
  /*
   * undefined
   * @type {Boolean}
   */
  includeUnusedStyles: undefined,
  
  /*
   * Preserve slice data in exported document.
   * @type {Boolean}
   */
  slices: undefined,
  
  /*
   * Preserve Illustrator editing capabilities when exporting the document.
   * @type {Boolean}
   */
  preserveEditability: undefined,
  
  /*
   * Is SVG auto kerning allowed?
   * @type {Boolean}
   */
  sVGAutoKerning: undefined,
  
  /*
   * Is SVG text-on-path construct allowed?
   * @type {Boolean}
   */
  sVGTextOnPath: undefined,
  
  /*
   * All the artboards or range of the artboards will be saved.
   * @type {Boolean}
   */
  saveMultipleArtboards: undefined,
  
  /*
   * If SaveMultipleArtboards is true,this will be considered for multi-asset extraction which specifies artboard range.Empty string will extracts all the artboards.Default is empty string.
   * @type {String}
   */
  artboardRange: undefined,
  
};
