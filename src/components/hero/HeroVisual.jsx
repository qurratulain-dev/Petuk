import { forwardRef } from 'react'
import pizza from '../../assets/pizza.webp'

// The single shared pizza used across the whole hero journey.
//
// Two transform channels are kept deliberately separate so they never fight:
//   - `ref`        -> outer wrapper. GSAP drives x / y / scale / rotate here
//                     to travel the pizza from the hero slot onto the plate.
//   - `floatRef`   -> inner wrapper. GSAP drives the entrance + idle float
//                     (y / rotate / scale / opacity) so the two never conflict.
//
// The wrapper is `aspect-square` with a viewport-based width so its measured
// size is correct even before the image finishes loading.
const HeroVisual = forwardRef(function HeroVisual({ floatRef, className = '' }, ref) {
  return (
    <div
      ref={ref}
      className={`pointer-events-none absolute left-0 top-0 z-30 aspect-square w-[min(78vw,440px)] will-change-transform ${className}`}
    >
      <div ref={floatRef} className="h-full w-full will-change-transform">
        <img
          src={pizza}
          alt="Freshly baked Petuk pizza"
          draggable="false"
          className="h-full w-full object-contain drop-shadow-[0_35px_45px_rgba(120,53,15,0.30)]"
        />
      </div>
    </div>
  )
})

export default HeroVisual
