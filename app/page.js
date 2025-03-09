import Image from "next/image";

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center  p-8 pb-20 gap-16 sm:p-5">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <div className="flex flex-col items-center justify-center  w-full">

          <div className="grid gap-4 text-center text-gray-700 mt-2 max-w-prose mb-2">
            <h1 className="text-5xl font-bold tracking-wide mb-4 ">
              Welcome to Peak Pets 🐾
            </h1>
            <h2 className="text-2xl font-semibold text-gray-700 mb-4">
              A Paradise for Pet Lovers!
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              At Peak Pets, we celebrate the joy and companionship that pets bring into our lives. 
              Whether you're a cat lover or a dog enthusiast, you'll find endless inspiration and 
              heartwarming moments right here!
            </p>
          </div>

          <div className="flex justify-center items-center">
            <div className="grid gap-6 text-center text-gray-700 mt-2 max-w-prose">
              <p className="text-xl font-semibold">📸 Discover Adorable Moments</p>
              <p className="text-lg max-w-lg">
                Browse our pet gallery and let these furry friends brighten your day.
              </p>

              <p className="text-xl font-semibold">🛍️ Find the Best Pet Products</p>
              <p className="text-lg max-w-lg">
                Explore top-rated toys, treats, and care essentials to keep your pets happy and healthy.
              </p>

              <p className="text-xl font-semibold">🐶🐱 Join the Pet Community</p>
              <p className="text-lg max-w-lg">
                Connect with fellow pet lovers, share your pet’s stories, and get expert care tips.
              </p>
            </div>
          </div>
        </div>

        <div className="flex">
          <div className="grid gap-3 mx-2">
            <Image
            src="/assets/bigger/alvan-nee-8g0D8ZfFXyA-unsplash.jpg"
            width ={440}
            height = {759}
            alt="lovely animals"
            />
            <Image
            src="/assets/bigger/alvan-nee-ZCHj_2lJP00-unsplash.jpg"
            width ={440}
            height = {759}
            alt="lovely animals"
            />
            <Image
            src="/assets/bigger/alvan-nee-9M0tSjb-cpA-unsplash.jpg"
            width ={440}
            height = {759}
            alt="lovely animals"
            />
            <Image
            src="/assets/bigger/alvan-nee-ZCHj_2lJP00-unsplash.jpg"
            width ={440}
            height = {759}
            alt="lovely animals"
            />
            <Image
            src="/assets/bigger/karsten-winegeart-7sgPfAcM6_o-unsplash.jpg"
            width ={440}
            height = {759}
            alt="lovely animals"
            />
            <Image
            src="/assets/bigger/karsten-winegeart-BJaqPaH6AGQ-unsplash.jpg"
            width ={440}
            height = {759}
            alt="lovely animals"
            />
          </div>
          <div className="grid gap-2 mx-2">
          <Image
            src="/assets/smaller/cong-h-RWSh0t7bw68-unsplash.jpg"
            width ={540}
            height = {327}
            alt="lovely animals"
          />
          <Image
            src="/assets/smaller/edson-torres-hjzs2nA4y-k-unsplash.jpg"
            width ={540}
            height = {327}
            alt="lovely animals"
          />
          <Image
            src="/assets/smaller/karsten-winegeart--_gMskl-uoc-unsplash.jpg"
            width ={540}
            height = {327}
            alt="lovely animals"
          />
          <Image
            src="/assets/smaller/karsten-winegeart-7UduWMpT618-unsplash.jpg"
            width ={540}
            height = {327}
            alt="lovely animals"
          />
           <Image
            src="/assets/smaller/karsten-winegeart-ewfHXBcuFA0-unsplash.jpg"
            width ={540}
            height = {327}
            alt="lovely animals"
          />
          <Image
            src="/assets/smaller/karsten-winegeart-Fqr9Bq7Inz0-unsplash.jpg"
            width ={540}
            height = {327}
            alt="lovely animals"
          />
          <Image
            src="/assets/smaller/karsten-winegeart-qy0BHykaq0E-unsplash.jpg"
            width ={540}
            height = {327}
            alt="lovely animals"
          />
          <Image
            src="/assets/smaller/karsten-winegeart-Ln3upC7iFe0-unsplash (1).jpg"
            width ={540}
            height = {327}
            alt="lovely animals"
          />
          <Image
            src="/assets/smaller/lucrezia-carnelos-F0if-2LD4cA-unsplash (1).jpg"
            width ={540}
            height = {327}
            alt="lovely animals"
          />
          <Image
            src="/assets/smaller/scott-webb-ttCFWHrmWH4-unsplash.jpg"
            width ={540}
            height = {327}
            alt="lovely animals"
          />
          <Image
            src="/assets/smaller/victor-g-N04FIfHhv_k-unsplash.jpg"
            width ={540}
            height = {327}
            alt="lovely animals"
          />

          </div>
          <div className="grid gap-3 mx-2">
          <Image
            src="/assets/bigger/kanashi-BLW_KQ0Rkn0-unsplash.jpg"
            width ={440}
            height = {759}
            alt="lovely animals"
            />
            <Image
            src="/assets/bigger/karsten-winegeart-Z-rSM6yKgxo-unsplash.jpg"
            width ={440}
            height = {759}
            alt="lovely animals"
            />
            <Image
            src="/assets/bigger/karsten-winegeart-WaMMo0it6Vg-unsplash.jpg"
            width ={440}
            height = {759}
            alt="lovely animals"
            />
            <Image
            src="/assets/bigger/karsten-winegeart-YzxeHEzBZ6I-unsplash.jpg"
            width ={440}
            height = {759}
            alt="lovely animals"
            />
            <Image
            src="/assets/bigger/karsten-winegeart-7sgPfAcM6_o-unsplash.jpg"
            width ={440}
            height = {759}
            alt="lovely animals"
            />
            <Image
            src="/assets/bigger/karsten-winegeart-nwe2qgAhT4k-unsplash.jpg"
            width ={440}
            height = {759}
            alt="lovely animals"
            />
          </div>
        </div>
      </main>
      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center text-xl mb-6">
        © Pet Website
      </footer>
    </div>
  );
}
