/*
 * Options to specify when running a Batch command.
 */
var BatchOptions = {
  /*
   * If true, overrides action open commands.
   * @type {Boolean}
   */
  overrideOpen: undefined,
  
  /*
   * If true, suppresses file open options dialogs.
   * @type {Boolean}
   */
  suppressOpen: undefined,
  
  /*
   * If true, suppresses color profile warnings.
   * @type {Boolean}
   */
  suppressProfile: undefined,
  
  /*
   * The type of destination for the processed files.
   * @type {BatchDestinationType}
   */
  destination: undefined,
  
  /*
   * The folder location for the processed files. Valid only when 'destination' = folder.
   * @type {File}
   */
  destinationFolder: undefined,
  
  /*
   * If true, overrides save as action steps with the specified destination.
   * @type {Boolean}
   */
  overrideSave: undefined,
  
  /*
   * A list of file naming options. Maximum: 6.
   * @type {FileNamingType}
   */
  fileNaming: undefined,
  
  /*
   * The starting serial number to use in naming files.
   * @type {int}
   */
  startingSerial: undefined,
  
  /*
   * If true, the final file names are Windows compatible.
   * @type {Boolean}
   */
  windowsCompatible: undefined,
  
  /*
   * If true, the final file names are Macintosh compatible.
   * @type {Boolean}
   */
  macintoshCompatible: undefined,
  
  /*
   * If true, the final file names are Unix compatible.
   * @type {Boolean}
   */
  unixCompatible: undefined,
  
  /*
   * The file in which to log errors encountered. To display errors on the screen and stop batch processing when errors occur, leave blank.
   * @type {File}
   */
  errorFile: undefined,
  
};
