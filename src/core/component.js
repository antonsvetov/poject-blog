export default class Component {
  constructor(id) {
    this.element = document.getElementById(id);
  }

  show() {
    this.element.classList.remove("hide");
  }

  hide() {
    this.element.classList.add("hide");
  }
}
