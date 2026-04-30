const Api = {
  url: "./data/menu.json",
  async fetchMenu() {
    const result = await fetch(this.url);
    return await result.json();
  },
};

export default Api;
