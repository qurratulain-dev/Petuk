import { motion, useTransform } from 'framer-motion'

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
const IngredientField = ({ mx, my }) => (
  <>
    <Ingredient mx={mx} my={my} depth={1.1} top="6%" left="-6%" delay={0.2}>
      <BasilLeaf size={48} />
    </Ingredient>
    <Ingredient mx={mx} my={my} depth={0.6} top="12%" left="78%" delay={0.8}>
      <TomatoSlice size={44} />
    </Ingredient>
    <Ingredient mx={mx} my={my} depth={1.3} top="84%" left="82%" delay={0.6}>
      <Chilli size={42} />
    </Ingredient>
    <Ingredient mx={mx} my={my} depth={0.5} top="42%" left="96%" delay={1}>
      <BasilLeaf size={34} />
    </Ingredient>
  </>
)

export default IngredientField
