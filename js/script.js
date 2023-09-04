window.onload = (event) => {
  fetch("data/projects.json")
    .then((response) => response.json())
    .then((data) => {
      //create a nav menu with all the projects in the JSON file
      new Header(data, document);

      // If it's a project page:
      // Depending on the ID of the project, send the new project object and its data to the class
      if (document.getElementById("project-container")) {
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
      }

      if (document.getElementById("homepage")) {
        console.log("homepage");
        let projectBtns = document.getElementsByClassName("prj-popup-title");

        let startX = window.innerWidth / 3;
        let startY = window.innerHeight / 4;

        const alpha = 50;

        let newX = startX;
        let newY = startY;
        Object.keys(projectBtns).forEach((key) => {
          //decide a random arbitrary starting point for the cascade

          //add event listener on hover to create a new image popup window
          projectBtns[key].addEventListener("mouseover", () => {
            let prjUrl = projectBtns[key]
              .getElementsByTagName("a")[0]
              .getAttribute("href");

            let imgUrl;
            Object.keys(data).forEach((key) => {
              if (data[key].url === prjUrl) {
                imgUrl = data[key].visual_documentation[0].source;
                imgTitle = data[key].title;
              }
            });

            //increase the position
            newX = newX + alpha;
            newY = newY + alpha;
            //create a project img popup for every picture
            new ProjectImgPopup(imgUrl, imgTitle, newX, newY);
          });
        });
      }
    })
    .catch((error) => console.error(error));
};
