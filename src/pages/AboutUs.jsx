import React from 'react'
import OurJourney from '../components/About_components/OurJourney'
import ThreeSteps from '../components/About_components/ThreeSteps'
import BestCheese from '../components/BestCheese'
import JoinPartner from '../components/JoinPartner'
import Subscribe from '../components/Subscribe'

const AboutUs = () => {
  return (
   <>
   <div className='bg-[#fcfcfc]'>
   <h2 className='text-4xl text-zinc-800 font-bold max-w-6xl mx-auto px-5 pt-[20vh]'>About Us</h2>
   <OurJourney />
   <ThreeSteps title={"3 Steps to Delivery"}/>
   <BestCheese />
   <JoinPartner />
   <Subscribe />
   </div>

   </>
  )
}

export default AboutUs
