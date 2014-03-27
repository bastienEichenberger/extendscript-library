/*
 * The flag indicating whether the rule is disabled, set for error, warning, or just informational.
 */
var PreflightRuleFlag = {
  /*
   * Rule is currently disabled.
   * @type {Number}
   */
  RULE_IS_DISABLED: undefined,
  
  /*
   * Treat as error if rule check failed.
   * @type {Number}
   */
  RETURN_AS_ERROR: undefined,
  
  /*
   * Treat as warning if rule check failed.
   * @type {Number}
   */
  RETURN_AS_WARNING: undefined,
  
  /*
   * Treat as information only if rule check failed.
   * @type {Number}
   */
  RETURN_AS_INFORMATIONAL: undefined,
  
};
