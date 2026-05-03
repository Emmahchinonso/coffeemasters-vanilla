import { loadMenuData } from "./services/menu.js";
import Router from "./services/router.js";
import Store from "./services/store.js";

// link web components
import "./components/MenuPage.js";
import "./components/OrderPage.js";
import "./components/DetailsPage.js";
import "./components/ProductItem.js";
import "./components/CartItem.js";

window.app = {};
app.store = Store;
app.router = Router;

window.addEventListener("DOMContentLoaded", async () => {
  loadMenuData();
  app.router.init();
});

window.addEventListener("app:cartDataChanged", async () => {
  const badge = document.getElementById("badge");
  const qty = app.store.cart.reduce((acc, item) => acc + item.quantity, 0);
  badge.textContent = qty;
  badge.hidden = qty === 0;
});
