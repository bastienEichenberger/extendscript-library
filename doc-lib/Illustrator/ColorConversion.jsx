/*
 * PDF color conversion policy.
 */
var ColorConversion = {
  /*
   * Preserves color data as is.
   * @type {int}
   */
  None: undefined,
  
  /*
   * Converts all colors to the profile selected for Destination.
   * @type {int}
   */
  COLORCONVERSIONTODEST: undefined,
  
  /*
   * Preserves color numbers for untagged content in the same color space as the destination profile. Not available with CMS off.
   * @type {int}
   */
  COLORCONVERSIONREPURPOSE: undefined,
  
};
