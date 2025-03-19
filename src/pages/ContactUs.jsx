import React from 'react'
import { homePage } from '../../public/data'
import HeroBanner from '../components/HeroBanner'

export default function ContactUs() {
  const {homeBanner} = homePage;
  return (
    <div>
      <HeroBanner data={homeBanner}/>
      Contact
    </div>
  )
}
