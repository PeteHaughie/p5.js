/**
 * Creates a range slider `&lt;input&gt;&lt;/input&gt;` element. Range sliders are
 * useful for quickly clamping numbers from within a given range.
 *
 * The first two parameters, `min` and `max`, are numbers that set the
 * slider's minimum and maximum.
 *
 * The second two parameters, `low` and `high`, are numbers that set the
 * slider's range start and range end.
 *
 * The fifth parameter, `step`, is optional. It's a number that sets the
 * slider's default value. Unset it is 1.
 *
 * The fourth parameter, `step`, is also optional. It's a number that sets the
 * spacing between each value in the slider's range. Setting `step` to 0
 * allows the slider to move smoothly from `min` to `max`.
 *
 * @method createSlider
 * @param  {Number} min minimum value of the slider.
 * @param  {Number} max maximum value of the slider.
 * @param  {Number} lower value of the slider.
 * @param  {Number} higher value of the slider.
 * @param  {Number} [step] size for each step in the slider's range.
 * @return {p5.Element} new <a href="#/p5.Element">p5.Element</a> object.
 * @example
 * <div>
 * <code>
 * let slider;
 *
 * function setup() {
 *   // Create a slider and place it at the top of the canvas.
 *   slider = createSlider(0, 255);
 *   slider.position(10, 10);
 *   slider.size(80);
 *
 *   describe('A dark gray square with a range slider at the top. The square changes color when the slider is moved.');
 * }
 *
 * function draw() {
 *   // Use the slider as a grayscale value.
 *   let g = slider.value();
 *   background(g);
 * }
 * </code>
 * </div>
 *
 * <div>
 * <code>
 * let slider;
 *
 * function setup() {
 *   // Create a slider and place it at the top of the canvas.
 *   // Set its default value to 0.
 *   slider = createSlider(0, 255, 0);
 *   slider.position(10, 10);
 *   slider.size(80);
 *
 *   describe('A black square with a range slider at the top. The square changes color when the slider is moved.');
 * }
 *
 * function draw() {
 *   // Use the slider as a grayscale value.
 *   let g = slider.value();
 *   background(g);
 * }
 * </code>
 * </div>
 *
 * <div>
 * <code>
 * let rangeSlider;
 *
 * function setup() {
 *   // Create a range slider and place it at the top of the canvas.
 *   // Set its min value to 0.
 *   // Set its max value to 255
 *   // Set its low value to 30
 *   // Set its high value to 90
 *   // Set its step size to 50.
 *   rangeSlider = createRangeSlider(0, 255, 30, 90, 50);
 *   rangeSlider.position(10, 10);
 *   rangeSlider.size(80);
 *
 *   describe('A range slider input with two handles, one as a lower value and the second as an upper value.');
 * }
 *
 * function draw() {
 *   // Give the range slider lower and upper values.
 *   let l = rangeSlider.low.value();
 *   let h = rangeSlider.high.value();
 * }
 * </code>
 * </div>
 *
 * <div>
 * <code>
 * let rangeSlider;
 *
 * function setup() {
 *   // Create a slider and place it at the top of the canvas.
 *   // Set its default value to 0.
 *   // Set its step size to 0 so that it moves smoothly.
 *   slider = createRangeSlider(0, 255, 0, 0);
 *   slider.position(10, 10);
 *   slider.size(80);
 *
 *   describe('A black square with a range slider at the top. The square changes color when the slider is moved.');
 * }
 *
 * function draw() {
 *   // Use the slider as a grayscale value.
 *   let g = slider.value();
 *   background(g);
 * }
 * </code>
 * </div>
 */
p5.prototype.createRangeSlider = function (min, max, low, high, step) {
  p5._validateParameters('createRangeSlider', arguments);
  const elt = document.createElement('range-slider'); // this is a web compoonent
  // do the thing
  return addElement(elt, this);
};
