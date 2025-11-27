import React from 'react'
import OurJourney from '../components/About_components/OurJourney'
import ThreeSteps from '../components/About_components/ThreeSteps'
import BestCheese from '../components/BestCheese'
import JoinPartner from '../components/JoinPartner'
import Subscribe from '../components/Subscribe'
import WhatWeDo from '../components/About_components/WhatWeDo'
import Heading from '../components/Heading'

const AboutUs = () => {
  return (
    <>
      <div className='bg-[#fcfcfc]'>
        <div className=' max-w-6xl mx-auto px-5 flex flex-col items-start'>
          <Heading title={"Our Blog"} />
        </div>
        <OurJourney />
        <WhatWeDo />
        <ThreeSteps title={"3 Steps to Delivery"} />
        <BestCheese />
        <JoinPartner />
        <Subscribe />
      </div>

    </>
  )
}

export default AboutUs
