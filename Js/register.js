const selectField = document.querySelector(".select__field");
const selectInput = document.querySelector(".register__input--select");
const options = document.querySelectorAll(".select__item");
const selectList = document.querySelector(".select__list");

selectInput.blur();

selectField.addEventListener("click", function () {
  selectList.classList.toggle("hidden");
  selectInput.blur();
});

options.forEach((option) => {
  option.addEventListener("click", function () {
    selectInput.value = this.textContent;
    selectList.classList.toggle("hidden");
    selectInput.blur();
  });
});
