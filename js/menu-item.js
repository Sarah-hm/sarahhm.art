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
      case "menu":
        this.link = document.createElement("a");
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
      default:
        console.log("Not a supported callback");
    }
  }

  toggleMenu() {
    if (this.menuOpened) {
      this.menuOpened = false;
    } else {
      this.menuOpened = true;
      console.log("menu is toggled");
    }
  }
}
