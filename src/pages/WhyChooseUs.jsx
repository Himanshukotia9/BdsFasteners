import React from 'react'
import { whyChooseUsPage } from '../../public/data'
import HeroBanner from '../components/HeroBanner'
import BulletPoint from '../components/BulletPoint';

export default function WhyChooseUs() {
  const { homeBanner, bulletPoints } = whyChooseUsPage;
  return (
    <div className='xl:h-[calc(100vh-120px)]'>
      <HeroBanner data={homeBanner}/>
      <BulletPoint data={bulletPoints}/>
    </div>
  )
}
