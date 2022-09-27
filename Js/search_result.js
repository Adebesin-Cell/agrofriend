const user_button = document.querySelector(".user");
const user_action = document.querySelector(".actions");

const closeUserAction = function () {
  user_action.classList.toggle("active");
};

user_button.addEventListener("click", closeUserAction);

const mobileForm = document.querySelector(".mobile-header__form");
const mobileEditBox = document.querySelector(".edit");
const mobileEditCloseBtn = document.querySelector(
  ".mobile-header__link--close"
);

mobileEditCloseBtn.addEventListener("click", function (e) {
  mobileEditBox.classList.add("edit--hidden");
});

mobileForm.addEventListener("click", function (e) {
  mobileEditBox.classList.remove("edit--hidden");
});

const mobileViewBtn = document.querySelector(".mobile__view-open");
const mobileView = document.querySelector(".mobile__view");
const mobileMapButton = document.querySelector(".map__button");

mobileViewBtn.addEventListener("click", function (e) {
  mobileView.classList.add("max");
  mobileViewBtn.style.display = "none";
});

mobileMapButton.addEventListener("click", function (e) {
  mobileView.classList.remove("max");
  mobileViewBtn.style.display = "block";
});

const mobileSearchInput = document.querySelector(".modal__input");
const clearMobileSearchInputBtn = document.querySelector(
  ".modal__header .clear"
);

mobileSearchInput.addEventListener("keyup", function (e) {
  if (mobileSearchInput.value.trim().length >= 0) {
    clearMobileSearchInputBtn.style.display = "flex";
  }

  if (mobileSearchInput.value.trim() <= 0) {
    clearMobileSearchInputBtn.style.display = "none";
  }
});

clearMobileSearchInputBtn.addEventListener("click", function (e) {
  mobileSearchInput.value = "";
  mobileSearchInput.focus();
  clearMobileSearchInputBtn.style.display = "none";
});

const mobileEditButton = document.querySelector(".edit__button");
const mobileModalSearch = document.querySelector(".modal-search");
const mobileModalExitBtn = document.querySelector(".modal__header .icon");

mobileEditButton.addEventListener("click", function (e) {
  mobileModalSearch.classList.remove("modal-search--hidden");
  mobileSearchInput.focus();
});

mobileModalExitBtn.addEventListener("click", function (e) {
  mobileSearchInput.blur();
  mobileModalSearch.classList.add("modal-search--hidden");
});
