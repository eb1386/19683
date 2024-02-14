window.onload = function() {
  var darkModeToggle = document.querySelector(".dark-mode-toggle");

  darkModeToggle.addEventListener("click", function() {
      document.body.classList.toggle("dark-mode");
  });
};
