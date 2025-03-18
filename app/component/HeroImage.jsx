import React from 'react'
import Claw from "/public/assets/heroimage/claw.png"
import Dog from "/public/assets/heroimage/dog.png"
import Image from 'next/image'

const HeroImagePage = () => {
  return (
    <div className='flex justify-center items-center  w-screen'>
      <section className="relative bg-purple-100 flex flex-col md:flex-row items-center justify-between px-10 py-20 mt-4 min-w-full">
              <div className="max-w-lg ml-20">
                <span className="px-4 py-1 bg-gray-300 text-gray-700 text-lg rounded-full">
                  Welcome
                </span>
                <h1 className="text-9xl font-bold text-[#3F3B57] mt-4 leading-tight">
                  Peak Pets
                </h1>
                <p className="text-xl text-gray-700 mt-4">
                  We love pets like you do 😊.
                </p>
                <p className="text-lg text-gray-700 mt-4">
                  A modern and fresh approach to pet care.
                </p>
                <button className="mt-6 bg-purple-300 text-gray px-6 py-3 rounded-full text-lg flex items-center gap-2 font-bold">
                  Star Here! <span>→</span>
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
                src={Dog}
                alt="Dog"
                width={430}
                height={430}
                className="mt-6 md:mt-0"
              />
              <Image
                src={Claw}
                alt="Dog"
                width={100}
                height={100}
                className="mt-6 md:mt-0"
              />
              <Image
                src={Dog}
                alt="Dog"
                width={430}
                height={430}
                className="mt-6 md:mt-0"
              />
            </section>
    </div>
  )
}

export default HeroImagePage
