"use client"
import { useState, useEffect } from "react";
import { FaLightbulb, FaHandshake, FaHeart, FaChartLine } from "react-icons/fa";
import Footer from "./Footer";

const AboutUs = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const teamMembers = [
    {
      name: "Sarah Johnson",
      role: "CEO & Founder",
      bio: "15+ years of industry experience, passionate about innovation",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80"
    },
    {
      name: "Michael Chen",
      role: "CTO",
      bio: "Tech enthusiast with a vision for the future",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80"
    },
    {
      name: "Emily Rodriguez",
      role: "Design Director",
      bio: "Creating meaningful experiences through design",
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80"
    },
    {
      name: "David Kim",
      role: "Head of Operations",
      bio: "Streamlining processes for optimal performance",
      image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80"
    }
  ];

  const values = [
    {
      icon: <FaLightbulb />,
      title: "Innovation",
      description: "Smart solutions for better pet care."
    },
    {
      icon: <FaHandshake />,
      title: "Collaboration",
      description: "Connecting pets and people."
    },
    {
      icon: <FaHeart />,
      title: "Passion",
      description: "Driven by love for pets."
    },
    {
      icon: <FaChartLine />,
      title: "Growth",
      description: "Learning, improving, evolving."
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b ">
      {/* Company Overview */}
      <section className="py-20 px-4 max-w-7xl mx-auto  bg-white my-0">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-6 ">Our Story</h2>
          <p className="text-lg text-gray-600 leading-relaxed">
          Founded in 2010, Peak Pets was born from a passion for pets and their well-being. What started as a small idea has grown into a trusted brand, providing high-quality products, expert advice, and a caring community for pet lovers worldwide.

          At Peak Pets, we believe every pet deserves love, comfort, and the best care. Our journey is driven by innovation, sustainability, and a deep commitment to enhancing the lives of pets and their families—one paw at a time.<br />
          </p>
        </div>
      </section>

      {/* Team Members */}
      <section className="py-20 px-4 my-0">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-gray-800 mb-16">Meet Our Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <div key={index} className="group relative overflow-hidden rounded-lg shadow-lg transform transition-transform duration-300 hover:-translate-y-2">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-64 object-cover"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-0 group-hover:opacity-90 transition-opacity duration-300"></div>
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white transform translate-y-6 group-hover:translate-y-0 transition-transform duration-300">
                  <h3 className="text-xl font-semibold">{member.name}</h3>
                  <p className="text-sm text-gray-300">{member.role}</p>
                  <p className="mt-2 text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300">{member.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values and Principles */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-gray-800 mb-16">Our Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="text-center p-6 rounded-lg bg-white shadow-lg transform transition-transform duration-300 hover:-translate-y-2">
                <div className="text-4xl text-purple-500 mb-4">{value.icon}</div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-purple-300 text-white text-center px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold mb-6">Ready to Join Our Journey?</h2>
          <p className="text-xl mb-8">Let's create something amazing together</p>
          <button className="bg-white text-purple-600 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors duration-300">
            Contact Us
          </button>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default AboutUs;