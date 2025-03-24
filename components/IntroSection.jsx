import Image from "next/image";

export  default function  IntroSection() {
  return(
    <>
      <section className="text-center py-16 mb-10 w-screen">
        <small className="text-gray-400 text-lg">Intro</small>
        <h2 className="text-4xl font-bold text-gray-900">Get to know us more</h2>
        <div className="flex justify-center gap-30 mt-10">
          {[
            { title: "Pet Experts", image: "/assets/icons/bird-house.png" , description: "Trusted experts for your pet’s best care.",  color: "pink-500"},
            { title: "Vet Services", image: "/assets/icons/vet.png", description: "Compassionate vet care for healthier pet.", color: "blue-500" },
            { title: "Contact Us", image: "/assets/icons/contact-us.png", description: " Reach out for expert pet care guidance.", color: "green-500"  },
          ].map((item, index) => (
            <div key={index} className="text-left ">
              <Image src={item.image} alt={item.title} width={100} height={100} />
              <h3 className="text-xl font-semibold mt-4">{item.title}</h3>
              <p className="text-gray-600">{item.description}</p>
              <button
                className={`mt-4 px-6 py-4 rounded-full shadow-md
                text-${item.color} border-2 border-${item.color}
                bg-white hover:bg-${item.color}/20 transition duration-300 cursor-pointer text-xs md:text-base whitespace-nowrap`}>
                Read More
                <span className="ml-2">→</span>
              </button>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}