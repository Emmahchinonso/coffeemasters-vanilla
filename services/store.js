const Store = {
  menu: null,
  cart: [],
};

const proxiedStore = new Proxy(Store, {
  set(target, prop, value) {
    target[prop] = value;
    if (prop === "menu") {
      window.dispatchEvent(new Event("app:menuDataChanged"));
    }
    if (prop === "cart") {
      window.dispatchEvent(new Event("app:cartDataChanged"));
    }
    return true;
  },
});

export default proxiedStore;
