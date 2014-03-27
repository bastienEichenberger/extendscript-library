/*
 * Options for index page references.
 */
var PageReferenceType = {
  /*
   * The page on which the index entry is located.
   * @type {Number}
   */
  CURRENT_PAGE: undefined,
  
  /*
   * The range of pages from the page containing the index entry to the page containing the next paragraph style change.
   * @type {Number}
   */
  TO_NEXT_STYLE_CHANGE: undefined,
  
  /*
   * The range of pages from the page containing the index entry to the page that contains the next occurrance of the specified paragraph style. If no paragraph style is specified, the paragraph style of the index entry paragraph is used.
   * @type {Number}
   */
  TO_NEXT_USE_OF_STYLE: undefined,
  
  /*
   * The last page in the story containing the index entry.
   * @type {Number}
   */
  TO_END_OF_STORY: undefined,
  
  /*
   * The last page in the document.
   * @type {Number}
   */
  TO_END_OF_DOCUMENT: undefined,
  
  /*
   * The last page in the numbered section containing the index entry.
   * @type {Number}
   */
  TO_END_OF_SECTION: undefined,
  
  /*
   * The range of pages from the page containing the index entry to the page containing the nth full paragraph from the paragraph containing the index entry (where n is the number of paragraphs to include).
   * @type {Number}
   */
  FOR_NEXT_N_PARAGRAPHS: undefined,
  
  /*
   * The range of pages from the page containing the inedex entry to the nth page after that page (where n is the number of pages to include).
   * @type {Number}
   */
  FOR_NEXT_N_PAGES: undefined,
  
  /*
   * Turns off page numbers for the index topic.
   * @type {Number}
   */
  SUPPRESS_PAGE_NUMBERS: undefined,
  
};
