"use client"
import React from 'react'
import Claw from "/public/assets/heroimage/claw.png"
import HoldPet from "/public/assets/products/holdpet.png"
import Image from 'next/image'
import Dog from "/public/assets/heroimage/dog.png"
import InstagramSection from '../../components/InstagramSection'
import Footer from '../../components/Footer'




export default async function StorePage() {

  return(
  <div>
    <div className='flex justify-center items-center  w-screen mt-10'>
      <section className="relative bg-purple-100 grid  grid-cols-2  px-10 py-10 mt-4 w-full">
        <div className="md:w-1/2 flex justify-center">
          <Image
            src={HoldPet}
            alt="HoldPet"
            width={400}
            height={400}
            className= "max-w-full h-auto right-10"
          />
          <Image
            src={Claw}
            alt="Paw print"
            width={120}
            height={120}
            className="absolute top-0 left-10 opacity-30"
          />
          <Image
            src={Claw}
            alt="Paw print"
            width={120}
            height={120}
            className="absolute bottom-0 right-10 opacity-30"
          />
          <Image
            src={Claw}
            alt="Paw print"
            width={120}
            height={120}
            className="absolute bottom-0 left-100 opacity-30"
          />
        </div>
        <div className="md:w-1/2 text-center md:text-left px-6">
          <span className="px-4 py-1 bg-gray-300 text-gray-700 text-lg rounded-full">
            Welcome
          </span>
          <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold text-[#3F3B57] mt-4 leading-tight whitespace-nowrap">Shop in Our</h2>
          <div className='w-full'>
            <h1 className="text-5xl md:text-6xl lg:text-8xl font-bold text-[#3F3B57] mt-4 leading-tight whitespace-nowrap ">
              Pets Store
            </h1>
            <p className="text-2xl text-gray-600 mt-4">
              We love pets like you do 😊.
            </p>
            <p className="text-lg text-gray-500 mt-4 whitespace-nowrap">
              A modern and fresh approach to pet care.
            </p>
          </div>
          <button className="mt-6 bg-purple-300 text-gray px-6 py-3 rounded-full text-lg flex items-center gap-2 font-bold cursor-pointer text-white">
            Go Shopping <span>
              <Image
                src={Dog}
                alt="Dog"
                width={30}
                height={30}
              />
            </span>
          </button>
        </div>
      </section>

    </div>

    <div className="leading-loose mt-10 ">
      <h2 className="text-4xl font-bold ml-6">Latest Products</h2>
      <div className='border-b border-gray-300 my-4'></div>
    </div>

    {/* <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-10 px-10">
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
          oldPrice: "$14.9",
          image: "/assets/products/Pet Accessories.jpg",
        },
        {
          title: "Dog Food",
          price: "$22.00 USD",
          oldPrice: "$149",
          image: "/assets/products/pet food.jpg",
        },
        {
          title: "Dog Can",
          price: "$22.00 USD",
          oldPrice: "$149",
          image: "/assets/products/dog can.jpg",
        },
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
          oldPrice: "$14.9",
          image: "/assets/products/Pet Accessories.jpg",
        },
        {
          title: "Dog Food",
          price: "$22.00 USD",
          oldPrice: "$149",
          image: "/assets/products/pet food.jpg",
        },
        {
          title: "Dog Can",
          price: "$22.00 USD",
          oldPrice: "$149",
          image: "/assets/products/dog can.jpg",
        },
      ].map((item, index) => (
        <div key={index} className="bg-white shadow-lg p-6 rounded-lg max-w-prose  ">
          <Image src={item.image} alt={item.title} width={300} height={300} />
          <h3 className="text-xl font-semibold mt-4">{item.title}</h3>
          <p className="text-lg font-bold mt-2">
            {item.price} <span className="line-through text-gray-500">{item.oldPrice}</span>
          </p>
          <button
            onClick={() => addToCart(item)}
            className="mt-4 bg-purple-300 text-white px-2 py-2 rounded hover:bg-purple-600 w-full cursor-pointer"
          >
            Add to Cart
          </button>
        </div>
      ))}
    </div> */}
   
    {/* <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {products.map((product) => {
        <ProductCard key={product.fields.slug} product={product.fields}/>
      })}
      <button
        onClick={() => addToCart(item)}
        className="mt-4 bg-purple-300 text-white px-2 py-2 rounded hover:bg-purple-600 w-full cursor-pointer"
      >
      Add to Cart
    </button>
    </div> */}
   

    <div className='flex items-center justify-center mt-10'>
      <button className=" bg-purple-500 text-gray px-6 py-3 rounded-full text-lg flex items-center gap-2 font-bold cursor-pointer text-white">
        Explore More Products
      </button>
    </div>
  <InstagramSection />
  <Footer />
  </div>

  )
}
