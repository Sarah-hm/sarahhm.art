window.onload = (event) => {
  fetch("data/projects.json")
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      //push all the data in their own object

      //make if statement to know if the document has a project (gas a meta data called project)

      // Depending on the ID of the project, send the new project object and its data to the class
      let projectID = document.body.getAttribute("project");
      //    Send all projects to a new project class, and in the class populate a
      for (let i = 0; i < data.length; i++) {
        if (data[i].id == projectID) {
          new Project(
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
    })
    .catch((error) => console.error(error));
};
