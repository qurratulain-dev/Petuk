import React from 'react'
import Subscribe from '../components/Subscribe'
import LatestNews from '../components/LatestNews_Blog/LatestNews'
import Heading from '../components/Heading'

const Blog = () => {
  return (
    <>
    <div className='bg-[#fcfcfc] pt-[20vh]  '>
      <div className=' max-w-6xl mx-auto px-5 flex flex-col items-start'>
        <Heading title={"Our Blog"} />
      </div>
      <LatestNews />
      <Subscribe />
    </div>
   </>
  )
}

export default Blog
