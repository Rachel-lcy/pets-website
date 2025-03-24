"use client"
import React from 'react';
import { useUser } from '@clerk/nextjs';
import Image from 'next/image';
import Footer from '@/components/Footer';


const petData = [
  { src: "/assets/dashboard/persian-cat.png", title: "British Shorthair Cat", description: "2 years old" },
  { src: "/assets/dashboard/corgi.png", title: "Corgi", description: "2 years old" },
  { src: "/assets/dashboard/labrador-retriever.png", title: "Labrador", description: "2 years old" },
  { src: "/assets/dashboard/scottish-fold.png", title: "Scottish Fold Cat", description: "2 years old" },
  { src: "/assets/dashboard/Poodle.png", title: "Poodle", description: "2 years old" },
  { src: "/assets/dashboard/siamese-cat.png", title: "Siamese Cat", description: "2 years old" },
];

const favoriteActivities = [
  { src: "/assets/dashboard/activity.jpg", title: "Activity" },
  { src: "/assets/dashboard/toys.jpg", title: "Toys" },
  { src: "/assets/dashboard/behavior.jpg", title: "Behavior and Mood Notes" },
  { src: "/assets/dashboard/traning.jpg", title: "Training Commands" },
];

const contactInfo = [
  { src: "/assets/dashboard/petowner.png", title: "Pets Owner", description: "John Don" },
  { src: "/assets/dashboard/grooming.png", title: "Pet Grooming", description: "Honey's Pet Grooming" },
  { src: "/assets/dashboard/veterinarian.png", title: "Veterinarian", description: "Ana West" },
  { src: "/assets/dashboard/sitting.png", title: "Pet Sitter", description: "Dogs Walkers and Pet Sitters" },
];

const DashboardPage = () => {
  const { isSignedIn, user } = useUser();
  if (!isSignedIn) return <h1 className="text-2xl font-bold"> Loading...</h1>;

  return (
    <div className="box-border max-w-full">
      <div className="p-4 font-bold my-5">
        <h1 className="text-3xl font-bold tracking-wide mb-4 flex justify-center items-center">
          Welcome, {user?.firstName || "Guest"}!<br />
          This is a Lovely place for pet lovers!
        </h1>
      </div>

      {/* PET OVERVIEW */}
      <div className="grid my-5">
        <div className="flex">
          <Image src="/assets/dashboard/pet.png" alt="Icon" width={50} height={50} quality={100} />
          <h3>PET OVERVIEW</h3>
        </div>

        <div className="grid grid-cols-2 gap-6 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4">
          {petData.map((pet, index) => (
            <div key={index} className="card shadow-md p-4 rounded-lg">
              <Image className="card-image" src={pet.src} width={400} height={300} alt={pet.title} />
              <h2 className="card-title">{pet.title}</h2>
              <p className="card-text">{pet.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* PET FAVORITE THINGS & ACTIVITIES */}
      <div className="flex my-5 justify-start items-center">
        <Image src="/assets/dashboard/dog.png" alt="Icon" width={50} height={50} quality={100} />
        <h3>PET FAVORITE THINGS & ACTIVITIES</h3>
      </div>

      <div className="grid grid-cols-2 gap-6 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4">
        {favoriteActivities.map((activity, index) => (
          <div key={index} className="card shadow-md p-4 rounded-lg">
            <Image className="card-image" src={activity.src} width={440} height={327} alt={activity.title} />
            <h2 className="card-title">{activity.title}</h2>
          </div>
        ))}
      </div>

      {/* CONTACT INFORMATION */}
      <div className="flex my-5">
        <Image src="/assets/dashboard/contact.png" alt="Icon" width={50} height={50} quality={100} />
        <h3>CONTACT INFORMATION</h3>
      </div>

      <div className="grid grid-cols-2 gap-6 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4">
        {contactInfo.map((contact, index) => (
          <div key={index} className="card shadow-md p-4 rounded-lg">
            <Image className="card-image" src={contact.src} width={440} height={327} alt={contact.title} />
            <h2 className="card-title">{contact.title}</h2>
            <p className="card-text">{contact.description}</p>
          </div>
        ))}
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
};

export default DashboardPage;
