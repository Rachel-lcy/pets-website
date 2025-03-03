"use profile"
import { UserProfile } from "@clerk/nextjs";
import React from 'react'
import Footer from "../component/Footer";


const ProfilePage = () => {
  return (
    <div >
      <UserProfile />
      <Footer/>
    </div>
  
  )
}

export default ProfilePage