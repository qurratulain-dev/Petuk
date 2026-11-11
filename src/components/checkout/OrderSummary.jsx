import { motion } from 'framer-motion'
import FoodImage from '../FoodImage'
import AnimatedNumber from '../motion/AnimatedNumber'
import { formatPrice } from '../../utils/format'

// Sticky order summary shared by the checkout page.
const OrderSummary = ({ items, subtotal, deliveryFee, total, title = 'Order summary' }) => (
  <div className="rounded-2xl border border-zinc-100 bg-white p-5 shadow-lg shadow-orange-100/50">
    <h2 className="mb-4 text-lg font-semibold text-zinc-800">{title}</h2>

    <ul className="max-h-[46vh] space-y-3 overflow-y-auto pr-1">
      {items.map((item) => (
        <motion.li
          key={item.id}
          layout
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex items-center gap-3"
        >
          <div className="h-14 w-14 shrink-0 overflow-hidden rounded-lg">
            <FoodImage src={item.img} alt={item.name} className="h-full w-full object-cover" />
          </div>
          <div className="min-w-0 flex-1">
            <p className="truncate text-sm font-medium text-zinc-800">{item.name}</p>
            <p className="text-xs text-zinc-500">Qty {item.qty}</p>
          </div>
          <p className="whitespace-nowrap text-sm font-semibold text-zinc-700">
            {formatPrice(item.price * item.qty)}
          </p>
        </motion.li>
      ))}
    </ul>

    <hr className="my-4 border-zinc-100" />

    <div className="flex justify-between text-sm text-zinc-500">
      <p>Subtotal</p>
      <AnimatedNumber value={subtotal} />
    </div>
    <div className="mt-2 flex justify-between text-sm text-zinc-500">
      <p>Delivery fee</p>
      <p>{formatPrice(deliveryFee)}</p>
    </div>

    <hr className="my-4 border-zinc-100" />

    <div className="flex items-center justify-between text-base font-semibold text-zinc-800">
      <p>Total</p>
      <b className="text-orange-500">
        <AnimatedNumber value={total} />
      </b>
    </div>
  </div>
)

export default OrderSummary
