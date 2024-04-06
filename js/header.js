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

    this.heading = document.createElement("h1");
    this.link.appendChild(this.heading);

    this.heading.appendChild(document.createTextNode(this.websiteTitle));
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
          this.url = "/me.html";
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
