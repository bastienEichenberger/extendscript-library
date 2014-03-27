/*
 * The application.
 */
var Application = {
  /*
   * Dispatched before a Document is created. This event bubbles. This event is cancelable.
   * @type {String}
   */
  BEFORE_NEW: undefined,
  
  /*
   * Dispatched before a Document is opened. This event bubbles. This event is cancelable.
   * @type {String}
   */
  BEFORE_OPEN: undefined,
  
  /*
   * Dispatched after a Document is closed. This event bubbles. This event is not cancelable.
   * @type {String}
   */
  AFTER_CLOSE: undefined,
  
  /*
   * Dispatched after the active context changes. This event bubbles. This event is not cancelable.
   * @type {String}
   */
  AFTER_CONTEXT_CHANGED: undefined,
  
  /*
   * Dispatched after the active selection changes. This event bubbles. This event is not cancelable.
   * @type {String}
   */
  AFTER_SELECTION_CHANGED: undefined,
  
  /*
   * Dispatched after an attribute on the active selection changes. This event bubbles. This event is not cancelable.
   * @type {String}
   */
  AFTER_SELECTION_ATTRIBUTE_CHANGED: undefined,
  
  /*
   * Dispatched before the Application becomes inactive. This event bubbles. This event is not cancelable.
   * @type {String}
   */
  BEFORE_DEACTIVATE: undefined,
  
  /*
   * Dispatched after the Application becomes active. This event bubbles. This event is not cancelable.
   * @type {String}
   */
  AFTER_ACTIVATE: undefined,
  
  /*
   * Dispatched before the Application is quit. Allows the quit to be canceled. This event bubbles. This event is cancelable.
   * @type {String}
   */
  BEFORE_QUIT: undefined,
  
  /*
   * Dispatched when the Application is quitting. Since the quit has been committed, it can not be canceled. This event bubbles. This event is not cancelable.
   * @type {String}
   */
  AFTER_QUIT: undefined,
  
  /*
   * The XML preference settings.
   * @type {XMLPreference}
   */
  xmlPreferences: undefined,
  
  /*
   * XML import preference settings.
   * @type {XMLImportPreference}
   */
  xmlImportPreferences: undefined,
  
  /*
   * XML export preference settings.
   * @type {XMLExportPreference}
   */
  xmlExportPreferences: undefined,
  
  /*
   * The default export for web preferences.
   * @type {ExportForWebPreference}
   */
  exportForWebPreferences: undefined,
  
  /*
   * Transparency preference settings.
   * @type {TransparencyPreference}
   */
  transparencyPreferences: undefined,
  
  /*
   * Text frame preference settings.
   * @type {TextFramePreference}
   */
  textFramePreferences: undefined,
  
  /*
   * Text preference settings.
   * @type {TextPreference}
   */
  textPreferences: undefined,
  
  /*
   * Text default settings.
   * @type {TextDefault}
   */
  textDefaults: undefined,
  
  /*
   * User dictionary preference settings.
   * @type {DictionaryPreference}
   */
  dictionaryPreferences: undefined,
  
  /*
   * Story preference settings.
   * @type {StoryPreference}
   */
  storyPreferences: undefined,
  
  /*
   * Anchored object default settings.
   * @type {AnchoredObjectDefault}
   */
  anchoredObjectDefaults: undefined,
  
  /*
   * Anchored object settings.
   * @type {AnchoredObjectSetting}
   */
  anchoredObjectSettings: undefined,
  
  /*
   * Baseline frame grid option settings.
   * @type {BaselineFrameGridOption}
   */
  baselineFrameGridOptions: undefined,
  
  /*
   * Footnote option settings.
   * @type {FootnoteOption}
   */
  footnoteOptions: undefined,
  
  /*
   * Lists all paragraph styles (regardless of their group).
   * @type {ParagraphStyle}
   */
  allParagraphStyles: undefined,
  
  /*
   * Lists all character styles (regardless of their group).
   * @type {CharacterStyle}
   */
  allCharacterStyles: undefined,
  
  /*
   * The text wrap preference properties that define the default formatting for wrapping text around objects.
   * @type {TextWrapPreference}
   */
  textWrapPreferences: undefined,
  
  /*
   * All Table styles
   * @type {TableStyle}
   */
  allTableStyles: undefined,
  
  /*
   * All Cell styles
   * @type {CellStyle}
   */
  allCellStyles: undefined,
  
  /*
   * Document preference settings.
   * @type {DocumentPreference}
   */
  documentPreferences: undefined,
  
  /*
   * Grid preference settings.
   * @type {GridPreference}
   */
  gridPreferences: undefined,
  
  /*
   * Guide preference settings.
   * @type {GuidePreference}
   */
  guidePreferences: undefined,
  
  /*
   * Margin preference settings.
   * @type {MarginPreference}
   */
  marginPreferences: undefined,
  
  /*
   * Pasteboard preference settings.
   * @type {PasteboardPreference}
   */
  pasteboardPreferences: undefined,
  
  /*
   * View preference settings.
   * @type {ViewPreference}
   */
  viewPreferences: undefined,
  
  /*
   * Smart Guide preference properties.
   * @type {SmartGuidePreference}
   */
  smartGuidePreferences: undefined,
  
  /*
   * Spell-check preferences.
   * @type {SpellPreference}
   */
  spellPreferences: undefined,
  
  /*
   * Auto-correct preferences.
   * @type {AutoCorrectPreference}
   */
  autoCorrectPreferences: undefined,
  
  /*
   * Linked story options
   * @type {LinkedStoryOption}
   */
  linkedStoryOptions: undefined,
  
  /*
   * Linked Page Item options
   * @type {LinkedPageItemOption}
   */
  linkedPageItemOptions: undefined,
  
  /*
   * Script preferences.
   * @type {ScriptPreference}
   */
  scriptPreferences: undefined,
  
  /*
   * Arguments to pass to a script.
   * @type {ScriptArg}
   */
  scriptArgs: undefined,
  
  /*
   * EPS export preferences.
   * @type {EPSExportPreference}
   */
  epsExportPreferences: undefined,
  
  /*
   * PNG export preferences.
   * @type {PNGExportPreference}
   */
  pngExportPreferences: undefined,
  
  /*
   * A collection of PDF export preferences.
   * @type {PDFExportPreference}
   */
  pdfExportPreferences: undefined,
  
  /*
   * Interactive PDF export preferences.
   * @type {InteractivePDFExportPreference}
   */
  interactivePDFExportPreferences: undefined,
  
  /*
   * The PDF place preference properties that define how PDF files are placed in the current document.
   * @type {PDFPlacePreference}
   */
  pdfPlacePreferences: undefined,
  
  /*
   * Tagged PDF preferences.
   * @type {TaggedPDFPreference}
   */
  taggedPDFPreferences: undefined,
  
  /*
   * Lists the extensions of file types that can be placed.
   * @type {String}
   */
  placeableFileExtensions: undefined,
  
  /*
   * Lists the types of files that can be placed.
   * @type {String}
   */
  placeableFileTypes: undefined,
  
  /*
   * The links preference properties that define preferences for links.
   * @type {LinkingPreference}
   */
  linkingPreferences: undefined,
  
  /*
   * Grabber preference properties that define display performance quality during scrolling.
   * @type {GrabberPreference}
   */
  grabberPreferences: undefined,
  
  /*
   * The index options properties that define how an index is formatted.
   * @type {IndexOptions}
   */
  indexGenerationOptions: undefined,
  
  /*
   * Track changes preference settings.
   * @type {TrackChangesPreference}
   */
  trackChangesPreferences: undefined,
  
  /*
   * Export options for InCopy INCX document format.
   * @type {InCopyExportOption}
   */
  incopyExportOptions: undefined,
  
  /*
   * IME preference settings.
   * @type {IMEPreference}
   */
  imePreferences: undefined,
  
  /*
   * The image I/O preference properties that define preferences for importing images.
   * @type {ImageIOPreference}
   */
  imageIOPreferences: undefined,
  
  /*
   * Image preferences.
   * @type {ImagePreference}
   */
  imagePreferences: undefined,
  
  /*
   * Stroke/fill proxy settings.
   * @type {StrokeFillProxySetting}
   */
  strokeFillProxySettings: undefined,
  
  /*
   * Polygon preference properties to use to define default settings for creating a polygon.
   * @type {PolygonPreference}
   */
  polygonPreferences: undefined,
  
  /*
   * All object styles contained by the Application.
   * @type {ObjectStyle}
   */
  allObjectStyles: undefined,
  
  /*
   * The default page item formatting for the Application.
   * @type {PageItemDefault}
   */
  pageItemDefaults: undefined,
  
  /*
   * Preferences for alignment and distribution.
   * @type {AlignDistributePreference}
   */
  alignDistributePreferences: undefined,
  
  /*
   * The frame fitting option to apply to placed or pasted content. Can be applied to a frame, object style, or document or to the application.
   * @type {FrameFittingOption}
   */
  frameFittingOptions: undefined,
  
  /*
   * Button preference settings.
   * @type {ButtonPreference}
   */
  buttonPreferences: undefined,
  
  /*
   * EPS import preferences.
   * @type {EPSImportPreference}
   */
  epsImportPreferences: undefined,
  
  /*
   * Placed InDesign page attributes.
   * @type {ImportedPageAttribute}
   */
  importedPageAttributes: undefined,
  
  /*
   * SWF export preferences.
   * @type {SWFExportPreference}
   */
  swfExportPreferences: undefined,
  
  /*
   * XFL export preferences.
   * @type {XFLExportPreference}
   */
  xflExportPreferences: undefined,
  
  /*
   * The swatches that are not being used.
   * @type {Swatch}
   */
  unusedSwatches: undefined,
  
  /*
   * Watermark preferences
   * @type {WatermarkPreference}
   */
  watermarkPreferences: undefined,
  
  /*
   * The Content Placer. Used to get a reference to the content placer object.
   * @type {ContentPlacerObject}
   */
  contentPlacer: undefined,
  
  /*
   * Conditional text preferences.
   * @type {ConditionalTextPreference}
   */
  conditionalTextPreferences: undefined,
  
  /*
   * Color setting properties that define color management defaults.
   * @type {ColorSetting}
   */
  colorSettings: undefined,
  
  /*
   * Default properties specific to layout grids.
   * @type {LayoutGridDataInformation}
   */
  layoutGridData: undefined,
  
  /*
   * Default properties specific to frame grids.
   * @type {StoryGridDataInformation}
   */
  storyGridData: undefined,
  
  /*
   * CJK grid preference settings.
   * @type {CjkGridPreference}
   */
  cjkGridPreferences: undefined,
  
  /*
   * Grid printing preference and export settings.
   * @type {GridPrintingPreference}
   */
  gridPrintingPreferences: undefined,
  
  /*
   * Font locking preference settings.
   * @type {FontLockingPreference}
   */
  fontLockingPreferences: undefined,
  
  /*
   * Mojikumi user interface preference settings.
   * @type {MojikumiUiPreference}
   */
  mojikumiUIPreferences: undefined,
  
  /*
   * The name of the Application.
   * @type {String}
   */
  name: undefined,
  
  /*
   * The full path to the Application, including the name of the Application.
   * @type {File}
   */
  fullName: undefined,
  
  /*
   * The full path to the file.
   * @type {File}
   */
  filePath: undefined,
  
  /*
   * The application version.
   * @type {String}
   */
  version: undefined,
  
  /*
   * The locale of the application.
   * @type {Locale}
   */
  locale: undefined,
  
  /*
   * The current script running from the Scripts panel.
   * @type {File}
   */
  activeScript: undefined,
  
  /*
   * If true, the Application is visible.
   * @type {Boolean}
   */
  visible: undefined,
  
  /*
   * General preference settings.
   * @type {GeneralPreference}
   */
  generalPreferences: undefined,
  
  /*
   * Clipboard preference properties that define the way that the application interacts with the system clipboard.
   * @type {ClipboardPreference}
   */
  clipboardPreferences: undefined,
  
  /*
   * Transform preference properties that define default behaviors when transforming objects. Note: Transforming includes rotation, scaling, flipping, and shearing.
   * @type {TransformPreference}
   */
  transformPreferences: undefined,
  
  /*
   * If true, a modal dialog or alert is active.
   * @type {Boolean}
   */
  modalState: undefined,
  
  /*
   * The feature set.
   * @type {FeatureSetOptions}
   */
  featureSet: undefined,
  
  /*
   * The name of the action on the top of the undo stack.
   * @type {String}
   */
  undoName: undefined,
  
  /*
   * The name of the action on the top of the redo stack.
   * @type {String}
   */
  redoName: undefined,
  
  /*
   * The names of the items in the undo stack.
   * @type {String}
   */
  undoHistory: undefined,
  
  /*
   * The names of the items in the redo stack.
   * @type {String}
   */
  redoHistory: undefined,
  
  /*
   * The undo mode for the current script execution.
   * @type {UndoModes}
   */
  activeScriptUndoMode: undefined,
  
  /*
   * The user's serial number.
   * @type {String}
   */
  serialNumber: undefined,
  
  /*
   * The current user's adobe id
   * @type {String}
   */
  userAdobeId: undefined,
  
  /*
   * The current user's GUID
   * @type {String}
   */
  userGuid: undefined,
  
  /*
   * XML view preference settings.
   * @type {XMLViewPreference}
   */
  xmlViewPreferences: undefined,
  
  /*
   * The available performance metrics.
   * @type {Number}
   */
  performanceMetrics: undefined,
  
  /*
   * The current tool box states
   * @type {ToolBox}
   */
  toolBoxTools: undefined,
  
  /*
   * Display performance settings.
   * @type {DisplayPerformancePreference}
   */
  displayPerformancePreferences: undefined,
  
  /*
   * Galley preference settings.
   * @type {GalleyPreference}
   */
  galleyPreferences: undefined,
  
  /*
   * Text editing preference settings.
   * @type {TextEditingPreference}
   */
  textEditingPreferences: undefined,
  
  /*
   * Sync preference settings.
   * @type {SyncPreference}
   */
  syncPreferences: undefined,
  
  /*
   * Preflight option settings.
   * @type {PreflightOption}
   */
  preflightOptions: undefined,
  
  /*
   * Preflight book option settings.
   * @type {PreflightBookOption}
   */
  preflightBookOptions: undefined,
  
  /*
   * The list of all object types (strings) a preflight rule can operate on.
   * @type {String}
   */
  allPreflightObjectTypes: undefined,
  
  /*
   * The list of all categories that have been declared by rules.
   * @type {String}
   */
  allPreflightRuleCategories: undefined,
  
  /*
   * The list of all known (declared) rule IDs.
   * @type {String}
   */
  allPreflightRuleIDs: undefined,
  
  /*
   * The data merge option properties that define the data merge.
   * @type {DataMergeOption}
   */
  dataMergeOptions: undefined,
  
  /*
   * Layout sdjustment preference settings.
   * @type {LayoutAdjustmentPreference}
   */
  layoutAdjustmentPreferences: undefined,
  
  /*
   * Note preference settings.
   * @type {NotePreference}
   */
  notePreferences: undefined,
  
  /*
   * JPEG export preferences.
   * @type {JPEGExportPreference}
   */
  jpegExportPreferences: undefined,
  
  /*
   * Text import preferences.
   * @type {TextImportPreference}
   */
  textImportPreferences: undefined,
  
  /*
   * Text export preferences.
   * @type {TextExportPreference}
   */
  textExportPreferences: undefined,
  
  /*
   * Tagged text export preferences.
   * @type {TaggedTextExportPreference}
   */
  taggedTextExportPreferences: undefined,
  
  /*
   * Tagged text import preferences.
   * @type {TaggedTextImportPreference}
   */
  taggedTextImportPreferences: undefined,
  
  /*
   * Word and RTF import preferences.
   * @type {WordRTFImportPreference}
   */
  wordRTFImportPreferences: undefined,
  
  /*
   * Excel import preferences.
   * @type {ExcelImportPreference}
   */
  excelImportPreferences: undefined,
  
  /*
   * Returns true if the object specifier resolves to valid objects.
   * @type {Boolean}
   */
  isValid: undefined,
  
  /*
   * The parent of the Application (a Application).
   * @type {Application}
   */
  parent: undefined,
  
  /*
   * A collection of preferences objects.
   * @type {Preferences}
   */
  preferences: undefined,
  
  /*
   * A collection of XML export maps.
   * @type {XMLExportMaps}
   */
  xmlExportMaps: undefined,
  
  /*
   * A collection of XML import maps.
   * @type {XMLImportMaps}
   */
  xmlImportMaps: undefined,
  
  /*
   * A collection of XML rule processors.
   * @type {XMLRuleProcessors}
   */
  xmlRuleProcessors: undefined,
  
  /*
   * A collection of XML tags.
   * @type {XMLTags}
   */
  xmlTags: undefined,
  
  /*
   * A collection of transparency flattener presets.
   * @type {FlattenerPresets}
   */
  flattenerPresets: undefined,
  
  /*
   * A collection of user dictionaries.
   * @type {UserDictionaries}
   */
  userDictionaries: undefined,
  
  /*
   * A collection of paragraph style groups.
   * @type {ParagraphStyleGroups}
   */
  paragraphStyleGroups: undefined,
  
  /*
   * A collection of character style groups.
   * @type {CharacterStyleGroups}
   */
  characterStyleGroups: undefined,
  
  /*
   * A collection of character styles.
   * @type {CharacterStyles}
   */
  characterStyles: undefined,
  
  /*
   * A collection of paragraph styles.
   * @type {ParagraphStyles}
   */
  paragraphStyles: undefined,
  
  /*
   * A collection of text variables.
   * @type {TextVariables}
   */
  textVariables: undefined,
  
  /*
   * A collection of table styles.
   * @type {TableStyles}
   */
  tableStyles: undefined,
  
  /*
   * A collection of table style groups.
   * @type {TableStyleGroups}
   */
  tableStyleGroups: undefined,
  
  /*
   * A collection of cell styles.
   * @type {CellStyles}
   */
  cellStyles: undefined,
  
  /*
   * A collection of cell style groups.
   * @type {CellStyleGroups}
   */
  cellStyleGroups: undefined,
  
  /*
   * A collection of stroke styles.
   * @type {StrokeStyles}
   */
  strokeStyles: undefined,
  
  /*
   * A collection of dashed stroke styles.
   * @type {DashedStrokeStyles}
   */
  dashedStrokeStyles: undefined,
  
  /*
   * A collection of dotted stroke styles.
   * @type {DottedStrokeStyles}
   */
  dottedStrokeStyles: undefined,
  
  /*
   * A collection of striped stroke styles.
   * @type {StripedStrokeStyles}
   */
  stripedStrokeStyles: undefined,
  
  /*
   * A collection of document presets.
   * @type {DocumentPresets}
   */
  documentPresets: undefined,
  
  /*
   * A collection of auto-correct tables.
   * @type {AutoCorrectTables}
   */
  autoCorrectTables: undefined,
  
  /*
   * A collection of para style mappings.
   * @type {ParaStyleMappings}
   */
  paraStyleMappings: undefined,
  
  /*
   * A collection of char style mappings.
   * @type {CharStyleMappings}
   */
  charStyleMappings: undefined,
  
  /*
   * A collection of table style mappings.
   * @type {TableStyleMappings}
   */
  tableStyleMappings: undefined,
  
  /*
   * A collection of cell style mappings.
   * @type {CellStyleMappings}
   */
  cellStyleMappings: undefined,
  
  /*
   * A collection of events.
   * @type {Events}
   */
  events: undefined,
  
  /*
   * A collection of event listeners.
   * @type {EventListeners}
   */
  eventListeners: undefined,
  
  /*
   * All attachable idle tasks.
   * @type {IdleTasks}
   */
  idleTasks: undefined,
  
  /*
   * A collection of inks.
   * @type {Inks}
   */
  inks: undefined,
  
  /*
   * A collection of trap presets.
   * @type {TrapPresets}
   */
  trapPresets: undefined,
  
  /*
   * A collection of PDF export presets.
   * @type {PDFExportPresets}
   */
  pdfExportPresets: undefined,
  
  /*
   * A collection of languages with vendors.
   * @type {LanguagesWithVendors}
   */
  languagesWithVendors: undefined,
  
  /*
   * A collection of indexing sort options.
   * @type {IndexingSortOptions}
   */
  indexingSortOptions: undefined,
  
  /*
   * A collection of object style groups.
   * @type {ObjectStyleGroups}
   */
  objectStyleGroups: undefined,
  
  /*
   * A collection of object styles.
   * @type {ObjectStyles}
   */
  objectStyles: undefined,
  
  /*
   * A collection of transformation matrices.
   * @type {TransformationMatrices}
   */
  transformationMatrices: undefined,
  
  /*
   * A collection of fonts.
   * @type {Fonts}
   */
  fonts: undefined,
  
  /*
   * A collection of Motion presets.
   * @type {MotionPresets}
   */
  motionPresets: undefined,
  
  /*
   * A collection of documents.
   * @type {Documents}
   */
  documents: undefined,
  
  /*
   * A collection of swatches.
   * @type {Swatches}
   */
  swatches: undefined,
  
  /*
   * A collection of colors.
   * @type {Colors}
   */
  colors: undefined,
  
  /*
   * A collection of tints.
   * @type {Tints}
   */
  tints: undefined,
  
  /*
   * A collection of gradients.
   * @type {Gradients}
   */
  gradients: undefined,
  
  /*
   * A collection of mixed inks.
   * @type {MixedInks}
   */
  mixedInks: undefined,
  
  /*
   * A collection of mixed ink groups.
   * @type {MixedInkGroups}
   */
  mixedInkGroups: undefined,
  
  /*
   * A collection of dialogs.
   * @type {Dialogs}
   */
  dialogs: undefined,
  
  /*
   * A collection of conditions for conditional text.
   * @type {Conditions}
   */
  conditions: undefined,
  
  /*
   * A collection of condition sets for conditional text.
   * @type {ConditionSets}
   */
  conditionSets: undefined,
  
  /*
   * A collection of composite fonts.
   * @type {CompositeFonts}
   */
  compositeFonts: undefined,
  
  /*
   * A collection of named grids.
   * @type {NamedGrids}
   */
  namedGrids: undefined,
  
  /*
   * A collection of kinsoku tables.
   * @type {KinsokuTables}
   */
  kinsokuTables: undefined,
  
  /*
   * A collection of mojikumi tables.
   * @type {MojikumiTables}
   */
  mojikumiTables: undefined,
  
  /*
   * A collection of books.
   * @type {Books}
   */
  books: undefined,
  
  /*
   * A collection of numbered lists.
   * @type {NumberingLists}
   */
  numberingLists: undefined,
  
  /*
   * A collection of windows.
   * @type {Windows}
   */
  windows: undefined,
  
  /*
   * A collection of layout windows.
   * @type {LayoutWindows}
   */
  layoutWindows: undefined,
  
  /*
   * A collection of story windows.
   * @type {StoryWindows}
   */
  storyWindows: undefined,
  
  /*
   * A collection of panels.
   * @type {Panels}
   */
  panels: undefined,
  
  /*
   * A collection of background task objects.
   * @type {BackgroundTasks}
   */
  backgroundTasks: undefined,
  
  /*
   * A collection of menu actions.
   * @type {MenuActions}
   */
  menuActions: undefined,
  
  /*
   * A collection of script menu actions.
   * @type {ScriptMenuActions}
   */
  scriptMenuActions: undefined,
  
  /*
   * A collection of menus.
   * @type {Menus}
   */
  menus: undefined,
  
  /*
   * Display setting properties.
   * @type {DisplaySettings}
   */
  displaySettings: undefined,
  
  /*
   * A collection of preflight profiles.
   * @type {PreflightProfiles}
   */
  preflightProfiles: undefined,
  
  /*
   * A collection of preflight rules.
   * @type {PreflightRules}
   */
  preflightRules: undefined,
  
  /*
   * A collection of preflight processes.
   * @type {PreflightProcesses}
   */
  preflightProcesses: undefined,
  
  /*
   * A collection of object libraries.
   * @type {Libraries}
   */
  libraries: undefined,
  
  /*
   * A collection of printer presets.
   * @type {PrinterPresets}
   */
  printerPresets: undefined,
  
  /*
   * Find/change text options. Can also accept: NothingEnum enumerator.
   * @type {FindChangeTextOption}
   */
  findChangeTextOptions: undefined,
  
  /*
   * Find/change grep options. Can also accept: NothingEnum enumerator.
   * @type {FindChangeGrepOption}
   */
  findChangeGrepOptions: undefined,
  
  /*
   * Find/change glyph options. Can also accept: NothingEnum enumerator.
   * @type {FindChangeGlyphOption}
   */
  findChangeGlyphOptions: undefined,
  
  /*
   * Find/change object options. Can also accept: NothingEnum enumerator.
   * @type {FindChangeObjectOption}
   */
  findChangeObjectOptions: undefined,
  
  /*
   * Find text preferences. Can also accept: NothingEnum enumerator.
   * @type {FindTextPreference}
   */
  findTextPreferences: undefined,
  
  /*
   * Change text preferences. Can also accept: NothingEnum enumerator.
   * @type {ChangeTextPreference}
   */
  changeTextPreferences: undefined,
  
  /*
   * Find grep preferences. Can also accept: NothingEnum enumerator.
   * @type {FindGrepPreference}
   */
  findGrepPreferences: undefined,
  
  /*
   * Change grep preferences. Can also accept: NothingEnum enumerator.
   * @type {ChangeGrepPreference}
   */
  changeGrepPreferences: undefined,
  
  /*
   * Find glyph preferences. Can also accept: NothingEnum enumerator.
   * @type {FindGlyphPreference}
   */
  findGlyphPreferences: undefined,
  
  /*
   * Change glyph preferences. Can also accept: NothingEnum enumerator.
   * @type {ChangeGlyphPreference}
   */
  changeGlyphPreferences: undefined,
  
  /*
   * Find object preferences. Can also accept: NothingEnum enumerator.
   * @type {FindObjectPreference}
   */
  findObjectPreferences: undefined,
  
  /*
   * Change object preferences. Can also accept: NothingEnum enumerator.
   * @type {ChangeObjectPreference}
   */
  changeObjectPreferences: undefined,
  
  /*
   * Find/change transliterate options. Can also accept: NothingEnum enumerator.
   * @type {FindChangeTransliterateOption}
   */
  findChangeTransliterateOptions: undefined,
  
  /*
   * Find transliterate preferences. Can also accept: NothingEnum enumerator.
   * @type {FindTransliteratePreference}
   */
  findTransliteratePreferences: undefined,
  
  /*
   * Change transliterate preferences. Can also accept: NothingEnum enumerator.
   * @type {ChangeTransliteratePreference}
   */
  changeTransliteratePreferences: undefined,
  
  /*
   * The color assigned to the tracked changes and notes created by the user, specified either as an array of three doubles, each in the range 0 to 255 and representing R, G, and B values, or as an InCopy UI color. Can return: Array of 3 Reals (0 - 255) or InCopyUIColors enumerator.
   * @type {Mixed}
   */
  userColor: undefined,
  
  /*
   * The user associated with the tracked changes and notes.
   * @type {String}
   */
  userName: undefined,
  
  /*
   * Clear overrides first before applying object style
   * @type {Boolean}
   */
  clearOverridesWhenApplyingStyle: undefined,
  
  /*
   * The active book.
   * @type {Book}
   */
  activeBook: undefined,
  
  /*
   * The selected object(s). Can also accept: Object or NothingEnum enumerator.
   * @type {Object}
   */
  selection: undefined,
  
  /*
   * The front-most window. Can return: Window, LayoutWindow or StoryWindow.
   * @type {Mixed}
   */
  activeWindow: undefined,
  
  /*
   * Delay before mouse operations trigger live screen drawing of page items.
   * @type {LiveDrawingOptions}
   */
  liveScreenDrawing: undefined,
  
  /*
   * The key object of the selection. Can also accept: NothingEnum enumerator.
   * @type {PageItem}
   */
  selectionKeyObject: undefined,
  
  /*
   * The front-most document.
   * @type {Document}
   */
  activeDocument: undefined,
  
  /*
   * A property that can be set to any string.
   * @type {String}
   */
  label: undefined,
  
  /*
   * A property that allows setting of several properties at the same time.
   * @type {Object}
   */
  properties: undefined,
  
  /*
   * Deletes unused XML markup tags.
   */
  deleteUnusedTags: function() {
  },
  
  /*
   * Loads a set of XML markup tags from the specified file.
 *
   * @param {File} from The path to the file that contains the tags.
   */
  loadXMLTags: function(from) {
  },
  
  /*
   * Saves a set of tags to an external file.
 *
   * @param {File} to The full path to the file in which to save the tags.
   * @param {String} [versionComments] The comment for this version. 
   * @param {Boolean} [forceSave] If true, forcibly saves a version. 
   */
  saveXMLTags: function(to, versionComments, forceSave) {
  },
  
  /*
   * Mount a Version Cue project.
 *
   * @param {String} serverURL The URL of the Version Cue server containing the project
   * @param {String} projectName The name of the Version Cue project to mount
   */
  mountProject: function(serverURL, projectName) {
  },
  
  /*
   * Imports the specified styles.
 *
   * @param {ImportFormat} format The types of styles to import.
   * @param {File} from The file containing the styles you want to import.
   * @param {GlobalClashResolutionStrategy} [globalStrategy] The resolution strategy to employ for imported styles that have the same names as existing styles. 
   */
  importStyles: function(format, from, globalStrategy) {
  },
  
  /*
   * Exports stroke styles or presets.
 *
   * @param {File} to The file to save to
   * @param {StrokeStyle} strokeStyleList The list of stroke styles to save
   * @param {String} [versionComments] The comment for this version 
   * @param {Boolean} [forceSave] Forcibly save a version 
   */
  exportStrokeStyles: function(to, strokeStyleList, versionComments, forceSave) {
  },
  
  /*
   * Finds text that matches the find what value.
 *
   * @param {Boolean} [reverseOrder] If true, returns the results in reverse order. 
   * @returns {Text}
   */
  findText: function(reverseOrder) {
    return new Text();
  },
  
  /*
   * Finds text that matches the find what value and replaces the text with the change to value.
 *
   * @param {Boolean} [reverseOrder] If true, returns the results in reverse order. 
   * @returns {Text}
   */
  changeText: function(reverseOrder) {
    return new Text();
  },
  
  /*
   * Finds text that matches the find what value.
 *
   * @param {Boolean} [reverseOrder] If true, returns the results in reverse order. 
   * @returns {Text}
   */
  findGrep: function(reverseOrder) {
    return new Text();
  },
  
  /*
   * Finds text that matches the find what value and replaces the text with the change to value.
 *
   * @param {Boolean} [reverseOrder] If true, returns the results in reverse order. 
   * @returns {Text}
   */
  changeGrep: function(reverseOrder) {
    return new Text();
  },
  
  /*
   * Finds glyphs that match the find what value.
 *
   * @param {Boolean} [reverseOrder] If true, returns the results in reverse order. 
   * @returns {Text}
   */
  findGlyph: function(reverseOrder) {
    return new Text();
  },
  
  /*
   * Finds glyphs that match the find what value and replaces the glyphs with the change to value.
 *
   * @param {Boolean} [reverseOrder] If true, returns the results in reverse order. 
   * @returns {Text}
   */
  changeGlyph: function(reverseOrder) {
    return new Text();
  },
  
  /*
   * Finds objects that match the find what value.
 *
   * @param {Boolean} [reverseOrder] If true, returns the results in reverse order. 
   * @returns {PageItem}
   */
  findObject: function(reverseOrder) {
    return new PageItem();
  },
  
  /*
   * Finds objects that match the find what value and replace the objects with the change to value.
 *
   * @param {Boolean} [reverseOrder] If true, returns the results in reverse order. 
   * @returns {PageItem}
   */
  changeObject: function(reverseOrder) {
    return new PageItem();
  },
  
  /*
   * Saves the specified find/change query.
 *
   * @param {String} queryName The query to save.
   * @param {SearchModes} searchMode The search mode.
   */
  saveFindChangeQuery: function(queryName, searchMode) {
  },
  
  /*
   * Loads the specified find/change query.
 *
   * @param {String} queryName The query to load.
   * @param {SearchModes} searchMode The search mode.
   */
  loadFindChangeQuery: function(queryName, searchMode) {
  },
  
  /*
   * Deletes the specified find/change query.
 *
   * @param {String} queryName The query to delete.
   * @param {SearchModes} searchMode The search mode.
   */
  deleteFindChangeQuery: function(queryName, searchMode) {
  },
  
  /*
   * Finds text that matches the find character type value.
 *
   * @param {Boolean} [reverseOrder] If true, returns the results in reverse order. 
   * @returns {Text}
   */
  findTransliterate: function(reverseOrder) {
    return new Text();
  },
  
  /*
   * Finds text that matches the find character type value and replaces the text with the change character type value.
 *
   * @param {Boolean} [reverseOrder] If true, returns the results in reverse order. 
   * @returns {Text}
   */
  changeTransliterate: function(reverseOrder) {
    return new Text();
  },
  
  /*
   * Prints the specified file(s).
 *
   * @param {Mixed} from One or more file paths. Can accept: File or Array of Files.
   * @param {Boolean} [printDialog] Whether to invoke the print dialog 
   * @param {Mixed} [using] Printer preset to use. Can accept: PrinterPresetTypes enumerator or PrinterPreset. 
   */
  print: function(from, printDialog, using) {
  },
  
  /*
   * Export the presets to a file.
 *
   * @param {ExportPresetFormat} format The preset format.
   * @param {File} to The file to export to.
   * @param {String} [versionComments] The comments for this version. 
   * @param {Boolean} [forceSave] Forcibly save a version. 
   */
  exportPresets: function(format, to, versionComments, forceSave) {
  },
  
  /*
   * Imports presets from the specified file.
 *
   * @param {ExportPresetFormat} format The type of preset to import.
   * @param {File} from The file to import presets from.
   */
  importFile: function(format, from) {
  },
  
  /*
   * Place one or more files following the behavior of the place menu item. This may load the place gun or replace the selected object, depending on current preferences.
 *
   * @param {Mixed} fileName One or more files to place. Can accept: File or Array of Files.
   * @param {Boolean} [showingOptions] Whether to display the import options dialog 
   * @param {Object} [withProperties] Initial values for properties of the placed object(s) 
   */
  place: function(fileName, showingOptions, withProperties) {
  },
  
  /*
   * Removes the frame fittings options and resets it to the initial state.
   */
  clearFrameFittingOptions: function() {
  },
  
  /*
   * Forces a check for new fonts in the various Fonts folders.
   */
  updateFonts: function() {
  },
  
  /*
   * Load motion preset from the specified file.
 *
   * @param {File} from The Flash motion preset file.
   * @returns {MotionPreset}
   */
  loadMotionPreset: function(from) {
    return new MotionPreset();
  },
  
  /*
   * Cuts the selection in the active document window and stores it in the clipboard.
   */
  cut: function() {
  },
  
  /*
   * Copies the selection in the active document window to the clipboard.
   */
  copy: function() {
  },
  
  /*
   * Pastes data from the clipboard into the active document window.
   */
  paste: function() {
  },
  
  /*
   * Pastes data from the clipboard into the selected object in the active document window.
   */
  pasteInto: function() {
  },
  
  /*
   * Pastes data from the clipboard into the active document window at the same position that the data held in its original document.
   */
  pasteInPlace: function() {
  },
  
  /*
   * Pastes data (minus formatting) from the clipboard into the active document window.
   */
  pasteWithoutFormatting: function() {
  },
  
  /*
   * Load swatches from the specified file.
 *
   * @param {File} from The swatch file or InDesign document.
   */
  loadSwatches: function(from) {
  },
  
  /*
   * Saves the specified swatch(es) to a swatchbook file.
 *
   * @param {File} to The swatchbook file to save to.
   * @param {Swatch} swatchList The swatch(es) to save.
   * @param {String} [versionComments] The comment for this version. 
   * @param {Boolean} [forceSave] If true, forcibly saves a version. 
   */
  saveSwatches: function(to, swatchList, versionComments, forceSave) {
  },
  
  /*
   * Imports a spot color swatch from an Adobe color book.
 *
   * @param {String} name The spot color to load.
   * @returns {Color}
   */
  importAdobeSwatchbookSpotColor: function(name) {
    return new Color();
  },
  
  /*
   * Imports a process color swatch from a preloaded Adobe color book.
 *
   * @param {String} name The process color to load.
   * @returns {Color}
   */
  importAdobeSwatchbookProcessColor: function(name) {
    return new Color();
  },
  
  /*
   * Load conditions from the specified file.
 *
   * @param {File} from The path to the file that contains the conditions.
   * @param {Boolean} [loadConditionSets] If true, load the condition sets as well. 
   */
  loadConditions: function(from, loadConditionSets) {
  },
  
  /*
   * Selects the specified object(s).
 *
   * @param {Mixed} selectableItems The objects to select. Can accept: Object, Array of Objects, NothingEnum enumerator or SelectAll enumerator.
   * @param {SelectionOptions} [existingSelection] The selection status of the Application in relation to previously selected objects. 
   */
  select: function(selectableItems, existingSelection) {
  },
  
  /*
   * Applies the specified shortcut set file. No string will apply the default shortcut set.
 *
   * @param {String} [name] The shortcut set. 
   */
  applyShortcutSet: function(name) {
  },
  
  /*
   * Applies the specified workspace.
 *
   * @param {String} [name] The workspace. 
   */
  applyWorkspace: function(name) {
  },
  
  /*
   * Applies the specified menu customization set. An empty string will reset all menus and colorization (Show Full Menus). No string will apply the default menu set.
 *
   * @param {String} [name] The menu customization set. 
   */
  applyMenuCustomization: function(name) {
  },
  
  /*
   * Toggles the visibility of the entire panel system.
   */
  togglePanelSystemVisibility: function() {
  },
  
  /*
   * Opens the specified document, book, or library.
 *
   * @param {Mixed} from The file path(s) to the document, book, or library. Can accept: File or Array of Files.
   * @param {Boolean} [showingWindow] If true, opens the document in a window. If false, the document is opened but is not displayed in a window. 
   * @param {OpenOptions} [openOption] How to open the document. 
   * @returns {Mixed}
   */
  open: function(from, showingWindow, openOption) {
    return new Mixed();
  },
  
  /*
   * Quits the application.
 *
   * @param {SaveOptions} [saving] The option to use for saving changes to open documents before quitting. 
   */
  quit: function(saving) {
  },
  
  /*
   * Executes the script in the specified language as a single transaction.
 *
   * @param {Mixed} script The script to execute. Can accept: File, String or JavaScript Function.
   * @param {ScriptLanguage} [language] The language of the script to execute. If not specified, uses the language used to call this method. 
   * @param {any} [withArguments] An array of arguments passed to the script. 
   * @param {UndoModes} [undoMode] How to undo this script. 
   * @param {String} [undoName] The name of the undo step for entire script undo mode. 
   * @returns {any}
   */
  doScript: function(script, language, withArguments, undoMode, undoName) {
    return new any();
  },
  
  /*
   * Makes the application the front-most or active window.
   */
  activate: function() {
  },
  
  /*
   * Cascades all document windows.
   */
  cascadeWindows: function() {
  },
  
  /*
   * Sets the label to the value associated with the specified key.
 *
   * @param {String} key The key.
   * @param {String} value The value.
   */
  insertLabel: function(key, value) {
  },
  
  /*
   * Gets the label value associated with the specified key.
 *
   * @param {String} key The key.
   * @returns {String}
   */
  extractLabel: function(key) {
    return new String();
  },
  
  /*
   * Returns the locale-independent string(s) from the internal string localization database that correspond to the specified string (in the current locale).
 *
   * @param {String} for The string to search for.
   * @returns {String}
   */
  findKeyStrings: function(for) {
    return new String();
  },
  
  /*
   * Translates a key string into localized form based on current application locale.
 *
   * @param {String} for The key string to translate
   * @returns {String}
   */
  translateKeyString: function(for) {
    return new String();
  },
  
  /*
   * Undoes the last action.
   */
  undo: function() {
  },
  
  /*
   * Redoes the last action.
   */
  redo: function() {
  },
  
  /*
   * Tile all document windows
   */
  tileWindows: function() {
  },
  
  /*
   * Generate schema for IDML.
 *
   * @param {File} to The folder path of the schema.
   * @param {Boolean} [packageFormat] If true, generate schema for package format (multiple files). Default value is false. 
   */
  generateIDMLSchema: function(to, packageFormat) {
  },
  
  /*
   * Cancels all the background tasks.
   */
  cancelAllTasks: function() {
  },
  
  /*
   * Waits for all the background tasks to finish.
   * @returns {TaskState}
   */
  waitForAllTasks: function() {
    return new TaskState();
  },
  
  /*
   * Sets the application's preferences.
 *
   * @param {Mixed} applicationPreferences The IDML defaults file or enumeration. Can accept: File or LanguageAndRegion enumerator.
   */
  setApplicationPreferences: function(applicationPreferences) {
  },
  
  /*
   * Gets the current value of the specified performance metric.
 *
   * @param {Mixed} for The status to get from InDesign. Can accept: Long Integer or PerformanceMetricOptions enumerator.
   * @returns {Mixed}
   */
  performanceMetric: function(for) {
    return new Mixed();
  },
  
  /*
   * Dumps memory allocations from the specified mark.
 *
   * @param {Number} from The mark from which to dump memory.
   */
  dumpFromMemoryMark: function(from) {
  },
  
  /*
   * Dumps memory allocations from all marks in the specified range.
 *
   * @param {Number} from The first mark in the range.
   * @param {Number} to The last mark in the range.
   */
  dumpBetweenMemoryMarks: function(from, to) {
  },
  
  /*
   * Gets the memory statistics from the server.
   * @returns {Mixed}
   */
  memoryStatistics: function() {
    return new Mixed();
  },
  
  /*
   * Gets the short name of the specified performance metric.
 *
   * @param {Mixed} for The status to get from InDesign. Can accept: Long Integer or PerformanceMetricOptions enumerator.
   * @returns {String}
   */
  performanceMetricShortName: function(for) {
    return new String();
  },
  
  /*
   * Gets the long name of the specified performance metric.
 *
   * @param {Mixed} for The status to get from InDesign. Can accept: Long Integer or PerformanceMetricOptions enumerator.
   * @returns {String}
   */
  performanceMetricLongName: function(for) {
    return new String();
  },
  
  /*
   * Unpackage a UCF file into a folder structure.
 *
   * @param {File} ucfFile The UCF file to be unpackaged.
   * @param {File} destinationFolder The folder where you would like the UCF file unpackaged to. Will be created if it does not exist.
   */
  unpackageUCF: function(ucfFile, destinationFolder) {
  },
  
  /*
   * Package a folder into a UCF file.
 *
   * @param {File} sourceFolder The folder to be packaged into an IDML file. Does not validate structure of the folder pursuant to the IDML spec. Caller is responsible for making sure the files in the folder are correctly organized.
   * @param {File} ucfFile The destination UCF file. Will be overwritten if it already exists.
   * @param {String} [mimeMediaType] The MIME media type, default value identifies package as IDML. 
   */
  packageUCF: function(sourceFolder, ucfFile, mimeMediaType) {
  },
  
  /*
   * Load preflight profile from the specified file.
 *
   * @param {File} from The InDesign preflight profile file or InDesign document.
   * @returns {PreflightProfile}
   */
  loadPreflightProfile: function(from) {
    return new PreflightProfile();
  },
  
  /*
   * Export the specified documents to an article folio.Note: This method behaves identically to @method(exportMiniFolio), but differs in its return value. @method(exportMiniFolio) returns an array of warning strings whereas this method returns an XML structure.
 *
   * @param {File} destination The location to write the file.
   * @param {Document} portraitDocument The InDesign document for the stack's portrait orientation.
   * @param {Document} landscapeDocument The InDesign document for the stack's landscape orientation.
   * @param {Mixed} [folioMetadata] Optional meta data for the mini folio. Can accept: Ordered array containing key:String, value:String. 
   * @param {Mixed} [miniFolioParams] Options for exporting a mini folio. Can accept: Ordered array containing dataField:String, dataValue:Any Type. 
   * @returns {String}
   */
  exportArticleFolio: function(destination, portraitDocument, landscapeDocument, folioMetadata, miniFolioParams) {
    return new String();
  },
  
  /*
   * Get the current digital publishing version number for the given parameter.
 *
   * @param {DigpubVersion} digpubVersion Version string(s) to retrieve.
   * @returns {String}
   */
  getDigpubVersion: function(digpubVersion) {
    return new String();
  },
  
  /*
   * Get the list of viewer versions the digital publishing plugin supports.
   * @returns {String}
   */
  getSupportedViewerVersions: function() {
    return new String();
  },
  
  /*
   * Export the specified documents to a mini-folio.
 *
   * @param {File} destination The location to write the file.
   * @param {Document} portraitDocument The InDesign document for the stack's portrait orientation.
   * @param {Document} landscapeDocument The InDesign document for the stack's landscape orientation.
   * @param {Mixed} [folioMetadata] Optional meta data for the mini folio. Can accept: Ordered array containing key:String, value:String. 
   * @param {Mixed} [miniFolioParams] Options for exporting a mini folio. Can accept: Ordered array containing dataField:String, dataValue:Any Type. 
   * @returns {String}
   */
  exportMiniFolio: function(destination, portraitDocument, landscapeDocument, folioMetadata, miniFolioParams) {
    return new String();
  },
  
  /*
   * Export the selected documents to a compressed folio file that contains compressed mini folios.
 *
   * @param {File} destination The location to write the package.
   * @param {Mixed} miniFolioList The mini folio(es) to add to the folio. Can accept: File or Array of Files.
   * @param {Mixed} folioMetadata Meta data for the folio. Can accept: Ordered array containing key:String, value:String.
   * @param {Mixed} [exportFolioParams] Additional options for export folios. Can accept: Ordered array containing dataField:String, dataValue:Any Type. 
   */
  exportFolioToPackage: function(destination, miniFolioList, folioMetadata, exportFolioParams) {
  },
  
  /*
   * Export the selected documents to a directory.
 *
   * @param {File} destination The directory to write the folio.
   * @param {Mixed} miniFolioList The mini folio(es) to add to the folio. Can accept: File or Array of Files.
   * @param {Mixed} folioMetadata Meta data for the folio. Can accept: Ordered array containing key:String, value:String.
   * @param {Mixed} [exportFolioParams] Additional options for export folios. Can accept: Ordered array containing dataField:String, dataValue:Any Type. 
   */
  exportFolioToDirectory: function(destination, miniFolioList, folioMetadata, exportFolioParams) {
  },
  
  /*
   * Export the selected documents to a compressed folio file that contains non-compressed mini folios.
 *
   * @param {File} destination The location to write the package.
   * @param {Mixed} miniFolioList The mini folio(es) to add to the folio. Can accept: File or Array of Files.
   * @param {Mixed} folioMetadata Meta data for the folio. Can accept: Ordered array containing key:String, value:String.
   * @param {Mixed} [exportFolioParams] Additional options for export folios. Can accept: Ordered array containing dataField:String, dataValue:Any Type. 
   */
  exportFolioToDirectoryPackage: function(destination, miniFolioList, folioMetadata, exportFolioParams) {
  },
  
  /*
   * Get all overlays.
 *
   * @param {Document} portraitDocumentForCheckingOverlays The portrait document for checking overlays.
   * @param {Document} landscapeDocumentForCheckingOverlays The landscape document for checking overlays.
   * @param {Mixed} [miniFolioParams] Options for exporting a mini folio. Can accept: Ordered array containing dataField:String, dataValue:Any Type. 
   * @returns {Mixed}
   */
  getAllOverlays: function(portraitDocumentForCheckingOverlays, landscapeDocumentForCheckingOverlays, miniFolioParams) {
    return new Mixed();
  },
  
  /*
   * Create a mini-folio out of asset and overlay descriptions.Schema for the mini folio description:|| Key || Type || Required? || Description ||| contentstackid | string | yes | The explicit ID to be used for this stack || tocImage | file | no | The TOC image for the mini-folio || narrowdimension | int | no | Targetted export size, measured along narrow dimension || widedimension | int | no | Targetted export size, measured along wide dimension || smoothscrolling | @enum(SmoothScrollingOptions) | no | The smooth scrolling behavior for this stack (default is noSmoothScroll) || locationforgeneratedassets | file | no | If included, this is an existing directory where the generated assets should be created. || overlays | array | no | see the SDK Overlay Builder APIs || assets | array | yes | The assets for the mini - folio, described below. || assetDependencies | array | no | Files that are needed by the asset, that will be included in the package but not the manifest. || metadata | array | no | The metadata for the mini-folio described below. || showprogressbar | boolean | no | Either true or false to indicate whether we should show a progress bar &#40;default is false) || targetviewerversion | string | no | If provided &#40;in the form "major.minor.revision") a folio compatible with the viewer version is produced. If omitted, the latest folio format is produced. | CS5 |The following are fields in the array for "assets":|| Key || Type || Required? || Description ||| file | file | yes | The asset file || type | string | yes | The asset file type, either "web" for HTML or "image" for a raster || width | int | yes | The asset width || height | int | yes | The asset height || orientation | string | yes | The asset orientation, either "portrait" or "landscape" || thumbnail | file | no | A thumbnail of the asset to be used in browse mode || scrubber | file | no | A thumbnail of the asset to be used in scrubber mode |The following are fields in the array for "assetDependencies":|| Key || Type || Required? || Description ||| file | file | no | The dependent file || relativePath | string | no | The relative path to the file, for use in the package |The following are fields in the array for "metadata":|| Key || Type || Required? || Description ||| any string | string or boolean | no | any key/value where the key is a string, and the value is either a string or a boolean, such as those described in "export folio meta data" |
 *
   * @param {Mixed} miniFolioDescription A dictionary describing the custom mini folio to create. Can accept: Ordered array containing key:String, value:Boolean, Long Integer, Long Long Integer, String, File or Array of Any Types.
   * @param {File} destination The location to write the file.
   */
  createCustomMiniFolio: function(miniFolioDescription, destination) {
  },
  
  /*
   * Generates a string which, if executed, will return the Application.
   * @returns {String}
   */
  toSource: function() {
    return new String();
  },
  
  /*
   * Resolves the object specifier, creating an array of object references.
   * @returns {Application}
   */
  getElements: function() {
    return new Application();
  },
  
  /*
   * Retrieves the object specifier.
   * @returns {String}
   */
  toSpecifier: function() {
    return new String();
  },
  
  /*
   * Adds an event listener.
 *
   * @param {String} eventType The event type.
   * @param {Mixed} handler The event handler. Can accept: File or JavaScript Function.
   * @param {Boolean} [captures] This parameter is obsolete. 
   * @returns {EventListener}
   */
  addEventListener: function(eventType, handler, captures) {
    return new EventListener();
  },
  
  /*
   * Removes the event listener.
 *
   * @param {String} eventType The registered event type.
   * @param {Mixed} handler The registered event handler. Can accept: File or JavaScript Function.
   * @param {Boolean} [captures] This parameter is obsolete. 
   * @returns {Boolean}
   */
  removeEventListener: function(eventType, handler, captures) {
    return new Boolean();
  },
  
};
