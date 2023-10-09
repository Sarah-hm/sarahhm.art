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
        let projectBtns = document.getElementsByClassName("prj-popup-title");

        //decide a random arbitrary starting point for the cascade
        let startX = window.innerWidth / 3;
        let startY = window.innerHeight / 4;

        const alpha = window.innerWidth / 10;

        let newX = startX;
        let newY = startY;

        let previousPrjUrl = "";

        let newStartX = startX;
        let firstStartX = startX;

        Object.keys(projectBtns).forEach((key) => {
          //add event listener on hover to create a new image popup window
          projectBtns[key].addEventListener("mouseover", () => {
            let prjUrl = projectBtns[key]
              .getElementsByTagName("a")[0]
              .getAttribute("href");

            //if the prj URL isn't the same as the one who just got created, create a new popup
            if (prjUrl != previousPrjUrl) {
              previousPrjUrl = prjUrl;
              let imgUrl;
              let imgTitle;
              let prjId;
              Object.keys(data).forEach((key) => {
                if (data[key].url === prjUrl) {
                  imgUrl = data[key].visual_documentation[0].source;
                  imgTitle = data[key].title;
                  prjId = data[key].id;
                }
              });

              //increase the position
              newX = newX + alpha;
              newY = newY + alpha;

              const maxX = (window.innerWidth / 5) * 4;
              const maxY = (window.innerHeight / 3) * 2;

              // if img position is beyond the maximum X position (right), return to left-hand side
              if (newX >= maxX) {
                let ranNum = Math.floor(Math.random() * 50) + 35;
                newX = ranNum;
              }
              // If img position is beyond the maximum Y position (bottom), return to top minimum
              else if (newY >= maxY) {
                newY = 150;
              }

              //create a project img popup for every picture
              new ProjectImgPopup(imgUrl, imgTitle, prjUrl, prjId, newX, newY);
            }
          });
        });
      }
    })
    .catch((error) => console.error(error));
};

function copyText() {
  console.log("copy text");
}
