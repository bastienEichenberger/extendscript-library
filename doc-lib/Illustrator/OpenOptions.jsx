/*
 * Options which may be supplied when opening a file.
 */
var OpenOptions = {
  /*
   * Choose to update all text objects for documents saved with legacy texts (pre-Illustrator 11)
   * @type {Boolean}
   */
  updateLegacyText: undefined,
  
  /*
   * Choose to preserve the spot colors in the gradient mesh objects for legacy documents (pre-Illustrator CS3)
   * @type {Boolean}
   */
  updateLegacyGradientMesh: undefined,
  
  /*
   * Open the file as library.
   * @type {LibraryType}
   */
  openAs: undefined,
  
  /*
   * Preserve Legacy Artboard (pre-Illustrator CS4) when opening in CS4 or later.
   * @type {Boolean}
   */
  preserveLegacyArtboard: undefined,
  
  /*
   * Convert crop area to Artboard when opening legacy document (pre-Illustrator CS4) in CS4 or later. If false then crop areas are discarded.
   * @type {Boolean}
   */
  convertCropAreaToArtboard: undefined,
  
  /*
   * Create Artboard with dimentions of artwork bounding box when opening legacy document (pre-Illustrator CS4) in CS4 or later.
   * @type {Boolean}
   */
  createArtboardWithArtworkBoundingBox: undefined,
  
  /*
   * Convert print tiles to Artboard when opening legacy document (pre-Illustrator CS4) in CS4 or later.
   * @type {Boolean}
   */
  convertTilesToArtboard: undefined,
  
};
