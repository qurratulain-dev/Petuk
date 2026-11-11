import { motion, useMotionValue, useTransform } from 'framer-motion'

export const BasilLeaf = ({ size = 44, className = '' }) => (
  <svg width={size} height={size} viewBox="0 0 48 48" className={className} aria-hidden="true">
    <path
      d="M24 3C15 9 7 18 9 31c1 8 8 14 16 14 3 0 6-1 8-3-2 4-6 6-11 6 10 2 19-4 21-14 2-13-8-24-19-31Z"
      fill="#4ade80"
    />
    <path d="M24 8c-4 9-6 18-5 34" stroke="#16a34a" strokeWidth="1.5" fill="none" />
  </svg>
)

export const TomatoSlice = ({ size = 46, className = '' }) => (
  <svg width={size} height={size} viewBox="0 0 48 48" className={className} aria-hidden="true">
    <circle cx="24" cy="24" r="21" fill="#ef4444" />
    <circle cx="24" cy="24" r="16" fill="#fca5a5" />
    <circle cx="24" cy="24" r="10" fill="#f87171" />
    <g fill="#fde68a">
      <ellipse cx="24" cy="16" rx="2.4" ry="3.4" />
      <ellipse cx="31" cy="27" rx="2.4" ry="3.4" transform="rotate(72 31 27)" />
      <ellipse cx="17" cy="27" rx="2.4" ry="3.4" transform="rotate(-72 17 27)" />
    </g>
  </svg>
)

export const Chilli = ({ size = 40, className = '' }) => (
  <svg width={size} height={size} viewBox="0 0 48 48" className={className} aria-hidden="true">
    <path
      d="M30 8c2 6 0 12-4 17-5 6-12 9-19 7 6-2 10-6 13-12 3-5 5-11 10-12Z"
      fill="#dc2626"
    />
    <path d="M30 8c1-3 3-5 6-5" stroke="#16a34a" strokeWidth="3" fill="none" strokeLinecap="round" />
  </svg>
)

export const Mozzarella = ({ size = 44, className = '' }) => (
  <svg width={size} height={size} viewBox="0 0 48 48" className={className} aria-hidden="true">
    <circle cx="24" cy="24" r="19" fill="#fffaf0" stroke="#f3e6cf" strokeWidth="2" />
    <circle cx="18" cy="19" r="4.2" fill="#fdf2dd" />
    <circle cx="30" cy="27" r="3.4" fill="#fdf2dd" />
    <circle cx="21" cy="31" r="2.6" fill="#fdf2dd" />
    <ellipse cx="29" cy="16" rx="3" ry="1.8" fill="#ffffff" />
  </svg>
)

export const SauceDrop = ({ size = 44, className = '' }) => (
  <svg width={size} height={size} viewBox="0 0 48 48" className={className} aria-hidden="true">
    <path d="M24 5c6 9 12 15 12 23a12 12 0 0 1-24 0c0-8 6-14 12-23Z" fill="#dc2626" />
    <path d="M24 12c3.6 6 7 10 7 15a7 7 0 0 1-14 0c0-5 3.4-9 7-15Z" fill="#f87171" />
    <ellipse cx="20" cy="30" rx="2.4" ry="3.4" fill="#fecaca" />
  </svg>
)

const Ingredient = ({ mx, my, depth, top, left, delay = 0, float = 12, children }) => {
  const x = useTransform(mx, (value) => value * depth)
  const y = useTransform(my, (value) => value * depth)

  return (
    <motion.div style={{ x, y, top, left }} className="pointer-events-none absolute select-none">
      <motion.div
        animate={{ y: [0, -float, 0], rotate: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 4 + depth * 2, ease: 'easeInOut', delay }}
      >
        {children}
      </motion.div>
    </motion.div>
  )
}

// Decorative floating ingredients that drift at different parallax depths.
// Mouse parallax values are optional; without them the field simply floats.
const IngredientField = ({ mx, my }) => {
  const zero = useMotionValue(0)
  const px = mx || zero
  const py = my || zero

  return (
    <>
      <Ingredient mx={px} my={py} depth={1.1} top="6%" left="-6%" delay={0.2}>
        <BasilLeaf size={48} />
      </Ingredient>
      <Ingredient mx={px} my={py} depth={0.6} top="12%" left="78%" delay={0.8}>
        <TomatoSlice size={44} />
      </Ingredient>
      <Ingredient mx={px} my={py} depth={1.3} top="84%" left="82%" delay={0.6}>
        <Chilli size={42} />
      </Ingredient>
      <Ingredient mx={px} my={py} depth={0.5} top="42%" left="96%" delay={1}>
        <BasilLeaf size={34} />
      </Ingredient>
    </>
  )
}

export default IngredientField
