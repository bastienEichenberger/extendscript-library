/*
 * Book content file status options.
 */
var BookContentStatus = {
  /*
   * The book content object is not open and is unchanged.
   * @type {Number}
   */
  NORMAL: undefined,
  
  /*
   * The book content object is missing because it has been moved, renamed, or deleted.
   * @type {Number}
   */
  MISSING_DOCUMENT: undefined,
  
  /*
   * The book content object has been modified after repagination.
   * @type {Number}
   */
  DOCUMENT_OUT_OF_DATE: undefined,
  
  /*
   * The book content object is being used by someone else and is therefore locked.
   * @type {Number}
   */
  DOCUMENT_IN_USE: undefined,
  
  /*
   * The book content object is open.
   * @type {Number}
   */
  DOCUMENT_IS_OPEN: undefined,
  
};
