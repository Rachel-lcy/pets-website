"use client"
import React from 'react';
import { useUser } from '@clerk/nextjs';
import Icon from "./icon.svg";
import Image from 'next/image';

const DashboardPage = () => {
  const { isSignedIn, user } = useUser();
  if(!isSignedIn) return <h1 className="text-2xl font-bold"> Loading...</h1>

  return (
    <div className="p-4 text-xl font-bold">
        <h1 className="text-2xl font-bold">
        Welcome, {user?.firstName || "Guest"};<br />
        </h1>
        <small>
          This is a Lovely place for pets lover!
        </small>
        <div>
          <div className='flex'>
            <Image
              src={Icon.src}
              alt='Icon'
              width = {50}
              height={50}
              quality ={100}
            />
            <h3>PET OVERVIEW</h3>
          </div>
        </div>
    </div>
  )
}
export default DashboardPage