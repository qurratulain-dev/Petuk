import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { TbFlame } from 'react-icons/tb'

const NotFound = () => (
  <div className="flex min-h-screen flex-col items-center justify-center bg-[#fcfcfc] px-5 pt-20 text-center">
    <motion.div
      animate={{ rotate: [0, -6, 6, 0], y: [0, -10, 0] }}
      transition={{ repeat: Infinity, duration: 4, ease: 'easeInOut' }}
      className="relative text-[7rem] leading-none"
      aria-hidden="true"
    >
      🍕
      <motion.span
        animate={{ y: [0, -14, 0], opacity: [0.7, 1, 0.7] }}
        transition={{ repeat: Infinity, duration: 1.6 }}
        className="absolute -top-6 left-1/2 -translate-x-1/2 text-orange-400"
      >
        <TbFlame size={40} />
      </motion.span>
    </motion.div>

    <motion.h1
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      className="mt-4 text-4xl font-extrabold text-zinc-800"
    >
      404
    </motion.h1>
    <motion.p
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.15 }}
      className="mt-2 max-w-sm text-sm text-zinc-500"
    >
      Looks like this slice got burnt. The page you are looking for is not on the menu.
    </motion.p>

    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.3 }}
      className="mt-6 flex flex-col gap-3 sm:flex-row"
    >
      <Link
        to="/"
        className="rounded-full bg-orange-500 px-6 py-2.5 text-sm font-semibold text-white shadow-lg shadow-orange-300/40 hover:bg-orange-600"
      >
        Back to home
      </Link>
      <Link
        to="/shop"
        className="rounded-full border border-orange-500 px-6 py-2.5 text-sm font-semibold text-orange-500 hover:bg-orange-50"
      >
        Browse menu
      </Link>
    </motion.div>
  </div>
)

export default NotFound
