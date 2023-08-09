class Project {
  constructor(title, subtitle, year) {
    this.title = title;
    this.subtitle = subtitle;
    this.year = year;
    // this.media[("one", "two", "three")];

    this.htmlBody = document.body;
  }

  setTitle() {
    const para = document.createElement("p");
    const node = document.createTextNode(title);
    para.appendChild(node);
    this.htmlBody.appendChild(para);
  }
}
