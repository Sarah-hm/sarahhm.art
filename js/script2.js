window.onload = (event) => {
  // DOM ELEMENTS variables
  const page = document.getElementById("page");
  const darkModeBtnContainer = document.getElementById("dark-mode-toggle-btn");
  const darkModeCheckbox = darkModeBtnContainer.querySelector(
    "input[name=dark-mode-checkbox]"
  );
  let hoveringTitles = document.getElementsByClassName("hovering-titles");

  //colors
  const black = "rgb(0,0,0)";
  const white = "rgb(255,255,255)";

  darkModeCheckbox.addEventListener("change", function () {
    if (this.checked) {
      console.log(hoveringTitles.length);
      //DARK MODE IS TURNED ON
      console.log("Checkbox is checked..");
      page.style.backgroundColor = black;

      //change hovering titles to dark mode
      for (let i = 0; i < hoveringTitles.length; i++) {
        hoveringTitles[i].classList.remove("light-mode");
        hoveringTitles[i].classList.add("dark-mode");
      }
    } else {
      console.log("dark mode");
      //LIGHT MODE IS TURNED ON
      page.style.backgroundColor = white;

      //change hovering titles to light mode
      for (let i = 0; i < hoveringTitles.length; i++) {
        hoveringTitles[i].classList.remove("light-mode");
        hoveringTitles[i].classList.add("dark-mode");
      }
    }
  });
};
