/*
 * The log of measurements taken.
 */
var MeasurementLog = {
  /*
   * The object's container.
   * @type {Object}
   */
  parent: undefined,
  
  /*
   * The class name of the object.
   * @type {String}
   */
  typename: undefined,
  
  /*
   * Exports the specified measurements.
 *
   * @param {File} [file] The file to export to. If not specified, a 'file save' dialog is displayed.
   * @param {MeasurementRange} [range] The measurements to export. Default: selected.
   * @param {String} [dataPoints] An array of identifiers of data points to export. The order of the data points is respected in the exported file. Defaults to data points visible in Measurement Log palette.
   */
  exportMeasurements: function(file, range, dataPoints) {
  },
  
  /*
   * Deletes the specified measurements.
 *
   * @param {MeasurementRange} [range] The measurements to delete. Default: selected.
   */
  deleteMeasurements: function(range) {
  },
  
};
