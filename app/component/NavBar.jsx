"use client"
import Logo from './logo.png';
import Link from 'next/link';
import Image from 'next/image';
import {UserButton, useAuth} from '@clerk/nextjs'


export default function NavBar() {
  const {userId} = useAuth();

  return (
    <nav className='flex items-center justify-between px-6 py-4 mb-5'>
      <div >
        <Link href='/' className='mr-3 text-xl'>Home </Link>
        <Link href='/about' className='mr-3 text-xl'>About </Link>
        <Link href='/contact' className='mr-3 text-xl'>Contact </Link>
      </div>

      <Link href="/">
        <Image
          src={Logo.src}
          alt='Peak Pets Logo'
          width = {280}
          height={190}
          quality ={100}
        />
      </Link>

      <div className='flex'>
        {!userId && (
          <>
            <Link href="sign-in" className='text-gray-900 hover:text-gray-600 mr-4 text-xl'>
              Sign In
            </Link>
            <Link href="sign-up" className='text-gray-900 hover:text-gray-600 mr-4 text-xl'>
              Sign Up
            </Link>
          </>
        )}

        {userId && (
        <div>
          <Link href='profile'className='text-gray-900 hover:text-gray-600 mr-4 text-xl'>
          Profile
          </Link>
        </div>
        )}

        <div>
          <UserButton className="flex"/>
        </div>
      </div>
    </nav>

  )
}
