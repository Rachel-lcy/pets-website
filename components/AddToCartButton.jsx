"use client";

import { useCart } from "../app/context/CartContext";

export default function AddToCartButton({ product }) {
  const { addToCart } = useCart();

  const handleClick = () => {
    const cartItem = {
      id: product.sys.id,
      name: product.fields.title,
      price: product.fields.newPrice,
      image: 'https:' + product.fields.thumbnail.fields.file.url,
    };
    addToCart(cartItem);
  };

  return (
    <button
      onClick={handleClick}
      className="mt-4 bg-purple-300 text-white px-4 py-2 rounded hover:bg-purple-600 w-full"
    >
      Add to Cart
    </button>
  );
}