// Jquery needs to be implemented in vanilla but here it is for right now
$(document).ready(function () {
  window.addEventListener("load", (event) => {
    //====display homepage website popups====

    const navMenuBtns = document.getElementsByClassName("nav-menu-btn");
    const navMenuPrjPopup = document.getElementById("website-projects-popup");
    const navMenuAboutPopup = document.getElementById("website-about-popup");
    const navMenuContactPopup = document.getElementById(
      "website-contact-popup"
    );
    const websitePopups = document.querySelector(".website-popup");

    // console.log(Object.keys(navMenuBtns));
    //Turn object like array into an array from : https://java2blog.com/typeerror-foreach-is-not-function-javascript/#:~:text=foreach%20is%20not%20a%20function%20occurs%20when%20we%20call%20foreach,array%20like%20object%20to%20array.

    Object.keys(navMenuBtns).forEach((key) => {
      console.log(key + " - " + navMenuBtns[key]);
      navMenuBtns[key].addEventListener("click", () => {
        switch (navMenuBtns[key].id) {
          case "nav-menu-prj-btn":
            //open projects pop-up
            recalculatePosition(navMenuPrjPopup);
            navMenuPrjPopup.classList.toggle("popup-closed");
            break;
          case "nav-menu-abt-btn":
            //opens about pop-up
            recalculatePosition(navMenuAboutPopup);
            navMenuAboutPopup.classList.toggle("popup-closed");
            break;
          case "nav-menu-cntct-btn":
            // opens contact pop-up
            recalculatePosition(navMenuContactPopup);
            navMenuContactPopup.classList.toggle("popup-closed");
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

    // ==== draggable map =====
    //Code taken from w3 schools: https://www.w3schools.com/howto/howto_js_draggable.asp
    // Make the DIV element draggable:

    dragElement(document.getElementById("map"));

    function dragElement(elmnt) {
      var pos1 = 0,
        pos2 = 0,
        pos3 = 0,
        pos4 = 0;
      if (document.getElementById(elmnt.id + "header")) {
        // if present, the header is where you move the DIV from:
        document.getElementById(elmnt.id + "header").onmousedown =
          dragMouseDown;
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
  });
});
