/*
 * Tracing options that guide the tracing process.
 */
var TracingOptions = {
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
   * The name of the preset in use. Read-only.
   * @type {String}
   */
  preset: undefined,
  
  /*
   * The visualization mode.
   * @type {ViewType}
   */
  viewMode: undefined,
  
  /*
   * The tracing mode: color, gray, black and white.
   * @type {TracingModeType}
   */
  tracingMode: undefined,
  
  /*
   * Color Type used for tracing, TracingLimitedColor or TracingFullColor .
   * @type {TracingColorType}
   */
  tracingColorTypeValue: undefined,
  
  /*
   * The color palette (Library) name used for tracing. Use 'Document Library' or any other imported library name.
   * @type {String}
   */
  palette: undefined,
  
  /*
   * The color group name used for tracing. Use 'All' or any color group name available in color Palette (library).
   * @type {String}
   */
  colorGroup: undefined,
  
  /*
   * Maximum number of colors allowed for tracing when TracingColorTypeValue is TracingLimitedColor.
   * @type {Int32}
   */
  tracingColors: undefined,
  
  /*
   * ColorFidelity when TracingColorTypeValue is TracingFullColor.
   * @type {Number}
   */
  colorFidelity: undefined,
  
  /*
   * The threshold value for a black and white mode tracing.
   * @type {Int32}
   */
  threshold: undefined,
  
  /*
   * The gray levels for a grayscale mode tracing..
   * @type {Int32}
   */
  grayLevels: undefined,
  
  /*
   * Path fidelity for tracing.
   * @type {Number}
   */
  pathFidelity: undefined,
  
  /*
   * Corner fidelity for tracing.
   * @type {Number}
   */
  cornerFidelity: undefined,
  
  /*
   * Specifies minimum area of pixels to be vectorized.
   * @type {Number}
   */
  noiseFidelity: undefined,
  
  /*
   * Method for tracing, either abutting or adjoining paths.
   * @type {TracingMethodType}
   */
  tracingMethod: undefined,
  
  /*
   * Tracing with fills. Fills, Strokes or both must be on.
   * @type {Boolean}
   */
  fills: undefined,
  
  /*
   * Tracing with strokes. Fills, Strokes or both must be on.
   * @type {Boolean}
   */
  strokes: undefined,
  
  /*
   * Maximum stroke weight (stroke only).
   * @type {Number}
   */
  maxStrokeWeight: undefined,
  
  /*
   * Controls whether to snap curve to lines.
   * @type {Boolean}
   */
  snapCurveToLines: undefined,
  
  /*
   * Controls whether to ignore white fill color. Works only if TracingMethod is TracingMethodAbutting and mode is Black and white.
   * @type {Boolean}
   */
  ignoreWhite: undefined,
  
  /*
   * Load options from preset.
 *
   * @param {String} presetName The name of the preset.
   * @returns {Boolean}
   */
  loadFromPreset: function(presetName) {
    return new Boolean();
  },
  
  /*
   * Store options to a preset kAiVectorizeSuite. Will overwrite an existing (unlocked) preset if names match.
 *
   * @param {String} presetName The name of the preset.
   * @returns {Boolean}
   */
  storeToPreset: function(presetName) {
    return new Boolean();
  },
  
};
