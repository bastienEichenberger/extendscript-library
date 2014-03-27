/*
 * A range of characters from a text item.
 */
var TextRange = {
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
   * Offset of the first character of the range from the beginning of the story, in characters.
   * @type {Int32}
   */
  characterOffset: undefined,
  
  /*
   * Length of text range.
   * @type {Int32}
   */
  length: undefined,
  
  /*
   * The text string.
   * @type {String}
   */
  contents: undefined,
  
  /*
   * Controls the spacing between two characters (in milli-ems)
   * @type {Int32}
   */
  kerning: undefined,
  
  /*
   * The story of the text range.
   * @type {Story}
   */
  story: undefined,
  
  /*
   * The selected text (ranges) in the text range.
   * @type {TextRange}
   */
  textSelection: undefined,
  
  /*
   * All the characters in this text range.
   * @type {Characters}
   */
  characters: undefined,
  
  /*
   * All the words in this text range.
   * @type {Words}
   */
  words: undefined,
  
  /*
   * All the lines in this text range.
   * @type {Lines}
   */
  lines: undefined,
  
  /*
   * All the paragraphs in this text range.
   * @type {Paragraphs}
   */
  paragraphs: undefined,
  
  /*
   * All the text in this text range.
   * @type {TextRanges}
   */
  textRanges: undefined,
  
  /*
   * All the insertion points in this text range.
   * @type {InsertionPoints}
   */
  insertionPoints: undefined,
  
  /*
   * List of referenced character styles in the text range.
   * @type {CharacterStyles}
   */
  characterStyles: undefined,
  
  /*
   * List of referenced paragraph styles in the text range.
   * @type {ParagraphStyles}
   */
  paragraphStyles: undefined,
  
  /*
   * The character properties for the text range.
   * @type {CharacterAttributes}
   */
  characterAttributes: undefined,
  
  /*
   * The paragraph properties for the text range.
   * @type {ParagraphAttributes}
   */
  paragraphAttributes: undefined,
  
  /*
   * Move the object.
 *
   * @param {Object} relativeObject undefined
   * @param {ElementPlacement} insertionLocation undefined
   * @returns {TextRange}
   */
  move: function(relativeObject, insertionLocation) {
    return new TextRange();
  },
  
  /*
   * Duplicate this object.
 *
   * @param {Object} relativeObject undefined
   * @param {ElementPlacement} insertionLocation undefined
   * @returns {TextRange}
   */
  duplicate: function(relativeObject, insertionLocation) {
    return new TextRange();
  },
  
  /*
   * Deletes this object.
   */
  remove: function() {
  },
  
  /*
   * Deletes all elements.
   */
  removeAll: function() {
  },
  
  /*
   * Select the text range.
 *
   * @param {Boolean} [addToDocument] Whether to add the text range to the document text selection.
   */
  select: function(addToDocument) {
  },
  
  /*
   * Deselect the text range.
   */
  deSelect: function() {
  },
  
  /*
   * Change the capitalization of text.
 *
   * @param {CaseChangeType} type The type of case.
   */
  changeCaseTo: function(type) {
  },
  
};
