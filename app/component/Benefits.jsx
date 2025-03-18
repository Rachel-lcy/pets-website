import Image from "next/image"
export default function Benefits() {
  return(
    <div className="relative flex items-center justify-around mt-10 mb-40">
      <div className="">

        <div className="absolute translate-y-10 w-[456px] h-[456px] ">
          <Image
            src="/assets/benefit/circle.png"
            alt="Service 1"
            width={456}
            height={456}
            className="rounded-full"
          />
        </div>

        <div className=" relative w-[456px] h-[456px] translate-y-10">
        <Image
          src="/assets/benefit/dog-children.png"
          alt="Service 1"
          width={456}
          height={456}
          className="rounded-full object-cover border-4 border-white shadow-lg"
        />
        {/* <span className="ml-2">→</span> */}
        </div>
      </div>

      <div className="ml-10">
        <span className="px-3 py-1 text-sm font-semibold text-purple-600 bg-purple-100 rounded-lg">
          BENEFITS
        </span>
        <h2 className="mt-2 text-3xl font-bold text-gray-900 tracking-wide leading-loose">
          It’s good to pamper <br />yourself and relax a bit
        </h2>
        <p className="mt-2 text-gray-400 tracking-wide leading-loose">
          Whether you’re deserving of some quality<br /> pampering time looking to reconnect with nature
        </p>

        <button className="mt-4 flex items-center px-6 py-3 text-white bg-yellow-500 rounded-full hover:bg-yellow-600 transition">
          <span>Learn More</span>
          <span className="ml-2">→</span>
        </button>
      </div>
    </div>

  )
}