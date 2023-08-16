class Dump {
  handleMouseDown() {
    let self = this;
    this.div.addEventListener("mousedown", (event) => {
      console.log(event.clientX);
      self.mouseDown = true;

      let mouseX = event.clientX;
      let mouseY = event.clientY;

      // let movingElement = self.div;
    });
  }

  handleMouseUp() {
    let self = this;
    document.addEventListener("mouseup", () => {
      self.mouseDown = false;
    });
  }

  handleMouseMove() {
    let self = this;
    document.addEventListener("mousemove", (event) => {
      if (self.mouseDown) {
        let elRect = self.div.getBoundingClientRect();

        const deltaX = elRect.width / 2;
        const deltaY = elRect.height / 2;

        let newX = event.clientX - deltaX;
        let newY = event.clientY - deltaY;

        self.div.style.left = newX + "px";
        self.div.style.top = newY + "px";

        //Redraw line with the current Element's X, Y position (should be whenever the div moves, not only on mouse move)
        newX = newX + elRect.width / 2;
        newY = newY + elRect.height / 2;

        self.x = newX;
        self.y = newY;

        console.log(self.x);
      }
    });
  }
}
