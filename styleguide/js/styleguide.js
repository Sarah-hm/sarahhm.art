window.onload = () => {
  let minScrollbarPos = (window.innerHeight / 10) * 9;
  let maxScrollbarPos = window.innerHeight;
  let fullDOMHeight = document.body.scrollHeight;

  let scrollbar = document.getElementById("scrollbar");
  scrollbar.style.bottom = `${minScrollbarPos}px`;

  window.addEventListener("resize", () => {
    minScrollbarPos = (window.innerHeight / 10) * 9;
    maxScrollbarPos = window.innerHeight;
    fullDOMHeight = document.body.scrollHeight;
    scrollbar.style.bottom = `${minScrollbarPos}px`;
  });

  window.addEventListener("scroll", (event) => {
    let currentScrollHeight = this.scrollY;
    if (currentScrollHeight >= minScrollbarPos) {
      console.log(currentScrollHeight, minScrollbarPos);
      updateScrollbar(
        currentScrollHeight,
        fullDOMHeight,
        minScrollbarPos,
        maxScrollbarPos
      );
    }
  });

  function updateScrollbar(currentScrollHeight) {
    let delta = 1 - currentScrollHeight / fullDOMHeight;
    let newScrollbarBottomPos = delta * maxScrollbarPos;
    scrollbar.style.bottom = `${newScrollbarBottomPos}px`;
  }
};
