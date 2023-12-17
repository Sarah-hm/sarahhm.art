class Header {
  constructor(data) {
    this.websiteTitle = {
      title: "Sarah Hontoy-Major,",
      subtitle: "art-based research enthusiast",
    };
    this.about = {
      text: [
        "",
        // "Sarah is a multidisciplinary, queer and neurodivergent, computational and tangible designer with a background in wearables, fashion design, 3 CAD and CAM, front and back end programming with a special interest on outlying narratives and material techniques. Their practice bridges our material and graspable world with the digital realm and its interfaces; how they impact each other in often unnoticed patterns. They strive to deconstruct the binary and linear hierarchies we maintain our dominant institutions in through queer and divergent story-telling. 'Invisible', digital, detexturized and averaged out data translate into tangible and graspable realities leaving outlying narratives out by design. These outcast stories are crucial to voice and physicalize to create a faithfully representative, sustainable, and reciprocal present and future cyberspace.",
        // "Current research assistant for the Indigenous Futures Research Center and Aboriginal Terriroty in Cyberspace in the Milieux Research Institute of Concordia University's Fine Arts Faculty, they are also a former research assistant for speculative fashion designer Ying Gao (École Supérieur de Mode de Montréal, UQAM), UQAM's Diament research chair on design for cyber mental health, and Vestechpro, an apparel research and innovation center affiliated with Marie-Victorin Fashion College.",
      ],
      img: "img/ma-face.jpg",
    };
    this.projects = {};
    this.data = data;
    this.doc = document.body;

    // get the current page's only div's id
    this.currentPageID = document
      .getElementsByTagName("div")[0]
      .getAttribute("id");

    this.aboutSectionHovering = false;
    this.innerHeaderHovering = false;

    this.buttons = {
      prjBtn: {
        title: "Projects",
        id: "project-nav-btn",
      },
      aboutBtn: {
        title: "About",
        id: "about-nav-btn",
      },
      contactBtn: {
        title: "Contact",
        id: "contact-nav-btn",
      },
    };
    this.navBtns = {
      about: `Read <span class= "nav-button" id ="about-button"> about me</span>`,
      instagram: `, visit my <a href="https://www.instagram.com/sarahhm.jpg/" target= "_blank" ><span class= "nav-button" id="instagram-button">Instagram</span></a>`,
      email: `, or copy my e-mail <span class= "nav-button" id="email-button" onclick="copyText()" >here</span>`,
      homepage: `Go back to <a href="/"> <span class = "nav-button"> homepage</span></a>`,
    };

    this.createWebsiteTitle();

    // If the currentPageID is project contrainer, get the specific project of the page
    if (this.currentPageID === "project-container") {
      this.currentProjectID = document
        .getElementsByTagName("div")[0]
        .getAttribute("project");
      this.toHomepage = `${this.navBtns.homepage}.`;
      this.toHomepageNav(this.toHomepage);

      this.createProjectDropdown(
        document.getElementById(`${this.currentPageID}`).getAttribute("project")
      );
    }

    this.websiteTitleContainer = document.getElementsByClassName(
      "website-title-container"
    );

    // if homepage, print project list; if project page, print project drop-down
    if (this.currentPageID === "homepage") {
      this.createImgPopupContainer();
      this.createProjectList();

      // profile image
      this.headerRect = document
        .getElementById("website-header")
        .getBoundingClientRect();

      this.createProfileImage();

      //clip art guy for MIT
      this.createClipPopup();

      // window.addEventListener("resize", () => {
      //   this.headerRect = document
      //     .getElementById("website-header")
      //     .getBoundingClientRect();
      //   this.calculatePortraitSize();
      // });
      // end profile image

      // nav menu
      this.navHTML = `${this.navBtns.about}${this.navBtns.instagram}${this.navBtns.email}.`;
      this.printNavMenu(this.navHTML);
      this.createAboutSection();

      // Toggle about section by clicking on button
      document.getElementById("about-button").addEventListener("click", () => {
        this.aboutSectionHovering = true;
        this.aboutSectionToggle();
      });

      // Close about section when mouse leaves header
      document
        .getElementsByClassName("inner-header")[0]
        .addEventListener("mouseleave", () => {
          this.innerHeaderHovering = false;
          this.aboutSectionClose();
        });

      document
        .getElementsByClassName("inner-header")[0]
        .addEventListener("mouseenter", () => {
          this.innerHeaderHovering = true;
        });

      // Set hovering over the about section to true
      document
        .getElementById("website-about-section-container")
        .addEventListener("mouseenter", () => {
          this.aboutSectionHovering = true;
          this.innerHeaderHovering = true;
        });
      // Set hovering over the about section to false
      document
        .getElementById("website-about-section-container")
        .addEventListener("mouseleave", () => {
          this.aboutSectionHovering = false;
          // this.aboutSectionClose();
        });

      // making sure the about section is close if hover over project list
      document
        .getElementById("website-projects-dropdown-container")
        .addEventListener("mouseenter", () => {
          this.innerHeaderHovering = false;
          this.aboutSectionHovering = false;
          this.aboutSectionClose();
          this.calculatePortraitSize();
        });

      document
        .getElementById("website-projects-dropdown-content")
        .addEventListener("mouseenter", () => {
          this.innerHeaderHovering = false;
          this.aboutSectionHovering = false;
          this.aboutSectionClose();
          this.calculatePortraitSize();
        });

      document.getElementById("homepage").addEventListener("mouseenter", () => {
        this.innerHeaderHovering = false;
        this.aboutSectionHovering = false;
        this.calculatePortraitSize();
      });

      document
        .getElementById("header-portrait-container")
        .addEventListener("mouseenter", () => {
          this.innerHeaderHovering = false;
          this.aboutSectionHovering = false;
          this.calculatePortraitSize();
        });
    }

    this.titleRedirect();

    // toggle project img by hovering over project list
    Object.keys(document.getElementsByClassName("prj-list-title")).forEach(
      (i) => {
        document
          .getElementsByClassName("prj-list-title")
          [i].addEventListener("mouseenter", (e) => {
            this.showProjectImg(i);
          });
        document
          .getElementsByClassName("prj-list-title")
          [i].addEventListener("mouseleave", (e) => {
            this.removeProjectImg(i);
          });
      }
    );
  }

  titleRedirect() {
    //redirect to index.html when clicking website title container
    Object.keys(this.websiteTitleContainer).forEach((key) => {
      this.websiteTitleContainer[key].addEventListener("click", () => {
        window.location.href = "/";
      });
    });
  }

  createWebsiteTitle() {
    this.header = document.createElement("header");
    this.header.setAttribute("id", "website-header");
    this.doc.prepend(this.header);

    this.innerHeader = document.createElement("div");
    this.innerHeader.classList.add("inner-header");
    this.header.appendChild(this.innerHeader);

    this.webTitleContainer = document.createElement("div");
    this.webTitleContainer.classList.add("website-title-container");
    this.innerHeader.appendChild(this.webTitleContainer);

    this.title = document.createElement("h1");
    this.title.classList.add("website-title");
    this.webTitleContainer.appendChild(this.title);
    this.title.insertAdjacentText("afterbegin", this.websiteTitle.title);

    this.subtitle = document.createElement("h2");
    this.subtitle.classList.add("website-subtitle");
    this.webTitleContainer.appendChild(this.subtitle);
    this.subtitle.insertAdjacentText("afterbegin", this.websiteTitle.subtitle);
  }

  printNavMenu(navText) {
    this.navText = document.createElement("p");
    this.innerHeader.appendChild(this.navText);
    this.navText.classList.add("nav-text");
    this.navText.innerHTML = navText;

    this.toolTipText = document.getElementById("tooltiptext");
    this.emailTxt = document.getElementById("email-button");

    this.emailTooltip = document.getElementById("email-tooltip");
    this.emailTooltip.setAttribute("hidden", "hidden");

    this.emailTxt.addEventListener("click", () => {
      this.email = "sarah.hm@hotmail.ca";
      // Copy the text inside the text field
      navigator.clipboard.writeText(this.email);

      this.emailTxt.innerHTML = "here—copied";
      console.log(this.emailTxt);
      setTimeout(() => {
        this.emailTxt.innerHTML = "here";
      }, 750);
    });
  }

  toHomepageNav(navText) {
    console.log(navText);
    this.navText = document.createElement("p");
    this.innerHeader.appendChild(this.navText);
    this.navText.classList.add("nav-text");
    this.navText.innerHTML = navText;
  }

  createProjectList() {
    this.dropdownContainer = document.createElement("div");
    this.dropdownContainer.setAttribute(
      "id",
      "website-projects-dropdown-container"
    );
    this.header.appendChild(this.dropdownContainer);

    this.dropdownBtn = document.createElement("button");
    this.dropdownBtn.setAttribute(
      "id",
      "website-projects-dropdown-button-homepage"
    );
    this.dropdownContainer.appendChild(this.dropdownBtn);

    this.dropdownBtn.innerHTML = `<h1>   things I've done </h1>`;

    this.dropdownContent = document.createElement("div");
    this.dropdownContent.setAttribute(
      "id",
      "website-projects-dropdown-content"
    );
    this.dropdownContainer.appendChild(this.dropdownContent);

    // Print all the projects in the projects.json, except the last one (template json object)
    for (let i = 0; i < this.data.length - 1; i++) {
      this.newPrj = document.createElement("a");
      this.newPrj.setAttribute("href", `${this.data[i].url}`);
      // this.newPrj.classList.add("prj-list-title");
      this.dropdownContent.appendChild(this.newPrj);
      this.newPrj.innerHTML = `
      <li class="prj-list-title">
      <sup> ${this.data[i].year} </sup>
      ${this.data[i].title}
      </li>
      `;
    }
  }

  createProjectDropdown(currentProject) {
    this.dropdownContainer = document.createElement("div");
    this.dropdownContainer.setAttribute(
      "id",
      "website-projects-dropdown-container"
    );
    this.header.appendChild(this.dropdownContainer);

    this.dropdownBtn = document.createElement("button");
    this.dropdownBtn.setAttribute("id", "website-projects-dropdown-button");
    this.dropdownContainer.appendChild(this.dropdownBtn);

    console.log(currentProject);

    // let button be current project's title
    for (let item in this.data) {
      console.log(this.data[item].id);
      if (this.data[item].id === currentProject) {
        this.dropdownBtn.innerHTML = `  <a href="${this.data[item].url}"><sup>${this.data[item].year}</sup>${this.data[item].title}</a>`;
      }
    }

    this.dropdownBtn.addEventListener("mouseover", () => {
      this.dropdownContent = document.createElement("div");
      this.dropdownContent.setAttribute(
        "id",
        "website-projects-dropdown-content"
      );
      this.dropdownContainer.appendChild(this.dropdownContent);

      // For the entire length of the projects.json data (minus the template available at the very end of the array)
      for (let i = 0; i < this.data.length - 1; i++) {
        // don't reprint the current project page
        if (this.data[i].id != currentProject) {
          this.newPrj = document.createElement("a");
          this.newPrj.setAttribute("href", `${this.data[i].url}`);
          // this.newPrj.classList.add("prj-list-title");
          this.dropdownContent.appendChild(this.newPrj);
          this.newPrj.innerHTML = `
      <li class="prj-list-title">
      <sup> ${this.data[i].year} </sup>
      ${this.data[i].title}
      </li>
      `;
        }
      }

      this.mouseInDropdownContent = false;

      this.dropdownContent.addEventListener("mouseenter", () => {
        this.mouseInDropdownContent = true;
      });
      this.dropdownContent.addEventListener("mouseleave", () => {
        this.mouseInDropdownContent = false;
      });

      // close dropdown when mouse leave
      this.dropdownContainer.addEventListener("mouseleave", () => {
        if (!this.mouseInDropdownContent) {
          document.getElementById("website-projects-dropdown-content").remove();
        }
      });
    });
  }

  createAboutSection() {
    this.aboutSection = document.createElement("div");
    this.aboutSection.setAttribute("id", "website-about-section-container");
    document
      .getElementById("website-header")
      .getElementsByClassName("inner-header")[0]
      .appendChild(this.aboutSection);

    this.aboutBody = document.createElement("div");
    this.aboutBody.classList.add("website-section-body");
    this.aboutBody.setAttribute("id", "about-section-body");
    this.aboutSection.appendChild(this.aboutBody);

    for (this.i = 0; this.i < this.about.text.length; this.i++) {
      this.para = document.createElement("p");
      this.aboutBody.appendChild(this.para);
      this.para.insertAdjacentText("afterbegin", this.about.text[this.i]);
    }

    this.cvButton = document.createElement("a");
    this.cvButton.setAttribute("href", "data/Sarah_hontoy-major_CV.pdf");
    this.cvButton.setAttribute("target", "_target");
    this.cvButton.setAttribute("id", "about-section-cv-button");
    this.cvButton.innerHTML = `Curriculum Vitae`;
    this.aboutSection.appendChild(this.cvButton);

    this.aboutSectionHovering = false;
  }

  aboutSectionToggle() {
    // this.mouseInInnerHeader = false;
    this.aboutContainer = document.getElementById(
      "website-about-section-container"
    );
    this.aboutContainer.classList.toggle("website-about-section-open");

    this.interval = setInterval(() => {
      this.calculatePortraitSize();
    }, 20);
    setTimeout(() => {
      clearInterval(this.interval);
    }, 2000);
  }

  aboutSectionClose() {
    this.aboutContainer = document.getElementById(
      "website-about-section-container"
    );
    if (!this.aboutSectionHovering && !this.innerHeaderHovering) {
      this.aboutContainer.classList.remove("website-about-section-open");
    }
  }

  createImgPopupContainer() {
    this.imgPopupContainer = document.createElement("div");
    this.imgPopupContainer.setAttribute("id", "project-img-overlay-container");
    this.doc.prepend(this.imgPopupContainer);
  }

  showProjectImg(el) {
    // create img project element
    this.projectImg = document.createElement("div");
    this.projectImg.classList.add("project-img-overlay");
    this.projectImg.setAttribute("id", `${this.data[el].id}-img`);
    document
      .getElementById("project-img-overlay-container")
      .appendChild(this.projectImg);

    // Create img element
    this.img = document.createElement("img");

    // Switch what to render as thumbnail image depending on first source's type (img, video, ...)
    switch (this.data[el].visual_documentation[0].type) {
      // If the source is an image, take the image directly
      case "image":
        this.img.setAttribute(
          "src",
          `${this.data[el].visual_documentation[0].source}`
        );
        break;
      // if the source s a video, take its thumbnail (poster) as img
      case "video":
        this.img.setAttribute(
          "src",
          `${this.data[el].visual_documentation[0].poster}`
        );
        break;
      default:
        console.log("no supported source type");
    }

    this.img.setAttribute("alt", `Image of ${this.data[el].title}`);

    //Populate the project image container with the current image
    this.projectImg.appendChild(this.img);
  }

  removeProjectImg(el) {
    document.getElementById(`${this.data[el].id}-img`).remove();
  }

  createProfileImage() {
    this.portraitContainer = document.createElement("div");
    this.portraitContainer.setAttribute("id", "header-portrait-container");
    this.doc.appendChild(this.portraitContainer);
    this.portrait = document.createElement("img");
    this.portrait.setAttribute("src", "img/sarahhm.jpg");
    this.portrait.setAttribute("alt", "Portrait of Sarah Hontoy-Major");
    this.portraitContainer.appendChild(this.portrait);

    this.calculatePortraitSize();
  }

  calculatePortraitSize() {
    // calculate where project title is, make it the max-height of portrait;
    this.titleProjectRect = document
      .getElementById("website-projects-dropdown-container")
      .getBoundingClientRect();

    this.portraitContainer.style.height = `calc(${this.titleProjectRect.width}px - 3rem)`;
    this.portraitContainer.style.width = `calc(${this.titleProjectRect.width}px - 3rem)`;

    this.portraitRect = document
      .getElementById("header-portrait-container")
      .getBoundingClientRect();

    this.portraitDeltaY = `calc(${this.titleProjectRect.top}px - ${this.headerRect.height}px - ${this.portraitRect.height}px - 2rem)`;

    // this.portraitContainer.style.top = `calc(${this.titleProjectRect.top}px - ${this.titleProjectRect.height}px)`;
    this.portraitContainer.style.transform = `translateY(${this.portraitDeltaY})`;
  }

  createClipPopup() {
    this.clippyContainer = document.createElement("div");
    this.clippyContainer.setAttribute("id", "clippy-container");
    this.doc.appendChild(this.clippyContainer);
    this.clippy = document.createElement("img");
    this.clippy.setAttribute("src", "img/clippy.png");
    this.clippy.setAttribute("alt", "Clippy");
    this.clippyContainer.appendChild(this.clippy);
  }
}
