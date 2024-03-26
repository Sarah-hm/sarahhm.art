window.onload = (event) => {
  fetch("data/projects.json")
    .then((response) => response.json())
    .then((data) => {
      // Remove last project and experiment (template)
      data.projects.pop();
      data.experiments.pop();

      // Run script according to page attribute (homepage, about, project)
      switch (document.body.getAttribute("page")) {
        case "homepage":
          new HomepageGrid(data, document);
          // for (let i = 0; i < data.projects.length - 1; i++) {
          //   if (data.projects[i].id == projectID) {
          //     new HomepageGrid(
          //       data.projects[i].title,
          //       data.projects[i].subtitle,
          //       data.projects[i].year,
          //       data.projects[i].thumbnail,
          //       data.projects[i].visual_documentation,
          //       data.projects[i].link_documentation,
          //       data.projects[i].accentColor
          //     );
          //   }
          // }
          break;
        case "about":
          console.log("we're on the about page");
          break;
        case "project":
          console.log("we're on a project page");
          break;
        default:
          console.log("404 teehee");
      }

      // If it's a project page:
      // Depending on the ID of the project, send the new project object and its data to the class
      if (document.getElementById("project-container")) {
        let projectID = document
          .getElementById("project-container")
          .getAttribute("project");
        let websiteHeader = document.getElementById("website-header");

        //    Send all projects to a new project class, and in the class populate a
        for (let i = 0; i < data.projects.length; i++) {
          if (data.projects[i].id == projectID) {
            new Project(
              websiteHeader,
              data.projects[i].title,
              data.projects[i].subtitle,
              data.projects[i].year,
              data.projects[i].media,
              data.projects[i].keywords,
              data.projects[i].websiteLink,
              data.projects[i].description,
              data.projects[i].visual_documentation,
              data.projects[i].link_documentation,
              data.projects[i].accentColor
            );
          }
        }
      }

      if (document.getElementById("homepage")) {
        let projectBtns = document.getElementsByClassName("prj-list-title");

        //decide a random arbitrary starting point for the cascade
        let startX = window.innerWidth / 3;
        let startY = window.innerHeight / 4;

        const alpha = window.innerWidth / 10;

        let newX = startX;
        let newY = startY;

        let previousPrjUrl = "";

        let newStartX = startX;
        let firstStartX = startX;
      }
    })
    .catch((error) => console.error(error));
};
