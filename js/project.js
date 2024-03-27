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
    accentColor
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

    if (this.accentColor) {
      this.updateAccentColor();
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
    this.container.classList.add("grid-2-col-sidebar");
    document.body.appendChild(this.container);

    this.sidebar = document.createElement("div");
    this.container.appendChild(this.sidebar);

    this.main = document.createElement("div");
    this.container.appendChild(this.main);

    // Populate content in order, with specified container
    this.createTitle(this.sidebar);
    this.createSubtitle(this.sidebar);
    this.createYear(this.sidebar);
    this.createMedia(this.sidebar);
    this.createKeywords(this.sidebar);
    this.createDescription(this.sidebar);

    this.createVisualDocumentation(this.main);
  }

  updateAccentColor() {
    //oops i'll have to update HEX to hue in JSON before doing that :(
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
    console.log(this.visualDoc);
    this.visualDoc.forEach((doc) => {
      switch (doc.type) {
        case "image":
          console.log("image");
          break;
        case "video":
          this.video = document.createElement("video");
          this.video.setAttribute("controls", "controls");
          this.video.setAttribute("controlsList", "nodownload");
          this.video.setAttribute("autoplay", "autoplay");
          this.video.setAttribute("loop", "loop");
          container.appendChild(this.video);

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
