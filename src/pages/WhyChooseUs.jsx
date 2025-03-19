import React from 'react'
import { homePage } from '../../public/data'
import HeroBanner from '../components/HeroBanner'

export default function WhyChooseUs() {
  const {homeBanner} = homePage;
  return (
    <div>
      <HeroBanner data={homeBanner}/>
      why choose us
    </div>
  )
}
