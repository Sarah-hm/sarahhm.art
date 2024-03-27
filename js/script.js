window.onload = (event) => {
  fetch("data/projects.json")
    .then((response) => response.json())
    .then((data) => {
      // Remove last project and experiment (template)
      data.projects.pop();
      data.experiments.pop();

      // Make header here :)
      let navCTA = []; //can be "homepage", "cv", "instagram", "email" (documentation is pushed independently)

      // Run script according to page attribute (homepage, about, project)
      switch (document.body.getAttribute("page")) {
        case "homepage":
          navCTA = ["about", "instagram"];
          new Header(navCTA);
          new HomepageGrid(data);
          break;
        case "about":
          navCTA = ["homepage", "cv", "instagram", "email"];
          new Header(navCTA);
          break;
        case "project":
          navCTA = ["homepage"];
          new Header(navCTA);
          //Send data from project to new Project Object
          let projectID = document.body.getAttribute("projectID");

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
                data.projects[i].accentColor
              );
            }
          }
          break;
        case "experiments":
          console.log("we're on an experiments page");
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
    })
    .catch((error) => console.error(error));
};
