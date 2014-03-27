/*
 * Options which may be supplied when saving a document as an FXG file.
 */
var FXGSaveOptions = {
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
  
  /*
   * The version of the FXG file format to create.
   * @type {FXGVersion}
   */
  version: undefined,
  
  /*
   * Choose to preserve the editing capabilities of FXG.
   * @type {Boolean}
   */
  preserveEditingCapabilities: undefined,
  
  /*
   * Choose to include unused symbols.
   * @type {Boolean}
   */
  includeUnusedSymbols: undefined,
  
  /*
   * Choose to downsample the linked images(72ppi)
   * @type {Boolean}
   */
  downsampleLinkedImages: undefined,
  
  /*
   * Choose to include metadata (XMP)
   * @type {Boolean}
   */
  includeMetadata: undefined,
  
  /*
   * The policy used by FXG to preserve filters.
   * @type {FiltersPreservePolicy}
   */
  filtersPolicy: undefined,
  
  /*
   * The policy used by FXG to preserve text.
   * @type {TextPreservePolicy}
   */
  textPolicy: undefined,
  
  /*
   * The policy used by FXG to preserve gradients.
   * @type {GradientsPreservePolicy}
   */
  gradientsPolicy: undefined,
  
  /*
   * The policy used by FXG to expand blends.
   * @type {BlendsExpandPolicy}
   */
  blendsPolicy: undefined,
  
};
