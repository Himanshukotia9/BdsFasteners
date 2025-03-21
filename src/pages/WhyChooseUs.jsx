import React from 'react'
import { whyChooseUsPage } from '../../public/data'
import HeroBanner from '../components/HeroBanner'

export default function WhyChooseUs() {
  const { homeBanner } = whyChooseUsPage;
  return (
    <div>
      <HeroBanner data={homeBanner}/>
    </div>
  )
}
