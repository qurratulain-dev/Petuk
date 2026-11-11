import { useEffect } from 'react'
import { motion, useMotionValue, useReducedMotion, useSpring, useTransform } from 'framer-motion'
import { AiFillStar } from 'react-icons/ai'
import { TbClockHour4, TbLeaf } from 'react-icons/tb'
import heroImage from '../../assets/hero.webp'
import IngredientField from './Ingredients'

// ---------------------------------------------------------------------------
// Swap the hero picture here.
// HERO_IMAGE_MODE:
//   'float' -> use a transparent PNG/WebP cut-out; the pizza floats freely.
//   'frame' -> use any normal (non-transparent) photo; it is shown inside a
//              circular frame so the square background never looks wrong.
// ---------------------------------------------------------------------------
const HERO_IMAGE = heroImage
const HERO_IMAGE_MODE = 'frame'

const BADGES = [
  { id: 1, icon: <AiFillStar />, title: '4.9 rating', className: 'left-0 top-10', delay: 0.9 },
  { id: 2, icon: <TbClockHour4 />, title: '50 min delivery', className: 'right-0 bottom-16', delay: 1.1 },
  { id: 3, icon: <TbLeaf />, title: '100% fresh', className: 'right-4 top-2', delay: 1.3 },
]

const HeroVisual = () => {
  const reduce = useReducedMotion()
  const rawX = useMotionValue(0)
  const rawY = useMotionValue(0)
  const smoothX = useSpring(rawX, { stiffness: 90, damping: 20 })
  const smoothY = useSpring(rawY, { stiffness: 90, damping: 20 })

  const imageX = useTransform(smoothX, (value) => value * -18)
  const imageY = useTransform(smoothY, (value) => value * -18)
  const ingredientX = useTransform(smoothX, (value) => value * -40)
  const ingredientY = useTransform(smoothY, (value) => value * -40)

  useEffect(() => {
    if (reduce) return undefined
    const handleMove = (event) => {
      rawX.set(event.clientX / window.innerWidth - 0.5)
      rawY.set(event.clientY / window.innerHeight - 0.5)
    }
    window.addEventListener('mousemove', handleMove)
    return () => window.removeEventListener('mousemove', handleMove)
  }, [reduce, rawX, rawY])

  return (
    <div className="relative mx-auto flex w-full max-w-[560px] items-center justify-center py-10">
      <IngredientField mx={ingredientX} my={ingredientY} />

      {/* soft glow + dashed orbit */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ repeat: Infinity, duration: 45, ease: 'linear' }}
        className="absolute h-[86%] w-[86%] rounded-full border-2 border-dashed border-orange-300/60"
      />
      <div className="absolute h-[78%] w-[78%] rounded-full bg-gradient-to-br from-orange-300 via-amber-200 to-orange-100 opacity-60 blur-2xl" />

      <motion.div style={{ x: imageX, y: imageY }} className="relative">
        <motion.div
          animate={{ y: [0, -16, 0] }}
          transition={{ repeat: Infinity, duration: 6, ease: 'easeInOut' }}
        >
          {HERO_IMAGE_MODE === 'float' ? (
            <motion.img
              src={HERO_IMAGE}
              alt="Hot pizza"
              className="w-full max-w-[480px] drop-shadow-2xl"
              animate={reduce ? {} : { rotate: 360 }}
              transition={{ repeat: Infinity, duration: 40, ease: 'linear' }}
            />
          ) : (
            <div className="h-[300px] w-[300px] overflow-hidden rounded-full ring-8 ring-orange-500/20 shadow-2xl sm:h-[400px] sm:w-[400px]">
              <img
                src={HERO_IMAGE}
                alt="Hot pizza"
                className="h-full w-full scale-105 object-cover"
              />
            </div>
          )}
        </motion.div>
      </motion.div>

      {BADGES.map((badge) => (
        <motion.div
          key={badge.id}
          initial={{ opacity: 0, scale: 0.4, y: 10 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ type: 'spring', stiffness: 320, damping: 18, delay: badge.delay }}
          className={`absolute ${badge.className} z-10`}
        >
          <motion.div
            animate={{ y: [0, -6, 0] }}
            transition={{ repeat: Infinity, duration: 3.4, ease: 'easeInOut', delay: badge.delay }}
            className="flex items-center gap-2 rounded-full bg-white/95 px-4 py-2 text-xs font-semibold text-zinc-700 shadow-lg backdrop-blur"
          >
            <span className="text-orange-500">{badge.icon}</span>
            {badge.title}
          </motion.div>
        </motion.div>
      ))}
    </div>
  )
}

export default HeroVisual
