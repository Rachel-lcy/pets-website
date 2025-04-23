"use client";
import { useCart } from '../context/CartContext';
import ProductCard from '@/components/ProductCard';

export default function ProductList({ products }) {
  const { addToCart } = useCart();

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {products.map((product) => (
        <ProductCard key={product.fields.slug} product={product.fields} addToCart={addToCart} />
      ))}
      <button
        onClick={() => addToCart(item)}
        className="mt-4 bg-purple-300 text-white px-2 py-2 rounded hover:bg-purple-600 w-full cursor-pointer"
      >
      Add to Cart
    </button>
    </div>
  );
}