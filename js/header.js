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

    this.websiteTitleContainer = document.getElementsByClassName(
      "website-title-container"
    );

    this.navMenuBtns = document.getElementsByClassName("nav-menu-btn");

    this.emailCopyBtn = document.getElementById("email-tooltip");
    this.toolTipText = document.getElementById("tooltiptext");

    this.printWebTitle();
    this.titleRedirect();

    this.printNavMenu();

    this.printPrjBtn();
    this.printAbtBtn();
    this.printCntcBtn();

    this.createPrjPopup();
    this.createAbtPopup();
    this.createImgPopup();
    this.createCvPopup();
    this.createCntcPopup();
    this.createIgPopup();

    this.websitePopups = document.getElementsByClassName("website-popup");
    this.navMenuPrjPopup = document.getElementById("website-projects-popup");
    this.navMenuAboutPopup = document.getElementById("website-about-popup");
    this.navMenuContactPopup = document.getElementById("website-contact-popup");
    this.navMenuCvPopup = document.getElementById("website-cv-popup");
    this.navMenuIgPopup = document.getElementById("website-instagram-popup");
    this.popupCloseBtns = document.getElementsByClassName(
      "website-popup-close-btn"
    );
    this.navMenuImgPopup = document.getElementById("website-img-popup");

    this.navMenuPrjPopup.open = false;
    this.navMenuAboutPopup.open = false;
    this.navMenuImgPopup.open = false;
    this.navMenuCvPopup.open = false;
    this.navMenuContactPopup.open = false;
    this.navMenuIgPopup.open = false;

    this.addListeners();
  }

  printWebTitle() {
    this.header = document.createElement("header");
    this.header.setAttribute("id", "website-header");
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

  createPrjPopup() {
    this.div = document.createElement("div");
    this.div.classList.add("website-popup");
    this.div.classList.add("popup-closed");
    this.div.setAttribute("id", "website-projects-popup");
    this.doc.appendChild(this.div);

    this.divHeader = document.createElement("div");
    this.divHeader.classList.add("website-popup-header");
    this.div.appendChild(this.divHeader);

    this.closeBtn = document.createElement("button");
    this.closeBtn.classList.add("website-popup-close-btn");
    this.closeBtn.setAttribute("id", "projects-popup-close-btn");
    this.divHeader.appendChild(this.closeBtn);
    this.closeBtn.insertAdjacentText("afterbegin", "x");

    this.popupTitle = document.createElement("h3");
    this.popupTitle.classList.add("website-popup-header-title");
    this.divHeader.appendChild(this.popupTitle);
    this.popupTitle.insertAdjacentText("afterbegin", "projects");

    this.popupBody = document.createElement("div");
    this.popupBody.classList.add("website-popup-body");
    this.popupBody.setAttribute("id", "projects-popup-body");
    this.div.appendChild(this.popupBody);

    this.list = document.createElement("ul");
    this.list.setAttribute("id", "projects-popup-list");
    this.popupBody.appendChild(this.list);

    // For the entire length of the projects.json data (minus the template available at the very end of the array)
    for (let i = 0; i < this.data.length - 1; i++) {
      this.newPrj = document.createElement("li");
      this.newPrj.classList.add("prj-popup-title");
      this.list.appendChild(this.newPrj);
      this.newPrj.innerHTML = `<a href = ${this.data[i].url}><sup> ${this.data[i].year} </sup>${this.data[i].title}</a>`;
    }
  }

  createAbtPopup() {
    this.div = document.createElement("div");
    this.div.classList.add("website-popup");
    this.div.classList.add("popup-closed");
    this.div.setAttribute("id", "website-about-popup");
    this.doc.appendChild(this.div);

    this.divHeader = document.createElement("div");
    this.divHeader.classList.add("website-popup-header");
    this.div.appendChild(this.divHeader);

    this.closeBtn = document.createElement("button");
    this.closeBtn.classList.add("website-popup-close-btn");
    this.closeBtn.setAttribute("id", "about-popup-close-btn");
    this.divHeader.appendChild(this.closeBtn);
    this.closeBtn.insertAdjacentText("afterbegin", "x");

    this.popupTitle = document.createElement("h3");
    this.popupTitle.classList.add("website-popup-header-title");
    this.divHeader.appendChild(this.popupTitle);
    this.popupTitle.insertAdjacentText("afterbegin", "about");

    this.popupBody = document.createElement("div");
    this.popupBody.classList.add("website-popup-body");
    this.popupBody.setAttribute("id", "about-popup-body");
    this.div.appendChild(this.popupBody);

    for (this.i = 0; this.i < this.about.text.length; this.i++) {
      this.para = document.createElement("p");
      this.popupBody.appendChild(this.para);
      this.para.insertAdjacentText("afterbegin", this.about.text[this.i]);
    }
  }

  createImgPopup() {
    this.div = document.createElement("div");
    this.div.classList.add("website-popup");
    this.div.classList.add("popup-closed");
    this.div.setAttribute("id", "website-img-popup");
    this.doc.appendChild(this.div);

    this.divHeader = document.createElement("div");
    this.divHeader.classList.add("website-popup-header");
    this.div.appendChild(this.divHeader);

    this.closeBtn = document.createElement("button");
    this.closeBtn.classList.add("website-popup-close-btn");
    this.closeBtn.setAttribute("id", "img-popup-close-btn");
    this.divHeader.appendChild(this.closeBtn);
    this.closeBtn.insertAdjacentText("afterbegin", "x");

    this.popupTitle = document.createElement("h3");
    this.popupTitle.classList.add("website-popup-header-title");
    this.divHeader.appendChild(this.popupTitle);
    this.popupTitle.insertAdjacentText("afterbegin", "sarahhm.jpg");

    this.popupBody = document.createElement("div");
    this.popupBody.classList.add("website-popup-body");
    this.popupBody.setAttribute("id", "img-popup-body");
    this.div.appendChild(this.popupBody);

    this.img = document.createElement("img");
    this.img.setAttribute("src", `img/sarahhm.jpg`);
    this.img.setAttribute("draggable", `false`);
    this.img.setAttribute("id", "about-img");
    this.popupBody.appendChild(this.img);
  }

  createCvPopup() {
    this.div = document.createElement("div");
    this.div.classList.add("website-popup");
    this.div.classList.add("popup-closed");
    this.div.setAttribute("id", "website-cv-popup");
    this.doc.appendChild(this.div);

    this.divHeader = document.createElement("div");
    this.divHeader.classList.add("website-popup-header");
    this.div.appendChild(this.divHeader);

    this.closeBtn = document.createElement("button");
    this.closeBtn.classList.add("website-popup-close-btn");
    this.closeBtn.setAttribute("id", "cv-popup-close-btn");
    this.divHeader.appendChild(this.closeBtn);
    this.closeBtn.insertAdjacentText("afterbegin", "x");

    this.popupTitle = document.createElement("h3");
    this.popupTitle.classList.add("website-popup-header-title");
    this.divHeader.appendChild(this.popupTitle);
    this.popupTitle.insertAdjacentText("afterbegin", "curriculum vitae");

    this.popupBody = document.createElement("div");
    this.popupBody.classList.add("website-popup-body");
    this.popupBody.setAttribute("id", "cv-popup-body");
    this.div.appendChild(this.popupBody);

    this.link = document.createElement("a");
    this.link.classList.add("cv-link");
    this.link.setAttribute("href", "data/Sarah_hontoy-major_CV.pdf");
    this.link.setAttribute("target", "_blank");
    this.popupBody.appendChild(this.link);

    this.btn = document.createElement("button");
    this.btn.setAttribute("id", "cv-btn");
    this.link.appendChild(this.btn);
    this.btn.innerHTML = "Open CV in a pdf";

    // this.copyBtn.
  }

  createCntcPopup() {
    this.div = document.createElement("div");
    this.div.classList.add("website-popup");
    this.div.classList.add("popup-closed");
    this.div.setAttribute("id", "website-contact-popup");
    this.doc.appendChild(this.div);

    this.divHeader = document.createElement("div");
    this.divHeader.classList.add("website-popup-header");
    this.div.appendChild(this.divHeader);

    this.closeBtn = document.createElement("button");
    this.closeBtn.classList.add("website-popup-close-btn");
    this.closeBtn.setAttribute("id", "contact-popup-close-btn");
    this.divHeader.appendChild(this.closeBtn);
    this.closeBtn.insertAdjacentText("afterbegin", "x");

    this.popupTitle = document.createElement("h3");
    this.popupTitle.classList.add("website-popup-header-title");
    this.divHeader.appendChild(this.popupTitle);
    this.popupTitle.insertAdjacentText("afterbegin", "contact");

    this.popupBody = document.createElement("div");
    this.popupBody.classList.add("website-popup-body");
    this.popupBody.setAttribute("id", "contact-popup-body");
    this.div.appendChild(this.popupBody);

    this.txtLink = document.createElement("a");
    this.txtLink.classList.add("contact-link");
    this.txtLink.setAttribute("href", "mailto: sarah.hm@hotmail.ca");
    this.txtLink.setAttribute("target", "_blank");
    this.popupBody.appendChild(this.txtLink);
    this.txtLink.innerHTML = "sarah.hm@hotmail.ca";

    this.imgLink = document.createElement("a");
    this.imgLink.setAttribute("href", "mailto: sarah.hm@hotmail.ca");
    this.imgLink.setAttribute("target", "_blank");
    this.popupBody.appendChild(this.imgLink);
    this.imgLink.innerHTML = `<img src="img/email.png" alt="Sarah Hontoy-Major's email link"/>`;

    this.emailCopySec = document.createElement("div");
    this.emailCopySec.setAttribute("id", "contact-email-copy-section");
    this.popupBody.appendChild(this.emailCopySec);

    this.copyBtn = document.createElement("button");
    this.copyBtn.setAttribute("id", "email-tooltip");
    this.emailCopySec.appendChild(this.copyBtn);
    this.copyBtn.innerHTML = "Copy email";

    this.copyTooltip = document.createElement("span");
    this.copyTooltip.setAttribute("id", "tooltiptext");
    this.copyBtn.appendChild(this.copyTooltip);
    this.copyTooltip.innerHTML = "Copy to clipboard";

    this.copyBtn.addEventListener("click", () => {
      this.email = "sarah.hm@hotmail.ca";
      // Copy the text inside the text field
      navigator.clipboard.writeText(this.email);
      // email popup: change tool tip text when clicked
      this.OriginalText = this.copyTooltip.innerHTML;
      console.log(this.OriginalText);
      this.copyTooltip.innerHTML = "Copied to clipboard!";
      setTimeout(() => {
        this.copyTooltip.innerHTML = this.OriginalText;
      }, 750);
    });

    // this.copyBtn.
  }

  createIgPopup() {
    this.div = document.createElement("div");
    this.div.classList.add("website-popup");
    this.div.classList.add("popup-closed");
    this.div.setAttribute("id", "website-instagram-popup");
    this.doc.appendChild(this.div);

    this.divHeader = document.createElement("div");
    this.divHeader.classList.add("website-popup-header");
    this.div.appendChild(this.divHeader);

    this.closeBtn = document.createElement("button");
    this.closeBtn.classList.add("website-popup-close-btn");
    this.closeBtn.setAttribute("id", "instagram-popup-close-btn");
    this.divHeader.appendChild(this.closeBtn);
    this.closeBtn.insertAdjacentText("afterbegin", "x");

    this.popupTitle = document.createElement("h3");
    this.popupTitle.classList.add("website-popup-header-title");
    this.divHeader.appendChild(this.popupTitle);
    this.popupTitle.insertAdjacentText("afterbegin", "@sarahhm.jpg");

    this.popupBody = document.createElement("div");
    this.popupBody.classList.add("website-popup-body");
    this.popupBody.setAttribute("id", "ig-popup-body");
    this.div.appendChild(this.popupBody);

    this.txtLink = document.createElement("a");
    this.txtLink.classList.add("contact-link");
    this.txtLink.setAttribute("target", "_blank");
    this.txtLink.setAttribute("href", "https://www.instagram.com/sarahhm.jpg");
    this.popupBody.appendChild(this.txtLink);
    this.txtLink.innerHTML = "@sarahhm.jpg";

    this.imgLink = document.createElement("a");
    this.imgLink.setAttribute("target", "_blank");
    this.imgLink.setAttribute("href", "https://www.instagram.com/sarahhm.jpg");
    this.imgLink.classList.add("contact-image-link");
    this.popupBody.appendChild(this.imgLink);
    this.imgLink.innerHTML = `<img src="img/instagram.png" alt="Sarahhm.jpg's instagram link" width = '${this.width}'"/>`;
  }

  addListeners() {
    // Open popups when clicking on nav menu
    Object.keys(this.navMenuBtns).forEach((key) => {
      this.navMenuBtns[key].addEventListener("click", () => {
        switch (this.navMenuBtns[key].id) {
          case "nav-menu-prj-btn":
            // close projects and all img popups
            if (this.navMenuPrjPopup.open) {
              this.closeProjectImgPopups();
              this.navMenuPrjPopup.classList.add("popup-closed");
              this.navMenuPrjPopup.open = false;
            } else {
              //toggle projects pop-up
              this.recalculatePosition(this.navMenuPrjPopup);
              this.navMenuPrjPopup.classList.remove("popup-closed");
              this.navMenuPrjPopup.open = true;
            }
            break;
          case "nav-menu-abt-btn":
            // if any of the about popups (statement, img, cv) are open, close all of them
            if (
              this.navMenuAboutPopup.open ||
              this.navMenuImgPopup.open ||
              this.navMenuCvPopup.open
            ) {
              this.navMenuAboutPopup.classList.add("popup-closed");
              this.navMenuImgPopup.classList.add("popup-closed");
              this.navMenuCvPopup.classList.add("popup-closed");
              this.navMenuAboutPopup.open = false;
              this.navMenuImgPopup.open = false;
              this.navMenuCvPopup.open = false;
            }
            // if they are all closed, open all of them (and recalculate position)
            else {
              // about
              this.recalculatePosition(this.navMenuAboutPopup);
              this.navMenuAboutPopup.classList.remove("popup-closed");
              this.navMenuAboutPopup.open = true;
              // self-portrait
              this.recalculatePosition(this.navMenuImgPopup);
              this.navMenuImgPopup.classList.remove("popup-closed");
              this.navMenuImgPopup.open = true;
              //cv
              this.recalculatePosition(this.navMenuCvPopup);
              this.navMenuCvPopup.classList.remove("popup-closed");
              this.navMenuCvPopup.open = true;
            }

            break;
          case "nav-menu-cntct-btn":
            // if any of the about popups (statement, img, cv) are open, close all of them
            if (this.navMenuContactPopup.open || this.navMenuIgPopup.open) {
              // contact
              this.navMenuContactPopup.classList.add("popup-closed");
              this.navMenuContactPopup.open = false;
              // ig
              this.navMenuIgPopup.classList.add("popup-closed");
              this.navMenuIgPopup.open = false;
            }
            // if they are all closed, open all of them (and recalculate position)
            else {
              // contact (email)
              this.recalculatePosition(this.navMenuContactPopup);
              this.navMenuContactPopup.classList.remove("popup-closed");
              this.navMenuContactPopup.open = true;
              // ig
              this.recalculatePosition(this.navMenuIgPopup);
              this.navMenuIgPopup.classList.remove("popup-closed");
              this.navMenuIgPopup.open = true;
            }

            break;
          default:
            console.log("not a button");
            break;
        }
      });
    });

    // Close popups when clicking on X header of popup
    Object.keys(this.popupCloseBtns).forEach((key) => {
      this.popupCloseBtns[key].addEventListener("click", () => {
        switch (this.popupCloseBtns[key].id) {
          case "projects-popup-close-btn":
            //close projects pop-up
            this.navMenuPrjPopup.classList.add("popup-closed");
            console.log("close");
            this.closeProjectImgPopups();
            break;
          case "about-popup-close-btn":
            //close about pop-up
            this.navMenuAboutPopup.classList.add("popup-closed");
            break;
          case "img-popup-close-btn":
            // close instagram pop-up
            this.navMenuImgPopup.classList.add("popup-closed");
            break;
          case "cv-popup-close-btn":
            // close instagram pop-up
            this.navMenuCvPopup.classList.add("popup-closed");
            break;
          case "contact-popup-close-btn":
            // close contact pop-up
            this.navMenuContactPopup.classList.add("popup-closed");
            break;
          case "instagram-popup-close-btn":
            // close instagram pop-up
            this.navMenuIgPopup.classList.add("popup-closed");
            break;
          default:
            console.log("not a button");
            break;
        }
      });
    });

    //Adds to zindex everytime you click a popup
    this.popupZindex = "5000";

    Object.keys(this.websitePopups).forEach((key) => {
      this.websitePopups[key].addEventListener("mousedown", () => {
        this.newZindex = this.popupZindex++;
        switch (this.websitePopups[key].id) {
          case "website-projects-popup":
            //puts projects pop-up on top
            this.navMenuPrjPopup.mouseDown = true;
            this.navMenuPrjPopup.style.zIndex = this.newZindex;
            // this.websitePopups[key].style.cursor = "grabbing";
            break;
          case "website-about-popup":
            //puts about pop-up on top
            this.navMenuAboutPopup.mouseDown = true;
            this.navMenuAboutPopup.style.zIndex = this.newZindex;
            break;
          case "website-img-popup":
            //puts about pop-up on top
            this.navMenuImgPopup.mouseDown = true;
            this.navMenuImgPopup.style.zIndex = this.newZindex;
            break;

          case "website-cv-popup":
            //puts about pop-up on top
            this.navMenuCvPopup.mouseDown = true;
            this.navMenuCvPopup.style.zIndex = this.newZindex;
            break;
          case "website-contact-popup":
            //puts about pop-up on top
            this.navMenuContactPopup.mouseDown = true;
            this.navMenuContactPopup.style.zIndex = this.newZindex;
            break;
          case "website-instagram-popup":
            //puts about pop-up on top
            this.navMenuIgPopup.mouseDown = true;
            this.navMenuIgPopup.style.zIndex = this.newZindex;
            break;
          default:
            console.log("not a popup");
            break;
        }
      });
    });

    document.addEventListener("mouseup", () => {
      this.navMenuPrjPopup.mouseDown = false;
      this.navMenuAboutPopup.mouseDown = false;
      this.navMenuImgPopup.mouseDown = false;
      this.navMenuCvPopup.mouseDown = false;
      this.navMenuContactPopup.mouseDown = false;
      this.navMenuIgPopup.mouseDown = false;
    });

    document.addEventListener("mousemove", (event) => {
      Object.keys(this.websitePopups).forEach((key) => {
        switch (this.websitePopups[key].mouseDown) {
          case true:
            this.elRect = this.websitePopups[key].getBoundingClientRect();

            // console.log(this.elRect);
            this.deltaX = this.elRect.width / 2;
            this.deltaY = this.elRect.height * 0.05;

            this.newX = event.clientX - this.deltaX;
            this.newY = event.clientY - this.deltaY;

            this.websitePopups[key].style.left = this.newX + "px";
            this.websitePopups[key].style.top = this.newY + "px";

            //Redraw line with the current Element's X, Y position (should be whenever the div moves, not only on mouse move)
            this.newX = this.newX + this.elRect.width / 2;
            this.newY = this.newY + this.elRect.height / 2;

            this.x = this.newX;
            this.y = this.newY;

            break;
          case false:
            // console.log("false");
            break;
          default:
            // console.log("not a popup");
            break;
        }
      });
    });
  }

  // == Recalculate position within viewport everytime popup opens
  recalculatePosition(popup) {
    this.width = window.innerWidth;
    this.height = window.innerHeight;

    this.maxWidth = this.width * 0.8;
    this.minWidth = this.width * 0.2;

    this.maxHeight = this.height * 0.7;
    this.minHeight = this.height * 0.3;

    switch (popup.getAttribute("id")) {
      // projects popup will always appear closer to left/top than others
      case "website-projects-popup":
        this.maxWidth = this.width * 0.3;
        this.minWidth = this.width * 0.1;

        this.maxHeight = this.height * 0.4;
        this.minHeight = this.height * 0.2;
        break;
      default:
        this.maxWidth = this.width * 0.8;
        this.minWidth = this.width * 0.2;

        this.maxHeight = this.height * 0.7;
        this.minHeight = this.height * 0.3;
    }

    this.xpos = Math.floor(
      Math.random() * (this.maxWidth - this.minWidth) + this.minWidth
    );
    this.ypos = Math.floor(
      Math.random() * (this.maxHeight - this.minHeight) + this.minHeight
    );

    popup.style.left = `${this.xpos}px`;
    popup.style.top = `${this.ypos}px`;
  }

  closeProjectImgPopups() {
    this.prjImgPopups = document.getElementsByClassName("project-img-popup");
    if (this.prjImgPopups.length > 0) {
      Object.keys(this.prjImgPopups).forEach((key) => {
        this.prjImgPopups[key].classList.add("popup-closed");
      });
    }
  }
}
