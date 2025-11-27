import React from 'react'
import Heading from '../../components/Heading'
import CartItem from './CartItem'

const Cart = () => {
  return (
    <>
    <div className='bg-[#fcfcfc] pt-[20vh]  '>
        <div className='flex flex-col items-start max-w-6xl mx-auto px-5'>
        <Heading title={"Shopping Cart"} />
        </div>
        <CartItem />
   </div>
    </>
  )
}

export default Cart
