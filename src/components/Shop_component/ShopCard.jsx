import { useState } from 'react'
import { motion } from 'framer-motion'
import { AiFillHeart, AiFillStar } from 'react-icons/ai'
import FoodImage from '../FoodImage'
import AddToCart from '../AddToCart'
import { formatPrice } from '../../utils/format'

const ShopCard = ({ item }) => {
  const [wishlisted, setWishlisted] = useState(false)
  const [loaded, setLoaded] = useState(false)

  return (
    <motion.div
      layout
      data-product-card
      initial={{ opacity: 0, scale: 0.9, y: 20 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.9 }}
      transition={{ duration: 0.35 }}
      whileHover={{ y: -6 }}
      className="relative flex gap-4 rounded-lg bg-white px-5 py-6 shadow transition-shadow hover:shadow-lg"
    >
      <motion.button
        animate={{ scale: wishlisted ? [1, 1.4, 1] : 1 }}
        onClick={() => setWishlisted(!wishlisted)}
        aria-label="Add to wishlist"
        className={`absolute right-2 top-2 z-10 cursor-pointer transition-colors ${
          wishlisted ? 'text-orange-500' : 'text-gray-400'
        }`}
      >
        <AiFillHeart size={25} />
      </motion.button>

      <div className="relative h-[130px] shrink-0 basis-[35%] overflow-hidden rounded-lg bg-zinc-100">
        {!loaded && (
          <div className="skeleton-shimmer absolute inset-0" aria-hidden="true" />
        )}
        <FoodImage
          src={item.img}
          alt={item.name}
          onLoad={() => setLoaded(true)}
          data-cursor="Add"
          className="h-full w-full object-cover transition-transform duration-500 hover:scale-110"
        />
      </div>

      <div className="basis-[65%]">
        <div className="flex items-center gap-2">
          <h2 className="text-lg font-bold text-gray-800">{item.name}</h2>
        </div>
        <p className="flex items-center gap-1 text-xs text-amber-500">
          <AiFillStar /> {item.rating}
          <span className="ml-2 rounded-full bg-orange-100 px-2 py-0.5 text-[10px] text-orange-500">
            {item.category}
          </span>
        </p>
        <p className="my-2 text-[12px] text-gray-500">{item.description}</p>
        <p className="text-xl font-bold text-orange-500">{formatPrice(item.price)}</p>
        <AddToCart
          item={{ id: item.id, name: item.name, price: item.price, img: item.img }}
          className="mt-1"
        />
      </div>
    </motion.div>
  )
}

export default ShopCard
