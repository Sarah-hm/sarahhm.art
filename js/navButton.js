class NavButton {
  constructor(text, url, target, container) {
    this.text = text;
    this.url = url;
    this.target = target;
    this.container = document.getElementById("header-nav");

    this.createLink();
    this.createButton();
  }

  createLink() {
    this.link = document.createElement("a");
    this.link.setAttribute("href", this.url);

    switch (this.target) {
      case "blank":
        this.link.setAttribute("target", "_blank");
        break;
      case "same":
        break;
      default:
    }

    this.container.appendChild(this.link);
  }

  createButton() {
    this.button = document.createElement("button");
    this.link.appendChild(this.button);

    this.button.appendChild(document.createTextNode(this.text));
  }
}
