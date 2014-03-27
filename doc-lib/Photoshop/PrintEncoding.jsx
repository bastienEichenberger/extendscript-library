/*
 * Encoding to use when printing PostScript.
 */
var PrintEncoding = {
  /*
   * Binary encoding. Some print spooler programs, computer networks, and third-party printer drivers don't support binary files.
   * @type {int}
   */
  BINARY: undefined,
  
  /*
   * JPEG encoding. JPEG-encoded files are smaller than binary files and take less time to print; however, image quality is decreased. Only PostScrpt Level 2 or higher printers support JPEG encoding. Some print spooler programs, computer networks, and third-party printer drivers don't support JPEG-encoded files.
   * @type {int}
   */
  JPEG: undefined,
  
  /*
   * ASCII85 encoding. ASCII85 files contain about twice as many characters and take twice as long to transfer as binary files.
   * @type {int}
   */
  ASCII: undefined,
  
};
