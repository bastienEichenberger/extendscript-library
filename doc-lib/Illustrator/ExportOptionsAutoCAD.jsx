/*
 * Options which may be supplied when exporting a document to AutoCAD formats &amp;&#35;40;.dwg or .dxf&#41;
 */
var ExportOptionsAutoCAD = {
  /*
   * Which format to export the file as.
   * @type {AutoCADExportFileFormat}
   */
  exportFileFormat: undefined,
  
  /*
   * Release of AutoCAD to export to.
   * @type {AutoCADCompatibility}
   */
  version: undefined,
  
  /*
   * Ratio by which to scale the output.
   * @type {Number}
   */
  unitScaleRatio: undefined,
  
  /*
   * Units from which to map.
   * @type {AutoCADUnit}
   */
  unit: undefined,
  
  /*
   * Number of colors to export into the AutoCAD file.
   * @type {AutoCADColors}
   */
  colors: undefined,
  
  /*
   * Raster format in which to export raster art.
   * @type {AutoCADRasterFormat}
   */
  rasterFormat: undefined,
  
  /*
   * Whether to preserve appearance or editability during export.
   * @type {AutoCADExportOption}
   */
  exportOption: undefined,
  
  /*
   * Export selected art only.
   * @type {Boolean}
   */
  exportSelectedArtOnly: undefined,
  
  /*
   * Alter paths for appearance.
   * @type {Boolean}
   */
  alterPathsForAppearance: undefined,
  
  /*
   * Whether to convert text to outlines.
   * @type {Boolean}
   */
  convertTextToOutlines: undefined,
  
  /*
   * Whether to scale lineweights by the same amount as rest of the drawing.
   * @type {Boolean}
   */
  scaleLineweights: undefined,
  
};
