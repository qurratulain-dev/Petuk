import { motion, useReducedMotion } from 'framer-motion'
import FoodImage from '../FoodImage'

// Reusable image wrapper: clip-path reveal on scroll + slow hover zoom.
const ImageReveal = ({
  src,
  alt = '',
  className = '',
  imgClassName = '',
  hoverZoom = true,
  cursor,
  radius = '',
}) => {
  const reduce = useReducedMotion()

  return (
    <motion.div
      className={`overflow-hidden ${radius} ${className}`}
      initial={reduce ? false : { opacity: 0, clipPath: 'inset(0 0 100% 0)' }}
      whileInView={{ opacity: 1, clipPath: 'inset(0 0 0% 0)' }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
    >
      <FoodImage
        src={src}
        alt={alt}
        data-cursor={cursor}
        className={`h-full w-full object-cover ${
          hoverZoom ? 'transition-transform duration-700 ease-out hover:scale-[1.08]' : ''
        } ${imgClassName}`}
      />
    </motion.div>
  )
}

export default ImageReveal
