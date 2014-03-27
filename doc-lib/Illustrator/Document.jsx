/*
 * A document.
 */
var Document = {
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
   * Is the file a stationery file?
   * @type {Boolean}
   */
  stationery: undefined,
  
  /*
   * The file associated with the document.
   * @type {File}
   */
  fullName: undefined,
  
  /*
   * The active layer.
   * @type {Layer}
   */
  activeLayer: undefined,
  
  /*
   * The document's current view.
   * @type {View}
   */
  activeView: undefined,
  
  /*
   * The bounds of the illustration excluding stroke width.
   * @type {Rectangle}
   */
  geometricBounds: undefined,
  
  /*
   * The visible bounds of the illustration including stroke width.
   * @type {Rectangle}
   */
  visibleBounds: undefined,
  
  /*
   * undefined
   * @type {Point}
   */
  rulerOrigin: undefined,
  
  /*
   * undefined
   * @type {RulerUnits}
   */
  rulerUnits: undefined,
  
  /*
   * undefined
   * @type {Point}
   */
  pageOrigin: undefined,
  
  /*
   * undefined
   * @type {Rectangle}
   */
  cropBox: undefined,
  
  /*
   * undefined
   * @type {CropOptions}
   */
  cropStyle: undefined,
  
  /*
   * undefined
   * @type {Number}
   */
  width: undefined,
  
  /*
   * undefined
   * @type {Number}
   */
  height: undefined,
  
  /*
   * undefined
   * @type {Boolean}
   */
  showPlacedImages: undefined,
  
  /*
   * undefined
   * @type {Number}
   */
  outputResolution: undefined,
  
  /*
   * undefined
   * @type {Boolean}
   */
  printTiles: undefined,
  
  /*
   * The selection within the document.
   * @type {any}
   */
  selection: undefined,
  
  /*
   * undefined
   * @type {Boolean}
   */
  splitLongPaths: undefined,
  
  /*
   * undefined
   * @type {Boolean}
   */
  tileFullPages: undefined,
  
  /*
   * undefined
   * @type {Boolean}
   */
  useDefaultScreen: undefined,
  
  /*
   * The color space used for the document.
   * @type {DocumentColorSpace}
   */
  documentColorSpace: undefined,
  
  /*
   * The document's name.
   * @type {String}
   */
  name: undefined,
  
  /*
   * Path specification for the document.
   * @type {File}
   */
  path: undefined,
  
  /*
   * Has the document been saved?
   * @type {Boolean}
   */
  saved: undefined,
  
  /*
   * Should a new path be filled?
   * @type {Boolean}
   */
  defaultFilled: undefined,
  
  /*
   * Default fill color.
   * @type {Color}
   */
  defaultFillColor: undefined,
  
  /*
   * Will art beneath a filled object be overprinted by default?
   * @type {Boolean}
   */
  defaultFillOverprint: undefined,
  
  /*
   * Should a new path be stroked?
   * @type {Boolean}
   */
  defaultStroked: undefined,
  
  /*
   * Default stroke color.
   * @type {Color}
   */
  defaultStrokeColor: undefined,
  
  /*
   * Will art beneath a stroked object be overprinted by default?
   * @type {Boolean}
   */
  defaultStrokeOverprint: undefined,
  
  /*
   * Default width of stroke.
   * @type {Number}
   */
  defaultStrokeWidth: undefined,
  
  /*
   * Default dash lengths (set to {} for a solid line)
   * @type {Number}
   */
  defaultStrokeDashes: undefined,
  
  /*
   * The default distance into the dash pattern at which the pattern should be started.
   * @type {Number}
   */
  defaultStrokeDashOffset: undefined,
  
  /*
   * Default type of line capping.
   * @type {StrokeCap}
   */
  defaultStrokeCap: undefined,
  
  /*
   * Default type of joints.
   * @type {StrokeJoin}
   */
  defaultStrokeJoin: undefined,
  
  /*
   * Specifies whether a join is mitered (pointed) or beveled (squared-off) by default.
   * @type {Number}
   */
  defaultStrokeMiterLimit: undefined,
  
  /*
   * The active data set.
   * @type {DataSet}
   */
  activeDataSet: undefined,
  
  /*
   * The locked variables.
   * @type {Boolean}
   */
  variablesLocked: undefined,
  
  /*
   * The XMP packet string associated with the document.
   * @type {String}
   */
  XMPString: undefined,
  
  /*
   * The document raster effects settings.
   * @type {RasterEffectOptions}
   */
  rasterEffectSettings: undefined,
  
  /*
   * All artboards in the document.
   * @type {Artboards}
   */
  artboards: undefined,
  
  /*
   * The compound path artwork in this collection.
   * @type {CompoundPathItems}
   */
  compoundPathItems: undefined,
  
  /*
   * The layers in this document.
   * @type {Layers}
   */
  layers: undefined,
  
  /*
   * All the artwork in this document.
   * @type {PageItems}
   */
  pageItems: undefined,
  
  /*
   * The path artwork in this document.
   * @type {PathItems}
   */
  pathItems: undefined,
  
  /*
   * The tags in this document.
   * @type {Tags}
   */
  tags: undefined,
  
  /*
   * The views in this document.
   * @type {Views}
   */
  views: undefined,
  
  /*
   * The raster art items in this document.
   * @type {RasterItems}
   */
  rasterItems: undefined,
  
  /*
   * The placed art items in this document.
   * @type {PlacedItems}
   */
  placedItems: undefined,
  
  /*
   * The mesh art items in this document.
   * @type {MeshItems}
   */
  meshItems: undefined,
  
  /*
   * The plugin art items in this document.
   * @type {PluginItems}
   */
  pluginItems: undefined,
  
  /*
   * The graph art items in this document.
   * @type {GraphItems}
   */
  graphItems: undefined,
  
  /*
   * The non-native art items in this document.
   * @type {NonNativeItems}
   */
  nonNativeItems: undefined,
  
  /*
   * The group items in this document.
   * @type {GroupItems}
   */
  groupItems: undefined,
  
  /*
   * The text frame items in this document.
   * @type {TextFrameItems}
   */
  textFrames: undefined,
  
  /*
   * The story items in this document.
   * @type {Stories}
   */
  stories: undefined,
  
  /*
   * The list of character styles in this document.
   * @type {CharacterStyles}
   */
  characterStyles: undefined,
  
  /*
   * The list of paragraph styles in this document.
   * @type {ParagraphStyles}
   */
  paragraphStyles: undefined,
  
  /*
   * The Kinsoku set.
   * @type {String}
   */
  kinsokuSet: undefined,
  
  /*
   * The Mojikumi set.
   * @type {String}
   */
  mojikumiSet: undefined,
  
  /*
   * The swatches in this document.
   * @type {Swatches}
   */
  swatches: undefined,
  
  /*
   * The Swatch Groups in this document.
   * @type {SwatchGroups}
   */
  swatchGroups: undefined,
  
  /*
   * The gradients available in this document.
   * @type {Gradients}
   */
  gradients: undefined,
  
  /*
   * The patterns available in this document.
   * @type {Patterns}
   */
  patterns: undefined,
  
  /*
   * The custom spot colors available in this document.
   * @type {Spots}
   */
  spots: undefined,
  
  /*
   * The symbols defined in this document.
   * @type {Symbols}
   */
  symbols: undefined,
  
  /*
   * The symbol items in this document.
   * @type {SymbolItems}
   */
  symbolItems: undefined,
  
  /*
   * The brushes defined in this document.
   * @type {Brushes}
   */
  brushes: undefined,
  
  /*
   * The graphic styles defined in this document.
   * @type {ArtStyles}
   */
  graphicStyles: undefined,
  
  /*
   * The variables defined in this document.
   * @type {Variables}
   */
  variables: undefined,
  
  /*
   * The list of inks in this document.
   * @type {Ink}
   */
  inkList: undefined,
  
  /*
   * The data sets defined in this document.
   * @type {DataSets}
   */
  dataSets: undefined,
  
  /*
   * The text frame items in this story.
   * @type {LegacyTextItems}
   */
  legacyTextItems: undefined,
  
  /*
   * Close the specified document(s)
 *
   * @param {SaveOptions} [saving] Specifies whether changes should be saved before closing.
   */
  close: function(saving) {
  },
  
  /*
   * Save the document.
   */
  save: function() {
  },
  
  /*
   * Save the document with specific save options.
 *
   * @param {File} saveIn The file to save the document in.
   * @param {any} [options] Options for the file type specified.
   */
  saveAs: function(saveIn, options) {
  },
  
  /*
   * Print the document.
 *
   * @param {PrintOptions} [options] Print options.
   */
  print: function(options) {
  },
  
  /*
   * Export the specified document(s)
 *
   * @param {File} exportFile The file to export the document to.
   * @param {ExportType} exportFormat The file type to export the document as.
   * @param {any} [options] Options for the file type specified.
   */
  exportFile: function(exportFile, exportFormat, options) {
  },
  
  /*
   * Activate the first window associated with the document.
   */
  activate: function() {
  },
  
  /*
   * Import a library containing datasets, variables and their associated dynamic data. Importing variables will overwrite existing variables and datasets.
 *
   * @param {File} fileSpec File spec to import from.
   */
  importVariables: function(fileSpec) {
  },
  
  /*
   * Save datasets into an XML library. The datasets contain variables and their associated dynamic data.
 *
   * @param {File} file File spec to export to.
   */
  exportVariables: function(file) {
  },
  
  /*
   * Load the character styles from the Illustrator file.
 *
   * @param {File} fileSpec File spec to import from.
   */
  importCharacterStyles: function(fileSpec) {
  },
  
  /*
   * Load the paragraph styles from the Illustrator file.
 *
   * @param {File} fileSpec File spec to import from.
   */
  importParagraphStyles: function(fileSpec) {
  },
  
  /*
   * Apply the named print preset from the file to the current print setting.
 *
   * @param {String} printPreset The name of a print preset to import.
   * @param {File} fileSpec File to import from.
   */
  importPrintPreset: function(printPreset, fileSpec) {
  },
  
  /*
   * Export the current print setting to the preset file.
 *
   * @param {File} file File to export to.
   */
  exportPrintPreset: function(file) {
  },
  
  /*
   * Load all PDF presets from a file.
 *
   * @param {File} fileSpec File to import from.
   * @param {Boolean} [replacingPreset] Should existing editable presets be replaced?
   */
  importPDFPreset: function(fileSpec, replacingPreset) {
  },
  
  /*
   * Save all PDF presets to a file.
 *
   * @param {File} file File to export to.
   */
  exportPDFPreset: function(file) {
  },
  
  /*
   * Loads mentioned perspective grid preset, if preset name is specified, else loads all(if no preset name is specified) presets, from the specified file.
 *
   * @param {File} fileSpec File to import from.
   * @param {String} [perspectivePreset] Name of perspective grid preset.
   */
  importPerspectiveGridPreset: function(fileSpec, perspectivePreset) {
  },
  
  /*
   * Saves all perspective grid presets to a file.
 *
   * @param {File} file File to export to.
   */
  exportPerspectiveGridPreset: function(file) {
  },
  
  /*
   * Capture the artwork content inside the clip bound as raster image, and write out the captured image data into the target image file.
 *
   * @param {File} imageFile The file to which the captured image should be written.
   * @param {Rectangle} [clipBounds] The rectangular region of the artwork for image capture. If the parameter is omitted, the entire artwork bound is captured.
   * @param {ImageCaptureOptions} [options] Describes the image capture options.
   */
  imageCapture: function(imageFile, clipBounds, options) {
  },
  
  /*
   * Capture the current document window to the target TIFF image file.
 *
   * @param {File} imageFile The TIFF file to which the captured image should be written.
   * @param {Point} windowSize The size to make the window before capture.
   */
  windowCapture: function(imageFile, windowSize) {
  },
  
  /*
   * Rasterize the source art(s) within the specified clip bounds. The source art(s) are disposed as a result of the rasterization.
 *
   * @param {any} sourceArt The page item(s) to be rasterized.
   * @param {Rectangle} [clipBounds] The rectangular region of the artwork for the rasterization. If the parameter is omitted, the bounds of the source art(s) is used instead.
   * @param {RasterizeOptions} [options] Describes the rasterization options.
   * @returns {PageItem}
   */
  rasterize: function(sourceArt, clipBounds, options) {
    return new PageItem();
  },
  
  /*
   * Rearrange Artboards in the document.
 *
   * @param {DocumentArtboardLayout} [artboardLayout] Layout of artboards for rearrangement.
   * @param {Int32} [artboardRowsOrCols] Number of rows (for rows layout) OR column(for column layouts)of artboards.Range is 1 to (docNumArtboards - 1) or 1 for single row or column layouts.
   * @param {Number} [artboardSpacing] Spacing between artboards.
   * @param {Boolean} [artboardMoveArtwork] Whether to move artwork with artboards.
   * @returns {Boolean}
   */
  rearrangeArtboards: function(artboardLayout, artboardRowsOrCols, artboardSpacing, artboardMoveArtwork) {
    return new Boolean();
  },
  
  /*
   * Select art objects in active artboard.
   * @returns {Boolean}
   */
  selectObjectsOnActiveArtboard: function() {
    return new Boolean();
  },
  
  /*
   * Change the artboard to selected art bounds.
 *
   * @param {Int32} [index] The index of the artboard to update.
   * @returns {Boolean}
   */
  fitArtboardToSelectedArt: function(index) {
    return new Boolean();
  },
  
  /*
   * Converts the coordinate system of a single point from one coordinate system to another.
 *
   * @param {Point} coordinate The Coordinate to convert.
   * @param {CoordinateSystem} source The source coordinate system.
   * @param {CoordinateSystem} destination The destination coordinate system.
   * @returns {Point}
   */
  convertCoordinate: function(coordinate, source, destination) {
    return new Point();
  },
  
  /*
   * Selects a predefined preset to define grid for the current document.
 *
   * @param {String} perspectivePreset Name of perspective grid preset.
   * @returns {Boolean}
   */
  selectPerspectivePreset: function(perspectivePreset) {
    return new Boolean();
  },
  
  /*
   * Shows the current active perspective grid for the document, if no active perspective grid then shows the default perspective grid for the document.
   * @returns {Boolean}
   */
  showPerspectiveGrid: function() {
    return new Boolean();
  },
  
  /*
   * Hides the current active perspective grid for the document, if there is visible perspective grid.
   * @returns {Boolean}
   */
  hidePerspectiveGrid: function() {
    return new Boolean();
  },
  
  /*
   * Gets the active plane of the active perspective grid of the document.
   * @returns {PerspectiveGridPlaneType}
   */
  getPerspectiveActivePlane: function() {
    return new PerspectiveGridPlaneType();
  },
  
  /*
   * Sets the active perspective plane for the active grid of the document.
 *
   * @param {PerspectiveGridPlaneType} perspectiveGridPlane Type of perspective grid plane.
   * @returns {Boolean}
   */
  setPerspectiveActivePlane: function(perspectiveGridPlane) {
    return new Boolean();
  },
  
};
