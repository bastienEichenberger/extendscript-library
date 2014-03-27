/*
 * The distribution method to use when applying an Add Noise filter.
 */
var NoiseDistribution = {
  /*
   * Distributes color values of noise using random numbers between 0 and plus or minus the specified value, creating a subtle effect.
   * @type {int}
   */
  UNIFORM: undefined,
  
  /*
   * Distributes color values of noise along a bell-shaped curve, creating a speckled effect.
   * @type {int}
   */
  GAUSSIAN: undefined,
  
};
