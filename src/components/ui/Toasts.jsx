import { AnimatePresence, motion } from 'framer-motion'
import { IoCheckmarkCircle } from 'react-icons/io5'

const Toasts = ({ toasts }) => (
  <div className="pointer-events-none fixed bottom-6 left-1/2 z-[85] flex w-full max-w-sm -translate-x-1/2 flex-col items-center gap-2 px-4">
    <AnimatePresence>
      {toasts.map((toast) => (
        <motion.div
          key={toast.id}
          initial={{ opacity: 0, y: 24, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 10, scale: 0.95 }}
          transition={{ type: 'spring', stiffness: 320, damping: 26 }}
          className="pointer-events-auto flex items-center gap-2 rounded-full bg-zinc-900/95 px-5 py-3 text-sm font-medium text-white shadow-xl"
        >
          <IoCheckmarkCircle className="text-green-400" size={18} />
          {toast.message}
        </motion.div>
      ))}
    </AnimatePresence>
  </div>
)

export default Toasts
