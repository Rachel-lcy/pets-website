"use client";

import Logo from '/public/assets/logo/logo.png';
import Link from 'next/link';
import Image from 'next/image';
import { UserButton, useAuth } from '@clerk/nextjs';
import { useState } from 'react';
import { Menu, X, ShoppingCart } from 'lucide-react';
import { usePathname } from 'next/navigation';
import { useCart } from '../app/context/CartContext';

export default function NavBar() {
  const { userId } = useAuth();
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();
  const { cartItems } = useCart();

  return (
    <nav className="bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">

        {/* Logo */}
        <div className="flex items-center space-x-4">
          <Link href="/">
            <Image
              src={Logo.src}
              alt="Peak Pets Logo"
              width={200}
              height={100}
              quality={100}
            />
          </Link>
        </div>

        {/* Desktop： navbar */}
        <div className="hidden md:flex items-center space-x-6 text-lg">
          <Link href="/" className={`hover:underline ${pathname === '/' ? 'font-bold text-indigo-700 underline' : 'text-indigo-900'}`}>Home</Link>
          <Link href="/services" className={`hover:underline ${pathname === '/services' ? 'font-bold text-indigo-700 underline' : 'text-indigo-900'}`}>Services</Link>
          <Link href="/store" className={`hover:underline ${pathname === '/store' ? 'font-bold text-indigo-700 underline' : 'text-indigo-900'}`}>Products</Link>
          <Link href="/about" className={`hover:underline ${pathname === '/about' ? 'font-bold text-indigo-700 underline' : 'text-indigo-900'}`}>About</Link>
          <Link href="/contact" className={`hover:underline ${pathname === '/contact' ? 'font-bold text-indigo-700 underline' : 'text-indigo-900'}`}>Contact</Link>
        </div>

        <div className="hidden md:flex items-center space-x-6">

          {!userId ? (
            <>
              <Link href="/sign-in" className="text-gray-900 hover:text-purple-600">Sign in</Link>
              <Link href="/sign-up" className="bg-purple-600 text-white font-semibold px-5 py-2 rounded-lg hover:bg-purple-400 transition flex items-center">
                Sign up
              </Link>
            </>
          ) : (
            <Link href="/profile" className="text-gray-900 hover:text-blue-600">Profile</Link>
          )}
          <UserButton afterSignOutUrl="/" />

          <Link href="/cart" className="relative flex items-center gap-2">
            <ShoppingCart className="w-6 h-6 text-indigo-900 hover:text-purple-500" />
              Cart
              {cartItems.length > 0 && (
                <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
                {cartItems.length}
                </span>
              )}
          </Link>
        </div>

        {/* Hamburger Menu */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* mobile dropdown menu  */}
        {isOpen && (
          <div className="absolute top-[100px] left-0 right-0 bg-white shadow-lg z-50 p-6 flex flex-col space-y-4 text-lg">
            <Link href="/" onClick={() => setIsOpen(false)}>Home</Link>
            <Link href="/services" onClick={() => setIsOpen(false)}>Services</Link>
            <Link href="/store" onClick={() => setIsOpen(false)}>Products</Link>
            <Link href="/about" onClick={() => setIsOpen(false)}>About</Link>
            <Link href="/contact" onClick={() => setIsOpen(false)}>Contact</Link>

            <Link href="/cart" onClick={() => setIsOpen(false)} className="relative flex items-center gap-2">
              <ShoppingCart className="w-5 h-5" />
              Cart
              {cartItems.length > 0 && (
                <span className="absolute -top-2 -right-3 bg-red-500 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
                  {cartItems.length}
                </span>
              )}
            </Link>

            {!userId ? (
              <>
                <Link href="/sign-in" onClick={() => setIsOpen(false)}>Sign in</Link>
                <Link href="/sign-up" onClick={() => setIsOpen(false)}>Sign up</Link>
              </>
            ) : (
              <Link href="/profile" onClick={() => setIsOpen(false)}>Profile</Link>
            )}
            <UserButton afterSignOutUrl="/" />
          </div>
        )}
      </div>
    </nav>
  );
}
