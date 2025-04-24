import { getProducts } from '@/lib/getProducts';
import StoreHero from './StoreHero';
import ProductList from './ProductList';
import InstagramSection from '@/components/InstagramSection';
import Footer from '@/components/Footer';

export default async function StorePage() {
  const products = await getProducts();

  return (
    <div>
      <StoreHero />
      <ProductList products={products} />
      <div className="flex items-center justify-center mt-10">
        <button className="bg-purple-500 text-white px-6 py-3 rounded-full text-lg font-bold">
          Explore More Products
        </button>
      </div>
      <InstagramSection />
      <Footer />
    </div>
  );
}