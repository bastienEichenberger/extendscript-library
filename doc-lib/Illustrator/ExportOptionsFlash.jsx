/*
 * Options which may be supplied when exporting a document as an Flash &amp;&#35;40;.SWF&#41; file.
 */
var ExportOptionsFlash = {
  /*
   * How should the Flash file be created.
   * @type {FlashExportStyle}
   */
  exportStyle: undefined,
  
  /*
   * Which version of SWF to export.
   * @type {FlashExportVersion}
   */
  exportVersion: undefined,
  
  /*
   * When exporting layers to Flash frames.
   * @type {Number}
   */
  frameRate: undefined,
  
  /*
   * Should the Flash file be set to loop when run.
   * @type {Boolean}
   */
  looping: undefined,
  
  /*
   * Prevent the exported file from being imported by other applications.
   * @type {Boolean}
   */
  readOnly: undefined,
  
  /*
   * How should the arts be clipped during the output.
   * @type {ArtClippingOption}
   */
  artClipping: undefined,
  
  /*
   * How much curve information should be preserved.
   * @type {Int32}
   */
  curveQuality: undefined,
  
  /*
   * How should the images in the exported Flash file be compressed.
   * @type {FlashImageFormat}
   */
  imageFormat: undefined,
  
  /*
   * Level of compression.
   * @type {Int32}
   */
  jpegQuality: undefined,
  
  /*
   * What method to use.
   * @type {FlashJPEGMethod}
   */
  jpegMethod: undefined,
  
  /*
   * What access should the SWF file have - local or network access.
   * @type {FlashPlaybackSecurity}
   */
  playbackAccess: undefined,
  
  /*
   * Pixels per inch.
   * @type {Number}
   */
  resolution: undefined,
  
  /*
   * If a file with the same name already exists, should it be replaced?
   * @type {SaveOptions}
   */
  replacing: undefined,
  
  /*
   * Should all text be converted to outlines.
   * @type {Boolean}
   */
  convertTextToOutlines: undefined,
  
  /*
   * Should the exported file be compressed.
   * @type {Boolean}
   */
  compressed: undefined,
  
  /*
   * The background color.
   * @type {RGBColor}
   */
  backgroundColor: undefined,
  
  /*
   * A list of layers to be included as the static background in all exported Flash frames.
   * @type {Layer}
   */
  backgroundLayers: undefined,
  
  /*
   * The order in which the layers will be exported to Flash frames.
   * @type {LayerOrderType}
   */
  layerOrder: undefined,
  
  /*
   * Controls how the blend art objects are animated when export to Flash frames.
   * @type {BlendAnimationType}
   */
  blendAnimation: undefined,
  
  /*
   * Should the kerning information for text objects be ignored.
   * @type {Boolean}
   */
  ignoreTextKerning: undefined,
  
  /*
   * Should all symbol definitions in the palette be exported to the SWF File.
   * @type {Boolean}
   */
  exportAllSymbols: undefined,
  
  /*
   * Choose whether to preserve artwork appearance or editability (default) during export.
   * @type {Boolean}
   */
  preserveAppearance: undefined,
  
  /*
   * If true, include minimal XMP metadata in the exported file.
   * @type {Boolean}
   */
  includeMetadata: undefined,
  
  /*
   * All the artboards or range of the artboards will be exported.
   * @type {Boolean}
   */
  saveMultipleArtboards: undefined,
  
  /*
   * If SaveMultipleArtboards is true,this will be considered for multi-asset extraction which specifies artboard range.Empty string will extracts all the artboards.Default is empty string.
   * @type {String}
   */
  artboardRange: undefined,
  
};
