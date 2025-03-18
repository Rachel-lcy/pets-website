import React from "react";
import { FaQuoteLeft } from "react-icons/fa";

const TestimonialInterface = () => {
  const testimonials = [
    {
      id: 1,
      name: "John Doe",
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80",
      review: "Peak Pets has completely changed the way I care for my furry friend. Their expert tips and high-quality products make pet parenting easy and joyful!",
      backgroundColor: "bg-white",
    },
    {
      id: 2,
      name: "Jane Smith",
      avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80",
      review: "I'm amazed by the level of customer support at Peak Pets! The team goes above and beyond to ensure my pet gets the best care possible.",
      backgroundColor: "bg-white",
    },
    {
      id: 3,
      name: "Mike Johnson",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80",
      review: "The quality of Peak Pets' products exceeded my expectations. Durable, well-designed, and absolutely loved by my pet!",
      backgroundColor: "bg-white",
    },
  ];

  return (
    <div className="container mx-auto px-4 py-20 mb-8 bg-indigo-100 max-w-full">
      <div className="text-center leading-loose">
        <small className="text-gray-400 text-lg text-center">Testimonials</small>
        <h2 className="text-4xl font-bold text-center mb-4">What Our Customers Say</h2>
        <p className="text-xl text-gray-500 text-center mb-12">Don't just take our word for it - hear from our satisfied customers</p>
      </div>
      
      <div className="flex gap-10">
        {testimonials.map((testimonial) => (
          <div
            key={testimonial.id}
            className= "p-6 rounded-lg shadow-lg transition-all duration-300 ease-in-out transform hover:scale-105 focus-within:ring-2 focus-within:ring-offset-2 bg-white w-3/4 text-center"
          >
            <div className="flex items-start">
              <img
                src={testimonial.avatar}
                alt={testimonial.name}
                className="w-16 h-16 rounded-full mr-4 object-cover"
              />
              <div>
                <FaQuoteLeft className="text-gray-400 mb-2" />
                <p className="text-gray-800 mb-4">{testimonial.review}</p>
                <p className="font-semibold mt-4">{testimonial.name}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TestimonialInterface;