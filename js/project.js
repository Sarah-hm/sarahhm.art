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
    linkDoc,
    accentColor,
    accentHue,
    accentSaturation,
    data
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
    this.accentColor = accentColor;
    this.accentHue = accentHue;
    this.accentSaturation = accentSaturation;
    this.data = data;

    if (this.accentHue) {
      this.updateAccentHue();
    }

    if (this.accentSaturation) {
      this.updateAccentSaturation();
    }

    // Update navigation with website and documentation links
    this.nav = document.getElementById("header-nav");

    if (this.websiteLink) {
      this.text = "Project Website";
      this.url = this.websiteLink;
      this.updateNav(this.text, this.url);
    }

    if (this.linkDoc) {
      this.linkDoc.forEach((link) => {
        this.text = link.type;
        this.url = link.source;
        this.updateNav(this.text, this.url);
      });
    }

    // Creating main body
    this.container = document.createElement("section");
    // this.container.classList.add("grid-2-col-sidebar");
    this.container.setAttribute("id", "project-container");
    document.body.appendChild(this.container);

    this.sidebar = document.createElement("div");
    this.sidebar.setAttribute("id", "project-sidebar");
    this.container.appendChild(this.sidebar);

    this.main = document.createElement("div");
    this.main.setAttribute("id", "project-main");
    this.container.appendChild(this.main);

    // Populate content in order, with specified container
    this.createTitleMenu(this.sidebar);
    this.createSubtitle(this.sidebar);
    this.createMedia(this.sidebar);
    this.createKeywords(this.sidebar);
    this.createDescription(this.sidebar);

    this.createVisualDocumentation(this.main);
  }

  updateAccentHue() {
    document.documentElement.style.setProperty("--color-hue", this.accentHue);
  }

  updateAccentSaturation() {
    document.documentElement.style.setProperty(
      "--color-saturation",
      `${this.accentSaturation}%`
    );
  }

  updateNav(text, url) {
    // link
    this.link = document.createElement("a");
    this.link.setAttribute("href", `${url}`);
    this.link.setAttribute("target", "_blank");
    this.nav.appendChild(this.link);

    // button
    this.websiteLinkBtn = document.createElement("button");
    this.link.appendChild(this.websiteLinkBtn);

    // text
    this.websiteLinkTxt = document.createTextNode(text);
    this.websiteLinkBtn.appendChild(this.websiteLinkTxt);
  }

  createTitleMenu(container) {
    this.menuContainer = document.createElement("div");
    this.menuContainer.setAttribute("id", "project-menu__container");
    container.appendChild(this.menuContainer);

    this.titleMenu = document.createElement("menu");
    this.titleMenu.setAttribute("id", "project-title");
    this.menuContainer.appendChild(this.titleMenu);

    // create menu item for current project
    this.callback = "menu";
    this.project_title = new MenuItem(
      this.title,
      this.year,
      "#",
      this.id,
      this.titleMenu,
      this.callback
    );

    this.projectsContainer = document.createElement("div");
    this.projectsContainer.setAttribute(
      "id",
      "project-menu__projects-container"
    );
    this.menuContainer.appendChild(this.projectsContainer);

    this.projects_menu = new Menu(
      this.data,
      "redirection",
      this.projectsContainer
    );

    this.titleMenu.addEventListener("click", () => {
      document
        .getElementById("project-menu__projects-container")
        .classList.toggle("projects-container-opened");
    });
  }

  createTitle(container) {
    this.DOMtitle = document.createElement("h2");
    container.appendChild(this.DOMtitle);
    this.DOMtitle.appendChild(document.createTextNode(this.title));
  }

  createSubtitle(container) {
    this.DOMsubtitle = document.createElement("h3");
    container.appendChild(this.DOMsubtitle);
    this.DOMsubtitle.appendChild(document.createTextNode(this.subtitle));
  }

  createYear(container) {
    this.DOMyear = document.createElement("h4");
    container.appendChild(this.DOMyear);
    this.DOMyear.appendChild(document.createTextNode(this.year));
  }

  createMedia(container) {
    if (this.media) {
      this.DOMMedia = document.createElement("h4");
      container.appendChild(this.DOMMedia);
      this.DOMMedia.appendChild(document.createTextNode("Media: "));
      // display all but last media with ", " at the end
      for (this.i = 0; this.i < this.media.length - 1; this.i++) {
        this.DOMMedia.appendChild(
          document.createTextNode(`${this.media[this.i]}, `)
        );
      }
      // display last media with "." at the end
      this.DOMMedia.appendChild(
        document.createTextNode(`${this.media[this.media.length - 1]}.`)
      );
    }
  }

  createKeywords(container) {
    if (this.keywords) {
      this.DOMKeywords = document.createElement("h4");
      container.appendChild(this.DOMKeywords);
      this.DOMKeywords.appendChild(document.createTextNode("keywords: "));
      // display all but last media with ", " at the end
      for (this.i = 0; this.i < this.keywords.length - 1; this.i++) {
        this.DOMKeywords.appendChild(
          document.createTextNode(`${this.keywords[this.i]}, `)
        );
      }
      // display last media with "." at the end
      this.DOMKeywords.appendChild(
        document.createTextNode(`${this.keywords[this.keywords.length - 1]}.`)
      );
    }
  }

  createDescription(container) {
    this.description = document.createElement("div");
    container.appendChild(this.description);

    this.desc.forEach((para) => {
      this.para = document.createElement("p");
      this.description.appendChild(this.para);
      this.para.appendChild(document.createTextNode(para));
    });
  }

  createVisualDocumentation(container) {
    this.visualDoc.forEach((doc) => {
      switch (doc.type) {
        case "image":
          // Create figure with caption
          this.figure = document.createElement("figure");
          container.appendChild(this.figure);

          if (doc.caption) {
            this.caption = document.createElement("figcaption");
            this.caption.classList.add("prj-visualDoc-figcaption");
            this.figure.appendChild(this.caption);
            this.caption.appendChild(document.createTextNode(doc.caption));
          }

          this.img = document.createElement("img");
          this.img.src = `${doc.source}`;
          this.figure.appendChild(this.img);

          break;
        case "video":
          this.figure = document.createElement("figure");
          container.appendChild(this.figure);

          if (doc.caption) {
            this.caption = document.createElement("figcaption");
            this.caption.classList.add("prj-visualDoc-figcaption");
            this.figure.appendChild(this.caption);
            this.caption.appendChild(document.createTextNode(doc.caption));
          }

          this.video = document.createElement("video");
          this.video.setAttribute("controls", "controls");
          this.video.setAttribute("controlsList", "nodownload");
          this.video.setAttribute("autoplay", "autoplay");
          this.video.setAttribute("loop", "loop");
          this.figure.appendChild(this.video);

          this.source = document.createElement("source");
          this.source.src = `${doc.source}`;
          this.source.type = `${doc.videoType}`;
          this.video.appendChild(this.source);
          break;
        default:
          console.log("Not a supported format");
      }
    });
  }
}
