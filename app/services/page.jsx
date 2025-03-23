import Footer from "@/components/Footer";
import InstagramSection from "@/components/InstagramSection";
import Image from "next/image"
import Services from "@/components/Services";

export default function ServicesPage(){
  return(
    <div>
      <div>
        <Services />
      </div>

      <div>
        <InstagramSection />
      </div>

      <div>
        <Footer />
      </div>

    </div>
)}
