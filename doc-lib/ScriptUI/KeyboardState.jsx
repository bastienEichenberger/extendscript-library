/*
 * Reports the active state of the keyboard.
 */
var KeyboardState = {
  /*
   * A string containing the name of the currently pressed key, such as "a", or an empty string.
   * @type {String}
   */
  keyName: undefined,
  
  /*
   * True if the Shift key is pressed.
   * @type {Boolean}
   */
  shiftKey: undefined,
  
  /*
   * True if the Ctrl key is pressed.
   * @type {Boolean}
   */
  ctrlKey: undefined,
  
  /*
   * True if the Alt or Option key is pressed.
   * @type {Boolean}
   */
  altKey: undefined,
  
  /*
   * True if the Cmd key (in Mac OS) or Windows key (in Windows) is pressed.
   * @type {Boolean}
   */
  metaKey: undefined,
  
};
