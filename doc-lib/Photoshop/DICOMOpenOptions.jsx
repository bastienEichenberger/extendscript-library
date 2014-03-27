/*
 * Options for opening a DICOM document.
 */
var DICOMOpenOptions = {
  /*
   * If true, patient information is anonymized.
   * @type {Boolean}
   */
  anonymize: undefined,
  
  /*
   * If true, overlays are shown (if present).
   * @type {Boolean}
   */
  showOverlays: undefined,
  
  /*
   * The number of rows in an n-up configuration.
   * @type {int}
   */
  rows: undefined,
  
  /*
   * The number of columns in an n-up configuration.
   * @type {int}
   */
  columns: undefined,
  
  /*
   * The brightness of the image in Houndsfield units.
   * @type {int}
   */
  windowWidth: undefined,
  
  /*
   * The contrast of the image in Houndsfield units.
   * @type {int}
   */
  windowLevel: undefined,
  
  /*
   * If true, the image is inverted.
   * @type {Boolean}
   */
  reverse: undefined,
  
};
