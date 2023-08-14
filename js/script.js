window.onload = (event) => {
  const doc = document;
  //====display homepage website popups====
  const websiteTitleContainer = document.getElementsByClassName(
    "website-title-container"
  );

  const navMenuBtns = document.getElementsByClassName("nav-menu-btn");
  const websitePopups = document.getElementsByClassName("website-popup");

  const navMenuPrjPopup = document.getElementById("website-projects-popup");
  const navMenuAboutPopup = document.getElementById("website-about-popup");
  const navMenuContactPopup = document.getElementById("website-contact-popup");
  const navMenuIgPopup = document.getElementById("website-instagram-popup");
  const popupCloseBtns = document.getElementsByClassName(
    "website-popup-close-btn"
  );

  const emailCopyBtn = document.getElementById("email-tooltip");
  const toolTipText = document.getElementById("tooltiptext");

  // ==== Load projects in the projects' list ====
  let projectsList = document.getElementById("projects-popup-list");
  fetch("data/projects.json")
    .then((response) => response.json())
    .then((data) => {
      //create a nav menu with all the projects in the JSON file
      new Header(data, doc);
      // === put the project in the list of the projects' poup window ===
      // for (let i = 0; i < data.length; i++) {
      //   let newPrj = document.createElement("li");
      //   newPrj.classList.add("prj-popup-title");
      //   projectsList.appendChild(newPrj);
      //   newPrj.innerHTML = `<a href = ${data[i].url}><sup> ${data[i].year} </sup>${data[i].title}</a>`;
      // }
    })
    .catch((error) => console.error(error));

  // console.log(Object.keys(navMenuBtns));
  //Turn object like array into an array from : https://java2blog.com/typeerror-foreach-is-not-function-javascript/#:~:text=foreach%20is%20not%20a%20function%20occurs%20when%20we%20call%20foreach,array%20like%20object%20to%20array.

  //redirect to index.html when clicking website title container
  Object.keys(websiteTitleContainer).forEach((key) => {
    websiteTitleContainer[key].addEventListener("click", () => {
      console.log("clicked");
      window.location.href = "/index.html";
    });
  });

  Object.keys(navMenuBtns).forEach((key) => {
    navMenuBtns[key].addEventListener("click", () => {
      switch (navMenuBtns[key].id) {
        case "nav-menu-prj-btn":
          //toggle projects pop-up
          recalculatePosition(navMenuPrjPopup);
          navMenuPrjPopup.classList.toggle("popup-closed");
          break;
        case "nav-menu-abt-btn":
          //toggle about pop-up
          recalculatePosition(navMenuAboutPopup);
          navMenuAboutPopup.classList.toggle("popup-closed");
          break;
        case "nav-menu-cntct-btn":
          // toggle contact + instagram pop-up
          recalculatePosition(navMenuContactPopup);
          navMenuContactPopup.classList.toggle("popup-closed");
          recalculatePosition(navMenuIgPopup);
          navMenuIgPopup.classList.toggle("popup-closed");
          break;
        default:
          console.log("not a button");
          break;
      }
    });
  });

  // == puts clicked popup on the top of z-index ==
  let popupZindex = "4";
  Object.keys(websitePopups).forEach((key) => {
    websitePopups[key].addEventListener("mousedown", () => {
      let newZindex = popupZindex++;
      switch (websitePopups[key].id) {
        case "website-projects-popup":
          //puts projects pop-up on top
          navMenuPrjPopup.style.zIndex = newZindex;
          break;
        case "website-about-popup":
          //puts about pop-up on top
          navMenuAboutPopup.style.zIndex = newZindex;
          break;
        case "website-contact-popup":
          //puts about pop-up on top
          navMenuContactPopup.style.zIndex = newZindex;
          break;
        case "website-instagram-popup":
          //puts about pop-up on top
          navMenuIgPopup.style.zIndex = newZindex;
          break;
        default:
          console.log("not a button");
          break;
      }
    });
  });

  // == Close popup when clicking on X button ==
  Object.keys(popupCloseBtns).forEach((key) => {
    popupCloseBtns[key].addEventListener("click", () => {
      switch (popupCloseBtns[key].id) {
        case "projects-popup-close-btn":
          //close projects pop-up
          navMenuPrjPopup.classList.toggle("popup-closed");
          break;
        case "about-popup-close-btn":
          //close about pop-up
          navMenuAboutPopup.classList.toggle("popup-closed");
          break;
        case "contact-popup-close-btn":
          // close contact pop-up
          navMenuContactPopup.classList.toggle("popup-closed");
          break;
        case "instagram-popup-close-btn":
          // close instagram pop-up
          navMenuIgPopup.classList.toggle("popup-closed");
          break;
        default:
          console.log("not a button");
          break;
      }
    });
  });

  // == Recalculate position within viewport everytime popup opens
  function recalculatePosition(popup) {
    let width = window.innerWidth;
    let height = window.innerHeight;

    let xpos = Math.floor(Math.random() * width);
    let ypos = Math.floor(Math.random() * height);

    popup.style.left = `${xpos}px`;
    popup.style.top = `${ypos}px`;
  }

  // // email popup: change tool tip text when clicked
  // emailCopyBtn.addEventListener("click", () => {
  //   let OriginalText = toolTipText.innerHTML;
  //   console.log(OriginalText);
  //   toolTipText.innerHTML = "Copied to clipboard!";
  //   setTimeout(() => {
  //     toolTipText.innerHTML = OriginalText;
  //   }, 750);
  // });

  // ==== draggable map =====

  // Make map zoom in/out when scroll
  document.addEventListener("scroll", (event) => {
    console.log(event);
  });

  //Code taken from w3 schools: https://www.w3schools.com/howto/howto_js_draggable.asp
  // Make the element draggable:
  dragElement(document.getElementById("map"));
  // dragElement(document.getElementById("website-projects-popup"));
  // dragElement(document.getElementById("website-contact-popup"));
  // dragElement(document.getElementById("website-about-popup"));
  // dragElement(navMenuIgPopup);

  function dragElement(elmnt) {
    var pos1 = 0,
      pos2 = 0,
      pos3 = 0,
      pos4 = 0;
    if (document.getElementById(elmnt.id + "header")) {
      // if present, the header is where you move the DIV from:
      document.getElementById(elmnt.id + "header").onmousedown = dragMouseDown;
    } else {
      // otherwise, move the DIV from anywhere inside the DIV:
      elmnt.onmousedown = dragMouseDown;
    }

    function dragMouseDown(e) {
      e = e || window.event;
      e.preventDefault();
      // get the mouse cursor position at startup:
      pos3 = e.clientX;
      pos4 = e.clientY;
      document.onmouseup = closeDragElement;
      // call a function whenever the cursor moves:
      document.onmousemove = elementDrag;
    }

    function elementDrag(e) {
      e = e || window.event;
      e.preventDefault();
      // calculate the new cursor position:
      pos1 = pos3 - e.clientX;
      pos2 = pos4 - e.clientY;
      pos3 = e.clientX;
      pos4 = e.clientY;
      // set the element's new position:
      elmnt.style.top = elmnt.offsetTop - pos2 + "px";
      elmnt.style.left = elmnt.offsetLeft - pos1 + "px";
    }

    function closeDragElement() {
      // stop moving when mouse button is released:
      document.onmouseup = null;
      document.onmousemove = null;
    }
  }
};
