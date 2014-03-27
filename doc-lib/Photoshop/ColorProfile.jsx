/*
 * The type of color model that defines the document&apos;s working space.
 */
var ColorProfile = {
  /*
   * The document is not color managed.
   * @type {int}
   */
  NONE: undefined,
  
  /*
   * Color manages this document using the working color profile.
   * @type {int}
   */
  WORKING: undefined,
  
  /*
   * Color manages this document using a custom color profile.
   * @type {int}
   */
  CUSTOM: undefined,
  
};
