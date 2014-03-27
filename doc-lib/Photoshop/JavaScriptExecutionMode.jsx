/*
 * When should a JavaScript debugger be shown.
 */
var JavaScriptExecutionMode = {
  /*
   * Never show the JavaScript debugger. Treat runtime errors by throwing a JavaScript exceptions.
   * @type {int}
   */
  NEVER: undefined,
  
  /*
   * Show the JavaScript debugger if a runtime error occurs.
   * @type {int}
   */
  ONRUNTIMEERROR: undefined,
  
  /*
   * Show the JavaScript debugger when the first line of the JavaScript executes.
   * @type {int}
   */
  BEFORERUNNING: undefined,
  
};
