/*
 * PDF ICC profile inclusion.
 */
var ColorProfile = {
  /*
   * All profiles removed (embedProfile == false)
   * @type {int}
   */
  None: undefined,
  
  /*
   * Everything gets tagged (embedProfile == true)
   * @type {int}
   */
  INCLUDEALLPROFILE: undefined,
  
  /*
   * Leave tagged items tagged, untagged items untagged.
   * @type {int}
   */
  LEAVEPROFILEUNCHANGED: undefined,
  
  /*
   * Tag all RGB, leave CMYK unchanged.
   * @type {int}
   */
  INCLUDERGBPROFILE: undefined,
  
  /*
   * Everything ends up tagged with the destination profile.
   * @type {int}
   */
  INCLUDEDESTPROFILE: undefined,
  
};
