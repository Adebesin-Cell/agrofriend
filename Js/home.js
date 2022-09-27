const sectionHeader = document.querySelector(".drop");
const header = document.querySelector(".header--1");
const headerFixed = document.querySelector(".header--2");
const headerSearchBox = document.querySelector(".header__search-container");

const headerHeight = header.getBoundingClientRect().height;

const stickyNav = function (entries) {
  const [entry] = entries;

  if (!entry.isIntersecting) {
    header.classList.add("header--hidden");
    headerFixed.classList.remove("header--hidden");
    headerSearchBox.classList.add("header__search-container--hidden");
  } else {
    header.classList.remove("header--hidden");
    headerFixed.classList.add("header--hidden");
    headerSearchBox.classList.remove("header__search-container--hidden");
  }
};

const headerObserver = new IntersectionObserver(stickyNav, {
  root: null,
  threshold: 0.5,
  rootMargin: `${headerHeight}px`,
});

headerObserver.observe(sectionHeader);

const showMore = document.querySelector(".testimonial__button--show-more");
const allList = Array.from(document.querySelectorAll(".testimonial__list"));
const overlay = document.querySelector(".testimonial__overlay");
const showLess = document.querySelector(".testimonial__button--show-less");

showMore.addEventListener("click", function (e) {
  allList.forEach((list) => {
    list.style.maxHeight = "100%";
    list.style.overflow = "visible";
  });

  showMore.style.display = "none";
  showLess.style.display = "block";
});

showLess.addEventListener("click", function (e) {
  allList.forEach((list) => {
    list.style.maxHeight = "550px";
    list.style.overflow = "hidden";
  });

  showLess.style.display = "none";
  showMore.style.display = "block";
});

const mobileForms = Array.from(document.querySelectorAll(".form"));
const mobileSearch = document.querySelector(".modal-search");
const mobileSearchCloseBtn = document.querySelector(".modal__header .icon");
const body = document.querySelector("body");

mobileForms.forEach((form) => {
  form.addEventListener("submit", function (e) {
    e.preventDefault();
    mobileSearch.classList.remove("modal-search--hidden");
    body.classList.add("no-scroll");
  });
});

mobileSearchCloseBtn.addEventListener("click", function (e) {
  mobileSearch.classList.add("modal-search--hidden");
  body.classList.remove("no-scroll");
});
