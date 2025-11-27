import React from 'react'
import ShopCard from './ShopCard'

const ShopCards2 = () => {
  return (
   <section>
    <div className='flex justify-between items-center max-w-6xl mx-auto px-5 gap-5 mt-10 flex-wrap'>
        <ShopCard />
        <ShopCard />
    </div>
   </section>
  )
}

export default ShopCards2
