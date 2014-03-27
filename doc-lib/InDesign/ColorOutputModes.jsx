/*
 * Color output mode options for composites.
 */
var ColorOutputModes = {
  /*
   * Sends a full-color version of the specified pages to the printer, preserving all color values in the original document. Note: Cannot simulate overprint when using this option.
   * @type {Number}
   */
  COMPOSITE_LEAVE_UNCHANGED: undefined,
  
  /*
   * Sends grayscale versions of the specified pages to the printer.
   * @type {Number}
   */
  COMPOSITE_GRAY: undefined,
  
  /*
   * Sends full-color versions of the specified pages to the printer.
   * @type {Number}
   */
  COMPOSITE_RGB: undefined,
  
  /*
   * Sends full-color versions of the specified pages to the printer. Note: Available only for PostScript printers.
   * @type {Number}
   */
  COMPOSITE_CMYK: undefined,
  
  /*
   * Sends PostScript information for each of the required separations to the printer. Note: Available only for PostScript printers.
   * @type {Number}
   */
  SEPARATIONS: undefined,
  
  /*
   * Allows the printer to create color separations. Note: Valid only with a PostScript raster image processing (RIP) device.
   * @type {Number}
   */
  INRIP_SEPARATIONS: undefined,
  
};
