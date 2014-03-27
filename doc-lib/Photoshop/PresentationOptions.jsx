/*
 * Options for the PDF presentation command.
 */
var PresentationOptions = {
  /*
   * If true, the file type is presentation. If false, the file type is Multi-Page document.
   * @type {Boolean}
   */
  presentation: undefined,
  
  /*
   * If true, the presentation auto advances.
   * @type {Boolean}
   */
  autoAdvance: undefined,
  
  /*
   * The amount of time (in seconds) before auto advancing the view. Valid only when 'auto advance' is true. Range: 1 to 60.
   * @type {int}
   */
  interval: undefined,
  
  /*
   * If true, the presentation loops after the last page.
   * @type {Boolean}
   */
  loop: undefined,
  
  /*
   * The image transition type.
   * @type {TransitionType}
   */
  transition: undefined,
  
  /*
   * The magnification type when viewing the image.
   * @type {MagnificationType}
   */
  magnification: undefined,
  
  /*
   * If true, includes the file name for the image.
   * @type {Boolean}
   */
  includeFilename: undefined,
  
  /*
   * Options for creating the PDF file.
   * @type {PDFSaveOptions}
   */
  PDFFileOptions: undefined,
  
};
