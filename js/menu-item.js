class MenuItem {
  constructor(title, year, url, id, menu, callback) {
    this.title = title;
    this.year = year;
    this.url = url;
    this.id = id;
    this.menu = menu;
    this.callback = callback;

    this.menuOpened = false;
    this.createMenuItem();
  }

  createMenuItem() {
    switch (this.callback) {
      case "redirection":
        this.link = document.createElement("a");
        this.link.setAttribute("href", this.url);
        this.menu.appendChild(this.link);

        this.listItem = document.createElement("li");
        this.link.appendChild(this.listItem);

        this.title = document.createTextNode(this.title);
        this.listItem.appendChild(this.title);

        this.superscript = document.createElement("sup");
        this.listItem.appendChild(this.superscript);

        this.subtitle = document.createTextNode(this.year);
        this.superscript.appendChild(this.subtitle);
        break;
      case "submenu":
        this.link = document.createElement("a");
        this.link.setAttribute("onclick", "toggleMenu(this)");
        this.menu.appendChild(this.link);

        this.listItem = document.createElement("li");
        this.link.appendChild(this.listItem);

        this.title = document.createTextNode(this.title);
        this.listItem.appendChild(this.title);

        this.superscript = document.createElement("sup");
        this.listItem.appendChild(this.superscript);

        this.subtitle = document.createTextNode(this.year);
        this.superscript.appendChild(this.subtitle);

        this.arrowContainer = document.createElement("p");
        this.arrowContainer.setAttribute("id", "submenu-arrow");
        this.link.appendChild(this.arrowContainer);
        this.arrow = document.createTextNode("∟");
        this.arrowContainer.appendChild(this.arrow);

        break;
      default:
        console.log("Not a supported callback");
    }
  }
}
