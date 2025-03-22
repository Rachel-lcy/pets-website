"use profile"
import { UserProfile } from "@clerk/nextjs";
import React from 'react'
import Footer from "../../components/Footer";


const ProfilePage = () => {
  return (
    <div >
      <UserProfile />
      <Footer/>
    </div>
  
  )
}

export default ProfilePage