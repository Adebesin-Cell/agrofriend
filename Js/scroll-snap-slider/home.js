import { ScrollSnapSlider } from "./ScrollSnapSlider.js";
import { ScrollSnapPlugin } from "./ScrollSnapPlugin.js";
import { ScrollSnapLoop } from "./ScrollSnapLoop.js";
import { ScrollSnapDraggable } from "./ScrollSnapDraggable.js";

const sliderElement = document.querySelector(".scroll-snap-slider");
const sliderElement2 = document.querySelector(".scroll-snap-slider--2");
const slides = sliderElement.querySelectorAll(".scroll-snap-slide");
const slides2 = sliderElement2.querySelectorAll(".scroll-snap-slide");
const slider = new ScrollSnapSlider(sliderElement);
const sliderTwo = new ScrollSnapSlider(sliderElement2);

slider.roundingMethod = function (x) {
  const direction = x <= slider.slide ? -1 : 1;

  if (direction < 0) {
    return Math.floor(x);
  }

  return Math.ceil(x);
};

sliderTwo.roundingMethod = function (x) {
  const direction = x <= sliderTwo.slide ? -1 : 1;

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

sliderTwo.roundingMethod = function (x) {
  // TODO return an integer that will be the the slider.slide
  return Math.round(x);
};

const loopPlugin = new ScrollSnapLoop();
const draggablePlugin = new ScrollSnapDraggable(50);

const prevBtn = document.querySelector(".prev");
const nextBtn = document.querySelector(".next");
const prevBtn2 = document.querySelector(".prev--1");
const nextBtn2 = document.querySelector(".next--2");

const setSelected = function (event) {
  const slideElementIndex = event.detail;
  const slideElement = slides[slideElementIndex];
  const slideIndex = slideElement.dataset.index;
};

const setSelected2 = function (event) {
  const slideElementIndex = event.detail;
  const slideElement = slides2[slideElementIndex];
  const slideIndex = slideElement.dataset.index;
};

prevBtn.addEventListener("click", function () {
  slider.slideTo(slider.slide - 1);
});

nextBtn.addEventListener("click", function () {
  slider.slideTo(slider.slide + 1);
});

prevBtn2.addEventListener("click", function () {
  sliderTwo.slideTo(sliderTwo.slide - 1);
});

nextBtn2.addEventListener("click", function () {
  sliderTwo.slideTo(sliderTwo.slide + 1);
});

slider.addEventListener("slide-pass", setSelected);
slider.addEventListener("slide-stop", setSelected);

sliderTwo.addEventListener("slide-pass", setSelected2);
sliderTwo.addEventListener("slide-stop", setSelected2);

const enablePlugin = function (plugin) {
  plugin.enable(slider);
  slider.plugins.set(plugin.id, plugin);
};

const disablePlugin = function (plugin) {
  plugin.disable();
  slider.plugins.delete(plugin.id);
};

enablePlugin(draggablePlugin);
