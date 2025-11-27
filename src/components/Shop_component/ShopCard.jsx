import React, { useState } from 'react'
import hero from '../../assets/hero.webp'
import { AiFillHeart, AiOutlineMinus, AiOutlinePlus, AiOutlineShoppingCart } from 'react-icons/ai';

const ShopCard = () => {
    const [wishlisted, setWishlisted] = useState(false);

    const toggleWishlist = () => {
        setWishlisted(!wishlisted);
    };

    return (
        <div className='flex-1 mx-auto flex shadow px-5 py-6 rounded-lg relative'>
            <div
                className={`absolute top-px right-1 cursor-pointer transition ${wishlisted ? 'text-orange-500' : 'text-gray-400'
                    }`}
                onClick={toggleWishlist}>
                <AiFillHeart size={25} />
            </div>
            <div className="basis-[35%] overflow-hidden rounded-lg flex justify-start items-center">
                <img
                    src={hero}
                    alt=""
                    className="w-full h-[100px] object-cover transition-transform duration-300 hover:scale-105" />
            </div>
            <div className='basis-[65%]'>
                <h2 className="text-lg font-bold text-gray-800">Chese Pizza</h2>
                <p className="text-[12px] text-gray-500 my-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum, ipsum?</p>
                <p className="text-xl font-bold text-orange-500">$56.00</p>
                <div className='flex gap-5'>
                    <div className="flex items-center gap-3 my-2">
                        <button
                            className="border border-orange-500  w-8 h-8 rounded-full flex items-center justify-center hover:bg-orange-50 transition">
                            <AiOutlineMinus size={16} />
                        </button>
                        <span className="text-gray-800 font-medium text-lg">1</span>
                        <button
                            className="border border-orange-500  w-8 h-8 rounded-full flex items-center justify-center hover:bg-orange-50 transition">
                            <AiOutlinePlus size={16} />
                        </button>
                    </div>
                    <button
                        className="flex items-center gap-2 text-white bg-orange-500 hover:bg-black px-4 py-2 rounded-full transition-all ">
                        <AiOutlineShoppingCart size={20} /> Add to cart
                    </button>
                </div>
            </div>
        </div>
    )
}

export default ShopCard
