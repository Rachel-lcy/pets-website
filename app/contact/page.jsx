
import React from 'react'
import Footer from '../../components/Footer'


const ContactPage = () => {
  return (
    <div className='min-h-screen bg-indigo-50 py-12 px-4 sm:px-6 lg:px-8 container '>
      <div className='text-center leading-relaxed mb-4'>
        <h1 className='text-6xl font-bold mt-4 mb-4'>Contact Us</h1>
        <small className='text-gray-500 text-base'>We'd love to hear from you. Please fill out this form.</small>
      </div>

      <div className=''>
        <form className="bg-white rounded-lg shadow-lg p-8">
         <div className="w-full mb-4">
          <label htmlFor="firstName" className="block text-lg font-medium text-gray-700 w-full "> First Name*</label>
            <input
              type="text"
              id='firstName'
              name='firstname'
              placeholder='Enter your first name'
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 p-3"
            />
          </div>
          <div className="w-full mb-4">
          <label htmlFor="lastName" className="block text-lg font-medium text-gray-700 w-full"> Last Name*</label>
          <input
            type="text"
            id='lastName'
            name='lastname'
            placeholder='Enter your last name'
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 p-3"
          />
          </div>
          <div className="w-full mb-4">
            <label htmlFor="phoneNumber" className="block text-lg font-medium text-gray-700 w-full"> Phone Number*</label>
            <input
              type="number"
              id='phoneNumber'
              name='phoneNumber'
              placeholder='Enter your phone number'
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 p-3"
            />
          </div>
          <div className="w-full mb-4">
            <label htmlFor="message" className="block text-lg font-medium text-gray-700 w-full">Message*</label>
            <textarea
              name="message"
              id="message"
              placeholder='Type your message here...'
              height={600}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 p-14"
            >
            </textarea>
          </div>
          <div>
            <button
            type="submit"
            value="submit"
            className="w-full flex justify-center py-3  border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition duration-150 ease-in-out "
            >
              Send Message
            </button>

          </div>
        </form>
      </div>
      <Footer className="bg-white container mt-4"/>
    </div>
  )
}

export default ContactPage
