import { useRef, useState } from 'react'
import { motion, useMotionValue, useReducedMotion, useSpring, useTransform } from 'framer-motion'
import { AiFillHeart } from 'react-icons/ai'
import FoodImage from '../FoodImage'
import AddToCart from '../AddToCart'
import { formatPrice } from '../../utils/format'

const spring = { stiffness: 200, damping: 20 }

const WeeklyPizzaCard = ({ id, name, description, price, image }) => {
  const [wishlisted, setWishlisted] = useState(false)
  const reduce = useReducedMotion()
  const cardRef = useRef(null)
  const pointerX = useMotionValue(0)
  const pointerY = useMotionValue(0)
  const rotateX = useSpring(useTransform(pointerY, [-0.5, 0.5], [8, -8]), spring)
  const rotateY = useSpring(useTransform(pointerX, [-0.5, 0.5], [-8, 8]), spring)

  const handleMove = (event) => {
    if (reduce || !cardRef.current) return
    const rect = cardRef.current.getBoundingClientRect()
    pointerX.set((event.clientX - rect.left) / rect.width - 0.5)
    pointerY.set((event.clientY - rect.top) / rect.height - 0.5)
  }

  const reset = () => {
    pointerX.set(0)
    pointerY.set(0)
  }

  return (
    <motion.div
      ref={cardRef}
      data-product-card
      onMouseMove={handleMove}
      onMouseLeave={reset}
      style={{
        rotateX: reduce ? 0 : rotateX,
        rotateY: reduce ? 0 : rotateY,
        transformPerspective: 1000,
        transformStyle: 'preserve-3d',
      }}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      whileHover={{ y: -8 }}
      transition={{ type: 'spring', stiffness: 200, damping: 20 }}
      className="group relative flex max-w-xs flex-col items-center gap-3 rounded-xl bg-white px-4 py-5 ring-1 ring-zinc-100 shadow-lg transition-shadow duration-500 hover:shadow-2xl hover:shadow-orange-200/60 hover:ring-orange-200"
    >
      <motion.button
        whileTap={{ scale: 1.5 }}
        animate={{ scale: wishlisted ? [1, 1.4, 1] : 1 }}
        onClick={() => setWishlisted(!wishlisted)}
        aria-label="Add to wishlist"
        className={`absolute right-2 top-2 cursor-pointer transition-colors ${
          wishlisted ? 'text-orange-500' : 'text-gray-400'
        }`}
      >
        <AiFillHeart size={25} />
      </motion.button>

      <div
        className="h-40 w-full overflow-hidden rounded-lg"
        style={{ transform: 'translateZ(40px)' }}
      >
        <FoodImage
          src={image}
          alt={name}
          data-cursor="Add"
          className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
        />
      </div>

      <h2 className="text-center text-xl font-bold text-gray-800 transition-colors duration-300 group-hover:text-orange-500">{name}</h2>
      <p className="text-center text-sm text-gray-500">{description}</p>
      <p className="text-xl font-bold text-orange-500">{formatPrice(price)}</p>
      <AddToCart item={{ id, name, price, img: image }} className="justify-center" />
    </motion.div>
  )
}

export default WeeklyPizzaCard
