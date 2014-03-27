/*
 * Color conversion type when printing.
 */
var PrintColorHandling = {
  /*
   * Printer manages color conversions.
   * @type {int}
   */
  PRINTERMANAGED: undefined,
  
  /*
   * Photoshop manages color conversions.
   * @type {int}
   */
  PHOTOSHOPMANAGED: undefined,
  
  /*
   * Print each channel separately without color conversions.
   * @type {int}
   */
  SEPARATIONS: undefined,
  
  /*
   * No color conversions when printing.
   * @type {int}
   */
  NOTMANAGED: undefined,
  
};
