const notificationBtn = document.querySelector(".header--notification");
const notificationBox = document.querySelector(".notification");

notificationBtn.addEventListener("click", function (e) {
  notificationBox.classList.toggle("notification--hidden");
});
