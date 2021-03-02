import Component from "../core/component";

export default class NavigationTabs extends Component {
  constructor(id, tabNavigation, tabs) {
    super(id);
    this.tabNav = this.element.querySelectorAll(tabNavigation);
    this.tabBlocks = document.querySelectorAll(tabs);
    this.init();
  }

  init() {
    this.element.addEventListener("click", navTabHandler.bind(this));
  }
}

function navTabHandler(event) {
  event.preventDefault();
  if (event.target.matches(".tab")) {
    this.tabNav.forEach((tab) => tab.classList.remove("active"));
    event.target.classList.add("active");

    const id = event.target.dataset.name;
    const activeElement = document.getElementById(id);

    this.tabBlocks.forEach((tab) => tab.classList.add("hide"));
    activeElement.classList.remove("hide");
  }
}
