/*
 * The new document preset to use for creating a new document.
 */
var DocumentPreset = {
  /*
   * The title for the new document.
   * @type {String}
   */
  title: undefined,
  
  /*
   * The width for the new document.
   * @type {Number}
   */
  width: undefined,
  
  /*
   * The height for the new document.
   * @type {Number}
   */
  height: undefined,
  
  /*
   * Number of artboards for new document.Range (1:100).
   * @type {Int32}
   */
  numArtboards: undefined,
  
  /*
   * Layout for artboards.
   * @type {DocumentArtboardLayout}
   */
  artboardLayout: undefined,
  
  /*
   * Spacing between artboards.
   * @type {Number}
   */
  artboardSpacing: undefined,
  
  /*
   * Number of rows (for rows layout) OR column(for column layouts)of artboards.Range is 1 to (docNumArtboards - 1) or 1 for single row or column layouts.
   * @type {Int32}
   */
  artboardRowsOrCols: undefined,
  
  /*
   * The color mode for the new document.
   * @type {DocumentColorSpace}
   */
  colorMode: undefined,
  
  /*
   * The units for the new document.
   * @type {RulerUnits}
   */
  units: undefined,
  
  /*
   * The preview mode for the new document.
   * @type {DocumentPreviewMode}
   */
  previewMode: undefined,
  
  /*
   * The raster resolution for the new document.
   * @type {DocumentRasterResolution}
   */
  rasterResolution: undefined,
  
  /*
   * The transparency grid for the new document.
   * @type {DocumentTransparencyGrid}
   */
  transparencyGrid: undefined,
  
};
