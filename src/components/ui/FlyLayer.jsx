import { motion } from 'framer-motion'

// Renders the small product image that arcs towards the navbar cart icon.
const FlyLayer = ({ flies }) => (
  <div className="pointer-events-none fixed inset-0 z-[80]">
    {flies.map((fly) => {
      const midX = (fly.from.x + fly.to.x) / 2
      const midY = Math.min(fly.from.y, fly.to.y) - 120
      return (
        <motion.img
          key={fly.id}
          src={fly.img}
          alt=""
          style={{ left: 0, top: 0 }}
          className="absolute h-12 w-12 rounded-full object-cover shadow-lg"
          initial={{ x: fly.from.x, y: fly.from.y, scale: 1, opacity: 1 }}
          animate={{
            x: [fly.from.x, midX, fly.to.x],
            y: [fly.from.y, midY, fly.to.y],
            scale: [1, 0.8, 0.25],
            opacity: [1, 1, 0.5],
          }}
          transition={{ duration: 0.9, ease: 'easeInOut' }}
        />
      )
    })}
  </div>
)

export default FlyLayer
