class HomepageGrid {
  constructor(data) {
    this.data = data;

    for (let i = 0; i < this.data.projects.length; i++) {
      new MenuItem(
        this.data.projects[i].title,
        this.data.projects[i].year,
        this.data.projects[i].url,
        this.data.projects[i].id
      );
      new Thumbnail(
        this.data.projects[i].thumbnail,
        this.data.projects[i].url,
        this.data.projects[i].id
      );
    }
  }
}
