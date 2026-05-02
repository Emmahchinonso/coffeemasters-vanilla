export class MenuPage extends HTMLElement {
  constructor() {
    super();
    this.root = this.attachShadow({ mode: "open" });
    const styles = document.createElement("style");
    this.root.appendChild(styles);

    async function loadCSS() {
      const res = await fetch("./components/MenuPage.css");
      const css = await res.text();
      styles.textContent = css;
    }
    loadCSS();
  }

  // when the component is attached to the DOM
  connectedCallback() {
    const template = document.getElementById("menu-page-template");
    const content = template.content.cloneNode(true);
    this.root.appendChild(content);

    window.addEventListener("app:menuDataChanged", () => {
      this.render();
    });
  }

  render() {
    if (app.store.menu) {
      const menu = this.root.querySelector("#menu");
      menu.innerHTML = "";
      for (let category of app.store.menu) {
        const liCategory = document.createElement("li");
        liCategory.innerHTML = `
            <h3>${category.name}</h3>
            <ul class='category'></ul>
        `;
        menu.appendChild(liCategory);

        category.products.forEach((product) => {
          const item = document.createElement("product-item");
          item.dataset.product = JSON.stringify(product);
          liCategory.querySelector(".category").appendChild(item);
        });
      }
    } else {
      menu.innerHTML = "Loading...";
    }
  }
}

customElements.define("menu-page", MenuPage);
