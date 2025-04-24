import Image from 'next/image';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';

export default function ProductCard({ product, onAddToCart }) {
  const imageUrl = product.image?.fields?.file?.url
    ? `https:${product.image.fields.file.url}`
    : '/placeholder.jpg';

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

      {product.description && typeof product.description === 'object' ? (
        documentToReactComponents(product.description)
      ) : (
        <p>{product.description}</p>
      )}

      <button
        onClick={onAddToCart}
        className="mt-4 bg-purple-300 text-white px-2 py-2 rounded hover:bg-purple-600 w-full cursor-pointer"
      >
        Add to Cart
      </button>
    </div>
  );
}
