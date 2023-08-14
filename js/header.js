class Header {
  constructor(data) {
    this.websiteTitle = {
      title: "Sarah Hontoy-Major,",
      subtitle: "transdisciplinary artist and designer",
    };
    this.projects = {};
    this.data = data;
    this.doc = document.body;

    this.websiteTitleContainer = document.getElementsByClassName(
      "website-title-container"
    );

    this.navMenuBtns = document.getElementsByClassName("nav-menu-btn");
    this.websitePopups = document.getElementsByClassName("website-popup");

    this.navMenuPrjPopup = document.getElementById("website-projects-popup");
    this.navMenuAboutPopup = document.getElementById("website-about-popup");
    this.navMenuContactPopup = document.getElementById("website-contact-popup");
    this.navMenuIgPopup = document.getElementById("website-instagram-popup");
    this.popupCloseBtns = document.getElementsByClassName(
      "website-popup-close-btn"
    );

    this.emailCopyBtn = document.getElementById("email-tooltip");
    this.toolTipText = document.getElementById("tooltiptext");

    this.printWebTitle();
    this.titleRedirect();

    this.printNavMenu();
    this.printPrjBtn();
    this.printAbtBtn();
    this.printCntcBtn();

    this.openNavPopups();
    // this.printBtns();
    // this.printSubtitle();
    // this.printYear();

    // this.printMedia();
    // this.printKeywords();
    // this.printWebsiteLink();
    // this.printDescription();
    // // this.printVisualDoc();
    // this.printLinkDoc();
  }

  printWebTitle() {
    this.header = document.createElement("header");
    this.doc.appendChild(this.header);

    this.div = document.createElement("div");
    this.div.classList.add("website-title-container");
    this.header.appendChild(this.div);

    this.title = document.createElement("h1");
    this.title.classList.add("website-title");
    this.div.appendChild(this.title);
    this.title.insertAdjacentText("afterbegin", this.websiteTitle.title);

    this.subtitle = document.createElement("h2");
    this.subtitle.classList.add("website-subtitle");
    this.div.appendChild(this.subtitle);
    this.subtitle.insertAdjacentText("afterbegin", this.websiteTitle.subtitle);
  }

  titleRedirect() {
    //redirect to index.html when clicking website title container
    Object.keys(this.websiteTitleContainer).forEach((key) => {
      this.websiteTitleContainer[key].addEventListener("click", () => {
        window.location.href = "/index.html";
      });
    });
  }

  printNavMenu() {
    this.div = document.createElement("div");
    this.div.setAttribute("id", "nav-menu");
    this.header.appendChild(this.div);
  }

  printPrjBtn() {
    this.btn = document.createElement("button");
    this.btn.classList.add("nav-menu-btn");
    this.btn.setAttribute("id", "nav-menu-prj-btn");
    document.getElementById("nav-menu").appendChild(this.btn);
    this.btn.insertAdjacentText("afterbegin", "projects");
  }

  printAbtBtn() {
    this.btn = document.createElement("button");
    this.btn.classList.add("nav-menu-btn");
    this.btn.setAttribute("id", "nav-menu-abt-btn");
    document.getElementById("nav-menu").appendChild(this.btn);
    this.btn.insertAdjacentText("afterbegin", "about");
  }

  printCntcBtn() {
    this.btn = document.createElement("button");
    this.btn.classList.add("nav-menu-btn");
    this.btn.setAttribute("id", "nav-menu-cntct-btn");
    document.getElementById("nav-menu").appendChild(this.btn);
    this.btn.insertAdjacentText("afterbegin", "contact");
  }

  openNavPopups() {}

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
