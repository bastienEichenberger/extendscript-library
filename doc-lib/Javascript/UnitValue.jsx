/*
 * Represents a measurement as a combination of values and unit.
 */
var UnitValue = {
  /*
   * The base unit for all conversions.
   * @type {UnitValue}
   */
  baseUnit: undefined,
  
  /*
   * The unit name.
   * @type {String}
   */
  type: undefined,
  
  /*
   * The numeric value.
   * @type {Number}
   */
  value: undefined,
  
  /*
   * The base unit.
   * @type {UnitValue}
   */
  baseUnit: undefined,
  
  /*
   * Converts this instance to a different unit.
 *
   * @param {String} unitName The unit name.
   * @returns {any}
   */
  convert: function(unitName) {
    return new any();
  },
  
  /*
   * Returns this instance as a different unit.
 *
   * @param {String} unitName The unit name.
   * @returns {UnitValue}
   */
  as: function(unitName) {
    return new UnitValue();
  },
  
};
