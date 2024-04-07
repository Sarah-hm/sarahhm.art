class NavButton {
  constructor(text, url, target, container) {
    this.text = text;
    this.url = url;
    this.target = target;
    this.container = document.getElementById("header-nav");

    this.createLink();
    this.createButton();
    // this.createSVG();

    this.mousein = false;

    // this.button.addEventListener("mouseenter", () => {
    //   this.mousein = true;
    //   this.recalculateSVG();
    // });

    // this.link.addEventListener("mouseout", () => {
    //   this.mousein = false;
    // });
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

  createSVG() {
    this.linkRect = this.link.getBoundingClientRect();
    this.buttonRect = this.button.getBoundingClientRect();

    this.svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    this.link.appendChild(this.svg);
    this.svg.setAttribute("height", `${this.linkRect.height}`);
    this.svg.setAttribute("width", `${this.linkRect.width}`);

    this.path_top_left = document.createElementNS(
      "http://www.w3.org/2000/svg",
      "line"
    );
    this.svg.append(this.path_top_left);

    this.path_top_left.classList.add("button-path");
    this.path_top_left.setAttribute("x1", `${this.linkRect.x}px`);
    this.path_top_left.setAttribute("y1", `${this.linkRect.top}px`);
    this.path_top_left.setAttribute("x2", `${this.buttonRect.x}px`);
    this.path_top_left.setAttribute("y2", `${this.buttonRect.top}px`);
  }

  recalculateSVG() {
    if (this.mousein) {
      this.linkRect = this.link.getBoundingClientRect();
      this.buttonRect = this.button.getBoundingClientRect();

      console.log(this.linkRect);
      console.log(this.buttonRect);

      this.path_top_left.setAttribute("x1", `${this.linkRect.x}px`);
      this.path_top_left.setAttribute("y1", `${this.linkRect.y}px`);
      this.path_top_left.setAttribute("x2", `${this.buttonRect.x}px`);
      this.path_top_left.setAttribute("y2", `${this.buttonRect.y}px`);

      setTimeout(this.recalculateSVG, 200);
    }
  }
}
