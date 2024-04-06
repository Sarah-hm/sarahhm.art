class Menu {
  constructor(data, callback, container) {
    this.data = data;
    this.callback = callback;
    this.container = container;

    switch (this.callback) {
      case "redirection":
        if (document.body.getAttribute("page") === "project") {
          let id = document.body.getAttribute("projectID");
          for (let i = 0; i < this.data.projects.length; i++) {
            if (!id) {
              new MenuItem(
                this.data.projects[i].title,
                this.data.projects[i].year,
                this.data.projects[i].url,
                this.data.projects[i].id,
                this.container
              );
            }
          }
        } else {
          for (let i = 0; i < this.data.projects.length; i++) {
            new MenuItem(
              this.data.projects[i].title,
              this.data.projects[i].year,
              this.data.projects[i].url,
              this.data.projects[i].id,
              this.container
            );
          }
        }

        break;
      case "title-project":
        break;
      default:
        console.log("not a registered callback");
    }
  }
}
