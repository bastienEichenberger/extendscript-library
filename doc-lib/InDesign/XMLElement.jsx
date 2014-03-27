/*
 * An XML element.
 */
var XMLElement = {
  /*
   * The insertion point before the table in the story containing the table.
   * @type {InsertionPoint}
   */
  storyOffset: undefined,
  
  /*
   * The story that contains the text.
   * @type {Story}
   */
  parentStory: undefined,
  
  /*
   * The text content or page item referred to by the element. Can return: Text, Story, PageItem, Movie, Sound, Graphic, Table or Cell.
   * @type {Mixed}
   */
  xmlContent: undefined,
  
  /*
   * The unique ID of the XMLElement.
   * @type {Number}
   */
  id: undefined,
  
  /*
   * Returns true if the object specifier resolves to valid objects.
   * @type {Boolean}
   */
  isValid: undefined,
  
  /*
   * The parent of the XMLElement (a Document or XMLElement).
   * @type {Mixed}
   */
  parent: undefined,
  
  /*
   * The index of the XMLElement within its containing object.
   * @type {Number}
   */
  index: undefined,
  
  /*
   * A collection of XML attributes.
   * @type {XMLAttributes}
   */
  xmlAttributes: undefined,
  
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
   * The page items collection, which can be used to process all page items in a container (such as a document, page, or group), regardless of type.
   * @type {PageItems}
   */
  pageItems: undefined,
  
  /*
   * A collection of bitmap images in any bitmap file format (including TIFF, JPEG, or GIF).
   * @type {Images}
   */
  images: undefined,
  
  /*
   * A collection of imported graphics in any graphic file format (vector, metafile, or bitmap).
   * @type {Graphics}
   */
  graphics: undefined,
  
  /*
   * A collection of EPS files.
   * @type {EPSs}
   */
  epss: undefined,
  
  /*
   * A collection of WMF graphics.
   * @type {WMFs}
   */
  wmfs: undefined,
  
  /*
   * A collection of PICT graphics.
   * @type {PICTs}
   */
  picts: undefined,
  
  /*
   * A collection of PDF files.
   * @type {PDFs}
   */
  pdfs: undefined,
  
  /*
   * A collection of stories.
   * @type {Stories}
   */
  stories: undefined,
  
  /*
   * A collection of tables.
   * @type {Tables}
   */
  tables: undefined,
  
  /*
   * A collection of table cells.
   * @type {Cells}
   */
  cells: undefined,
  
  /*
   * A collection of text objects.
   * @type {Texts}
   */
  texts: undefined,
  
  /*
   * A collection of characters.
   * @type {Characters}
   */
  characters: undefined,
  
  /*
   * A collection of words.
   * @type {Words}
   */
  words: undefined,
  
  /*
   * A collection of lines.
   * @type {Lines}
   */
  lines: undefined,
  
  /*
   * A collection of text columns.
   * @type {TextColumns}
   */
  textColumns: undefined,
  
  /*
   * A collection of paragraphs.
   * @type {Paragraphs}
   */
  paragraphs: undefined,
  
  /*
   * A collection of insertion points.
   * @type {InsertionPoints}
   */
  insertionPoints: undefined,
  
  /*
   * A collection of text style ranges.
   * @type {TextStyleRanges}
   */
  textStyleRanges: undefined,
  
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
   * The XML tag applied to the element. Can also accept: String.
   * @type {XMLTag}
   */
  markupTag: undefined,
  
  /*
   * The contents of the text. Can return: String or SpecialCharacters enumerator.
   * @type {Mixed}
   */
  contents: undefined,
  
  /*
   * A property that allows setting of several properties at the same time.
   * @type {Object}
   */
  properties: undefined,
  
  /*
   * Moves the element to the specified location.
 *
   * @param {LocationOptions} to The location in relation to the reference object or within the containing object.
   * @param {Mixed} [reference] The reference object. Note: Required when the to parameter specifies before or after. . Can accept: XMLItem or Text. 
   * @returns {XMLElement}
   */
  move: function(to, reference) {
    return new XMLElement();
  },
  
  /*
   * Duplicates the XMLElement.
   * @returns {XMLElement}
   */
  duplicate: function() {
    return new XMLElement();
  },
  
  /*
   * Associates the object with the specified XML element while preserving existing content.
 *
   * @param {Mixed} using The object to mark up. Can accept: PageItem, Movie, Sound, Graphic, Story, Text or Table.
   */
  markup: function(using) {
  },
  
  /*
   * Places XML content into the story, replacing the existing content.
 *
   * @param {Mixed} using The object to place into. Can accept: Story, PageItem, Graphic, Movie or Sound.
   */
  placeXML: function(using) {
  },
  
  /*
   * Untags an element.
   */
  untag: function() {
  },
  
  /*
   * Validates the element against a DTD.
 *
   * @param {Number} [maximumErrors] The maximum number of validation errors to generate. 
   * @returns {ValidationError}
   */
  validate: function(maximumErrors) {
    return new ValidationError();
  },
  
  /*
   * Applies the specified paragraph style to the text content of the XMLElement.
 *
   * @param {Mixed} using The paragraph style to apply. Can accept: String or ParagraphStyle.
   * @param {Boolean} [clearingOverrides] If true, clears any attributes before applying the style. 
   */
  applyParagraphStyle: function(using, clearingOverrides) {
  },
  
  /*
   * Applies the specified character style to the text content of the XMLElement.
 *
   * @param {Mixed} using The character style to apply. Can accept: String or CharacterStyle.
   */
  applyCharacterStyle: function(using) {
  },
  
  /*
   * Converts the XMLElement to an attribute of its parent element.
 *
   * @param {String} [using] The name to give to the new attribute. 
   * @returns {XMLAttribute}
   */
  convertToAttribute: function(using) {
    return new XMLAttribute();
  },
  
  /*
   * Converts the content of the XML element to a table.
 *
   * @param {XMLTag} rowTag The XML tag that indicates a table row.
   * @param {XMLTag} cellTag The XML tag that indicates a table cell.
   * @returns {Table}
   */
  convertElementToTable: function(rowTag, cellTag) {
    return new Table();
  },
  
  /*
   * Places an XML element into an inline frame.
 *
   * @param {Mixed} dimensions The dimensions of the inline frame in the format [width, height].
   * @returns {PageItem}
   */
  placeIntoInlineFrame: function(dimensions) {
    return new PageItem();
  },
  
  /*
   * Associates an existing page item with the XML element and places it into an inline frame.
 *
   * @param {PageItem} copyItem The page item to copy.
   * @param {Boolean} [retainExistingFrame] If true, moves the existing page item. If false, moves a copy of the page item. 
   * @returns {PageItem}
   */
  placeIntoInlineCopy: function(copyItem, retainExistingFrame) {
    return new PageItem();
  },
  
  /*
   * Replaces the content of XML element with content imported from a file.
 *
   * @param {String} using The file path to the import file.
   * @param {String} [relativeBasePath] Base path used to resolve relative paths. 
   * @returns {PageItem}
   */
  setContent: function(using, relativeBasePath) {
    return new PageItem();
  },
  
  /*
   * Inserts the specified text as content before, in, or after the XML element.
 *
   * @param {Mixed} using The text to be inserted. Can accept: String or SpecialCharacters enumerator.
   * @param {XMLElementPosition} position The position at which to insert the text. Note that text inserted before or after the element does not become part of the content of the element. Instead, it becomes content of the parent of the element.
   * @returns {Text}
   */
  insertTextAsContent: function(using, position) {
    return new Text();
  },
  
  /*
   * Applies a table style to the table associated with the XMLElement.
 *
   * @param {Mixed} using The table style to apply. Can accept: String or TableStyle.
   * @param {Boolean} [clearingOverrides] If true, removes local formatting before applying the table style. 
   */
  applyTableStyle: function(using, clearingOverrides) {
  },
  
  /*
   * Applies a cell style to the table cells associated with the XMLElement.
 *
   * @param {Mixed} using The cell style to apply. Can accept: String or CellStyle.
   * @param {Boolean} [clearingOverrides] If true, removes local formatting before applying the cell style. 
   */
  applyCellStyle: function(using, clearingOverrides) {
  },
  
  /*
   * Applies an object style to the frame associated with the XMLElement.
 *
   * @param {Mixed} using The object style to apply. Can accept: String or ObjectStyle.
   * @param {Boolean} [clearingOverrides] If true, removes local formatting before applying the object style. 
   * @param {Boolean} [clearingOverridesThroughRootObjectStyle] If true, clears unchecked category attributes through the root style. 
   */
  applyObjectStyle: function(using, clearingOverrides, clearingOverridesThroughRootObjectStyle) {
  },
  
  /*
   * Places the XML element into a new rectangular page item. If the XML element was already associated with a page item, that page item is deleted.
 *
   * @param {Mixed} on The page or spread on which to create the new page item. Can accept: Spread, Page or MasterSpread.
   * @param {Mixed} geometricBounds The bounds of the page item excluding the stroke width, in the format [y1, x1, y2, x2].
   * @returns {PageItem}
   */
  placeIntoFrame: function(on, geometricBounds) {
    return new PageItem();
  },
  
  /*
   * Associates the XML element with a copy of a page item.
 *
   * @param {Mixed} on The page or spread on which to create the new page item. Can accept: Spread, Page or MasterSpread.
   * @param {Mixed} placePoint The page coordinates of the top left corner of the page item, in the format [y1, x1]
   * @param {PageItem} copyItem The page item to copy.
   * @param {Boolean} [retainExistingFrame] If true, associates the XML element with the existing page item and moves the page item (rather than a copy of the page item). 
   * @returns {PageItem}
   */
  placeIntoCopy: function(on, placePoint, copyItem, retainExistingFrame) {
    return new PageItem();
  },
  
  /*
   * Imports the specified XML file into an InDesign document.
 *
   * @param {File} from The XML file.
   */
  importXML: function(from) {
  },
  
  /*
   * Evaluates an XPath expression starting at this XML element in the structure.
 *
   * @param {String} using The XPath expression.
   * @param {Mixed} [prefixMappingTable] The namespace mapping table. Can accept: Array of Arrays of 2 Strings. 
   * @returns {XMLItem}
   */
  evaluateXPathExpression: function(using, prefixMappingTable) {
    return new XMLItem();
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
   * Stores the object in the specified library.
 *
   * @param {Library} using The library in which to store the object.
   * @param {Object} [withProperties] Initial values for properties of the new XMLElement 
   * @returns {Asset}
   */
  store: function(using, withProperties) {
    return new Asset();
  },
  
  /*
   * Deletes the XMLElement.
   */
  remove: function() {
  },
  
  /*
   * Selects the object.
 *
   * @param {SelectionOptions} [existingSelection] The selection status of the XMLElement in relation to previously selected objects. 
   */
  select: function(existingSelection) {
  },
  
  /*
   * Generates a string which, if executed, will return the XMLElement.
   * @returns {String}
   */
  toSource: function() {
    return new String();
  },
  
  /*
   * Resolves the object specifier, creating an array of object references.
   * @returns {XMLElement}
   */
  getElements: function() {
    return new XMLElement();
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
