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

    // Dynamic thumnbails grid

    this.defaultFr = "1fr";
    this.defaultHeight = "30vh";

    this.largeFr = "1.5fr";
    this.smallFr = "0.5fr";

    this.largeHeight = "50vh";
    this.smallHeight = "20vh";

    this.thumbnails_container = document.getElementById(
      "homepage-thumbnail-grid"
    );
    this.thumbnails = document.getElementsByClassName("thumbnail-container");

    for (this.i = 0; this.i < this.thumbnails.length; this.i++) {
      this.thumbnails[this.i].addEventListener("mouseenter", (el) => {
        this.thumbnailEnter(el);
      });
    }

    this.thumbnails_container.addEventListener("mouseleave", () => {
      this.thumbnails_container.style.gridTemplateColumns = `${this.defaultFr} ${this.defaultFr} ${this.defaultFr} ${this.defaultFr} `;
      this.thumbnails_container.style.gridTemplateRows = `${this.defaultHeight} ${this.defaultHeight} ${this.defaultHeight} ${this.defaultHeight} `;
    });
  }

  thumbnailEnter(el) {
    for (this.i = 0; this.i < this.thumbnails.length; this.i++) {
      if (`${this.thumbnails[this.i].id}` === el.target.getAttribute("id")) {
        // which column
        switch (this.i % 4) {
          case 0:
            // console.log("first column");
            this.thumbnails_container.style.gridTemplateColumns = `${this.largeFr} ${this.smallFr} ${this.smallFr} ${this.smallFr} `;

            break;
          case 1:
            console.log("second column");
            this.thumbnails_container.style.gridTemplateColumns = `${this.smallFr} ${this.largeFr} ${this.smallFr} ${this.smallFr} `;
            break;
          case 2:
            console.log("third column");
            this.thumbnails_container.style.gridTemplateColumns = `${this.smallFr} ${this.smallFr} ${this.largeFr} ${this.smallFr} `;
            break;
          case 3:
            console.log("fourth column");
            this.thumbnails_container.style.gridTemplateColumns = `${this.smallFr} ${this.smallFr} ${this.smallFr} ${this.largeFr} `;
            break;
          default:
            console.log("not a supported thumbnail column");
        }

        this.row = this.i / 4;
        if (this.row < 1) {
          console.log("first row");
          this.thumbnails_container.style.gridTemplateRows = `${this.largeHeight} ${this.smallHeight} ${this.smallHeight} ${this.smallHeight}`;
        } else if (this.row < 2) {
          console.log("second row");
          this.thumbnails_container.style.gridTemplateRows = `${this.smallHeight} ${this.largeHeight} ${this.smallHeight} ${this.smallHeight}`;
        } else if (this.row < 3) {
          console.log("third row");
          this.thumbnails_container.style.gridTemplateRows = `${this.smallHeight} ${this.smallHeight} ${this.largeHeight} ${this.smallHeight}`;
        } else if (this.row < 4) {
          console.log("fourth row");
        } else if (this.row < 5) {
          console.log("fifth row");
        }

        //which
      }
    }
  }
}
