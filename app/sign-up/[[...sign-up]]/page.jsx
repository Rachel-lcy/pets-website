
import { SignUp } from "@clerk/nextjs";
import React from 'react';


const SignUpPage = () => {

  return (
    <div className="flex items-center justify-center min-h-full">
      <SignUp />
    </div>

  )
}

export default SignUpPage