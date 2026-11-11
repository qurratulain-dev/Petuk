import React from 'react'
import Heading from '../components/Heading'
import Form from '../components/Contact_components/Form'
import ContactCards from '../components/Contact_components/ContactCards'
import { Reveal } from '../components/motion/Reveal'

const Contact = () => {
  return (
  <>
  <div className='bg-[#fcfcfc] pt-[20vh]  '>
        <div className='flex flex-col items-start max-w-6xl mx-auto px-5'>
        <Heading title={"Contact Us"} />
        </div>
        <Reveal><Form /></Reveal>
        <ContactCards />
   </div>
  </>
  )
}

export default Contact
