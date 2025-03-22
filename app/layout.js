"use client"
import { Roboto } from "next/font/google";
import "./globals.css";
import NavBar from "../components/NavBar";
import { ClerkProvider } from "@clerk/nextjs";
import HeroImage from "../components/HeroImage";
import Footer from "../components/Footer";
import TestimonialPage from "../components/Testimonials";
import { usePathname } from "next/navigation";
import AboutUs from "../components/About";


const roboto = Roboto({
  weight: '400',
  subsets: ['latin'],
})

export default function RootLayout({ children }) {
  const pathname = usePathname();
  return (
    < ClerkProvider>
      <html lang="en">
        <body className={roboto.className}>
          <NavBar />
          <main className="container mx-auto">
            <div className="flex items-start justify-center min-h-screen">
              {children}
            </div>
          </main>
          {/* {pathname === '/' && <TestimonialPage />} */}
          {/* < AboutUs /> */}
        </body>
      </html>
    </ClerkProvider>
  );
}
