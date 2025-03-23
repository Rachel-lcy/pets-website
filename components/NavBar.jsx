"use client"
import Logo from '/public/assets/logo/logo.png';
import Link from 'next/link';
import Image from 'next/image';
import {UserButton, useAuth} from '@clerk/nextjs';
import { useState } from 'react';
import {Menu, X} from 'lucide-react';
import { usePathname } from 'next/navigation';


export default function NavBar(){
  const {userId} = useAuth();
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  return(
    <nav className="bg-white ">
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        <Link href="/">
          <Image
            src={Logo.src}
            alt='Peak Pets Logo'
            width = {260}
            height={150}
            quality ={100}
          />
        </Link>

        {/* {Hamburger Menu} */}
        <button
          className='md:hidden p-2 rounded focus:outline-none'
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? < X size = {28}/> : < Menu size={28} />}
        </button>

        <div className="hidden md:flex space-x-6 text-xl  ">
          <Link href='/' className={`mr-3 hover:underline ${
            pathname === '/' ? 'font-bold text-indigo-700 underline' : 'text-indigo-900'
          }`}>Home </Link>
          <Link href='/services'  className={`mr-3 hover:underline ${
            pathname === '/services' ? 'font-bold text-indigo-700 underline' : 'text-indigo-900'
          }`}>Services </Link>
          <Link href='/store'  className={`mr-3 hover:underline ${
            pathname === '/store' ? 'font-bold text-indigo-700 underline' : 'text-indigo-900'
          }`}>Store </Link>
          <Link href='/about'  className={`mr-3 hover:underline ${
            pathname === '/about' ? 'font-bold text-indigo-700 underline' : 'text-indigo-900'
          }`}>About </Link>
          <Link href='/contact'  className={`mr-3 hover:underline ${
            pathname === '/contact' ? 'font-bold text-indigo-700 underline' : 'text-indigo-900'
          }`}>Contact </Link>

        </div>

        <div className="hidden md:flex items-center space-x-4">
          {!userId ? (
            <>
            <Link href="/sign-in" className="text-gray-900 hover:text-purple-600" onClick={() => setIsOpen(false)}>Sign in</Link>
            <Link href="/sign-up" className="bg-purple-600 text-white font-semibold px-6 py-3 rounded-lg shadow-md hover:bg-purple-400 transition flex items-center space-x-2 " onClick={() => setIsOpen(false)}>Sign up
            <span className='ml-4'>→</span>
            
            </Link>
          </>
          ): (
            <Link href="/profile" className="text-gray-900 hover:text-blue-600" onClick={() => setIsOpen(false)}>Profile</Link>
          )}
          <UserButton afterSignOutUrl="/"/>
        </div>

        {isOpen && (
          <div className="md:hidden bg-white shadow-lg">
            <div className="flex flex-col space-y-4 p-4 text-lg hover:underline">
              <Link href='/' className='mr-3 text-xl'>Home </Link>
              <Link href='/services' className='mr-3 text-xl'>Services </Link>
              <Link href='/store' className='mr-3 text-xl '>Store </Link>
              <Link href='/about' className='mr-3 text-xl'>About </Link>
              <Link href='/contact' className='mr-3 text-xl'>Contact </Link>
              {userId && <Link href="/dashboard" className="text-gray-900 hover:text-blue-600" onClick={() => setIsOpen(false)}>Dashboard</Link>}
              {!userId ? (
              <>
                <Link href="/sign-in" className="text-gray-900 hover:text-blue-600" onClick={() => setIsOpen(false)}>Sign in</Link>
                <Link href="/sign-up" className="text-gray-900 hover:text-blue-600" onClick={() => setIsOpen(false)}>Sign up</Link>
              </>
            ) : (
              <Link href="/profile" className="text-gray-900 hover:text-blue-600" onClick={() => setIsOpen(false)}>Profile</Link>
            )}
            <UserButton afterSignOutUrl="/" />
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
