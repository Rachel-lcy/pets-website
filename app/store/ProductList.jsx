"use client";
import ProductCard from "./ProductCard";

export default  function ProductList({ products }) {
  console.log(products)
  if (!Array.isArray(products)) {
    return <div className="text-red-500 px-10">⚠️ Products is not an array.</div>;
  }
  const handleAddToCart = (product) => {
    console.log('Added to cart:', product.fields.title);
    // Optionally: store in localStorage or context
  };



  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-10 mt-10">
      {products.map(product => (
        <ProductCard
          key={product.sys.id}
          product={product}
          onAddToCart={handleAddToCart}
        />
      ))}
    </div>
  );
}
