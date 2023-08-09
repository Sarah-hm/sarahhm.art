window.onload = (event) => {
  // DOM ELEMENTS variables
  const page = document.getElementById("page");
  const darkModeBtnContainer = document.getElementById("dark-mode-toggle-btn");
  const darkModeCheckbox = darkModeBtnContainer.querySelector(
    "input[name=dark-mode-checkbox]"
  );
  let titles = document.getElementsByClassName("titles");
  let hoveringTitles = document.getElementsByClassName("hovering-titles");

  let subsections = document.getElementsByClassName("subsection");
  //colors
  const black = "rgb(0,0,0)";
  const white = "rgb(255,255,255)";

  darkModeCheckbox.addEventListener("change", function () {
    if (this.checked) {
      console.log(hoveringTitles.length);
      //DARK MODE IS TURNED ON
      console.log("dark mode");
      page.style.backgroundColor = black;

      //change  titles to dark mode
      for (let i = 0; i < titles.length; i++) {
        titles[i].classList.remove("light-mode");
        titles[i].classList.add("dark-mode");
      }
    } else {
      console.log("light mode");
      //LIGHT MODE IS TURNED ON
      page.style.backgroundColor = white;

      //change titles to light mode
      for (let i = 0; i < titles.length; i++) {
        titles[i].classList.remove("dark-mode");
        titles[i].classList.add("light-mode");
      }
    }
  });

  // Doesn't work cause it's applied to the title and the its related subsection
  for (let i = 0; i < hoveringTitles.length; i++) {
    hoveringTitles[i].addEventListener("click", function () {
      if (!this.classList.contains("subsection-opened")) {
        this.classList.add("subsection-opened");
      } else {
        this.classList.remove("subsection-opened");
      }

      // If it is not opened, put the class opened on it + make sure all the other ones are closed (remove class for all others?)
      // If it has the class opened, close it.
    });
  }
};
