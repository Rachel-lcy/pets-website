import Image from 'next/image';
import Link from 'next/link';
import { useCart } from '../context/CartContext';


export default function ProductCard({ product }) {
  const { title, slug, thumbnail, oldPrice, currency, newPrice } = product.fields;
  const { addToCart } = useCart();

  const handleAddToCart = () => {
    const cartItem = {
      id: product.sys.id,  // ← 确保唯一，适合移除/清空
      name: title,
      price: newPrice,
      image: 'https:' + thumbnail.fields.file.url,
    };
    addToCart(cartItem);
  };

  return (
    <div className="bg-white shadow-lg p-6 rounded-lg">
      <a href={`/store/${slug}`}>
        <Image
          src={'https:' + thumbnail.fields.file.url}
          alt={title}
          width={thumbnail.fields.file.details.image.width}
          height={thumbnail.fields.file.details.image.height}
        />
      </a>

      <h3 className="text-xl font-semibold mt-4">{title}</h3>
      <div className="text-lg font-bold mt-2 flex items-center gap-2 justify-between">
        <h4 className="text-red-600">${newPrice}</h4>
        {oldPrice && (
          <h4 className="line-through text-gray-500">${oldPrice}</h4>
        )}
      </div>

      <div className="flex justify-between">
        <button
          onClick={handleAddToCart}
          className="mt-4 bg-purple-300 text-white px-2 py-2 rounded hover:bg-purple-600 w-5/12 cursor-pointer"
        >
          Add to Cart
        </button>
        <Link
          href={`/store/${slug}`}
          className="mt-4 bg-purple-300 text-white px-2 py-2 rounded hover:bg-purple-600 w-5/12 cursor-pointer text-center"
        >
          Details
        </Link>
      </div>
    </div>
  );
}