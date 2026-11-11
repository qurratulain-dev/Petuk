import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { AiOutlineMinus, AiOutlinePlus, AiOutlineShoppingCart } from 'react-icons/ai'
import { IoCheckmarkCircle } from 'react-icons/io5'
import { useCart } from '../context/CartContext'
import { useCartUI } from '../context/CartUIContext'

// Quantity stepper + "Add to cart" button used by every product card.
const AddToCart = ({ item, className = '' }) => {
  const { addItem } = useCart()
  const { notify, flyToCart } = useCartUI()
  const [qty, setQty] = useState(1)
  const [added, setAdded] = useState(false)

  useEffect(() => {
    if (!added) return undefined
    const timer = setTimeout(() => setAdded(false), 1300)
    return () => clearTimeout(timer)
  }, [added])

  const handleAdd = (event) => {
    addItem(item, qty)
    setQty(1)
    setAdded(true)

    const card = event.currentTarget.closest('[data-product-card]')
    const image = card?.querySelector('img')
    if (image) flyToCart(item.img, image.getBoundingClientRect())
    notify(`${item.name} added to cart`)
  }

  return (
    <div className={`flex flex-wrap items-center gap-4 ${className}`}>
      <div className="flex items-center gap-3">
        <motion.button
          whileTap={{ scale: 0.85 }}
          onClick={() => setQty((value) => Math.max(1, value - 1))}
          aria-label="Decrease quantity"
          className="flex h-8 w-8 items-center justify-center rounded-full border border-orange-500 transition hover:bg-orange-50"
        >
          <AiOutlineMinus size={16} />
        </motion.button>
        <div className="w-5 overflow-hidden text-center">
          <AnimatePresence mode="popLayout" initial={false}>
            <motion.span
              key={qty}
              initial={{ y: -12, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 12, opacity: 0 }}
              transition={{ duration: 0.15 }}
              className="block text-lg font-medium text-gray-800"
            >
              {qty}
            </motion.span>
          </AnimatePresence>
        </div>
        <motion.button
          whileTap={{ scale: 0.85 }}
          onClick={() => setQty((value) => value + 1)}
          aria-label="Increase quantity"
          className="flex h-8 w-8 items-center justify-center rounded-full border border-orange-500 transition hover:bg-orange-50"
        >
          <AiOutlinePlus size={16} />
        </motion.button>
      </div>

      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.93 }}
        onClick={handleAdd}
        className={`btn-sweep flex items-center gap-2 rounded-full px-4 py-2 text-white transition-colors duration-300 ${
          added ? 'bg-green-500' : 'bg-orange-500'
        }`}
      >
        <AnimatePresence mode="wait" initial={false}>
          {added ? (
            <motion.span
              key="added"
              initial={{ opacity: 0, scale: 0.6 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.6 }}
              className="flex items-center gap-2"
            >
              <IoCheckmarkCircle size={20} /> Added
            </motion.span>
          ) : (
            <motion.span
              key="add"
              initial={{ opacity: 0, scale: 0.6 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.6 }}
              className="flex items-center gap-2"
            >
              <AiOutlineShoppingCart size={20} /> Add to cart
            </motion.span>
          )}
        </AnimatePresence>
      </motion.button>
    </div>
  )
}

export default AddToCart
