/*
 * A document.
 */
var Document = {
  /*
   * Dispatched before a Document is printed. This event bubbles. This event is cancelable.
   * @type {String}
   */
  BEFORE_PRINT: undefined,
  
  /*
   * Dispatched after a Document is printed. This event bubbles. This event is not cancelable.
   * @type {String}
   */
  AFTER_PRINT: undefined,
  
  /*
   * Dispatched after one or more links in the Document have been added, deleted, or modified. This event bubbles. This event is not cancelable.
   * @type {String}
   */
  AFTER_LINKS_CHANGED: undefined,
  
  /*
   * Dispatched after a Document is created. This event bubbles. This event is not cancelable.
   * @type {String}
   */
  AFTER_NEW: undefined,
  
  /*
   * Dispatched after a Document is opened. This event bubbles. This event is not cancelable.
   * @type {String}
   */
  AFTER_OPEN: undefined,
  
  /*
   * Dispatched before a Document is saved. This event bubbles. This event is cancelable.
   * @type {String}
   */
  BEFORE_SAVE: undefined,
  
  /*
   * Dispatched after a Document is saved. This event bubbles. This event is not cancelable.
   * @type {String}
   */
  AFTER_SAVE: undefined,
  
  /*
   * Dispatched before a Document is saved under a new name. This event bubbles. This event is cancelable.
   * @type {String}
   */
  BEFORE_SAVE_AS: undefined,
  
  /*
   * Dispatched after a Document is saved under a new name. This event bubbles. This event is not cancelable.
   * @type {String}
   */
  AFTER_SAVE_AS: undefined,
  
  /*
   * Dispatched before a copy of a Document is saved. This event bubbles. This event is cancelable.
   * @type {String}
   */
  BEFORE_SAVE_A_COPY: undefined,
  
  /*
   * Dispatched after a copy of a Document is saved. This event bubbles. This event is not cancelable.
   * @type {String}
   */
  AFTER_SAVE_A_COPY: undefined,
  
  /*
   * Dispatched before a Document is reverted. This event bubbles. This event is cancelable.
   * @type {String}
   */
  BEFORE_REVERT: undefined,
  
  /*
   * Dispatched after a Document is reverted. This event bubbles. This event is not cancelable.
   * @type {String}
   */
  AFTER_REVERT: undefined,
  
  /*
   * Dispatched before a Document is closed. This event bubbles. This event is not cancelable.
   * @type {String}
   */
  BEFORE_CLOSE: undefined,
  
  /*
   * Dispatched before a Document is exported. This event bubbles. This event is cancelable.
   * @type {String}
   */
  BEFORE_EXPORT: undefined,
  
  /*
   * Dispatched after a Document is exported. This event bubbles. This event is not cancelable.
   * @type {String}
   */
  AFTER_EXPORT: undefined,
  
  /*
   * Dispatched after a Document export is canceled or fails. This event bubbles. This event is not cancelable.
   * @type {String}
   */
  FAILED_EXPORT: undefined,
  
  /*
   * Dispatched before importing a file into a Document. This event bubbles. This event is cancelable.
   * @type {String}
   */
  BEFORE_IMPORT: undefined,
  
  /*
   * Dispatched after importing a file into a Document. This event bubbles. This event is not cancelable.
   * @type {String}
   */
  AFTER_IMPORT: undefined,
  
  /*
   * Dispatched before the Document becomes inactive. This event bubbles. This event is not cancelable.
   * @type {String}
   */
  BEFORE_DEACTIVATE: undefined,
  
  /*
   * Dispatched after the Document becomes active. This event bubbles. This event is not cancelable.
   * @type {String}
   */
  AFTER_ACTIVATE: undefined,
  
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
   * The XML element associated with the Document.
   * @type {XMLItem}
   */
  associatedXMLElement: undefined,
  
  /*
   * The default export for web preferences.
   * @type {ExportForWebPreference}
   */
  exportForWebPreferences: undefined,
  
  /*
   * The Version Cue version state of the file.
   * @type {VersionState}
   */
  versionState: undefined,
  
  /*
   * The Version Cue editing state of the file.
   * @type {EditingState}
   */
  editingState: undefined,
  
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
   * Print preference settings.
   * @type {PrintPreference}
   */
  printPreferences: undefined,
  
  /*
   * Booklet printing options.
   * @type {PrintBookletOption}
   */
  printBookletOptions: undefined,
  
  /*
   * Print booklet preferences.
   * @type {PrintBookletPrintPreference}
   */
  printBookletPrintPreferences: undefined,
  
  /*
   * Tagged PDF preferences.
   * @type {TaggedPDFPreference}
   */
  taggedPDFPreferences: undefined,
  
  /*
   * The place gun.
   * @type {PlaceGun}
   */
  placeGuns: undefined,
  
  /*
   * Metadata preference settings.
   * @type {MetadataPreference}
   */
  metadataPreferences: undefined,
  
  /*
   * The index options properties that define how an index is formatted.
   * @type {IndexOptions}
   */
  indexGenerationOptions: undefined,
  
  /*
   * Lists all page items contained by the Document.
   * @type {PageItem}
   */
  allPageItems: undefined,
  
  /*
   * Lists all graphics contained by the Document.
   * @type {Graphic}
   */
  allGraphics: undefined,
  
  /*
   * All object styles contained by the Document.
   * @type {ObjectStyle}
   */
  allObjectStyles: undefined,
  
  /*
   * The default page item formatting for the Document.
   * @type {PageItemDefault}
   */
  pageItemDefaults: undefined,
  
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
   * The full path to the Document, including the name of the Document.
   * @type {File}
   */
  fullName: undefined,
  
  /*
   * The name of the Document.
   * @type {String}
   */
  name: undefined,
  
  /*
   * If true, the Document is visible.
   * @type {Boolean}
   */
  visible: undefined,
  
  /*
   * The full path to the file.
   * @type {File}
   */
  filePath: undefined,
  
  /*
   * If true, the Document has been modified since it was last saved.
   * @type {Boolean}
   */
  modified: undefined,
  
  /*
   * If true, the Document has been saved since it was created.
   * @type {Boolean}
   */
  saved: undefined,
  
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
   * If true, the Document was converted.
   * @type {Boolean}
   */
  converted: undefined,
  
  /*
   * If true, the Document was recovered.
   * @type {Boolean}
   */
  recovered: undefined,
  
  /*
   * If true, the Document is read-only.
   * @type {Boolean}
   */
  readOnly: undefined,
  
  /*
   * The unique ID of the Document.
   * @type {Number}
   */
  id: undefined,
  
  /*
   * Conditional text preferences.
   * @type {ConditionalTextPreference}
   */
  conditionalTextPreferences: undefined,
  
  /*
   * A list of valid CMYK profiles.
   * @type {String}
   */
  cmykProfileList: undefined,
  
  /*
   * A list of valid RGB profiles.
   * @type {String}
   */
  rgbProfileList: undefined,
  
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
   * Mojikumi user interface preference settings.
   * @type {MojikumiUiPreference}
   */
  mojikumiUIPreferences: undefined,
  
  /*
   * Chapter numbering preferences.
   * @type {ChapterNumberPreference}
   */
  chapterNumberPreferences: undefined,
  
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
   * XML view preference settings.
   * @type {XMLViewPreference}
   */
  xmlViewPreferences: undefined,
  
  /*
   * Galley preference settings.
   * @type {GalleyPreference}
   */
  galleyPreferences: undefined,
  
  /*
   * Preflight option settings.
   * @type {PreflightOption}
   */
  preflightOptions: undefined,
  
  /*
   * The active preflight process for this document.
   * @type {PreflightProcess}
   */
  activeProcess: undefined,
  
  /*
   * Data merge properties that define data merge fields and preferences.
   * @type {DataMerge}
   */
  dataMergeProperties: undefined,
  
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
   * EPub export preference settings.
   * @type {EPubExportPreference}
   */
  epubExportPreferences: undefined,
  
  /*
   * HTML export preference settings.
   * @type {HTMLExportPreference}
   */
  htmlExportPreferences: undefined,
  
  /*
   * Returns true if the object specifier resolves to valid objects.
   * @type {Boolean}
   */
  isValid: undefined,
  
  /*
   * The parent of the Document (a Application).
   * @type {Application}
   */
  parent: undefined,
  
  /*
   * The index of the Document within its containing object.
   * @type {Number}
   */
  index: undefined,
  
  /*
   * A collection of preferences objects.
   * @type {Preferences}
   */
  preferences: undefined,
  
  /*
   * A collection of XML elements.
   * @type {XMLElements}
   */
  xmlElements: undefined,
  
  /*
   * A collection of XML items.
   * @type {XMLItems}
   */
  xmlItems: undefined,
  
  /*
   * A collection of XML comments.
   * @type {XMLComments}
   */
  xmlComments: undefined,
  
  /*
   * A collection of XML instructions.
   * @type {XMLInstructions}
   */
  xmlInstructions: undefined,
  
  /*
   * A collection of DTDs.
   * @type {DTDs}
   */
  dtds: undefined,
  
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
   * A collection of xml stories.
   * @type {XmlStories}
   */
  xmlStories: undefined,
  
  /*
   * A collection of stories.
   * @type {Stories}
   */
  stories: undefined,
  
  /*
   * A collection of XML tags.
   * @type {XMLTags}
   */
  xmlTags: undefined,
  
  /*
   * A collection of XML validation errors.
   * @type {ValidationErrors}
   */
  validationErrors: undefined,
  
  /*
   * A collection of TOC styles.
   * @type {TOCStyles}
   */
  tocStyles: undefined,
  
  /*
   * A collection of hyphenation exceptions lists.
   * @type {HyphenationExceptions}
   */
  hyphenationExceptions: undefined,
  
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
   * A collection of pages.
   * @type {Pages}
   */
  pages: undefined,
  
  /*
   * A collection of spreads.
   * @type {Spreads}
   */
  spreads: undefined,
  
  /*
   * A collection of ellipses.
   * @type {Ovals}
   */
  ovals: undefined,
  
  /*
   * The spline items collection.
   * @type {SplineItems}
   */
  splineItems: undefined,
  
  /*
   * The page items collection, which can be used to process all page items in a container (such as a document, page, or group), regardless of type.
   * @type {PageItems}
   */
  pageItems: undefined,
  
  /*
   * A collection of rectangles.
   * @type {Rectangles}
   */
  rectangles: undefined,
  
  /*
   * A collection of graphic lines.
   * @type {GraphicLines}
   */
  graphicLines: undefined,
  
  /*
   * A collection of text frames.
   * @type {TextFrames}
   */
  textFrames: undefined,
  
  /*
   * A collection of polygons.
   * @type {Polygons}
   */
  polygons: undefined,
  
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
   * A collection of sections.
   * @type {Sections}
   */
  sections: undefined,
  
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
   * A collection of master spreads.
   * @type {MasterSpreads}
   */
  masterSpreads: undefined,
  
  /*
   * A collection of links.
   * @type {Links}
   */
  links: undefined,
  
  /*
   * A collection of languages.
   * @type {Languages}
   */
  languages: undefined,
  
  /*
   * A collection of layers.
   * @type {Layers}
   */
  layers: undefined,
  
  /*
   * A collection of indexes.
   * @type {Indexes}
   */
  indexes: undefined,
  
  /*
   * A collection of indexing sort options.
   * @type {IndexingSortOptions}
   */
  indexingSortOptions: undefined,
  
  /*
   * A collection of hyperlinks.
   * @type {Hyperlinks}
   */
  hyperlinks: undefined,
  
  /*
   * A collection of bookmarks.
   * @type {Bookmarks}
   */
  bookmarks: undefined,
  
  /*
   * A collection of hyperlink page item sources.
   * @type {HyperlinkPageItemSources}
   */
  hyperlinkPageItemSources: undefined,
  
  /*
   * A collection of hyperlink text sources.
   * @type {HyperlinkTextSources}
   */
  hyperlinkTextSources: undefined,
  
  /*
   * A collection of hyperlink text destinations.
   * @type {HyperlinkTextDestinations}
   */
  hyperlinkTextDestinations: undefined,
  
  /*
   * A collection of hyperlink page destinations.
   * @type {HyperlinkPageDestinations}
   */
  hyperlinkPageDestinations: undefined,
  
  /*
   * A collection of cross reference formats.
   * @type {CrossReferenceFormats}
   */
  crossReferenceFormats: undefined,
  
  /*
   * A collection of cross reference text sources.
   * @type {CrossReferenceSources}
   */
  crossReferenceSources: undefined,
  
  /*
   * A collection of paragraph destinations.
   * @type {ParagraphDestinations}
   */
  paragraphDestinations: undefined,
  
  /*
   * A collection of hyperlink external page destinations.
   * @type {HyperlinkExternalPageDestinations}
   */
  hyperlinkExternalPageDestinations: undefined,
  
  /*
   * A collection of hyperlink URL destinations.
   * @type {HyperlinkURLDestinations}
   */
  hyperlinkURLDestinations: undefined,
  
  /*
   * A collection of guides.
   * @type {Guides}
   */
  guides: undefined,
  
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
   * A collection of groups.
   * @type {Groups}
   */
  groups: undefined,
  
  /*
   * EPSTexts
   * @type {EPSTexts}
   */
  epstexts: undefined,
  
  /*
   * A collection of form fields.
   * @type {FormFields}
   */
  formFields: undefined,
  
  /*
   * A collection of buttons.
   * @type {Buttons}
   */
  buttons: undefined,
  
  /*
   * A collection of multi-state objects.
   * @type {MultiStateObjects}
   */
  multiStateObjects: undefined,
  
  /*
   * A collection of checkboxes.
   * @type {CheckBoxes}
   */
  checkBoxes: undefined,
  
  /*
   * A collection of comboboxes.
   * @type {ComboBoxes}
   */
  comboBoxes: undefined,
  
  /*
   * A collection of listboxes.
   * @type {ListBoxes}
   */
  listBoxes: undefined,
  
  /*
   * A collection of radio buttons.
   * @type {RadioButtons}
   */
  radioButtons: undefined,
  
  /*
   * A collection of text boxes.
   * @type {TextBoxes}
   */
  textBoxes: undefined,
  
  /*
   * A collection of signature fields.
   * @type {SignatureFields}
   */
  signatureFields: undefined,
  
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
   * A collection of numbered lists.
   * @type {NumberingLists}
   */
  numberingLists: undefined,
  
  /*
   * A collection of assignments.
   * @type {Assignments}
   */
  assignments: undefined,
  
  /*
   * A collection of articles.
   * @type {Articles}
   */
  articles: undefined,
  
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
   * A collection of preflight profiles.
   * @type {PreflightProfiles}
   */
  preflightProfiles: undefined,
  
  /*
   * A collection of data merge text placeholders.
   * @type {DataMergeTextPlaceholders}
   */
  dataMergeTextPlaceholders: undefined,
  
  /*
   * A collection of data merge image placeholders.
   * @type {DataMergeImagePlaceholders}
   */
  dataMergeImagePlaceholders: undefined,
  
  /*
   * The ruler origin, specified as page coordinates in the format [x, y].
   * @type {Mixed}
   */
  zeroPoint: undefined,
  
  /*
   * A property that can be set to any string.
   * @type {String}
   */
  label: undefined,
  
  /*
   * The active layer. Can also accept: String.
   * @type {Layer}
   */
  activeLayer: undefined,
  
  /*
   * The current CMYK profile.
   * @type {String}
   */
  cmykProfile: undefined,
  
  /*
   * The current RGB profile.
   * @type {String}
   */
  rgbProfile: undefined,
  
  /*
   * The rendering intent for all vector art (areas of solid color) in native objects.
   * @type {RenderingIntent}
   */
  solidColorIntent: undefined,
  
  /*
   * The rendering intent for colors that result from transparency interactions on the page after blending.
   * @type {RenderingIntent}
   */
  afterBlendingIntent: undefined,
  
  /*
   * The rendering intent for bitmap images.
   * @type {RenderingIntent}
   */
  defaultImageIntent: undefined,
  
  /*
   * The policy for handling colors in an RGB color model, including reading and embedding color profiles, handling mismatches between embedded color profiles and the working space, and moving colors from one document to another.
   * @type {ColorSettingsPolicy}
   */
  rgbPolicy: undefined,
  
  /*
   * The policy for handling colors in a CMYK color model, including reading and embedding color profiles, mismatches between embedded color profiles and the working space, and moving colors from one document to another.
   * @type {ColorSettingsPolicy}
   */
  cmykPolicy: undefined,
  
  /*
   * If true, uses LAB alternates for spot colors when available.
   * @type {Boolean}
   */
  accurateLABSpots: undefined,
  
  /*
   * The selected object(s). Can also accept: Object or NothingEnum enumerator.
   * @type {Object}
   */
  selection: undefined,
  
  /*
   * The key object of the selection. Can also accept: NothingEnum enumerator.
   * @type {PageItem}
   */
  selectionKeyObject: undefined,
  
  /*
   * A property that allows setting of several properties at the same time.
   * @type {Object}
   */
  properties: undefined,
  
  /*
   * Auto tag the document based on the style to tag mappings
   */
  mapStylesToXMLTags: function() {
  },
  
  /*
   * Auto style the document based on the tag to style mappings
   */
  mapXMLTagsToStyles: function() {
  },
  
  /*
   * Imports a DTD to use for validation.
 *
   * @param {File} from The path to the DTD file.
   */
  importDtd: function(from) {
  },
  
  /*
   * Imports the specified XML file into an InDesign document.
 *
   * @param {File} from The XML file.
   */
  importXML: function(from) {
  },
  
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
   * Change comoser to optyca
   */
  changeComposer: function() {
  },
  
  /*
   * Reverts to the version of the document in Version Cue.
 *
   * @param {Boolean} [forceRevert] Forcibly reverts to the project version. 
   */
  revertToProject: function(forceRevert) {
  },
  
  /*
   * Synchronizes the file with the Version Cue project.
 *
   * @param {SyncConflictResolution} [syncConflictResolution] The conflict resolution method to use during synchronization. 
   * @param {String} [versionComments] The comments that describe the version. 
   * @returns {VersionCueSyncStatus}
   */
  synchronizeWithVersionCue: function(syncConflictResolution, versionComments) {
    return new VersionCueSyncStatus();
  },
  
  /*
   * Check in to Version Cue.
 *
   * @param {String} [versionComments] The comment for this version 
   * @param {Boolean} [forceSave] Forcibly save a version 
   */
  checkIn: function(versionComments, forceSave) {
  },
  
  /*
   * Creates a table of contents.
 *
   * @param {TOCStyle} using The TOC style to use to define the content, title, and format of the table of contents.
   * @param {Boolean} [replacing] If true, replaces the existing TOC. 
   * @param {Book} [fromBook] The book whose documents to include in the TOC. 
   * @param {Mixed} [placePoint] The point at which to place the TOC story, specified as page coordinates in the format [x, y]. 
   * @param {Boolean} [includeOverset] If true, includes overset text TOC entries in the TOC. 
   * @param {Layer} [destinationLayer] The layer on which to place the TOC. 
   * @returns {Story}
   */
  createTOC: function(using, replacing, fromBook, placePoint, includeOverset, destinationLayer) {
    return new Story();
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
   * Recomposes the text in the Document.
   */
  recompose: function() {
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
   * Deprecated: Use ContentPlacerObject load method. Original Description: Place following the behavior of the place and link story menu item. This will load the place gun.
 *
   * @param {Story} parentStory The story to place and link from.
   * @param {Boolean} [showingOptions] Whether to display the link options dialog 
   */
  placeAndLink: function(parentStory, showingOptions) {
  },
  
  /*
   * Prints the Document(s).
 *
   * @param {Boolean} [printDialog] Whether to invoke the print dialog 
   * @param {Mixed} [using] Printer preset to use. Can accept: PrinterPresetTypes enumerator or PrinterPreset. 
   */
  print: function(printDialog, using) {
  },
  
  /*
   * Print the Booklet using current document and Booklet and Print settings in the document
 *
   * @param {Boolean} [printBookletDialog] Whether to invoke the print booklet dialog 
   * @param {Mixed} [using] Printer preset to use. Can accept: PrinterPresetTypes enumerator or PrinterPreset. 
   */
  printBooklet: function(printBookletDialog, using) {
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
   * Load masterpages from an InDesign file.
 *
   * @param {File} from The InDesign file to load the masters from.
   * @param {GlobalClashResolutionStrategyForMasterPage} [globalStrategyForMasterPage] the global clash resolution strategy for load master page 
   */
  loadMasters: function(from, globalStrategyForMasterPage) {
  },
  
  /*
   * Creates an alternate layout for a given list of spreads.
 *
   * @param {Spread} spreadItems The spreads to create an alternate layout for.
   * @param {String} name The name of the alternate layout. Note: This is used for the named layout for the new section for the duplicated spreads.
   * @param {Mixed} width The width of the pages created.
   * @param {Mixed} height The height of the pages created.
   * @param {Boolean} createTextStyles Whether to create new text styles.
   * @param {Boolean} linkTextStories Whether to create linked text for duplicated text stories.
   * @param {LayoutRuleOptions} layoutRule What layout rule to set on the pages.
   */
  createAlternateLayout: function(spreadItems, name, width, height, createTextStyles, linkTextStories, layoutRule) {
  },
  
  /*
   * Deletes an alternate layout.
 *
   * @param {String} name The name of the alternate layout to delete.
   */
  deleteAlternateLayout: function(name) {
  },
  
  /*
   * Imports the cross reference formats from specified file.
 *
   * @param {File} from The file whose formats to import.
   */
  importFormats: function(from) {
  },
  
  /*
   * Updates cross references' text source content in the document.
   */
  updateCrossReferences: function() {
  },
  
  /*
   * Align page items.
 *
   * @param {PageItem} alignDistributeItems The page items to align or distribute.
   * @param {AlignOptions} alignOption The type of alignment to apply.
   * @param {AlignDistributeBounds} [alignDistributeBounds] The bounds within which to align or distribute the page items. 
   * @param {PageItem} [reference] The reference or key object to align to distribute relative to. Required when 'align distribute bounds' specifies 'key object'. 
   */
  align: function(alignDistributeItems, alignOption, alignDistributeBounds, reference) {
  },
  
  /*
   * Distribute page items.
 *
   * @param {PageItem} alignDistributeItems The page items to align or distribute
   * @param {DistributeOptions} distributeOption The type of distribution to apply.
   * @param {AlignDistributeBounds} [alignDistributeBounds] The bounds within which to align or distribute the page items. 
   * @param {Boolean} [useDistributeMeasurement] If true, distribute space between page items. When this property is true, the bounds setting is ignored. 
   * @param {Mixed} [absoluteDistributeMeasurement] The distance to use when distributing page items. Required when 'align distribute bounds' specifies 'key object'. 
   * @param {PageItem} [reference] The reference or key object to align to distribute relative to. Required when 'align distribute bounds' specifies 'key object'. 
   */
  distribute: function(alignDistributeItems, distributeOption, alignDistributeBounds, useDistributeMeasurement, absoluteDistributeMeasurement, reference) {
  },
  
  /*
   * Removes the frame fittings options and resets it to the initial state.
   */
  clearFrameFittingOptions: function() {
  },
  
  /*
   * Resets all the multi-state objects to their first state.
   */
  resetAllMultiStateObjects: function() {
  },
  
  /*
   * Resets all the buttons to their Normal state.
   */
  resetAllButtons: function() {
  },
  
  /*
   * Create Plain Text QR Code on the page item
 *
   * @param {String} [plainText] QR code Plain Text  
   * @param {Mixed} [qrCodeSwatch] Swatch to be applied on generated QR Code Graphic . Can accept: Swatch or String. 
   * @param {String} [withProperties] Initial values for properties of the new Document. Above parameters can also be passed as properties 
   */
  createPlainTextQRCode: function(plainText, qrCodeSwatch, withProperties) {
  },
  
  /*
   * Create Hyperlink QR Code on the page item or document
 *
   * @param {String} [urlLink] QR code Hyperlink URL  
   * @param {Mixed} [qrCodeSwatch] Swatch to be applied on generated QR Code Graphic . Can accept: Swatch or String. 
   * @param {String} [withProperties] Initial values for properties of the new Document. Above parameters can also be passed as properties 
   */
  createHyperlinkQRCode: function(urlLink, qrCodeSwatch, withProperties) {
  },
  
  /*
   * Create Text Msg QR Code on the page item or document
 *
   * @param {String} [cellNumber] QR code Text Phone Number 
   * @param {String} [textMessage] QR code Text Message 
   * @param {Mixed} [qrCodeSwatch] Swatch to be applied on generated QR Code Graphic . Can accept: Swatch or String. 
   * @param {String} [withProperties] Initial values for properties of the new Document. Above parameters can also be passed as properties 
   */
  createTextMsgQRCode: function(cellNumber, textMessage, qrCodeSwatch, withProperties) {
  },
  
  /*
   * Create Email QR Code on the page item or document
 *
   * @param {String} [emailAddress] QR code Email Address 
   * @param {String} [subject] QR code Email Subject 
   * @param {String} [body] QR code Email Body Message 
   * @param {Mixed} [qrCodeSwatch] Swatch to be applied on generated QR Code Graphic . Can accept: Swatch or String. 
   * @param {String} [withProperties] Initial values for properties of the new Document. Above parameters can also be passed as properties 
   */
  createEmailQRCode: function(emailAddress, subject, body, qrCodeSwatch, withProperties) {
  },
  
  /*
   * Create Business Card QR Code on the page item or load on document's placegun
 *
   * @param {String} [firstName] QR code Business Card First Name 
   * @param {String} [lastName] QR code Business Card Last Name 
   * @param {String} [jobTitle] QR code Business Card Title 
   * @param {String} [cellPhone] QR code Business Card Cell Phone Number 
   * @param {String} [phone] QR code Business Card Phone Number 
   * @param {String} [email] QR code Business Card Email Address 
   * @param {String} [organisation] QR code Business Card Organisation 
   * @param {String} [streetAddress] QR code Business Card Street Address 
   * @param {String} [city] QR code Business Card City 
   * @param {String} [country] QR code Business Card Country 
   * @param {String} [postalCode] QR code Business Card Postal Code 
   * @param {String} [website] QR code Business Card URL 
   * @param {Mixed} [qrCodeSwatch] Swatch to be applied on generated QR Code Graphic . Can accept: Swatch or String. 
   * @param {String} [withProperties] Initial values for properties of the new Document. Above parameters can also be passed as properties 
   */
  createVCardQRCode: function(firstName, lastName, jobTitle, cellPhone, phone, email, organisation, streetAddress, city, country, postalCode, website, qrCodeSwatch, withProperties) {
  },
  
  /*
   * Close the Document
 *
   * @param {SaveOptions} [saving] Whether to save changes before closing the Document 
   * @param {File} [savingIn] The file in which to save the Document 
   * @param {String} [versionComments] The comment for this version 
   * @param {Boolean} [forceSave] Forcibly save a version 
   */
  close: function(saving, savingIn, versionComments, forceSave) {
  },
  
  /*
   * Save the document
 *
   * @param {File} [to] Where to save the document. If the document is already saved, a copy is saved at this path, the original file is closed the new copy is opened 
   * @param {Boolean} [stationery] Whether to save the file as stationery 
   * @param {String} [versionComments] The comment for this version 
   * @param {Boolean} [forceSave] Forcibly save a version 
   * @returns {Document}
   */
  save: function(to, stationery, versionComments, forceSave) {
    return new Document();
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
   * Sets the label to the value associated with the specified key.
 *
   * @param {String} key The key.
   * @param {String} value The value.
   */
  insertLabel: function(key, value) {
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
   * Exports the object(s) to a file.
 *
   * @param {Mixed} format The export format, specified as an enumeration value or as an extension that appears in the Save as type or Format menu in the Export dialog. Can accept: ExportFormat enumerator or String.
   * @param {File} to The path to the export file.
   * @param {Boolean} [showingOptions] If true, displays the export options dialog. 
   * @param {PDFExportPreset} [using] The export style. 
   * @param {String} [versionComments] The comment for this version. 
   * @param {Boolean} [forceSave] If true, forcibly saves a version. 
   */
  exportFile: function(format, to, showingOptions, using, versionComments, forceSave) {
  },
  
  /*
   * asynchronously exports the object(s) to a file.
 *
   * @param {Mixed} format The export format, specified as an enumeration value or as an extension that appears in the Save as type or Format menu in the Export dialog. Can accept: ExportFormat enumerator or String.
   * @param {File} to The path to the export file.
   * @param {Boolean} [showingOptions] If true, displays the export options dialog. 
   * @param {PDFExportPreset} [using] The export style. 
   * @param {String} [versionComments] The comment for this version. 
   * @param {Boolean} [forceSave] If true, forcibly saves a version. 
   * @returns {BackgroundTask}
   */
  asynchronousExportFile: function(format, to, showingOptions, using, versionComments, forceSave) {
    return new BackgroundTask();
  },
  
  /*
   * Reverts the document to its state at the last save operation.
   * @returns {Boolean}
   */
  revert: function() {
    return new Boolean();
  },
  
  /*
   * Saves a copy of the document.
 *
   * @param {File} [to] The file path for the copy. Note: Leaves the original document open and does not open the copy. 
   * @param {Boolean} [stationery] If true, saves the file as stationery (Mac OS) or as a template (Windows). Note: The file extension for stationery and templates is different than the extension for regular files. 
   */
  saveACopy: function(to, stationery) {
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
   * @param {SelectionOptions} [existingSelection] The selection status of the Document in relation to previously selected objects. 
   */
  select: function(selectableItems, existingSelection) {
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
   * Packages the document.
 *
   * @param {File} to The folder, alias, or path in which to place the packaged files.
   * @param {Boolean} copyingFonts If true, copies fonts used in the document to the package folder.
   * @param {Boolean} copyingLinkedGraphics If true, copies linked graphics files to the package folder.
   * @param {Boolean} copyingProfiles If true, copies color profiles to the package folder.
   * @param {Boolean} updatingGraphics If true, updates graphics links to the package folder.
   * @param {Boolean} includingHiddenLayers If true, copies fonts and links from hidden layers to the package.
   * @param {Boolean} ignorePreflightErrors If true, ignores preflight errors and proceeds with the packaging. If false, cancels the packaging when errors exist.
   * @param {Boolean} creatingReport If true, creates a package report that includes printing instructions, print settings, lists of fonts, links and required inks, and other information.
   * @param {String} [versionComments] The comments for the version. 
   * @param {Boolean} [forceSave] If true, forcibly saves a version. 
   * @returns {Boolean}
   */
  packageForPrint: function(to, copyingFonts, copyingLinkedGraphics, copyingProfiles, updatingGraphics, includingHiddenLayers, ignorePreflightErrors, creatingReport, versionComments, forceSave) {
    return new Boolean();
  },
  
  /*
   * Embed this profile to the document.
 *
   * @param {Mixed} using The preflight profile to embed. Can accept: String or PreflightProfile.
   * @returns {PreflightProfile}
   */
  embed: function(using) {
    return new PreflightProfile();
  },
  
  /*
   * This will return an array of structs containing information about the alternate layouts.
 *
   * @param {Boolean} [resolveMaster] Resolves layout policy if setting is "use master" - default is true. 
   * @returns {Mixed}
   */
  getAlternateLayoutsForFolio: function(resolveMaster) {
    return new Mixed();
  },
  
  /*
   * Generates a string which, if executed, will return the Document.
   * @returns {String}
   */
  toSource: function() {
    return new String();
  },
  
  /*
   * Resolves the object specifier, creating an array of object references.
   * @returns {Document}
   */
  getElements: function() {
    return new Document();
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
