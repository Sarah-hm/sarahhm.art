class HomepageGrid {
  constructor(data) {
    this.data = data;

    this.menuCallback = "redirection";
    this.menu = document.getElementById("homepage-menu");
    new Menu(this.data, this.menuCallback, this.menu);

    for (let i = 0; i < this.data.projects.length; i++) {
      new Thumbnail(
        this.data.projects[i].thumbnail,
        this.data.projects[i].url,
        this.data.projects[i].id
      );
    }
  }
}
