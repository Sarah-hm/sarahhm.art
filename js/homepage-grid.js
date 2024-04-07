class HomepageGrid {
  constructor(data) {
    this.data = data;

    this.menuCallback = "redirection";
    this.menu = document.getElementById("homepage-menu");
    new Menu(this.data, this.menuCallback, this.menu);

    this.allthumbnails = [];

    // get all projects thumbnails
    for (this.i = 0; this.i < this.data.projects.length; this.i++) {
      // console.log(this.data.projects[this.i].thumbnail);
      this.temp = {
        thumbnail: this.data.projects[this.i].thumbnail,
        url: this.data.projects[this.i].url,
        id: this.data.projects[this.i].id,
      };
      this.allthumbnails.push(this.temp);
    }
    // get all experiments' thumbnails
    for (this.i = 0; this.i < this.data.experiments.length; this.i++) {
      for (
        this.j = 0;
        this.j < this.data.experiments[this.i].iterations.length;
        this.j++
      ) {
        console.log(this.data.experiments[this.i].iterations[this.j].thumbnail);
        this.temp = {
          thumbnail: this.data.experiments[this.i].iterations[this.j].thumbnail,
          url: this.data.experiments[this.i].url,
          id: this.data.experiments[this.i].id,
        };
        this.allthumbnails.push(this.temp);
      }
    }

    this.shuffledThumbnails = this.shuffleArray(this.allthumbnails);

    for (this.i = 0; this.i < this.allthumbnails.length; this.i++) {
      new Thumbnail(
        this.allthumbnails[this.i].thumbnail,
        this.allthumbnails[this.i].url,
        this.allthumbnails[this.i].id
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
      this.thumbnails_container.style.gridTemplateRows = `${this.defaultHeight} ${this.defaultHeight} ${this.defaultHeight}  `;
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
            // console.log("second column");
            this.thumbnails_container.style.gridTemplateColumns = `${this.smallFr} ${this.largeFr} ${this.smallFr} ${this.smallFr} `;
            break;
          case 2:
            // console.log("third column");
            this.thumbnails_container.style.gridTemplateColumns = `${this.smallFr} ${this.smallFr} ${this.largeFr} ${this.smallFr} `;
            break;
          case 3:
            // console.log("fourth column");
            this.thumbnails_container.style.gridTemplateColumns = `${this.smallFr} ${this.smallFr} ${this.smallFr} ${this.largeFr} `;
            break;
          default:
            console.log("not a supported thumbnail column");
        }

        this.row = this.i / 4;
        if (this.row < 1) {
          // console.log("first row");
          this.thumbnails_container.style.gridTemplateRows = `${this.largeHeight} ${this.smallHeight} ${this.smallHeight} `;
        } else if (this.row < 2) {
          // console.log("second row");
          this.thumbnails_container.style.gridTemplateRows = `${this.smallHeight} ${this.largeHeight} ${this.smallHeight} `;
        } else if (this.row < 3) {
          // console.log("third row");
          this.thumbnails_container.style.gridTemplateRows = `${this.smallHeight} ${this.smallHeight} ${this.largeHeight} `;
        } else if (this.row < 4) {
          // console.log("fourth row");
        } else if (this.row < 5) {
          // console.log("fifth row");
        }

        //which
      }
    }
  }

  shuffleArray(array) {
    for (this.i = array.length - 1; this.i > 0; this.i--) {
      this.j = Math.floor(Math.random() * (this.i + 1));
      [array[this.i], array[this.j]] = [array[this.j], array[this.i]];
    }
    return array;
  }
}
