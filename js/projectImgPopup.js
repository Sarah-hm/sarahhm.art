class ProjectImgPopup {
  constructor(img, title, url, startX, startY) {
    this.img = img;
    this.title = title;
    this.url = url;
    this.doc = document.getElementById("homepage");

    // img width
    this.width = window.innerHeight / 3;

    this.startX = startX;
    this.startY = startY;
    // console.log(this.startX);
    this.createPopup();
  }

  createPopup() {
    if (this.img != "") {
      this.div = document.createElement("div");
      this.div.classList.add("project-img-popup");
      this.div.style.left = `${this.startX}px`;
      this.div.style.top = `${this.startY}px`;
      this.doc.appendChild(this.div);

      this.divHeader = document.createElement("div");
      this.divHeader.classList.add("website-popup-header");
      this.div.appendChild(this.divHeader);

      this.closeBtn = document.createElement("button");
      this.closeBtn.classList.add("project-img-popup-close-btn");
      this.divHeader.appendChild(this.closeBtn);
      this.closeBtn.insertAdjacentText("afterbegin", "x");

      this.popupTitle = document.createElement("h3");
      this.popupTitle.classList.add("website-popup-header-title");
      this.divHeader.appendChild(this.popupTitle);
      this.popupTitle.insertAdjacentText("afterbegin", this.title);

      this.popupBody = document.createElement("div");
      this.popupBody.classList.add("website-project-img-popup-body");
      this.div.appendChild(this.popupBody);

      this.imgLink = document.createElement("a");
      this.imgLink.setAttribute("target", "_blank");
      this.imgLink.setAttribute("href", `${this.url}`);
      this.imgLink.classList.add("project-img-popup-div");
      this.popupBody.appendChild(this.imgLink);
      this.imgLink.innerHTML = `<img src='${this.img}' alt='Image of ${this.title}' "/>`;

      this.addListeners();
    }
  }

  addListeners() {
    // Close popups when clicking on X header of popup

    this.closeBtn.addEventListener("click", () => {
      this.div.classList.toggle("popup-closed");
    });

    //Adds to zindex everytime you click a popup
    this.popupZindex = "4";

    this.div.addEventListener("mousedown", () => {
      this.newZindex = this.popupZindex++;

      this.div.mouseDown = true;
      this.div.style.zIndex = this.newZindex;
    });

    document.addEventListener("mouseup", () => {
      this.div.mouseDown = false;
    });

    document.addEventListener("mousemove", (event) => {
      if (this.div.mouseDown) {
        this.elRect = this.div.getBoundingClientRect();

        // console.log(this.elRect);
        this.deltaX = this.elRect.width / 2;
        this.deltaY = this.elRect.height * 0.05;

        this.newX = event.clientX - this.deltaX;
        this.newY = event.clientY - this.deltaY;

        this.div.style.left = this.newX + "px";
        this.div.style.top = this.newY + "px";

        //Redraw line with the current Element's X, Y position (should be whenever the div moves, not only on mouse move)
        this.newX = this.newX + this.elRect.width / 2;
        this.newY = this.newY + this.elRect.height / 2;

        this.x = this.newX;
        this.y = this.newY;
      }
    });
  }
}
