class Menu {
  constructor(data, callback, container) {
    this.data = data;
    this.callback = callback;
    this.container = container;

    switch (this.callback) {
      case "redirection":
        // If on a project page, only send the projects we are not on the page of
        if (document.body.getAttribute("page") === "project") {
          this.id = document.body.getAttribute("projectid");
          for (this.i = 0; this.i < this.data.projects.length; this.i++) {
            if (this.id != this.data.projects[this.i].id) {
              new MenuItem(
                this.data.projects[this.i].title,
                this.data.projects[this.i].year,
                this.data.projects[this.i].url,
                this.data.projects[this.i].id,
                this.container,
                this.callback
              );
            }
          }
        }
        // if on any other page, send all projects
        else {
          for (this.i = 0; this.i < this.data.projects.length; this.i++) {
            new MenuItem(
              this.data.projects[this.i].title,
              this.data.projects[this.i].year,
              this.data.projects[this.i].url,
              this.data.projects[this.i].id,
              this.container,
              this.callback
            );
          }
        }

        break;
      case "title-project":
        console.log("title project");
        break;
      default:
        console.log("not a registered callback");
    }
  }
}
