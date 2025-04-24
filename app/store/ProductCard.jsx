import Image from 'next/image';


export default function ProductCard({ product}) {
  const {title, slug, thumbnail, oldPrice } = product.fields

  return (
    <div className="bg-white shadow-lg p-6 rounded-lg">
      <Image src={imageUrl} alt={product.title} width={300} height={300} />
      <h3 className="text-xl font-semibold mt-4">{product.title}</h3>
      <p className="text-lg font-bold mt-2">
        {product.price}
        {product.oldPrice && (
          <span className="line-through text-gray-500 ml-2">{product.oldPrice}</span>
        )}
      </p>

      

      <button
        // onClick={onAddToCart}
        className="mt-4 bg-purple-300 text-white px-2 py-2 rounded hover:bg-purple-600 w-full cursor-pointer"
      >
        Add to Cart
      </button>
    </div>
  );
}
