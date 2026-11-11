import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { AiFillHeart, AiFillStar } from 'react-icons/ai';
import FoodImage from '../FoodImage';
import AddToCart from '../AddToCart';
import { formatPrice } from '../../utils/format';

const ShopCard = ({ item }) => {
    const [wishlisted, setWishlisted] = useState(false);

    return (
        <motion.div
            layout
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.35 }}
            whileHover={{ y: -6 }}
            className='flex gap-4 shadow hover:shadow-lg bg-white px-5 py-6 rounded-lg relative transition-shadow'
        >
            <motion.button
                animate={{ scale: wishlisted ? [1, 1.4, 1] : 1 }}
                onClick={() => setWishlisted(!wishlisted)}
                aria-label="Add to wishlist"
                className={`absolute top-2 right-2 cursor-pointer transition-colors ${wishlisted ? 'text-orange-500' : 'text-gray-400'}`}
            >
                <AiFillHeart size={25} />
            </motion.button>
            <div className="basis-[35%] shrink-0 overflow-hidden rounded-lg">
                <FoodImage
                    src={item.img}
                    alt={item.name}
                    className="w-full h-[130px] object-cover transition-transform duration-500 hover:scale-110" />
            </div>
            <div className='basis-[65%]'>
                <div className='flex items-center gap-2'>
                    <h2 className="text-lg font-bold text-gray-800">{item.name}</h2>
                </div>
                <p className='flex items-center gap-1 text-xs text-amber-500'>
                    <AiFillStar /> {item.rating}
                    <span className='ml-2 text-[10px] bg-orange-100 text-orange-500 px-2 py-0.5 rounded-full'>{item.category}</span>
                </p>
                <p className="text-[12px] text-gray-500 my-2">{item.description}</p>
                <p className="text-xl font-bold text-orange-500">{formatPrice(item.price)}</p>
                <AddToCart item={{ id: item.id, name: item.name, price: item.price, img: item.img }} className="mt-1" />
            </div>
        </motion.div>
    )
}

export default ShopCard
