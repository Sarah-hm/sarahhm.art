class Header {
  constructor(data) {
    this.websiteTitle = {
      title: "Sarah Hontoy-Major,",
      subtitle: "transdisciplinary artist and designer",
    };
    this.about = {
      text: " Proin quis nibh vel dui ullamcorper interdum at a lorem. Integer ultrices nunc eget urna facilisis, eget commodo sapien pellentesque. Nam laoreet varius dui in faucibus. Nulla nulla augue, consequat non",
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
    this.createCntcPopup();
    this.createIgPopup();

    this.websitePopups = document.getElementsByClassName("website-popup");
    this.navMenuPrjPopup = document.getElementById("website-projects-popup");
    this.navMenuAboutPopup = document.getElementById("website-about-popup");
    this.navMenuContactPopup = document.getElementById("website-contact-popup");
    this.navMenuIgPopup = document.getElementById("website-instagram-popup");
    this.popupCloseBtns = document.getElementsByClassName(
      "website-popup-close-btn"
    );
    this.navMenuImgPopup = document.getElementById("website-img-popup");

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

    for (let i = 0; i < this.data.length; i++) {
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

    this.para = document.createElement("p");
    this.popupBody.appendChild(this.para);
    this.para.insertAdjacentText("afterbegin", this.about.text);
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
    this.imgLink.innerHTML = `<img src="img/instagram.png" alt="Sarahhm.jpg's instagram link" "/>`;
  }

  addListeners() {
    // Open popups when clicking on nav menu
    Object.keys(this.navMenuBtns).forEach((key) => {
      this.navMenuBtns[key].addEventListener("click", () => {
        switch (this.navMenuBtns[key].id) {
          case "nav-menu-prj-btn":
            //toggle projects pop-up
            this.recalculatePosition(this.navMenuPrjPopup);
            this.navMenuPrjPopup.classList.toggle("popup-closed");
            break;
          case "nav-menu-abt-btn":
            //toggle about pop-up
            this.recalculatePosition(this.navMenuAboutPopup);
            this.navMenuAboutPopup.classList.toggle("popup-closed");
            this.recalculatePosition(this.navMenuImgPopup);
            this.navMenuImgPopup.classList.toggle("popup-closed");
            break;
          case "nav-menu-cntct-btn":
            // toggle contact + instagram pop-up
            this.recalculatePosition(this.navMenuContactPopup);
            this.navMenuContactPopup.classList.toggle("popup-closed");
            this.recalculatePosition(this.navMenuIgPopup);
            this.navMenuIgPopup.classList.toggle("popup-closed");
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
            this.navMenuPrjPopup.classList.toggle("popup-closed");
            break;
          case "about-popup-close-btn":
            //close about pop-up
            this.navMenuAboutPopup.classList.toggle("popup-closed");
            break;
          case "img-popup-close-btn":
            // close instagram pop-up
            this.navMenuImgPopup.classList.toggle("popup-closed");
            break;
          case "contact-popup-close-btn":
            // close contact pop-up
            this.navMenuContactPopup.classList.toggle("popup-closed");
            break;
          case "instagram-popup-close-btn":
            // close instagram pop-up
            this.navMenuIgPopup.classList.toggle("popup-closed");
            break;
          default:
            console.log("not a button");
            break;
        }
      });
    });

    //Adds to zindex everytime you click a popup
    this.popupZindex = "4";

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
      this.navMenuContactPopup.mouseDown = false;
      this.navMenuIgPopup.mouseDown = false;
    });

    document.addEventListener("mousemove", (event) => {
      Object.keys(this.websitePopups).forEach((key) => {
        switch (this.websitePopups[key].mouseDown) {
          case true:
            this.elRect = this.websitePopups[key].getBoundingClientRect();

            console.log(this.elRect);
            this.deltaX = this.elRect.width / 2;
            this.deltaY = this.elRect.height * 0.1;

            this.newX = event.clientX - this.deltaX;
            this.newY = event.clientY - this.deltaY;

            this.websitePopups[key].style.left = this.newX + "px";
            this.websitePopups[key].style.top = this.newY + "px";

            //Redraw line with the current Element's X, Y position (should be whenever the div moves, not only on mouse move)
            this.newX = this.newX + this.elRect.width / 2;
            this.newY = this.newY + this.elRect.height / 2;

            this.x = this.newX;
            this.y = this.newY;

            console.log(this.websitePopups[key].id);
            //puts projects pop-up on top
            // this.navMenuPrjPopup.mouseDown = true;
            // this.navMenuPrjPopup.style.zIndex = this.newZindex;
            // this.websitePopups[key].style.cursor = "grabbing";
            break;
          case false:
            console.log("false");

            break;
          // case "website-about-popup":
          //   //puts about pop-up on top
          //   this.navMenuAboutPopup.mouseDown = true;
          //   this.navMenuAboutPopup.style.zIndex = this.newZindex;
          //   break;
          // case "website-img-popup":
          //   //puts about pop-up on top
          //   this.navMenuImgPopup.mouseDown = true;
          //   this.navMenuImgPopup.style.zIndex = this.newZindex;
          //   break;
          // case "website-contact-popup":
          //   //puts about pop-up on top
          //   this.navMenuContactPopup.mouseDown = true;
          //   this.navMenuContactPopup.style.zIndex = this.newZindex;
          //   break;
          // case "website-instagram-popup":
          //   //puts about pop-up on top
          //   this.navMenuIgPopup.mouseDown = true;
          //   this.navMenuIgPopup.style.zIndex = this.newZindex;
          //   break;
          default:
            console.log("not a popup");
            break;
        }
      });
    });
  }

  // == Recalculate position within viewport everytime popup opens
  recalculatePosition(popup) {
    this.width = window.innerWidth * 0.6;
    this.height = window.innerHeight * 0.6;

    this.xpos = Math.floor(Math.random() * this.width);
    this.ypos = Math.floor(Math.random() * this.height);

    console.log(this);
    popup.style.left = `${this.xpos}px`;
    popup.style.top = `${this.ypos}px`;
  }
}
