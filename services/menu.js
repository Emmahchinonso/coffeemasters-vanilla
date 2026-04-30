import Api from "./api.js";

export async function loadMenuData() {
  app.store.menu = await Api.fetchMenu();
}
