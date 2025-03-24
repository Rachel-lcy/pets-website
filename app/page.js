
"use client";
import Image from "next/image";
import InstagramSection from "../components/InstagramSection";
import Testimonials from "../components/Testimonials";
import Footer from "../components/Footer";
import HeroImagePage from "../components/HeroImage";
import Services from "../components/Services";
import Benefits from "../components/Benefits.jsx";
import IntroSection from "../components/IntroSection.jsx";


export default function Home() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <HeroImagePage />

      {/* Intro Section */}
      <IntroSection />


      {/*  About Us Section */}
      <Services />


      {/* Featured Products */}
      <section className="bg-[#FDF2D9] py-16 text-center my-10 ">
        <div className="leading-loose">
          <small className="text-gray-400 text-lg">Products</small>
          <h2 className="text-4xl font-bold">Featured pet products</h2>
        </div>

        <div className="flex justify-center gap-10 mt-10">
          {[
            {
              title: "Dog Trash Bag",
              price: "$19.00 CAD",
              oldPrice: "$25.9 CAD",
              discount: "-30%",
              image: "/assets/products/bag.jpg",
            },
            {
              title: "Pet Accessories",
              price: "$19.00 CAD",
              oldPrice: "$14.9 CAD",
              image: "/assets/products/Pet Accessories.jpg",
            },
            {
              title: "Dog Food",
              price: "$22.00 CAD",
              oldPrice: "$14.9 CAD",
              image: "/assets/products/pet food.jpg",
            },
            {
              title: "Dog Can",
              price: "$22.00 CAD",
              oldPrice: "$14.9 CAD",
              image: "/assets/products/dog can.jpg",
            },
          ].map((item, index) => (
            <div key={index} className="bg-white shadow-lg p-6 rounded-lg max-w-prose w-10/12 cursor-pointer">
              <Image src={item.image} alt={item.title} width={400} height={400} />
              <h3 className="text-xl font-semibold mt-4">{item.title}</h3>
              <p className="text-lg font-bold mt-2">
                {item.price} <span className="line-through text-gray-500">{item.oldPrice}</span>
              </p>
            </div>
          ))}
        </div>
      </section>

      <Benefits />
      <Testimonials />
      <InstagramSection />
      <Footer />

    </div>
  );
}

