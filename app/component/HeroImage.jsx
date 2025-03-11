import React from 'react'
import HeroImage from '/public/assets/heroimage/artem-beliaikin-c6jp6Wmsjrk-unsplash.jpg'
import Image from 'next/image'

const HeroImagePage = () => {
  return (
    <div className='flex justify-center items-center w-screen'>
      <Image
        src={HeroImage}
        alt='Hero Image'
        // width={1180}
        // height={880}
        // quality={80}
      />
    </div>
  )
}

export default HeroImagePage
