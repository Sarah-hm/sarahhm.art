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

    this.websiteHeader = websiteHeader;

    this.prjContainer = document.createElement("div");
    this.prjContainer.setAttribute("id", "project-container");
    this.websiteHeader.appendChild(this.prjContainer);

    this.printTitle();
    this.printSubtitle();
    this.printYear();

    this.printMedia();
    this.printKeywords();
    this.printWebsiteLink();
    this.printDescription();
    // this.printVisualDoc();
    this.printLinkDoc();
  }

  printTitle() {
    this.para = document.createElement("p");
    this.para.classList.add("prj-title");
    this.prjContainer.appendChild(this.para);
    this.para.insertAdjacentText("afterbegin", this.title);
  }

  printSubtitle() {
    this.para = document.createElement("p");
    this.para.classList.add("prj-subtitle");
    this.prjContainer.appendChild(this.para);
    this.para.insertAdjacentText("afterbegin", this.subtitle);
  }

  printYear() {
    this.para = document.createElement("p");
    this.para.classList.add("prj-year");
    this.prjContainer.appendChild(this.para);
    this.para.insertAdjacentText("afterbegin", this.year);
  }

  printMedia() {
    // open a div that stores all media with an ul
    this.ul = document.createElement("ul");
    this.ul.classList.add("prj-media-ul");
    this.prjContainer.appendChild(this.ul);
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
    this.prjContainer.appendChild(this.ul);
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
    this.div = document.createElement("div");
    this.div.classList.add("prj-websiteLink-btn");
    this.prjContainer.appendChild(this.div);

    this.link = `<a href = "${this.websiteLink}" target = "_blank"> Access project website</a>`;
    this.div.insertAdjacentHTML("afterbegin", this.link);
  }

  printDescription() {
    // open a div that stores all description with an ul
    this.div = document.createElement("div");
    this.div.classList.add("prj-desc-div");
    this.prjContainer.appendChild(this.div);
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
    this.div.classList.add("prj-visualDoc-div");
    this.prjContainer.appendChild(this.div);

    for (this.i = 0; this.i < this.visualDoc.length; this.i++) {
      //print single medium as a li
      this.img = document.createElement("img");
      this.img.src = `${this.visualDoc[this.i]}`;
      this.img.classList.add("prj-visualDoc-img");
      this.div.appendChild(this.img);
    }
  }

  //create buttons for extra external documentation
  printLinkDoc() {
    this.div = document.createElement("div");
    this.div.classList.add("prj-link-documentation-div");
    this.prjContainer.appendChild(this.div);

    for (this.i = 0; this.i < this.linkDoc.length; this.i++) {
      this.div = document.createElement("div");
      this.div.classList.add("prj-visual-documentation-btn");
      this.prjContainer.appendChild(this.div);
      this.link = `<a href = "${this.linkDoc[this.i]}">${
        this.linkDoc[this.i]
      }</a>`;
      this.div.insertAdjacentHTML("afterbegin", this.link);
    }
  }
}
