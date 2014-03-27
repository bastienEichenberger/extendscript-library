/*
 * The state of a task.
 */
var TaskState = {
  /*
   * Task was queued and is waiting to be scheduled for execution
   * @type {Number}
   */
  QUEUED: undefined,
  
  /*
   * Task is running
   * @type {Number}
   */
  RUNNING: undefined,
  
  /*
   * Task is waiting
   * @type {Number}
   */
  WAITING: undefined,
  
  /*
   * Task was signalled to cancel but did not stop yet
   * @type {Number}
   */
  CANCELLING: undefined,
  
  /*
   * Task completed execution (successfully or with errors)
   * @type {Number}
   */
  COMPLETED: undefined,
  
  /*
   * Task was cancelled (either before it ran or during execution
   * @type {Number}
   */
  CANCELLED: undefined,
  
};
