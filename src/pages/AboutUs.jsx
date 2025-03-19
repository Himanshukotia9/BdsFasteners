import React from 'react'
import { aboutUsPage } from '../../public/data'
import HeroBanner from '../components/HeroBanner'

export default function AboutUs() {
  const {homeBanner} = aboutUsPage;
  return (
    <div>
      <HeroBanner data={homeBanner}/>
      about
    </div>
  )
}
