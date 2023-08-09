window.onload = (event) => {
  console.log("hello");
  fetch("data/projects.json")
    .then((response) => response.json())
    .then((data) => {
      //push all the data in their own object

      // Depending on the ID of the project, send the new project object and its data to the class
      let projectID = document.body.getAttribute("project");
      //    Send all projects to a new project class, and in the class populate a
      for (let i = 0; i < data.length; i++) {
        if (data[i].id == projectID) {
          new Project(
            document.body,
            data[i].title,
            data[i].subtitle,
            data[i].year
          );
        }
      }
    })
    .catch((error) => console.error(error));
};
