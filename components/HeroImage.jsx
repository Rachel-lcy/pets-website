import React from 'react'
import Claw from "/public/assets/heroimage/claw.png"
import Dog from "/public/assets/heroimage/dog.png"
import Image from 'next/image'

const HeroImagePage = () => {
  return (
    <div className="flex justify-center items-center  w-screen mt-10">
      <section className="relative bg-purple-100 flex flex-col md:flex-row items-center justify-between px-6 lg:py-20 mx-auto w-full">

        <div className="text-center md:text-left max-w-lg ml-14">
          <span className="px-4 py-1 bg-gray-300 text-gray-700 text-lg rounded-full mt-6">
            Welcome
          </span>
          <h1 className="text-7xl md:text-7xl font-bold text-[#3F3B57] mt-4 leading-tight">
            Peak Pets
          </h1>
          <p className="text-lg md:text-xl text-gray-700 mt-6">
            We love pets like you do 😊.
          </p>
          <p className="text-md md:text-lg text-gray-700 mt-4">
            A modern and fresh approach to pet care.
          </p>
          <button className="mt-6 bg-purple-500 hover:bg-purple-700 text-white px-6 py-3 rounded-full text-lg flex items-center gap-2 font-bold transition-all duration-300 shadow-lg">
            Start Here <span>→</span>
          </button>
        </div>


        <div className="relative w-1/2 flex justify-center items-center">
          <Image
            src={Claw}
            alt="Paw print"
            width={120}
            height={120}
            className="absolute top-0 left-10 opacity-30"
          />
          <Image
            src={Dog}
            alt="Dog"
            width={400}
            height={400}
            className="max-w-full h-auto"
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
            className="absolute bottom-0 -left-100 opacity-30"
          />
        </div>
      </section>
    </div>
  )
}

export default HeroImagePage
