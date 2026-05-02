import Api from "./api.js";

export async function loadMenuData() {
  app.store.menu = await Api.fetchMenu();
}

export async function getProductbyId(id) {
  if (!app.store.menu) {
    await loadMenuData();
  }
  for (let c of app.store.menu) {
    for (let p of c.products) {
      if (p.id === Number(id)) {
        return p;
      }
    }
  }

  return null;
}
