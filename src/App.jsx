import React from 'react'
import Navbar from './components/Navbar'
import { Outlet } from 'react-router-dom'
import Footer from './components/Footer'
import WhatsAppBtn from './components/WhatsAppBtn';

export default function App() {
  return (
    <div className='bg-neutral-900 min-h-screen'>
      <Navbar/>
      <main className='bg-neutral-900 text-white'>
        <Outlet/>
        <WhatsAppBtn phoneNumber={"7625959259"} message={"hello"}/>
      </main>
      <Footer/>
    </div>
  )
}
