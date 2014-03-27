/*
 * The amount of the PDF document to place.
 */
var PDFCrop = {
  /*
   * Places only the area defined by the PDF author as placeable artwork.
   * @type {Number}
   */
  CROP_ART: undefined,
  
  /*
   * Places only the area displayed by Acrobat.
   * @type {Number}
   */
  CROP_PDF: undefined,
  
  /*
   * Places only the area that represents the final trim size of the document.
   * @type {Number}
   */
  CROP_TRIM: undefined,
  
  /*
   * Places only the area that represents clipped content.
   * @type {Number}
   */
  CROP_BLEED: undefined,
  
  /*
   * Places the area that represents the physical paper size of the original PDF document.
   * @type {Number}
   */
  CROP_MEDIA: undefined,
  
  /*
   * Places the page's bounding box using visible layers only.
   * @type {Number}
   */
  CROP_CONTENT_VISIBLE_LAYERS: undefined,
  
  /*
   * Places the page's bounding box using all layers.
   * @type {Number}
   */
  CROP_CONTENT_ALL_LAYERS: undefined,
  
};
