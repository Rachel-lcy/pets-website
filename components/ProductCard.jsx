"use client";
 import { useCart } from "@/app/context/CartContext";

 export default function ProductCard({ product }) {
  const { addToCart } = useCart();

  return (
    <div className="border p-4 rounded">
      <img src={product.thumbnail} alt={product.title} />
      <h2 className="text-xl font-semibold">{product.title}</h2>
      <p>{product.description}</p>
      <p>
        {product.oldPrice} {product.currency}
      </p>
      <button onClick={() => addToCart(product)}>Add to Cart</button>
    </div>
  );
}