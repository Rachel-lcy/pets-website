import { createClient } from 'contentful';
import Image from 'next/image';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';

// 初始化 Contentful 客户端
const client = createClient({
  space: process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID,
  accessToken: process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN,
});

// ✅ 用于生成所有静态路径
export async function generateStaticParams() {
  const res = await client.getEntries({ content_type: 'products' });

  return res.items.map(item => ({
    slug: item.fields.slug,
  }));
}

// ✅ 产品详情页面（由 params.slug 加载具体内容）
export default async function ProductDetails({ params }) {
  const res = await client.getEntries({
    content_type: 'products',
    'fields.slug': params.slug,
  });

  const product = res.items[0];

  if (!product) {
    return <div className="p-8 text-center text-red-600">产品未找到</div>;
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

      <div className="mt-6 prose prose-lg">
        {documentToReactComponents(description)}
      </div>
    </div>
  );
}
