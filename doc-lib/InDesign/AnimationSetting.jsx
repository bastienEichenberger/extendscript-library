/*
 * Animation settings.
 */
var AnimationSetting = {
  /*
   * Determines if this animated object has custom settings.
   * @type {Boolean}
   */
  hasCustomSettings: undefined,
  
  /*
   * Returns true if the object specifier resolves to valid objects.
   * @type {Boolean}
   */
  isValid: undefined,
  
  /*
   * The parent of the AnimationSetting (a PageItem, HtmlItem, FormField, SignatureField, TextBox, RadioButton, ListBox, ComboBox, CheckBox, MultiStateObject, Button, MediaItem, Sound, Movie, EPSText, SplineItem, Polygon, GraphicLine, Rectangle, Oval, Graphic, ImportedPage, PICT, WMF, PDF, EPS, Image, Group or TextFrame).
   * @type {Mixed}
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
   * The base animation preset applied. Can return: MotionPreset, String or NothingEnum enumerator.
   * @type {Mixed}
   */
  preset: undefined,
  
  /*
   * The tranform offset percentage from the target object bounding box's left-top corner.
   * @type {Number}
   */
  transformOffsets: undefined,
  
  /*
   * The duration in second for this animation.
   * @type {Number}
   */
  duration: undefined,
  
  /*
   * The list of motion path points for this animation. Can return: Ordered array containing pathPointArray:Array of Ordered array containing anchor:Array of 2 Reals, leftDirection:Array of 2 Reals, rightDirection:Array of 2 Reals, pathOpen:Boolean.
   * @type {Mixed}
   */
  motionPathPoints: undefined,
  
  /*
   * The list of motion path points and key frames for this animation. Can return: Ordered array containing keyFrame:Long Integer, pathPoint:Ordered array containing anchor:Array of 2 Reals, leftDirection:Array of 2 Reals, rightDirection:Array of 2 Reals.
   * @type {Mixed}
   */
  motionPath: undefined,
  
  /*
   * The list of opacity key frames for this animation. Can return: Ordered array containing keyFrame:Long Integer, value:Real.
   * @type {Mixed}
   */
  opacityArray: undefined,
  
  /*
   * The list of rotation key frames for this animation. Can return: Ordered array containing keyFrame:Long Integer, value:Real.
   * @type {Mixed}
   */
  rotationArray: undefined,
  
  /*
   * The list of scale x key frames for this animation. Can return: Ordered array containing keyFrame:Long Integer, value:Real.
   * @type {Mixed}
   */
  scaleXArray: undefined,
  
  /*
   * The list of scale y key frames for this animation. Can return: Ordered array containing keyFrame:Long Integer, value:Real.
   * @type {Mixed}
   */
  scaleYArray: undefined,
  
  /*
   * The animation design option.
   * @type {DesignOptions}
   */
  designOption: undefined,
  
  /*
   * The ease type.
   * @type {AnimationEaseOptions}
   */
  easeType: undefined,
  
  /*
   * The number of times this animation plays.
   * @type {Number}
   */
  plays: undefined,
  
  /*
   * Set to true if animation play loops.
   * @type {Boolean}
   */
  playsLoop: undefined,
  
  /*
   * Determines if this object is initially hidden when displayed in an exported SWF file.
   * @type {Boolean}
   */
  initiallyHidden: undefined,
  
  /*
   * Determines if this object is hidden after its animation is played in an exported SWF file.
   * @type {Boolean}
   */
  hiddenAfter: undefined,
  
  /*
   * A property that allows setting of several properties at the same time.
   * @type {Object}
   */
  properties: undefined,
  
  /*
   * Save a copy of this motion preset to a InDesign motion preset file.
 *
   * @param {File} to The Flash motion preset file to export to.
   */
  saveACopy: function(to) {
  },
  
  /*
   * Save this motion preset as custom preset.
 *
   * @param {String} name The name for the new motion preset.
   * @returns {MotionPreset}
   */
  save: function(name) {
    return new MotionPreset();
  },
  
  /*
   * Generates a string which, if executed, will return the AnimationSetting.
   * @returns {String}
   */
  toSource: function() {
    return new String();
  },
  
  /*
   * Resolves the object specifier, creating an array of object references.
   * @returns {AnimationSetting}
   */
  getElements: function() {
    return new AnimationSetting();
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
