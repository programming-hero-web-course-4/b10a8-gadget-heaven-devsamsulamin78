export const getCart = () => {
  const cart = localStorage.getItem(`cart`);
  return JSON.parse(cart || "[]");
};

export const addToCart = (product) => {
  const currentCart = getCart();
  if (currentCart.find((p) => p.product_id === product.product_id)) return;
  const newCart = [...currentCart, product];
  localStorage.setItem(`cart`, JSON.stringify(newCart));
};

export const removeFromCart = (product_id) => {
  const currentCart = getCart();
  const filteredCart = currentCart.filter((p) => p.product_id !== product_id);
  localStorage.setItem(`cart`, JSON.stringify(filteredCart || []));

  window.location.reload();
};
