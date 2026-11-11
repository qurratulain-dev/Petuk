import React, { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { AiOutlineMinus, AiOutlinePlus, AiOutlineDelete } from 'react-icons/ai'
import { GiFullPizza } from 'react-icons/gi'
import FoodImage from '../../components/FoodImage'
import AnimatedNumber from '../../components/motion/AnimatedNumber'
import { useCart } from '../../context/CartContext'
import { DELIVERY_FEE, formatPrice } from '../../utils/format'

const CartItem = () => {
    const { items, subtotal, setQty, removeItem, clear } = useCart()
    const [placed, setPlaced] = useState(false)
    const delivery = items.length ? DELIVERY_FEE : 0
    const total = subtotal + delivery

    const placeOrder = () => {
        clear()
        setPlaced(true)
    }

    // order success screen
    if (placed) {
        return (
            <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className='max-w-md mx-auto px-5 py-20 text-center'
            >
                <svg viewBox="0 0 52 52" className='w-24 h-24 mx-auto'>
                    <motion.circle cx="26" cy="26" r="24" fill="none" stroke="#22c55e" strokeWidth="3"
                        initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 0.6 }} />
                    <motion.path d="M14 27 l8 8 l16 -16" fill="none" stroke="#22c55e" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"
                        initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 0.4, delay: 0.5 }} />
                </svg>
                <motion.h2 initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.8 }}
                    className='text-2xl font-bold text-zinc-800 mt-6'>Order placed!</motion.h2>
                <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1 }}
                    className='text-zinc-500 text-sm mt-2'>Your hot pizza is on its way. Estimated delivery: 50 minutes.</motion.p>
                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.2 }}>
                    <Link to="/shop" className='inline-block mt-6 bg-orange-500 text-white px-6 py-2 rounded-full hover:bg-orange-600 transition'>
                        Order more
                    </Link>
                </motion.div>
            </motion.div>
        )
    }

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
        <div className='max-w-6xl mx-auto px-5 py-5 mt-10 flex justify-center items-start gap-10 flex-col md:flex-row'>
            <div className='md:basis-[70%] w-full'>
                <div className="grid grid-cols-[1fr_1.5fr_1fr_1fr_1fr_0.5fr] text-xs lg:text-sm font-semibold mb-3">
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
                            className="grid grid-cols-[1fr_1.5fr_1fr_1fr_1fr_0.5fr] items-center gap-1 border-b border-gray-200 py-3 text-xs lg:text-base"
                        >
                            <div className="w-[70px] h-[70px] lg:w-[100px] lg:h-[100px] overflow-hidden rounded">
                                <FoodImage src={item.img} alt={item.name} className="w-full h-full object-cover" />
                            </div>
                            <p className="text-gray-600 font-medium pr-1">{item.name}</p>
                            <p className="text-gray-600">{formatPrice(item.price)}</p>
                            <div className="flex items-center gap-1 lg:gap-2">
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
                            <p className="font-semibold"><AnimatedNumber value={item.price * item.qty} /></p>
                            <motion.button whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.8 }} onClick={() => removeItem(item.id)}
                                aria-label={`Remove ${item.name}`}
                                className="cursor-pointer text-red-500 hover:text-red-700">
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
                className="md:basis-[30%] w-full bg-gray-50 p-5 rounded-md shadow-md md:sticky md:top-[16vh]"
            >
                <h2 className="text-lg font-semibold mb-4">Cart Total</h2>
                <div className="flex justify-between text-gray-500 mb-2">
                    <p>SubTotal</p>
                    <AnimatedNumber value={subtotal} />
                </div>
                <div className="flex justify-between text-gray-500 mb-2">
                    <p>Delivery fee</p>
                    <p>{formatPrice(delivery)}</p>
                </div>
                <hr className="my-3" />
                <div className="flex justify-between text-gray-800 font-semibold mb-4">
                    <p>Total</p>
                    <b><AnimatedNumber value={total} /></b>
                </div>
                <motion.button
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.97 }}
                    onClick={placeOrder}
                    className="w-full bg-orange-500 text-white py-3 rounded-md hover:bg-orange-600 transition-colors"
                >
                    Proceed to Checkout
                </motion.button>
            </motion.div>
        </div>
    )
}

export default CartItem
