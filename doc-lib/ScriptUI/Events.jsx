/*
 * Provides access to objects used in the ScriptUI event system.
 */
var Events = {
  /*
   * undefined
 *
   * @param {String} eventType The name of an event type: one of "UIEvent", "KeyboardEvent", or "MouseEvent".
   * @returns {Event}
   */
  createEvent: function(eventType) {
    return new Event();
  },
  
};
