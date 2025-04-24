"use client";
import Image from 'next/image';
import Claw from "/public/assets/heroimage/claw.png";
import HoldPet from "/public/assets/products/holdpet.png";
import Dog from "/public/assets/heroimage/dog.png";

export default function StoreHero() {
  return (
    <div className='flex justify-center items-center w-screen mt-10'>
      <section className="relative bg-purple-100 grid grid-cols-2 px-10 py-10 mt-4 w-full">
        <div className="md:w-1/2 flex justify-center">
          <Image src={HoldPet} alt="HoldPet" width={400} height={400} className="max-w-full h-auto right-10" />
          <Image src={Claw} alt="Paw print" width={120} height={120} className="absolute top-0 left-10 opacity-30" />
          <Image src={Claw} alt="Paw print" width={120} height={120} className="absolute bottom-0 right-10 opacity-30" />
          <Image src={Claw} alt="Paw print" width={120} height={120} className="absolute bottom-0 left-100 opacity-30" />
        </div>
        <div className="md:w-1/2 text-center md:text-left px-6">
          <span className="px-4 py-1 bg-gray-300 text-gray-700 text-lg rounded-full">Welcome</span>
          <h2 className="text-4xl font-bold text-[#3F3B57] mt-4">Shop in Our</h2>
          <h1 className="text-6xl font-bold text-[#3F3B57] mt-4">Pets Store</h1>
          <p className="text-xl text-gray-600 mt-4">We love pets like you do 😊.</p>
          <p className="text-lg text-gray-500 mt-4">A modern and fresh approach to pet care.</p>
          <button className="mt-6 bg-purple-300 text-white px-6 py-3 rounded-full text-lg font-bold flex items-center gap-2">
            Go Shopping
            <Image src={Dog} alt="Dog" width={30} height={30} />
          </button>
        </div>
      </section>
    </div>
  );
}