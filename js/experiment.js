class Experiment {
  constructor(
    title,
    subtitle,
    year,
    keywords,
    websiteLink,
    desc,
    visDoc,
    iterations,
    linkDoc,
    accentHue,
    accentSaturation,
    data
  ) {
    this.title = title;
    this.subtitle = subtitle;
    this.year = year;
    this.keywords = keywords;
    this.websiteLink = websiteLink;
    this.desc = desc;
    this.visDoc = visDoc;
    this.iterations = iterations;
    this.linkDoc = linkDoc;

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
    this.container.classList.add("experiment-section");
    document.body.appendChild(this.container);

    this.sidebar = document.createElement("div");
    this.sidebar.classList.add("sidebar");
    this.container.appendChild(this.sidebar);

    this.main = document.createElement("div");
    this.main.classList.add("main");
    this.container.appendChild(this.main);

    // Populate content in order, with specified container
    this.createTitleMenu(this.sidebar);
    this.header = document.getElementsByTagName("header")[0];
    this.createTitleMenu(this.header);
    // this.createSubtitle(this.subtitle, this.sidebar);

    this.subsidebar = document.createElement("div");
    this.subsidebar.setAttribute("id", "project-subsidebar");
    this.sidebar.appendChild(this.subsidebar);

    this.createKeywords(this.keywords, this.subsidebar);
    this.createDescription(this.desc, this.sidebar);
    this.createVisualDocumentation(this.visDoc, this.main);

    console.log(this.iterations);
    if (this.iterations) {
      this.iterations.forEach((iteration) => {
        console.log(iteration.visual_documentation);
        this.createIteration(
          iteration.title,
          iteration.description,
          iteration.visual_documentation
        );
      });
    }
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
    this.menuContainer.classList.add("project-menu__container");
    container.appendChild(this.menuContainer);

    // create menu item for current project
    this.callback = "submenu";
    this.project_title = new MenuItem(
      this.title,
      this.year,
      "#",
      this.id,
      this.menuContainer,
      this.callback
    );

    this.menuContainer.firstChild.setAttribute("id", "project-title");

    this.projectsContainer = document.createElement("div");
    this.projectsContainer.classList.add("project-menu__projects-container");
    this.menuContainer.appendChild(this.projectsContainer);

    this.projects_menu = new Menu(
      this.data.projects,
      "redirection",
      this.projectsContainer
    );
  }

  createTitle(title, container) {
    this.DOMtitle = document.createElement("h2");
    container.appendChild(this.DOMtitle);
    this.DOMtitle.appendChild(document.createTextNode(title));
  }

  createSubtitle(subtitle, container) {
    this.DOMsubtitle = document.createElement("h3");
    container.appendChild(this.DOMsubtitle);
    this.DOMsubtitle.appendChild(document.createTextNode(subtitle));
  }

  createYear(year, container) {
    this.DOMyear = document.createElement("h4");
    container.appendChild(this.DOMyear);
    this.DOMyear.appendChild(document.createTextNode(year));
  }

  createKeywords(keywords, container) {
    if (keywords) {
      this.DOMKeywords = document.createElement("h5");
      container.appendChild(this.DOMKeywords);
      this.DOMKeywords.innerHTML = `<b>media & keywords: </b>`;
      // display all but last media with ", " at the end
      for (this.i = 0; this.i < keywords.length - 1; this.i++) {
        this.DOMKeywords.appendChild(
          document.createTextNode(`${keywords[this.i]}, `)
        );
      }
      // display last media with "." at the end
      this.DOMKeywords.appendChild(
        document.createTextNode(`${this.keywords[this.keywords.length - 1]}.`)
      );
    }
  }

  createDescription(desc, container) {
    this.description = document.createElement("div");
    container.appendChild(this.description);

    for (this.i = 0; this.i < desc.length; this.i++) {
      this.para = document.createElement("p");
      this.description.appendChild(this.para);
      this.para.appendChild(document.createTextNode(desc[this.i]));
    }
  }

  createIteration(title, desc, doc) {
    this.iterationContainer = document.createElement("section");
    this.iterationContainer.classList.add("experiment-section");
    document.body.appendChild(this.iterationContainer);

    console.log(doc);
    if (doc) {
      this.iterationSidebar = document.createElement("div");
      this.iterationSidebar.classList.add("sidebar");
      this.iterationContainer.appendChild(this.iterationSidebar);

      this.iterationMain = document.createElement("div");
      this.iterationMain.classList.add("main");
      this.iterationContainer.appendChild(this.iterationMain);

      this.createTitle(title, this.iterationSidebar);
      this.createDescription(desc, this.iterationSidebar);
      console.log(doc);
      this.createVisualDocumentation(doc, this.iterationMain);
    } else {
      this.iterationMain = document.createElement("div");
      this.iterationMain.classList.add("main-fullwidth");
      this.iterationContainer.appendChild(this.iterationMain);
      this.createTitle(title, this.iterationMain);
      this.createDescription(desc, this.iterationMain);
    }
  }

  createVisualDocumentation(doc, container) {
    console.log(doc);
    for (this.i = 0; this.i < doc.length; this.i++) {
      switch (doc[this.i].type) {
        case "image":
          console.log("image");
          // Create figure with caption
          this.figure = document.createElement("figure");
          container.appendChild(this.figure);

          this.img = document.createElement("img");
          this.img.src = `${doc[this.i].source}`;
          this.figure.appendChild(this.img);

          if (doc[this.i].caption) {
            this.caption = document.createElement("figcaption");
            this.caption.classList.add("prj-visualDoc-figcaption");
            this.figure.appendChild(this.caption);
            this.caption.appendChild(
              document.createTextNode(doc[this.i].caption)
            );
          }

          break;
        case "video":
          this.figure = document.createElement("figure");
          container.appendChild(this.figure);

          this.video = document.createElement("video");
          this.video.setAttribute("controls", "controls");
          this.video.setAttribute("controlsList", "nodownload");
          this.video.setAttribute("autoplay", "autoplay");
          this.video.setAttribute("loop", "loop");
          this.figure.appendChild(this.video);

          this.source = document.createElement("source");
          this.source.src = `${doc[this.i].source}`;
          this.source.type = `${doc[this.i].videoType}`;
          this.video.appendChild(this.source);

          if (doc[this.i].caption) {
            this.caption = document.createElement("figcaption");
            this.caption.classList.add("prj-visualDoc-figcaption");
            this.figure.appendChild(this.caption);
            this.caption.appendChild(
              document.createTextNode(doc[this.i].caption)
            );
          }
          break;
        default:
          console.log("Not a supported format");
      }
    }
  }
}
