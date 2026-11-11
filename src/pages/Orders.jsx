import { useMemo } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { GiFullPizza } from 'react-icons/gi'
import { TbReceipt } from 'react-icons/tb'
import Heading from '../components/Heading'
import { formatOrderDate, getOrders } from '../utils/orders'
import { formatPrice } from '../utils/format'

const Orders = () => {
  const orders = useMemo(() => getOrders(), [])
  const sorted = useMemo(
    () => [...orders].sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt)),
    [orders]
  )

  return (
    <div className="min-h-screen bg-[#fcfcfc] pb-20 pt-[16vh]">
      <div className="mx-auto max-w-4xl px-5">
        <div className="flex flex-col items-start">
          <Heading title="My Orders" />
        </div>

        {sorted.length === 0 ? (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mt-10 flex flex-col items-center rounded-3xl border border-dashed border-orange-300 bg-white px-5 py-16 text-center"
          >
            <motion.div animate={{ rotate: [0, -8, 8, 0] }} transition={{ repeat: Infinity, duration: 3 }}>
              <GiFullPizza size={72} color="coral" />
            </motion.div>
            <h2 className="mt-4 text-xl font-bold text-zinc-800">No orders yet</h2>
            <p className="mt-2 max-w-sm text-sm text-zinc-500">
              Your delicious history will show up here once you place your first order.
            </p>
            <Link
              to="/shop"
              className="mt-6 rounded-full bg-orange-500 px-6 py-2.5 text-sm font-semibold text-white hover:bg-orange-600"
            >
              Browse the menu
            </Link>
          </motion.div>
        ) : (
          <motion.ul
            initial="hidden"
            animate="show"
            variants={{ hidden: {}, show: { transition: { staggerChildren: 0.08 } } }}
            className="mt-8 space-y-4"
          >
            {sorted.map((order) => (
              <motion.li
                key={order.id}
                variants={{
                  hidden: { opacity: 0, y: 24 },
                  show: { opacity: 1, y: 0, transition: { duration: 0.45, ease: [0.22, 1, 0.36, 1] } },
                }}
              >
                <Link
                  to={`/order-success/${order.id}`}
                  className="group flex flex-col gap-3 rounded-2xl border border-zinc-100 bg-white p-5 shadow-sm transition-shadow hover:shadow-lg sm:flex-row sm:items-center sm:justify-between"
                >
                  <div className="flex items-start gap-3">
                    <span className="flex h-11 w-11 items-center justify-center rounded-full bg-orange-100 text-orange-500">
                      <TbReceipt size={22} />
                    </span>
                    <div>
                      <p className="text-sm font-semibold text-zinc-800">{order.id}</p>
                      <p className="text-xs text-zinc-500">{formatOrderDate(order.createdAt)}</p>
                      <p className="mt-1 text-xs text-zinc-500">
                        {order.items.reduce((n, item) => n + item.qty, 0)} items ·{' '}
                        {order.items.map((item) => item.name).slice(0, 2).join(', ')}
                        {order.items.length > 2 ? '…' : ''}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center justify-between gap-4 sm:flex-col sm:items-end">
                    <p className="text-base font-bold text-orange-500">{formatPrice(order.total)}</p>
                    <span className="rounded-full bg-green-100 px-3 py-0.5 text-[11px] font-medium text-green-700">
                      {order.status === 'delivered' ? 'Delivered' : 'Active'}
                    </span>
                  </div>
                </Link>
              </motion.li>
            ))}
          </motion.ul>
        )}
      </div>
    </div>
  )
}

export default Orders
