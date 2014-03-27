/*
 * Options which may be supplied when opening a AutoCAD file.
 */
var OpenOptionsAutoCAD = {
  /*
   * The object's container.
   * @type {Object}
   */
  parent: undefined,
  
  /*
   * The class name of the object.
   * @type {String}
   */
  typename: undefined,
  
  /*
   * How to scale the AutoCAD drawing on import (default: Fit Artboard)
   * @type {AutoCADGlobalScaleOption}
   */
  globalScaleOption: undefined,
  
  /*
   * Percentage scaling to apply globally on the AutoCAD drawing (default: 1.0)
   * @type {Number}
   */
  globalScalePercent: undefined,
  
  /*
   * Ratio by which to scale while mapping the units (default: 1.0)
   * @type {Number}
   */
  unitScaleRatio: undefined,
  
  /*
   * Units to which to map (default: Millimeters)
   * @type {AutoCADUnit}
   */
  unit: undefined,
  
  /*
   * Name of layout in the AutoCAD drawing to import.
   * @type {String}
   */
  selectedLayoutName: undefined,
  
  /*
   * To center the created artwork on the artboard (default: true)
   * @type {Boolean}
   */
  centerArtwork: undefined,
  
  /*
   * To merge the layers of the artwork (default: false)
   * @type {Boolean}
   */
  mergeLayers: undefined,
  
  /*
   * To scale lineweights by the same amount as rest of the drawing (default: false)
   * @type {Boolean}
   */
  scaleLineweights: undefined,
  
};
