import React from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { Link, useNavigate } from 'react-router-dom'
import { AiOutlineMinus, AiOutlinePlus, AiOutlineDelete } from 'react-icons/ai'
import { GiFullPizza } from 'react-icons/gi'
import FoodImage from '../../components/FoodImage'
import AnimatedNumber from '../../components/motion/AnimatedNumber'
import { useCart } from '../../context/CartContext'
import { FREE_DELIVERY_THRESHOLD, formatPrice, getDeliveryFee } from '../../utils/format'

const CartItem = () => {
    const { items, subtotal, setQty, removeItem } = useCart()
    const navigate = useNavigate()
    const delivery = items.length ? getDeliveryFee(subtotal) : 0
    const total = subtotal + delivery
    const remaining = Math.max(FREE_DELIVERY_THRESHOLD - subtotal, 0)
    const progress = Math.min(subtotal / FREE_DELIVERY_THRESHOLD, 1)

    // empty cart
    if (items.length === 0) {
        return (
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className='max-w-md mx-auto px-5 py-20 text-center'
            >
                <motion.div animate={{ rotate: [0, -10, 10, 0] }} transition={{ repeat: Infinity, duration: 3 }} className='inline-block'>
                    <GiFullPizza size={80} color='coral' />
                </motion.div>
                <h2 className='text-2xl font-bold text-zinc-800 mt-4'>Your cart is empty</h2>
                <p className='text-zinc-500 text-sm mt-2'>Looks like you haven't picked anything delicious yet.</p>
                <Link to="/shop" className='inline-block mt-6 bg-orange-500 text-white px-6 py-2 rounded-full hover:bg-orange-600 transition'>
                    Browse the menu
                </Link>
            </motion.div>
        )
    }

    return (
        <div className='max-w-6xl mx-auto px-5 py-5 mt-10 flex justify-center items-start gap-8 flex-col lg:flex-row lg:gap-10'>
            <div className='w-full lg:basis-[70%]'>
                <div className="mb-3 hidden grid-cols-[100px_minmax(0,1.5fr)_0.8fr_1.2fr_1fr_auto] text-xs font-semibold sm:grid lg:text-sm">
                    <p>Items</p>
                    <p>Title</p>
                    <p>Price</p>
                    <p>Quantity</p>
                    <p>Total</p>
                    <p>Remove</p>
                </div>
                <hr className="mb-2" />
                <AnimatePresence initial={false}>
                    {items.map((item) => (
                        <motion.div
                            key={item.id}
                            layout
                            initial={{ opacity: 0, x: -30 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: 60, transition: { duration: 0.25 } }}
                            className="grid grid-cols-[64px_minmax(0,1fr)_auto] items-center gap-x-3 gap-y-2 border-b border-gray-200 py-3 text-xs sm:grid-cols-[100px_minmax(0,1.5fr)_0.8fr_1.2fr_1fr_auto] sm:gap-2 lg:text-base"
                        >
                            <div className="row-span-2 h-16 w-16 overflow-hidden rounded sm:row-span-1 sm:h-20 sm:w-20 lg:h-[100px] lg:w-[100px]">
                                <FoodImage src={item.img} alt={item.name} className="w-full h-full object-cover" />
                            </div>
                            <div className="col-start-2 row-start-1 min-w-0 sm:col-auto sm:row-auto">
                                <p className="truncate pr-1 font-medium text-gray-600">{item.name}</p>
                                <p className="mt-1 text-[11px] text-gray-500 sm:hidden">{formatPrice(item.price)} each</p>
                            </div>
                            <p className="hidden text-gray-600 sm:block">{formatPrice(item.price)}</p>
                            <div className="col-start-2 row-start-2 flex items-center gap-1 sm:col-auto sm:row-auto lg:gap-2">
                                <motion.button whileTap={{ scale: 0.85 }} onClick={() => setQty(item.id, item.qty - 1)}
                                    aria-label="Decrease quantity"
                                    className="border border-orange-500 w-6 h-6 lg:w-7 lg:h-7 rounded-full flex items-center justify-center hover:bg-orange-50 transition">
                                    <AiOutlineMinus size={14} />
                                </motion.button>
                                <span className="text-gray-800 font-medium w-4 text-center">{item.qty}</span>
                                <motion.button whileTap={{ scale: 0.85 }} onClick={() => setQty(item.id, item.qty + 1)}
                                    aria-label="Increase quantity"
                                    className="border border-orange-500 w-6 h-6 lg:w-7 lg:h-7 rounded-full flex items-center justify-center hover:bg-orange-50 transition">
                                    <AiOutlinePlus size={14} />
                                </motion.button>
                            </div>
                            <p className="col-start-3 row-start-2 whitespace-nowrap text-right font-semibold sm:col-auto sm:row-auto"><AnimatedNumber value={item.price * item.qty} /></p>
                            <motion.button whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.8 }} onClick={() => removeItem(item.id)}
                                aria-label={`Remove ${item.name}`}
                                className="col-start-3 row-start-1 justify-self-end cursor-pointer text-red-500 hover:text-red-700 sm:col-auto sm:row-auto">
                                <AiOutlineDelete size={20} />
                            </motion.button>
                        </motion.div>
                    ))}
                </AnimatePresence>
            </div>

            {/* checkout */}
            <motion.div
                initial={{ opacity: 0, x: 40 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 }}
                className="w-full bg-gray-50 p-5 rounded-md shadow-md lg:sticky lg:top-24 lg:basis-[30%]"
            >
                <h2 className="text-lg font-semibold mb-4">Cart Total</h2>
                <div className="mb-4 rounded-lg bg-orange-50 p-3">
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
                <div className="flex justify-between text-gray-500 mb-2">
                    <p>SubTotal</p>
                    <AnimatedNumber value={subtotal} />
                </div>
                <div className="flex justify-between text-gray-500 mb-2">
                    <p>Delivery fee</p>
                    <p>{delivery === 0 ? 'Free' : formatPrice(delivery)}</p>
                </div>
                <hr className="my-3" />
                <div className="flex justify-between text-gray-800 font-semibold mb-4">
                    <p>Total</p>
                    <b><AnimatedNumber value={total} /></b>
                </div>
                <motion.button
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.97 }}
                    onClick={() => navigate('/checkout')}
                    className="btn-sweep w-full bg-orange-500 text-white py-3 rounded-md hover:bg-orange-600 transition-colors"
                >
                    Proceed to Checkout
                </motion.button>
            </motion.div>
        </div>
    )
}

export default CartItem
