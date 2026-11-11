import { useEffect, useRef, useState } from 'react'
import { animate } from 'framer-motion'
import { formatPrice } from '../../utils/format'

// Counts smoothly from the previous value to the new one
const AnimatedNumber = ({ value }) => {
  const [display, setDisplay] = useState(value)
  const prev = useRef(value)

  useEffect(() => {
    const controls = animate(prev.current, value, {
      duration: 0.5,
      ease: 'easeOut',
      onUpdate: (v) => setDisplay(Math.round(v)),
    })
    prev.current = value
    return () => controls.stop()
  }, [value])

  return <span>{formatPrice(display)}</span>
}

export default AnimatedNumber
