import { loadMenuData } from "./services/menu.js";
import Router from "./services/router.js";
import Store from "./services/store.js";
import { MenuPage } from "./components/MenuPage.js";
import { OrderPage } from "./components/OrderPage.js";
import { DetailsPage } from "./components/DetailsPage.js";

window.app = {};
app.store = Store;
app.router = Router;

window.addEventListener("DOMContentLoaded", async () => {
  await loadMenuData();
  app.router.init();
});
