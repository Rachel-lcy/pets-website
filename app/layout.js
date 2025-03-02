import { Roboto } from "next/font/google";
import "./globals.css";
import NavBar from "./component/NavBar";
import { ClerkProvider } from "@clerk/nextjs";

const roboto = Roboto({
  weight: '400',
  subsets: ['latin'],
})

export default function RootLayout({ children }) {
  return (
    < ClerkProvider>
      <html lang="en">
      <body
        className={roboto.className}
      >
        <NavBar />
        <main className="container mx-auto">
          <div className="flex items-start justify-center min-h-screen">
            {children}
          </div>
        </main>
      </body>
    </html>
    </ClerkProvider>
  );
}
