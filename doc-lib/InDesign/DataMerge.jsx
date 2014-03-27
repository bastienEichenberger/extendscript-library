/*
 * A data merge object.
 */
var DataMerge = {
  /*
   * The data merge preference properties that define the layout and content of the target page.
   * @type {DataMergePreference}
   */
  dataMergePreferences: undefined,
  
  /*
   * Returns true if the object specifier resolves to valid objects.
   * @type {Boolean}
   */
  isValid: undefined,
  
  /*
   * The parent of the DataMerge (a Document).
   * @type {Document}
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
   * A collection of preferences objects.
   * @type {Preferences}
   */
  preferences: undefined,
  
  /*
   * A collection of data merge fields.
   * @type {DataMergeFields}
   */
  dataMergeFields: undefined,
  
  /*
   * A property that allows setting of several properties at the same time.
   * @type {Object}
   */
  properties: undefined,
  
  /*
   * Specifies the file to use as the data source.
 *
   * @param {File} dataSourceFile The path to the data source file.
   */
  selectDataSource: function(dataSourceFile) {
  },
  
  /*
   * Updates the data source file with the most current data.
   */
  updateDataSource: function() {
  },
  
  /*
   * Removes the data source.
   */
  removeDataSource: function() {
  },
  
  /*
   * Merges records and produces an optional overset report.
 *
   * @param {File} [outputOversetReportFile] The path to the file in which to store the overset report. 
   */
  mergeRecords: function(outputOversetReportFile) {
  },
  
  /*
   * Merges records and exports to PDF.
 *
   * @param {File} to The path of exported PDF file.
   * @param {PDFExportPreset} [using] The PDF export style to use. 
   * @param {File} [outputOversetReportFile] The path to the file in which to store the overset report. 
   */
  exportFile: function(to, using, outputOversetReportFile) {
  },
  
  /*
   * Generates a string which, if executed, will return the DataMerge.
   * @returns {String}
   */
  toSource: function() {
    return new String();
  },
  
  /*
   * Resolves the object specifier, creating an array of object references.
   * @returns {DataMerge}
   */
  getElements: function() {
    return new DataMerge();
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
