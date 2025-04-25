import Image from 'next/image';
import Link from 'next/link';


export default function ProductCard({ product}) {
  const {title, slug, thumbnail, oldPrice,currency, newPrice } = product.fields

  return (
    <div className="bg-white shadow-lg p-6 rounded-lg">
      <a href="/ProductDetails">
      <Image
        src={'https:' + thumbnail.fields.file.url}
        alt={title}
        width={thumbnail.fields.file.details.image.width}
        height={thumbnail.fields.file.details.image.height}
      />
      </a>
      
      <h3 className="text-xl font-semibold mt-4">
        {title}
      </h3>
      <div className="text-lg font-bold mt-2 flex items-center gap-2 justify-between">
        <h4 className="text-red-600">${product.fields.newPrice}</h4>
        {product.fields.oldPrice && (
        <h4 className="line-through text-gray-500">${product.fields.oldPrice}</h4>
  )}
</div>

      <button
        // onClick={onAddToCart}
        className="mt-4 bg-purple-300 text-white px-2 py-2 rounded hover:bg-purple-600 w-full cursor-pointer"
      >
        Add to Cart
      </button>
      {/* <Link
        legacyBehavior
        href={'/products/' + slug}
        className="mt-4 bg-purple-300 text-white px-2 py-2 rounded hover:bg-purple-600 w-full cursor-pointer">
        <a>Add on Cart</a>
      </Link> */}
    </div>
  );
}
