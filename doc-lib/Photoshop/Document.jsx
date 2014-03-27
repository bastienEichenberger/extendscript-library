/*
 * The active containment object for the layers and all other objects in the script; the basic canvas for the file.
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
   * The background layer for the document.
   * @type {ArtLayer}
   */
  backgroundLayer: undefined,
  
  /*
   * The number of bits per channel.
   * @type {BitsPerChannelType}
   */
  bitsPerChannel: undefined,
  
  /*
   * The type of color model that defines the working space of the document.
   * @type {ColorProfile}
   */
  ColorProfile: undefined,
  
  /*
   * The name of the color profile. Valid only when no value is specified for color profile kind (to indicate a custom color profile).
   * @type {String}
   */
  colorProfileName: undefined,
  
  /*
   * The color profile.
   * @type {DocumentMode}
   */
  mode: undefined,
  
  /*
   * The color component channels for this document.
   * @type {Channel}
   */
  componentChannels: undefined,
  
  /*
   * The current history state for this document.
   * @type {HistoryState}
   */
  activeHistoryState: undefined,
  
  /*
   * The history state to use with the history brush.
   * @type {HistoryState}
   */
  activeHistoryBrushSource: undefined,
  
  /*
   * The selected layer.
   * @type {Layer}
   */
  activeLayer: undefined,
  
  /*
   * The selected channels.
   * @type {Channel}
   */
  activeChannels: undefined,
  
  /*
   * Metadata about the document.
   * @type {DocumentInfo}
   */
  info: undefined,
  
  /*
   * Document print settings.
   * @type {DocumentPrintSettings}
   */
  printSettings: undefined,
  
  /*
   * The full path name of the document.
   * @type {File}
   */
  fullName: undefined,
  
  /*
   * The height of the document.
   * @type {UnitValue}
   */
  height: undefined,
  
  /*
   * If true, the document is a workgroup document.
   * @type {Boolean}
   */
  managed: undefined,
  
  /*
   * If true, the document been saved since the last change.
   * @type {Boolean}
   */
  saved: undefined,
  
  /*
   * The document name.
   * @type {String}
   */
  name: undefined,
  
  /*
   * The path to the document.
   * @type {File}
   */
  path: undefined,
  
  /*
   * If true, the document is in Quick Mask mode.
   * @type {Boolean}
   */
  quickMaskMode: undefined,
  
  /*
   * The resolution of the document (in pixels per inch)
   * @type {Number}
   */
  resolution: undefined,
  
  /*
   * The selected area of the document.
   * @type {Selection}
   */
  selection: undefined,
  
  /*
   * The width of the document.
   * @type {UnitValue}
   */
  width: undefined,
  
  /*
   * A histogram showing the number of pixels at each color intensity level for the composite channel.
   * @type {int}
   */
  histogram: undefined,
  
  /*
   * The (custom) pixel aspect ratio of the document. Range: 0.100 to 10.000.
   * @type {Number}
   */
  pixelAspectRatio: undefined,
  
  /*
   * The XMP properties of the document. The Camera RAW settings are stored here.
   * @type {XMPMetadata}
   */
  xmpMetadata: undefined,
  
  /*
   * The measurement scale of the document.
   * @type {MeasurementScale}
   */
  measurementScale: undefined,
  
  /*
   * The layers collection in the document.
   * @type {Layers}
   */
  layers: undefined,
  
  /*
   * The layer sets collection in the document.
   * @type {LayerSets}
   */
  layerSets: undefined,
  
  /*
   * The art layers collection in the document.
   * @type {ArtLayers}
   */
  artLayers: undefined,
  
  /*
   * The channels collection in this document.
   * @type {Channels}
   */
  channels: undefined,
  
  /*
   * The history states collection in this document.
   * @type {HistoryStates}
   */
  historyStates: undefined,
  
  /*
   * The layer comps collection in this document.
   * @type {LayerComps}
   */
  layerComps: undefined,
  
  /*
   * The path items collection in this document.
   * @type {PathItems}
   */
  pathItems: undefined,
  
  /*
   * The current count items in the document.
   * @type {CountItems}
   */
  countItems: undefined,
  
  /*
   * The current color samplers associated with the document.
   * @type {ColorSamplers}
   */
  colorSamplers: undefined,
  
  /*
   * Duplicate this object.
 *
   * @param {Object} relativeObject undefined
   * @param {ElementPlacement} insertionLocation undefined
   * @returns {Document}
   */
  duplicate: function(relativeObject, insertionLocation) {
    return new Document();
  },
  
  /*
   * Closes the document.
 *
   * @param {SaveOptions} [saving] Specifies whether changes should be saved before closing.
   */
  close: function(saving) {
  },
  
  /*
   * Converts the document from using one color profile to using another.
 *
   * @param {String} destinationProfile The color profile to convert to. Either a string specifying a color profile, one of the working color spaces, or Lab color.
   * @param {Intent} intent The conversion intent.
   * @param {Boolean} [blackPointCompensation] If true, black point compensation is used.
   * @param {Boolean} [dither] If true, dither is used.
   */
  convertProfile: function(destinationProfile, intent, blackPointCompensation, dither) {
  },
  
  /*
   * Changes the mode of the document.
 *
   * @param {ChangeMode} destinationMode The mode to change to.
   * @param {DocumentConversionOptions} [options] Options for changing the mode.
   */
  changeMode: function(destinationMode, options) {
  },
  
  /*
   * Crops the document.
 *
   * @param {UnitRect} bounds The area to crop.
   * @param {Number} [angle] The angle of cropping bounds.
   * @param {UnitValue} [width] The width of the resulting document.
   * @param {UnitValue} [height] The height of the resulting document.
   */
  crop: function(bounds, angle, width, height) {
  },
  
  /*
   * Exports the document.
 *
   * @param {File} exportIn The file to export to.
   * @param {ExportType} [exportAs] The type of export.
   * @param {ExportOptions} [options] Options for the specified export type.
   */
  exportDocument: function(exportIn, exportAs, options) {
  },
  
  /*
   * Flips the canvas horizontally or vertically.
 *
   * @param {Direction} direction The direction in which to flip the canvas.
   */
  flipCanvas: function(direction) {
  },
  
  /*
   * Imports annotations into the document.
 *
   * @param {File} file The document to import annotations from.
   */
  importAnnotations: function(file) {
  },
  
  /*
   * Flattens all layers.
   */
  flatten: function() {
  },
  
  /*
   * Flattens all visible layers in the document.
   */
  mergeVisibleLayers: function() {
  },
  
  /*
   * Pastes contents of the clipboard into the document.
 *
   * @param {Boolean} [intoSelection] If true, contents are pasted into the current selection.
   * @returns {ArtLayer}
   */
  paste: function(intoSelection) {
    return new ArtLayer();
  },
  
  /*
   * Prints the document.
 *
   * @param {PrintEncoding} [postScriptEncoding] The encoding type.
   * @param {SourceSpaceType} [sourceSpace] The color space for the source.
   * @param {String} [printSpace] The color space for the printer. Can be "nothing" (meaning same as source); one of the working spaces or Lab color; or a string specifying a color space. Default: nothing.
   * @param {Intent} [intent] The color conversion intent.
   * @param {Boolean} [blackPointCompensation] If true, black point compensation is used.
   */
  print: function(postScriptEncoding, sourceSpace, printSpace, intent, blackPointCompensation) {
  },
  
  /*
   * Print one copy of the document.
   */
  printOneCopy: function() {
  },
  
  /*
   * Expands the document to show clipped sections.
   */
  revealAll: function() {
  },
  
  /*
   * Rasterizes all layers.
   */
  rasterizeAllLayers: function() {
  },
  
  /*
   * Records the measurements of document.
 *
   * @param {MeasurementSource} [source] The source of the measurements to record.
   * @param {String} [dataPoints] An array of identifiers of data points to record. Any data points not appropriate for the specified source are ignored.
   */
  recordMeasurements: function(source, dataPoints) {
  },
  
  /*
   * Rotates the canvas.
 *
   * @param {Number} angle The number of degrees to rotate. A positive angle rotates the canvas clockwise; a negative value rotates the canvas counter-clockwise.
   */
  rotateCanvas: function(angle) {
  },
  
  /*
   * Changes the size of the canvas.
 *
   * @param {UnitValue} [width] The desired width of the canvas.
   * @param {UnitValue} [height] The desired height of the canvas.
   * @param {AnchorPosition} [anchor] The anchor point to resize around.
   */
  resizeCanvas: function(width, height, anchor) {
  },
  
  /*
   * Changes the size of the image.
 *
   * @param {UnitValue} [width] The desired width of the image.
   * @param {UnitValue} [height] The desired height of the image.
   * @param {Number} [resolution] The resolution (in pixels per inch)
   * @param {ResampleMethod} [resampleMethod] The downsample method.
   */
  resizeImage: function(width, height, resolution, resampleMethod) {
  },
  
  /*
   * Splits the channels of the document.
   * @returns {Document}
   */
  splitChannels: function() {
    return new Document();
  },
  
  /*
   * Saves the document.
   */
  save: function() {
  },
  
  /*
   * Saves the document with the specified save options.
 *
   * @param {File} saveIn The file to save to, specified as a string containing the full file path or an alias. If not specified, the document is saved to its existing file.
   * @param {any} [options] Options for the specified file type.
   * @param {Boolean} [asCopy] Saves the document as a copy, leaving the original open.
   * @param {Extension} [extensionType] Appends the specified extension to the file name.
   */
  saveAs: function(saveIn, options, asCopy, extensionType) {
  },
  
  /*
   * Provides a single history state for the entire script. Allows a single undo for all actions taken in the script.
 *
   * @param {String} historyString The string to use for the history state.
   * @param {String} javaScriptString A string of JavaScript code to execute during the suspension of history.
   */
  suspendHistory: function(historyString, javaScriptString) {
  },
  
  /*
   * Applies trapping to a CMYK document. Valid only when 'mode' = CMYK.
 *
   * @param {int} width The trap width in pixels.
   */
  trap: function(width) {
  },
  
  /*
   * Trims the transparent area around the image on the specified sides of the canvas.
 *
   * @param {TrimType} [type] The color or type of pixels to base the trim on.
   * @param {Boolean} [top] If true, trims away the top of the document.
   * @param {Boolean} [left] If true, trims away the left of the document.
   * @param {Boolean} [bottom] If true, trims away the bottom of the document.
   * @param {Boolean} [right] If true, trims away the right of the document.
   */
  trim: function(type, top, left, bottom, right) {
  },
  
  /*
   * Creates a duplicate of the document object.
 *
   * @param {String} [name] The name of the new document.
   * @param {Boolean} [mergeLayersOnly] If ture, duplicates merged layers only.
   * @returns {Document}
   */
  duplicate: function(name, mergeLayersOnly) {
    return new Document();
  },
  
  /*
   * Counts the objects in the document.
 *
   * @param {Channel} channel The channel to use for counting.
   * @param {int} threshold Threshold to use for counting. Range: 0 to 255.
   */
  autoCount: function(channel, threshold) {
  },
  
};
