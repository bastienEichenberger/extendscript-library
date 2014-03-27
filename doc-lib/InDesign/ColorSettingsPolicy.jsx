/*
 * The policy for handling mismatched CMYK configurations.
 */
var ColorSettingsPolicy = {
  /*
   * Turns off color management for documents whose profiles do not match the working space. For imported colors, numeric values override color appearance.
   * @type {Number}
   */
  COLOR_POLICY_OFF: undefined,
  
  /*
   * Preserves embedded color profiles in newly opened documents.
   * @type {Number}
   */
  PRESERVE_EMBEDDED_PROFILES: undefined,
  
  /*
   * Converts newly opened documents to the current working space. For imported colors, color appearance overrides numeric values.
   * @type {Number}
   */
  CONVERT_TO_WORKING_SPACE: undefined,
  
  /*
   * Preserves raw color numbers and ignores embedded color profiles.
   * @type {Number}
   */
  COMBINATION_OF_PRESERVE_AND_SAFE_CMYK: undefined,
  
};
