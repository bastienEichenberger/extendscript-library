/*
 * Options which may be supplied when opening a PDF file.
 */
var OpenOptionsPDF = {
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
   * What page should be used when opening a multipage document (default: 1)
   * @type {Int32}
   */
  pageToOpen: undefined,
  
  /*
   * What box should be used when placing a multipage document (default: PDF media box)
   * @type {PDFBoxType}
   */
  pDFCropToBox: undefined,
  
};
