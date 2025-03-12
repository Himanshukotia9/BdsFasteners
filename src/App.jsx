import React from 'react'
import Navbar from './components/Navbar'
import { Outlet } from 'react-router-dom'
import Footer from './components/Footer'

export default function App() {
  return (
    <>
      <Navbar/>
      <main className='min-h-screen'>
        <Outlet/>
      </main>
      <Footer/>
    </>
  )
}
