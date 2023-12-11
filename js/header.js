class Header {
  constructor(data) {
    this.websiteTitle = {
      title: "Sarah Hontoy-Major,",
      subtitle: "transdisciplinary artist and designer",
    };
    this.about = {
      text: [
        "Sarah is a multidisciplinary, queer and neurodivergent, computational and tangible designer with a background in wearables, fashion design, 3 CAD and CAM, front and back end programming with a special interest on outlying narratives and material techniques. Their practice bridges our material and graspable world with the digital realm and its interfaces; how they impact each other in often unnoticed patterns. They strive to deconstruct the binary and linear hierarchies we maintain our dominant institutions in through queer and divergent story-telling. 'Invisible', digital, detexturized and averaged out data translate into tangible and graspable realities leaving outlying narratives out by design. These outcast stories are crucial to voice and physicalize to create a faithfully representative, sustainable, and reciprocal present and future cyberspace.",
        "Current research assistant for the Indigenous Futures Research Center and Aboriginal Terriroty in Cyberspace in the Milieux Research Institute of Concordia University's Fine Arts Faculty, they are also a former research assistant for speculative fashion designer Ying Gao (École Supérieur de Mode de Montréal, UQAM), UQAM's Diament research chair on design for cyber mental health, and Vestechpro, an apparel research and innovation center affiliated with Marie-Victorin Fashion College.",
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
      about: `learn more <span class= "nav-button" id ="about-button"> about me</span>`,
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

      this.navHTML = `${this.navBtns.about} ${this.navBtns.instagram} ${this.navBtns.email}.`;
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

      // document
      //   .getElementsByClassName("inner-header")[0]
      //   .addEventListener("mouseleave", () => {
      //     this.innerHeaderHovering = false;
      //     // this.aboutSectionHovering = true;
      //     if (!this.aboutSectionHovering) {
      //       this.aboutSectionClose();
      //     }
      //   });

      // Set hovering over the about section to true
      document
        .getElementById("website-about-section-container")
        .addEventListener("mouseenter", () => {
          this.aboutSectionHovering = true;
          this.innerHeaderHovering = true;
          console.log("in about section");
        });
      // Set hovering over the about section to false
      document
        .getElementById("website-about-section-container")
        .addEventListener("mouseleave", () => {
          console.log("out about section");
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
        });

      document
        .getElementById("website-projects-dropdown-content")
        .addEventListener("mouseenter", () => {
          this.innerHeaderHovering = false;
          this.aboutSectionHovering = false;
          this.aboutSectionClose();
        });
    } else {
      // this.createProjectDropdown(this.currentProjectID);
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

    this.emailTxt.addEventListener("click", () => {
      this.email = "sarah.hm@hotmail.ca";
      // Copy the text inside the text field
      navigator.clipboard.writeText(this.email);
      // email popup: change tool tip text when clicked
      // this.OriginalText = this.copyTooltip.innerHTML;
      // console.log(this.OriginalText);
      // this.copyTooltip.innerHTML = "Copied to clipboard!";
      // setTimeout(() => {
      //   this.copyTooltip.innerHTML = this.OriginalText;
      // }, 750);
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
    console.log("create about");
    console.log("yolo");
    this.aboutSection = document.createElement("div");
    this.aboutSection.setAttribute("id", "website-about-section-container");
    document
      .getElementById("website-header")
      .getElementsByClassName("inner-header")[0]
      .appendChild(this.aboutSection);

    console.log(this.aboutSection);

    this.aboutBody = document.createElement("div");
    this.aboutBody.classList.add("website-section-body");
    this.aboutBody.setAttribute("id", "about-section-body");
    this.aboutSection.appendChild(this.aboutBody);

    for (this.i = 0; this.i < this.about.text.length; this.i++) {
      this.para = document.createElement("p");
      this.aboutBody.appendChild(this.para);
      this.para.insertAdjacentText("afterbegin", this.about.text[this.i]);
    }

    this.aboutSectionHovering = false;
  }

  aboutSectionToggle() {
    // this.mouseInInnerHeader = false;
    this.aboutContainer = document.getElementById(
      "website-about-section-container"
    );
    this.aboutContainer.classList.toggle("website-about-section-open");
  }

  aboutSectionClose() {
    console.log(this.aboutSectionHovering);
    if (!this.aboutSectionHovering && !this.innerHeaderHovering) {
      this.aboutContainer = document.getElementById(
        "website-about-section-container"
      );
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

  //  ===== NOTHIGN AFTER THIS MATTERS (i think?) =====
  // createMobileNav() {
  //   this.div = document.createElement("div");
  //   this.div.setAttribute("id", "nav-menu-mobile");
  //   document.getElementById("homepage").appendChild(this.div);

  //   this.createMobileNavBtn(this.buttons.prjBtn.title, this.buttons.prjBtn.id);
  //   this.createMobileNavSection(this.buttons.prjBtn.id);
  //   this.createMobileNavBtn(
  //     this.buttons.aboutBtn.title,
  //     this.buttons.aboutBtn.id
  //   );
  //   this.createMobileNavBtn(
  //     this.buttons.contactBtn.title,
  //     this.buttons.contactBtn.id
  //   );
  // }

  // createMobileNavBtn(title, id) {
  //   this.button = document.createElement("button");
  //   this.button.classList.add("mobile-nav-menu-button");
  //   this.button.setAttribute("id", `${id}-mobile-button`);
  //   document.getElementById("nav-menu-mobile").appendChild(this.button);
  //   this.button.insertAdjacentText("afterbegin", `${title}`);
  // }

  // createMobileNavSection(id) {
  //   this.div = document.createElement("div");
  //   this.div.classList.add("mobile-nav-menu-section");
  //   this.div.setAttribute("id", `${id}-mobile-section`);
  //   document.getElementById("nav-menu-mobile").appendChild(this.div);
  // }

  // // addListeners() {
  // //   // Open popups when clicking on nav menu sliders
  // //   Object.keys(this.navMenuBtns).forEach((key) => {
  // //     this.navMenuBtns[key].addEventListener("change", () => {
  // //       switch (this.navMenuBtns[key].id) {
  // //         case "project-nav-btn":
  // //           // console.log(this.navMenuPrjPopup.open);
  // //           // close projects and all img popups
  // //           if (this.navMenuPrjPopup.open) {
  // //             this.closeProjectImgPopups();
  // //             this.navMenuPrjPopup.classList.add("popup-closed");
  // //             this.navMenuPrjPopup.open = false;

  // //             // Remove green button background
  // //             // this.navMenuBtns[key].style.backgroundPosition = "";
  // //           } else {
  // //             //toggle projects pop-up
  // //             this.recalculatePosition(this.navMenuPrjPopup);
  // //             this.navMenuPrjPopup.classList.remove("popup-closed");
  // //             this.navMenuPrjPopup.open = true;
  // //           }
  // //           break;
  // //         case "about-nav-btn":
  // //           // if any of the about popups (statement, img, cv) are open, close all of them
  // //           if (
  // //             this.navMenuAboutPopup.open ||
  // //             this.navMenuImgPopup.open ||
  // //             this.navMenuCvPopup.open
  // //           ) {
  // //             this.navMenuAboutPopup.classList.add("popup-closed");
  // //             this.navMenuImgPopup.classList.add("popup-closed");
  // //             this.navMenuCvPopup.classList.add("popup-closed");
  // //             this.navMenuAboutPopup.open = false;
  // //             this.navMenuImgPopup.open = false;
  // //             this.navMenuCvPopup.open = false;
  // //           }
  // //           // if they are all closed, open all of them (and recalculate position)
  // //           else {
  // //             // about
  // //             this.recalculatePosition(this.navMenuAboutPopup);
  // //             this.navMenuAboutPopup.classList.remove("popup-closed");
  // //             this.navMenuAboutPopup.open = true;
  // //             // self-portrait
  // //             this.recalculatePosition(this.navMenuImgPopup);
  // //             this.navMenuImgPopup.classList.remove("popup-closed");
  // //             this.navMenuImgPopup.open = true;
  // //             //cv
  // //             this.recalculatePosition(this.navMenuCvPopup);
  // //             this.navMenuCvPopup.classList.remove("popup-closed");
  // //             this.navMenuCvPopup.open = true;
  // //           }

  // //           break;
  // //         case "contact-nav-btn":
  // //           // if any of the about popups (statement, img, cv) are open, close all of them
  // //           if (this.navMenuContactPopup.open || this.navMenuIgPopup.open) {
  // //             // contact
  // //             this.navMenuContactPopup.classList.add("popup-closed");
  // //             this.navMenuContactPopup.open = false;
  // //             // ig
  // //             this.navMenuIgPopup.classList.add("popup-closed");
  // //             this.navMenuIgPopup.open = false;
  // //           }
  // //           // if they are all closed, open all of them (and recalculate position)
  // //           else {
  // //             // contact (email)
  // //             this.recalculatePosition(this.navMenuContactPopup);
  // //             this.navMenuContactPopup.classList.remove("popup-closed");
  // //             this.navMenuContactPopup.open = true;
  // //             // ig
  // //             this.recalculatePosition(this.navMenuIgPopup);
  // //             this.navMenuIgPopup.classList.remove("popup-closed");
  // //             this.navMenuIgPopup.open = true;
  // //           }

  // //           break;
  // //         default:
  // //           console.log("not a button");
  // //           break;
  // //       }
  // //     });
  // //   });

  // //   // Nav menu button titles toggle the entire on/off state when clicked
  // //   this.navMenuBtnTitles = document.getElementsByClassName(
  // //     "nav-menu-button-title"
  // //   );

  // //   Object.keys(this.navMenuBtnTitles).forEach((key) => {
  // //     this.navMenuBtnTitles[key].addEventListener("click", () => {
  // //       switch (this.navMenuBtnTitles[key].id) {
  // //         case "project-nav-btn-title":
  // //           // console.log(this.navMenuPrjPopup.open);
  // //           // close projects and all img popups
  // //           if (this.navMenuPrjPopup.open) {
  // //             this.closeProjectImgPopups();
  // //             this.navMenuPrjPopup.classList.add("popup-closed");
  // //             this.navMenuPrjPopup.open = false;

  // //             //Change slider to unchecked
  // //             document.getElementById("project-nav-btn-input").checked = false;
  // //           } else {
  // //             //toggle projects pop-up
  // //             this.recalculatePosition(this.navMenuPrjPopup);
  // //             this.navMenuPrjPopup.classList.remove("popup-closed");
  // //             this.navMenuPrjPopup.open = true;

  // //             //Change slider to checked
  // //             document.getElementById("project-nav-btn-input").checked = true;
  // //           }
  // //           break;
  // //         case "about-nav-btn-title":
  // //           // if any of the about popups (statement, img, cv) are open, close all of them
  // //           if (
  // //             this.navMenuAboutPopup.open ||
  // //             this.navMenuImgPopup.open ||
  // //             this.navMenuCvPopup.open
  // //           ) {
  // //             this.navMenuAboutPopup.classList.add("popup-closed");
  // //             this.navMenuImgPopup.classList.add("popup-closed");
  // //             this.navMenuCvPopup.classList.add("popup-closed");
  // //             this.navMenuAboutPopup.open = false;
  // //             this.navMenuImgPopup.open = false;
  // //             this.navMenuCvPopup.open = false;

  // //             //Change slider to unchecked
  // //             document.getElementById("about-nav-btn-input").checked = false;
  // //           }
  // //           // if they are all closed, open all of them (and recalculate position)
  // //           else {
  // //             // about
  // //             this.recalculatePosition(this.navMenuAboutPopup);
  // //             this.navMenuAboutPopup.classList.remove("popup-closed");
  // //             this.navMenuAboutPopup.open = true;
  // //             // self-portrait
  // //             this.recalculatePosition(this.navMenuImgPopup);
  // //             this.navMenuImgPopup.classList.remove("popup-closed");
  // //             this.navMenuImgPopup.open = true;
  // //             //cv
  // //             this.recalculatePosition(this.navMenuCvPopup);
  // //             this.navMenuCvPopup.classList.remove("popup-closed");
  // //             this.navMenuCvPopup.open = true;

  // //             //Change slider to checked
  // //             document.getElementById("about-nav-btn-input").checked = true;
  // //           }

  // //           break;
  // //         case "contact-nav-btn-title":
  // //           // if any of the about popups (statement, img, cv) are open, close all of them
  // //           if (this.navMenuContactPopup.open || this.navMenuIgPopup.open) {
  // //             // contact
  // //             this.navMenuContactPopup.classList.add("popup-closed");
  // //             this.navMenuContactPopup.open = false;
  // //             // ig
  // //             this.navMenuIgPopup.classList.add("popup-closed");
  // //             this.navMenuIgPopup.open = false;

  // //             //Change slider to unchecked
  // //             document.getElementById("contact-nav-btn-input").checked = false;
  // //           }
  // //           // if they are all closed, open all of them (and recalculate position)
  // //           else {
  // //             // contact (email)
  // //             this.recalculatePosition(this.navMenuContactPopup);
  // //             this.navMenuContactPopup.classList.remove("popup-closed");
  // //             this.navMenuContactPopup.open = true;
  // //             // ig
  // //             this.recalculatePosition(this.navMenuIgPopup);
  // //             this.navMenuIgPopup.classList.remove("popup-closed");
  // //             this.navMenuIgPopup.open = true;

  // //             //Change slider to checked
  // //             document.getElementById("contact-nav-btn-input").checked = true;
  // //           }

  // //           break;
  // //         default:
  // //           console.log("not a button");
  // //           break;
  // //       }
  // //     });
  // //   });

  // //   // // Manually close popups when clicking on X header of popup
  // //   // Object.keys(this.popupCloseBtns).forEach((key) => {
  // //   //   this.popupCloseBtns[key].addEventListener("click", () => {
  // //   //     switch (this.popupCloseBtns[key].id) {
  // //   //       case "projects-popup-close-btn":
  // //   //         console.log(this.popupCloseBtns[key]);
  // //   //         //close projects pop-up
  // //   //         this.navMenuPrjPopup.classList.add("popup-closed");
  // //   //         this.navMenuPrjPopup.open = false;
  // //   //         console.log("close");
  // //   //         this.closeProjectImgPopups();

  // //   //         break;
  // //   //       case "about-popup-close-btn":
  // //   //         //close about pop-up
  // //   //         this.navMenuAboutPopup.classList.add("popup-closed");
  // //   //         this.navMenuAboutPopup.open = false;
  // //   //         break;
  // //   //       case "img-popup-close-btn":
  // //   //         // close instagram pop-up
  // //   //         this.navMenuImgPopup.classList.add("popup-closed");
  // //   //         this.navMenuImgPopup.open = false;
  // //   //         break;
  // //   //       case "cv-popup-close-btn":
  // //   //         // close instagram pop-up
  // //   //         this.navMenuCvPopup.classList.add("popup-closed");
  // //   //         this.navMenuCvPopup.open = false;
  // //   //         break;
  // //   //       case "contact-popup-close-btn":
  // //   //         // close contact pop-up
  // //   //         this.navMenuContactPopup.classList.add("popup-closed");
  // //   //         this.navMenuContactPopup.open = false;
  // //   //         break;
  // //   //       case "instagram-popup-close-btn":
  // //   //         // close instagram pop-up
  // //   //         this.navMenuIgPopup.classList.add("popup-closed");
  // //   //         this.navMenuIgPopup.open = false;
  // //   //         break;
  // //   //       default:
  // //   //         console.log("not a button");
  // //   //         break;
  // //   //     }

  // //   //     // If all corresponding popups were manually closed, toggle the respective nav menu slider off
  // //   //     if (!this.navMenuPrjPopup.open) {
  // //   //       document.getElementById("project-nav-btn-input").checked = false;
  // //   //     }
  // //   //     if (
  // //   //       !this.navMenuAboutPopup.open &&
  // //   //       !this.navMenuImgPopup.open &&
  // //   //       !this.navMenuCvPopup.open
  // //   //     ) {
  // //   //       document.getElementById("about-nav-btn-input").checked = false;
  // //   //     }
  // //   //     if (!this.navMenuIgPopup.open && !this.navMenuContactPopup.open) {
  // //   //       document.getElementById("contact-nav-btn-input").checked = false;
  // //   //     }
  // //   //   });
  // //   // });

  // //   // //Make popup window draggable
  // //   // this.popupZindex = "5000";
  // //   // this.popupHeaders = document.getElementsByClassName("website-popup-header");

  // //   // Object.keys(this.popupHeaders).forEach((key) => {
  // //   //   this.popupHeaders[key].addEventListener("mousedown", () => {
  // //   //     this.newZindex = this.popupZindex++;
  // //   //     console.log(this.popupHeaders[key].id);
  // //   //     switch (this.popupHeaders[key].id) {
  // //   //       case "website-projects-popup-header":
  // //   //         //puts projects pop-up on top
  // //   //         this.navMenuPrjPopup.mouseDown = true;
  // //   //         this.navMenuPrjPopup.style.zIndex = this.newZindex;
  // //   //         // this.websitePopups[key].style.cursor = "grabbing";
  // //   //         break;
  // //   //       case "website-about-popup-header":
  // //   //         //puts about pop-up on top
  // //   //         this.navMenuAboutPopup.mouseDown = true;
  // //   //         this.navMenuAboutPopup.style.zIndex = this.newZindex;
  // //   //         break;
  // //   //       case "website-image-popup-header":
  // //   //         //puts about pop-up on top
  // //   //         this.navMenuImgPopup.mouseDown = true;
  // //   //         this.navMenuImgPopup.style.zIndex = this.newZindex;
  // //   //         break;

  // //   //       case "website-cv-popup-header":
  // //   //         //puts about pop-up on top
  // //   //         this.navMenuCvPopup.mouseDown = true;
  // //   //         this.navMenuCvPopup.style.zIndex = this.newZindex;
  // //   //         break;
  // //   //       case "website-contact-popup-header":
  // //   //         //puts about pop-up on top
  // //   //         this.navMenuContactPopup.mouseDown = true;
  // //   //         this.navMenuContactPopup.style.zIndex = this.newZindex;
  // //   //         break;
  // //   //       case "website-ig-popup-header":
  // //   //         //puts about pop-up on top
  // //   //         this.navMenuIgPopup.mouseDown = true;
  // //   //         this.navMenuIgPopup.style.zIndex = this.newZindex;
  // //   //         break;
  // //   //       default:
  // //   //         console.log("not a popup");
  // //   //         break;
  // //   //     }
  // //   //   });
  // //   // });

  // //   // // Make popup window increase z-index when clicked anywhere
  // //   // Object.keys(this.websitePopups).forEach((key) => {
  // //   //   this.websitePopups[key].addEventListener("mousedown", () => {
  // //   //     this.newZindex = this.popupZindex++;
  // //   //     console.log(this.websitePopups[key].id);
  // //   //     switch (this.websitePopups[key].id) {
  // //   //       case "website-projects-popup":
  // //   //         //puts projects pop-up on top
  // //   //         this.navMenuPrjPopup.style.zIndex = this.newZindex;
  // //   //         break;
  // //   //       case "website-about-popup":
  // //   //         //puts about pop-up on top
  // //   //         this.navMenuAboutPopup.style.zIndex = this.newZindex;
  // //   //         break;
  // //   //       case "website-image-popup":
  // //   //         //puts about pop-up on top
  // //   //         this.navMenuImgPopup.style.zIndex = this.newZindex;
  // //   //         break;

  // //   //       case "website-cv-popup":
  // //   //         //puts about pop-up on top
  // //   //         this.navMenuCvPopup.style.zIndex = this.newZindex;
  // //   //         break;
  // //   //       case "website-contact-popup":
  // //   //         //puts about pop-up on top
  // //   //         this.navMenuContactPopup.style.zIndex = this.newZindex;
  // //   //         break;
  // //   //       case "website-ig-popup":
  // //   //         //puts about pop-up on top

  // //   //         this.navMenuIgPopup.style.zIndex = this.newZindex;
  // //   //         break;
  // //   //       default:
  // //   //         console.log("not a popup");
  // //   //         break;
  // //   //     }
  // //   //   });
  // //   // });

  // //   // document.addEventListener("mouseup", () => {
  // //   //   this.navMenuPrjPopup.mouseDown = false;
  // //   //   this.navMenuAboutPopup.mouseDown = false;
  // //   //   this.navMenuImgPopup.mouseDown = false;
  // //   //   this.navMenuCvPopup.mouseDown = false;
  // //   //   this.navMenuContactPopup.mouseDown = false;
  // //   //   this.navMenuIgPopup.mouseDown = false;
  // //   // });

  // //   // document.addEventListener("mousemove", (event) => {
  // //   //   Object.keys(this.websitePopups).forEach((key) => {
  // //   //     switch (this.websitePopups[key].mouseDown) {
  // //   //       case true:
  // //   //         this.elRect = this.websitePopups[key].getBoundingClientRect();

  // //   //         // console.log(this.elRect);
  // //   //         this.deltaX = this.elRect.width / 2;
  // //   //         this.deltaY = this.elRect.height * 0.05;

  // //   //         this.newX = event.clientX - this.deltaX;
  // //   //         this.newY = event.clientY - this.deltaY;

  // //   //         this.websitePopups[key].style.left = this.newX + "px";
  // //   //         this.websitePopups[key].style.top = this.newY + "px";

  // //   //         //Redraw line with the current Element's X, Y position (should be whenever the div moves, not only on mouse move)
  // //   //         this.newX = this.newX + this.elRect.width / 2;
  // //   //         this.newY = this.newY + this.elRect.height / 2;

  // //   //         this.x = this.newX;
  // //   //         this.y = this.newY;

  // //   //         break;
  // //   //       case false:
  // //   //         // console.log("false");
  // //   //         break;
  // //   //       default:
  // //   //         // console.log("not a popup");
  // //   //         break;
  // //   //     }
  // //   //   });
  // //   // });
  // // }

  // // == Recalculate position within viewport everytime popup opens
  // recalculatePosition(popup) {
  //   this.width = window.innerWidth;
  //   this.height = window.innerHeight;

  //   switch (popup.getAttribute("id")) {
  //     // projects popup will always appear closer to left/top than others
  //     case "website-projects-popup":
  //       this.maxWidth = this.width * 0.3;
  //       this.minWidth = this.width * 0.05;

  //       this.maxHeight = this.height * 0.4;
  //       this.minHeight = this.height * 0.15;
  //       break;
  //     default:
  //       this.maxWidth = this.width * 0.8;
  //       this.minWidth = this.width * 0.2;

  //       this.maxHeight = this.height * 0.7;
  //       this.minHeight = this.height * 0.15;
  //   }

  //   this.xpos = Math.floor(
  //     Math.random() * (this.maxWidth - this.minWidth) + this.minWidth
  //   );
  //   this.ypos = Math.floor(
  //     Math.random() * (this.maxHeight - this.minHeight) + this.minHeight
  //   );

  //   popup.style.left = `${this.xpos}px`;
  //   popup.style.top = `${this.ypos}px`;
  // }

  // closeProjectImgPopups() {
  //   this.prjImgPopups = document.getElementsByClassName("project-img-popup");
  //   if (this.prjImgPopups.length > 0) {
  //     Object.keys(this.prjImgPopups).forEach((key) => {
  //       this.prjImgPopups[key].classList.add("popup-closed");
  //     });
  //   }
  // }
}
