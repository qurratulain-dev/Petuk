import { motion, useReducedMotion } from 'framer-motion'

const EASE = [0.22, 1, 0.36, 1]

// ---------------------------------------------------------------------------
// One shared heading design system for every section.
//
//   eyebrow   -> small uppercase label above the title (optional)
//   title     -> string (split into word-by-word masked reveal) or a node
//   subtitle  -> supporting paragraph (optional)
//   align     -> 'center' | 'left'
//   theme     -> 'light' | 'dark'  (dark = for image/colour backgrounds)
//   as        -> heading tag, default 'h2'
//   bars      -> show the three-bar orange motif
//
// All entrance motion is transform/opacity only and fully disabled under
// prefers-reduced-motion.
// ---------------------------------------------------------------------------
const SectionHeading = ({
  eyebrow,
  title,
  subtitle,
  align = 'center',
  theme = 'light',
  as: Tag = 'h2',
  bars = true,
  className = '',
  subtitleClassName = '',
}) => {
  const reduce = useReducedMotion()
  const centered = align === 'center'
  const dark = theme === 'dark'

  const isString = typeof title === 'string'
  const words = isString ? title.split(' ') : []

  const viewport = { once: true, margin: '-80px' }
  const eyebrowColor = dark ? 'text-orange-300' : 'text-orange-500'
  const titleColor = dark ? 'text-white' : 'text-zinc-800'
  const subtitleColor = dark ? 'text-white/80' : 'text-zinc-500'
  const barColor = dark ? 'bg-orange-300' : 'bg-orange-500'

  return (
    <div
      className={`flex flex-col ${centered ? 'items-center text-center' : 'items-start text-left'} ${className}`}
    >
      {eyebrow && (
        <motion.p
          initial={reduce ? false : { opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={viewport}
          transition={{ duration: 0.5, ease: EASE }}
          className={`mb-3 text-xs font-bold uppercase tracking-[0.25em] ${eyebrowColor}`}
        >
          {eyebrow}
        </motion.p>
      )}

      <Tag
        className={`flex flex-wrap font-bold leading-[1.14] tracking-tight text-3xl sm:text-4xl lg:text-[2.75rem] ${
          centered ? 'justify-center' : 'justify-start'
        } ${titleColor}`}
      >
        {isString
          ? words.map((word, index) => (
              <span key={`${word}-${index}`} className="mr-[0.25em] inline-block overflow-hidden pb-[0.12em]">
                <motion.span
                  initial={reduce ? false : { y: '115%' }}
                  whileInView={{ y: 0 }}
                  viewport={viewport}
                  transition={{ duration: 0.7, ease: EASE, delay: reduce ? 0 : index * 0.06 }}
                  className="inline-block"
                >
                  {word}
                </motion.span>
              </span>
            ))
          : title}
      </Tag>

      {bars && (
        <div className={`mt-4 flex items-center gap-2 ${centered ? 'justify-center' : 'justify-start'}`}>
          {['w-8', 'w-2', 'w-8'].map((width, index) => (
            <motion.span
              key={index}
              initial={reduce ? false : { scaleX: 0, opacity: 0 }}
              whileInView={{ scaleX: 1, opacity: 1 }}
              viewport={viewport}
              transition={{ duration: 0.5, ease: EASE, delay: reduce ? 0 : 0.25 + index * 0.1 }}
              className={`${width} h-1 rounded-full ${barColor}`}
            />
          ))}
        </div>
      )}

      {subtitle && (
        <motion.p
          initial={reduce ? false : { opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={viewport}
          transition={{ duration: 0.6, ease: EASE, delay: reduce ? 0 : 0.3 }}
          className={`mt-4 text-sm leading-relaxed sm:text-base ${
            centered ? 'max-w-2xl' : 'max-w-xl'
          } ${subtitleColor} ${subtitleClassName}`}
        >
          {subtitle}
        </motion.p>
      )}
    </div>
  )
}

export default SectionHeading
