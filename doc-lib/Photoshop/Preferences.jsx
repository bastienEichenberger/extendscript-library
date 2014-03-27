/*
 * Options to define for the preferences property of the application object, basically equivalent to selecting Edit&amp;gt;Preferences &amp;&#35;40;Windows&#41; or Photoshop&amp;gt;Preferences in the Adobe Photoshop application.
 */
var Preferences = {
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
   * The color picker to use.
   * @type {ColorPicker}
   */
  colorPicker: undefined,
  
  /*
   * The method to use to assign color values to any new pixels created when an image is resampled or resized.
   * @type {ResampleMethod}
   */
  interpolation: undefined,
  
  /*
   * If true, retains Adobe Photoshop contents on the clipboard after you exit the application.
   * @type {Boolean}
   */
  exportClipboard: undefined,
  
  /*
   * If true, pop-up definitions are displayed on mouseover.
   * @type {Boolean}
   */
  showToolTips: undefined,
  
  /*
   * If true, automatically resizes the window when zooming in or out using keyboard shortcuts.
   * @type {Boolean}
   */
  keyboardZoomResizesWindows: undefined,
  
  /*
   * If true, automatically updates open documents.
   * @type {Boolean}
   */
  autoUpdateOpenDocuments: undefined,
  
  /*
   * If true, Asian text options are displayed in the Paragraph palette.
   * @type {Boolean}
   */
  showAsianTextOptions: undefined,
  
  /*
   * If true, alerts the user when a process finishes.
   * @type {Boolean}
   */
  beepWhenDone: undefined,
  
  /*
   * If true, dynamic color sliders appear in the Color palette.
   * @type {Boolean}
   */
  dynamicColorSliders: undefined,
  
  /*
   * If true, makes new palette locations the default location.
   * @type {Boolean}
   */
  savePaletteLocations: undefined,
  
  /*
   * If true, Asian font names are listed in English.
   * @type {Boolean}
   */
  showEnglishFontNames: undefined,
  
  /*
   * If true, enables cycling through a set of hidden tools.
   * @type {Boolean}
   */
  useShiftKeyForToolSwitch: undefined,
  
  /*
   * The number of history states to preserve. Range: 1 to 100.
   * @type {int}
   */
  numberOfHistoryStates: undefined,
  
  /*
   * If true, automatically makes the first snapshot when a new document is created.
   * @type {Boolean}
   */
  createFirstSnapshot: undefined,
  
  /*
   * If true, allows non-linear history.
   * @type {Boolean}
   */
  nonLinearHistory: undefined,
  
  /*
   * If true, curly quote marks are used.
   * @type {Boolean}
   */
  smartQuotes: undefined,
  
  /*
   * The behavior mode to use when saving files.
   * @type {SaveBehavior}
   */
  imagePreviews: undefined,
  
  /*
   * If true, shows the image preview as a thumbnail.
   * @type {Boolean}
   */
  iconPreview: undefined,
  
  /*
   * If true, shows the image preview as a full size image.
   * @type {Boolean}
   */
  fullSizePreview: undefined,
  
  /*
   * If true, creates a thumbnail when saving the image in Mac OS.
   * @type {Boolean}
   */
  macOSThumbnail: undefined,
  
  /*
   * If true, creates a thumbnail when saving the image in Windows. (Requires hardware support.)
   * @type {Boolean}
   */
  windowsThumbnail: undefined,
  
  /*
   * Save files with extensions on Windows.
   * @type {SaveBehavior}
   */
  appendExtension: undefined,
  
  /*
   * If true, the file extension is lowercase.
   * @type {Boolean}
   */
  useLowerCaseExtension: undefined,
  
  /*
   * If true, asks the user to verify layer preservation options when saving a file in TIFF format.
   * @type {Boolean}
   */
  askBeforeSavingLayeredTIFF: undefined,
  
  /*
   * The behavior to use to check whether to maximize compatibility when opening Adobe Photoshop (PSD) files.
   * @type {QueryStateType}
   */
  maximizeCompatibility: undefined,
  
  /*
   * The number of items in the recent file list. Range: 0 to 30.
   * @type {int}
   */
  recentFileListLength: undefined,
  
  /*
   * If true, displays component channels in the Channels palette in color.
   * @type {Boolean}
   */
  colorChannelsInColor: undefined,
  
  /*
   * If true, uses diffusion dither.
   * @type {Boolean}
   */
  useDiffusionDither: undefined,
  
  /*
   * If true, halves the resolution or (doubles the size of pixels) to make previews display more quickly.
   * @type {Boolean}
   */
  pixelDoubling: undefined,
  
  /*
   * The type of pointer to use.
   * @type {PaintingCursors}
   */
  paintingCursors: undefined,
  
  /*
   * The type of pointer to use.
   * @type {OtherPaintingCursors}
   */
  otherCursors: undefined,
  
  /*
   * The size of grid squares.
   * @type {GridSize}
   */
  gridSize: undefined,
  
  /*
   * If true, enables Adobe Photoshop to send transparency information to your computer�s video board. (Requires hardware support.)
   * @type {Boolean}
   */
  useVideoAlpha: undefined,
  
  /*
   * The opacity (as a percentage) of the warning color for out-of-gamut colors. Range: 0 to 100.
   * @type {Number}
   */
  gamutWarningOpacity: undefined,
  
  /*
   * The unit that the scripting system uses when receiving and returning values.
   * @type {Units}
   */
  rulerUnits: undefined,
  
  /*
   * The unit type-size that the numeric inputs are assumed to represent.
   * @type {TypeUnits}
   */
  typeUnits: undefined,
  
  /*
   * The width of columns (in points)
   * @type {Number}
   */
  columnWidth: undefined,
  
  /*
   * The gutter of columns (in points)
   * @type {Number}
   */
  columnGutter: undefined,
  
  /*
   * The point/pica size.
   * @type {PointType}
   */
  pointSize: undefined,
  
  /*
   * The formatting style for non-printing guide lines.
   * @type {GuideLineStyle}
   */
  guideStyle: undefined,
  
  /*
   * The formatting style for non-printing grid lines.
   * @type {GridLineStyle}
   */
  gridStyle: undefined,
  
  /*
   * The value by which to subdivide the grid.
   * @type {int}
   */
  gridSubDivisions: undefined,
  
  /*
   * If true, displays slice numbers in the document window when using the Slice tool.
   * @type {Boolean}
   */
  showSliceNumber: undefined,
  
  /*
   * If true, uses an additional folder for compatible plug-ins stored with a different application.
   * @type {Boolean}
   */
  useAdditionalPluginFolder: undefined,
  
  /*
   * The path to the additional plug-in folder. Valid only when 'use additional plugin folder' = true.
   * @type {File}
   */
  additionalPluginFolder: undefined,
  
  /*
   * The number of images to hold in the cache. Range: 1 to 8.
   * @type {int}
   */
  imageCacheLevels: undefined,
  
  /*
   * If true, shows the current image cache used to create the histogram.
   * @type {Boolean}
   */
  imageCacheForHistograms: undefined,
  
  /*
   * Maximum percentage of available RAM used by Photoshop.
   * @type {int}
   */
  maxRAMuse: undefined,
  
  /*
   * If true, history logging is enabled.
   * @type {Boolean}
   */
  useHistoryLog: undefined,
  
  /*
   * Options for saving the history log items.
   * @type {SaveLogItemsType}
   */
  saveLogItems: undefined,
  
  /*
   * Options for edit log items.
   * @type {EditLogItemsType}
   */
  editLogItems: undefined,
  
  /*
   * The path to the history log file.
   * @type {File}
   */
  saveLogItemsFile: undefined,
  
  /*
   * Options for showing font previews in the type tool font menus.
   * @type {FontPreviewType}
   */
  fontPreviewSize: undefined,
  
};
