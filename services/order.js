import { getProductbyId } from "./menu.js";

export async function addToCart(id) {
  const product = await getProductbyId(id);
  const result = app.store.cart.filter(
    (productInCart) => productInCart.id == id,
  );

  if (result.length === 1) {
    const updatedCart = app.store.cart.map((productInCart) => {
      if (productInCart.product.id == id) {
        return { ...productInCart, quantity: productInCart.quantity + 1 };
      }
      return productInCart;
    });
    app.store.cart = updatedCart;
  } else {
    app.store.cart = [...app.store.cart, { product, quantity: 1 }];
  }
}

export function removeFromCart(id) {
  app.store.cart = app.store.cart.filter(
    (productInCart) => productInCart.product.id !== id,
  );
}
