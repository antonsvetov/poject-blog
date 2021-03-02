import Component from "../core/component";
import { requestsApi } from "../services/requestApi";
import CasheControl from "../services/casheControl";
import Loader from "./loader";
import TemplatesPosts from "../core/templatesPost";

const loader = new Loader("loader");

export default class Post extends Component {
  constructor(id) {
    super(id);
    this.node = document.querySelector('.tab[data-name="posts"]');
    this.init();
    this.cashe = null;
  }

  init() {
    this.node.addEventListener("click", postsHendler.bind(this));
    this.element.addEventListener("click", buttonHendler.bind(this));
  }
}

async function postsHendler() {
  loader.show();
  const data = await requestsApi.getRequest();
  const posts = addPost(data, this.cashe);
  this.cashe = Object.entries(data);
  loader.hide();
  this.element.insertAdjacentHTML("beforeend", posts.join());
  checkLocalStorage();
}

function addPost(value, casheData) {
  let arrData = Object.entries(value);
  if (casheData) {
    arrData = CasheControl.casheControlPosts(arrData, casheData);
  }
  return TemplatesPosts.createPost(arrData);
}

function buttonHendler(event) {
  if (!event.target.matches("button")) return;
  const button = event.target;
  const { id } = button.dataset;
  let arrFavorite = JSON.parse(localStorage.getItem("favorite")) || [];
  if (!arrFavorite.includes(id)) {
    arrFavorite.push(id);
    button.textContent = "Удалить";
  } else {
    arrFavorite = arrFavorite.filter((item) => item !== id);
    button.textContent = "Сохранить";
  }
  localStorage.setItem("favorite", JSON.stringify(arrFavorite));
}

function checkLocalStorage() {
  if (!localStorage.getItem("favorite")) return;
  const arrFavorite = JSON.parse(localStorage.getItem("favorite"));
  arrFavorite.forEach((id) => {
    const element = document.querySelector(`[data-id = "${id}"]`);
    element.textContent = "Удалить";
  });
}
