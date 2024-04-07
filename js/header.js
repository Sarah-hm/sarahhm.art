class Header {
  constructor(navCTA) {
    this.navCTA = navCTA;

    this.websiteTitle = "SHM";
    this.titleUrl = "/";

    this.headerGridClass = "grid-2-col-sidebar";
    this.websiteTitleID = "website-title";

    // create header section
    this.createHeader();

    // create linked website title (back to homepage)
    this.createWebsiteTitle();

    // create navigation with CTAs
    this.createNav();
  }

  createHeader() {
    this.header = document.createElement("header");
    this.header.classList.add(this.headerGridClass);
    document.body.prepend(this.header);
  }

  createWebsiteTitle() {
    this.link = document.createElement("a");
    this.link.setAttribute("href", this.titleUrl);
    this.link.setAttribute("id", this.websiteTitleID);
    this.header.appendChild(this.link);

    this.titleGrid = document.createElement("div");
    this.titleGrid.setAttribute("id", "website-title-grid");
    this.link.appendChild(this.titleGrid);

    this.font = "h2";
    this.nameFont = "h3";

    this.item = document.createElement(this.font);
    this.titleGrid.appendChild(this.item);
    this.item.appendChild(document.createTextNode("S"));
    this.item.classList.add("website-title-initial");

    this.item = document.createElement(this.nameFont);
    this.titleGrid.appendChild(this.item);
    this.item.appendChild(document.createTextNode("arah"));
    this.item.classList.add("website-title-name");

    this.item = document.createElement(this.font);
    this.titleGrid.appendChild(this.item);
    this.item.appendChild(document.createTextNode("H"));
    this.item.classList.add("website-title-initial");

    this.item = document.createElement(this.nameFont);
    this.titleGrid.appendChild(this.item);
    this.item.appendChild(document.createTextNode("ontoy"));
    this.item.classList.add("website-title-name");

    this.item = document.createElement(this.font);
    this.titleGrid.appendChild(this.item);
    this.item.appendChild(document.createTextNode("M"));
    this.item.classList.add("website-title-initial");

    this.item = document.createElement(this.nameFont);
    this.titleGrid.appendChild(this.item);
    this.item.appendChild(document.createTextNode("ajor"));
    this.item.classList.add("website-title-name");

    // this.heading = document.createElement("h2");
    // this.link.appendChild(this.heading);

    // this.heading.appendChild(document.createTextNode(this.websiteTitle));
  }

  createNav() {
    this.nav = document.createElement("nav");
    this.nav.setAttribute("id", "header-nav");
    this.header.appendChild(this.nav);

    this.navCTA.forEach((CTA) => {
      switch (CTA) {
        case "homepage":
          this.name = "Homepage";
          this.url = "/";
          this.target = "same"; //same or target
          new NavButton(this.name, this.url, this.target);
          break;
        case "about":
          this.name = "About";
          this.url = "me.html";
          this.target = "same"; //same or target
          new NavButton(this.name, this.url, this.target);
          break;
        case "cv":
          this.name = "Curriculum Vitae";
          this.url = "data/Sarah_hontoy-major_CV.pdf";
          this.target = "blank";
          new NavButton(this.name, this.url, this.target);
          break;
        case "instagram":
          this.name = "Instagram";
          this.url = "https://www.instagram.com/sarahhm.jpg/";
          this.target = "blank";
          new NavButton(this.name, this.url, this.target);
          break;
        case "email":
          this.name = "Email";
          this.url = "#";
          this.target = "";
          new NavButton(this.name, this.url, this.target);
          break;
        default:
          console.log("not a supported CTA");
      }
    });
  }
}
