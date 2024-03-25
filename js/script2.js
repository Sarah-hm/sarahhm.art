let lastScrollTop = 0;

window.onload = () => {
  var oldScrollY = window.scrollY;

  window.onscroll = function (e) {
    if (oldScrollY < window.scrollY) {
      console.log("down");
    } else {
      console.log("up");
    }
    oldScrollY = window.scrollY;
  };
};
