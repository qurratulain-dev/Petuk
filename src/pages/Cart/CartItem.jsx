import React from 'react'
import hero from '../../assets/hero.webp'
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai'

const CartItem = () => {
    return (
        <div className='max-w-6xl mx-auto px-5 py-5 mt-10 flex justify-center items-center gap-10 flex-col md:flex-row'>
            <div className='basis-[70%]'>
                <div className="grid grid-cols-[1fr_1.5fr_1fr_1fr_1fr_0.5fr] text-sm lg:text-[1vw] font-semibold mb-3 justify-center">
                    <p>Items</p>
                    <p>Title</p>
                    <p>Price</p>
                    <p>Quantity</p>
                    <p>Total</p>
                    <p>Remove</p>
                </div>
                <hr className="mb-2" />
                <div className="grid grid-cols-[1fr_1.5fr_1fr_1fr_1fr_0.5fr] items-center border-b border-gray-200  mb-3">

                    <div className="w-[100px] h-[100px] flex items-center gap-2">
                        <img
                            src={hero}
                            alt=""
                            className="w-full  object-cover rounded" />
                    </div>
                    <p className="text-gray-600 font-medium">Cheese pizza</p>
                    <p className="text-gray-600">$45.00</p>
                        <div className="flex items-center gap-2 ">
                            <button
                                className="border border-orange-500  w-7 h-7 rounded-full flex items-center justify-center hover:bg-orange-50 transition">
                                <AiOutlineMinus size={16} />
                            </button>
                            <span className="text-gray-800 font-medium text-lg">1</span>
                            <button
                                className="border border-orange-500  w-7 h-7 rounded-full flex items-center justify-center hover:bg-orange-50 transition">
                                <AiOutlinePlus size={16} />
                            </button>
                        </div>
                    <p className="font-semibold">$Total</p>
                    <p
                        className="cursor-pointer text-red-500 font-bold hover:text-red-700" >X</p>
                </div>
            </div> 
            {/* //checkout */}
            <div className="basis-[30%] bg-gray-50 p-5 rounded-md shadow-md">
                <h2 className="text-lg font-semibold mb-4">Cart Total</h2>
                <div className="flex justify-between text-gray-500 mb-2">
                    <p>SubTotal</p>
                    <p>$30</p>
                </div>
                <div className="flex justify-between text-gray-500 mb-2">
                    <p>Delivery fee</p>
                    <p>$160</p>
                </div>
                <hr className="my-3" />
                <div className="flex justify-between text-gray-800 font-semibold mb-4">
                    <p>Total</p>
                    <b>$400</b>
                </div>
                <button
                    // onClick={()=>navigate('/placeorder')}
                    className="w-full bg-orange-500 text-white py-3 rounded-md hover:bg-orange-600 transition">
                    Proceed to Checkout
                </button>
            </div>
        </div>
    )
}

export default CartItem
