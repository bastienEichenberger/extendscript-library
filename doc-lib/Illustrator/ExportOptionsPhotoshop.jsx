/*
 * Options which may be supplied when exporting a document as a Photoshop file.
 */
var ExportOptionsPhotoshop = {
  /*
   * The color space of the exported file.
   * @type {ImageColorSpace}
   */
  imageColorSpace: undefined,
  
  /*
   * The resolution of the exported file.
   * @type {Number}
   */
  resolution: undefined,
  
  /*
   * Should the resulting image be antialiased.
   * @type {Boolean}
   */
  antiAliasing: undefined,
  
  /*
   * Preserve document layers when exporting.
   * @type {Boolean}
   */
  writeLayers: undefined,
  
  /*
   * Export text objects as editable text layers.
   * @type {Boolean}
   */
  editableText: undefined,
  
  /*
   * Embed an ICC profile when exporting.
   * @type {Boolean}
   */
  embedICCProfile: undefined,
  
  /*
   * Should a warning dialog be displayed because of conflicts in the export settings.
   * @type {Boolean}
   */
  warnings: undefined,
  
  /*
   * Preserve as much of the original document's structure as possible when exporting.
   * @type {Boolean}
   */
  maximumEditability: undefined,
  
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
