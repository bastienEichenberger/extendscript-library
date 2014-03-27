/*
 * Options for specifying how tranparencies are displayed.
 */
var TagTransparency = {
  /*
   * Turns off the on-screen display of transparency. Note: Does not turn off transparency when printing or exporting the file.
   * @type {Number}
   */
  OFF: undefined,
  
  /*
   * Displays basic transparency (opacity and blend modes) and shows transparency effects such as drop shadow and feathering in a low-resolution approximation. Note: Does not isolate page content from the background. Objects with blend modes other than Normal might appear different in other applications and output.
   * @type {Number}
   */
  LOW_QUALITY: undefined,
  
  /*
   * Displays drop shadows and feathering in low resolution.
   * @type {Number}
   */
  MEDIUM_QUALITY: undefined,
  
  /*
   * Displays higher-resolution (144 dpi) drop shadows and feathers, CMYK mattes, and spread isolation.
   * @type {Number}
   */
  HIGH_QUALITY: undefined,
  
  /*
   * Uses the default setting. For information, see display performance preferences.
   * @type {Number}
   */
  DEFAULT_VALUE: undefined,
  
};
