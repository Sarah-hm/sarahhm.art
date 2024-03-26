class Thumbnail {
  constructor(img, url, id) {
    this.thumbnail = img;
    this.url = url;
    this.id = id;

    this.grid = document.getElementById("homepage-thumbnail-grid");

    this.createThumbnail();
  }

  createThumbnail() {
    this.link = document.createElement("a");
    this.link.setAttribute("href", this.url);
    this.grid.appendChild(this.link);

    this.img = document.createElement("img");
    this.img.setAttribute("src", this.thumbnail);
    this.link.appendChild(this.img);
  }
}
