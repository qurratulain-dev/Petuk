import React from 'react'
import Heading from '../components/Heading'
import ShopCards2 from '../components/Shop_component/ShopCards2'
import ShopCards4 from '../components/Shop_component/ShopCards4'
import ButtonsFilter from '../components/Shop_component/ButtonsFilter'

const Shop = () => {

  return (
    <>
    <div className='bg-[#fcfcfc] pt-[20vh]  '>
        <div className=' max-w-6xl mx-auto px-5 flex flex-col items-start'>
        <Heading title={"SHOP"} />
        </div>
        <ButtonsFilter />
        <ShopCards2 />
        <ShopCards4 />
        <ShopCards2 />
        <ShopCards4 />
   </div>
    </>
  )
}

export default Shop
