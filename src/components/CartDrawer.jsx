import { useEffect } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { Link, useNavigate } from 'react-router-dom'
import { AiOutlineMinus, AiOutlinePlus, AiOutlineDelete, AiOutlineClose } from 'react-icons/ai'
import { GiFullPizza } from 'react-icons/gi'
import FoodImage from './FoodImage'
import AnimatedNumber from './motion/AnimatedNumber'
import { useCart } from '../context/CartContext'
import { useCartUI } from '../context/CartUIContext'
import { FREE_DELIVERY_THRESHOLD, formatPrice, getDeliveryFee } from '../utils/format'

const CartDrawer = () => {
  const { isOpen, closeCart } = useCartUI()
  const { items, subtotal, setQty, removeItem } = useCart()
  const navigate = useNavigate()

  const deliveryFee = items.length ? getDeliveryFee(subtotal) : 0
  const total = subtotal + deliveryFee
  const remaining = Math.max(FREE_DELIVERY_THRESHOLD - subtotal, 0)
  const progress = Math.min(subtotal / FREE_DELIVERY_THRESHOLD, 1)

  useEffect(() => {
    if (!isOpen) return
    const previous = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    return () => {
      document.body.style.overflow = previous
    }
  }, [isOpen])

  const goToCheckout = () => {
    closeCart()
    navigate('/checkout')
  }

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            key="cart-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeCart}
            className="fixed inset-0 z-[75] bg-black/40 backdrop-blur-sm"
          />
          <motion.aside
            key="cart-panel"
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', stiffness: 320, damping: 34 }}
            className="fixed right-0 top-0 z-[76] flex h-full w-full max-w-md flex-col bg-[#fcfcfc] shadow-2xl"
            aria-label="Shopping cart"
          >
            <div className="flex items-center justify-between border-b border-zinc-200 px-5 py-4">
              <h2 className="flex items-center gap-2 text-lg font-bold text-zinc-800">
                <GiFullPizza className="text-orange-500" /> Your cart
              </h2>
              <button
                onClick={closeCart}
                aria-label="Close cart"
                className="rounded-full p-1 text-zinc-500 hover:bg-zinc-100 hover:text-zinc-800"
              >
                <AiOutlineClose size={24} />
              </button>
            </div>

            {items.length === 0 ? (
              <div className="flex flex-1 flex-col items-center justify-center px-5 text-center">
                <GiFullPizza size={64} color="coral" />
                <p className="mt-4 text-lg font-semibold text-zinc-800">Your cart is empty</p>
                <p className="mt-1 text-sm text-zinc-500">Add something delicious to get started.</p>
                <Link
                  to="/shop"
                  onClick={closeCart}
                  className="mt-5 rounded-full bg-orange-500 px-6 py-2 text-sm font-semibold text-white hover:bg-orange-600"
                >
                  Browse menu
                </Link>
              </div>
            ) : (
              <>
                <div className="flex-1 overflow-y-auto px-5 py-4">
                  <div className="mb-4 rounded-xl bg-orange-50 p-3">
                    <p className="text-xs text-zinc-600">
                      {remaining > 0
                        ? `Add ${formatPrice(remaining)} more for free delivery`
                        : 'You unlocked free delivery!'}
                    </p>
                    <div className="mt-2 h-2 overflow-hidden rounded-full bg-orange-100">
                      <motion.div
                        className="h-full origin-left rounded-full bg-orange-500"
                        animate={{ scaleX: progress || 0.001 }}
                        transition={{ type: 'spring', stiffness: 120, damping: 20 }}
                        style={{ width: '100%' }}
                      />
                    </div>
                  </div>

                  <ul className="space-y-4">
                    <AnimatePresence initial={false}>
                      {items.map((item) => (
                        <motion.li
                          key={item.id}
                          layout
                          initial={{ opacity: 0, x: 30 }}
                          animate={{ opacity: 1, x: 0 }}
                          exit={{ opacity: 0, x: 40 }}
                          className="flex gap-3"
                        >
                          <div className="h-16 w-16 shrink-0 overflow-hidden rounded-lg">
                            <FoodImage src={item.img} alt={item.name} className="h-full w-full object-cover" />
                          </div>
                          <div className="min-w-0 flex-1">
                            <p className="truncate text-sm font-semibold text-zinc-800">{item.name}</p>
                            <p className="text-xs text-zinc-500">{formatPrice(item.price)}</p>
                            <div className="mt-1 flex items-center gap-2">
                              <button
                                onClick={() => setQty(item.id, item.qty - 1)}
                                aria-label="Decrease quantity"
                                className="flex h-6 w-6 items-center justify-center rounded-full border border-orange-500 hover:bg-orange-50"
                              >
                                <AiOutlineMinus size={12} />
                              </button>
                              <span className="w-5 text-center text-sm">{item.qty}</span>
                              <button
                                onClick={() => setQty(item.id, item.qty + 1)}
                                aria-label="Increase quantity"
                                className="flex h-6 w-6 items-center justify-center rounded-full border border-orange-500 hover:bg-orange-50"
                              >
                                <AiOutlinePlus size={12} />
                              </button>
                              <button
                                onClick={() => removeItem(item.id)}
                                aria-label={`Remove ${item.name}`}
                                className="ml-auto text-red-500 hover:text-red-700"
                              >
                                <AiOutlineDelete size={18} />
                              </button>
                            </div>
                          </div>
                          <p className="whitespace-nowrap text-sm font-semibold text-zinc-700">
                            {formatPrice(item.price * item.qty)}
                          </p>
                        </motion.li>
                      ))}
                    </AnimatePresence>
                  </ul>
                </div>

                <div className="border-t border-zinc-200 px-5 py-4">
                  <div className="flex justify-between text-sm text-zinc-500">
                    <span>Subtotal</span>
                    <AnimatedNumber value={subtotal} />
                  </div>
                  <div className="mt-1 flex justify-between text-sm text-zinc-500">
                    <span>Delivery</span>
                    <span>{deliveryFee === 0 ? 'Free' : formatPrice(deliveryFee)}</span>
                  </div>
                  <div className="mt-2 flex items-center justify-between text-base font-bold text-zinc-800">
                    <span>Total</span>
                    <span className="text-orange-500">
                      <AnimatedNumber value={total} />
                    </span>
                  </div>
                  <button
                    onClick={goToCheckout}
                    className="mt-4 w-full rounded-full bg-orange-500 py-3 text-sm font-semibold text-white shadow-lg shadow-orange-300/40 hover:bg-orange-600"
                  >
                    Checkout · {formatPrice(total)}
                  </button>
                  <Link
                    to="/cart"
                    onClick={closeCart}
                    className="mt-2 block text-center text-xs font-medium text-zinc-500 hover:text-orange-500"
                  >
                    View full cart
                  </Link>
                </div>
              </>
            )}
          </motion.aside>
        </>
      )}
    </AnimatePresence>
  )
}

export default CartDrawer
