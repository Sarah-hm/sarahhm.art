window.onload = (event) => {
  fetch("data/projects.json")
    .then((response) => response.json())
    .then((data) => {
      // Remove last project and experiment (template)
      data.projects.pop();
      data.experiments.pop();

      // Make header here :)
      let navCTA = []; //can be "homepage", "cv", "instagram", "email" (documentation is pushed independently)
      let header;
      // Run script according to page attribute (homepage, about, project)
      switch (document.body.getAttribute("page")) {
        case "homepage":
          navCTA = ["about", "instagram"];
          header = new Header(navCTA);
          new HomepageGrid(data);
          break;
        case "about":
          navCTA = ["homepage", "cv", "instagram", "email"];
          header = new Header(navCTA);
          break;
        case "project":
          let projectID = document.body.getAttribute("projectid");
          navCTA = ["homepage"];

          header = new Header(navCTA);
          //Send data from project to new Project Object

          for (let i = 0; i < data.projects.length; i++) {
            if (data.projects[i].id == projectID) {
              new Project(
                data.projects[i].title,
                data.projects[i].subtitle,
                data.projects[i].year,
                data.projects[i].media,
                data.projects[i].keywords,
                data.projects[i].websiteLink,
                data.projects[i].description,
                data.projects[i].visual_documentation,
                data.projects[i].link_documentation,
                data.projects[i].accentColor,
                data.projects[i].accentHue,
                data.projects[i].accentSaturation,
                data
              );
            }
          }

          // if project sidebar is scrolled, hide website title, make project title z-index increase
          document
            .getElementById("project-sidebar")
            .addEventListener("scroll", (el) => {
              this.sidebarMenu = document
                .getElementById("project-sidebar")
                .getElementsByClassName("project-menu__container")[0];

              this.headerMenu = document
                .getElementsByTagName("header")[0]
                .getElementsByClassName("project-menu__container")[0];

              this.sidebarMenu = this.sidebarMenu.getBoundingClientRect();

              this.headerBottom = document
                .getElementsByTagName("header")[0]
                .getBoundingClientRect().bottom;

              if (this.sidebarMenu.bottom === this.headerBottom) {
                document.getElementById("website-title").style.transform =
                  "translateY(-150%)";
                // display the header projects menu
                document
                  .getElementsByTagName("header")[0]
                  .getElementsByClassName(
                    "project-menu__container"
                  )[0].style.display = "fixed";

                this.headerMenu.style.display = "block";
                this.headerMenu.style.position = "absolute";
                // this.headerMenu.style.top = `1rem`;
                // this.headerMenu.style.left = `var(--section--gutter)`;
              } else {
                document.getElementById("website-title").style.transform =
                  "translateY(0)";
                this.headerMenu.style.display = "none";
              }
            });

          break;
        case "experiments":
          let expID = document.body.getAttribute("projectid");
          navCTA = ["homepage"];

          header = new Header(navCTA);
          //Send data from project to new Project Object

          for (let i = 0; i < data.experiments.length; i++) {
            if (data.experiments[i].id == expID) {
              new Project(
                data.experiments[i].title,
                data.experiments[i].subtitle,
                data.experiments[i].year,
                data.experiments[i].media,
                data.experiments[i].keywords,
                data.experiments[i].websiteLink,
                data.experiments[i].description,
                data.experiments[i].visual_documentation,
                data.experiments[i].link_documentation,
                data.experiments[i].accentColor,
                data.experiments[i].accentSaturation,
                data
              );
            }
          }
          break;
        default:
          console.log("404 teehee");
      }
    })
    .catch((error) => console.error(error));
};

function toggleMenu(el) {
  el.lastChild.classList.toggle("project-title-arrow-opened");
  el.nextSibling.classList.toggle("projects-container-opened");
}

// window.addEventListener("click", toggleFullscreen);

function toggleFullscreen() {
  let elem = document.querySelector("video");

  if (!document.fullscreenElement) {
    elem.requestFullscreen().catch((err) => {
      alert(
        `Error attempting to enable fullscreen mode: ${err.message} (${err.name})`
      );
    });
  } else {
    document.exitFullscreen();
  }
}
