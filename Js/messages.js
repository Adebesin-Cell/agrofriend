const notificationBtn = document.querySelector(".header--notification");
const notificationBox = document.querySelector(".notification");

notificationBtn.addEventListener("click", function (e) {
  notificationBox.classList.toggle("notification--hidden");
});

const inboxMenuBtn = document.querySelector(".icon-menu");
const inboxMenu = document.querySelector(".message__sidebar");

inboxMenuBtn.addEventListener("click", function (e) {
  inboxMenu.classList.toggle("message__sidebar--hidden");
});

const archiveBtn = document.querySelectorAll(".icon-archive");
const modalBox = document.querySelector(".modal");
const modalOverlay = document.querySelector(".overlay");
const cancelModal = document.querySelectorAll(".modal__cancel");

archiveBtn.forEach((btn) => {
  btn.addEventListener("click", function (e) {
    modalBox.classList.remove("modal--hidden");
    modalOverlay.classList.remove("overlay--hidden");
  });
});

const closeModal = function (e) {
  modalBox.classList.add("modal--hidden");
  modalOverlay.classList.add("overlay--hidden");
};

cancelModal.forEach((btn) => {
  btn.addEventListener("click", closeModal);
});

modalOverlay.addEventListener("click", closeModal);

const exitBtn = document.querySelector(".icon-back");
const mobileSearch = document.querySelector(".mobile__search");
const mobilePlaceholder = document.querySelector(".mobile__placeholder");
const mobileSearchInput = document.querySelector(".mobile__search-input");

exitBtn.addEventListener("click", function (e) {
  mobileSearch.classList.add("mobile__search--hidden");
  mobileSearchInput.blur();
});

mobilePlaceholder.addEventListener("click", function (e) {
  mobileSearch.classList.remove("mobile__search--hidden");
  mobileSearchInput.focus();
});

const menuBtn = document.querySelector(".mobile__form .icon-menu");
const menuOverlay = document.querySelector(".mobile__overlay");
const mobileMenu = document.querySelector(".mobile__menu");
const body = document.querySelector("body");

menuBtn.addEventListener("click", function (e) {
  mobileMenu.classList.remove("mobile__menu--hidden");
  menuOverlay.classList.remove("mobile__overlay--hidden");
  body.classList.add("no-scroll");
});

menuOverlay.addEventListener("click", function (e) {
  mobileMenu.classList.add("mobile__menu--hidden");
  menuOverlay.classList.add("mobile__overlay--hidden");
  body.classList.remove("no-scroll");
});
