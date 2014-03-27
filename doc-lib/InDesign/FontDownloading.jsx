/*
 * Options for downloading fonts to the printer.
 */
var FontDownloading = {
  /*
   * Downloads only references to fonts. Note: Use when fonts reside in the printer.
   * @type {Number}
   */
  NONE: undefined,
  
  /*
   * Downloads all fonts once per page.
   * @type {Number}
   */
  COMPLETE: undefined,
  
  /*
   * Downloads only the characters (glyphs) used in the document. Glyphs are downloaded once per page.
   * @type {Number}
   */
  SUBSET: undefined,
  
  /*
   * Downloads only the characters (glyphs) used in the document. Glyphs are downloaded once per page. Note: Use when the number of glyphs exceeds 350.
   * @type {Number}
   */
  SUBSET_LARGE: undefined,
  
};
