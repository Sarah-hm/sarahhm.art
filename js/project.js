class Project {
  constructor(
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

    this.doc = document.getElementbyId("project-container");

    this.printTitle();
    this.printSubtitle();
    this.printYear();
    this.printMedia();
    this.printKeywords();
    this.printWebsiteLink();
    this.printDescription();
    this.printVisualDoc();
    this.printLinkDoc();
  }

  printTitle() {
    this.para = document.createElement("p");
    this.para.classList.add("prj-title");
    this.doc.appendChild(this.para);
    this.para.insertAdjacentText("afterbegin", this.title);
  }

  printSubtitle() {
    this.para = document.createElement("p");
    this.para.classList.add("prj-subtitle");
    this.doc.appendChild(this.para);
    this.para.insertAdjacentText("afterbegin", this.subtitle);
  }

  printYear() {
    this.para = document.createElement("p");
    this.para.classList.add("prj-year");
    this.doc.appendChild(this.para);
    this.para.insertAdjacentText("afterbegin", this.year);
  }

  printMedia() {
    // open a div that stores all media with an ul
    this.ul = document.createElement("ul");
    this.ul.classList.add("prj-media-ul");
    this.doc.appendChild(this.ul);

    for (this.i = 0; this.i < this.media.length; this.i++) {
      //print single medium as a li
      this.li = document.createElement("li");
      this.li.classList.add("prj-media-li");
      this.ul.appendChild(this.li);

      this.medium = document.createTextNode(`${this.media[this.i]}`);

      this.li.appendChild(this.medium);
    }
  }

  printKeywords() {
    // open a div that stores all keywords with an ul
    this.ul = document.createElement("ul");
    this.ul.classList.add("prj-keywords-ul");
    this.doc.appendChild(this.ul);

    for (this.i = 0; this.i < this.keywords.length; this.i++) {
      //print single medium as a li
      this.li = document.createElement("li");
      this.li.classList.add("prj-keywords-li");
      this.ul.appendChild(this.li);
      this.keyword = document.createTextNode(`${this.keywords[this.i]}`);
      this.li.appendChild(this.keyword);
    }
  }

  //create button for links to the project-website
  printWebsiteLink() {
    this.div = document.createElement("div");
    this.div.classList.add("prj-websiteLink-btn");
    this.doc.appendChild(this.div);

    this.link = `<a href = "${this.websiteLink}">${this.websiteLink}</a>`;
    this.div.insertAdjacentHTML("afterbegin", this.link);

    this.doc.querySelector(".prj-year").innerHTML = `${this.year}`;
  }

  printDescription() {
    // open a div that stores all description with an ul
    this.div = document.createElement("div");
    this.div.classList.add("prj-desc-div");
    this.doc.appendChild(this.div);

    for (this.i = 0; this.i < this.desc.length; this.i++) {
      //print single medium as a li
      this.para = document.createElement("para");
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
    this.doc.appendChild(this.div);

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
    this.doc.appendChild(this.div);

    for (this.i = 0; this.i < this.linkDoc.length; this.i++) {
      this.div = document.createElement("div");
      this.div.classList.add("prj-visual-documentation-btn");
      this.doc.appendChild(this.div);
      this.link = `<a href = "${this.linkDoc[this.i]}">${
        this.linkDoc[this.i]
      }</a>`;
      this.div.insertAdjacentHTML("afterbegin", this.link);
    }
  }
}
