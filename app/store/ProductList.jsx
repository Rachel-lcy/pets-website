"use client";
import { useCart } from '@/app/context/CartContext';
import ProductCard from '@/components/ProductCard';

export default function ProductList({ products }) {
  const { addToCart } = useCart();

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-10 mt-10">
      {products.map((product) => (
        <ProductCard
          key={product.fields.slug}
          product={product}
          onAddToCart={() => addToCart(product)}
        />
      ))}
    </div>
  );
}
