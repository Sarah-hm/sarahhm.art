window.onload = (event) => {
  const darkModeBtnContainer = document.getElementById("dark-mode-toggle-btn");
  const CheckBoxes = darkModeBtnContainer.getElementsByTagName("input");
  const darkModeCheckBox = CheckBoxes[0];

  if (darkModeCheckBox.checked) {
    alert("checked");
  } else {
    alert("You didn't check it! Let me check it for you.");
  }
};
