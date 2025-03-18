import Image from "next/image"
import AboutUs from "./About"
import InstagramSection from "./InstagramSection"


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
                width={80}
                height={80}
                className="rounded drop-shadow-sm"
              />
            <div>
              <h3 className="text-3xl font-semibold tracking-wide leading-loose">
                Let us help you with your pet health!
              </h3>
            </div>
          <div>
            <p className="text-gray-400 mt-2 tracking-wide leading-loose">
                Expert care for a happy, healthy pet! <br />Our dedicated team ensures your furry friend gets the best treatment possible.
              </p>
            </div>
          </div>
        </div>

        <div className="flex justify-center items-center">
          <div className="grid">
          <Image
                src="/assets/services/icon-2.png"
                alt="Service 1"
                width={80}
                height={80}
                className="rounded drop-shadow-sm"
              />
            <div>
              <h3 className="text-3xl font-semibold tracking-wide leading-loose">
              Caring personnel will take <br /> care of your pet!
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
                width={80}
                height={80}
                className="rounded drop-shadow-sm"
              />
          <div>
            <h3 className="text-3xl font-semibold tracking-wide leading-loose">
            Let us groom your <br />precious and loved pet!
            </h3>
          </div>
          <div>
          <p className="text-gray-400 mt-2 tracking-wide leading-loose">
            Pamper your pet with our top-notch grooming services! <br />From stylish cuts to refreshing baths, we make every visit a tail-wagging experience.
            </p>
          </div>
          </div>
        </div>

        {/* <section className="py-20 bg-indigo-300 text-white text-center px-4 rounded-full">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold mb-6">Best Deals for Your Furry Friends! </h2>
          <p className="text-xl mb-8">Premium pet products at unbeatable prices.</p>
          <button className="bg-white text-indigo-600 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors duration-300">
           Shop In Store
          </button>
        </div>
      </section> */}
      {/* <AboutUs /> */}
      </div>
    </div>
)}
