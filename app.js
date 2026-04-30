import { loadMenuData } from "./services/menu.js";
import Store from "./services/store.js";

window.app = {};
app.store = Store;

window.addEventListener("DOMContentLoaded", async () => {
  await loadMenuData();
});
