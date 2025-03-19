import React from 'react'
import { homePage } from '../../public/data'
import HeroBanner from '../components/HeroBanner'
import AltBanner from '../components/AltBanner'
import Marquee from '../components/Marquee'

export default function HomePage() {
  const {homeBanner, altBanner, marqueeSlogan} = homePage;
  return (
    <>
        <HeroBanner data={homeBanner}/>
        <AltBanner data={altBanner[0]} reverse={true}/>
        <Marquee slogans={marqueeSlogan}/>
        <AltBanner data={altBanner[1]} reverse={false}/>
    </>
  )
}
