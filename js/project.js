class Project {
  constructor(
    websiteHeader,
    title,
    subtitle,
    year,
    media,
    keywords,
    websiteLink,
    desc,
    visualDoc,
    linkDoc
  ) {
    this.title = title;
    this.subtitle = subtitle;
    this.year = year;
    this.media = media;
    this.keywords = keywords;
    this.websiteLink = websiteLink;
    this.desc = desc;
    this.visualDoc = visualDoc;
    this.linkDoc = linkDoc;
    // this.media[("one", "two", "three")];

    // this.websiteHeader = document.body;

    this.prjContainer = document.createElement("div");
    this.prjContainer.setAttribute("id", "prj-container");
    document.body.appendChild(this.prjContainer);

    this.descContainer = document.createElement("div");
    this.descContainer.setAttribute("id", "desc-container");
    this.prjContainer.appendChild(this.descContainer);

    this.printTitle();
    this.printSubtitle();
    this.printYear();

    this.printMedia();
    this.printKeywords();
    this.printWebsiteLink();
    this.printDescription();

    this.printLinkDoc();
    this.printVisualDoc();
  }

  printTitle() {
    this.para = document.createElement("p");
    this.para.classList.add("prj-title");
    this.descContainer.appendChild(this.para);
    this.para.insertAdjacentText("afterbegin", this.title);
  }

  printSubtitle() {
    this.para = document.createElement("p");
    this.para.classList.add("prj-subtitle");
    this.descContainer.appendChild(this.para);
    this.para.insertAdjacentText("afterbegin", this.subtitle);
  }

  printYear() {
    this.para = document.createElement("p");
    this.para.classList.add("prj-year");
    this.descContainer.appendChild(this.para);
    this.para.insertAdjacentText("afterbegin", this.year);
  }

  printMedia() {
    // open a div that stores all media with an ul
    this.ul = document.createElement("ul");
    this.ul.classList.add("prj-media-ul");
    this.descContainer.appendChild(this.ul);
    this.ul.innerHTML = `<h4>Media: </h4>`;

    for (this.i = 0; this.i < this.media.length; this.i++) {
      //print single medium as a li
      this.li = document.createElement("li");
      this.li.classList.add("prj-media-li");
      this.ul.appendChild(this.li);

      this.medium = document.createTextNode(`${this.media[this.i]}, `);

      this.li.appendChild(this.medium);
    }
  }

  printKeywords() {
    // open a div that stores all keywords with an ul

    this.ul = document.createElement("ul");
    this.ul.classList.add("prj-keywords-ul");
    this.descContainer.appendChild(this.ul);
    this.ul.innerHTML = `<h4>Keywords: </h4>`;

    for (this.i = 0; this.i < this.keywords.length; this.i++) {
      //print single medium as a li
      this.li = document.createElement("li");
      this.li.classList.add("prj-keywords-li");
      this.ul.appendChild(this.li);
      this.keyword = document.createTextNode(`${this.keywords[this.i]}, `);
      this.li.appendChild(this.keyword);
    }
  }

  //create button for links to the project-website
  printWebsiteLink() {
    //if the website link isn't empty, create a button to link to it
    if (this.websiteLink != "") {
      this.div = document.createElement("div");
      this.div.classList.add("prj-websiteLink-btn");
      this.descContainer.appendChild(this.div);

      this.link = `<a href = "${this.websiteLink}" target = "_blank"> Access project website</a>`;
      this.div.insertAdjacentHTML("afterbegin", this.link);
    }
  }

  printDescription() {
    // open a div that stores all description with an ul
    this.div = document.createElement("div");
    this.div.classList.add("prj-desc-div");
    this.descContainer.appendChild(this.div);
    this.div.innerHTML = `<h4>Statement: </h4>`;

    for (this.i = 0; this.i < this.desc.length; this.i++) {
      //print descriptions as paragraphs
      this.para = document.createElement("p");
      this.para.classList.add("prj-desc-para");
      this.div.appendChild(this.para);
      this.descPara = document.createTextNode(`${this.desc[this.i]}`);
      this.para.appendChild(this.descPara);
    }
  }

  //Add images to slideshow (or video*)
  printVisualDoc() {
    // open a div that stores all keywords with an ul
    this.div = document.createElement("div");
    this.div.setAttribute("id", "visual-doc-container");
    this.prjContainer.appendChild(this.div);

    for (this.i = 0; this.i < this.visualDoc.length; this.i++) {
      switch (this.visualDoc[this.i].type) {
        case "image":
          // Create figure with caption
          this.figure = document.createElement("figure");
          this.figure.classList.add("prj-visualDoc-figure");
          this.div.appendChild(this.figure);

          if (this.visualDoc[this.i].caption != "") {
            this.caption = document.createElement("figcaption");
            this.caption.classList.add("prj-visualDoc-figcaption");
            this.figure.appendChild(this.caption);
            this.caption.insertAdjacentText(
              "afterbegin",
              this.visualDoc[this.i].caption
            );
          }

          this.img = document.createElement("img");
          this.img.src = `${this.visualDoc[this.i].source}`;
          this.img.classList.add("prj-visualDoc-img");
          this.figure.appendChild(this.img);

          break;
        case "video":
          // Create figure with caption
          if (this.visualDoc[this.i].caption != "") {
            this.caption = document.createElement("figcaption");
            this.caption.classList.add("prj-visualDoc-figcaption");
            this.div.appendChild(this.caption);
            this.caption.insertAdjacentText(
              "afterbegin",
              this.visualDoc[this.i].caption
            );
          }

          this.video = document.createElement("video");
          this.video.classList.add("prj-visualDoc-video");
          this.video.setAttribute("controls", "controls");
          this.video.setAttribute("autoplay", "autoplay");
          this.video.setAttribute("loop", "loop");
          this.div.appendChild(this.video);

          this.source = document.createElement("source");
          this.source.src = `${this.visualDoc[this.i].source}`;
          this.source.type = `${this.visualDoc[this.i].videoType}`;
          this.source.classList.add("prj-visualDoc-video-source");
          this.video.appendChild(this.source);

        default:
          console.log("not a supported file");
      }
    }
  }

  //create buttons for extra external documentation
  printLinkDoc() {
    this.div = document.createElement("div");
    this.div.classList.add("prj-link-documentation-div");
    this.descContainer.appendChild(this.div);

    for (this.i = 0; this.i < this.linkDoc.length; this.i++) {
      this.div = document.createElement("div");
      this.div.classList.add("prj-visual-documentation-btn");
      this.descContainer.appendChild(this.div);
      this.link = `<a href = "${this.linkDoc[this.i].source}" target="_blank">${
        this.linkDoc[this.i].type
      }</a>`;
      this.div.insertAdjacentHTML("afterbegin", this.link);
    }
  }
}
