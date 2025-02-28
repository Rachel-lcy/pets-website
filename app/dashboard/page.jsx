
import React from 'react';
import { useUser } from '@clerk/nextjs';

const DashboardPage = () => {
  const user = useUser();
  console.log(user)
  return (
    <div className="p-4 text-xl font-bold">
      <h1 className="text-2xl font-bold">
        Welcome,{user?.username}
      </h1>
    </div>
  )
}

export default DashboardPage