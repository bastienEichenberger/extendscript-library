/*
 * The print job options.
 */
var PrintJobOptions = {
  /*
   * The layers/objects to be printed.
   * @type {PrintArtworkDesignation}
   */
  designation: undefined,
  
  /*
   * The printing bounds.
   * @type {PrintingBounds}
   */
  printArea: undefined,
  
  /*
   * The number of copies to print.
   * @type {Int32}
   */
  copies: undefined,
  
  /*
   * Print pages in reverse order.
   * @type {Boolean}
   */
  reversePages: undefined,
  
  /*
   * Whether to collate print pages.
   * @type {Boolean}
   */
  collate: undefined,
  
  /*
   * The file to be printed to.
   * @type {File}
   */
  file: undefined,
  
  /*
   * Whether to print as bitmap.
   * @type {Boolean}
   */
  printAsBitmap: undefined,
  
  /*
   * The bitmap resolution.
   * @type {Number}
   */
  bitmapResolution: undefined,
  
  /*
   * The print job name.
   * @type {String}
   */
  name: undefined,
  
  /*
   * Whether to print all artboards.
   * @type {Boolean}
   */
  printAllArtboards: undefined,
  
  /*
   * Artboard Range to be printed if PrintAllArtboards is false.
   * @type {String}
   */
  artboardRange: undefined,
  
};
