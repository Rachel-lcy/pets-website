import React from 'react'
import Claw from "/public/assets/heroimage/claw.png"
import HoldPet from "/public/assets/products/holdpet.png"
import Image from 'next/image'
import Dog from "/public/assets/heroimage/dog.png"
import InstagramSection from '../component/InstagramSection'
import AboutUs from '../component/About'
import Footer from '../component/Footer'

const StorePage = () => {
  return(
  <div>
    <div className='flex justify-center items-center  w-screen mt-10'>
      <section className="relative bg-purple-100 flex flex-col md:flex-row items-center justify-between px-10 py-20 mt-4 min-w-full h-full ">
        <Image
          src={HoldPet}
          alt="HoldPet"
          width={500}
          height={430}
          className="mt-6 md:mt-0"
        />
        <div className="max-w-lg ml-20">
          <span className="px-4 py-1 bg-gray-300 text-gray-700 text-lg rounded-full">
            Welcome
          </span>
          <h2 className="text-7xl font-bold text-[#3F3B57] mt-4 leading-tight">Shop in Our</h2>
          <h1 className="text-8xl font-bold text-[#3F3B57] mt-4 leading-tight">
            Pets Store
          </h1>
          <p className="text-xl text-gray-700 mt-4">
            We love pets like you do 😊.
          </p>
          <p className="text-lg text-gray-700 mt-4">
            A modern and fresh approach to pet care.
          </p>
          <button className="mt-6 bg-purple-300 text-gray px-6 py-3 rounded-full text-lg flex items-center gap-2 font-bold cursor-pointer">
            Go Shopping <span>
              <Image
                src={Dog}
                alt="Dog"
                width={30}
                height={30}
                className="mt-6 md:mt-0"
              />
            </span>
          </button>
        </div>
        <Image
          src={Claw}
          alt="Dog"
          width={100}
          height={100}
          className="mt-6 md:mt-0"
        />
        <Image
          src={Claw}
          alt="Dog"
          width={100}
          height={100}
          className="mt-6 md:mt-0"
        />
      </section>
      
    </div>

    <div className="leading-loose mt-10 ">
      <h2 className="text-4xl font-bold ml-6">Latest Products</h2>
      <div className='border-b border-gray-300 my-4'></div>
    </div>

  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 mt-10 px-10">
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
      <div key={index} className="bg-white shadow-lg p-6 rounded-lg max-w-prose w-4/5 ">
        <Image src={item.image} alt={item.title} width={400} height={500} />
        <h3 className="text-xl font-semibold mt-4">{item.title}</h3>
        <p className="text-gray-600">Pet Place Webflow Template</p>Pet
        <p className="text-lg font-bold mt-2">
          {item.price} <span className="line-through text-gray-500">{item.oldPrice}</span>
        </p>
      </div>
    ))}
  </div>
  <InstagramSection />
  <Footer />
  </div>

      
  )
}

export default StorePage