"use client";

import React, { useState } from "react";
import { FaFacebook, FaInstagram, FaTwitter, FaLinkedin, FaYoutube, FaPaw, FaPhone, FaEnvelope, FaMapMarkerAlt, FaClock } from "react-icons/fa";

const Footer = () => {
  const [email, setEmail] = useState("");
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email && email.includes("@")) {
      setIsSubscribed(true);
      setEmail("");
      setTimeout(() => setIsSubscribed(false), 3000);
    }
  };

  return (
    <footer className=" pt-12 pb-6">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">

          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-blue-800 flex items-center gap-2">
              <FaPaw className="text-brown-500" /> Quick Links
            </h3>
            <ul className="space-y-2">
              {["Home", "About Us", "Pet Mall", "Services", "Community", "Contact"].map((link) => (
                <li key={link}>
                  <a href="#" className="text-gray-600 hover:text-blue-600 transition-colors duration-300">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-blue-800">Contact Us</h3>
            <div className="space-y-3">
              <p className="flex items-center gap-2 text-gray-600">
                <FaMapMarkerAlt className="text-brown-500" />
                123 Pet Haven Street, Pawsome City
              </p>
              <p className="flex items-center gap-2 text-gray-600">
                <FaPhone className="text-brown-500" />
                (888) 123-4567
              </p>
              <p className="flex items-center gap-2 text-gray-600">
                <FaEnvelope className="text-brown-500" />
                info@pawsomepets.com
              </p>
              <p className="flex items-center gap-2 text-gray-600">
                <FaClock className="text-brown-500" />
                Mon-Sat: 9AM-6PM
              </p>
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-blue-800">Newsletter</h3>
            <p className="text-gray-600">Subscribe to get updates on our latest pet care tips and adoption events!</p>
            <form onSubmit={handleSubscribe} className="space-y-2">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
              <button
                type="submit"
                className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition-colors duration-300"
              >
                Subscribe
              </button>
            </form>
            {isSubscribed && (
              <p className="text-green-600 animate-fade-in">Thank you for subscribing!</p>
            )}
          </div>


          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-blue-800">Legal</h3>
            <ul className="space-y-2">
              {["Privacy Policy", "Terms of Service", "Cookie Policy", "Accessibility"].map((link) => (
                <li key={link}>
                  <a href="#" className="text-gray-600 hover:text-blue-600 transition-colors duration-300">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-gray-200">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex space-x-4">
              {[
                { Icon: FaFacebook, label: "Facebook" },
                { Icon: FaInstagram, label: "Instagram" },
                { Icon: FaTwitter, label: "Twitter" },
                { Icon: FaLinkedin, label: "LinkedIn" },
                { Icon: FaYoutube, label: "YouTube" }
              ].map(({ Icon, label }) => (
                <a
                  key={label}
                  href="#"
                  aria-label={label}
                  className="text-gray-600 hover:text-blue-600 transition-colors duration-300"
                >
                  <Icon className="text-2xl" />
                </a>
              ))}
            </div>
            <p className="text-gray-600 text-sm">
              © {new Date().getFullYear()} Peak Pets. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;