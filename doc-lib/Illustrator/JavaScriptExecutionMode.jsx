/*
 * When should a JavaScript debugger be shown.
 */
var JavaScriptExecutionMode = {
  /*
   * Never show the JavaScript debugger. Treat runtime errors by throwing a JavaScript exceptions.
   * @type {int}
   */
  never: undefined,
  
  /*
   * Show the JavaScript debugger is a runtime error occurs.
   * @type {int}
   */
  OnRuntimeError: undefined,
  
  /*
   * Show the JavaScript debugger at the first line of the JavaScript.
   * @type {int}
   */
  BeforeRunning: undefined,
  
};
