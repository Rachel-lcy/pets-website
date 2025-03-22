import Image from "next/image"


export default function Services(){
  return(
    <div className="w-full px-6 py-10">
      <div className="grid leading-loose text-center">
        <small className="text-gray-400 text-lg text-center">Our services</small>
        <h2 className="text-4xl font-bold text-center mb-6  text-gray-900">What we can do for you</h2>
      </div>

      <div className="grid box-border w-full">
        <div className="flex justify-center items-center">
          <div className="flex-row justify-start p-4">
            <Image
              src="/assets/services/3.jpg"
              alt="Service 1"
              width={580}
              height={400}
              className="rounded drop-shadow-sm"
            />
          </div>
          <div className="grid ml-9">
          <Image
                src="/assets/services/icon-1.png"
                alt="Service 1"
                width={70}
                height={70}
                className="rounded drop-shadow-sm"
              />
            <div>
              <h3 className="text-3xl font-semibold tracking-wide leading-loose ">
                Let us help you with your pet health!
              </h3>
            </div>
          <div>
            <p className="text-gray-400 mt-2 tracking-wide leading-loose ">
                Expert care for a happy, healthy pet! <br />Our dedicated team ensures your furry friend gets the best treatment possible.
              </p>
            </div>
          </div>
        </div>

        <div className="flex justify-center items-center ">
          <div className="grid">
          <Image
                src="/assets/services/icon-2.png"
                alt="Service 1"
                width={70}
                height={70}
                className="rounded drop-shadow-sm"
              />
            <div>
              <h3 className="text-3xl font-semibold tracking-wide leading-loose ">
              Caring personnel will take  care of your pet!
              </h3>
            </div>
            <div>
              <p className="text-gray-400 mt-2 tracking-wide leading-loose">
                Loving professionals, dedicated to your pet's well-being!<br />
                We treat every pet like family, providing gentle and compassionate care.
              </p>
            </div>
          </div>
          <div className="flex-row justify-start p-4">
            <Image
              src="/assets/services/2.jpg"
              alt="Service 1"
              width={580}
              height={400}
              className="rounded drop-shadow-sm"
            />
          </div>
        </div>

        <div className="flex justify-center items-center mb-15">
          <div className="flex-row justify-start p-4">
            <Image
              src="/assets/services/1.jpg"
              alt="Service 1"
              width={580}
              height={400}
              className="rounded drop-shadow-sm"
            />
          </div>
          <div className="ml-9">
          <Image
                src="/assets/services/icon-3.png"
                alt="Service 1"
                width={70}
                height={70}
                className="rounded drop-shadow-sm"
              />
          <div>
            <h3 className="text-3xl font-semibold tracking-wide leading-loose">
            Let us groom your precious and loved pet!
            </h3>
          </div>
          <div>
          <p className="text-gray-400 mt-2 tracking-wide leading-loose">
            Pamper your pet with our top-notch grooming services! <br />From stylish cuts to refreshing baths, we make every visit a tail-wagging experience.
            </p>
          </div>
          </div>
        </div>

      </div>

    </div>
)}
