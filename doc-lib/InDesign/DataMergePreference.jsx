/*
 * Data merge preferences.
 */
var DataMergePreference = {
  /*
   * Returns true if the object specifier resolves to valid objects.
   * @type {Boolean}
   */
  isValid: undefined,
  
  /*
   * The parent of the DataMergePreference (a DataMerge).
   * @type {DataMerge}
   */
  parent: undefined,
  
  /*
   * A collection of events.
   * @type {Events}
   */
  events: undefined,
  
  /*
   * A collection of event listeners.
   * @type {EventListeners}
   */
  eventListeners: undefined,
  
  /*
   * The records to merge.
   * @type {RecordSelection}
   */
  recordSelection: undefined,
  
  /*
   * The offset value of the left margin in the target document.
   * @type {Mixed}
   */
  leftMargin: undefined,
  
  /*
   * The offset value of the top margin in the target document.
   * @type {Mixed}
   */
  topMargin: undefined,
  
  /*
   * The offset value of the right margin in the target document.
   * @type {Mixed}
   */
  rightMargin: undefined,
  
  /*
   * The offset value of the bottom margin in the target document.
   * @type {Mixed}
   */
  bottomMargin: undefined,
  
  /*
   * The order in which to arrange multiple records on the page in the target document.
   * @type {ArrangeBy}
   */
  arrangeBy: undefined,
  
  /*
   * The amount of space between rows of records in the target document.
   * @type {Mixed}
   */
  rowSpacing: undefined,
  
  /*
   * The amount of space between columns of records in the target document.
   * @type {Mixed}
   */
  columnSpacing: undefined,
  
  /*
   * The number of the record to merge. Note: Valid only when record selection is one record.
   * @type {Number}
   */
  recordNumber: undefined,
  
  /*
   * The range of records to merge. Note: Valid only when record selection is range.
   * @type {String}
   */
  recordRange: undefined,
  
  /*
   * The number of records to place on each page in the document.
   * @type {RecordsPerPage}
   */
  recordsPerPage: undefined,
  
  /*
   * A property that allows setting of several properties at the same time.
   * @type {Object}
   */
  properties: undefined,
  
  /*
   * If true, lists missing images in the specified output file.
 *
   * @param {File} outputMissingImagesReportFile The path to the output file.
   * @returns {Boolean}
   */
  alertMissingImages: function(outputMissingImagesReportFile) {
    return new Boolean();
  },
  
  /*
   * Generates a string which, if executed, will return the DataMergePreference.
   * @returns {String}
   */
  toSource: function() {
    return new String();
  },
  
  /*
   * Resolves the object specifier, creating an array of object references.
   * @returns {DataMergePreference}
   */
  getElements: function() {
    return new DataMergePreference();
  },
  
  /*
   * Retrieves the object specifier.
   * @returns {String}
   */
  toSpecifier: function() {
    return new String();
  },
  
  /*
   * Adds an event listener.
 *
   * @param {String} eventType The event type.
   * @param {Mixed} handler The event handler. Can accept: File or JavaScript Function.
   * @param {Boolean} [captures] This parameter is obsolete. 
   * @returns {EventListener}
   */
  addEventListener: function(eventType, handler, captures) {
    return new EventListener();
  },
  
  /*
   * Removes the event listener.
 *
   * @param {String} eventType The registered event type.
   * @param {Mixed} handler The registered event handler. Can accept: File or JavaScript Function.
   * @param {Boolean} [captures] This parameter is obsolete. 
   * @returns {Boolean}
   */
  removeEventListener: function(eventType, handler, captures) {
    return new Boolean();
  },
  
};
