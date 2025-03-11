"use client"
import React from 'react';
import { useUser } from '@clerk/nextjs';
import Dog from "./dog.png";
import Contact from "./contact.png";
import Owner from "./petowner.png";
import Sitter from "./sitting.png";
import Grooming from "./grooming.png";
import Pet from "./pet.png";
import Veterinarian from "./veterinarian.png";
import PersianCat from "./persian-cat.png";
import Corgi from "./corgi.png";
import Labrador from "./labrador-retriever.png";
import ScottishFold from "./scottish-fold.png";
import Poddle from "./Poodle.png";
import SiameseCat from "./siamese-cat.png";
import Activity from "./activity.jpg"
import Toys from "./toys.jpg"
import Behavior from "./behavior.jpg"
import Traning from "./traning.jpg"
import Image from 'next/image';

const DashboardPage = () => {
  const { isSignedIn, user } = useUser();
  if(!isSignedIn) return <h1 className="text-2xl font-bold"> Loading...</h1>

  return (
    <div className='box-border max-w-full justify-center justify-items-center' >
      <div className="p-4 font-bold my-5">
        <h1 className="text-3xl font-bold tracking-wide mb-4">
        Welcome, {user?.firstName || "Guest"}!<br />
        This is a Lovely place for pets lover!
        </h1>
      </div>

      <div className="grid gap-3 mx-2">
        <div className='flex'>
              <Image
                src={Pet.src}
                alt='Icon'
                width = {50}
                height={50}
                quality ={100}
              />
              <h3>PET OVERVIEW</h3>
        </div>

        <div className='shadow-md '>
          <div className="card">
            <Image className='card-image' src={PersianCat.src}
            width ={440}
            height = {327}
            alt="lovely animals"
            />
            <h2 className='card-title '>British Shorthair Cat</h2>
            <p className='card-text '>2 yeats old</p>
          </div>

          <div className="card flex">
            <Image className='card-image' src={Corgi.src}
            width ={440}
            height = {327}
            alt="lovely animals"
            />
            <h2 className='card-title'>Corgi</h2>
            <p className='card-text'>2 yeats old</p>
          </div>

          <div className="card">
            <Image className='card-image' src={Labrador.src}
            width ={440}
            height = {327}
            alt="lovely animals"
            />
            <h2 className='card-title'>Labrador</h2>
            <p className='card-text'>2 yeats old</p>
          </div>

          <div className="card">
            <Image className='card-image' src={ScottishFold.src}
            width ={440}
            height = {327}
            alt="lovely animals"
            />
            <h2 className='card-title'>Scottish Fold Cat</h2>
            <p className='card-text'>2 yeats old</p>
          </div>

          <div className="card">
            <Image className='card-image' src={Poddle.src}
            width ={440}
            height = {327}
            alt="lovely animals"
            />
            <h2 className='card-title'>Poddle</h2>
            <p className='card-text'>2 yeats old</p>
          </div>

          <div className="card">
            <Image className='card-image' src={SiameseCat.src}
            width ={440}
            height = {327}
            alt="lovely animals"
            />
            <h2 className='card-title'>Siamese Cat</h2>
            <p className='card-text'>2 yeats old</p>
          </div>

          <div className='flex my-5'>
            <Image
              src={Dog.src}
              alt='Icon'
              width = {50}
              height={50}
              quality ={100}
            />
            <h3>PET FAVORITE THINGS & ACTIVITIES</h3>
          </div>

          <div className="card">
            <Image className='card-image' 
              src={Activity.src}
              width ={440}
              height = {327}
              alt="lovely animals"
            />
            <h2 className='card-title '>Activity</h2>
          </div>

          <div className="card">
            <Image className='card-image'
              src={Toys.src}
              width ={440}
              height = {327}
              alt="lovely animals"
            />
            <h2 className='card-title '>Toys</h2>
          </div>

          <div className="card">
            <Image className='card-image'
              src={Behavior.src}
              width ={440}
              height = {327}
              alt="lovely animals"
            />
            <h2 className='card-title '>Behavior and Mood Notes</h2>
          </div>

          <div className="card">
            <Image className='card-image' 
              src={Traning.src}
              width ={440}
              height = {327}
              alt="lovely animals"
            />
            <h2 className='card-title '>Training Commands</h2>
          </div>

          <div className='flex my-5'>
            <Image
              src={Contact.src}
              alt='Icon'
              width = {50}
              height={50}
              quality ={100}
            />
            <h3>CONTACT INFORMATION</h3>
          </div>

          <div className="card">
            <Image className='card-image'
              src={Owner.src}
              width ={440}
              height = {327}
              alt="lovely animals"
            />
            <h2 className='card-title '>Pets Owner</h2>
            <p>John Don</p>
          </div>

          <div className="card">
            <Image className='card-image'
              src={Grooming.src}
              width ={440}
              height = {327}
              alt="lovely animals"
            />
            <h2 className='card-title '>Pet Grooming</h2>
            <p>Honey's Pet Grooming</p>
          </div>

          <div className="card">
            <Image className='card-image'
              src={Veterinarian.src}
              width ={440}
              height = {327}
              alt="lovely animals"
            />
            <h2 className='card-title '>Veterinarian</h2>
            <p>Ana West</p>
          </div>

          <div className="card">
            <Image className='card-image'
              src={Sitter.src}
              width ={440}
              height = {327}
              alt="lovely animals"
            />
            <h2 className='card-title '>Pet Sitter</h2>
            <p>Dogs Walkers and Pet Sitters</p>
          </div>
        </div>
      </div>
    </div>
  )
}
export default DashboardPage