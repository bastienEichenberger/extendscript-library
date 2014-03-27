/*
 * The color blend mode type.
 */
var ColorBlendMode = {
  /*
   * Edits or paints each pixel to make it the result color. (Called "Threshold" when you�re working with a bitmapped or indexed-color image.)
   * @type {int}
   */
  NORMAL: undefined,
  
  /*
   * Edits or paints each pixel to make it the result color, which is a random replacement of the pixels with the base color or the blend color, depending on the opacity at any pixel location.
   * @type {int}
   */
  DISSOLVE: undefined,
  
  /*
   * Edits or paints only on the transparent part of a layer. Works only in layers in which transparent pixels locked = false and is analogous to painting on the back of transparent areas on a sheet of acetate.
   * @type {int}
   */
  BEHIND: undefined,
  
  /*
   * Edits or paints each pixel and makes it transparent. Works only in layers in which transparent pixels locked = false.
   * @type {int}
   */
  CLEAR: undefined,
  
  /*
   * Looks at the color information in each channel and selects the base or blend color�whichever is darker�as the result color. Pixels lighter than the blend color are replaced, and pixels darker than the blend color do not change.
   * @type {int}
   */
  DARKEN: undefined,
  
  /*
   * Looks at the color information in each channel and multiplies the base color by the blend color. The result color is always a darker color. Multiplying any color with black produces black. Multiplying any color with white leaves the color unchanged. When you�re painting with a color other than black or white, successive strokes with a painting tool produce progressively darker colors. The effect is similar to drawing on the image with multiple marking pens.
   * @type {int}
   */
  MULTIPLY: undefined,
  
  /*
   * Looks at the color information in each channel and darkens the base color to reflect the blend color by increasing the contrast. Blending with white produces no change.
   * @type {int}
   */
  COLORBURN: undefined,
  
  /*
   * Looks at the color information in each channel and darkens the base color to reflect the blend color by decreasing the brightness. Blending with white produces no change.
   * @type {int}
   */
  LINEARBURN: undefined,
  
  /*
   * Looks at the color information in each channel and selects the base or blend color�whichever is lighter�as the result color. Pixels darker than the blend color are replaced, and pixels lighter than the blend color do not change.
   * @type {int}
   */
  LIGHTEN: undefined,
  
  /*
   * Looks at each channel�s color information and multiplies the inverse of the blend and base colors. The result color is always a lighter color. Screening with black leaves the color unchanged. Screening with white produces white. The effect is similar to projecting multiple photographic slides on top of each other.
   * @type {int}
   */
  SCREEN: undefined,
  
  /*
   * Looks at the color information in each channel and brightens the base color to reflect the blend color by decreasing the contrast. Blending with black produces no change.
   * @type {int}
   */
  COLORDODGE: undefined,
  
  /*
   * Looks at the color information in each channel and brightens the base color to reflect the blend color by increasing the brightness. Blending with black produces no change.
   * @type {int}
   */
  LINEARDODGE: undefined,
  
  /*
   * Multiplies or screens the colors, depending on the base color. Patterns or colors overlay the existing pixels while preserving the highlights and shadows of the base color. The base color is not replaced but is mixed with the blend color to reflect the lightness or darkness of the original color.
   * @type {int}
   */
  OVERLAY: undefined,
  
  /*
   * Darkens or lightens the colors, depending on the blend color. The effect is similar to shining a diffused spotlight on the image. If the blend color (light source) is lighter than 50% gray, the image is lightened as if it were dodged. If the blend color is darker than 50% gray, the image is darkened as if it were burned in. Painting with pure black or white produces a distinctly darker or lighter area but does not result in pure black or white.
   * @type {int}
   */
  SOFTLIGHT: undefined,
  
  /*
   * Multiplies or screens the colors, depending on the blend color. The effect is similar to shining a harsh spotlight on the image. If the blend color (light source) is lighter than 50% gray, the image is lightened, as if it were screened. This is useful for adding highlights to an image. If the blend color is darker than 50% gray, the image is darkened, as if it were multiplied. This is useful for adding shadows to an image. Painting with pure black or white results in pure black or white.
   * @type {int}
   */
  HARDLIGHT: undefined,
  
  /*
   * Burns or dodges the colors by increasing or decreasing the contrast, depending on the blend color. If the blend color (light source) is lighter than 50% gray, the image is lightened by decreasing the contrast. If the blend color is darker than 50% gray, the image is darkened by increasing the contrast.
   * @type {int}
   */
  VIVIDLIGHT: undefined,
  
  /*
   * Burns or dodges the colors by decreasing or increasing the brightness, depending on the blend color. If the blend color (light source) is lighter than 50% gray, the image is lightened by increasing the brightness. If the blend color is darker than 50% gray, the image is darkened by decreasing the brightness.
   * @type {int}
   */
  LINEARLIGHT: undefined,
  
  /*
   * Replaces the colors, depending on the blend color. If the blend color (light source) is lighter than 50% gray, pixels darker than the blend color are replaced, and pixels lighter than the blend color do not change. If the blend color is darker than 50% gray, pixels lighter than the blend color are replaced, and pixels darker than the blend color do not change. This is useful for adding special effects to an image.
   * @type {int}
   */
  PINLIGHT: undefined,
  
  /*
   * Looks at the color information in each channel and subtracts either the blend color from the base color or the base color from the blend color, depending on which has the greater brightness value. Blending with white inverts the base color values; blending with black produces no change.
   * @type {int}
   */
  DIFFERENCE: undefined,
  
  /*
   * Creates an effect similar to but lower in contrast than the Difference mode. Blending with white inverts the base color values. Blending with black produces no change.
   * @type {int}
   */
  EXCLUSION: undefined,
  
  /*
   * Creates a result color with the luminance and saturation of the base color and the hue of the blend color.
   * @type {int}
   */
  HUE: undefined,
  
  /*
   * Creates a result color with the luminance and hue of the base color and the saturation of the blend color. Painting with this mode in an area with no (0) saturation (gray) causes no change.
   * @type {int}
   */
  SATURATION: undefined,
  
  /*
   * Creates a result color with the luminance of the base color and the hue and saturation of the blend color. This preserves the gray levels in the image and is useful for coloring monochrome images and for tinting color images.
   * @type {int}
   */
  COLOR: undefined,
  
  /*
   * Creates a result color with the hue and saturation of the base color and the luminance of the blend color. This mode creates an inverse effect from that of the Color mode.
   * @type {int}
   */
  LUMINOSITY: undefined,
  
  /*
   * Lighter colors lighten the result, and darker colors darken the result. 50% gray as a blend color has no effect on the result color. Lowering the fill opacity creates less posterization/thresholding.
   * @type {int}
   */
  HARDMIXBLEND: undefined,
  
};
