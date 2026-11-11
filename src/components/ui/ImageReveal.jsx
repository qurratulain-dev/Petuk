import { useRef } from 'react'
import { motion, useReducedMotion, useScroll, useTransform } from 'framer-motion'
import FoodImage from '../FoodImage'

// Reusable image wrapper: clip-path reveal on scroll + slow hover zoom, with an
// optional scroll parallax. The reveal (outer), parallax (middle) and hover zoom
// (image) live on separate elements so their transforms never conflict.
//
// When parallax is on, an inner layer is scaled to 125% so a +/- parallaxStrength
// px drift can never expose an edge. Keep `parallaxStrength` below ~12% of the
// container height (e.g. <= 46px for a 384px-tall container).
const ImageReveal = ({
  src,
  alt = '',
  className = '',
  imgClassName = '',
  hoverZoom = true,
  cursor,
  radius = '',
  parallax = false,
  parallaxStrength = 40,
}) => {
  const reduce = useReducedMotion()
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] })
  const y = useTransform(scrollYProgress, [0, 1], [parallaxStrength, -parallaxStrength])

  const useParallax = parallax && !reduce

  const image = (
    <FoodImage
      src={src}
      alt={alt}
      data-cursor={cursor}
      className={`h-full w-full object-cover ${
        hoverZoom ? 'transition-transform duration-700 ease-out hover:scale-105' : ''
      } ${imgClassName}`}
    />
  )

  return (
    <motion.div
      ref={ref}
      className={`overflow-hidden ${radius} ${className}`}
      initial={reduce ? false : { opacity: 0, clipPath: 'inset(0 0 100% 0)' }}
      whileInView={{ opacity: 1, clipPath: 'inset(0 0 0% 0)' }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
    >
      {useParallax ? (
        <motion.div style={{ y }} className="h-full w-full">
          <div className="h-full w-full scale-125">{image}</div>
        </motion.div>
      ) : (
        image
      )}
    </motion.div>
  )
}

export default ImageReveal
