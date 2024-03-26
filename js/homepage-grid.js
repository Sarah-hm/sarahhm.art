class HomepageGrid {
  constructor(data, document) {
    this.data = data;
    this.doc = document;

    for (let i = 0; i < this.data.projects.length; i++) {
      console.log(this.data.projects[i]);
      new MenuItem(
        this.data.projects[i].name,
        this.data.projects[i].year,
        this.data.projects[i].url
      );
      new Thumbnail(this.data.projects[i].thumbnail);
    }
  }
}
