window.onload = () => {
  let sections = document.getElementsByTagName("section");
  let pagination_items = [];

  for (let i = 0; i < sections.length; i++) {
    // create a pagination item
    let pagination_item = document.createElement("div");
    document.getElementsByTagName("nav")[0].appendChild(pagination_item);
    pagination_items.push(pagination_item);

    sections[i].addEventListener("scroll", () => {
      let rect = sections[i].getBoundingClientRect();

      if (rect.top === 0) {
        //Make the pagination dot change color
      }
    });
  }

  for (let i = 0; i < pagination_items.length; i++) {
    pagination_items[i].addEventListener("click", () => {
      sections[i].scrollIntoView({ behavior: "smooth" });
    });
  }
};
