import { createClient } from 'contentful';
import Image from 'next/image';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import AddToCartButton from '../../../components/AddToCartButton';

// Initialize Contentful client
const client = createClient({
  space: process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID,
  accessToken: process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN,
});

// ✅ Generate static paths for all product slugs
export async function generateStaticParams() {
  const res = await client.getEntries({ content_type: 'products' });

  return res.items.map(item => ({
    slug: item.fields.slug,
  }));
}

// Product detail page (dynamically fetched using slug)
export default async function ProductDetails({ params }) {
  const res = await client.getEntries({
    content_type: 'products',
    'fields.slug': params.slug,
  });

  const product = res.items[0];

  if (!product) {
    return <div className="p-8 text-center text-red-600">Product not found.</div>;
  }

  const { thumbnail, title, description, newPrice, oldPrice } = product.fields;

  return (
    <div className="p-8 max-w-3xl mx-auto">
      <Image
        src={'https:' + thumbnail.fields.file.url}
        alt={title}
        width={thumbnail.fields.file.details.image.width}
        height={thumbnail.fields.file.details.image.height}
        className="rounded shadow mb-6"
      />

      <h1 className="text-3xl font-bold mb-2">{title}</h1>

      <div className="text-lg font-semibold text-red-600">
        ${newPrice}
        {oldPrice && (
          <span className="line-through text-gray-500 ml-4">${oldPrice}</span>
        )}
      </div>

      <div className="mt-6 prose prose-lg leading-loose">
        {documentToReactComponents(description)}
      </div>

       <AddToCartButton product={product} />
    </div>
  );
}
