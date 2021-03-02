import Component from "../core/component";

export default class Header extends Component {
  constructor(id, button) {
    super(id);
    this.button = document.querySelector(button);
    this.init();
  }

  init() {
    if (localStorage.getItem("visited")) {
      this.hide();
    }

    this.button.addEventListener("click", buttonHendler.bind(this));
  }
}

function buttonHendler() {
  localStorage.setItem("visited", "true");
  this.hide();
}
