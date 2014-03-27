/*
 * Downsampling options when saving as PDF.
 */
var PDFResample = {
  /*
   * Does not downsample.
   * @type {int}
   */
  NONE: undefined,
  
  /*
   * Averages the pixels in a sample area and replaces the entire area with the average pixel color at the specified resolution.
   * @type {int}
   */
  PDFAVERAGE: undefined,
  
  /*
   * Chooses a pixel in the center of the sample area and replaces the entire area with that pixel color; significantly reduces conversion time but results in images that are less smooth and continuous.
   * @type {int}
   */
  PDFSUBSAMPLE: undefined,
  
  /*
   * Uses a weighted average to determine pixel color, which usually yields better results than the simple averaging method of downsampling. The slowest but most precise method, resulting in the smoothest gradations.
   * @type {int}
   */
  PDFBICUBIC: undefined,
  
};
