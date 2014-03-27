/*
 * Encapsulates a set of images that can be drawn into a control.
 */
var ScriptUIImage = {
  /*
   * The image format. One of: resource, JPEG, GIF, TIFF, PNG, or PICT (Macintosh).
   * @type {String}
   */
  format: undefined,
  
  /*
   * The image name. Either the file name, or the resource name.
   * @type {String}
   */
  name: undefined,
  
  /*
   * The full path to the file that contains the image.
   * @type {String}
   */
  pathname: undefined,
  
  /*
   * The image size in pixels.
   * @type {Dimension}
   */
  size: undefined,
  
};
