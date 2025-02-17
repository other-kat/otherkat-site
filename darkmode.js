let darkMode = localStorage.getItem("darkMode");
const darkModeToggle = document.querySelector("#dark-mode-toggle");

const enableDarkMode = () => {
  document.body.classList.add('darkmode');
  localStorage.setItem("darkMode", "enabled")
};

const disableDarkMode = () => {
  document.body.classList.add('darkmode');
  localStorage.setItem("darkMode", null)
};

if (darkMode == 'enable') {
  enableDarkMode();
}

darkModeToggle.addEventListener("click", () => {
  darkMode = localStorage.getItem("darkmode");
  if (darkMode !== "enabled") {
    enableDarkMode();
  } else {
    disableDarkMode();
  }
});