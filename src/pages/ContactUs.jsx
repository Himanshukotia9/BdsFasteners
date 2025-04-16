import React from 'react'
import { contactUsPage } from '../../public/data'
import HeroBanner from '../components/HeroBanner'
import { FiPhone, FiMail, FiMapPin, FiClock } from "react-icons/fi";
import { CountUpStats } from '../components/CountUpStats';

export default function ContactUs() {
  const {homeBanner} = contactUsPage; //change banner config
  return (
    <div>
      <HeroBanner data={homeBanner}/>
      <div className="w-full max-w-6xl mx-auto p-4">
        <div className="text-center py-24">
          <h1 className="text-4xl font-heading font-bold mb-4">Get in Touch</h1>
          <p className="text-white font-primary max-w-2xl mx-auto">
            Have questions? We're here to help. Reach out to our team using any of the
            contact methods below.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Call Us Card */}
          <div className="bg-stone-800 rounded-lg shadow-md p-6 flex flex-col items-center">
            <div className="bg-red-100 p-3 rounded-full mb-4">
              <FiPhone className="text-red-500" size={24} />
            </div>
            <h2 className="text-xl text-white font-semibold mb-4">Call Us</h2>
            <a href="tel:+919888666311" className="text-white hover:text-stone-400 text-center font-primary">+91 9888666311</a>
            <a href="tel:+919417177609" className="text-white hover:text-stone-400 text-center font-primary">+91 9417177609</a>
          </div>

          {/* Email Us Card */}
          <div className="bg-stone-800 rounded-lg shadow-md p-6 flex flex-col items-center">
            <div className="bg-red-100 p-3 rounded-full mb-4">
              <FiMail className="text-red-500" size={24} />
            </div>
            <h2 className="text-xl text-white font-semibold mb-4">Email Us</h2>
            <a href="mailto:Sbdsfastener@gmail.com" className="text-white hover:text-stone-400 text-center font-primary">Sbdsfastener@gmail.com</a>
          </div>

          {/* Visit Us Card */}
          <div className="bg-stone-800 rounded-lg shadow-md p-6 flex flex-col items-center">
            <div className="bg-red-100 p-3 rounded-full mb-4">
              <FiMapPin className="text-red-500" size={24} />
            </div>
            <h2 className="text-xl text-white font-semibold mb-4">Visit Us</h2>
            <p className="text-white hover:text-stone-400 text-center font-primary">34-A, Div Colony,</p>
            <p className="text-white hover:text-stone-400 text-center font-primary">Industrial Estate,</p>
            <p className="text-white hover:text-stone-400 text-center font-primary">Jalandhar, Punjab 144004</p>
          </div>

          {/* Business Hours Card */}
          <div className="bg-stone-800 rounded-lg shadow-md p-6 flex flex-col items-center">
            <div className="bg-red-100 p-3 rounded-full mb-4">
              <FiClock className="text-red-500" size={24} />
            </div>
            <h2 className="text-xl text-white font-semibold mb-4">Business Hours</h2>
            <p className="text-white hover:text-stone-400 text-center font-primary">Monday-Friday: 9AM - 5PM</p>
            <p className="text-white hover:text-stone-400 text-center font-primary">Saturday: 10AM - 2PM</p>
            <p className="text-white hover:text-stone-400 text-center font-primary">Sunday: Closed</p>
          </div>
        </div>

        <CountUpStats/>
      </div>
    </div>
  )
}
