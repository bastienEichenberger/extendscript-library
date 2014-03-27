/*
 * Print settings for a document.
 */
var DocumentPrintSettings = {
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
   * Description field from File Info.
   * @type {Boolean}
   */
  caption: undefined,
  
  /*
   * Prints the document title.
   * @type {Boolean}
   */
  labels: undefined,
  
  /*
   * Print corner crop marks.
   * @type {Boolean}
   */
  cornerCropMarks: undefined,
  
  /*
   * Print center crop marks.
   * @type {Boolean}
   */
  centerCropMarks: undefined,
  
  /*
   * Print color calibration bars.
   * @type {Boolean}
   */
  colorBars: undefined,
  
  /*
   * Print registration marks.
   * @type {Boolean}
   */
  registrationMarks: undefined,
  
  /*
   * Invert the image colors.
   * @type {Boolean}
   */
  negative: undefined,
  
  /*
   * Flip the image horizontally.
   * @type {Boolean}
   */
  flip: undefined,
  
  /*
   * undefined
   * @type {Boolean}
   */
  interpolate: undefined,
  
  /*
   * Include vector data.
   * @type {Boolean}
   */
  vectorData: undefined,
  
  /*
   * Background color of page.
   * @type {SolidColor}
   */
  backgroundColor: undefined,
  
  /*
   * Color conversion intent when print space is different from the source space.
   * @type {Intent}
   */
  renderIntent: undefined,
  
  /*
   * Print a hard proof.
   * @type {Boolean}
   */
  hardProof: undefined,
  
  /*
   * Color space for printer. Can be nothing (meaning same as source); 'Working RGB', 'Working CMYK', 'Working Gray', 'Lab Color' (meaning one of the working spaces or Lab color); or a string specifying a specific colorspace (default is same as source).
   * @type {String}
   */
  printSpace: undefined,
  
  /*
   * Map blacks.
   * @type {Boolean}
   */
  mapBlack: undefined,
  
  /*
   * Print the selected area of the document.
   * @type {Boolean}
   */
  printSelected: undefined,
  
  /*
   * Width of the print border.
   * @type {UnitValue}
   */
  printBorder: undefined,
  
  /*
   * Bleed width.
   * @type {UnitValue}
   */
  bleedWidth: undefined,
  
  /*
   * Color handling.
   * @type {PrintColorHandling}
   */
  colorHandling: undefined,
  
  /*
   * Number of copies.
   * @type {Number}
   */
  copies: undefined,
  
  /*
   * Position of image when printing.
   * @type {DocPositionStyle}
   */
  docPosition: undefined,
  
  /*
   * Y position of image on page.
   * @type {UnitValue}
   */
  posY: undefined,
  
  /*
   * X position of image on page.
   * @type {UnitValue}
   */
  posX: undefined,
  
  /*
   * Scale of image on page.
   * @type {Number}
   */
  scale: undefined,
  
  /*
   * Currently selected printer.
   * @type {String}
   */
  activePrinter: undefined,
  
  /*
   * List of available printers.
   * @type {String}
   */
  printers: undefined,
  
  /*
   * Set the position of the image on the page.
 *
   * @param {DocPositionStyle} docPosition Position of the image on page when printing. Can be centered, scale to fit, or user defined.
   * @param {UnitValue} [posX] X position of image on page.
   * @param {UnitValue} [posY] Y position of image on page.
   * @param {Number} [scale] Position of the image on page when printing. Can be centered, scale to fit, or user defined.
   */
  setPagePosition: function(docPosition, posX, posY, scale) {
  },
  
};
