import React from 'react'
import OurJourney from '../components/About_components/OurJourney'
import ThreeSteps from '../components/About_components/ThreeSteps'
import BestCheese from '../components/BestCheese'
import JoinPartner from '../components/JoinPartner'
import Subscribe from '../components/Subscribe'
import WhatWeDo from '../components/About_components/WhatWeDo'
import Heading from '../components/Heading'
import { Reveal } from '../components/motion/Reveal'

const AboutUs = () => {
  return (
    <div className='bg-[#fcfcfc] pt-[20vh]'>
      <div className=' max-w-6xl mx-auto px-5 flex flex-col items-start'>
        <Heading title={"About Us"} />
      </div>
      <Reveal><OurJourney /></Reveal>
      <Reveal><WhatWeDo /></Reveal>
      <ThreeSteps title={"3 Steps to Delivery"} />
      <BestCheese />
      <Reveal><JoinPartner /></Reveal>
      <Reveal><Subscribe /></Reveal>
    </div>
  )
}

export default AboutUs
