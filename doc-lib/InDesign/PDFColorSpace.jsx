/*
 * Options for specifying how to represent color information in the exported PDF.
 */
var PDFColorSpace = {
  /*
   * Represents all color values using the RGB color space. Best suited for documents that will be viewed onscreen.
   * @type {Number}
   */
  RGB: undefined,
  
  /*
   * Represents all color values using CYMK color space.
   * @type {Number}
   */
  CMYK: undefined,
  
  /*
   * Leaves each image in its original color space.
   * @type {Number}
   */
  UNCHANGED_COLOR_SPACE: undefined,
  
  /*
   * Repurposes RGB colors.
   * @type {Number}
   */
  REPURPOSE_RGB: undefined,
  
  /*
   * Repurposes CMYK colors.
   * @type {Number}
   */
  REPURPOSE_CMYK: undefined,
  
  /*
   * Converts all color values to high-quality black-and-white images. Gray levels of the converted objects represent the luminosity of the original objects.
   * @type {Number}
   */
  GRAY: undefined,
  
};
