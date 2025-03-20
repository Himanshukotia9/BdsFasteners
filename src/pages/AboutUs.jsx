import React from 'react'
import { aboutUsPage } from '../../public/data'
import HeroBanner from '../components/HeroBanner'
import AltBanner from '../components/AltBanner';

export default function AboutUs() {
  const { homeBanner, altBanner } = aboutUsPage;
  return (
    <div>
      <HeroBanner data={homeBanner}/>
      <AltBanner data={altBanner[0]} reverse={true}/>
      <AltBanner data={altBanner[1]} reverse={false}/>
    </div>
  )
}
