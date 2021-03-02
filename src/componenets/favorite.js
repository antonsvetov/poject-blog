import Component from "../core/component";
import { requestsApi } from "../services/requestApi";
import TemplatesPosts from "../core/templatesPost";

export default class Favorite extends Component {
  constructor(id, post) {
    super(id);
    this.init();
    this.post = post;
  }

  init() {
    this.node = document.querySelector('.tab[data-name="favorite"]');
    this.node.addEventListener("click", favoriteClickHandler.bind(this));
  }
}

async function favoriteClickHandler() {
  const arrFavorite = JSON.parse(localStorage.getItem("favorite"));
  if (!arrFavorite) return;
  let data = this.post.cash;

  if (!data) {
    const response = await requestsApi.getRequest();
    data = Object.entries(response);
  }
  data = data.filter(([id]) => {
    let result = false;
    arrFavorite.forEach((casheId) => {
      if (id === casheId) result = true;
    });
    return result;
  });
  const posts = TemplatesPosts.createFavoritePost(data);
  this.element.innerHTML = posts.join();

  this.element.addEventListener("click", clickOpenFavoriteHandler);
}

function clickOpenFavoriteHandler(event) {
  if (event.target.matches(".panel-title")) {
    const el = event.target.parentNode.parentNode;
    const elem = el.querySelector(`.panel-wrapper`);
    elem.classList.toggle("hide");
  }
}
