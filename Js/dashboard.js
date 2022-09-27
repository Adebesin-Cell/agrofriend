const tabs = document.querySelectorAll(".account__button");
const tabsContainer = document.querySelector(".account__wrapper");
const tabsContent = document.querySelectorAll(".account__content");

tabsContainer.addEventListener("click", function (e) {
  const clicked = e.target.closest(".account__button");
  //Guard clause
  if (!clicked) return;

  //Active tab
  tabs.forEach((tab) => tab.classList.remove("account__button--active"));
  clicked.classList.add("account__button--active");

  //Active content area
  tabsContent.forEach((content) => {
    content.classList.remove("account__content--active");
  });
  document
    .querySelector(`.account__content--${clicked.dataset.tab}`)
    .classList.add("account__content--active");
});

const notificationBtn = document.querySelector(".header--notification");
const notificationBox = document.querySelector(".notification");

notificationBtn.addEventListener("click", function (e) {
  notificationBox.classList.toggle("notification--hidden");
});

const slideContainer = document.querySelector(".dashboard__wrapper");
let mouseDown = false;
let startX, scrollLeft;

const startDragging = function (event) {
  mouseDown = true;
  startX = event.pageX - slideContainer.offsetLeft;
  scrollLeft = slideContainer.scrollLeft;
};

const stopDragging = function () {
  mouseDown = false;
};

slideContainer.addEventListener("mousemove", function (e) {
  e.preventDefault();
  if (!mouseDown) return;
  const x = e.pageX - slideContainer.offsetLeft;
  const scroll = x - startX;
  slideContainer.scrollLeft = scrollLeft - scroll;
});

slideContainer.addEventListener("mousedown", startDragging, false);
slideContainer.addEventListener("mouseup", stopDragging, false);
slideContainer.addEventListener("mouseleave", stopDragging, false);

const accountContainer = document.querySelector(".account__tabs");
let isMouseDown = false;
let startHorizontal, scrollLeftX;

const startDraggingList = function (event) {
  isMouseDown = true;
  startHorizontal = event.pageX - slideContainer.offsetLeft;
  scrollLeftX = accountContainer.scrollLeft;
};

const stopDraggingList = function () {
  isMouseDown = false;
};

accountContainer.addEventListener("mousemove", function (e) {
  e.preventDefault();
  if (!isMouseDown) return;
  const x = e.pageX - accountContainer.offsetLeft;
  console.log(x);
  const scroll = x - startHorizontal;
  accountContainer.scrollLeft = scrollLeftX - scroll;
});

accountContainer.addEventListener("mousedown", startDraggingList, false);
accountContainer.addEventListener("mouseup", stopDraggingList, false);
accountContainer.addEventListener("mouseleave", stopDraggingList, false);
