import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { AiOutlineMinus, AiOutlinePlus, AiOutlineShoppingCart } from 'react-icons/ai'
import { IoCheckmarkCircle } from 'react-icons/io5'
import { useCart } from '../context/CartContext'

// Quantity stepper + "Add to cart" button used by every product card
const AddToCart = ({ item, className = '' }) => {
  const { addItem } = useCart()
  const [qty, setQty] = useState(1)
  const [added, setAdded] = useState(false)

  useEffect(() => {
    if (!added) return
    const t = setTimeout(() => setAdded(false), 1300)
    return () => clearTimeout(t)
  }, [added])

  const handleAdd = () => {
    addItem(item, qty)
    setQty(1)
    setAdded(true)
  }

  return (
    <div className={`flex items-center gap-4 flex-wrap ${className}`}>
      <div className="flex items-center gap-3">
        <motion.button
          whileTap={{ scale: 0.85 }}
          onClick={() => setQty((q) => Math.max(1, q - 1))}
          aria-label="Decrease quantity"
          className="border border-orange-500 w-8 h-8 rounded-full flex items-center justify-center hover:bg-orange-50 transition"
        >
          <AiOutlineMinus size={16} />
        </motion.button>
        <div className="w-5 text-center overflow-hidden">
          <AnimatePresence mode="popLayout" initial={false}>
            <motion.span
              key={qty}
              initial={{ y: -12, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 12, opacity: 0 }}
              transition={{ duration: 0.15 }}
              className="block text-gray-800 font-medium text-lg"
            >
              {qty}
            </motion.span>
          </AnimatePresence>
        </div>
        <motion.button
          whileTap={{ scale: 0.85 }}
          onClick={() => setQty((q) => q + 1)}
          aria-label="Increase quantity"
          className="border border-orange-500 w-8 h-8 rounded-full flex items-center justify-center hover:bg-orange-50 transition"
        >
          <AiOutlinePlus size={16} />
        </motion.button>
      </div>

      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.93 }}
        onClick={handleAdd}
        className={`flex items-center gap-2 text-white px-4 py-2 rounded-full transition-colors duration-300 ${
          added ? 'bg-green-500' : 'bg-orange-500 hover:bg-black'
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
