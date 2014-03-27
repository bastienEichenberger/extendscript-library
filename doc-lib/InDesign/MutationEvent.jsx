/*
 * A mutation event is dispatched for attribute changes.
 */
var MutationEvent = {
  /*
   * Dispatched when the value of a property changes on this MutationEvent. This event bubbles. This event is not cancelable.
   * @type {String}
   */
  AFTER_ATTRIBUTE_CHANGED: undefined,
  
  /*
   * The name of the property that changed.
   * @type {String}
   */
  attributeName: undefined,
  
  /*
   * The current value of the property that changed.
   * @type {any}
   */
  attributeValue: undefined,
  
  /*
   * The name of the event.
   * @type {String}
   */
  eventType: undefined,
  
  /*
   * The target of the event.
   * @type {Object}
   */
  target: undefined,
  
  /*
   * The current propagation target of the event.
   * @type {Object}
   */
  currentTarget: undefined,
  
  /*
   * The current propagation phase of the event.
   * @type {EventPhases}
   */
  eventPhase: undefined,
  
  /*
   * If true, the event supports the bubbling phase of propagation.
   * @type {Boolean}
   */
  bubbles: undefined,
  
  /*
   * If true, the default behavior of the event on its target can be canceled.
   * @type {Boolean}
   */
  cancelable: undefined,
  
  /*
   * The time the event was initialized.
   * @type {Date}
   */
  timeStamp: undefined,
  
  /*
   * If true, propagation of the event beyond the current target has been stopped.
   * @type {Boolean}
   */
  propagationStopped: undefined,
  
  /*
   * If true, the default behavior of the event on its target has been canceled.
   * @type {Boolean}
   */
  defaultPrevented: undefined,
  
  /*
   * The unique ID of the MutationEvent.
   * @type {Number}
   */
  id: undefined,
  
  /*
   * Returns true if the object specifier resolves to valid objects.
   * @type {Boolean}
   */
  isValid: undefined,
  
  /*
   * The parent of the MutationEvent (a Object, UIDBasedObject, CellStyleGroup, CellStyle, TableStyleGroup, Article, ConditionSet, HiddenText, Condition, MotionPreset, AssignedStory, Assignment, ObjectStyleGroup, ObjectStyle, NumberingList, Snippet, Dialog, Swatch, Color, Tint, Gradient, MixedInkGroup, MixedInk, Behavior, SubmitFormBehavior, PrintFormBehavior, ClearFormBehavior, GotoPageBehavior, GotoAnchorBehavior, SoundBehavior, ViewZoomBehavior, GotoStateBehavior, GotoPreviousStateBehavior, GotoNextStateBehavior, OpenFileBehavior, AnimationBehavior, ShowHideFieldsBehavior, MovieBehavior, GotoURLBehavior, GotoPreviousViewBehavior, GotoNextViewBehavior, GotoPreviousPageBehavior, GotoNextPageBehavior, GotoLastPageBehavior, GotoFirstPageBehavior, PreflightProfileRule, PreflightRuleInstance, PreflightProfile, CrossReferenceFormat, HyperlinkURLDestination, HyperlinkExternalPageDestination, HyperlinkPageDestination, HyperlinkTextDestination, ParagraphDestination, HyperlinkTextSource, CrossReferenceSource, HyperlinkPageItemSource, Bookmark, Hyperlink, IndexSection, PageReference, CrossReference, Index, TOCStyle, FlattenerPreset, BookContent, MenuAction, ScriptMenuAction, NamedGrid, CompositeFontEntry, CompositeFont, CharacterStyleGroup, ParagraphStyleGroup, TextVariableInstance, Footnote, XMLRuleProcessor, XMLTag, Note, TableStyle, TextPath, Asset, Link, Section, MojikumiTable, KinsokuTable, Guide, LanguageWithVendors, Language, PageItem, HtmlItem, FormField, SignatureField, TextBox, RadioButton, ListBox, ComboBox, CheckBox, MultiStateObject, Button, MediaItem, Sound, Movie, EPSText, SplineItem, Polygon, GraphicLine, Rectangle, Oval, Graphic, ImportedPage, PICT, WMF, PDF, EPS, Image, Group, TextFrame, MasterSpread, TrapPreset, Ink, DocumentPreset, Page, Spread, Layer, CharacterStyle, ParagraphStyle, Story, XmlStory, IDBasedObject, ArticleChild, ArticleMember, DialogRow, DialogColumn, Widget, BorderPanel, MeasurementEditbox, MeasurementCombobox, RealCombobox, AngleEditbox, PercentEditbox, RealEditbox, PercentCombobox, AngleCombobox, EnablingGroup, IntegerCombobox, IntegerEditbox, RadiobuttonControl, RadiobuttonGroup, CheckboxControl, Dropdown, StaticText, TextEditbox, BackgroundTask, State, RuleDataObject, XMLItem, DTD, XMLInstruction, XMLComment, XMLElement, Table, Cell, IdleTask, Event, ImportExportEvent, DocumentEvent, MutationEvent, IdleEvent, PrintEvent, EventListener, StrokeStyle, StripedStrokeStyle, DottedStrokeStyle, DashedStrokeStyle, GraphicLayer, NonIDBasedObject, TableStyleMapping, CharStyleMapping, CellStyleMapping, ParaStyleMapping, TimingTarget, TimingGroup, TimingList, OpacityGradientStop, ObjectStyleExportTagMap, DataMergeField, DataMergeImagePlaceholder, DataMergeTextPlaceholder, Panel, LibraryPanel, PagesPanel, Window, StoryWindow, LayoutWindow, NavigationPoint, PreflightProcess, PreflightRule, BuildingBlock, DisplaySetting, IndexingSortOption, Topic, TOCStyleEntry, MenuElement, MenuSeparator, MenuItem, Submenu, Menu, StyleExportTagMap, TextVariable, XMLRuleMatchData, ValidationError, XMLExportMap, XMLImportMap, XMLAttribute, PrinterPreset, Row, Column, Change, RootObject, Document, Application, Book, Library, Preference, SyncPreference, ContentPlacerObject, LinkedPageItemOption, LinkedStoryOption, HTMLExportPreference, EPubExportPreference, ConditionalTextPreference, TimingSetting, AnimationSetting, XFLExportPreference, SWFExportPreference, AlignDistributePreference, GrabberPreference, ObjectStyleContentEffectsCategorySettings, ObjectStyleFillEffectsCategorySettings, ObjectStyleStrokeEffectsCategorySettings, ObjectStyleObjectEffectsCategorySettings, ChapterNumberPreference, NumberingRestartPolicy, Bullet, DataMerge, DataMergeOption, DataMergePreference, JPEGExportPreference, TrackChangesPreference, NotePreference, TransformPreference, ClipboardPreference, GeneralPreference, WatermarkPreference, ButtonPreference, PNGExportPreference, PreflightBookOption, PreflightOption, XMLViewPreference, DisplayPerformancePreference, IndexOptions, LinkMetadata, MetadataPreference, ExcelImportPreference, TaggedTextImportPreference, TaggedTextExportPreference, WordRTFImportPreference, TextExportPreference, TextImportPreference, FindChangeContentTransparencySetting, FindChangeFillTransparencySetting, FindChangeStrokeTransparencySetting, FindChangeTransparencySetting, GradientFeatherSetting, FindChangeGradientFeatherSetting, DirectionalFeatherSetting, FindChangeDirectionalFeatherSetting, ContentTransparencySetting, SatinSetting, FindChangeSatinSetting, BevelAndEmbossSetting, FindChangeBevelAndEmbossSetting, InnerGlowSetting, FindChangeInnerGlowSetting, OuterGlowSetting, FindChangeOuterGlowSetting, InnerShadowSetting, FindChangeInnerShadowSetting, FeatherSetting, FindChangeFeatherSetting, DropShadowSetting, FindChangeDropShadowSetting, BlendingSetting, FindChangeBlendingSetting, FillTransparencySetting, StrokeTransparencySetting, TransparencySetting, TransparencyPreference, FlattenerPreference, GalleyPreference, GridPrintingPreference, CjkGridPreference, StoryGridDataInformation, LayoutGridDataInformation, GridDataInformation, CaptionMetadataVariablePreference, CustomTextVariablePreference, MatchParagraphStylePreference, MatchCharacterStylePreference, FileNameVariablePreference, DateVariablePreference, ChapterNumberVariablePreference, PageNumberVariablePreference, FootnoteOption, BaselineFrameGridOption, AnchoredObjectSetting, AnchoredObjectDefault, ExportForWebPreference, XMLPreference, XMLExportPreference, XMLImportPreference, InCopyExportOption, LinkingPreference, ChangeTransliteratePreference, ChangeObjectPreference, ChangeGlyphPreference, ChangeGrepPreference, ChangeTextPreference, FindTransliteratePreference, FindObjectPreference, FindGlyphPreference, FindGrepPreference, FindTextPreference, FindChangeTransliterateOption, FindChangeObjectOption, FindChangeGlyphOption, FindChangeGrepOption, FindChangeTextOption, ColorSetting, ScriptArg, ScriptPreference, PlaceGun, LayoutAdjustmentPreference, StrokeFillProxySetting, ImportedPageAttribute, EPSImportPreference, SmartGuidePreference, AutoCorrectPreference, SpellPreference, PolygonPreference, DictionaryPreference, FontLockingPreference, MojikumiUiPreference, ContourOption, TextWrapPreference, TextEditingPreference, FrameFittingOption, ObjectExportOption, PageItemDefault, TaggedPDFPreference, InteractivePDFExportPreference, PDFAttribute, PDFPlacePreference, PDFExportPreference, IMEPreference, GraphicLayerOption, ClippingPathSettings, ImageIOPreference, ImagePreference, ToolBox, EPSExportPreference, PrintBookletPrintPreference, PrintBookletOption, PrintPreference, ViewPreference, PasteboardPreference, MarginPreference, GuidePreference, GridPreference, DocumentPreference, TextDefault, TextPreference, TextFramePreference, StoryPreference, PathPoint, Path, GradientStop, AutoCorrectTable, UserDictionary, HyphenationException, Font, TransformationMatrix, PDFExportPreset, NestedStyle, TabStop, Text, InsertionPoint, TextStyleRange, Paragraph, TextColumn, Line, Word, Character, NestedGrepStyle or NestedLineStyle).
   * @type {Mixed}
   */
  parent: undefined,
  
  /*
   * The index of the MutationEvent within its containing object.
   * @type {Number}
   */
  index: undefined,
  
  /*
   * A property that allows setting of several properties at the same time.
   * @type {Object}
   */
  properties: undefined,
  
  /*
   * Stops propagation of the event beyond the current target.
   */
  stopPropagation: function() {
  },
  
  /*
   * Cancels the default behavior of the event on its target.
   */
  preventDefault: function() {
  },
  
  /*
   * Generates a string which, if executed, will return the MutationEvent.
   * @returns {String}
   */
  toSource: function() {
    return new String();
  },
  
  /*
   * Resolves the object specifier, creating an array of object references.
   * @returns {MutationEvent}
   */
  getElements: function() {
    return new MutationEvent();
  },
  
  /*
   * Retrieves the object specifier.
   * @returns {String}
   */
  toSpecifier: function() {
    return new String();
  },
  
};
