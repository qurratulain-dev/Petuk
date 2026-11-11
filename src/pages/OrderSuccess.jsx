import { useMemo } from 'react'
import { Link, useParams } from 'react-router-dom'
import { motion } from 'framer-motion'
import { TbTruckDelivery } from 'react-icons/tb'
import { GiFullPizza } from 'react-icons/gi'
import Confetti from '../components/order/Confetti'
import TrackingStepper from '../components/order/TrackingStepper'
import FoodImage from '../components/FoodImage'
import AnimatedNumber from '../components/motion/AnimatedNumber'
import { formatOrderDate, getOrderById } from '../utils/orders'
import { formatPrice } from '../utils/format'

const OrderSuccess = () => {
  const { id } = useParams()
  const order = useMemo(() => getOrderById(id), [id])

  if (!order) {
    return (
      <div className="flex min-h-screen flex-col items-center justify-center bg-[#fcfcfc] px-5 pt-20 text-center">
        <motion.div animate={{ rotate: [0, -8, 8, 0] }} transition={{ repeat: Infinity, duration: 3 }}>
          <GiFullPizza size={80} color="coral" />
        </motion.div>
        <h1 className="mt-4 text-2xl font-bold text-zinc-800">Order not found</h1>
        <p className="mt-2 max-w-sm text-sm text-zinc-500">
          We could not find that order. It may have been placed on another device or cleared from this browser.
        </p>
        <Link
          to="/orders"
          className="mt-6 rounded-full bg-orange-500 px-6 py-2.5 text-sm font-semibold text-white hover:bg-orange-600"
        >
          View my orders
        </Link>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-[#fcfcfc] pb-20 pt-[16vh]">
      <Confetti />
      <div className="mx-auto max-w-3xl px-5">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="rounded-3xl border border-zinc-100 bg-white p-6 shadow-xl shadow-orange-100/40 sm:p-10"
        >
          <div className="flex flex-col items-center text-center">
            <svg viewBox="0 0 52 52" className="h-24 w-24">
              <motion.circle
                cx="26"
                cy="26"
                r="24"
                fill="none"
                stroke="#22c55e"
                strokeWidth="3"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 0.7 }}
              />
              <motion.path
                d="M14 27 l8 8 l16 -16"
                fill="none"
                stroke="#22c55e"
                strokeWidth="4"
                strokeLinecap="round"
                strokeLinejoin="round"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 0.45, delay: 0.6 }}
              />
            </svg>

            <motion.h1
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9 }}
              className="mt-5 text-2xl font-bold text-zinc-800 sm:text-3xl"
            >
              Thank you, {order.customer.fullName}!
            </motion.h1>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.05 }}
              className="mt-2 text-sm text-zinc-500"
            >
              Your order <span className="font-semibold text-orange-500">{order.id}</span> is confirmed.
              We are firing up the oven.
            </motion.p>
          </div>

          <TrackingStepper initialStatus={order.status} />

          <div className="mt-8 grid gap-6 sm:grid-cols-2">
            <div className="rounded-2xl bg-amber-50/60 p-5">
              <h3 className="mb-3 text-sm font-semibold uppercase tracking-wide text-zinc-500">
                Delivery to
              </h3>
              <p className="text-sm font-medium text-zinc-800">{order.customer.fullName}</p>
              <p className="text-sm text-zinc-600">
                {order.customer.address}, {order.customer.area}, {order.customer.city}
              </p>
              {order.customer.landmark && (
                <p className="text-xs text-zinc-500">Landmark: {order.customer.landmark}</p>
              )}
              <p className="mt-2 text-sm text-zinc-600">{order.customer.phone}</p>
              <p className="mt-1 flex items-center gap-1 text-xs text-zinc-500">
                <TbTruckDelivery /> {order.customer.deliveryTime}
              </p>
            </div>

            <div className="rounded-2xl bg-amber-50/60 p-5">
              <h3 className="mb-3 text-sm font-semibold uppercase tracking-wide text-zinc-500">
                Order info
              </h3>
              <p className="text-sm text-zinc-600">
                <span className="text-zinc-400">Placed:</span> {formatOrderDate(order.createdAt)}
              </p>
              <p className="text-sm text-zinc-600">
                <span className="text-zinc-400">Payment:</span> {order.paymentMethod}
              </p>
              {order.customer.notes && (
                <p className="mt-1 text-xs text-zinc-500">Notes: {order.customer.notes}</p>
              )}
            </div>
          </div>

          <div className="mt-6 rounded-2xl border border-zinc-100 p-5">
            <h3 className="mb-3 text-sm font-semibold uppercase tracking-wide text-zinc-500">Items</h3>
            <ul className="space-y-3">
              {order.items.map((item) => (
                <li key={item.id} className="flex items-center gap-3">
                  <div className="h-12 w-12 shrink-0 overflow-hidden rounded-lg">
                    <FoodImage src={item.img} alt={item.name} className="h-full w-full object-cover" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <p className="truncate text-sm font-medium text-zinc-800">{item.name}</p>
                    <p className="text-xs text-zinc-500">Qty {item.qty}</p>
                  </div>
                  <p className="text-sm font-semibold text-zinc-700">
                    {formatPrice(item.price * item.qty)}
                  </p>
                </li>
              ))}
            </ul>
            <div className="mt-4 flex justify-between border-t border-zinc-100 pt-3 text-sm text-zinc-500">
              <span>Delivery fee</span>
              <span>{formatPrice(order.deliveryFee)}</span>
            </div>
            <div className="mt-1 flex items-center justify-between text-base font-semibold text-zinc-800">
              <span>Total</span>
              <span className="text-orange-500">
                <AnimatedNumber value={order.total} />
              </span>
            </div>
          </div>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:justify-center">
            <Link
              to="/shop"
              className="rounded-full bg-orange-500 px-6 py-2.5 text-center text-sm font-semibold text-white shadow-lg shadow-orange-300/40 hover:bg-orange-600"
            >
              Order more
            </Link>
            <Link
              to="/orders"
              className="rounded-full border border-orange-500 px-6 py-2.5 text-center text-sm font-semibold text-orange-500 hover:bg-orange-50"
            >
              View my orders
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  )
}

export default OrderSuccess
