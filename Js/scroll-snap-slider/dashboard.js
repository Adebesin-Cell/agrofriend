import { ScrollSnapSlider } from "./ScrollSnapSlider.js";
import { ScrollSnapPlugin } from "./ScrollSnapPlugin.js";
import { ScrollSnapLoop } from "./ScrollSnapLoop.js";
import { ScrollSnapDraggable } from "./ScrollSnapDraggable.js";

const sliderElement = document.querySelector(".scroll-snap-slider");
const slides = sliderElement.querySelectorAll(".scroll-snap-slide");
const slider = new ScrollSnapSlider(sliderElement);

slider.roundingMethod = function (x) {
  const direction = x <= slider.slide ? -1 : 1;

  if (direction < 0) {
    return Math.floor(x);
  }

  return Math.ceil(x);
};

/**
 * @param {Number} x the current slide position as a decimal (e.g. 1,5 = slide at index 1 has been slided by 50%)
 */
slider.roundingMethod = function (x) {
  // TODO return an integer that will be the the slider.slide
  return Math.round(x);
};

const loopPlugin = new ScrollSnapLoop();
const draggablePlugin = new ScrollSnapDraggable(50);

const prevBtn = document.querySelector(".prev");
const nextBtn = document.querySelector(".next");

if (Array.from(slides).length > 4) {
  prevBtn.style.display = "flex";
  nextBtn.style.display = "flex";
}

const setSelected = function (event) {
  const slideElementIndex = event.detail;
  const slideElement = slides[slideElementIndex];
  const slideIndex = slideElement.dataset.index;
};

prevBtn.addEventListener("click", function () {
  slider.slideTo(slider.slide - 1);
});

nextBtn.addEventListener("click", function () {
  slider.slideTo(slider.slide + 1);
});

slider.addEventListener("slide-pass", setSelected);
slider.addEventListener("slide-stop", setSelected);

const enablePlugin = function (plugin) {
  plugin.enable(slider);
  slider.plugins.set(plugin.id, plugin);
};

const disablePlugin = function (plugin) {
  plugin.disable();
  slider.plugins.delete(plugin.id);
};

enablePlugin(draggablePlugin);
