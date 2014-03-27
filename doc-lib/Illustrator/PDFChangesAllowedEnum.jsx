/*
 * Options available for making changes to a pdf document.
 */
var PDFChangesAllowedEnum = {
  /*
   * No changes allowed - 128bit.
   * @type {int}
   */
  CHANGE128NONE: undefined,
  
  /*
   * Editing page allowed - 128bit.
   * @type {int}
   */
  CHANGE128EDITPAGE: undefined,
  
  /*
   * Filling in of form field and signing allowed - 128bit.
   * @type {int}
   */
  CHANGE128FILLFORM: undefined,
  
  /*
   * Comment allowed - 128bit.
   * @type {int}
   */
  CHANGE128COMMENTING: undefined,
  
  /*
   * Any changes allowed except extracting of pages- 128bit.
   * @type {int}
   */
  CHANGE128ANYCHANGES: undefined,
  
  /*
   * No changes allowed - 40bit.
   * @type {int}
   */
  CHANGE40NONE: undefined,
  
  /*
   * Comment allowed - 40bit.
   * @type {int}
   */
  CHANGE40COMMENTING: undefined,
  
  /*
   * Page layout allowed - 40bit.
   * @type {int}
   */
  CHANGE40PAGELAYOUT: undefined,
  
  /*
   * Any changes allowed except extracting of pages- 40bit.
   * @type {int}
   */
  CHANGE40ANYCHANGES: undefined,
  
};
