const Router = {
  init() {
    document.querySelectorAll("a.navlink").forEach((a) => {
      a.addEventListener("click", (e) => {
        e.preventDefault();
        const url = a.getAttribute("href");
        Router.go(url);
      });
    });

    window.addEventListener("popstate", (event) => {
      Router.go(event.state.path, false); // Don't add to history when navigating backwards
    });
    // Check initial url
    Router.go(location.pathname);
  },
  go(path, addToHistory = true) {
    if (addToHistory) {
      history.pushState({ path }, null, path);
    }

    let pageElement = null;
    switch (path) {
      case "/":
        pageElement = document.createElement("menu-page");
        break;
      case "/order":
        pageElement = document.createElement("order-page");
        break;
      default:
        if (path.startsWith("/product/")) {
          pageElement = document.createElement("details-page");
          const paramId = path.substring(
            location.pathname.lastIndexOf("/") + 1,
          );
          pageElement.dataset.productId = paramId;
        }
    }
    if (pageElement) {
      const mainElement = document.querySelector("main");
      // document.querySelector("main").children[0].remove();
      mainElement.innerHTML = "";
      mainElement.appendChild(pageElement);
      window.scrollX = 0;
      window.scrollY = 0;
      console.log(`Navigating to ${path}`);
    }
  },
};

export default Router;
