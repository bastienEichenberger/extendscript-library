/*
 * The selection behavior when a selection already exists.
 */
var SelectionType = {
  /*
   * Replace the selected area.
   * @type {int}
   */
  REPLACE: undefined,
  
  /*
   * Add the selection to an already selected area.
   * @type {int}
   */
  EXTEND: undefined,
  
  /*
   * Remove the selection from the already selected area.
   * @type {int}
   */
  DIMINISH: undefined,
  
  /*
   * Make the selection only the area where the new selection intersects the already selected area.
   * @type {int}
   */
  INTERSECT: undefined,
  
};
