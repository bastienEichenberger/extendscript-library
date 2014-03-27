/*
 * The text composer.
 */
var TextComposer = {
  /*
   * Offers a traditional approach to composing type one line at a time. Useful if you prefer to have manual control over how lines break.
   * @type {int}
   */
  ADOBESINGLELINE: undefined,
  
  /*
   * Considers a network of break points for a range of lines and thus optimizes earlier lines in the paragraph to eliminate especially unattractive breaks later on. Results in more even spacing and fewer hyphens.
   * @type {int}
   */
  ADOBEEVERYLINE: undefined,
  
};
