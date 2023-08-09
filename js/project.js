class Project {
  constructor(doc, title, subtitle, year) {
    this.title = title;
    this.subtitle = subtitle;
    this.year = year;
    // this.media[("one", "two", "three")];

    this.doc = doc;

    this.printTitle();
    this.printSubtitle();
    this.printYear();
  }

  printTitle() {
    this.para = document.createElement("p");
    this.para.classList.add("prj-title");
    this.doc.appendChild(this.para);

    this.doc.querySelector(".prj-title").innerHTML = this.title;
  }

  printSubtitle() {
    this.para = document.createElement("p");
    this.para.classList.add("prj-subtitle");
    this.doc.appendChild(this.para);
    this.doc.querySelector(".prj-subtitle").innerHTML = this.subtitle;
  }

  printYear() {
    this.para = document.createElement("p");
    this.para.classList.add("prj-year");
    this.doc.appendChild(this.para);
    this.doc.querySelector(".prj-year").innerHTML = `${this.year}`;
  }
}
