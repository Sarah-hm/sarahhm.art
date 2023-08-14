window.onload = (event) => {
  fetch("data/projects.json")
    .then((response) => response.json())
    .then((data) => {
      //create a nav menu with all the projects in the JSON file
      new Header(data, document);

      // Depending on the ID of the project, send the new project object and its data to the class
      let projectID = document
        .getElementById("project-container")
        .getAttribute("project");
      let websiteHeader = document.getElementById("website-header");

      //    Send all projects to a new project class, and in the class populate a
      for (let i = 0; i < data.length; i++) {
        if (data[i].id == projectID) {
          new Project(
            websiteHeader,
            data[i].title,
            data[i].subtitle,
            data[i].year,
            data[i].media,
            data[i].keywords,
            data[i].websiteLink,
            data[i].description,
            data[i].visual_documentation,
            data[i].link_documentation
          );
        }
      }

      // dragElement(document.getElementById("website-projects-popup"));
      // dragElement(document.getElementById("website-contact-popup"));
      // dragElement(document.getElementById("website-img-popup"));
      // dragElement(document.getElementById("website-about-popup"));
      // dragElement(document.getElementById("website-instagram-popup"));

      // dragElement(document.getElementById("map"));
    })
    .catch((error) => console.error(error));

  //Code taken from w3 schools: https://www.w3schools.com/howto/howto_js_draggable.asp
  // Make the element draggable:

  function dragElement(elmnt) {
    var pos1 = 0,
      pos2 = 0,
      pos3 = 0,
      pos4 = 0;

    // otherwise, move the DIV from anywhere inside the DIV:
    elmnt.onmousedown = dragMouseDown;

    function dragMouseDown(e) {
      // get the mouse cursor position at startup:
      pos3 = e.clientX;
      pos4 = e.clientY;
      document.onmouseup = closeDragElement;
      // call a function whenever the cursor moves:
      document.onmousemove = elementDrag;
    }

    function elementDrag(e) {
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
