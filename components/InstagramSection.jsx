import Image from "next/image";

const instagramPosts = [
  { image: "/assets/smaller/karsten-winegeart-ewfHXBcuFA0-unsplash.jpg" },
  { image: "/assets/smaller/edson-torres-hjzs2nA4y-k-unsplash.jpg" },
  { image: "/assets/smaller/victor-g-N04FIfHhv_k-unsplash.jpg"},
  { image: "/assets/smaller/karsten-winegeart-7UduWMpT618-unsplash.jpg" },
  { image: "/assets/smaller/karsten-winegeart-Fqr9Bq7Inz0-unsplash.jpg" },
];

export default function InstagramSection() {
  return (
    <section className="bg-white p-4 rounded-lg  max-w-full mx-auto mt-16 px-10 py-20">
      {/* Header */}
      <div className="flex justify-between items-center mb-4">
        <button className="px-4 py-1 bg-purple-200 text-purple-700 text-sm font-semibold rounded-full">
          FOLLOW
        </button>
        <p className="text-gray-500 text-sm bottom-10">@Peak Pets</p>
      </div>
      <h2 className="text-4xl font-bold text-gray-900 text-left">Instagram</h2>

      {/* Divider */}
      <div className="border-b border-gray-300 my-4"></div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-2 transform hover:scale-105">
        {instagramPosts.map((item, index) => (
          <div key={index} className="bg-white p-1 rounded-lg ">
            <Image
              src={item.image}
              alt="Instagram Post"
              width={540}
              height={327}
              className="w-full h-auto rounded-md"
            />
          </div>
        ))}
      </div>
    </section>
  );
}
