import { loadMenuData } from "./services/menu.js";
import Router from "./services/router.js";
import Store from "./services/store.js";
import "./components/MenuPage.js";
import "./components/OrderPage.js";
import "./components/DetailsPage.js";
import "./components/ProductItem.js";

window.app = {};
app.store = Store;
app.router = Router;

window.addEventListener("DOMContentLoaded", async () => {
  loadMenuData();
  app.router.init();
});
