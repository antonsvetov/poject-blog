import Header from "./componenets/header";
import NavigationTabs from "./componenets/navigationTabs";
import CreateForm from "./componenets/create";
import Post from "./componenets/posts";
import Favorite from "./componenets/favorite";

new Header("header", ".js-header-btn");

new NavigationTabs("navigation", ".tab", ".js-tabs__item");

new CreateForm("create");

const post = new Post("posts");

new Favorite("favorite", post);
