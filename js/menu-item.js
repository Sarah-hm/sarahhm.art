class MenuItem {
  constructor(title, year, url, id) {
    this.title = title;
    this.year = year;
    this.url = url;
    this.id = id;

    this.menu = document.getElementById("homepage-menu");

    this.createMenuItem();
  }

  createMenuItem() {
    this.link = document.createElement("a");
    this.link.setAttribute("href", this.url);
    this.menu.appendChild(this.link);

    this.listItem = document.createElement("li");
    this.link.appendChild(this.listItem);

    this.title = document.createTextNode(this.title);
    this.listItem.appendChild(this.title);
    console.log("selut");
  }
}
